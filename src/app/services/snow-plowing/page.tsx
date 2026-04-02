import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Snow Plowing | Holland, MI",
  description:
    "Snow plowing services in Holland, MI and West Michigan including plowing, salting, sidewalks, loader plowing, and snow blowing. Request a winter service quote from Fraaza Enterprises.",
  openGraph: {
    title: "Snow Plowing | Holland, MI | Fraaza Enterprises",
    description:
      "Plowing, salting, sidewalks, loader plowing, and snow blowing across West Michigan.",
    url: "/services/snow-plowing",
  },
};

export default function SnowPlowingPage() {
  return (
    <div>
      <section className="bg-[var(--bg-0)]">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            eyebrow="Services"
            title="Snow Plowing"
            description="Keep your property safer and easier to access with dependable winter services."
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
              { title: "Plowing", desc: "Driveways, lots, and access areas cleared efficiently." },
              { title: "Salting", desc: "Reduce ice and improve traction on high-use areas." },
              { title: "Sidewalks", desc: "Walkway clearing for safer entrances and paths." },
              { title: "Loader plowing", desc: "Support for larger commercial areas and heavy snow." },
              { title: "Snow blowing", desc: "Targeted clearing where plows can’t reach cleanly." },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-sm font-semibold text-white">{item.title}</div>
                <div className="mt-2 text-sm leading-7 text-white/65">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact#quote-form">Request snow plowing quote</Button>
            <Button href="/services" variant="secondary">
              Back to services
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

