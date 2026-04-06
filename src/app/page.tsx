import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { GalleryCard } from "@/components/GalleryCard";
import type { GalleryItem } from "@/components/GalleryCard";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hydroseeding Experts | Holland, MI | Fraaza Enterprises",
  description:
    "West Michigan's hydroseeding specialists since 2004. Fraaza Enterprises delivers professional hydroseeding and soil preparation — plus landscaping and snow plowing — in Holland, MI. Owner-operated.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hydroseeding Experts | Holland, MI | Fraaza Enterprises",
    description:
      "West Michigan's hydroseeding specialists since 2004. Professional hydroseeding, soil preparation, and more — owner-operated in Holland, MI.",
    url: "/",
  },
};

const portfolioItems: GalleryItem[] = [
  {
    src: "/images/heroes/craftsman-home-hydroseeding.webp",
    alt: "Craftsman home with fresh hydroseeding",
    category: "Hydroseeding",
    title: "Craftsman Home Hydroseeding",
    description: "New lawn hydroseeding for craftsman-style home build",
  },
  {
    src: "/images/portfolio/retaining-wall-hydroseeding.webp",
    alt: "Retaining wall with hydroseeded lawn",
    category: "Landscaping",
    title: "Retaining Wall with Hydroseeded Lawn",
    description: "Retaining wall installation with integrated hydroseeded lawn",
  },
  {
    src: "/images/heroes/new-build-landscaping.webp",
    alt: "New build with complete landscaping",
    category: "Landscaping",
    title: "New Build Landscaping",
    description: "Full landscaping package with stone wall for new construction",
  },
  {
    src: "/images/portfolio/river-rock-landscaping.webp",
    alt: "River rock landscaping detail",
    category: "Landscaping",
    title: "River Rock Landscaping",
    description: "Decorative river rock landscaping with border detail",
  },
  {
    src: "/images/services/roadside-hydroseeding.webp",
    alt: "Roadside hydroseeding project",
    category: "Hydroseeding",
    title: "Roadside Hydroseeding",
    description: "Large-scale roadside hydroseeding for erosion control",
  },
  {
    src: "/images/portfolio/lawn-growth-14-days.webp",
    alt: "Lawn growth 14 days after hydroseeding",
    category: "Hydroseeding",
    title: "Lawn Growth — 14 Days",
    description: "Healthy lawn growth just two weeks after hydroseeding",
  },
];

const whyChooseUs = [
  {
    title: "Superior Quality",
    description: "Professional-grade equipment and premium materials for results that last.",
    image: "/images/portfolio/premium-landscaping.webp",
  },
  {
    title: "Owner-Operated",
    description: "Chad Fraaza is on every job — ensuring personal accountability and attention to detail.",
    image: "/images/services/hydroseeder-truck-jobsite.webp",
  },
  {
    title: "Since 2004",
    description: "Over two decades of trusted service across West Michigan communities.",
    image: "/images/portfolio/estate-hydroseeding.webp",
  },
  {
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your peace of mind on every project.",
    image: "/images/portfolio/commercial-site-work.webp",
  },
];

