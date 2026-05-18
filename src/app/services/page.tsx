import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/Button";


export const metadata: Metadata = {
  title: "Hydroseeding Services & More | Holland, MI",
  description:
    "West Michigan's hydroseeding experts. Professional hydroseeding and soil preparation — plus landscaping and snow plowing — in Holland, MI. Request a free quote from Fraaza Enterprises.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Hydroseeding Experts | Fraaza Enterprises",
    description:
      "Professional hydroseeding specialists in Holland, MI and West Michigan. Also offering soil preparation, landscaping, and snow plowing.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative -mt-[var(--header-height)] pt-[var(--header-height)] flex min-h-[17rem] items-center overflow-x-hidden sm:min-h-96">
        <Image
          src="/images/services/hydroseeder-landscaping-project.webp"
          alt="Fraaza Enterprises hydroseeder at work"
          fill
          priority
          className="object-cover object-[center_30%] sm:object-center"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
        <Container className="relative z-10 py-10 sm:py-12 lg:py-14">
          <SectionHeading
            as="h1"
            light
            eyebrow="Our Services"
            title="West Michigan's hydroseeding specialists"
            description="Hydroseeding is our core expertise — it's what we've built our reputation on since 2004. We also offer professional soil preparation, landscaping, and winter plowing."
          />
        </Container>
      </section>

      {/* Featured: Hydroseeding */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/heroes/lakefront-hydroseeding.webp"
          alt="Project background"
          fill
          className="object-cover object-[center_25%] sm:object-center"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-[var(--bg-dark)]/70" />
        <Container className="relative z-10 py-12 sm:py-20 lg:py-24">
          <FadeIn delay={1}>
            <ServiceCard
              title="Hydroseeding"
              description="Our core specialty. New lawn installation, erosion control, roadside, new development, and commercial properties. Fast, even coverage with professional-grade equipment — backed by 20+ years of dedicated experience."
              href="/services/hydroseeding"
              image="/images/heroes/craftsman-home-hydroseeding.webp"
              featured
            />
          </FadeIn>

          <FadeIn delay={2}>
            <div className="mt-10">
              <ServiceCard
                title="Soil Preparation"
                description="Soil testing, grading and leveling, soil amendments, old sod removal, and topsoil/compost installation. The right foundation for a healthy, thriving lawn."
                href="/services/soil-preparation"
                image="/images/heroes/new-build-landscaping.webp"
              />
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mt-16 mb-8 text-center">
              <span className="inline-block rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 backdrop-blur-sm">
                Additional Services
              </span>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2">
            <FadeIn delay={1}>
              <ServiceCard
                title="Landscaping"
                description="Sod installation, drain tile and yard drainage, retaining walls, Bobcat work — dirt moving, grading, back filling, brush mowing — plus planting, soil prep and seeding, topsoil and bark. We build outdoor spaces that perform as good as they look."
                href="/services/landscaping"
                image="/images/portfolio/pool-landscape-design.webp"
              />
            </FadeIn>
            <FadeIn delay={2}>
              <ServiceCard
                title="Snow Plowing"
                description="Plowing, salting, sidewalks, loader plowing, and snow blowing. Dependable winter service to keep your property safe and accessible."
                href="/services/snow-plowing"
                image="/images/services/snow-plow-truck.webp"
              />
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/services/hydroseeder-truck-jobsite.webp"
          alt="Hydroseeder truck on location"
          fill
          className="object-cover object-[center_30%] sm:object-center"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--bg-green)]/75 via-[var(--bg-green)]/45 to-[var(--bg-green)]/35 max-sm:from-[var(--bg-green)]/90 max-sm:via-[var(--bg-green)]/75 max-sm:to-[var(--bg-green)]/65" />
        <Container className="relative z-10 py-12 sm:py-16 lg:py-20">
          <FadeIn>
            <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
              <div className="flex-1">
                <h2 className="hyphens-auto break-words font-[family-name:var(--font-playfair)] text-2xl font-semibold text-white max-sm:[text-shadow:0_2px_18px_rgba(0,0,0,0.85),0_1px_3px_rgba(0,0,0,0.95)] sm:text-3xl">
                  Not sure what you need?
                </h2>
                <p className="mt-3 text-base text-white/65 max-sm:text-white max-sm:[text-shadow:0_1px_12px_rgba(0,0,0,0.85),0_1px_2px_rgba(0,0,0,0.95)]">
                  We&apos;ll assess your property and recommend the right services for your goals and budget.
                </p>
              </div>
              <Button href="/quote" className="w-full sm:w-auto">Request a Free Quote</Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
