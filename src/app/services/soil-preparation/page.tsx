import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

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
      <section className="bg-[var(--bg-0)]">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            eyebrow="Services"
            title="Soil Preparation"
            description="Great lawns start below the surface. We prep, grade, amend, and build the foundation your grass needs to thrive."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/quote">Get a Free Quote</Button>
            <Button href="/services" variant="secondary">
              Back to services
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--bg-1)]">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Soil testing",
                desc: "Identify nutrient needs and pH concerns so your lawn has a better start.",
              },
              {
                title: "Grading & leveling",
                desc: "Correct drainage issues and create a smooth, mowable surface.",
              },
              {
                title: "Soil amendments",
                desc: "Add nutrients and organic matter to support stronger growth.",
              },
              {
                title: "Old sod removal",
                desc: "Remove tired turf and prep for a clean install or reseed.",
              },
              {
                title: "Topsoil / compost install",
                desc: "Bring in quality material and spread to the right depth for success.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-sm font-semibold text-white">
                  {item.title}
                </div>
                <div className="mt-2 text-sm leading-7 text-white/65">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-black/20 p-6">
            <div className="text-sm font-semibold text-white/85">
              The right prep makes everything easier
            </div>
            <p className="mt-3 text-sm leading-7 text-white/65">
              Proper grading, clean removal, and the right soil blend reduces
              headaches later — better drainage, better germination, and better
              long-term results.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact#quote-form">Request soil prep quote</Button>
            <Button href="/services" variant="secondary">
              Back to services
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