export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center">
        <Image
          src="/images/heroes/luxury-home-hydroseeding.webp"
          alt="Luxury home with freshly hydroseeded lawn by Fraaza Enterprises"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[var(--bg-green)]/70 to-black/30" />
        <Container className="relative z-10 py-20">
          <div className="max-w-2xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse" />
                Owner-operated since {SITE.since}
              </div>
            </FadeIn>
            <FadeIn delay={1}>
              <h1 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
                {SITE.tagline}
              </h1>
            </FadeIn>
            <FadeIn delay={2}>
              <p className="mt-6 text-lg leading-8 text-white/80">
                Specializing in hydroseeding for new lawns, erosion control, and large-scale projects since 2004. We also offer soil preparation, landscaping, and snow plowing across West Michigan.
              </p>
            </FadeIn>

            <FadeIn delay={3}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href="/quote" className="w-full sm:w-auto">Get a Free Quote</Button>
                <Button href="/services" variant="ghost" className="w-full sm:w-auto">
                  <span className="text-white/80 hover:text-white">Explore Our Services &rarr;</span>
                </Button>
              </div>
            </FadeIn>

            {/* Stats Bar */}
            <div className="mt-12 flex gap-6 sm:gap-12 pt-8 border-t border-white/15">
              <div>
                <div className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white sm:text-4xl">
                  <AnimatedCounter target={20} suffix="+" />
                </div>
                <div className="mt-1 text-xs text-gray-300 sm:text-sm">Years Experience</div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white sm:text-4xl">
                  <AnimatedCounter target={500} suffix="+" />
                </div>
                <div className="mt-1 text-xs text-gray-300 sm:text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white sm:text-4xl">
                  <AnimatedCounter target={5.0} suffix="" decimals={1} />
                </div>
                <div className="mt-1 text-xs text-gray-300 sm:text-sm">Average Rating</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SERVICES ── */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/heroes/lakefront-hydroseeding.webp"
          alt="Hydroseeding project background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[var(--bg-green)]/90" />
        <Container className="relative z-10 py-24 sm:py-32">
          <FadeIn>
            <SectionHeading
              light
              eyebrow="Our Specialty"
              title="Hydroseeding is what we do best"
              description="With over 20 years of dedicated hydroseeding experience, we deliver fast, even coverage for new lawns, erosion control, and large-scale projects across West Michigan."
              centered
            />
          </FadeIn>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FadeIn delay={1}>
              <ServiceCard
                title="Hydroseeding"
                description="Our core specialty. Fast, even application for new lawns, erosion control, and large-scale projects — backed by 20+ years of expertise."
                href="/services/hydroseeding"
                image="/images/heroes/craftsman-home-hydroseeding.webp"
                featured
                className="sm:col-span-2 lg:col-span-2 lg:row-span-2"
              />
            </FadeIn>
            <FadeIn delay={2}>
              <ServiceCard
                title="Soil Preparation"
                description="Grading, amendments, and site prep that sets the foundation for success."
                href="/services/soil-preparation"
                image="/images/portfolio/estate-hydroseeding.webp"
              />
            </FadeIn>
            <FadeIn delay={3}>
              <ServiceCard
                title="Landscaping"
                description="Sod, retaining walls, planting, and finishing touches that elevate your property."
                href="/services/landscaping"
                image="/images/heroes/new-build-landscaping.webp"
              />
            </FadeIn>
            <FadeIn delay={4}>
              <ServiceCard
                title="Snow Plowing"
                description="Reliable plowing and salting to keep your property safe and accessible."
                href="/services/snow-plowing"
                image="/images/portfolio/commercial-site-work.webp"
              />
            </FadeIn>
          </div>
          <FadeIn delay={2}>
            <p className="mt-6 text-center text-sm text-white/50 tracking-wide uppercase">We also offer soil preparation, landscaping &amp; snow plowing</p>
          </FadeIn>
        </Container>
      </section>

      {/* ── ABOUT / TRUST ── */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/portfolio/pool-landscape-design.webp"
          alt="Landscape project background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
        <Container className="relative z-10 py-24 sm:py-32">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <SectionHeading
                light
                eyebrow="About Us"
                title="Hydroseeding specialists since 2004"
                description={`${SITE.name} is owned and operated by ${SITE.owner}, specializing in hydroseeding since ${SITE.since}. We've helped hundreds of homeowners and businesses across West Michigan establish healthy, beautiful lawns. We also provide soil preparation, landscaping, and snow plowing services.`}
              />
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/about" variant="primary" className="w-full sm:w-auto">
                  Our Story
                </Button>
                <Button href="/contact" variant="ghost" className="w-full sm:w-auto">
                  <span className="text-white/70 hover:text-white">Call {SITE.phone}</span>
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src="/images/portfolio/pool-landscape-design.webp"
                      alt="Pool area landscaping project"
                      width={400}
                      height={500}
                      className="h-64 w-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src="/images/services/hydroseeder-truck-jobsite.webp"
                      alt="Hydroseeder truck on job site"
                      width={400}
                      height={300}
                      className="h-40 w-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src="/images/heroes/lakefront-hydroseeding.webp"
                      alt="Lakefront hydroseeding project"
                      width={400}
                      height={300}
                      className="h-40 w-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src="/images/portfolio/natural-stone-wall.webp"
                      alt="Natural stone retaining wall"
                      width={400}
                      height={500}
                      className="h-64 w-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── FEATURED WORK ── */}
      <section className="bg-[var(--bg-dark)] bg-texture">
        <Container className="py-24 sm:py-32">
          <FadeIn>
            <SectionHeading
              light
              eyebrow="Our Work"
              title="Projects we're proud of"
              description="From residential lawns to commercial landscapes, every project gets our full attention and professional-grade results."
              centered
            />
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, idx) => (
              <FadeIn key={item.src} delay={((idx % 3) + 1) as 1 | 2 | 3}>
                <GalleryCard item={item} />
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

      {/* ── WHY CHOOSE US — alternating rows ── */}
      <section className="bg-[var(--bg-cream)] bg-texture">
        <Container className="py-24 sm:py-32">
          <FadeIn>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Built on trust, backed by results"
              description="When you choose Fraaza Enterprises, you're choosing West Michigan's dedicated hydroseeding specialists — with quality craftsmanship, personal accountability, and over two decades of proven results."
              centered
            />
          </FadeIn>
          <div className="mt-16 space-y-8">
            {whyChooseUs.map((item, idx) => (
              <FadeIn key={item.title} delay={(idx % 2 + 1) as 1 | 2}>
                <div
                  className={`group relative overflow-hidden rounded-2xl shadow-lg ${
                    idx % 2 === 0 ? "" : "lg:flex-row-reverse"
                  } flex flex-col lg:flex-row`}
                >
                  <div className="relative lg:w-1/2 min-h-[240px] lg:min-h-[320px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center bg-[var(--bg-green)] p-8 sm:p-12 lg:w-1/2">
                    <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-white/70 max-w-md">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/heroes/hydroseeding-new-home.webp"
          alt="Beautiful hydroseeded lawn background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <Container className="relative z-10 py-24 sm:py-32">
          <FadeIn>
            <SectionHeading
              light
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
                <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl">
                  <svg className="h-8 w-8 text-[var(--accent-light)]/60" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                  </svg>
                  <div className="mt-4 text-sm leading-7 text-white/80">{r.quote}</div>
                  <div className="mt-6 border-t border-white/15 pt-4">
                    <div className="text-sm font-semibold text-white">{r.name}</div>
                    <div className="text-xs text-white/50">{r.location}</div>
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
          src="/images/services/roadside-hydroseeding.webp"
          alt="Professional hydroseeding in action"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-green)]/90 to-black/70" />
        <Container className="relative z-10 py-24 sm:py-32">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                Ready to transform your property?
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-300">
                Tell us about your project and we&apos;ll follow up with a plan and a free estimate.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button href="/quote" className="w-full sm:w-auto">Get a Free Quote</Button>
                <Button href="/services" variant="ghost" className="w-full sm:w-auto">
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
