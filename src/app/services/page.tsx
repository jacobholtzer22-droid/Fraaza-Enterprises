import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";

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
      <section className="bg-[var(--bg-0)]">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            eyebrow="Services"
            title="Hydroseeding, landscaping, and property care"
            description="Choose a service below to learn what’s included and where we can help across West Michigan."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <ServiceCard
              title="Hydroseeding"
              description="New lawn installation, erosion control, roadside, new development, and commercial properties."
              href="/services/hydroseeding"
              imageSrc="/images/client/placeholder-hydroseeding.svg"
              imageAlt="Hydroseeding application on a prepared lawn area"
            />
            <ServiceCard
              title="Landscaping"
              description="Sod installation, retaining walls, planting, soil prep and seeding, topsoil and bark."
              href="/services/landscaping"
              imageSrc="/images/client/placeholder-landscaping.svg"
              imageAlt="Landscaping project with fresh sod and planting"
            />
            <ServiceCard
              title="Soil Preparation"
              description="Soil testing, grading and leveling, amendments, sod removal, and topsoil/compost install."
              href="/services/soil-preparation"
              imageSrc="/images/client/placeholder-soil-prep.svg"
              imageAlt="Soil preparation and grading work for a new lawn"
            />
            <ServiceCard
              title="Snow Plowing"
              description="Plowing, salting, sidewalks, loader plowing, and snow blowing."
              href="/services/snow-plowing"
              imageSrc="/images/client/placeholder-snow-plowing.svg"
              imageAlt="Snow plowing service on a driveway"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}

