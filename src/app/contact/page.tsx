import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact West Michigan's Hydroseeding Experts | Holland, MI",
  description:
    "Contact Fraaza Enterprises — West Michigan's hydroseeding specialists. Call (616) 875-2293 or request a free quote for hydroseeding, soil preparation, landscaping, or snow plowing in Holland, MI.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Fraaza Enterprises",
    description:
      "Contact West Michigan's hydroseeding experts. Request a free quote for hydroseeding, soil preparation, and more.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-64 sm:h-80 flex items-center">
        <Image
          src="/images/portfolio/estate-hydroseeding.webp"
          alt="Estate property hydroseeding project"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[var(--bg-green)]/75" />
        <Container className="relative z-10">
          <SectionHeading
            as="h1"
            light
            eyebrow="Contact"
            title="Let's talk about your project"
            description="Call, email, or send a quote request. We serve Holland, Zeeland, Grand Haven, Hudsonville, and surrounding West Michigan areas."
          />
        </Container>
      </section>

      <section className="bg-[var(--bg-cream)]">
        <Container className="py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <FadeIn>
              <div className="rounded-2xl bg-white p-8 shadow-[var(--shadow-sm)]">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[var(--bg-green)]">
                  Contact details
                </h3>
                <div className="mt-6 space-y-5 text-sm text-[var(--text-secondary)]">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                      Phone
                    </div>
                    <a className="mt-1 block text-[var(--text-primary)] font-medium hover:text-[var(--accent)] transition-colors" href={SITE.phoneHref}>
                      {SITE.phone}
                    </a>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                      Email
                    </div>
                    <a
                      className="mt-1 block text-[var(--text-primary)] font-medium hover:text-[var(--accent)] transition-colors"
                      href={`mailto:${SITE.email}`}
                    >
                      {SITE.email}
                    </a>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                      Service area
                    </div>
                    <div className="mt-1 text-[var(--text-primary)]">{SITE.serviceArea}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                      Hours
                    </div>
                    <div className="mt-2 space-y-1">
                      {SITE.hours.map((h) => (
                        <div key={h.label} className="flex items-center justify-between gap-6">
                          <span className="text-[var(--text-primary)]">{h.label}</span>
                          <span className="text-[var(--text-muted)]">{h.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 overflow-hidden rounded-xl border border-[var(--border)]">
                  <iframe
                    title="Fraaza Enterprises service area map"
                    src="https://www.google.com/maps?q=Holland%20MI&output=embed"
                    className="h-64 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={2}>
              <ContactForm />
            </FadeIn>
          </div>
        </Container>
      </section>
    </div>
  );
}
