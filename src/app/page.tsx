import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { FadeIn } from "@/components/FadeIn";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hydroseeding & Landscaping | Holland, MI | Fraaza Enterprises",
  description:
    "Hydroseeding and landscaping in Holland, MI and across West Michigan. Fraaza Enterprises delivers hydroseeding, soil preparation, landscaping, and snow plowing — owner-operated since 2004.",
  openGraph: {
    title: "Hydroseeding & Landscaping | Holland, MI | Fraaza Enterprises",
    description:
      "Hydroseeding and landscaping in Holland, MI and across West Michigan. Owner-operated since 2004.",
    url: "/",
  },
};

export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center">
        <Image
          src="/images/heroes/luxury-home-hydroseeding.jpg"
          alt="Luxury home with freshly hydroseeded lawn by Fraaza Enterprises"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-green)]/85 via-[var(--bg-green)]/50 to-transparent" />
        <Container className="relative z-10 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              Owner-operated since {SITE.since}
            </div>
            <h1 className="mt-6 font-[family-name:var(--font-playfair)] text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              {SITE.tagline}
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/75">
              Premium hydroseeding and landscaping for West Michigan homeowners and businesses. Quality work done right, every time.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/quote">Get a Free Quote</Button>
              <Button href="/services" variant="ghost">
                <span className="text-white/80 hover:text-white">Explore Our Services &rarr;</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-[var(--bg-cream)]">
        <Container className="py-20 sm:py-28">
          <FadeIn>
            <SectionHeading
              eyebrow="What We Do"
              title="Crafted landscapes, lasting results"
              description="From seed to snow, we care for West Michigan properties with precision, pride, and over two decades of hands-on experience."
              centered
            />
          </FadeIn>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FadeIn delay={1}>
              <ServiceCard
                title="Hydroseeding"
                description="Fast, even application for new lawns, erosion control, and large-scale projects."
                href="/services/hydroseeding"
                imageSrc="/images/services/hydroseeding-mulch-application.jpg"
                imageAlt="Hydroseeding application on a residential lawn"
              />
            </FadeIn>
            <FadeIn delay={2}>
              <ServiceCard
                title="Landscaping"
                description="Sod, retaining walls, planting, and finishing touches that elevate your property."
                href="/services/landscaping"
                imageSrc="/images/portfolio/stone-retaining-wall-planting.jpg"
                imageAlt="Stone retaining wall with professional planting"
              />
            </FadeIn>
            <FadeIn delay={3}>
              <ServiceCard
                title="Soil Preparation"
                description="Grading, amendments, and site prep that sets the foundation for success."
                href="/services/soil-preparation"
                imageSrc="/images/services/soil-prep-boulder-edging.jpg"
                imageAlt="Soil preparation with boulder edging"
              />
            </FadeIn>
            <FadeIn delay={4}>
              <ServiceCard
                title="Snow Plowing"
                description="Reliable plowing and salting to keep your property safe and accessible."
                href="/services/snow-plowing"
                imageSrc="/images/services/snow-plow-truck.jpg"
                imageAlt="Fraaza Enterprises snow plow truck"
              />
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── ABOUT / TRUST STRIP ── */}
      <section className="bg-[var(--bg-green)]">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <SectionHeading
                light
                eyebrow="About Us"
                title="Local, owner-operated, and built on pride"
                description={`${SITE.name} is owned and operated by ${SITE.owner}. Since ${SITE.since}, we've helped homeowners and businesses across West Michigan establish healthy lawns and beautiful outdoor spaces.`}
              />
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/about" variant="primary">
                  Our Story
                </Button>
                <Button href="/contact" variant="ghost">
                  <span className="text-white/70 hover:text-white">Call {SITE.phone}</span>
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src="/images/portfolio/pool-landscape-design.jpg"
                      alt="Pool area landscaping project"
                      width={400}
                      height={500}
                      className="h-64 w-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src="/images/services/hydroseeder-truck-jobsite.jpg"
                      alt="Hydroseeder truck on job site"
                      width={400}
                      height={300}
                      className="h-40 w-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src="/images/heroes/lakefront-hydroseeding.jpg"
                      alt="Lakefront hydroseeding project"
                      width={400}
                      height={300}
                      className="h-40 w-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src="/images/portfolio/natural-stone-wall.jpg"
                      alt="Natural stone retaining wall"
                      width={400}
                      height={500}
                      className="h-64 w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── FEATURED WORK ── */}
      <section className="bg-[var(--bg-white)]">
        <Container className="py-20 sm:py-28">
          <FadeIn>
            <SectionHeading
              eyebrow="Our Work"
              title="Projects we're proud of"
              description="From residential lawns to commercial landscapes, every project gets our full attention and professional-grade results."
              centered
            />
          </FadeIn>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "/images/heroes/craftsman-home-hydroseeding.jpg", alt: "Craftsman home with fresh hydroseeding" },
              { src: "/images/portfolio/retaining-wall-hydroseeding.jpg", alt: "Retaining wall with hydroseeded lawn" },
              { src: "/images/heroes/new-build-landscaping.jpg", alt: "New build with complete landscaping" },
              { src: "/images/portfolio/river-rock-landscaping.jpg", alt: "River rock landscaping detail" },
              { src: "/images/services/roadside-hydroseeding.jpg", alt: "Roadside hydroseeding project" },
              { src: "/images/portfolio/lawn-growth-14-days.jpg", alt: "Lawn growth 14 days after hydroseeding" },
            ].map((photo, idx) => (
              <FadeIn key={photo.src} delay={(idx % 3 + 1) as 1 | 2 | 3}>
                <div className="img-zoom overflow-hidden rounded-2xl">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={600}
                    height={400}
                    className="aspect-[3/2] w-full object-cover"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="mt-10 text-center">
              <Button href="/gallery" variant="outline">
                View Full Gallery
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── REVIEWS ── */}
      <section className="bg-[var(--bg-cream)]">
        <Container className="py-20 sm:py-28">
          <FadeIn>
            <SectionHeading
              eyebrow="Testimonials"
              title="What our clients say"
              description="Real feedback from homeowners and property managers across West Michigan."
              centered
            />
          </FadeIn>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "\u201CFast communication, clean prep work, and the lawn came in beautifully. Couldn\u2019t be happier with the results.\u201D",
                name: "Homeowner",
                location: "Holland, MI",
              },
              {
                quote:
                  "\u201CProfessional from start to finish. The attention to detail and quality of work was outstanding. Would absolutely recommend.\u201D",
                name: "Property Manager",
                location: "Zeeland, MI",
              },
              {
                quote:
                  "\u201CGreat coverage and guidance on watering. Our yard looks better than we ever imagined it could.\u201D",
                name: "Homeowner",
                location: "Grand Haven, MI",
              },
            ].map((r, idx) => (
              <FadeIn key={r.location} delay={(idx + 1) as 1 | 2 | 3}>
                <div className="rounded-2xl bg-white p-8 shadow-[var(--shadow-sm)] transition-shadow duration-300 hover:shadow-[var(--shadow-md)]">
                  <svg className="h-8 w-8 text-[var(--accent)]/40" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                  </svg>
                  <div className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{r.quote}</div>
                  <div className="mt-6 border-t border-[var(--border)] pt-4">
                    <div className="text-sm font-semibold text-[var(--text-primary)]">{r.name}</div>
                    <div className="text-xs text-[var(--text-muted)]">{r.location}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/heroes/hydroseeding-new-home.jpg"
          alt="Beautiful home with hydroseeded lawn"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[var(--bg-green)]/80" />
        <Container className="relative z-10 py-20 sm:py-28">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                Ready to transform your property?
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/70">
                Tell us about your project and we&apos;ll follow up with a plan and a free estimate.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button href="/quote">Get a Free Quote</Button>
                <Button href="/services" variant="ghost">
                  <span className="text-white/80 hover:text-white">View Services</span>
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
