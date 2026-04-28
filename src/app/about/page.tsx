import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About West Michigan's Hydroseeding Experts | Holland, MI",
  description:
    "Fraaza Enterprises has specialized in hydroseeding since 2004. Owner-operated by Chad Fraaza, we're West Michigan's trusted hydroseeding experts — also offering soil preparation, landscaping, and snow plowing.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Fraaza Enterprises",
    description:
      "Specializing in hydroseeding since 2004 — owner-operated across West Michigan. Also offering soil preparation, landscaping, and snow plowing.",
    url: "/about",
  },
};

const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?q=Fraaza+Enterprises+Inc+Reviews#lrd=0x881990e04401c901:0x694e8308491078e7,1,,,,";

const whyChooseUs: {
  title: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Hydroseeding Specialists",
    description:
      "We're not a general contractor that dabbles in hydroseeding — it's our core focus and has been since 2004.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 2c-1 4-4 6-4 10a4 4 0 0 0 8 0c0-4-3-6-4-10Z" />
        <path d="M12 16v6" />
        <path d="M9 22h6" />
      </svg>
    ),
  },
  {
    title: "Owner-Operated",
    description:
      "Chad Fraaza is on every job site — you get direct communication, accountability, and pride in workmanship.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
      </svg>
    ),
  },
  {
    title: "20+ Years Experience",
    description:
      "Two decades of dedicated hydroseeding across West Michigan — residential, commercial, and industrial sites.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Professional-Grade Equipment",
    description:
      "Modern hydroseeding trucks and quality materials — from premium seed blends to fertilizer and tackifier — that produce consistent, long-lasting results.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M3 17V8a1 1 0 0 1 1-1h11v10" />
        <path d="M15 11h4l3 3v3h-7" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    ),
  },
  {
    title: "Trusted & Accredited",
    description:
      "BBB Accredited with an A+ rating and proud member of the International Association of Hydroseeding Professionals.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Honest, Free Estimates",
    description:
      "Clear quotes, transparent pricing, and straightforward advice — no high-pressure sales, just the right plan for your property.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z" />
        <circle cx="8" cy="8" r="1.5" />
      </svg>
    ),
  },
];

