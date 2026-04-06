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

const inputCls =
  "mt-2 w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-all duration-300 placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20";

export function ContactForm({ className, dark }: { className?: string; dark?: boolean }) {
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
        "rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-md)]",
        dark
          ? "bg-[var(--bg-green)] text-white"
          : "bg-white border border-[var(--border)]",
        className,
      )}
    >
      <div className={cn(
        "font-[family-name:var(--font-playfair)] text-xl font-semibold",
        dark ? "text-white" : "text-[var(--bg-green)]",
      )}>
        Request a Free Quote
      </div>
      <p className={cn(
        "mt-2 text-sm leading-6",
        dark ? "text-white/60" : "text-[var(--text-muted)]",
      )}>
        Tell us about your project and we&apos;ll get back to you as soon as possible.
      </p>

      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Name" name="name" required placeholder="Your name" dark={dark} />
          <Field
            label="Email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            dark={dark}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Phone"
            name="phone"
            required
            placeholder="(616) 555-1234"
            dark={dark}
          />
          <div>
            <label className={cn(
              "text-xs font-semibold",
              dark ? "text-white/70" : "text-[var(--text-secondary)]",
            )}>
              Service Type
            </label>
            <select
              name="serviceType"
              className={cn(inputCls, dark && "bg-white/10 border-white/15 text-white")}
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
          <label className={cn(
            "text-xs font-semibold",
            dark ? "text-white/70" : "text-[var(--text-secondary)]",
          )}>
            Message
          </label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell us what you're looking to do, where you're located, and your timeline."
            className={cn(
              inputCls,
              "resize-none",
              dark && "bg-white/10 border-white/15 text-white placeholder:text-white/30",
            )}
          />
        </div>

        <label className={cn(
          "flex items-start gap-3 rounded-xl border px-4 py-3 text-sm cursor-pointer transition-colors",
          dark
            ? "border-white/15 text-white/60 hover:bg-white/5"
            : "border-[var(--border)] text-[var(--text-muted)] hover:bg-[var(--bg-cream)]/50",
        )}>
          <input
            type="checkbox"
            name="smsConsent"
            className="mt-1 h-4 w-4 rounded accent-[var(--accent)]"
          />
          <span>
            I agree to receive text messages about my quote request. Message and
            data rates may apply.
          </span>
        </label>

        {state === "success" ? (
          <div className="rounded-xl border border-[var(--bg-green)]/30 bg-[var(--bg-green)]/10 px-4 py-3 text-sm text-[var(--bg-green)]">
            Thanks! Your request was sent. We&apos;ll be in touch soon.
          </div>
        ) : null}
        {state === "error" ? (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700">
            {error || "Something went wrong. Please try again."}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--accent-hover)] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state === "submitting" ? "Sending\u2026" : "Send Request"}
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
  dark,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  dark?: boolean;
}) {
  return (
    <div>
      <label className={cn(
        "text-xs font-semibold",
        dark ? "text-white/70" : "text-[var(--text-secondary)]",
      )} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={cn(
          inputCls,
          dark && "bg-white/10 border-white/15 text-white placeholder:text-white/30",
        )}
      />
    </div>
  );
}
