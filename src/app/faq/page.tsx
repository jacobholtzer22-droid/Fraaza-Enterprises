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
    "Answers to frequently asked questions about hydroseeding timeline, watering, best season, and slopes — for Holland, MI and West Michigan. Fraaza Enterprises — owner-operated since 2004.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Hydroseeding FAQ | Fraaza Enterprises",
    description:
      "Common questions about hydroseeding timing, watering, and more for West Michigan properties.",
    url: "/faq",
  },
};

const faqs = [
  {
    question: "When is the best time to Hydroseed?",
    answer:
      "Spring (April–June) allows you the entire summer and fall to establish your new lawn. Summer (July–August) is still a great time to install your lawn, requiring a little more watering due to the hot summer weather. Fall (Sept–Oct) is an excellent time to hydroseed your lawn with less chance of any weeds invading your new seeding — any growth that is not present before winter will quickly emerge in the spring and produce a lush lawn. Late Fall (Nov–Dec) is considered dormant seeding; you can still hydroseed but will see little to no growth. The hydroseed will remain dormant until the following spring.",
  },
  {
    question: "How do I take care of my newly Hydroseeded Lawn?",
    answer:
      "We supply each customer with a detailed care and watering sheet. Visit our Care & Watering page for full instructions.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Depending on the seed variety used on your seeding project will determine the germination rate for the grass. For example, common perennial rye grasses and fescue grasses have a germination rate of around 5–10 days, where Kentucky Blue grasses can take up to 15–23 days to germinate. Under the proper watering and weather conditions you can expect to see germination in about 5–7 days and have a lush stand of grass in about 4–5 weeks.",
  },
  {
    question: "Can I walk on my Hydroseeded lawn?",
    answer:
      "Yes, but you want to be careful not to disturb the hydroseeded layer of mulch. It is best to stay off the lawn during its early growing stages.",
  },
  {
    question: "Will the Hydroseed stain my siding, concrete, or landscape?",
    answer:
      "No, the green hydroseed is easily washed off with a garden hose or pressure washer.",
  },
  {
    question: "I have weeds in my new seeding — is this common?",
    answer:
      "Yes, there will be some weeds in any newly seeded lawn. Unfortunately the weed seeds were already present in your soil. Preparing the soil for seed caused these weed seeds to surface, allowing them to germinate. These weeds are best left alone — most of them are annuals and will die off the next season. It's more important to establish and thicken the grass as quickly as possible, preventing the weeds from invading. Do not apply any weed killer or weed-and-feed product on your newly seeded lawn until you have mowed it at least 3 times. If these weeds are still a problem, consult your lawn care professional with any further weed problems.",
  },
  {
    question: "Is there a Guarantee?",
    answer:
      "We use only the best materials and effective practices available to us in the industry. We guarantee our hydroseed to grow under our specific care and watering instructions. After the area is hydroseeded you will be given detailed care and watering instructions — it is your responsibility to provide the proper maintenance needed. We cannot guarantee the end results of the hydroseeded area because the care and weather conditions are beyond our control. Fraaza Enterprises Inc. is not held responsible for any damage due to severe weather conditions, but we will reapply any damaged hydroseeded area at a negotiable price less than the original amount. Contact us for full details.",
  },
  {
    question: "What other services do you offer?",
    answer:
      "We offer a variety of other services in the industry. Please visit our Services page to see if we can assist you on your next project.",
  },
  {
    question: "Is hydroseeding better than sod?",
    answer:
      "Each has its place. Hydroseeding is more cost-effective for large areas, slopes, and custom seed blends. Sod provides an instant lawn but costs significantly more and offers limited variety. Hydroseeded lawns develop deeper root systems because they grow directly in your soil. For most West Michigan properties, hydroseeding is the smarter long-term investment.",
  },
  {
    question: "What's in the hydroseeding mix?",
    answer:
      "The mix includes grass seed (custom-blended for your soil and site conditions), starter fertilizer, water, wood or paper fiber mulch, a tackifier (a natural bonding agent that helps the mulch adhere to the soil), and a crabgrass and broadleaf pre-emergent to mitigate weed incroachment. All materials are environmentally safe and pet-friendly once dry.",
  },
  {
    question: "How do I prepare my yard for hydroseeding?",
    answer:
      "We handle the soil preparation as part of our service. This typically includes grading, removing debris, and ensuring proper drainage. If you're doing any prep yourself, avoid compacting the soil — loose, level soil gives the best results. We'll assess your property during the free estimate and recommend any additional prep needed.",
  },
  {
    question: "When can I mow after hydroseeding?",
    answer:
      "Wait until the grass reaches 3.5–4 inches in height, typically 4–6 weeks after application. Use a sharp mower blade and never cut more than one-third of the grass height at a time. Avoid mowing when the lawn is wet, as this can pull up young seedlings.",
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
            description="Everything you need to know about hydroseeding timing, watering, and more — for Holland, MI and West Michigan properties."
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
