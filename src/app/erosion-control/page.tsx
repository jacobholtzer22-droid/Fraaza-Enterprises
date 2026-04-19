import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import {
  MountainIcon,
  RouteIcon,
  WrenchIcon,
  BuildingIcon,
  WavesIcon,
  LayoutGridIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Erosion Control with Hydromulching | Holland, MI | West Michigan Landscaping",
  description:
    "Hydromulching for erosion control in Holland, MI and West Michigan. Protect slopes, roadsides, construction sites, and commercial properties from soil erosion. Fraaza Enterprises — trusted since 2004.",
  alternates: {
    canonical: "/erosion-control",
  },
  openGraph: {
    title: "Erosion Control with Hydromulching | Fraaza Enterprises",
    description:
      "Professional erosion control hydromulching for slopes, roadsides, and commercial sites across West Michigan.",
    url: "/erosion-control",
  },
};

const erosionApplications: { title: string; description: string; icon: ReactNode }[] = [
  {
    title: "Slopes & hillsides",
    description:
      "Steep grades are the most common erosion challenge in West Michigan. Hydromulching bonds a protective fiber matrix directly to the soil — stabilizing slopes where traditional methods would slide or wash away.",
    icon: <MountainIcon />,
  },
  {
    title: "Roadside & right-of-way",
    description:
      "MDOT and municipal projects require fast, reliable erosion protection along roads and highways. Our hydromulching provides compliant, even coverage for right-of-way stabilization across West Michigan.",
    icon: <RouteIcon />,
  },
  {
    title: "Construction sites",
    description:
      "Disturbed soil from grading and excavation is highly vulnerable to erosion. Hydromulching quickly stabilizes exposed ground to meet stormwater management and erosion-control permit requirements.",
    icon: <WrenchIcon />,
  },
  {
    title: "Commercial properties",
    description:
      "Retain soil, protect drainage systems, and maintain a professional appearance around parking lots, retention ponds, and building perimeters with professional hydromulching.",
    icon: <BuildingIcon />,
  },
  {
    title: "Lakefront & waterfront",
    description:
      "West Michigan's lakefront properties face unique erosion challenges. Hydromulching helps stabilize shoreline banks and prevent sediment runoff into waterways.",
    icon: <WavesIcon />,
  },
  {
    title: "New developments",
    description:
      "Subdivision grading leaves acres of exposed soil. Hydromulching scales efficiently to cover large development sites quickly, reducing erosion risk before and after construction.",
    icon: <LayoutGridIcon />,
  },
];

