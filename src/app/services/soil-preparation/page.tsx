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
  alternates: {
    canonical: "/services/soil-preparation",
  },
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
      <section className="relative flex min-h-[17rem] items-center overflow-x-hidden sm:h-96 sm:min-h-0">
        <Image
          src="/images/heroes/new-build-landscaping.webp"
          alt="New build with soil preparation and landscaping"
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
            title="Soil Preparation"
            description="Great lawns start below the surface. We prep, grade, amend, and build the foundation your grass needs to thrive."
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
          {/* Photos */}
          <FadeIn>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-2xl">
                <Image src="/images/services/soil-prep-boulder-edging.webp" alt="Soil preparation with boulder edging" width={600} height={400} className="w-full aspect-[3/2] object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <Image src="/images/services/topsoil-delivery.webp" alt="Topsoil delivery" width={600} height={400} className="w-full aspect-[3/2] object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <Image src="/images/bobcat-soil-conditioner.png" alt="Bobcat soil conditioner preparing ground for seeding" width={600} height={400} className="w-full aspect-[3/2] object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <Image src="/images/gallery/soil-prep-prepared-yard.png" alt="Prepared soil in front yard ready for hydroseeding" width={600} height={400} className="w-full aspect-[3/2] object-cover" />
              </div>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Soil preparation",
                desc: "Power grader raking and finish hand raking to create the perfect seed bed.",
              },
              { title: "Soil testing", desc: "Identify nutrient needs and pH concerns so your lawn has a better start." },
              { title: "Grading & leveling", desc: "Correct drainage issues and create a smooth, mowable surface." },
              { title: "Soil amendments", desc: "Add nutrients and organic matter to support stronger growth." },
              { title: "Old sod removal", desc: "Remove tired turf and prep for a clean install or reseed." },
              { title: "Topsoil / compost install", desc: "Bring in quality material and spread to the right depth for success." },
            ].map((item, idx) => (
              <FadeIn key={item.title} delay={((idx % 2) + 1) as 1 | 2}>
                <div className="rounded-2xl bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-sm)] transition-shadow duration-300 hover:shadow-[var(--shadow-md)]">
                  <div className="text-base font-semibold text-[var(--text-primary)] sm:text-sm">{item.title}</div>
                  <div className="mt-2 text-base leading-7 text-[var(--text-secondary)] sm:text-sm">{item.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-10 rounded-2xl bg-[var(--bg-green)] p-8">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-white">
                The right prep makes everything easier
              </h3>
              <p className="mt-3 text-base leading-7 text-white/65 sm:text-sm">
                Proper grading, clean removal, and the right soil blend reduces
                headaches later — better drainage, better germination, and better
                long-term results.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/quote" className="w-full sm:w-auto">Request soil prep quote</Button>
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
