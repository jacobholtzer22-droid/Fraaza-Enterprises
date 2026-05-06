import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Landscaping | Holland, MI",
  description:
    "Landscaping services in Holland, MI and West Michigan including sod installation, retaining walls, drain tile installation, Bobcat services (grading, dirt moving, backfill, brush mowing), yard drainage, tree planting, soil prep and seeding, and topsoil/bark. Request a free quote from Fraaza Enterprises.",
  alternates: {
    canonical: "/services/landscaping",
  },
  openGraph: {
    title: "Landscaping | Holland, MI | Fraaza Enterprises",
    description:
      "Landscaping across West Michigan: sod, drain tile, retaining walls, Bobcat grading and prep, planting, and more.",
    url: "/services/landscaping",
  },
};

export default function LandscapingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[17rem] items-center overflow-x-hidden sm:h-96 sm:min-h-0">
        <Image
          src="/images/portfolio/pool-landscape-design.webp"
          alt="Professional landscaping around pool area"
          fill
          priority
          className="object-cover object-[center_30%] sm:object-center"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--bg-green)]/75 via-[var(--bg-green)]/35 to-transparent" />
        <Container className="relative z-10 py-10 sm:py-0">
          <SectionHeading
            as="h1"
            light
            eyebrow="Services"
            title="Landscaping"
            description="From sod installation and drain tile to retaining walls, planting, and Bobcat work, we build outdoor spaces that look great, drain right, and hold up."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/quote" className="w-full sm:w-auto">Get a Free Quote</Button>
            <Button href="/services" variant="ghost" className="w-full sm:w-auto">
              <span className="text-white/80 hover:text-white">Back to services</span>
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--bg-cream)]">
        <Container className="py-12 sm:py-20 lg:py-24">
          {/* Project photos */}
          <FadeIn>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="overflow-hidden rounded-2xl">
                <Image src="/images/portfolio/stone-retaining-wall-planting.webp" alt="Stone retaining wall" width={400} height={300} className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <Image src="/images/portfolio/natural-stone-wall.webp" alt="Natural stone wall" width={400} height={300} className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <Image src="/images/portfolio/river-rock-landscaping.webp" alt="River rock landscaping" width={400} height={300} className="w-full aspect-[4/3] object-cover" />
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <p className="mt-12 max-w-3xl text-base leading-7 text-[var(--text-secondary)] sm:text-sm sm:leading-6">
              We pair{" "}
              <span className="font-semibold text-[var(--text-primary)]">sod installation</span>{" "}
              with solid grading and prep, and we handle{" "}
              <span className="font-semibold text-[var(--text-primary)]">drain tile installation</span>{" "}
              when standing water or foundation moisture needs a real fix — so your lawn and landscape stay usable year-round.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              { title: "Sod installation", desc: "Professional sod install on properly graded, drained soil for quick curb appeal and an instant green lawn." },
              { title: "Retaining walls", desc: "Functional and attractive walls to manage grade changes and define spaces." },
              { title: "Drain tile installation", desc: "Move water away from foundations, low spots, and saturated areas with correctly sloped tile and stone — often paired with grading and backfill." },
              { title: "Yard drainage solutions", desc: "Catch basins, downspout tie-ins, and surface drainage to keep your lawn dry and protect hardscapes." },
              { title: "Tree planting", desc: "Planting and placement guidance for a healthier, better-looking landscape." },
              { title: "Soil prep & seeding", desc: "Prep work that sets the foundation for a strong lawn and clean finish." },
              { title: "Topsoil & bark", desc: "Delivery and installation for clean beds and healthy growing conditions." },
              {
                title: "Bobcat services",
                desc: "Dirt moving, grading, back filling, brush mowing, and excavation or trenching for drain tile — efficient machine work that keeps your project moving.",
              },
            ].map((item, idx) => (
              <FadeIn key={item.title} delay={((idx % 2) + 1) as 1 | 2}>
                <div className="rounded-2xl bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-sm)] transition-shadow duration-300 hover:shadow-[var(--shadow-md)]">
                  <div className="text-base font-semibold text-[var(--text-primary)] sm:text-sm">{item.title}</div>
                  <div className="mt-2 text-base leading-7 text-[var(--text-secondary)] sm:text-sm sm:leading-6">{item.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-10 rounded-2xl bg-[var(--bg-green)] p-8">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-white">
                Built for West Michigan properties
              </h3>
              <p className="mt-3 text-base leading-7 text-white/65 sm:text-sm">
                We tailor materials and methods to the site conditions — focusing
                on clean prep, proper grading, and quality installation so your
                landscape performs as good as it looks.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/quote" className="w-full sm:w-auto">Request landscaping quote</Button>
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
