"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type FormState = "idle" | "submitting" | "success" | "error";

const SERVICE_OPTIONS = [
  "Hydroseeding",
  "Landscaping",
  "Soil Preparation",
  "Snow Plowing",
  "Not Sure",
] as const;

const inputCls =
  "mt-2 w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-all duration-300 placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20";

export function ContactForm({
  className,
  dark,
  showService,
}: {
  className?: string;
  dark?: boolean;
  showService?: boolean;
}) {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  function validate(fields: {
    name: string;
    email: string;
    phone: string;
    message: string;
    service?: string;
  }) {
    const errors: Record<string, string> = {};
    if (!fields.name.trim()) errors.name = "Name is required.";
    if (!fields.email.trim()) errors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim()))
      errors.email = "Please enter a valid email.";
    if (!fields.phone.trim()) errors.phone = "Phone number is required.";
    if (showService && !fields.service?.trim()) errors.service = "Please select a service.";
    if (!fields.message.trim()) errors.message = "Message is required.";
    return errors;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const phone = String(fd.get("phone") || "");
    const message = String(fd.get("message") || "");
    const service = showService ? String(fd.get("service") || "") : undefined;

    const errors = validate({ name, email, phone, message, service });
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    setValidationErrors({});
    setState("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, service }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
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
      <div
        className={cn(
          "font-[family-name:var(--font-playfair)] text-xl font-semibold",
          dark ? "text-white" : "text-[var(--bg-green)]",
        )}
      >
        {showService ? "Request a Free Quote" : "Send Us a Message"}
      </div>
      <p
        className={cn(
          "mt-2 text-sm leading-6",
          dark ? "text-white/60" : "text-[var(--text-muted)]",
        )}
      >
        {showService
          ? "Tell us about your project and we\u2019ll get back to you as soon as possible."
          : "Have a question? Drop us a line and we\u2019ll get back to you shortly."}
      </p>

      {state === "success" ? (
        <div className="mt-6 rounded-xl border border-[var(--bg-green)]/30 bg-[var(--bg-green)]/10 px-4 py-5 text-sm text-[var(--bg-green)]">
          <p className="font-semibold">Thanks! Your message was sent.</p>
          <p className="mt-1 text-[var(--text-muted)]">
            We&apos;ll be in touch soon.
          </p>
          <button
            type="button"
            className="mt-3 text-xs font-semibold text-[var(--accent)] hover:underline"
            onClick={() => setState("idle")}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Name"
              name="name"
              required
              placeholder="Your name"
              dark={dark}
              error={validationErrors.name}
            />
            <Field
              label="Email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              dark={dark}
              error={validationErrors.email}
            />
          </div>

          <div className={cn(showService ? "grid gap-4 sm:grid-cols-2" : "")}>
            <Field
              label="Phone"
              name="phone"
              required
              placeholder="(616) 555-1234"
              dark={dark}
              error={validationErrors.phone}
            />
            {showService && (
              <div>
                <label
                  className={cn(
                    "text-xs font-semibold",
                    dark ? "text-white/70" : "text-[var(--text-secondary)]",
                  )}
                >
                  Service <span className="text-red-500">*</span>
                </label>
                <select
                  name="service"
                  className={cn(
                    inputCls,
                    dark && "bg-white/10 border-white/15 text-white",
                    validationErrors.service && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
                  )}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {validationErrors.service && (
                  <p className="mt-1 text-xs text-red-500">{validationErrors.service}</p>
                )}
              </div>
            )}
          </div>

          <div>
            <label
              className={cn(
                "text-xs font-semibold",
                dark ? "text-white/70" : "text-[var(--text-secondary)]",
              )}
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us what you're looking to do, where you're located, and your timeline."
              className={cn(
                inputCls,
                "resize-none",
                dark && "bg-white/10 border-white/15 text-white placeholder:text-white/30",
                validationErrors.message && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
              )}
            />
            {validationErrors.message && (
              <p className="mt-1 text-xs text-red-500">{validationErrors.message}</p>
            )}
          </div>

          {state === "error" && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700">
              {error || "Something went wrong. Please try again."}
            </div>
          )}

          <button
            type="submit"
            disabled={state === "submitting"}
            className="inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--accent-hover)] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
          >
            {state === "submitting" ? "Sending\u2026" : "Send Request"}
          </button>
        </form>
      )}
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
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  dark?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label
        className={cn(
          "text-xs font-semibold",
          dark ? "text-white/70" : "text-[var(--text-secondary)]",
        )}
        htmlFor={name}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={cn(
          inputCls,
          dark && "bg-white/10 border-white/15 text-white placeholder:text-white/30",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
        )}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
