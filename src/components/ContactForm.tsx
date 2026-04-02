"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";

type ServiceType =
  | "Hydroseeding"
  | "Landscaping"
  | "Soil Preparation"
  | "Snow Plowing"
  | "Not Sure";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm({ className }: { className?: string }) {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  const serviceOptions: ServiceType[] = useMemo(
    () => [
      "Hydroseeding",
      "Landscaping",
      "Soil Preparation",
      "Snow Plowing",
      "Not Sure",
    ],
    [],
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      serviceType: String(formData.get("serviceType") || "Not Sure"),
      message: String(formData.get("message") || ""),
      smsConsent: Boolean(formData.get("smsConsent")),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8",
        className,
      )}
    >
      <div className="text-base font-semibold tracking-tight text-white">
        Request a Free Quote
      </div>
      <p className="mt-2 text-sm leading-6 text-white/65">
        Tell us about your project and we’ll get back to you as soon as possible.
      </p>

      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Name" name="name" required placeholder="Your name" />
          <Field
            label="Email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Phone"
            name="phone"
            required
            placeholder="(616) 555-1234"
          />
          <div>
            <label className="text-xs font-semibold text-white/75">
              Service Type
            </label>
            <select
              name="serviceType"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none ring-0 transition focus:border-white/20"
              defaultValue="Not Sure"
            >
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-white/75">Message</label>
          <textarea
            name="message"
            required
            rows={6}
            placeholder="Tell us what you’re looking to do, where you’re located, and your timeline."
            className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none ring-0 transition placeholder:text-white/35 focus:border-white/20"
          />
        </div>

        <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/70">
          <input
            type="checkbox"
            name="smsConsent"
            className="mt-1 h-4 w-4 rounded border-white/20 bg-black/40 accent-[var(--accent)]"
          />
          <span>
            I agree to receive text messages about my quote request. Message and
            data rates may apply.
          </span>
        </label>

        {state === "success" ? (
          <div className="rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-3 text-sm text-white">
            Thanks! Your request was sent. We’ll be in touch soon.
          </div>
        ) : null}
        {state === "error" ? (
          <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-white">
            {error || "Something went wrong. Please try again."}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[var(--accent-3)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state === "submitting" ? "Sending…" : "Send Request"}
        </button>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold text-white/75" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none ring-0 transition placeholder:text-white/35 focus:border-white/20"
      />
    </div>
  );
}

