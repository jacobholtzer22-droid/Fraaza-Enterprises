import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { HomeIcon, BuildingIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "What is Hydroseeding? | Holland, MI | West Michigan Landscaping",
  description:
    "Learn what hydroseeding is, how it works, and why it's the preferred lawn establishment method in Holland, MI and West Michigan. Compare hydroseeding vs sod, see the process, and discover residential and commercial applications. Fraaza Enterprises — owner-operated since 2004.",
  alternates: {
    canonical: "/hydroseeding",
  },
  openGraph: {
    title: "What is Hydroseeding? | Holland, MI | Fraaza Enterprises",
    description:
      "Hydroseeding explained — process, benefits vs sod, and residential and commercial uses for West Michigan properties.",
    url: "/hydroseeding",
  },
};

const processSteps = [
  {
    step: "1",
    title: "Site Preparation",
    description:
      "We grade and prepare the soil, removing debris and ensuring proper drainage. Good soil prep is the foundation of a successful hydroseed application.",
  },
  {
    step: "2",
    title: "Slurry Mixing",
    description:
      "Seed, fertilizer, water, and fiber mulch are blended into a nutrient-rich slurry in our commercial hydroseeder. Custom seed blends are matched to your soil and sun conditions.",
  },
  {
    step: "3",
    title: "Application",
    description:
      "The slurry is sprayed evenly across the prepared soil. The green mulch provides visual confirmation of full coverage, so no spots are missed.",
  },
  {
    step: "4",
    title: "Germination & Growth",
    description:
      "With proper watering, you'll see sprouts within 7–14 days. The fiber mulch retains moisture and protects seed from washout, promoting strong, even germination.",
  },
];

const comparisonItems = [
  { feature: "Cost", hydroseed: "30–50% less than sod", sod: "Higher material and labor costs" },
  { feature: "Coverage", hydroseed: "Even coverage on any terrain", sod: "Difficult on slopes and irregular areas" },
  { feature: "Seed blend", hydroseed: "Custom blends for your conditions", sod: "Limited to what's grown at the farm" },
  { feature: "Root system", hydroseed: "Roots grow directly in your soil", sod: "Transplanted roots need time to adapt" },
  { feature: "Best for large areas", hydroseed: "Ideal — fast application", sod: "Labor-intensive and expensive at scale" },
  { feature: "Erosion control", hydroseed: "Excellent — mulch holds soil in place", sod: "Good once established" },
];

