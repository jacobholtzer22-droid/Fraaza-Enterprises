import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

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
      <section className="bg-[var(--bg-0)]">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            eyebrow="Services"
            title="Landscaping"
            description="From sod installs to retaining walls and planting, we build outdoor spaces that look great and hold up."
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
                title: "Sod installation",
                desc: "Professional sod install for quick curb appeal and an instant green lawn.",
              },
              {
                title: "Retaining walls",
                desc: "Functional and attractive walls to manage grade changes and define spaces.",
              },
              {
                title: "Tree planting",
                desc: "Planting and placement guidance for a healthier, better-looking landscape.",
              },
              {
                title: "Soil prep & seeding",
                desc: "Prep work that sets the foundation for a strong lawn and clean finish.",
              },
              {
                title: "Topsoil & bark",
                desc: "Delivery and installation for clean beds and healthy growing conditions.",
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
              Built for West Michigan properties
            </div>
            <p className="mt-3 text-sm leading-7 text-white/65">
              We tailor materials and methods to the site conditions — focusing
              on clean prep, proper grading, and quality installation so your
              landscape performs as good as it looks.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact#quote-form">Request landscaping quote</Button>
            <Button href="/services" variant="secondary">
              Back to services
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

