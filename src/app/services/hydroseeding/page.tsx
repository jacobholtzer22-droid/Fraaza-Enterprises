import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Hydroseeding | Holland, MI",
  description:
    "Professional hydroseeding in Holland, MI and West Michigan for new lawns, erosion control, roadside projects, new development, and commercial properties. Request a free quote from Fraaza Enterprises.",
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
      <section className="relative h-64 min-h-[16rem] overflow-x-hidden sm:h-96 sm:min-h-0 flex items-center">
        <Image
          src="/images/heroes/craftsman-home-hydroseeding.webp"
          alt="Hydroseeding application on a new home lawn"
          fill
          priority
          className="object-cover object-[center_30%] sm:object-center"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--bg-green)]/75 via-[var(--bg-green)]/35 to-transparent" />
        <Container className="relative z-10 py-8 sm:py-0">
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
                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
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
                <ul className="mt-4 space-y-3 text-sm text-[var(--text-secondary)]">
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

      {/* Hydroseeding in action — mirrors erosion-control “in action” treatment */}
      <section className="bg-[var(--bg-white)]">
        <Container className="py-12 sm:py-20 lg:py-24">
          <FadeIn>
            <SectionHeading
              eyebrow="Our Work"
              title="Hydroseeding in action"
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

      <section className="bg-[var(--bg-cream)]">
        <Container className="py-12 sm:py-20 lg:py-24">
          {/* Services list */}
          <FadeIn>
            <div className="rounded-2xl bg-[var(--bg-elevated)] p-8 shadow-[var(--shadow-sm)]">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[var(--text-primary)]">
                Hydroseeding services
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { title: "New lawn installation", desc: "Full prep and hydroseed application for brand-new lawns." },
                  { title: "Erosion control", desc: "Coverage on slopes and disturbed soil to help reduce washouts." },
                  { title: "Roadside", desc: "Hydroseeding for right-of-way and roadside stabilization." },
                  { title: "New development", desc: "Reliable scheduling and scale for subdivision and build sites." },
                  { title: "Commercial properties", desc: "Durable, professional results for businesses and facilities." },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl bg-[var(--bg-white)] p-5 transition-shadow duration-300 hover:shadow-[var(--shadow-sm)]"
                  >
                    <div className="text-sm font-semibold text-[var(--text-primary)]">{item.title}</div>
                    <div className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{item.desc}</div>
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
