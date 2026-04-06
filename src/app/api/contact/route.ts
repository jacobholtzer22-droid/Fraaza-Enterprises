import { NextResponse } from "next/server";
import { sendLeadEmail, sendLeadSms, type ContactLead } from "@/lib/notifications";

export async function POST(req: Request) {
  let body: Record<string, unknown> | null = null;

  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const name = String(body?.name || "").trim();
  const email = String(body?.email || "").trim();
  const phone = String(body?.phone || "").trim();
  const message = String(body?.message || "").trim();
  const service = String(body?.service || "").trim() || undefined;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const lead: ContactLead = { name, email, phone, message, service };

  try {
    await sendLeadEmail(lead);
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Email send failed.";
    return NextResponse.json({ error: msg }, { status: 500 });
  }

  try {
    await sendLeadSms(lead);
  } catch {
    // Email is primary; don't fail the request if SMS fails.
  }

  return NextResponse.json({ ok: true });
}
