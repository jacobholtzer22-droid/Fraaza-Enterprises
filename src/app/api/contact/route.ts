import { NextResponse } from "next/server";
import { Resend } from "resend";
import Telnyx from "telnyx";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
  smsConsent: boolean;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  let body: ContactPayload | null = null;

  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const name = String(body?.name || "").trim();
  const email = String(body?.email || "").trim();
  const phone = String(body?.phone || "").trim();
  const serviceType = String(body?.serviceType || "Not Sure").trim();
  const message = String(body?.message || "").trim();
  const smsConsent = Boolean(body?.smsConsent);

  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 },
    );
  }

  const CONTACT_EMAIL = process.env.CONTACT_EMAIL;
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TELNYX_API_KEY = process.env.TELNYX_API_KEY;
  const TELNYX_PHONE_NUMBER = process.env.TELNYX_PHONE_NUMBER;
  const OWNER_PHONE_NUMBER = process.env.OWNER_PHONE_NUMBER;

  if (!CONTACT_EMAIL || !RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Server is missing email configuration." },
      { status: 500 },
    );
  }

  const resend = new Resend(RESEND_API_KEY);
  const subject = `New quote request — ${serviceType}`;

  const html = `
    <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; line-height: 1.6;">
      <h2 style="margin: 0 0 12px 0;">New Contact / Quote Request</h2>
      <table cellpadding="0" cellspacing="0" style="width:100%; border-collapse: collapse;">
        <tr><td style="padding: 6px 0; width: 140px;"><strong>Name</strong></td><td style="padding: 6px 0;">${escapeHtml(
          name,
        )}</td></tr>
        <tr><td style="padding: 6px 0;"><strong>Email</strong></td><td style="padding: 6px 0;">${escapeHtml(
          email,
        )}</td></tr>
        <tr><td style="padding: 6px 0;"><strong>Phone</strong></td><td style="padding: 6px 0;">${escapeHtml(
          phone,
        )}</td></tr>
        <tr><td style="padding: 6px 0;"><strong>Service</strong></td><td style="padding: 6px 0;">${escapeHtml(
          serviceType,
        )}</td></tr>
        <tr><td style="padding: 6px 0;"><strong>SMS consent</strong></td><td style="padding: 6px 0;">${
          smsConsent ? "Yes" : "No"
        }</td></tr>
      </table>
      <div style="margin-top: 16px;">
        <strong>Message</strong>
        <div style="margin-top: 8px; white-space: pre-wrap; padding: 12px; border-radius: 12px; background: #111; color: #eee;">${escapeHtml(
          message,
        )}</div>
      </div>
    </div>
  `;

  try {
    await resend.emails.send({
      from: "Fraaza Enterprises <notifications@alignandacquire.com>",
      to: [CONTACT_EMAIL],
      subject,
      replyTo: email,
      html,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Email send failed.";
    return NextResponse.json({ error: msg }, { status: 500 });
  }

  const canSendSms =
    TELNYX_API_KEY && TELNYX_PHONE_NUMBER && OWNER_PHONE_NUMBER && smsConsent;

  if (canSendSms) {
    try {
      const telnyx = new Telnyx({ apiKey: TELNYX_API_KEY });
      const text =
        `Fraaza Enterprises - New ${serviceType} lead\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Email: ${email}\n` +
        `Message: ${message}`;

      await telnyx.messages.send({
        from: TELNYX_PHONE_NUMBER,
        to: OWNER_PHONE_NUMBER,
        text,
      });
    } catch {
      // Email is primary; don't fail the request if SMS fails.
    }
  }

  return NextResponse.json({ ok: true });
}