export default function HydroseedingInfoPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative -mt-[var(--header-height)] pt-[var(--header-height)] flex min-h-[min(52vh,30rem)] items-center overflow-x-hidden sm:min-h-96">
        <Image
          src="/images/heroes/luxury-home-hydroseeding.webp"
          alt="Professional hydroseeding application on a West Michigan property"
          fill
          priority
          className="object-cover object-center sm:object-[center_30%]"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--bg-green)]/75 via-[var(--bg-green)]/35 to-transparent" />
        <Container className="relative z-10 py-10 sm:py-12 lg:py-14">
          <SectionHeading
            as="h1"
            light
            eyebrow="Hydroseeding Holland MI"
            title="What is hydroseeding?"
            description="The fast, cost-effective way to establish a beautiful, healthy lawn — trusted by West Michigan homeowners and businesses since 2004."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/quote" className="w-full sm:w-auto">Get a Free Quote</Button>
            <Button href="/care-and-watering" variant="ghost" className="w-full sm:w-auto">
              <span className="text-white/80 hover:text-white">Care & Watering Guide &rarr;</span>
            </Button>
          </div>
        </Container>
      </section>

      {/* What is hydroseeding */}
      <section className="bg-[var(--bg-cream)]">
        <Container className="py-12 sm:py-20 lg:py-24">
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <SectionHeading
                eyebrow="The Basics"
                title="Hydroseeding explained"
                centered
              />
              <div className="mt-8 space-y-5 text-base leading-7 text-[var(--text-secondary)]">
                <p>
                  Hydroseeding is a planting process that combines grass seed, fertilizer, water, and a protective fiber mulch into a thick slurry. This mixture is then sprayed evenly over prepared soil using specialized equipment. The result is fast, uniform coverage that promotes strong germination and healthy root development.
                </p>
                <p>
                  Unlike traditional hand-seeding or broadcasting, hydroseeding keeps seed locked in place with a protective mulch layer. This is especially important on slopes, large lots, and areas prone to erosion — common challenges across West Michigan properties in Holland, Zeeland, Grand Haven, and Hudsonville.
                </p>
                <p>
                  At Fraaza Enterprises, we use commercial-grade hydroseeding equipment and premium seed blends tailored to Michigan&apos;s climate. Owner Chad Fraaza is on every job, ensuring personal attention and professional-grade results.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-[var(--bg-white)]">
        <Container className="py-12 sm:py-20 lg:py-24">
          <FadeIn>
            <SectionHeading
              eyebrow="How It Works"
              title="The hydroseeding process"
              description="From soil prep to green grass — here's what to expect when you choose hydroseeding for your West Michigan property."
              centered
            />
          </FadeIn>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item, idx) => (
              <FadeIn key={item.step} delay={((idx % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="rounded-2xl bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-sm)] transition-shadow duration-300 hover:shadow-[var(--shadow-md)] h-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--bg-green)] text-sm font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-lg font-semibold text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-6 text-[var(--text-secondary)] sm:text-sm sm:leading-6">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Hydroseeding vs Sod */}
      <section className="bg-[var(--bg-green)]">
        <Container className="py-12 sm:py-20 lg:py-24">
          <FadeIn>
            <SectionHeading
              light
              eyebrow="Comparison"
              title="Hydroseeding vs. sod"
              description="Both establish a lawn, but hydroseeding offers significant advantages — especially for larger properties and challenging terrain in West Michigan."
              centered
            />
          </FadeIn>
          <FadeIn delay={2}>
            <div className="-mx-4 mt-14 overflow-x-auto px-4 sm:mx-0 sm:overflow-x-visible sm:px-0">
            <div className="min-w-0 overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm">
              <div className="hidden sm:grid sm:grid-cols-3 border-b border-white/10 px-6 py-4">
                <div className="text-sm font-semibold text-[var(--accent-light)]">Feature</div>
                <div className="text-sm font-semibold text-[var(--accent-light)]">Hydroseeding</div>
                <div className="text-sm font-semibold text-[var(--accent-light)]">Sod</div>
              </div>
              {comparisonItems.map((row) => (
                <div
                  key={row.feature}
                  className="grid gap-1 border-b border-white/5 px-6 py-4 sm:grid-cols-3 sm:gap-0"
                >
                  <div className="text-sm font-semibold text-white">{row.feature}</div>
                  <div className="text-sm text-white/80">{row.hydroseed}</div>
                  <div className="text-sm text-white/60">{row.sod}</div>
                </div>
              ))}
            </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Residential & Commercial */}
      <section className="bg-[var(--bg-cream)]">
        <Container className="py-12 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <FadeIn>
              <div className="rounded-2xl bg-[var(--bg-elevated)] p-8 shadow-[var(--shadow-sm)] h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--bg-green)]/20">
                  <HomeIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-playfair)] text-xl font-semibold text-[var(--text-primary)]">
                  Residential hydroseeding
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--text-secondary)] sm:text-sm sm:leading-7">
                  Whether you&apos;re establishing a lawn on a new build, repairing bare patches, or re-doing your entire yard, hydroseeding delivers lush, even coverage at a fraction of the cost of sod. We work with homeowners across Holland, Zeeland, Grand Haven, Hudsonville, and surrounding West Michigan communities.
                </p>
                <ul className="mt-5 space-y-2 text-base text-[var(--text-secondary)] sm:text-sm">
                  {["New construction lawns", "Full yard renovations", "Backyard and side yard coverage", "Slope stabilization around homes"].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={2}>
              <div className="rounded-2xl bg-[var(--bg-elevated)] p-8 shadow-[var(--shadow-sm)] h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--bg-green)]/20">
                  <BuildingIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-playfair)] text-xl font-semibold text-[var(--text-primary)]">
                  Commercial hydroseeding
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--text-secondary)] sm:text-sm sm:leading-7">
                  Hydroseeding is the go-to choice for commercial properties, new developments, and municipal projects. It scales efficiently, covers large areas quickly, and meets erosion-control requirements for construction sites and roadside stabilization.
                </p>
                <ul className="mt-5 space-y-2 text-base text-[var(--text-secondary)] sm:text-sm">
                  {["Subdivision and new development sites", "Commercial property landscaping", "Roadside and right-of-way seeding", "Post-construction erosion control"].map((item) => (
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

      {/* CTA */}
      <section className="relative min-h-[min(46vh,26rem)] overflow-hidden sm:min-h-0">
        <Image
          src="/images/heroes/hydroseeding-new-home.webp"
          alt="Freshly hydroseeded lawn in West Michigan"
          fill
          className="object-cover object-center sm:object-[center_30%]"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black/30" />
        <Container className="relative z-10 py-12 sm:py-20 lg:py-28">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="hyphens-auto break-words font-[family-name:var(--font-playfair)] text-2xl font-semibold leading-tight text-white sm:text-4xl">
                Ready to hydroseed your property?
              </h2>
              <p className="mt-5 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
                Get a free estimate for your Holland, MI or West Michigan project. Owner Chad Fraaza will personally assess your property.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button href="/quote" className="w-full sm:w-auto">Get a Free Quote</Button>
                <Button href="/erosion-control" variant="ghost" className="w-full sm:w-auto">
                  <span className="text-white/80 hover:text-white">Erosion Control &rarr;</span>
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
