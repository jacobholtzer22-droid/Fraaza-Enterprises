import { NextResponse } from "next/server";
import { contactFormSchemaWithPhone } from "@/lib/contactSchema";

export const runtime = "nodejs";

/**
 * MissedCall AI CRM — the sole notifier for leads from this site (owner email +
 * SMS are sent by the CRM, not here). Both values fall back to the known-good
 * production settings on purpose: a missing env var must never silently disable
 * lead delivery, which is exactly how leads were lost from May–June 2026.
 */
const CRM_BASE_URL = process.env.CRM_BASE_URL?.trim() || "https://www.alignandacquire.com";
const CRM_BUSINESS_SLUG = process.env.CRM_BUSINESS_SLUG?.trim() || "fraaza-enterprises-inc";

const CRM_MAX_ATTEMPTS = 3;
/** Waits between attempts; length must be CRM_MAX_ATTEMPTS - 1. */
const CRM_RETRY_DELAYS_MS = [300, 800];
/** Per-attempt ceiling. Without it, three hung attempts outlive the function. */
const CRM_ATTEMPT_TIMEOUT_MS = 5000;

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Forward the lead to the CRM, retrying only failures a retry can actually fix:
 * network throws (the TLS/socket drops seen in production) and 5xx responses.
 * A 4xx means the payload is wrong and will fail identically on every attempt.
 * A 200 whose body lacks success:true means the CRM took the request but
 * discarded the lead (e.g. unknown slug) — deterministic, so also not retried.
 *
 * Each attempt is capped by CRM_ATTEMPT_TIMEOUT_MS; an abort surfaces as a
 * throw, so a hung CRM is retried like any other network failure.
 */
async function forwardLeadToCrm(
  target: string,
  payload: Record<string, unknown>,
): Promise<{ ok: true } | { ok: false; detail: Record<string, unknown> }> {
  let last: Record<string, unknown> = { reason: "no attempt made" };

  for (let attempt = 1; attempt <= CRM_MAX_ATTEMPTS; attempt++) {
    let retryable: boolean;

    try {
      const res = await fetch(target, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(CRM_ATTEMPT_TIMEOUT_MS),
      });

      const body = await res.text().catch(() => "");

      // The CRM answers 200 even when it drops a lead it can't attribute, so a
      // status check alone is not enough — confirm it actually accepted it.
      if (res.ok && body.includes('"success":true')) return { ok: true };

      retryable = res.status >= 500;
      last = {
        reason: res.ok ? "200 but lead not accepted" : "rejected",
        status: res.status,
        body: body.slice(0, 300),
      };
    } catch (err) {
      retryable = true;
      last = {
        reason: "fetch threw",
        message: err instanceof Error ? err.message : String(err),
        cause: err instanceof Error && err.cause ? String(err.cause) : undefined,
      };
    }

    console.error(`[CRM-Sync] attempt ${attempt}/${CRM_MAX_ATTEMPTS} failed`, {
      target,
      retryable,
      ...last,
    });

    if (!retryable) break;

    const delay = CRM_RETRY_DELAYS_MS[attempt - 1];
    if (delay !== undefined) await sleep(delay);
  }

  return { ok: false, detail: last };
}

/** In-memory rate limiter: max 3 submissions per IP per 10 minutes. For production scale, move to Upstash Redis. */
const rateBuckets = new Map<string, { count: number; resetAt: number }>();
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 3;

function clientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return req.headers.get("x-real-ip")?.trim() || "unknown";
}

function allowRate(ip: string): boolean {
  const now = Date.now();
  const bucket = rateBuckets.get(ip);
  if (!bucket || now > bucket.resetAt) {
    rateBuckets.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (bucket.count >= RATE_MAX) return false;
  bucket.count += 1;
  return true;
}

export async function POST(req: Request) {
  try {
    const ip = clientIp(req);
    if (!allowRate(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again in a few minutes." },
        { status: 429 },
      );
    }

    let json: unknown;
    try {
      json = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
    }

    const parsed = contactFormSchemaWithPhone.safeParse(json);
    if (!parsed.success) {
      const flat = parsed.error.flatten();
      return NextResponse.json(
        {
          error: "Validation failed.",
          fieldErrors: flat.fieldErrors,
          formErrors: flat.formErrors,
        },
        { status: 400 },
      );
    }

    const data = parsed.data;
    const honeypot = typeof data.website === "string" && data.website.trim().length > 0;
    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    // Forward to the CRM. This MUST be awaited: on Vercel the function freezes
    // once the response is returned, so an unawaited fetch is killed in flight.
    const target = `${CRM_BASE_URL}/api/contact`;
    const forwarded = await forwardLeadToCrm(target, {
      businessSlug: CRM_BUSINESS_SLUG,
      name: data.name,
      phone: data.phone,
      email: data.email,
      message: `Service: ${data.service}\n\n${data.message}`,
      smsConsent: true,
    });

    if (!forwarded.ok) {
      console.error("[CRM-Sync] lead NOT delivered after all attempts", {
        target,
        slug: CRM_BUSINESS_SLUG,
        attempts: CRM_MAX_ATTEMPTS,
        ...forwarded.detail,
      });
      return NextResponse.json(
        { error: "We couldn't deliver your message right now. Please call us or try again shortly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact] Unexpected error", e);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
