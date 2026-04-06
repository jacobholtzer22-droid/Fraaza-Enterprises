import { Resend } from "resend";
import Telnyx from "telnyx";

export type ContactLead = {
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildEmailHtml(lead: ContactLead): string {
  const rows = [
    ["Name", lead.name],
    ["Email", lead.email],
    ...(lead.phone ? [["Phone", lead.phone]] : []),
    ...(lead.service ? [["Service", lead.service]] : []),
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 0;width:140px"><strong>${label}</strong></td><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `
    <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;line-height:1.6">
      <h2 style="margin:0 0 12px">New Contact / Quote Request</h2>
      <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse">
        ${tableRows}
      </table>
      <div style="margin-top:16px">
        <strong>Message</strong>
        <div style="margin-top:8px;white-space:pre-wrap;padding:12px;border-radius:12px;background:#111;color:#eee">${escapeHtml(lead.message)}</div>
      </div>
    </div>
  `;
}

export async function sendLeadEmail(lead: ContactLead): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  if (!apiKey || !to) throw new Error("Server is missing email configuration.");

  const resend = new Resend(apiKey);
  const subject = lead.service
    ? `New quote request — ${lead.service}`
    : "New contact form submission";

  await resend.emails.send({
    from: "Fraaza Enterprises <notifications@alignandacquire.com>",
    to: [to],
    subject,
    replyTo: lead.email,
    html: buildEmailHtml(lead),
  });
}

export async function sendLeadSms(lead: ContactLead): Promise<void> {
  const apiKey = process.env.TELNYX_API_KEY;
  const from = process.env.TELNYX_PHONE_NUMBER;
  const to = process.env.OWNER_PHONE_NUMBER;
  if (!apiKey || !from || !to) return;

  const telnyx = new Telnyx({ apiKey });

  const lines = [
    `Fraaza Enterprises — New ${lead.service ?? "contact"} lead`,
    `Name: ${lead.name}`,
    lead.phone ? `Phone: ${lead.phone}` : null,
    `Email: ${lead.email}`,
    `Message: ${lead.message.slice(0, 200)}`,
  ].filter(Boolean);

  await telnyx.messages.send({ from, to, text: lines.join("\n") });
}
