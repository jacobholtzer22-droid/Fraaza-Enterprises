import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
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

const services: { title: string; href: string; image: string }[] = [
  {
    title: "Hydroseeding",
    href: "/services/hydroseeding",
    image: "/images/services/home-hydroseeding.png",
  },
  {
    title: "Soil Preparation",
    href: "/services/soil-preparation",
    image: "/images/bobcat-soil-conditioner.png",
  },
  {
    title: "Landscaping",
    href: "/services/landscaping",
    image: "/images/portfolio/pool-landscape-design.webp",
  },
  {
    title: "Snow Plowing",
    href: "/services/snow-plowing",
    image: "/images/services/snow-plow-truck.webp",
  },
];

const portfolioItems: GalleryItem[] = [
  {
    src: "/images/portfolio/estate-hydroseeding.webp",
    alt: "Large property hydroseeding",
    category: "Hydroseeding",
    title: "New Hydroseeded Lawn",
  },
  {
    src: "/images/portfolio/stone-retaining-wall-planting.webp",
    alt: "Stone retaining wall with planting beds",
    category: "Landscaping",
    title: "Stone Wall & Beds",
  },
  {
    src: "/images/portfolio/subdivision-lawn-install.webp",
    alt: "Subdivision lawn installation",
    category: "Hydroseeding",
    title: "Subdivision Install",
  },
  {
    src: "/images/portfolio/premium-landscaping.webp",
    alt: "Premium landscape design",
    category: "Landscaping",
    title: "Premium Landscape Design",
  },
];

const whyChooseUs: { title: string; description: string; image: string }[] = [
  {
    title: "Superior Quality",
    description: "Professional-grade equipment and premium materials for results that last.",
    image: "/images/portfolio/full-property-hydroseeding.webp",
  },
  {
    title: "Owner-Operated",
    description: "Chad Fraaza is on every job — ensuring personal accountability and attention to detail.",
    image: "/images/services/hydroseeder-truck-jobsite.webp",
  },
  {
    title: "Since 2004",
    description: "Over two decades of trusted service across West Michigan communities.",
    image: "/images/portfolio/commercial-site-work.webp",
  },
  {
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your peace of mind on every project.",
    image: "/images/portfolio/new-construction-lawn.webp",
  },
];

const testimonials = [
  {
    quote:
      "My wife and I recently hired Fraaza Enterprises for a yard grading & hydroseeding project at our new construction home, and we couldn\u2019t be more pleased with the results. Chad was extremely professional, very knowledgeable, and punctual.",
    name: "New Construction Homeowner",
    location: "West Michigan",
  },
  {
    quote:
      "Chad was super helpful, timely, easy to work with, and we\u2019ve had great results. Highly recommend!",
    name: "Homeowner",
    location: "Zeeland, MI",
  },
  {
    quote:
      "We absolutely love the results we are getting from Fraaza. From the first call to inquire about the product, to the day of application, Chad was great. His eye for detail, knowledge, and professionalism are apparent in his workmanship.",
    name: "Homeowner",
    location: "West Michigan",
  },
  {
    quote:
      "We had a motocross track on our property and nobody was using it so we leveled all the dirt and hired Chad at Fraaza Enterprises. He smoothed out all the dirt and hydroseeded it and you can\u2019t even tell we ever had a track. Great job Chad!",
    name: "Property Owner",
    location: "Holland, MI",
  },
];

