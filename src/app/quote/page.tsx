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
      <section className="relative h-64 sm:h-80 flex items-center">
        <Image
          src="/images/portfolio/estate-hydroseeding.webp"
          alt="Estate property hydroseeding project"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[var(--bg-green)]/75" />
        <Container className="relative z-10">
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
        <Container className="py-16 sm:py-24 max-w-xl mx-auto">
          <FadeIn>
            <ContactForm showService />
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
