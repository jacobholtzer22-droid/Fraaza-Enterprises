import type { Metadata } from "next";
import { BlobBackground } from "@/components/BlobBackground";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CurveDivider } from "@/components/CurveDivider";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hydroseeding & Landscaping | Holland, MI | Fraaza Enterprises",
  description:
    "Hydroseeding and landscaping in Holland, MI and across West Michigan. Fraaza Enterprises delivers hydroseeding, soil preparation, landscaping, and snow plowing — owner-operated since 2004.",
  openGraph: {
    title: "Hydroseeding & Landscaping | Holland, MI | Fraaza Enterprises",
    description:
      "Hydroseeding and landscaping in Holland, MI and across West Michigan. Owner-operated since 2004 — hydroseeding, soil preparation, landscaping, and snow plowing.",
    url: "/",
  },
};

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-60" />
        <BlobBackground />
        <Container className="relative py-16 sm:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/70">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                Owner-operated since {SITE.since}
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {SITE.tagline}
              </h1>
              <p className="mt-5 text-lg leading-8 text-white/65">
                Transform your yard into the beautiful lawn you deserve!
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/quote">Get a Free Quote</Button>
                <Button href="/services" variant="secondary">
                  Learn About Our Services
                </Button>
              </div>

              <div className="mt-8 text-sm text-white/60">
                Serving {SITE.serviceArea}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/15 via-transparent to-transparent" />
              <div className="relative">
                <div className="text-sm font-semibold text-white/85">
                  Hydroseeding &amp; Soil Preparation Specialists
                </div>
                <div className="mt-2 text-sm leading-6 text-white/65">
                  From new lawn installs to erosion control and commercial
                  properties, we deliver clean prep, consistent coverage, and
                  results you can be proud of.
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  {[
                    "Hydroseeding",
                    "Landscaping",
                    "Soil Preparation",
                    "Snow Plowing",
                  ].map((v) => (
                    <div
                      key={v}
                      className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white/75"
                    >
                      <span className="font-semibold text-white">{v}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/70">
                  Member of the International Association of Hydroseeding
                  Professionals (IAHP)
                </div>
              </div>
            </div>
          </div>
        </Container>
        <CurveDivider />
      </section>

      <section className="bg-[var(--bg-1)]">
        <Container className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Services"
            title="Everything you need for a better yard"
            description="Hydroseeding, landscaping, soil prep, and winter services — done with a customer-first approach and quality work done right the first time."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              title="Hydroseeding"
              description="Fast, even application for new lawns and erosion control."
              href="/services/hydroseeding"
              imageSrc="/images/client/placeholder-hydroseeding.svg"
              imageAlt="Hydroseeding application on a prepared lawn area"
            />
            <ServiceCard
              title="Landscaping"
              description="Sod, retaining walls, planting, and finishing touches."
              href="/services/landscaping"
              imageSrc="/images/client/placeholder-landscaping.svg"
              imageAlt="Landscaping project with fresh sod and planting"
            />
            <ServiceCard
              title="Soil Preparation"
              description="Grading, amendments, removal, and install for success."
              href="/services/soil-preparation"
              imageSrc="/images/client/placeholder-soil-prep.svg"
              imageAlt="Soil preparation and grading work for a new lawn"
            />
            <ServiceCard
              title="Snow Plowing"
              description="Reliable plowing and salting for safer properties."
              href="/services/snow-plowing"
              imageSrc="/images/client/placeholder-snow-plowing.svg"
              imageAlt="Snow plowing service on a driveway"
            />
          </div>
        </Container>
      </section>

      <CurveDivider flip className="bg-[var(--bg-1)]" />

      <section className="bg-[var(--bg-0)]">
        <Container className="py-16 sm:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <SectionHeading
              eyebrow="About"
              title="Local, owner-operated, and built on pride"
              description={`${SITE.name} is owned and operated by ${SITE.owner}. Since ${SITE.since}, we’ve helped homeowners and businesses across West Michigan establish healthy lawns and outdoor spaces. ${SITE.motto}.`}
            />
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold text-white/85">
                Why customers choose Fraaza
              </div>
              <ul className="mt-4 space-y-3 text-sm text-white/65">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                  Clean site prep and professional-grade application
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                  Residential, commercial, and industrial experience
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                  Friendly communication and dependable scheduling
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/about" variant="secondary">
                  Learn more about us
                </Button>
                <Button href="/contact" variant="ghost">
                  Call {SITE.phone}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--bg-1)]">
        <Container className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Reviews"
            title="Results customers are proud of"
            description="Real reviews will be connected once the Google Business Profile link is set. In the meantime, here’s the standard we aim for on every job."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "“Fast communication, clean prep work, and the lawn came in great.”",
                name: "Homeowner — Holland, MI",
              },
              {
                quote:
                  "“Professional from start to finish. Would absolutely recommend.”",
                name: "Property manager — Zeeland, MI",
              },
              {
                quote:
                  "“Great coverage and guidance on watering. The yard looks amazing.”",
                name: "Homeowner — Grand Haven, MI",
              },
            ].map((r) => (
              <div
                key={r.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-sm leading-7 text-white/70">{r.quote}</div>
                <div className="mt-4 text-sm font-semibold text-white/85">
                  {r.name}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CurveDivider flip className="bg-[var(--bg-1)]" />

      <section className="relative overflow-hidden">
        <BlobBackground className="opacity-70" />
        <Container className="relative py-16 sm:py-24">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-3)]">
                  Get started
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Ready to make your property green with envy?
                </h2>
                <p className="mt-3 text-base leading-7 text-white/65">
                  Tell us about your project and we’ll follow up quickly with a
                  plan and a free quote.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <Button href="/quote">Get a Free Quote</Button>
                <Button href="/services" variant="secondary">
                  View services
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
