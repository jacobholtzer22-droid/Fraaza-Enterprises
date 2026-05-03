"use client";

import { useState, type InputHTMLAttributes } from "react";
import { Controller, useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/cn";
import {
  SERVICE_VALUES,
  contactFormSchemaWithPhone,
  type ContactFormValues,
} from "@/lib/contactSchema";

type FormState = "idle" | "success";

function formatPhoneInput(raw: string): string {
  const d = raw.replace(/\D/g, "").slice(0, 10);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

const inputCls =
  "mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-all duration-300 placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20";

const defaultValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  service: "Hydroseeding",
  message: "",
  website: "",
};

export function ContactForm({
  className,
  dark,
  showService,
}: {
  className?: string;
  dark?: boolean;
  /** When true, uses quote-oriented heading copy (service field is always shown). */
  showService?: boolean;
}) {
  const [uiState, setUiState] = useState<FormState>("idle");

  const {
    register,
    control,
    handleSubmit,
    setError,
    reset,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchemaWithPhone) as Resolver<ContactFormValues>,
    defaultValues,
  });

  async function onSubmit(values: ContactFormValues) {
    clearErrors("root");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await res.json().catch(() => null)) as Record<string, unknown> | null;

      if (!res.ok) {
        const fieldErrors = data?.fieldErrors as Record<string, string[] | undefined> | undefined;
        if (fieldErrors && typeof fieldErrors === "object") {
          for (const key of Object.keys(fieldErrors)) {
            const msgs = fieldErrors[key];
            const msg = Array.isArray(msgs) ? msgs[0] : undefined;
            if (msg && key in defaultValues) {
              setError(key as keyof ContactFormValues, { message: msg });
            }
          }
        }
        const msg =
          typeof data?.error === "string"
            ? data.error
            : "Something went wrong. Please try again.";
        setError("root", { message: msg });
        return;
      }

      setUiState("success");
      reset(defaultValues);
    } catch {
      setError("root", { message: "Something went wrong. Please try again." });
    }
  }

  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-md)]",
        dark
          ? "bg-[var(--bg-green)] text-white"
          : "bg-[var(--bg-white)] border border-[var(--border)]",
        className,
      )}
    >
      <div
        className={cn(
          "font-[family-name:var(--font-playfair)] text-xl font-semibold",
          dark ? "text-white" : "text-[var(--text-primary)]",
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

      {uiState === "success" ? (
        <div className="mt-6 rounded-xl border border-emerald-600/35 bg-emerald-600/10 px-4 py-5 text-sm text-emerald-900">
          <p className="font-semibold text-emerald-900">
            Thanks! We&apos;ll be in touch within 24 hours.
          </p>
          <button
            type="button"
            className={cn(
              "mt-4 text-xs font-semibold hover:underline",
              dark ? "text-white/90" : "text-[var(--accent)]",
            )}
            onClick={() => setUiState("idle")}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form className="relative mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
          {errors.root && (
            <div className="rounded-xl border border-red-500/35 bg-red-500/10 px-4 py-3 text-sm text-red-800">
              {errors.root.message}
            </div>
          )}

          <input
            type="text"
            {...register("website")}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: "absolute", left: "-9999px" }}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Name"
              dark={dark}
              error={errors.name?.message}
              inputProps={{ ...register("name"), placeholder: "Your name" }}
            />
            <Field
              label="Email"
              dark={dark}
              error={errors.email?.message}
              inputProps={{ ...register("email"), type: "email", placeholder: "you@example.com" }}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                className={cn(
                  "text-xs font-semibold",
                  dark ? "text-white/70" : "text-[var(--text-secondary)]",
                )}
                htmlFor="contact-phone"
              >
                Phone <span className="text-red-500">*</span>
              </label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    id="contact-phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(616) 555-1234"
                    className={cn(
                      inputCls,
                      dark && "bg-white/10 border-white/15 text-white placeholder:text-white/30",
                      errors.phone && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
                    )}
                    onChange={(e) => field.onChange(formatPhoneInput(e.target.value))}
                  />
                )}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label
                className={cn(
                  "text-xs font-semibold",
                  dark ? "text-white/70" : "text-[var(--text-secondary)]",
                )}
                htmlFor="contact-service"
              >
                Service <span className="text-red-500">*</span>
              </label>
              <select
                id="contact-service"
                className={cn(
                  inputCls,
                  dark && "bg-white/10 border-white/15 text-white",
                  errors.service && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
                )}
                {...register("service")}
              >
                {SERVICE_VALUES.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-1 text-xs text-red-500">{errors.service.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              className={cn(
                "text-xs font-semibold",
                dark ? "text-white/70" : "text-[var(--text-secondary)]",
              )}
              htmlFor="contact-message"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="contact-message"
              rows={5}
              placeholder="Tell us what you're looking to do, where you're located, and your timeline."
              className={cn(
                inputCls,
                "resize-none",
                dark && "bg-white/10 border-white/15 text-white placeholder:text-white/30",
                errors.message && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
              )}
              {...register("message")}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--accent-hover)] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting && (
              <svg
                className="h-4 w-4 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            )}
            {isSubmitting ? "Sending\u2026" : "Send Request"}
          </button>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  dark,
  error,
  inputProps,
}: {
  label: string;
  dark?: boolean;
  error?: string;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
}) {
  const id = inputProps.id ?? inputProps.name;
  return (
    <div>
      <label
        className={cn(
          "text-xs font-semibold",
          dark ? "text-white/70" : "text-[var(--text-secondary)]",
        )}
        htmlFor={id}
      >
        {label} {inputProps.required !== false && <span className="text-red-500">*</span>}
      </label>
      <input
        {...inputProps}
        id={id}
        className={cn(
          inputCls,
          dark && "bg-white/10 border-white/15 text-white placeholder:text-white/30",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
          inputProps.className,
        )}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
