import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { Accordion } from "@/components/Accordion";

export const metadata: Metadata = {
  title: "Hydroseeding FAQ | Holland, MI | West Michigan Landscaping",
  description:
    "Answers to frequently asked questions about hydroseeding cost, timeline, watering, best season, and slopes — for Holland, MI and West Michigan. Fraaza Enterprises — owner-operated since 2004.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Hydroseeding FAQ | Fraaza Enterprises",
    description:
      "Common questions about hydroseeding cost, timing, watering, and more for West Michigan properties.",
    url: "/faq",
  },
};

const faqs = [
  {
    question: "How much does hydroseeding cost in Holland, MI?",
    answer:
      "Hydroseeding typically costs 30–50% less than sod installation. Pricing depends on the size of the area, soil prep required, and terrain difficulty. Most residential projects in Holland and West Michigan fall between $0.08–$0.15 per square foot for the hydroseeding application itself. Contact us for a free, no-obligation estimate tailored to your property.",
  },
  {
    question: "How long does it take for hydroseeded grass to grow?",
    answer:
      "You'll typically see the first sprouts within 7–14 days, depending on the seed blend, weather, and watering consistency. Expect a mowable lawn within 4–6 weeks. Full establishment usually takes one growing season (roughly 8–12 weeks). Michigan's spring and early fall conditions are ideal for fast germination.",
  },
  {
    question: "How often should I water my hydroseeded lawn?",
    answer:
      "For the first 2–3 weeks, water lightly 2–3 times per day to keep the mulch moist but not saturated. After germination begins, reduce to once or twice daily with slightly longer watering sessions. By weeks 4–6, transition to deeper, less frequent watering to encourage root growth. Check out our detailed Care & Watering guide for a week-by-week schedule.",
  },
  {
    question: "What is the best time of year to hydroseed in Michigan?",
    answer:
      "The best seasons for hydroseeding in West Michigan are spring (late April through June) and early fall (mid-August through September). These windows provide the warm soil temperatures and consistent moisture that grass seed needs to germinate. Fall is often considered ideal because weed competition is lower. Summer applications are possible but require more diligent watering.",
  },
  {
    question: "Can you hydroseed on hills and slopes?",
    answer:
      "Absolutely — slopes are one of hydroseeding's biggest strengths. The fiber mulch in the slurry bonds to the soil surface, holding seed in place even on steep grades where traditional seeding or sod would wash away. We regularly hydroseed slopes for erosion control on residential properties, roadsides, and construction sites throughout West Michigan.",
  },
  {
    question: "Is hydroseeding better than sod?",
    answer:
      "Each has its place. Hydroseeding is more cost-effective for large areas, slopes, and custom seed blends. Sod provides an instant lawn but costs significantly more and offers limited variety. Hydroseeded lawns develop deeper root systems because they grow directly in your soil. For most West Michigan properties, hydroseeding is the smarter long-term investment.",
  },
  {
    question: "What's in the hydroseeding slurry?",
    answer:
      "The slurry is a mix of grass seed (custom-blended for your soil and sun conditions), starter fertilizer, water, and wood or paper fiber mulch. Some applications also include a tackifier — a natural bonding agent that helps the mulch adhere to slopes. All materials are environmentally safe and pet-friendly once dry.",
  },
  {
    question: "When can I mow after hydroseeding?",
    answer:
      "Wait until the grass reaches 3.5–4 inches in height, typically 4–6 weeks after application. Use a sharp mower blade and never cut more than one-third of the grass height at a time. Avoid mowing when the lawn is wet, as this can pull up young seedlings.",
  },
  {
    question: "Do you serve areas outside Holland, MI?",
    answer:
      "Yes! Fraaza Enterprises serves all of West Michigan including Zeeland, Grand Haven, Hudsonville, Jenison, Allendale, Hamilton, Saugatuck, and surrounding communities. Contact us to confirm service availability for your location.",
  },
  {
    question: "How do I prepare my yard for hydroseeding?",
    answer:
      "We handle the soil preparation as part of our service. This typically includes grading, removing debris, and ensuring proper drainage. If you're doing any prep yourself, avoid compacting the soil — loose, level soil gives the best results. We'll assess your property during the free estimate and recommend any additional prep needed.",
  },
];

export default function FAQPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-center">
        <Image
          src="/images/heroes/craftsman-home-hydroseeding.webp"
          alt="Hydroseeded lawn at a West Michigan home"
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
            eyebrow="FAQ"
            title="Hydroseeding questions, answered"
            description="Everything you need to know about hydroseeding cost, timing, watering, and more — for Holland, MI and West Michigan properties."
          />
        </Container>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-[var(--bg-cream)]">
        <Container className="py-16 sm:py-24">
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <Accordion items={faqs} />
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[var(--bg-white)]">
        <Container className="py-20 sm:py-28">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <SectionHeading
                eyebrow="Still Have Questions?"
                title="We're happy to help"
                description="Can't find what you're looking for? Reach out directly — Chad Fraaza personally responds to every inquiry."
                centered
              />
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button href="/contact" className="w-full sm:w-auto">Contact Us</Button>
                <Button href="/care-and-watering" variant="outline" className="w-full sm:w-auto">
                  Care & Watering Guide
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
