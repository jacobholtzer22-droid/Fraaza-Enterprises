import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { ScissorsIcon, SproutIcon, ShieldCheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Hydroseeding Care & Watering Guide | Holland, MI | West Michigan Landscaping",
  description:
    "Complete aftercare guide for your hydroseeded lawn in Holland, MI and West Michigan. Week-by-week watering schedule, mowing tips, fertilizing timeline, and what to expect as your new lawn grows. Fraaza Enterprises.",
  alternates: {
    canonical: "/care-and-watering",
  },
  openGraph: {
    title: "Hydroseeding Care & Watering Guide | Fraaza Enterprises",
    description:
      "Week-by-week aftercare guide for hydroseeded lawns — watering schedule, mowing, and fertilizing for West Michigan properties.",
    url: "/care-and-watering",
  },
};

const weeklyGuide = [
  {
    week: "Week 1–2",
    title: "Keep it moist",
    watering: "Water lightly 2–3 times per day (early morning, midday, late afternoon). Each session should be 5–10 minutes — just enough to keep the mulch damp, not flooded.",
    expectations: "The green mulch will begin to fade in color. You may see the first tiny sprouts emerging by the end of week 2. Avoid walking on the area.",
    tips: "Don't let the mulch dry out completely or form a crust. If it rains, skip that watering session. Avoid puddling — standing water suffocates seeds.",
  },
  {
    week: "Week 2–3",
    title: "Germination begins",
    watering: "Continue 2–3 times daily. You can reduce to 2 times daily if you see consistent sprouting and the soil stays moist between sessions.",
    expectations: "Grass sprouts become clearly visible. Growth may be uneven — some areas germinate faster depending on sun exposure and drainage. This is normal.",
    tips: "Continue to stay off the lawn. Don't be alarmed by some weeds — they often appear before the grass fills in and will be crowded out over time.",
  },
  {
    week: "Week 3–4",
    title: "Transition watering",
    watering: "Reduce to 1–2 times daily with slightly longer sessions (10–15 minutes). Start encouraging deeper root growth by watering a bit more deeply.",
    expectations: "The lawn will start looking like a thin, green carpet. Grass should be 1–2 inches tall. The mulch layer mostly breaks down and is no longer visible.",
    tips: "If any bare spots remain, contact us — a touch-up application may be needed. Continue to avoid heavy foot traffic.",
  },
  {
    week: "Week 4–6",
    title: "First mow",
    watering: "Transition to once daily or every other day, watering for 15–20 minutes per session. Deep, less frequent watering builds stronger roots.",
    expectations: "Grass reaches 3.5–4 inches. Time for your first mow! The lawn will start filling in and thickening. You can begin light foot traffic.",
    tips: "Mow with a sharp blade. Set your mower to the highest setting — never cut more than one-third of the grass height. Mow when dry to avoid pulling up seedlings.",
  },
  {
    week: "Week 6–8",
    title: "Filling in",
    watering: "Water every 2–3 days with deeper sessions (20–30 minutes). Morning watering is best to reduce disease risk.",
    expectations: "The lawn thickens significantly. Bare spots fill in as grass tillers spread. The lawn begins to look established and uniform.",
    tips: "Apply a second round of fertilizer around week 6 if recommended by your soil test. Continue mowing at a 3–3.5 inch height.",
  },
  {
    week: "Week 8–12",
    title: "Established lawn",
    watering: "Transition to a normal lawn watering schedule — typically 1 inch of water per week, either from rain or irrigation, applied in 2–3 sessions.",
    expectations: "Your lawn is now established. It should be thick, green, and ready for regular use. Root systems are deep and the grass can handle normal activity.",
    tips: "Begin your regular lawn maintenance routine. Fall is a great time to overseed any remaining thin areas and apply winterizer fertilizer.",
  },
];

const maintenanceTips: { title: string; icon: ReactNode; items: string[] }[] = [
  {
    title: "Mowing",
    icon: <ScissorsIcon />,
    items: [
      "First mow at 3.5–4 inches height (usually week 4–6)",
      "Never cut more than ⅓ of the grass height",
      "Keep mower blades sharp for clean cuts",
      "Maintain a regular mowing height of 3–3.5 inches",
    ],
  },
  {
    title: "Fertilizing",
    icon: <SproutIcon />,
    items: [
      "Starter fertilizer is included in the hydroseed mix",
      "Apply a balanced fertilizer at 6–8 weeks",
      "Follow up with seasonal fertilization (spring and fall)",
      "Consider a soil test to tailor your fertilizer plan",
    ],
  },
  {
    title: "Weed management",
    icon: <ShieldCheckIcon />,
    items: [
      "Some weeds are normal in the first few weeks",
      "Wait until after 2–3 mowings before applying any herbicide",
      "Thick, healthy grass is the best weed prevention",
      "Contact us before applying any chemicals to new grass",
    ],
  },
];

