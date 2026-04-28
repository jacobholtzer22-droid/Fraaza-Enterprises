import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Fraaza Enterprises. This page will be updated with the final privacy policy language.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Fraaza Enterprises",
    description: "Privacy policy for Fraaza Enterprises.",
    url: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <section className="bg-[var(--bg-cream)]">
        <Container className="py-16 sm:py-24">
          <SectionHeading
            as="h1"
            eyebrow="Legal"
            title="Privacy Policy"
            description="Placeholder content — final policy language will be added."
          />
          <div className="mt-10 rounded-2xl bg-[var(--bg-elevated)] p-8 text-sm leading-7 text-[var(--text-secondary)] shadow-[var(--shadow-sm)]">
            <p>
              We respect your privacy. If you submit a form on this website, we
              use the information you provide to respond to your request and
              communicate about your project.
            </p>
            <p className="mt-4">
              This policy will be updated with complete details regarding data
              collection, retention, and your rights.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
