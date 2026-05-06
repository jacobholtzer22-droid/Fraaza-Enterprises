import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Hydroseeding & Landscaping Blog | Holland, MI | West Michigan Landscaping",
  description:
    "Tips, guides, and insights on hydroseeding, lawn care, and landscaping in Holland, MI and West Michigan. Expert advice from Fraaza Enterprises — owner-operated since 2004.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Hydroseeding & Landscaping Blog | Fraaza Enterprises",
    description:
      "Expert hydroseeding and lawn care tips for West Michigan homeowners and businesses.",
    url: "/blog",
  },
};

const posts = [
  {
    slug: "best-time-to-hydroseed-in-michigan",
    title: "The Best Time to Hydroseed in Michigan: Spring vs. Fall",
    excerpt:
      "Timing is everything when it comes to hydroseeding. Michigan's climate offers two ideal windows — spring and fall — but each has distinct advantages. Here's how to choose the right season for your project.",
    image: "/images/heroes/craftsman-home-hydroseeding.webp",
    date: "March 15, 2025",
    readTime: "5 min read",
    category: "Hydroseeding",
    content: [
      "If you're planning to hydroseed your lawn in West Michigan, timing can make the difference between a lawn that thrives and one that struggles. The two best windows for hydroseeding in Michigan are spring (late April through June) and early fall (mid-August through September).",
      "Spring hydroseeding takes advantage of warming soil temperatures and increasing daylight. As soil temperatures consistently reach 55°F+, grass seed germinates reliably. Spring also brings regular rainfall, which helps keep the hydroseeded area moist during the critical first few weeks. The main downside of spring is increased weed competition — crabgrass and other annual weeds are also germinating during this time.",
      "Fall hydroseeding is often considered the gold standard by landscaping professionals. Soil is still warm from summer, air temperatures are cooling (which reduces water evaporation), and weed pressure drops dramatically. Fall-seeded lawns also benefit from the entire winter and spring to establish root systems before the stress of summer heat.",
      "For Holland, Zeeland, Grand Haven, and the surrounding lakeshore communities, the lake effect can extend the fall planting window slightly later than inland areas. However, you'll want to allow at least 6–8 weeks of growing time before the first hard frost.",
      "Summer hydroseeding is possible but requires significantly more watering diligence. The combination of heat and dry conditions means you may need to water 3–4 times daily to prevent the mulch from drying out. If you're on a tight construction timeline, summer applications work — they just require more attention.",
      "Bottom line: if you have the flexibility to choose, aim for early fall. If spring works better for your schedule, that's a great option too. Either way, the most important factor is consistent watering in the first 2–3 weeks after application.",
    ],
  },
  {
    slug: "hydroseeding-vs-sod-west-michigan",
    title: "Hydroseeding vs. Sod: Which is Right for Your West Michigan Property?",
    excerpt:
      "Deciding between hydroseeding and sod? Both establish a lawn, but the best choice depends on your budget, timeline, property size, and terrain. Here's an honest comparison from 20+ years of experience.",
    image: "/images/services/hydroseeding-mulch-application.webp",
    date: "February 28, 2025",
    readTime: "6 min read",
    category: "Lawn Care",
    content: [
      "One of the most common questions we get at Fraaza Enterprises is: \"Should I hydroseed or lay sod?\" After over 20 years of installing both across West Michigan, here's our straightforward take.",
      "Cost is usually the biggest factor. Hydroseeding typically costs 30–50% less than sod for the same area. For a 5,000 sq ft lawn, that savings can easily be $1,500–$3,000. If you're establishing a large lot, new construction site, or commercial property, the cost advantage of hydroseeding becomes even more significant.",
      "Timeline is where sod has an edge. Sod gives you an \"instant lawn\" — it looks great the day it's installed. Hydroseeding requires patience: 7–14 days for sprouts, 4–6 weeks for a mowable lawn, and a full season for complete establishment. If you need immediate curb appeal for a home sale or event, sod may be worth the premium.",
      "Terrain matters a lot. On slopes, hills, and irregular terrain, hydroseeding is clearly superior. The mulch slurry conforms to any surface and holds seed in place. Laying sod on a steep slope is difficult, expensive, and often fails as pieces slide or dry out before rooting. For erosion control applications, hydroseeding is the standard choice.",
      "Seed variety is another hydroseeding advantage. We custom-blend seed mixes for your specific soil type, sun exposure, and usage patterns. Sod farms grow a limited number of varieties — you get what they have, whether or not it's ideal for your property's conditions.",
      "Long-term health often favors hydroseeding. Hydroseeded grass grows its roots directly in your native soil from day one, creating a deep, well-adapted root system. Sod roots start in farm soil and must transition to your soil — this \"knitting\" process can be disrupted by hot weather, underwatering, or poor soil contact.",
      "Our recommendation: for most West Michigan residential and commercial properties, hydroseeding delivers better long-term value. Choose sod when you need an instant result and are willing to pay the premium. Either way, proper soil preparation and aftercare are what determine success.",
    ],
  },
  {
    slug: "erosion-control-tips-michigan-homeowners",
    title: "5 Erosion Control Tips Every Michigan Homeowner Should Know",
    excerpt:
      "Spring thaw and heavy rain can wreak havoc on West Michigan yards. From hydroseeding slopes to smart grading, here are five proven ways to protect your property from erosion damage.",
    image: "/images/services/roadside-hydroseeding.webp",
    date: "January 20, 2025",
    readTime: "4 min read",
    category: "Erosion Control",
    content: [
      "West Michigan's climate — with its freeze-thaw cycles, spring rains, and lake-effect weather — makes erosion a real concern for homeowners. Here are five practical tips to protect your property.",
      "1. Address bare soil immediately. Exposed soil is erosion waiting to happen. After any grading, construction, or landscaping work, get ground cover established as quickly as possible. Hydroseeding is the fastest way to cover large areas and slopes — the fiber mulch provides immediate surface protection while grass grows.",
      "2. Grade away from structures. Water should always flow away from your foundation, not toward it. Proper grading (a minimum 2% slope away from the house for the first 10 feet) prevents both erosion near your foundation and potential water damage. If your yard slopes toward your home, a regrading project may be necessary.",
      "3. Manage downspout runoff. Downspouts that dump water directly at your foundation are a top cause of localized erosion. Extend downspouts at least 4–6 feet from the house, and consider directing them to a rain garden or dry creek bed that disperses water gradually.",
      "4. Stabilize slopes with vegetation. Grass, ground covers, and native plantings are your best long-term defense against slope erosion. For steep grades, hydroseeding with an erosion-control seed mix provides both immediate mulch coverage and a permanent root network. Retaining walls may be needed for severe slopes.",
      "5. Don't ignore small problems. A small gully or bare patch today becomes a major washout after the next heavy rain. Address erosion issues early — it's always less expensive and disruptive to fix problems when they're small. If you notice soil washing onto sidewalks or driveways, or gullies forming in your yard, contact a landscaping professional for an assessment.",
    ],
  },
];

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative -mt-[var(--header-height)] pt-[var(--header-height)] flex min-h-[17rem] items-center overflow-x-hidden sm:h-80 sm:min-h-0">
        <Image
          src="/images/heroes/new-build-landscaping.webp"
          alt="West Michigan landscaping and hydroseeding"
          fill
          priority
          className="object-cover object-[center_30%] sm:object-center"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--bg-green)]/75 via-[var(--bg-green)]/35 to-transparent" />
        <Container className="relative z-10 py-10 sm:py-0">
          <SectionHeading
            as="h1"
            light
            eyebrow="Blog"
            title="Hydroseeding & landscaping insights"
            description="Tips, guides, and expert advice for homeowners and property managers across Holland, MI and West Michigan."
          />
        </Container>
      </section>

      {/* Featured post */}
      <section className="bg-[var(--bg-cream)]">
        <Container className="py-12 sm:py-20 lg:py-24">
          <FadeIn>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={posts[0].image}
                  alt={posts[0].title}
                  width={700}
                  height={450}
                  className="aspect-[3/2] w-full object-cover"
                />
              </div>
              <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="inline-block rounded-full bg-[var(--accent)]/15 px-3 py-1 text-xs font-semibold text-[var(--accent-light)]">
                    {posts[0].category}
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">
                    {posts[0].date}
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">
                    {posts[0].readTime}
                  </span>
                </div>
                <h2 className="mt-4 hyphens-auto break-words font-[family-name:var(--font-playfair)] text-xl font-semibold leading-tight text-[var(--text-primary)] sm:text-3xl sm:leading-snug">
                  {posts[0].title}
                </h2>
                <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
                  {posts[0].excerpt}
                </p>
                <div className="mt-6">
                  <Link
                    href={`#${posts[0].slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
                  >
                    Read article
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* All posts grid */}
      <section className="bg-[var(--bg-white)]">
        <Container className="py-12 sm:py-20 lg:py-24">
          <FadeIn>
            <SectionHeading
              eyebrow="Recent Posts"
              title="More from the blog"
              centered
            />
          </FadeIn>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, idx) => (
              <FadeIn key={post.slug} delay={((idx % 3) + 1) as 1 | 2 | 3}>
                <Link href={`#${post.slug}`} className="group block h-full">
                  <article className="rounded-2xl bg-[var(--bg-elevated)] shadow-[var(--shadow-sm)] overflow-hidden transition-shadow duration-300 hover:shadow-[var(--shadow-md)] h-full flex flex-col">
                    <div className="overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={500}
                        height={300}
                        className="aspect-[5/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-4 sm:p-6">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <span className="inline-block rounded-full bg-[var(--accent)]/15 px-3 py-1 text-xs font-semibold text-[var(--accent-light)]">
                          {post.category}
                        </span>
                        <span className="text-xs text-[var(--text-muted)]">
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="mt-3 hyphens-auto break-words font-[family-name:var(--font-playfair)] text-lg font-semibold leading-snug text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)]">
                        {post.title}
                      </h3>
                      <p className="mt-2 flex-1 text-base leading-7 text-[var(--text-secondary)] sm:text-sm sm:leading-6">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 text-xs text-[var(--text-muted)]">
                        {post.date}
                      </div>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Full articles */}
      <section className="bg-[var(--bg-cream)]">
        <Container className="py-12 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl space-y-20">
            {posts.map((post, postIdx) => (
              <FadeIn key={post.slug}>
                <article id={post.slug}>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="inline-block rounded-full bg-[var(--accent)]/15 px-3 py-1 text-xs font-semibold text-[var(--accent-light)]">
                      {post.category}
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">
                      {post.date}
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="mt-4 hyphens-auto break-words font-[family-name:var(--font-playfair)] text-xl font-semibold leading-tight text-[var(--text-primary)] sm:text-3xl sm:leading-snug">
                    {post.title}
                  </h2>
                  <div className="mt-4 overflow-hidden rounded-2xl">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={800}
                      height={400}
                      className="aspect-[2/1] w-full object-cover"
                    />
                  </div>
                  <div className="mt-6 space-y-5">
                    {post.content.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-base leading-7 text-[var(--text-secondary)]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {postIdx < posts.length - 1 && (
                    <div className="mt-12 border-b border-[var(--border)]" />
                  )}
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[var(--bg-white)]">
        <Container className="py-12 sm:py-20 lg:py-28">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <SectionHeading
                eyebrow="Get Started"
                title="Ready to transform your property?"
                description="Whether you need hydroseeding, erosion control, or landscaping services — Fraaza Enterprises is here to help across Holland, MI and West Michigan."
                centered
              />
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button href="/quote" className="w-full sm:w-auto">Get a Free Quote</Button>
                <Button href="/services" variant="outline" className="w-full sm:w-auto">
                  View All Services
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
