import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms of service for Fraaza Enterprises. This page will be updated with the final terms language.",
  openGraph: {
    title: "Terms | Fraaza Enterprises",
    description: "Terms of service for Fraaza Enterprises.",
    url: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div>
      <section className="bg-[var(--bg-cream)]">
        <Container className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Legal"
            title="Terms of Service"
            description="Placeholder content — final terms will be added."
          />
          <div className="mt-10 rounded-2xl bg-white p-8 text-sm leading-7 text-[var(--text-secondary)] shadow-[var(--shadow-sm)]">
            <p>
              By using this website, you agree that the content is provided for
              informational purposes and may change without notice.
            </p>
            <p className="mt-4">
              This page will be updated with complete terms covering services,
              scheduling, communications, and limitations.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