const galleryFooter: GalleryItem[] = [
  { src: "/images/portfolio/lawn-growth-14-days.webp", alt: "Lawn growth 14 days after hydroseeding", category: "Hydroseeding", title: "14-Day Growth" },
  { src: "/images/portfolio/front-yard-stone-border.webp", alt: "Front yard with stone border", category: "Landscaping", title: "Stone Border" },
  { src: "/images/portfolio/river-rock-landscaping.webp", alt: "River rock landscaping detail", category: "Landscaping", title: "River Rock Borders" },
  { src: "/images/portfolio/retaining-wall-hydroseeding.webp", alt: "Retaining wall with hydroseeded lawn", category: "Landscaping", title: "Wall & Lawn" },
  { src: "/images/gallery/backyard-patio-hydroseeding.webp", alt: "Backyard patio with hydroseeding", category: "Hydroseeding", title: "Block Retaining Wall & Hydroseed" },
  { src: "/images/gallery/ornamental-tree-planting.webp", alt: "Ornamental tree planting", category: "Landscaping", title: "Tree Planting" },
  { src: "/images/portfolio/macatawa-completed-landscape.webp", alt: "Completed residential landscape", category: "Landscaping", title: "Completed Landscape" },
  { src: "/images/gallery/completed-wall-project-1.webp", alt: "Completed wall project", category: "Landscaping", title: "Completed Wall" },
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
          quality={90}
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
                <Button href="/gallery" variant="ghost" className="w-full sm:w-auto">
                  <span className="text-white/80 hover:text-white">View Our Work &rarr;</span>
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
                <div className="mt-1 text-xs text-gray-300 sm:text-sm">Projects Completed</div>
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
      <section className="bg-[var(--bg-cream)] bg-texture">
        <Container className="py-24 sm:py-32">
          <FadeIn>
            <SectionHeading
              eyebrow="What We Do"
              title="Our core services"
              description="Four specialties, one owner on every job. Over 20 years of trusted work across West Michigan."
              centered
            />
          </FadeIn>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, idx) => (
              <FadeIn key={service.title} delay={((idx % 3) + 1) as 1 | 2 | 3}>
                <Link
                  href={service.href}
                  className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-2xl shadow-[var(--shadow-md)] transition-shadow duration-500 hover:shadow-[var(--shadow-lg)]"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-colors duration-500 group-hover:from-black/55 group-hover:via-black/5" />
                  <div className="relative z-10 flex flex-col gap-1.5 p-5">
                    <span className="inline-block w-fit rounded-full bg-[var(--bg-green)]/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                      Service
                    </span>
                    <h3 className="text-sm font-semibold leading-snug text-white sm:text-base">
                      {service.title}
                    </h3>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="bg-[var(--bg-dark)] bg-texture">
        <Container className="py-24 sm:py-32">
          <FadeIn>
            <SectionHeading
              light
              eyebrow="Our Work"
              title="View our work"
              description="A selection of recent projects from across West Michigan."
              centered
            />
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-[var(--bg-cream)] bg-texture">
        <Container className="py-24 sm:py-32">
          <FadeIn>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Built on trust, backed by results"
              description="When you choose Fraaza Enterprises, you're choosing West Michigan's dedicated hydroseeding specialists."
              centered
            />
          </FadeIn>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, idx) => (
              <FadeIn key={item.title} delay={((idx % 3) + 1) as 1 | 2 | 3}>
                <div className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-2xl shadow-[var(--shadow-md)]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/20" />
                  <div className="relative z-10 p-6 sm:p-7">
                    <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-xl font-bold text-white sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">
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
          src="/images/heroes/new-build-landscaping.webp"
          alt="Fraaza Enterprises landscaping project"
          fill
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/80" />
        <Container className="relative z-10 py-24 sm:py-32">
          <FadeIn>
            <SectionHeading
              light
              eyebrow="Testimonials"
              title="What our clients say"
              centered
            />
          </FadeIn>

          <FadeIn delay={1}>
            <div className="mt-8 flex justify-center">
              <a
                href="https://www.google.com/search?q=Fraaza+Enterprises+Inc+Reviews#lrd=0x881990e04401c901:0x694e8308491078e7,3,,,,"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                <span className="text-amber-400">★</span>
                4.8 on Google — 17 Reviews
              </a>
            </div>
          </FadeIn>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-2">
            {testimonials.map((t, idx) => (
              <FadeIn key={idx} delay={((idx % 3) + 1) as 1 | 2 | 3}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md sm:p-8">
                  <blockquote className="text-sm leading-7 text-white/85 sm:text-base">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {t.name}
                      </div>
                      <div className="text-xs text-white/50">{t.location}</div>
                    </div>
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
          src="/images/heroes/hydroseeding-new-home.webp"
          alt="Professional hydroseeding in action"
          fill
          quality={90}
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
                <Button href="/services" variant="ghost" className="w-full sm:w-auto">
                  <span className="text-white/80 hover:text-white">View Services</span>
                </Button>
                <Button href="/quote" className="w-full sm:w-auto">Get a Free Quote</Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── PHOTO GALLERY FOOTER ── */}
      <section className="bg-[var(--bg-dark)] bg-texture">
        <Container className="py-20 sm:py-24">
          <FadeIn>
            <SectionHeading
              light
              eyebrow="Gallery"
              title="Project highlights"
              centered
            />
          </FadeIn>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {galleryFooter.map((item, idx) => (
              <FadeIn key={item.src} delay={((idx % 3) + 1) as 1 | 2 | 3}>
                <GalleryCard item={item} className="aspect-square" />
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
    </div>
  );
}
