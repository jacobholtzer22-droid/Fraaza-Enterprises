import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import ServiceAreaSection from "@/components/ServiceAreaSection";
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
      <section className="relative -mt-[var(--header-height)] pt-[var(--header-height)] flex min-h-[15rem] items-center overflow-x-hidden sm:min-h-80">
        <Image
          src="/images/portfolio/estate-hydroseeding.webp"
          alt="Estate property hydroseeding project"
          fill
          priority
          className="object-cover object-[center_35%] sm:object-center"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--bg-green)]/75 via-[var(--bg-green)]/35 to-transparent" />
        <Container className="relative z-10 py-10 sm:py-12 lg:py-14">
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
        <Container className="py-12 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <FadeIn>
              <div className="rounded-2xl bg-[var(--bg-elevated)] p-4 shadow-[var(--shadow-sm)] sm:p-8">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[var(--text-primary)]">
                  Contact details
                </h3>
                <div className="mt-6 space-y-5 text-base text-[var(--text-secondary)]">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                      Phone
                    </div>
                    <a className="mt-1 block min-h-[44px] break-all text-base font-medium text-[var(--text-primary)] transition-colors hover:text-[var(--accent)] sm:min-h-0 sm:text-sm" href={SITE.phoneHref}>
                      {SITE.phone}
                    </a>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                      Email
                    </div>
                    <a
                      className="mt-1 block min-h-[44px] break-all text-base font-medium text-[var(--text-primary)] transition-colors hover:text-[var(--accent)] sm:min-h-0 sm:text-sm"
                      href={`mailto:${SITE.email}`}
                    >
                      {SITE.email}
                    </a>
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

                <div className="mt-8 max-w-full">
                  <ServiceAreaSection />
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
