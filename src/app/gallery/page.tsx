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
    title: "Lakeside Residence",
    description: "New lawn installation",
  },
  {
    src: "/images/portfolio/pool-landscape-design.webp",
    alt: "Pool area with professional landscape design",
    category: "Landscaping",
    title: "Poolside Landscaping",
    description: "Design & installation",
  },
  {
    src: "/images/heroes/craftsman-home-hydroseeding.webp",
    alt: "Craftsman home hydroseeding project",
    category: "Hydroseeding",
    title: "New Home Build",
    description: "Full yard hydroseeding",
  },
  {
    src: "/images/portfolio/stone-retaining-wall-planting.webp",
    alt: "Stone retaining wall with planting beds",
    category: "Landscaping",
    title: "Stone Wall & Planting Beds",
    description: "Retaining wall with landscaping",
  },
  {
    src: "/images/portfolio/retaining-wall-hydroseeding.webp",
    alt: "Retaining wall with hydroseeded lawn",
    category: "Landscaping",
    title: "Retaining Wall & Lawn",
    description: "Wall install with hydroseeding",
  },
  {
    src: "/images/heroes/lakefront-hydroseeding.webp",
    alt: "Lakefront property hydroseeding",
    category: "Hydroseeding",
    title: "Lakefront Property",
    description: "Erosion control & seeding",
  },
  {
    src: "/images/portfolio/natural-stone-wall.webp",
    alt: "Natural stone wall",
    category: "Landscaping",
    title: "Natural Stone Wall",
    description: "Hand-placed stone work",
  },
  {
    src: "/images/services/hydroseeding-mulch-application.webp",
    alt: "Hydroseeding mulch application in progress",
    category: "Hydroseeding",
    title: "Mulch Application",
    description: "Hydroseeding in progress",
  },
  {
    src: "/images/heroes/new-build-landscaping.webp",
    alt: "New build with landscaping and stone wall",
    category: "Landscaping",
    title: "New Construction Landscaping",
    description: "Complete landscape package",
  },
  {
    src: "/images/portfolio/river-rock-landscaping.webp",
    alt: "River rock landscaping borders",
    category: "Landscaping",
    title: "River Rock Borders",
    description: "Decorative rock detail",
  },
  {
    src: "/images/services/roadside-hydroseeding.webp",
    alt: "Roadside hydroseeding project",
    category: "Hydroseeding",
    title: "Roadside Project",
    description: "Large-scale erosion control",
  },
  {
    src: "/images/portfolio/lawn-growth-14-days.webp",
    alt: "Lawn growth 14 days after hydroseeding",
    category: "Hydroseeding",
    title: "14-Day Growth Results",
    description: "Two weeks after application",
  },
  {
    src: "/images/services/hydroseeder-truck-jobsite.webp",
    alt: "Hydroseeder truck on jobsite",
    category: "Hydroseeding",
    title: "Our Equipment",
    description: "Hydroseeder truck on-site",
  },
  {
    src: "/images/portfolio/estate-hydroseeding.webp",
    alt: "Estate property hydroseeding",
    category: "Hydroseeding",
    title: "Estate Property",
    description: "Multi-acre hydroseeding",
  },
  {
    src: "/images/services/snow-plow-truck.webp",
    alt: "Snow plow truck in action",
    category: "Snow Plowing",
    title: "Commercial Snow Removal",
    description: "Parking lot clearing",
  },
  {
    src: "/images/portfolio/new-construction-lawn.webp",
    alt: "New construction lawn hydroseeding",
    category: "Hydroseeding",
    title: "New Construction Lawn",
    description: "Residential new build",
  },
  {
    src: "/images/gallery/backyard-patio-hydroseeding.webp",
    alt: "Backyard patio with hydroseeding",
    category: "Hydroseeding",
    title: "Backyard Patio Area",
    description: "Lawn seeding around patio",
  },
  {
    src: "/images/portfolio/macatawa-finished-lawn.webp",
    alt: "Macatawa Legends finished lawn",
    category: "Hydroseeding",
    title: "Macatawa Legends",
    description: "Finished lawn",
  },
  {
    src: "/images/services/commercial-hydroseeding-1.webp",
    alt: "Large-scale commercial hydroseeding",
    category: "Hydroseeding",
    title: "Commercial Project",
    description: "Large-scale lot seeding",
  },
  {
    src: "/images/gallery/ornamental-tree-planting.webp",
    alt: "Ornamental tree planting with mulch bed",
    category: "Landscaping",
    title: "Tree & Mulch Bed Install",
    description: "Ornamental planting",
  },
  {
    src: "/images/portfolio/subdivision-lawn-install.webp",
    alt: "Subdivision lawn installation",
    category: "Hydroseeding",
    title: "Subdivision Lawns",
    description: "Multi-lot installation",
  },
  {
    src: "/images/portfolio/premium-landscaping.webp",
    alt: "Premium landscaping project",
    category: "Landscaping",
    title: "Premium Landscaping",
    description: "Full design & install",
  },
  {
    src: "/images/portfolio/full-property-hydroseeding.webp",
    alt: "Full property hydroseeding coverage",
    category: "Hydroseeding",
    title: "Full Property Coverage",
    description: "Front & back yard seeding",
  },
  {
    src: "/images/services/hydroseeder-landscaping-project.webp",
    alt: "Hydroseeder at landscaping project",
    category: "Hydroseeding",
    title: "Active Job Site",
    description: "Hydroseeder in action",
  },
  {
    src: "/images/gallery/new-retaining-wall-1.webp",
    alt: "New retaining wall installation",
    category: "Landscaping",
    title: "Block Retaining Wall",
    description: "New wall installation",
  },
  {
    src: "/images/gallery/completed-wall-project-1.webp",
    alt: "Completed retaining wall project",
    category: "Landscaping",
    title: "Retaining Wall — Complete",
    description: "Finished wall with grading",
  },
  {
    src: "/images/services/topsoil-delivery.webp",
    alt: "Topsoil delivery for site preparation",
    category: "Soil Prep",
    title: "Topsoil Delivery",
    description: "Site preparation",
  },
  {
    src: "/images/portfolio/macatawa-completed-landscape.webp",
    alt: "Macatawa Legends completed landscape",
    category: "Landscaping",
    title: "Macatawa Legends",
    description: "Completed landscape",
  },
  {
    src: "/images/golf/macatawa-legends-fairway.webp",
    alt: "Macatawa Legends fairway hydroseeding",
    category: "Golf Courses",
    title: "Fairway Restoration",
    description: "Macatawa Legends Golf Club",
  },
  {
    src: "/images/golf/macatawa-legends-tee-box.webp",
    alt: "Macatawa Legends tee box hydroseeding",
    category: "Golf Courses",
    title: "Tee Box Renovation",
    description: "Macatawa Legends Golf Club",
  },
  {
    src: "/images/golf/macatawa-legends-green-surround.webp",
    alt: "Macatawa Legends green surround hydroseeding",
    category: "Golf Courses",
    title: "Green Surrounds",
    description: "Macatawa Legends Golf Club",
  },
  {
    src: "/images/golf/golf-course-erosion-control.webp",
    alt: "Golf course erosion control hydroseeding",
    category: "Golf Courses",
    title: "Erosion Control",
    description: "Cart paths & waterways",
  },
  {
    src: "/images/golf/macatawa-legends-bunker-surround.webp",
    alt: "Macatawa Legends bunker surround hydroseeding",
    category: "Golf Courses",
    title: "Bunker Surrounds",
    description: "Macatawa Legends Golf Club",
  },
  {
    src: "/images/golf/golf-course-cart-path.webp",
    alt: "Golf course cart path hydroseeding",
    category: "Golf Courses",
    title: "Cart Path Edges",
    description: "Border restoration",
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
