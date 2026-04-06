import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Erosion Control with Hydroseeding | Holland, MI | West Michigan Landscaping",
  description:
    "Hydroseeding for erosion control in Holland, MI and West Michigan. Protect slopes, roadsides, construction sites, and commercial properties from soil erosion. Fraaza Enterprises — trusted since 2004.",
  alternates: {
    canonical: "/erosion-control",
  },
  openGraph: {
    title: "Erosion Control with Hydroseeding | Fraaza Enterprises",
    description:
      "Professional erosion control hydroseeding for slopes, roadsides, and commercial sites across West Michigan.",
    url: "/erosion-control",
  },
};

const erosionApplications = [
  {
    title: "Slopes & hillsides",
    description:
      "Steep grades are the most common erosion challenge in West Michigan. Hydroseeding anchors seed in place with fiber mulch — even on slopes where traditional seeding or sod would slide or wash away.",
    icon: "⛰️",
  },
  {
    title: "Roadside & right-of-way",
    description:
      "MDOT and municipal projects require fast, reliable ground cover along roads and highways. Our hydroseeding provides compliant, even coverage for right-of-way stabilization across West Michigan.",
    icon: "🛣️",
  },
  {
    title: "Construction sites",
    description:
      "Disturbed soil from grading and excavation is highly vulnerable to erosion. Hydroseeding quickly establishes ground cover to meet stormwater management and erosion-control permit requirements.",
    icon: "🏗️",
  },
  {
    title: "Commercial properties",
    description:
      "Retain soil, protect drainage systems, and maintain a professional appearance around parking lots, retention ponds, and building perimeters with professional hydroseeding.",
    icon: "🏢",
  },
  {
    title: "Lakefront & waterfront",
    description:
      "West Michigan's lakefront properties face unique erosion challenges. Hydroseeding helps stabilize shoreline banks and prevent sediment runoff into waterways.",
    icon: "🌊",
  },
  {
    title: "New developments",
    description:
      "Subdivision grading leaves acres of exposed soil. Hydroseeding scales efficiently to cover large development sites quickly, reducing erosion risk before and after construction.",
    icon: "🏘️",
  },
];

export default function ErosionControlPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-center">
        <Image
          src="/images/services/roadside-hydroseeding.webp"
          alt="Roadside erosion control hydroseeding in West Michigan"
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
            eyebrow="Erosion Control"
            title="Protect your property from erosion"
            description="Hydroseeding is the most effective way to stabilize soil, prevent washouts, and establish lasting ground cover on slopes and exposed terrain across Holland, MI and West Michigan."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/quote" className="w-full sm:w-auto">Get a Free Quote</Button>
            <Button href="/hydroseeding" variant="ghost" className="w-full sm:w-auto">
              <span className="text-white/80 hover:text-white">What is Hydroseeding? &rarr;</span>
            </Button>
          </div>
        </Container>
      </section>

      {/* How hydroseeding solves erosion */}
      <section className="bg-[var(--bg-cream)]">
        <Container className="py-16 sm:py-24">
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <SectionHeading
                eyebrow="The Solution"
                title="How hydroseeding stops erosion"
                centered
              />
              <div className="mt-8 space-y-5 text-base leading-7 text-[var(--text-secondary)]">
                <p>
                  Erosion happens when exposed soil is left unprotected from rain, wind, and runoff. In West Michigan — where spring rains and freeze-thaw cycles are common — unprotected soil can erode rapidly, causing property damage, clogged drainage, and environmental harm.
                </p>
                <p>
                  Hydroseeding solves this by combining seed, fertilizer, and fiber mulch into a slurry that bonds to the soil surface. The mulch layer acts as a protective blanket: it holds soil particles in place, retains moisture for germination, and shields seeds from being washed downhill. As the grass establishes, its root system provides long-term soil stabilization.
                </p>
                <p>
                  Unlike erosion blankets or straw alone, hydroseeding delivers both immediate surface protection and a permanent vegetative solution — all in a single application.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Applications */}
      <section className="bg-[var(--bg-white)]">
        <Container className="py-16 sm:py-24">
          <FadeIn>
            <SectionHeading
              eyebrow="Applications"
              title="Where we control erosion"
              description="From steep residential slopes to large-scale commercial sites, hydroseeding provides reliable erosion protection across West Michigan."
              centered
            />
          </FadeIn>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {erosionApplications.map((item, idx) => (
              <FadeIn key={item.title} delay={((idx % 3) + 1) as 1 | 2 | 3}>
                <div className="rounded-2xl bg-[var(--bg-cream)] p-7 shadow-[var(--shadow-sm)] transition-shadow duration-300 hover:shadow-[var(--shadow-md)] h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--bg-green)]/10">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-lg font-semibold text-[var(--bg-green)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Why hydroseeding beats alternatives */}
      <section className="bg-[var(--bg-green)]">
        <Container className="py-16 sm:py-24">
          <FadeIn>
            <SectionHeading
              light
              eyebrow="Why Hydroseeding"
              title="Better than blankets, straw, or sod"
              centered
            />
          </FadeIn>
          <FadeIn delay={2}>
            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Immediate protection",
                  description:
                    "The fiber mulch bonds to soil on contact, providing surface protection from the moment it's applied — no waiting for grass to grow.",
                },
                {
                  title: "Permanent solution",
                  description:
                    "Unlike straw or erosion blankets that degrade, hydroseeded grass establishes a root network that stabilizes soil for years.",
                },
                {
                  title: "Cost-effective at scale",
                  description:
                    "Hydroseeding covers large, irregular, and steep areas faster and more affordably than installing erosion blankets or sod.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white/10 p-7 backdrop-blur-sm"
                >
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/75">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[var(--bg-cream)]">
        <Container className="py-20 sm:py-28">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <SectionHeading
                eyebrow="Get Started"
                title="Erosion threatening your property?"
                description="Contact Fraaza Enterprises for a free erosion control assessment. We serve Holland, Zeeland, Grand Haven, Hudsonville, and all of West Michigan."
                centered
              />
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button href="/quote" className="w-full sm:w-auto">Get a Free Quote</Button>
                <Button href="/faq" variant="outline" className="w-full sm:w-auto">
                  Hydroseeding FAQ
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
