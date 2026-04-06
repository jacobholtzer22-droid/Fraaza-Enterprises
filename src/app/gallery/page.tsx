import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View hydroseeding, landscaping, soil preparation, and retaining wall project photos from Fraaza Enterprises serving Holland, MI and West Michigan.",
  openGraph: {
    title: "Gallery | Fraaza Enterprises",
    description:
      "Hydroseeding, landscaping, and soil preparation project gallery.",
    url: "/gallery",
  },
};

const photos: { src: string; alt: string; tall?: boolean }[] = [
  { src: "/images/heroes/luxury-home-hydroseeding.jpg", alt: "Luxury home with fresh hydroseeding", tall: true },
  { src: "/images/portfolio/pool-landscape-design.jpg", alt: "Pool area with professional landscaping", tall: true },
  { src: "/images/heroes/craftsman-home-hydroseeding.jpg", alt: "Craftsman home hydroseeding project" },
  { src: "/images/portfolio/stone-retaining-wall-planting.jpg", alt: "Stone retaining wall with planting beds" },
  { src: "/images/portfolio/retaining-wall-hydroseeding.jpg", alt: "Retaining wall with fresh hydroseeding" },
  { src: "/images/heroes/lakefront-hydroseeding.jpg", alt: "Lakefront property hydroseeding" },
  { src: "/images/portfolio/natural-stone-wall.jpg", alt: "Natural stone retaining wall", tall: true },
  { src: "/images/services/hydroseeding-mulch-application.jpg", alt: "Hydroseeding mulch application" },
  { src: "/images/heroes/new-build-landscaping.jpg", alt: "New build with landscaping and stone wall" },
  { src: "/images/portfolio/river-rock-landscaping.jpg", alt: "River rock and landscaping borders" },
  { src: "/images/services/roadside-hydroseeding.jpg", alt: "Roadside hydroseeding with equipment", tall: true },
  { src: "/images/portfolio/lawn-growth-14-days.jpg", alt: "Lawn growth 14 days after hydroseeding" },
  { src: "/images/services/hydroseeder-truck-jobsite.jpg", alt: "Hydroseeder truck on job site" },
  { src: "/images/portfolio/estate-hydroseeding.jpg", alt: "Estate property hydroseeding" },
  { src: "/images/services/snow-plow-truck.jpg", alt: "Snow plow truck in action" },
  { src: "/images/portfolio/new-construction-lawn.jpg", alt: "New construction lawn installation" },
  { src: "/images/gallery/backyard-patio-hydroseeding.jpg", alt: "Backyard patio with hydroseeding" },
  { src: "/images/portfolio/macatawa-finished-lawn.jpg", alt: "Macatawa Legends finished lawn", tall: true },
  { src: "/images/services/commercial-hydroseeding-1.jpg", alt: "Large-scale commercial hydroseeding" },
  { src: "/images/gallery/ornamental-tree-planting.jpg", alt: "Ornamental tree planting with mulch bed" },
  { src: "/images/portfolio/subdivision-lawn-install.jpg", alt: "Subdivision lawn installation" },
  { src: "/images/portfolio/premium-landscaping.jpg", alt: "Premium landscaping project" },
  { src: "/images/portfolio/full-property-hydroseeding.jpg", alt: "Full property hydroseeding coverage" },
  { src: "/images/services/hydroseeder-landscaping-project.jpg", alt: "Hydroseeder at landscaping project", tall: true },
  { src: "/images/gallery/new-retaining-wall-1.jpg", alt: "New retaining wall installation" },
  { src: "/images/gallery/completed-wall-project-1.jpg", alt: "Completed retaining wall project" },
  { src: "/images/services/topsoil-delivery.jpg", alt: "Topsoil delivery for site preparation" },
  { src: "/images/portfolio/macatawa-completed-landscape.jpg", alt: "Macatawa Legends completed landscape" },
];

export default function GalleryPage() {
  return (
    <div>
      {/* Hero banner */}
      <section className="relative h-72 sm:h-96 flex items-center">
        <Image
          src="/images/heroes/hydroseeding-new-home.jpg"
          alt="Hydroseeding project by Fraaza Enterprises"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[var(--bg-green)]/75" />
        <Container className="relative z-10">
          <SectionHeading
            light
            eyebrow="Gallery"
            title="Work we're proud of"
            description="Browse our portfolio of hydroseeding, landscaping, soil preparation, and retaining wall projects across West Michigan."
          />
        </Container>
      </section>

      {/* Gallery grid */}
      <section className="bg-[var(--bg-cream)]">
        <Container className="py-16 sm:py-24">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {photos.map((p, idx) => (
              <FadeIn key={p.src} delay={((idx % 3) + 1) as 1 | 2 | 3}>
                <div className="mb-4 break-inside-avoid img-zoom overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-sm)] transition-shadow duration-300 hover:shadow-[var(--shadow-lg)]">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={600}
                    height={p.tall ? 700 : 400}
                    className={`w-full object-cover ${p.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
                  />
                  <div className="px-4 py-3">
                    <div className="text-sm font-medium text-[var(--text-secondary)]">{p.alt}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-16 text-center">
              <Button href="/contact" variant="primary">
                Start Your Project
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
