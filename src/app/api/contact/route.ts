import { NextResponse } from "next/server";
import { Resend } from "resend";
import Telnyx from "telnyx";
import {
  contactFormSchemaWithPhone,
  phoneDigits,
  type ServiceOption,
} from "@/lib/contactSchema";
import { buildContactEmailHtml, buildContactEmailText } from "@/lib/email-template";

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

function parseNotificationEmails(raw: string | undefined): string[] {
  if (!raw?.trim()) return [];
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function buildSmsBody(name: string, phone: string, service: string, message: string): string {
  const preview =
    message.length > 60 ? `${message.slice(0, 60).trimEnd()}...` : message.trimEnd();
  const suffix = ` Check email for full details.`;
  let body = `New Fraaza lead: ${name} (${phone}) - ${service}. "${preview}"${suffix}`;
  if (body.length <= 160) return body;
  const budget = 160 - suffix.length - 4;
  const head = `New Fraaza lead: ${name} (${phone}) - ${service}. "`;
  const tail = `"${suffix}`;
  const midBudget = Math.max(12, budget - head.length - tail.length);
  const mid = preview.length > midBudget ? `${preview.slice(0, midBudget - 3)}...` : preview;
  body = `${head}${mid}${tail}`;
  return body.length > 160 ? body.slice(0, 157) + "..." : body;
}

async function sendResendNotification(input: {
  name: string;
  email: string;
  phone: string;
  service: ServiceOption;
  message: string;
  receivedAt: Date;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  const toList = parseNotificationEmails(process.env.NOTIFICATION_EMAIL);

  if (!apiKey || !from || toList.length === 0) {
    throw new Error("Resend not configured (RESEND_API_KEY, RESEND_FROM_EMAIL, NOTIFICATION_EMAIL).");
  }

  const resend = new Resend(apiKey);
  const lead = {
    name: input.name,
    email: input.email,
    phone: input.phone,
    service: input.service,
    message: input.message,
  };

  const { error } = await resend.emails.send({
    from,
    to: toList,
    replyTo: input.email,
    subject: `New Lead from ${input.name} - ${input.service}`,
    text: buildContactEmailText(lead, input.receivedAt),
    html: buildContactEmailHtml(lead, input.receivedAt),
  });

  if (error) {
    throw new Error(error.message || "Resend send failed.");
  }
}

async function sendTelnyxSms(input: {
  name: string;
  phoneDigits: string;
  service: ServiceOption;
  message: string;
}): Promise<void> {
  const apiKey = process.env.TELNYX_API_KEY;
  const from = process.env.TELNYX_FROM_NUMBER?.trim();
  const to = process.env.TELNYX_TO_NUMBER?.trim();
  const messagingProfileId = process.env.TELNYX_MESSAGING_PROFILE_ID?.trim();

  if (!apiKey || !from || !to) {
    throw new Error("Telnyx not configured (TELNYX_API_KEY, TELNYX_FROM_NUMBER, TELNYX_TO_NUMBER).");
  }

  const telnyx = new Telnyx({ apiKey });
  const text = buildSmsBody(input.name, input.phoneDigits, input.service, input.message);

  await telnyx.messages.send({
    from,
    to,
    text,
    ...(messagingProfileId ? { messaging_profile_id: messagingProfileId } : {}),
  });
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

    const digits = phoneDigits(data.phone);
    const receivedAt = new Date();

    const emailPayload = {
      name: data.name,
      email: data.email,
      phone: data.phone.trim(),
      service: data.service,
      message: data.message,
      receivedAt,
    };

    const smsPayload = {
      name: data.name,
      phoneDigits: digits,
      service: data.service,
      message: data.message,
    };

    const results = await Promise.allSettled([
      sendResendNotification(emailPayload),
      sendTelnyxSms(smsPayload),
    ]);

    const [emailOutcome, smsOutcome] = results;
    if (emailOutcome.status === "rejected") {
      console.error("[contact] Resend failed", {
        reason: emailOutcome.reason instanceof Error ? emailOutcome.reason.message : emailOutcome.reason,
        leadEmail: data.email,
      });
    }
    if (smsOutcome.status === "rejected") {
      console.error("[contact] Telnyx SMS failed", {
        reason: smsOutcome.reason instanceof Error ? smsOutcome.reason.message : smsOutcome.reason,
        leadEmail: data.email,
      });
    }

    const anyOk = results.some((r) => r.status === "fulfilled");
    if (!anyOk) {
      return NextResponse.json(
        { error: "We couldn't deliver your message right now. Please call us or try again shortly." },
        { status: 500 },
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
