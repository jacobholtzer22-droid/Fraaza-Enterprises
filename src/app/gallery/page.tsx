import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/Button";
import { GalleryGrid } from "@/components/GalleryGrid";
import type { GalleryItem } from "@/components/GalleryCard";

export const metadata: Metadata = {
  title: "Hydroseeding Project Gallery | Holland, MI",
  description:
    "Browse hydroseeding, soil preparation, landscaping, and retaining wall project photos from West Michigan's hydroseeding experts — Fraaza Enterprises, Holland, MI.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Gallery | Fraaza Enterprises",
    description:
      "Hydroseeding project gallery — plus landscaping, soil preparation, and retaining wall work across West Michigan.",
    url: "/gallery",
  },
};

const galleryItems: GalleryItem[] = [
  {
    src: "/images/heroes/luxury-home-hydroseeding.webp",
    alt: "Luxury home with fresh hydroseeding",
    category: "Hydroseeding",
    title: "Luxury Home Lawn",
    description: "Full hydroseeding application for upscale lakeside residence",
  },
  {
    src: "/images/portfolio/pool-landscape-design.webp",
    alt: "Pool area with professional landscaping",
    category: "Landscaping",
    title: "Poolside Landscape Design",
    description: "Complete landscape design and installation around pool area",
  },
  {
    src: "/images/heroes/craftsman-home-hydroseeding.webp",
    alt: "Craftsman home hydroseeding project",
    category: "Hydroseeding",
    title: "Craftsman Home Hydroseeding",
    description: "New lawn installation for craftsman-style home build",
  },
  {
    src: "/images/portfolio/stone-retaining-wall-planting.webp",
    alt: "Stone retaining wall with planting beds",
    category: "Landscaping",
    title: "Stone Wall & Planting Beds",
    description: "Decorative stone retaining wall with integrated planting beds",
  },
  {
    src: "/images/portfolio/retaining-wall-hydroseeding.webp",
    alt: "Retaining wall with fresh hydroseeding",
    category: "Hydroseeding",
    title: "Retaining Wall Hydroseed",
    description: "Hydroseeded lawn with new retaining wall integration",
  },
  {
    src: "/images/heroes/lakefront-hydroseeding.webp",
    alt: "Lakefront property hydroseeding",
    category: "Hydroseeding",
    title: "Lakefront Property",
    description: "Erosion control and hydroseeding for lakefront lot",
  },
  {
    src: "/images/portfolio/natural-stone-wall.webp",
    alt: "Natural stone retaining wall",
    category: "Landscaping",
    title: "Natural Stone Retaining Wall",
    description: "Hand-placed natural stone wall for grade transition",
  },
  {
    src: "/images/services/hydroseeding-mulch-application.webp",
    alt: "Hydroseeding mulch application",
    category: "Hydroseeding",
    title: "Mulch Application",
    description: "Professional hydroseeding mulch layer in progress",
  },
  {
    src: "/images/heroes/new-build-landscaping.webp",
    alt: "New build with landscaping and stone wall",
    category: "Landscaping",
    title: "New Build Landscaping",
    description: "Full landscaping package with stone wall for new construction",
  },
  {
    src: "/images/portfolio/river-rock-landscaping.webp",
    alt: "River rock and landscaping borders",
    category: "Landscaping",
    title: "River Rock Borders",
    description: "Decorative river rock with landscape border detail",
  },
  {
    src: "/images/services/roadside-hydroseeding.webp",
    alt: "Roadside hydroseeding with equipment",
    category: "Hydroseeding",
    title: "Commercial Roadside Project",
    description: "Large-scale roadside erosion control and seeding",
  },
  {
    src: "/images/portfolio/lawn-growth-14-days.webp",
    alt: "Lawn growth 14 days after hydroseeding",
    category: "Hydroseeding",
    title: "14-Day Growth Results",
    description: "Healthy lawn growth just two weeks after hydroseeding",
  },
  {
    src: "/images/services/hydroseeder-truck-jobsite.webp",
    alt: "Hydroseeder truck on job site",
    category: "Hydroseeding",
    title: "Hydroseeder On-Site",
    description: "Professional-grade hydroseeder truck at active job site",
  },
  {
    src: "/images/portfolio/estate-hydroseeding.webp",
    alt: "Estate property hydroseeding",
    category: "Hydroseeding",
    title: "Estate Property",
    description: "Multi-acre hydroseeding for premium estate property",
  },
  {
    src: "/images/services/snow-plow-truck.webp",
    alt: "Snow plow truck in action",
    category: "Snow Plowing",
    title: "Commercial Snow Plowing",
    description: "Heavy-duty plow truck clearing commercial property",
  },
  {
    src: "/images/portfolio/new-construction-lawn.webp",
    alt: "New construction lawn installation",
    category: "Hydroseeding",
    title: "Residential Lawn Installation",
    description: "Full hydroseeding application for new construction home",
  },
  {
    src: "/images/gallery/backyard-patio-hydroseeding.webp",
    alt: "Backyard patio with hydroseeding",
    category: "Hydroseeding",
    title: "Backyard Patio Surround",
    description: "Hydroseeded lawn surrounding new backyard patio",
  },
  {
    src: "/images/portfolio/macatawa-finished-lawn.webp",
    alt: "Macatawa Legends finished lawn",
    category: "Hydroseeding",
    title: "Macatawa Legends Lawn",
    description: "Finished hydroseeded lawn in Macatawa Legends community",
  },
  {
    src: "/images/services/commercial-hydroseeding-1.webp",
    alt: "Large-scale commercial hydroseeding",
    category: "Hydroseeding",
    title: "Commercial Hydroseeding",
    description: "Large-scale commercial lot hydroseeding project",
  },
  {
    src: "/images/gallery/ornamental-tree-planting.webp",
    alt: "Ornamental tree planting with mulch bed",
    category: "Landscaping",
    title: "Ornamental Tree Planting",
    description: "Decorative tree installation with mulch bed detail",
  },
  {
    src: "/images/portfolio/subdivision-lawn-install.webp",
    alt: "Subdivision lawn installation",
    category: "Hydroseeding",
    title: "Subdivision Lawn Install",
    description: "Multi-lot hydroseeding for new residential subdivision",
  },
  {
    src: "/images/portfolio/premium-landscaping.webp",
    alt: "Premium landscaping project",
    category: "Landscaping",
    title: "Premium Landscape Design",
    description: "High-end landscape design and installation package",
  },
  {
    src: "/images/portfolio/full-property-hydroseeding.webp",
    alt: "Full property hydroseeding coverage",
    category: "Hydroseeding",
    title: "Full Property Coverage",
    description: "Complete property hydroseeding from front to back",
  },
  {
    src: "/images/services/hydroseeder-landscaping-project.webp",
    alt: "Hydroseeder at landscaping project",
    category: "Hydroseeding",
    title: "Hydroseeder in Action",
    description: "Active hydroseeding application at landscaping project",
  },
  {
    src: "/images/gallery/new-retaining-wall-1.webp",
    alt: "New retaining wall installation",
    category: "Landscaping",
    title: "Retaining Wall Installation",
    description: "New block retaining wall build for grade management",
  },
  {
    src: "/images/gallery/completed-wall-project-1.webp",
    alt: "Completed retaining wall project",
    category: "Landscaping",
    title: "Completed Wall Project",
    description: "Finished retaining wall with backfill and grading",
  },
  {
    src: "/images/services/topsoil-delivery.webp",
    alt: "Topsoil delivery for site preparation",
    category: "Soil Prep",
    title: "Topsoil Delivery & Grading",
    description: "Bulk topsoil delivery and site grading for new lawn prep",
  },
  {
    src: "/images/portfolio/macatawa-completed-landscape.webp",
    alt: "Macatawa Legends completed landscape",
    category: "Landscaping",
    title: "Macatawa Completed Landscape",
    description: "Full landscape completion in Macatawa Legends community",
  },
];

export default function GalleryPage() {
  return (
    <div>
      {/* Hero banner */}
      <section className="relative h-72 sm:h-96 flex items-center">
        <Image
          src="/images/heroes/hydroseeding-new-home.webp"
          alt="Hydroseeding project by Fraaza Enterprises"
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
            eyebrow="Gallery"
            title="Work we're proud of"
            description="Browse our portfolio of hydroseeding, landscaping, soil preparation, and retaining wall projects across West Michigan."
          />
        </Container>
      </section>

      {/* Gallery grid with filters */}
      <section className="bg-[var(--bg-cream)]">
        <Container className="py-16 sm:py-24">
          <GalleryGrid items={galleryItems} />

          <FadeIn>
            <div className="mt-16 text-center">
              <Button href="/contact" variant="primary" className="w-full sm:w-auto">
                Start Your Project
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
