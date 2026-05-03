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

const LABEL_STYLE =
  "margin:0;padding:0;font-weight:700;font-variant:small-caps;letter-spacing:0.06em;color:#6b7280;font-size:12px;line-height:1.4;font-family:Arial,Helvetica,sans-serif;";
const VALUE_STYLE =
  "margin:8px 0 0;padding:0;font-weight:400;font-variant:normal;text-transform:none;color:#1a1a1a;font-size:16px;line-height:1.5;font-family:Arial,Helvetica,sans-serif;";

export function buildContactEmailHtml(lead: ContactEmailLead, receivedAt: Date): string {
  const ts = receivedAt.toISOString();
  const mailtoSubject = encodeURIComponent("Re: Your inquiry — Fraaza Enterprises");
  const mailto = `mailto:${lead.email}?subject=${mailtoSubject}`;
  const forest = "#2d5016";
  const white = "#ffffff";

  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Service", lead.service],
    ["Received (UTC)", ts],
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
    <tr>
      <td style="padding:16px 24px;border-bottom:1px solid #e5e7eb;background-color:${white};color:#1a1a1a;">
        <p style="${LABEL_STYLE}">${escapeHtml(label)}</p>
        <p style="${VALUE_STYLE}">${escapeHtml(value)}</p>
      </td>
    </tr>`,
    )
    .join("");

  const footerTimestamp = escapeHtml(ts);

  return `
<!DOCTYPE html>
<html lang="en" style="margin:0;padding:0;">
<body style="margin:0;padding:0;background-color:#f9fafb;color:#1a1a1a;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%;margin:0;padding:0;background-color:#f9fafb;border-collapse:collapse;">
    <tr>
      <td align="center" style="padding:24px 16px;margin:0;background-color:#f9fafb;color:#1a1a1a;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="width:100%;max-width:600px;margin:0 auto;border-collapse:collapse;background-color:${white};">
          <tr>
            <td style="padding:24px 24px 22px;margin:0;background-color:${forest};color:${white};">
              <h1 style="margin:0;padding:0;font-size:22px;line-height:1.3;color:${white};font-weight:600;font-family:Arial,Helvetica,sans-serif;">New lead — Fraaza Enterprises</h1>
              <p style="margin:10px 0 0;padding:0;font-size:14px;line-height:1.5;color:${white};font-weight:400;font-family:Arial,Helvetica,sans-serif;">${escapeHtml(lead.service)} inquiry from ${escapeHtml(lead.name)}</p>
            </td>
          </tr>
          ${tableRows}
          <tr>
            <td style="padding:16px 24px 20px;margin:0;border-bottom:1px solid #e5e7eb;background-color:${white};color:#1a1a1a;">
              <p style="${LABEL_STYLE}">Message</p>
              <div style="margin:8px 0 0;padding:0;font-size:16px;line-height:1.6;color:#1a1a1a;font-weight:400;font-family:Arial,Helvetica,sans-serif;white-space:pre-wrap;">${escapeHtml(lead.message)}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 24px 8px;margin:0;background-color:${white};color:#1a1a1a;">
              <a href="${mailto}" style="display:inline-block;padding:12px 24px;background-color:${forest};color:${white};text-decoration:none;border-radius:6px;font-weight:600;font-size:16px;font-family:Arial,Helvetica,sans-serif;line-height:1.2;">Reply to ${escapeHtml(lead.name)}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 24px 24px;margin:0;background-color:${white};color:#9ca3af;">
              <p style="margin:0;padding:0;font-size:12px;line-height:1.5;color:#9ca3af;font-family:Arial,Helvetica,sans-serif;">Sent from fraazaenterprises.com contact form</p>
              <p style="margin:6px 0 0;padding:0;font-size:12px;line-height:1.5;color:#9ca3af;font-family:Arial,Helvetica,sans-serif;">${footerTimestamp}</p>
            </td>
          </tr>
        </table>
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
