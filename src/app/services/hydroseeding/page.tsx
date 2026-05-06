import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import {
  HomeIcon,
  BuildingIcon,
  MountainIcon,
  RouteIcon,
  WrenchIcon,
  WavesIcon,
  LayoutGridIcon,
  GolfFlagIcon,
  ZapIcon,
} from "@/components/Icons";

const hydroseedingApplications: {
  title: string;
  description: string;
  icon: ReactNode;
  image: string;
  imageAlt: string;
}[] = [
  {
    title: "Residential lawns",
    description:
      "New builds, renovations, and bare spots — hydroseeding gives homeowners fast, even coverage with less hand labor than sod. We match seed blends to sun, soil, and how you use the yard so the lawn establishes consistently across West Michigan.",
    icon: <HomeIcon />,
    image: "/images/services/home-hydroseeding.png",
    imageAlt: "Hydroseeding application on a residential home lawn",
  },
  {
    title: "Commercial properties",
    description:
      "Office parks, retail, industrial sites, and HOAs need turf that looks professional and holds up to traffic and weather. Hydroseeding scales efficiently for large footprints, berms, and islands — one crew, even coverage, and scheduling that fits your project timeline.",
    icon: <BuildingIcon />,
    image: "/images/services/commercial-hydroseeding-1.webp",
    imageAlt: "Commercial property hydroseeding in West Michigan",
  },
  {
    title: "Slopes & hillsides",
    description:
      "Steep grades need seed that stays put. The fiber mulch in the hydroseed slurry helps lock seed and fertilizer to the soil through rain and runoff — the same process many clients pair with dedicated erosion-control work on challenging terrain.",
    icon: <MountainIcon />,
    image: "/images/erosion-control-slope-hydroseeding.png",
    imageAlt: "Hydroseeding applied to a slope for grass establishment",
  },
  {
    title: "Roadside & right-of-way",
    description:
      "Roads and municipal corridors need quick, reliable establishment after grading. Hydroseeding covers long linear distances and uneven shoulders with uniform application — ideal for right-of-way and roadside stabilization.",
    icon: <RouteIcon />,
    image: "/images/services/roadside-hydroseeding.webp",
    imageAlt: "Roadside hydroseeding along a highway in West Michigan",
  },
  {
    title: "Construction sites",
    description:
      "After rough grade and before final punch, disturbed soil is ready for hydroseed. We help contractors meet schedule and appearance goals — from temporary stabilization with growth to finished turf around buildings and lots.",
    icon: <WrenchIcon />,
    image: "/images/erosion-control-construction-site.png",
    imageAlt: "Hydroseeding equipment on a construction site",
  },
  {
    title: "Lakefront & waterfront",
    description:
      "Shoreline banks and pond edges benefit from vegetation that reduces sediment and runoff. Hydroseeding establishes grass and appropriate mixes on graded banks while the mulch layer protects seed during the critical germination window.",
    icon: <WavesIcon />,
    image: "/images/erosion-control-lakefront-hydromulching.png",
    imageAlt: "Hydroseeding and stabilization near water in West Michigan",
  },
  {
    title: "New developments",
    description:
      "Subdivisions and multi-lot projects need repeatable quality at scale. Hydroseeding keeps crews moving lot to lot with consistent mix, coverage, and fiber mulch — so new development turf establishes on time across entire phases.",
    icon: <LayoutGridIcon />,
    image: "/images/erosion-control-new-development-hydromulching.png",
    imageAlt: "Hydroseeding in a new residential development",
  },
  {
    title: "Golf courses",
    description:
      "Fairways, roughs, cart paths, and drainage areas need turf that recovers quickly after renovation or weather events. Hydroseeding and hydromulching establish durable grass on large footprints and slopes — the same approach we've used on West Michigan courses like Macatawa Legends.",
    icon: <GolfFlagIcon />,
    image: "/images/gallery/macatawa-legends-hydroseed-2.png",
    imageAlt: "Workers applying hydroseed at Macatawa Legends golf course",
  },
  {
    title: "Utilities & corridors",
    description:
      "Gas, electric, pipeline, and telecom projects leave long strips of disturbed soil that must green up fast and stay put. Hydroseeding applies evenly over uneven trench lines and shoulders — one pass for seed, fertilizer, and mulch-backed establishment along utility right-of-way.",
    icon: <ZapIcon />,
    image: "/images/services/hydroseeder-truck-jobsite.webp",
    imageAlt: "Hydroseeder truck on a utility or large-scale corridor jobsite in West Michigan",
  },
];

export const metadata: Metadata = {
  title: "Hydroseeding | Holland, MI",
  description:
    "Professional hydroseeding in Holland, MI and West Michigan — residential lawns, commercial sites, erosion control, roadsides, utilities, golf courses, new development, and waterfront banks. Request a free quote from Fraaza Enterprises.",
  alternates: {
    canonical: "/services/hydroseeding",
  },
  openGraph: {
    title: "Hydroseeding | Holland, MI | Fraaza Enterprises",
    description:
      "Hydroseeding for new lawns and erosion control in West Michigan — residential and commercial.",
    url: "/services/hydroseeding",
  },
};

