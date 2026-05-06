import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Free Hydroseeding Quote | Holland, MI",
  description:
    "Request a free quote from West Michigan's hydroseeding experts. Fraaza Enterprises specializes in hydroseeding — also offering soil preparation, landscaping, and snow plowing.",
  alternates: {
    canonical: "/quote",
  },
  openGraph: {
    title: "Free Quote | Fraaza Enterprises",
    description:
      "Request a free quote from West Michigan's hydroseeding specialists. Also offering soil preparation, landscaping, and snow plowing.",
    url: "/quote",
  },
};

export default function QuotePage() {
  return (
    <div>
      <section className="relative -mt-[var(--header-height)] pt-[var(--header-height)] flex min-h-[15rem] items-center overflow-x-hidden sm:h-80 sm:min-h-0">
        <Image
          src="/images/portfolio/estate-hydroseeding.webp"
          alt="Estate property hydroseeding project"
          fill
          priority
          className="object-cover object-[center_35%] sm:object-center"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--bg-green)]/75 via-[var(--bg-green)]/35 to-transparent" />
        <Container className="relative z-10 py-10 sm:py-0">
          <SectionHeading
            as="h1"
            light
            eyebrow="Free Quote"
            title="Tell us about your project"
            description="Select your service, describe the work, and we'll get back to you with a free estimate — usually within one business day."
          />
        </Container>
      </section>

      <section className="bg-[var(--bg-cream)]">
        <Container className="py-12 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-xl">
            <FadeIn>
              <ContactForm showService />
            </FadeIn>
          </div>
        </Container>
      </section>
    </div>
  );
}