const printableCareGuideUrl = "/downloads/care-and-watering-printable.pdf";

export default function CareAndWateringPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-center">
        <Image
          src="/images/portfolio/lawn-growth-14-days.webp"
          alt="Hydroseeded lawn growth after 14 days in West Michigan"
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
            eyebrow="Aftercare Guide"
            title="Care & watering for your new lawn"
            description="Your hydroseeded lawn needs consistent care in the first weeks. Follow this guide for the best results on your Holland, MI or West Michigan property."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/quote" className="w-full sm:w-auto">Get a Free Quote</Button>
            <Button href="/faq" variant="ghost" className="w-full sm:w-auto">
              <span className="text-white/80 hover:text-white">Hydroseeding FAQ &rarr;</span>
            </Button>
          </div>
        </Container>
      </section>

      {/* Quick tips */}
      <section className="bg-[var(--bg-green)]">
        <Container className="py-10">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Key rule", value: "Never let the mulch dry out" },
              { label: "First sprouts", value: "7–14 days" },
              { label: "First mow", value: "4–6 weeks" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-light)]">
                  {item.label}
                </div>
                <div className="mt-1 font-[family-name:var(--font-playfair)] text-xl font-semibold text-white">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Week-by-week guide */}
      <section className="bg-[var(--bg-cream)]">
        <Container className="py-16 sm:py-24">
          <FadeIn>
            <SectionHeading
              eyebrow="Watering Schedule"
              title="Week-by-week expectations"
              description="Follow this timeline for the best hydroseeding results. Adjust based on weather — Michigan's rain can do some of the work for you."
              centered
            />
          </FadeIn>
          <div className="mt-14 space-y-6">
            {weeklyGuide.map((phase, idx) => (
              <FadeIn key={phase.week} delay={idx < 3 ? ((idx + 1) as 1 | 2 | 3) : undefined}>
                <div className="rounded-2xl bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-sm)] sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                    <div className="shrink-0">
                      <div className="inline-flex items-center rounded-full bg-[var(--bg-green)] px-4 py-2 text-sm font-bold text-white">
                        {phase.week}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[var(--text-primary)]">
                        {phase.title}
                      </h3>
                      <div className="mt-4 grid gap-4 sm:grid-cols-3">
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                            Watering
                          </div>
                          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                            {phase.watering}
                          </p>
                        </div>
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                            What to expect
                          </div>
                          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                            {phase.expectations}
                          </p>
                        </div>
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                            Pro tip
                          </div>
                          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                            {phase.tips}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Maintenance tips */}
      <section className="bg-[var(--bg-white)]">
        <Container className="py-16 sm:py-24">
          <FadeIn>
            <SectionHeading
              eyebrow="Ongoing Maintenance"
              title="Mowing, fertilizing & weed care"
              description="Once your lawn is established, these practices will keep it thick and healthy for years to come."
              centered
            />
          </FadeIn>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {maintenanceTips.map((tip, idx) => (
              <FadeIn key={tip.title} delay={((idx + 1) as 1 | 2 | 3)}>
                <div className="rounded-2xl bg-[var(--bg-elevated)] p-7 shadow-[var(--shadow-sm)] h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--bg-green)]/20">
                    <span className="text-2xl">{tip.icon}</span>
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-lg font-semibold text-[var(--text-primary)]">
                    {tip.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {tip.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-[var(--text-secondary)]">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Printable guide */}
      <section className="bg-[var(--bg-cream)]">
        <Container className="py-16 sm:py-20">
          <FadeIn>
            <div className="mx-auto max-w-3xl rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-8 text-center shadow-[var(--shadow-sm)] sm:p-10">
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                Printable Resource
              </div>
              <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
                Care and Watering Printable Page
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
                Prefer a hard copy? Download the care and watering sheet as a PDF so you can keep the instructions handy while your lawn establishes.
              </p>
              <div className="mt-8 flex justify-center">
                <a
                  href={printableCareGuideUrl}
                  download="care-and-watering-printable.pdf"
                  className="group/btn relative inline-flex min-h-[44px] items-center justify-center gap-2 overflow-hidden rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold tracking-tight text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] hover:shadow-xl hover:shadow-[var(--accent)]/25 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
                >
                  Download Printable Care Guide (PDF)
                </a>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/heroes/new-build-landscaping.webp"
          alt="Beautiful established lawn in West Michigan"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black/30" />
        <Container className="relative z-10 py-20 sm:py-28">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-white sm:text-4xl">
                Questions about your hydroseeded lawn?
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-300">
                We&apos;re here to help your lawn succeed. Reach out anytime with questions about care, watering, or anything else.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button href="/contact" className="w-full sm:w-auto">Contact Us</Button>
                <Button href="/hydroseeding" variant="ghost" className="w-full sm:w-auto">
                  <span className="text-white/80 hover:text-white">What is Hydroseeding?</span>
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
