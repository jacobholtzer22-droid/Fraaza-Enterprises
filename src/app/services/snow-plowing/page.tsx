import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Snow Plowing | Holland, MI",
  description:
    "Snow plowing services in Holland, MI and West Michigan including plowing, salting, sidewalks, loader plowing, and snow blowing. Request a winter service quote from Fraaza Enterprises.",
  alternates: {
    canonical: "/services/snow-plowing",
  },
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
      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-center">
        <Image
          src="/images/services/snow-plow-truck.webp"
          alt="Fraaza Enterprises snow plow truck in action"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--bg-green)]/75 via-[var(--bg-green)]/35 to-transparent" />
        <Container className="relative z-10">
          <SectionHeading
            as="h1"
            light
            eyebrow="Services"
            title="Snow Plowing"
            description="Keep your property safer and easier to access with dependable winter services."
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
        <Container className="py-16 sm:py-24">
          <FadeIn>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/services/snow-plow-truck.webp"
                alt="Fraaza Enterprises branded snow plow"
                width={1200}
                height={600}
                className="w-full aspect-[2/1] object-cover"
              />
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              { title: "Plowing", desc: "Driveways, lots, and access areas cleared efficiently." },
              { title: "Salting", desc: "Reduce ice and improve traction on high-use areas." },
              { title: "Sidewalks", desc: "Walkway clearing for safer entrances and paths." },
              { title: "Loader plowing", desc: "Support for larger commercial areas and heavy snow." },
              { title: "Snow blowing", desc: "Targeted clearing where plows can't reach cleanly." },
            ].map((item, idx) => (
              <FadeIn key={item.title} delay={((idx % 2) + 1) as 1 | 2}>
                <div className="rounded-2xl bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-sm)] transition-shadow duration-300 hover:shadow-[var(--shadow-md)]">
                  <div className="text-sm font-semibold text-[var(--text-primary)]">{item.title}</div>
                  <div className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">{item.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact#quote-form" className="w-full sm:w-auto">Request snow plowing quote</Button>
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
