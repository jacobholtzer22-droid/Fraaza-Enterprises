import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Hydroseeding | Holland, MI",
  description:
    "Professional hydroseeding in Holland, MI and West Michigan for new lawns, erosion control, roadside projects, new development, and commercial properties. Request a free quote from Fraaza Enterprises.",
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
      <section className="bg-[var(--bg-0)]">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            eyebrow="Services"
            title="Hydroseeding"
            description="A fast, even application that helps establish healthy grass — perfect for new lawns, erosion control, and large areas."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/quote">Get a Free Quote</Button>
            <Button href="/contact" variant="secondary">
              Ask a question
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--bg-1)]">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold text-white/85">
                What is hydroseeding?
              </div>
              <p className="mt-3 text-sm leading-7 text-white/65">
                Hydroseeding is a process where seed, fertilizer, water, and a
                protective fiber mulch are mixed into a slurry and sprayed over
                prepared soil. The mulch helps the seed stay in place and retain
                moisture — supporting more consistent germination.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold text-white/85">
                Benefits vs. sod
              </div>
              <ul className="mt-3 space-y-2 text-sm text-white/65">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  More cost-effective for larger areas
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  Even coverage and custom seed blends
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  Great for slopes and erosion control
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  Establishes strong roots when paired with proper watering
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-black/20 p-6">
            <div className="text-sm font-semibold text-white/85">
              Hydroseeding services
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "New lawn installation",
                  desc: "Full prep and hydroseed application for brand-new lawns.",
                },
                {
                  title: "Erosion control",
                  desc: "Coverage on slopes and disturbed soil to help reduce washouts.",
                },
                {
                  title: "Roadside",
                  desc: "Hydroseeding for right-of-way and roadside stabilization.",
                },
                {
                  title: "New development",
                  desc: "Reliable scheduling and scale for subdivision and build sites.",
                },
                {
                  title: "Commercial properties",
                  desc: "Durable, professional results for businesses and facilities.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="text-sm font-semibold text-white">
                    {item.title}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-white/65">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact#quote-form">Request hydroseeding quote</Button>
            <Button href="/services" variant="secondary">
              Back to services
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

