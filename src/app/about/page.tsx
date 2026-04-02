import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | Holland, MI",
  description:
    "Fraaza Enterprises is an owner-operated hydroseeding and landscaping company serving West Michigan since 2004. Specializing in hydroseeding and soil preparation for residential, commercial, and industrial projects.",
  openGraph: {
    title: "About | Fraaza Enterprises",
    description:
      "Owner-operated since 2004 — specializing in hydroseeding and soil preparation across West Michigan.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-[var(--bg-0)]">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            eyebrow="About"
            title={`Proudly serving West Michigan since ${SITE.since}`}
            description={`${SITE.name} is owned and operated by ${SITE.owner}. We specialize in hydroseeding and soil preparation for residential, commercial, and industrial projects — with a customer-first approach and quality work done right the first time.`}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <div className="text-sm font-semibold text-white/85">
                What we’re known for
              </div>
              <ul className="mt-4 space-y-3 text-sm text-white/65">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  Hydroseeding for new lawns, erosion control, and large areas
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  Soil testing, grading, amendments, and topsoil/compost installs
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  Clear communication and dependable scheduling
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <div className="text-sm font-semibold text-white/85">
                Professional standards
              </div>
              <p className="mt-3 text-sm leading-7 text-white/65">
                We’re a proud member of the International Association of
                Hydroseeding Professionals (IAHP) and stay committed to best
                practices that protect your property and deliver consistent
                results.
              </p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/70">
                Motto: <span className="font-semibold text-white">{SITE.motto}</span>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact#quote-form">Request a free quote</Button>
            <Button href="/services" variant="secondary">
              View services
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

