import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Hydroseeding, landscaping, soil preparation, and snow plowing services in Holland, MI and West Michigan. Explore service details and request a free quote.",
  openGraph: {
    title: "Services | Fraaza Enterprises",
    description:
      "Hydroseeding, landscaping, soil preparation, and snow plowing services in Holland, MI and West Michigan.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-center">
        <Image
          src="/images/services/hydroseeder-landscaping-project.jpg"
          alt="Fraaza Enterprises hydroseeder at work"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[var(--bg-green)]/75" />
        <Container className="relative z-10">
          <SectionHeading
            light
            eyebrow="Our Services"
            title="Everything your property needs"
            description="From hydroseeding and landscaping to soil preparation and winter care — quality work done right the first time."
          />
        </Container>
      </section>

      {/* Service cards */}
      <section className="bg-[var(--bg-cream)]">
        <Container className="py-16 sm:py-24">
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn delay={1}>
              <ServiceCard
                title="Hydroseeding"
                description="New lawn installation, erosion control, roadside, new development, and commercial properties. Fast, even coverage with professional-grade equipment."
                href="/services/hydroseeding"
                imageSrc="/images/services/hydroseeding-mulch-application.jpg"
                imageAlt="Hydroseeding application on a prepared lawn area"
              />
            </FadeIn>
            <FadeIn delay={2}>
              <ServiceCard
                title="Landscaping"
                description="Sod installation, retaining walls, planting, soil prep and seeding, topsoil and bark. We build outdoor spaces that perform as good as they look."
                href="/services/landscaping"
                imageSrc="/images/portfolio/stone-retaining-wall-planting.jpg"
                imageAlt="Landscaping project with stone retaining wall and planting"
              />
            </FadeIn>
            <FadeIn delay={1}>
              <ServiceCard
                title="Soil Preparation"
                description="Soil testing, grading and leveling, amendments, sod removal, and topsoil/compost install. The right foundation for a healthy, thriving lawn."
                href="/services/soil-preparation"
                imageSrc="/images/services/soil-prep-boulder-edging.jpg"
                imageAlt="Soil preparation and grading work"
              />
            </FadeIn>
            <FadeIn delay={2}>
              <ServiceCard
                title="Snow Plowing"
                description="Plowing, salting, sidewalks, loader plowing, and snow blowing. Dependable winter service to keep your property safe and accessible."
                href="/services/snow-plowing"
                imageSrc="/images/services/snow-plow-truck.jpg"
                imageAlt="Snow plowing service"
              />
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[var(--bg-green)]">
        <Container className="py-16 sm:py-20">
          <FadeIn>
            <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
              <div className="flex-1">
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-white sm:text-3xl">
                  Not sure what you need?
                </h2>
                <p className="mt-3 text-base text-white/65">
                  We&apos;ll assess your property and recommend the right services for your goals and budget.
                </p>
              </div>
              <Button href="/quote">Request a Free Quote</Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
