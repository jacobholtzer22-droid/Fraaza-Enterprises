import type { Metadata } from "next";
import type { ReactNode } from "react";
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
import {
  SproutIcon,
  LeafIcon,
  MountainIcon,
  SnowflakeIcon,
  AwardIcon,
  UserIcon,
  CalendarIcon,
  ShieldCheckIcon,
} from "@/components/Icons";

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

const services: { icon: ReactNode; title: string; href: string; image: string }[] = [
  {
    icon: <SproutIcon />,
    title: "Hydroseeding",
    href: "/services/hydroseeding",
    image: "/images/services/hydroseeding-coverage.webp",
  },
  {
    icon: <LeafIcon />,
    title: "Soil Preparation",
    href: "/services/soil-preparation",
    image: "/images/services/soil-prep-boulder-edging.webp",
  },
  {
    icon: <MountainIcon />,
    title: "Landscaping",
    href: "/services/landscaping",
    image: "/images/portfolio/pool-landscape-design.webp",
  },
  {
    icon: <SnowflakeIcon />,
    title: "Snow Plowing",
    href: "/services/snow-plowing",
    image: "/images/services/snow-plow-truck.webp",
  },
];

const portfolioItems: GalleryItem[] = [
  {
    src: "/images/portfolio/estate-hydroseeding.webp",
    alt: "Estate hydroseeding project",
    title: "Estate Hydroseeding",
  },
  {
    src: "/images/portfolio/stone-retaining-wall-planting.webp",
    alt: "Stone retaining wall with plantings",
    title: "Stone Retaining Wall",
  },
  {
    src: "/images/portfolio/subdivision-lawn-install.webp",
    alt: "Subdivision lawn hydroseeding install",
    title: "Subdivision Lawn Install",
  },
  {
    src: "/images/portfolio/premium-landscaping.webp",
    alt: "Premium landscape design",
    title: "Premium Landscape Design",
  },
];

const whyChooseUs: { icon: ReactNode; title: string; description: string; image: string }[] = [
  {
    icon: <AwardIcon />,
    title: "Superior Quality",
    description: "Professional-grade equipment and premium materials for results that last.",
    image: "/images/portfolio/full-property-hydroseeding.webp",
  },
  {
    icon: <UserIcon />,
    title: "Owner-Operated",
    description: "Chad Fraaza is on every job — ensuring personal accountability and attention to detail.",
    image: "/images/services/hydroseeder-truck-jobsite.webp",
  },
  {
    icon: <CalendarIcon />,
    title: "Since 2004",
    description: "Over two decades of trusted service across West Michigan communities.",
    image: "/images/portfolio/commercial-site-work.webp",
  },
  {
    icon: <ShieldCheckIcon />,
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your peace of mind on every project.",
    image: "/images/portfolio/new-construction-lawn.webp",
  },
];

const galleryFooter = [
  { src: "/images/portfolio/lawn-growth-14-days.webp", alt: "Lawn growth 14 days after hydroseeding" },
  { src: "/images/portfolio/front-yard-stone-border.webp", alt: "Front yard with stone border" },
  { src: "/images/portfolio/river-rock-landscaping.webp", alt: "River rock landscaping detail" },
  { src: "/images/portfolio/retaining-wall-hydroseeding.webp", alt: "Retaining wall with hydroseeded lawn" },
  { src: "/images/gallery/backyard-patio-hydroseeding.webp", alt: "Backyard patio with hydroseeded lawn" },
  { src: "/images/gallery/ornamental-tree-planting.webp", alt: "Ornamental tree planting" },
  { src: "/images/portfolio/macatawa-completed-landscape.webp", alt: "Completed residential landscape" },
  { src: "/images/gallery/completed-wall-project-1.webp", alt: "Completed wall project" },
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black/65 group-hover:via-black/25" />
                  <div className="relative z-10 p-6">
                    <div className="text-3xl">{service.icon}</div>
                    <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-xl font-bold text-white sm:text-2xl">
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
            {galleryFooter.map((photo, idx) => (
              <FadeIn key={photo.src} delay={((idx % 3) + 1) as 1 | 2 | 3}>
                <div className="group relative aspect-square overflow-hidden rounded-xl shadow-[var(--shadow-md)]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    quality={90}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />
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
    </div>
  );
}