const reviews = [
  {
    quote:
      "I had my lawn put in — dirt, hydroseed and all — when purchasing my new home in 2024 by Fraaza Enterprises. I also had landscaping work done in summer of 2025 in front of my home. Each project was done so well, and Chad was excellent at communication and overall customer service. I would highly recommend Fraaza Enterprises for any work you need done outside around your home!",
    name: "Ally LaCombe",
    context: "Hydroseeding & Landscaping",
    date: "1 month ago",
    initials: "AL",
  },
  {
    quote:
      "Awesome snow removal service. Has been providing snow removal at Pine Creek Apts for close to 20 years. Super helpful and always prompt.",
    name: "Laurie Prielipp",
    context: "Snow Removal — Pine Creek Apts",
    date: "4 months ago",
    initials: "LP",
  },
  {
    quote:
      "My wife and I recently hired Fraaza Enterprises for a yard grading & hydroseeding project at our new construction home, and we couldn't be more pleased with the results. From the initial consultation to the final follow-up, Chad was extremely professional, very knowledgeable, and punctual. He spent countless hours on the skid steer making sure our yard was meticulously graded.",
    name: "Paul Sam",
    context: "New Construction Hydroseeding",
    date: "6 months ago",
    initials: "PS",
  },
  {
    quote:
      "Chad was super helpful, timely, easy to work with, and we've had great results. Highly recommend!",
    name: "Drew Billin",
    context: "Hydroseeding",
    date: "6 months ago",
    initials: "DB",
  },
  {
    quote:
      "We absolutely love the results we are getting from Fraaza. From the first call to inquire about the product, to the day of application, Chad was great. His eye for detail, knowledge, and professionalism are apparent in his workmanship. Within a week of application we had sprouts of grass — and at four weeks we had grass covering our entire property. Our dog is wildly excited to finally have a yard, as are we!",
    name: "Jessica Jelsema",
    context: "Residential Hydroseeding",
    date: "2 years ago",
    initials: "JJ",
  },
  {
    quote:
      "We had a motocross track on our property and nobody was using it, so we leveled all the dirt and hired Chad at Fraaza Enterprises. He smoothed out all the dirt and hydroseeded it — and you can't even tell we ever had a track. Great job Chad!",
    name: "Holland Property Owner",
    context: "Grading & Hydroseeding",
    date: "Verified Google review",
    initials: "HP",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-center">
        <Image
          src="/images/services/hydroseeder-truck-jobsite.webp"
          alt="Fraaza Enterprises hydroseeder truck"
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
            eyebrow="About"
            title={`Specializing in hydroseeding since ${SITE.since}`}
            description={`${SITE.name} is owned and operated by ${SITE.owner}. We're West Michigan's dedicated hydroseeding experts — also offering soil preparation, landscaping, and snow plowing for residential, commercial, and industrial projects.`}
          />
        </Container>
      </section>

      {/* Content */}
      <section className="bg-[var(--bg-cream)]">
        <Container className="py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <div className="rounded-2xl bg-card p-8 shadow-[var(--shadow-sm)]">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[var(--text-green)]">
                  What we&apos;re known for
                </h3>
                <ul className="mt-6 space-y-4 text-sm text-[var(--text-secondary)]">
                  {[
                    "Hydroseeding specialists — new lawns, erosion control, and large-scale projects",
                    "20+ years of dedicated hydroseeding experience across West Michigan",
                    "Soil testing, grading, amendments, and topsoil/compost installs",
                    "Additional services: landscaping, sod, retaining walls, drain tile installation, tree planting, and snow plowing",
                    "Member of the International Association of Hydroseeding Professionals (IAHP)",
                    "BBB Accredited Business with an A+ rating",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={2}>
              <div className="rounded-2xl bg-card p-8 shadow-[var(--shadow-sm)]">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[var(--text-green)]">
                  Professional standards
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                  We&apos;re a proud member of the International Association of
                  Hydroseeding Professionals (IAHP) and a BBB Accredited Business
                  with an A+ rating. We stay committed to best practices that
                  protect your property and deliver consistent results.
                </p>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <a
                    href="http://www.hydroseeding.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 rounded-xl bg-[var(--bg-cream)] px-5 py-6 text-center transition-shadow hover:shadow-md group"
                  >
                    <Image
                      src="/images/iahp-logo.jpg"
                      alt="International Association of Hydroseeding Professionals"
                      width={129}
                      height={97}
                      className="h-14 w-auto rounded-lg"
                    />
                    <span className="text-xs leading-snug text-[var(--text-secondary)] group-hover:text-[var(--text-green)] transition-colors">
                      Member of the International Association of Hydroseeding Professionals
                    </span>
                  </a>
                  <a
                    href="https://www.bbb.org/us/mi/zeeland/profile/landscape-contractors/fraaza-enterprises-inc-0372-38114728"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 rounded-xl bg-[var(--bg-cream)] px-5 py-6 text-center transition-shadow hover:shadow-md group"
                  >
                    <Image
                      src="/images/bbb-accredited.svg"
                      alt="BBB Accredited Business — A+ Rating"
                      width={200}
                      height={76}
                      className="h-14 w-auto rounded-lg"
                    />
                    <span className="text-xs leading-snug text-[var(--text-secondary)] group-hover:text-[var(--text-green)] transition-colors">
                      BBB Accredited Business — A+ Rating
                    </span>
                  </a>
                </div>
                <div className="mt-6 rounded-xl bg-[var(--bg-cream)] px-5 py-4 text-sm text-[var(--text-secondary)]">
                  <span className="font-semibold text-[var(--text-green)]">Our motto:</span>{" "}
                  {SITE.motto}
                </div>
              </div>

            </FadeIn>
          </div>

        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[var(--bg-cream)] bg-texture">
        <Container className="py-20 sm:py-28">
          <FadeIn>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="What sets Fraaza Enterprises apart"
              description="When you hire us, you're not getting a side-service crew — you're getting West Michigan's dedicated hydroseeding specialists with decades of hands-on experience."
              centered
            />
          </FadeIn>

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, idx) => (
              <FadeIn key={item.title} delay={((idx % 3) + 1) as 1 | 2 | 3}>
                <div className="flex h-full flex-col rounded-2xl bg-card p-7 shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow-md)]">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--accent)]/15 text-[var(--accent)]">
                    <span className="block h-6 w-6">{item.icon}</span>
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-playfair)] text-xl font-semibold text-[var(--text-green)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact#quote-form" className="w-full sm:w-auto">
                Request a free quote
              </Button>
              <Button href="/services" variant="outline" className="w-full sm:w-auto">
                View services
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Reviews */}
      <section className="relative bg-[var(--bg-green)] bg-texture">
        <Container className="py-20 sm:py-28">
          <FadeIn>
            <SectionHeading
              light
              eyebrow="Customer Reviews"
              title="What our customers are saying"
              description="Real reviews from West Michigan homeowners and property managers we've had the pleasure of working with."
              centered
            />
          </FadeIn>

          <FadeIn delay={1}>
            <div className="mt-8 flex justify-center">
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <span className="text-amber-400">★</span>
                4.8 on Google — 18 Reviews
              </a>
            </div>
          </FadeIn>

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, idx) => (
              <FadeIn key={r.name} delay={((idx % 3) + 1) as 1 | 2 | 3}>
                <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow-md)]">
                  <div className="flex items-center gap-1 text-amber-400" aria-label="5 out of 5 stars">
                    <span aria-hidden>★</span>
                    <span aria-hidden>★</span>
                    <span aria-hidden>★</span>
                    <span aria-hidden>★</span>
                    <span aria-hidden>★</span>
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-7 text-white/85">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                    <div
                      aria-hidden
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--accent)] text-sm font-semibold text-white"
                    >
                      {r.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold text-white">
                        {r.name}
                      </div>
                      <div className="truncate text-xs text-white/55">
                        {r.context} · {r.date}
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href={GOOGLE_REVIEW_URL}
                variant="outline"
                className="w-full sm:w-auto"
              >
                Read all reviews on Google
              </Button>
              <Button href="/contact#quote-form" className="w-full sm:w-auto">
                Get your free quote
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
