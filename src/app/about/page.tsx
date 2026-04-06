import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About West Michigan's Hydroseeding Experts | Holland, MI",
  description:
    "Fraaza Enterprises has specialized in hydroseeding since 2004. Owner-operated by Chad Fraaza, we're West Michigan's trusted hydroseeding experts — also offering soil preparation, landscaping, and snow plowing.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Fraaza Enterprises",
    description:
      "Specializing in hydroseeding since 2004 — owner-operated across West Michigan. Also offering soil preparation, landscaping, and snow plowing.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-center">
        <Image
          src="/images/services/hydroseeder-truck-jobsite.webp"
          alt="Fraaza Enterprises hydroseeder truck"
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
            eyebrow="About"
            title={`Specializing in hydroseeding since ${SITE.since}`}
            description={`${SITE.name} is owned and operated by ${SITE.owner}. We're West Michigan's dedicated hydroseeding experts — also offering soil preparation, landscaping, and snow plowing for residential, commercial, and industrial projects.`}
          />
        </Container>
      </section>

      {/* Content */}
      <section className="bg-[var(--bg-cream)]">
        <Container className="py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <FadeIn>
              <div className="rounded-2xl bg-white p-8 shadow-[var(--shadow-sm)]">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[var(--bg-green)]">
                  What we&apos;re known for
                </h3>
                <ul className="mt-6 space-y-4 text-sm text-[var(--text-secondary)]">
                  {[
                    "Hydroseeding specialists — new lawns, erosion control, and large-scale projects",
                    "20+ years of dedicated hydroseeding experience across West Michigan",
                    "Soil testing, grading, amendments, and topsoil/compost installs",
                    "Additional services: landscaping, sod, retaining walls, and snow plowing",
                    "Member of the International Association of Hydroseeding Professionals (IAHP)",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={2}>
              <div className="rounded-2xl bg-white p-8 shadow-[var(--shadow-sm)]">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[var(--bg-green)]">
                  Professional standards
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                  We&apos;re a proud member of the International Association of
                  Hydroseeding Professionals (IAHP) and stay committed to best
                  practices that protect your property and deliver consistent
                  results.
                </p>
                <div className="mt-6 rounded-xl bg-[var(--bg-cream)] px-5 py-4 text-sm text-[var(--text-secondary)]">
                  <span className="font-semibold text-[var(--bg-green)]">Our motto:</span>{" "}
                  {SITE.motto}
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl">
                <Image
                  src="/images/portfolio/macatawa-lawn-established.webp"
                  alt="Established lawn at Macatawa Legends"
                  width={600}
                  height={400}
                  className="w-full object-cover aspect-[3/2]"
                />
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact#quote-form" className="w-full sm:w-auto">Request a free quote</Button>
              <Button href="/services" variant="outline" className="w-full sm:w-auto">
                View services
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
