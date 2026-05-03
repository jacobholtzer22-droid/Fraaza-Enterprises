import type { ServiceOption } from "@/lib/contactSchema";

export type ContactEmailLead = {
  name: string;
  email: string;
  phone: string;
  service: ServiceOption;
  message: string;
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function buildContactEmailHtml(lead: ContactEmailLead, receivedAt: Date): string {
  const ts = receivedAt.toISOString();
  const mailtoSubject = encodeURIComponent("Re: Your inquiry — Fraaza Enterprises");
  const mailto = `mailto:${lead.email}?subject=${mailtoSubject}`;
  const brand = "#2d5016";

  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Service", lead.service],
    ["Received (UTC)", ts],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:10px 12px;border-bottom:1px solid #e8e8e8;font-size:14px;color:#444;width:140px;vertical-align:top;font-weight:600;">${escapeHtml(label)}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #e8e8e8;font-size:14px;color:#111;vertical-align:top;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  return `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:24px;background:#f6f6f4;font-family:Georgia,'Times New Roman',serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
    <tr>
      <td style="background:${brand};padding:20px 24px;">
        <h1 style="margin:0;font-size:20px;line-height:1.3;color:#ffffff;font-weight:600;">New lead — Fraaza Enterprises</h1>
        <p style="margin:8px 0 0;font-size:13px;line-height:1.5;color:rgba(255,255,255,0.9);">${escapeHtml(lead.service)} inquiry from ${escapeHtml(lead.name)}</p>
      </td>
    </tr>
    <tr>
      <td style="padding:0 8px;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
          ${tableRows}
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:16px 24px 24px;">
        <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:${brand};">Message</p>
        <div style="font-size:14px;line-height:1.6;color:#222;white-space:pre-wrap;padding:14px 16px;background:#f9faf7;border-radius:8px;border:1px solid #e5ebe0;">${escapeHtml(lead.message)}</div>
        <p style="margin:20px 0 0;font-size:14px;">
          <a href="${mailto}" style="display:inline-block;padding:10px 18px;background:${brand};color:#ffffff;text-decoration:none;border-radius:999px;font-weight:600;">Reply to ${escapeHtml(lead.name)}</a>
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();
}

export function buildContactEmailText(lead: ContactEmailLead, receivedAt: Date): string {
  const ts = receivedAt.toISOString();
  return [
    "New lead — Fraaza Enterprises",
    "",
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone}`,
    `Service: ${lead.service}`,
    `Received (UTC): ${ts}`,
    "",
    "Message:",
    lead.message,
  ].join("\n");
}
