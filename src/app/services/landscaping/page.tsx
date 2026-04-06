import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Landscaping | Holland, MI",
  description:
    "Landscaping services in Holland, MI and West Michigan including sod installation, retaining walls, tree planting, soil prep and seeding, and topsoil/bark. Request a free quote from Fraaza Enterprises.",
  openGraph: {
    title: "Landscaping | Holland, MI | Fraaza Enterprises",
    description:
      "Landscaping services across West Michigan: sod, retaining walls, planting, and more.",
    url: "/services/landscaping",
  },
};

export default function LandscapingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-center">
        <Image
          src="/images/portfolio/pool-landscape-design.jpg"
          alt="Professional landscaping around pool area"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[var(--bg-green)]/75" />
        <Container className="relative z-10">
          <SectionHeading
            light
            eyebrow="Services"
            title="Landscaping"
            description="From sod installs to retaining walls and planting, we build outdoor spaces that look great and hold up."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/quote">Get a Free Quote</Button>
            <Button href="/services" variant="ghost">
              <span className="text-white/80 hover:text-white">Back to services</span>
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--bg-cream)]">
        <Container className="py-16 sm:py-24">
          {/* Project photos */}
          <FadeIn>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="overflow-hidden rounded-2xl">
                <Image src="/images/portfolio/stone-retaining-wall-planting.jpg" alt="Stone retaining wall" width={400} height={300} className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <Image src="/images/portfolio/natural-stone-wall.jpg" alt="Natural stone wall" width={400} height={300} className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <Image src="/images/portfolio/river-rock-landscaping.jpg" alt="River rock landscaping" width={400} height={300} className="w-full aspect-[4/3] object-cover" />
              </div>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              { title: "Sod installation", desc: "Professional sod install for quick curb appeal and an instant green lawn." },
              { title: "Retaining walls", desc: "Functional and attractive walls to manage grade changes and define spaces." },
              { title: "Tree planting", desc: "Planting and placement guidance for a healthier, better-looking landscape." },
              { title: "Soil prep & seeding", desc: "Prep work that sets the foundation for a strong lawn and clean finish." },
              { title: "Topsoil & bark", desc: "Delivery and installation for clean beds and healthy growing conditions." },
            ].map((item, idx) => (
              <FadeIn key={item.title} delay={((idx % 2) + 1) as 1 | 2}>
                <div className="rounded-2xl bg-white p-6 shadow-[var(--shadow-sm)] transition-shadow duration-300 hover:shadow-[var(--shadow-md)]">
                  <div className="text-sm font-semibold text-[var(--bg-green)]">{item.title}</div>
                  <div className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">{item.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-10 rounded-2xl bg-[var(--bg-green)] p-8">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-white">
                Built for West Michigan properties
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                We tailor materials and methods to the site conditions — focusing
                on clean prep, proper grading, and quality installation so your
                landscape performs as good as it looks.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact#quote-form">Request landscaping quote</Button>
              <Button href="/services" variant="outline">
                Back to services
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