export default function HydroseedingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative -mt-[var(--header-height)] pt-[var(--header-height)] flex min-h-[min(52vh,30rem)] items-center overflow-x-hidden sm:min-h-0 sm:h-96">
        <Image
          src="/images/heroes/craftsman-home-hydroseeding.webp"
          alt="Hydroseeding application on a new home lawn"
          fill
          priority
          className="object-cover object-center sm:object-[center_30%]"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--bg-green)]/75 via-[var(--bg-green)]/35 to-transparent" />
        <Container className="relative z-10 py-10 sm:py-0">
          <SectionHeading
            as="h1"
            light
            eyebrow="Services"
            title="Hydroseeding"
            description="A fast, even application that helps establish healthy grass — perfect for new lawns, erosion control, and large areas."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/quote" className="w-full sm:w-auto">Get a Free Quote</Button>
            <Button href="/contact" variant="ghost" className="w-full sm:w-auto">
              <span className="text-white/80 hover:text-white">Ask a question</span>
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--bg-cream)]">
        <Container className="py-12 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <FadeIn>
              <div className="rounded-2xl bg-[var(--bg-elevated)] p-8 shadow-[var(--shadow-sm)]">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[var(--text-primary)]">
                  What is hydroseeding?
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--text-secondary)] sm:text-sm sm:leading-7">
                  Hydroseeding is a process where seed, fertilizer, water, and a
                  protective fiber mulch are mixed into a slurry and sprayed over
                  prepared soil. The mulch helps the seed stay in place and retain
                  moisture — supporting more consistent germination.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={2}>
              <div className="rounded-2xl bg-[var(--bg-elevated)] p-8 shadow-[var(--shadow-sm)]">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[var(--text-primary)]">
                  Benefits vs. sod
                </h3>
                <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--text-secondary)] sm:text-sm">
                  {[
                    "More cost-effective for larger areas",
                    "Even coverage and custom seed blends",
                    "Great for slopes and erosion control",
                    "Establishes strong roots when paired with proper watering",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Hydroseeding applied — mirrors erosion-control section treatment */}
      <section className="bg-[var(--bg-white)]">
        <Container className="py-12 sm:py-20 lg:py-24">
          <FadeIn>
            <SectionHeading
              eyebrow="Our Work"
              title="Hydroseeding applied"
              description="From new home lawns to commercial sites and roadside work, the same hydroseeding process scales to your project — even coverage, fiber mulch to hold seed and moisture, and professional equipment on every job."
              centered
            />
          </FadeIn>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            <FadeIn>
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl shadow-[var(--shadow-sm)] transition-shadow duration-300 hover:shadow-[var(--shadow-md)]">
                <Image
                  src="/images/services/commercial-hydroseeding-1.webp"
                  alt="Hydroseeder applying slurry on a large commercial property in West Michigan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn delay={2}>
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl shadow-[var(--shadow-sm)] transition-shadow duration-300 hover:shadow-[var(--shadow-md)]">
                <Image
                  src="/images/services/hydroseeding-mulch-application.webp"
                  alt="Close-up of hydroseeding slurry being sprayed for even lawn coverage"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Applications — mirrors erosion-control “Applications” grid */}
      <section className="bg-[var(--bg-cream)]">
        <Container className="py-12 sm:py-20 lg:py-24">
          <FadeIn>
            <SectionHeading
              eyebrow="Applications"
              title="Where we apply hydroseed"
              description="From backyards to commercial campuses, roadsides, utility corridors, golf courses, and new developments — the same professional hydroseeding process scales to your site across Holland, MI and West Michigan."
              centered
            />
          </FadeIn>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hydroseedingApplications.map((item, idx) => (
              <FadeIn key={item.title} delay={((idx % 3) + 1) as 1 | 2 | 3}>
                <div className="flex h-full flex-col rounded-2xl bg-[var(--bg-elevated)] p-7 shadow-[var(--shadow-sm)] transition-shadow duration-300 hover:shadow-[var(--shadow-md)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--bg-green)]/20">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-lg font-semibold text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-6 text-[var(--text-secondary)] sm:text-sm">{item.description}</p>
                  <div className="relative mt-4 aspect-[3/2] w-full overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--bg-white)]">
        <Container className="py-12 sm:py-20 lg:py-24">
          {/* Services list */}
          <FadeIn>
            <div className="rounded-2xl bg-[var(--bg-elevated)] p-8 shadow-[var(--shadow-sm)]">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[var(--text-primary)]">
                Hydroseeding services
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Residential lawns", desc: "New homes, renovations, and full-yard installs with prep and hydroseed tailored to your lot." },
                  { title: "Commercial properties", desc: "Large footprints, parking islands, and berms — even coverage and dependable scheduling." },
                  { title: "Erosion control", desc: "Coverage on slopes and disturbed soil to help reduce washouts while grass establishes." },
                  { title: "Roadside", desc: "Hydroseeding for right-of-way and roadside stabilization." },
                  { title: "Utilities & corridors", desc: "Trenches, shoulders, and linear ROW work after gas, electric, pipeline, or telecom installs." },
                  { title: "Golf courses", desc: "Fairways, roughs, slopes, and course renovation areas — durable establishment at golf scale." },
                  { title: "New development", desc: "Reliable scheduling and scale for subdivision and build sites." },
                  { title: "Waterfront & banks", desc: "Graded banks and pond edges where mulch-backed seed helps protect during establishment." },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl bg-[var(--bg-white)] p-5 transition-shadow duration-300 hover:shadow-[var(--shadow-sm)]"
                  >
                    <div className="text-base font-semibold text-[var(--text-primary)] sm:text-sm">{item.title}</div>
                    <div className="mt-2 text-base leading-6 text-[var(--text-secondary)] sm:text-sm">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/quote" className="w-full sm:w-auto">Request hydroseeding quote</Button>
              <Button href="/services" variant="outline" className="w-full sm:w-auto">
                Back to services
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