export default function ErosionControlPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-center">
        <Image
          src="/images/services/roadside-hydroseeding.webp"
          alt="Roadside erosion control hydromulching in West Michigan"
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
            description="Hydromulching is the most effective way to stabilize soil, prevent washouts, and protect exposed terrain on slopes and construction sites across Holland, MI and West Michigan."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/quote" className="w-full sm:w-auto">Get a Free Quote</Button>
            <Button href="/hydromulching" variant="ghost" className="w-full sm:w-auto">
              <span className="text-white/80 hover:text-white">What is Hydromulching? &rarr;</span>
            </Button>
          </div>
        </Container>
      </section>

      {/* How hydromulching solves erosion */}
      <section className="bg-[var(--bg-cream)]">
        <Container className="py-16 sm:py-24">
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <SectionHeading
                eyebrow="The Solution"
                title="How hydromulching stops erosion"
                centered
              />
              <div className="mt-8 space-y-5 text-base leading-7 text-[var(--text-secondary)]">
                <p>
                  Erosion happens when exposed soil is left unprotected from rain, wind, and runoff. In West Michigan — where spring rains and freeze-thaw cycles are common — unprotected soil can erode rapidly, causing property damage, clogged drainage, and environmental harm.
                </p>
                <p>
                  Hydromulching solves this by applying a thick layer of fiber mulch, tackifier, and water as a bonded slurry directly onto exposed soil. The mulch matrix locks soil particles in place on contact, absorbs rainfall impact, and dramatically slows surface runoff — stopping erosion immediately, before any vegetation is needed.
                </p>
                <p>
                  Unlike erosion blankets or straw alone, hydromulching delivers a continuous, wind-resistant protective layer that conforms to irregular terrain — covering steep slopes, ditches, and rough-graded areas in a single application.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Erosion control photo */}
      <section className="bg-[var(--bg-white)]">
        <Container className="py-16 sm:py-24">
          <FadeIn>
            <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl shadow-[var(--shadow-md)]">
              <Image
                src="/images/erosion-control-slope-hydroseeding.png"
                alt="Hydromulching a steep slope for erosion control in West Michigan"
                width={800}
                height={600}
                className="h-auto w-full object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Golf course hydromulching gallery */}
      <section className="bg-[var(--bg-cream)]">
        <Container className="py-16 sm:py-24">
          <FadeIn>
            <SectionHeading
              eyebrow="Golf Course Work"
              title="Hydromulching for golf courses"
              description="We've partnered with golf courses across West Michigan to restore turf, stabilize slopes, and establish durable ground cover on fairways, roughs, and drainage areas."
              centered
            />
          </FadeIn>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "/images/gallery/macatawa-legends-hydroseed-1.png", alt: "Golf course hydromulching at Macatawa Legends — view 1" },
              { src: "/images/gallery/macatawa-legends-hydroseed-2.png", alt: "Golf course hydromulching at Macatawa Legends — view 2" },
              { src: "/images/gallery/macatawa-legends-hydroseed-3.png", alt: "Golf course hydromulching at Macatawa Legends — view 3" },
              { src: "/images/gallery/macatawa-legends-hydroseed-4.png", alt: "Golf course hydromulching at Macatawa Legends — view 4" },
              { src: "/images/gallery/macatawa-legends-hydroseed-5.png", alt: "Golf course hydromulching at Macatawa Legends — view 5" },
              { src: "/images/gallery/macatawa-legends-hydroseed-7.png", alt: "Golf course hydromulching at Macatawa Legends — view 6" },
            ].map((photo) => (
              <FadeIn key={photo.src}>
                <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-sm)] transition-shadow duration-300 hover:shadow-[var(--shadow-md)]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={600}
                    height={400}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Product Resources */}
      <section className="bg-[var(--bg-white)]">
        <Container className="py-16 sm:py-24">
          <FadeIn>
            <SectionHeading
              eyebrow="Resources"
              title="Product information & application guides"
              description="Download brochures and guides for the erosion control products we use — trusted, industry-leading solutions for every project."
              centered
            />
          </FadeIn>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "ProMatrix",
                description:
                  "High-performance engineered fiber matrix — a superior alternative to erosion control blankets for steep slopes and critical areas.",
                href: "/documents/ProMatrix-Brochure.pdf",
              },
              {
                title: "Flexterra",
                description:
                  "Flexible growth medium designed for challenging environments. Fast vegetation establishment and long-term erosion protection.",
                href: "/documents/Flexterra-Brochure.pdf",
              },
              {
                title: "Product Application Guide",
                description:
                  "Specifications, mix ratios, and best practices for our full erosion control product lineup.",
                href: "/documents/Application-Guide-ET-FGM-FGM-BFM-SMM.pdf",
              },
            ].map((item) => (
              <FadeIn key={item.title}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl bg-[var(--bg-cream)] p-7 shadow-[var(--shadow-sm)] transition-shadow duration-300 hover:shadow-[var(--shadow-md)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--bg-green)]/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[var(--bg-green)]"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="12" y1="18" x2="12" y2="12" />
                      <polyline points="9 15 12 18 15 15" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-lg font-semibold text-[var(--bg-green)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--bg-green)] group-hover:underline">
                    View
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Applications */}
      <section className="bg-[var(--bg-cream)]">
        <Container className="py-16 sm:py-24">
          <FadeIn>
            <SectionHeading
              eyebrow="Applications"
              title="Where we control erosion"
              description="From steep residential slopes to large-scale commercial sites, hydromulching provides reliable erosion protection across West Michigan."
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

      {/* Why hydromulching beats alternatives */}
      <section className="bg-[var(--bg-green)]">
        <Container className="py-16 sm:py-24">
          <FadeIn>
            <SectionHeading
              light
              eyebrow="Why Hydromulching"
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
                  title: "Long-lasting protection",
                  description:
                    "Unlike straw or erosion blankets that degrade and shift, hydromulch forms a durable, bonded layer that holds soil in place through multiple storm cycles.",
                },
                {
                  title: "Cost-effective at scale",
                  description:
                    "Hydromulching covers large, irregular, and steep areas faster and more affordably than installing erosion blankets or sod.",
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
                  Hydromulching FAQ
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
