import { NextResponse } from "next/server";
import { contactFormSchemaWithPhone } from "@/lib/contactSchema";

export const runtime = "nodejs";

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

    // Fire-and-forget CRM sync. Must never affect the user's response.
    // The CRM is the sole owner notifier (email + SMS) for this lead.
    void fetch("https://www.alignandacquire.com/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        businessSlug: "fraaza-enterprises-inc",
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: `Service: ${data.service}\n\n${data.message}`,
        smsConsent: true,
      }),
    }).catch((err) => console.error("[CRM-Sync] failed:", err));

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact] Unexpected error", e);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
