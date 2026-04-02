import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Holland, MI",
  description:
    "Contact Fraaza Enterprises for hydroseeding, landscaping, soil preparation, and snow plowing in Holland, MI and across West Michigan. Call (616) 875-2293 or request a free quote.",
  openGraph: {
    title: "Contact | Fraaza Enterprises",
    description:
      "Request a free quote for hydroseeding, landscaping, soil preparation, or snow plowing in West Michigan.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-[var(--bg-0)]">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s talk about your project"
            description="Call, email, or send a quote request. We serve Holland, Zeeland, Grand Haven, Hudsonville, and surrounding West Michigan areas."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <div className="text-sm font-semibold text-white/85">
                Contact details
              </div>
              <div className="mt-4 space-y-3 text-sm text-white/65">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                    Phone
                  </div>
                  <a className="mt-1 block text-white hover:text-white/90" href={SITE.phoneHref}>
                    {SITE.phone}
                  </a>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                    Email
                  </div>
                  <a
                    className="mt-1 block text-white hover:text-white/90"
                    href={`mailto:${SITE.email}`}
                  >
                    {SITE.email}
                  </a>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                    Service area
                  </div>
                  <div className="mt-1 text-white/75">{SITE.serviceArea}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                    Hours
                  </div>
                  <div className="mt-1 space-y-1">
                    {SITE.hours.map((h) => (
                      <div key={h.label} className="flex items-center justify-between gap-6">
                        <span className="text-white/75">{h.label}</span>
                        <span className="text-white/55">{h.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-3xl border border-white/10">
                <iframe
                  title="Fraaza Enterprises service area map"
                  src="https://www.google.com/maps?q=Holland%20MI&output=embed"
                  className="h-72 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div id="quote-form">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

