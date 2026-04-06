import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Soil Preparation | Holland, MI",
  description:
    "Soil preparation services in Holland, MI and West Michigan including soil testing, grading and leveling, soil amendments, old sod removal, and topsoil/compost installation. Request a free quote from Fraaza Enterprises.",
  openGraph: {
    title: "Soil Preparation | Holland, MI | Fraaza Enterprises",
    description:
      "Soil testing, grading, amendments, sod removal, and topsoil/compost installs across West Michigan.",
    url: "/services/soil-preparation",
  },
};

export default function SoilPreparationPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-center">
        <Image
          src="/images/heroes/new-build-landscaping.jpg"
          alt="New build with soil preparation and landscaping"
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
            title="Soil Preparation"
            description="Great lawns start below the surface. We prep, grade, amend, and build the foundation your grass needs to thrive."
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
          {/* Photos */}
          <FadeIn>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-2xl">
                <Image src="/images/services/soil-prep-boulder-edging.jpg" alt="Soil preparation with boulder edging" width={600} height={400} className="w-full aspect-[3/2] object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <Image src="/images/services/topsoil-delivery.jpg" alt="Topsoil delivery" width={600} height={400} className="w-full aspect-[3/2] object-cover" />
              </div>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              { title: "Soil testing", desc: "Identify nutrient needs and pH concerns so your lawn has a better start." },
              { title: "Grading & leveling", desc: "Correct drainage issues and create a smooth, mowable surface." },
              { title: "Soil amendments", desc: "Add nutrients and organic matter to support stronger growth." },
              { title: "Old sod removal", desc: "Remove tired turf and prep for a clean install or reseed." },
              { title: "Topsoil / compost install", desc: "Bring in quality material and spread to the right depth for success." },
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
                The right prep makes everything easier
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                Proper grading, clean removal, and the right soil blend reduces
                headaches later — better drainage, better germination, and better
                long-term results.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact#quote-form">Request soil prep quote</Button>
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
