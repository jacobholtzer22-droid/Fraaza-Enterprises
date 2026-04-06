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
    title: "Luxury Home Hydroseeding",
    description: "Hydroseeding application for upscale lakeside residence",
  },
  {
    src: "/images/portfolio/pool-landscape-design.webp",
    alt: "Pool area with professional landscape design",
    category: "Landscaping",
    title: "Pool Landscape Design",
    description: "Complete landscape design and installation around pool area",
  },
  {
    src: "/images/heroes/craftsman-home-hydroseeding.webp",
    alt: "Craftsman home hydroseeding project",
    category: "Hydroseeding",
    title: "Craftsman Home Hydroseeding",
    description: "New lawn hydroseeding for craftsman-style home build",
  },
  {
    src: "/images/portfolio/stone-retaining-wall-planting.webp",
    alt: "Stone retaining wall with planting beds",
    category: "Landscaping",
    title: "Stone Retaining Wall & Planting",
    description: "Decorative stone retaining wall with integrated planting beds",
  },
  {
    src: "/images/portfolio/retaining-wall-hydroseeding.webp",
    alt: "Retaining wall with hydroseeded lawn",
    category: "Landscaping",
    title: "Retaining Wall with Hydroseeded Lawn",
    description: "Retaining wall installation with integrated hydroseeded lawn",
  },
  {
    src: "/images/heroes/lakefront-hydroseeding.webp",
    alt: "Lakefront property hydroseeding",
    category: "Hydroseeding",
    title: "Lakefront Hydroseeding",
    description: "Hydroseeding and erosion control for lakefront lot",
  },
  {
    src: "/images/portfolio/natural-stone-wall.webp",
    alt: "Natural stone wall",
    category: "Landscaping",
    title: "Natural Stone Wall",
    description: "Hand-placed natural stone wall for grade transition",
  },
  {
    src: "/images/services/hydroseeding-mulch-application.webp",
    alt: "Hydroseeding mulch application in progress",
    category: "Hydroseeding",
    title: "Hydroseeding Mulch Application",
    description: "Professional hydroseeding mulch layer being applied",
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
    alt: "River rock landscaping borders",
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
  {
    src: "/images/services/hydroseeder-truck-jobsite.webp",
    alt: "Hydroseeder truck on jobsite",
    category: "Hydroseeding",
    title: "Hydroseeder Truck on Jobsite",
    description: "Professional-grade hydroseeder truck at active jobsite",
  },
  {
    src: "/images/portfolio/estate-hydroseeding.webp",
    alt: "Estate property hydroseeding",
    category: "Hydroseeding",
    title: "Estate Hydroseeding",
    description: "Multi-acre hydroseeding for premium estate property",
  },
  {
    src: "/images/services/snow-plow-truck.webp",
    alt: "Snow plow truck in action",
    category: "Snow Plowing",
    title: "Snow Plow Truck",
    description: "Heavy-duty snow plow truck clearing commercial property",
  },
  {
    src: "/images/portfolio/new-construction-lawn.webp",
    alt: "New construction lawn hydroseeding",
    category: "Hydroseeding",
    title: "New Construction Lawn",
    description: "Hydroseeded lawn installation for new construction home",
  },
  {
    src: "/images/gallery/backyard-patio-hydroseeding.webp",
    alt: "Backyard patio with hydroseeding",
    category: "Hydroseeding",
    title: "Backyard Patio Hydroseeding",
    description: "Hydroseeded lawn surrounding new backyard patio area",
  },
  {
    src: "/images/portfolio/macatawa-finished-lawn.webp",
    alt: "Macatawa Legends finished lawn",
    category: "Hydroseeding",
    title: "Macatawa Finished Lawn",
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
    title: "Premium Landscaping",
    description: "High-end landscaping design and installation",
  },
  {
    src: "/images/portfolio/full-property-hydroseeding.webp",
    alt: "Full property hydroseeding coverage",
    category: "Hydroseeding",
    title: "Full Property Hydroseeding",
    description: "Complete property hydroseeding coverage from front to back",
  },
  {
    src: "/images/services/hydroseeder-landscaping-project.webp",
    alt: "Hydroseeder at landscaping project",
    category: "Hydroseeding",
    title: "Hydroseeder at Landscaping Project",
    description: "Hydroseeder equipment active at landscaping project site",
  },
  {
    src: "/images/gallery/new-retaining-wall-1.webp",
    alt: "New retaining wall installation",
    category: "Landscaping",
    title: "New Retaining Wall",
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
    title: "Topsoil Delivery",
    description: "Bulk topsoil delivery for new lawn site preparation",
  },
  {
    src: "/images/portfolio/macatawa-completed-landscape.webp",
    alt: "Macatawa Legends completed landscape",
    category: "Landscaping",
    title: "Macatawa Completed Landscape",
    description: "Full landscape completion in Macatawa Legends community",
  },
  {
    src: "/images/golf/macatawa-legends-fairway.webp",
    alt: "Macatawa Legends fairway hydroseeding",
    category: "Golf Courses",
    title: "Macatawa Legends — Fairway Restoration",
    description: "Hydroseeding for fairway turf restoration at Macatawa Legends Golf Club",
  },
  {
    src: "/images/golf/macatawa-legends-tee-box.webp",
    alt: "Macatawa Legends tee box hydroseeding",
    category: "Golf Courses",
    title: "Macatawa Legends — Tee Box Renovation",
    description: "Precision tee box hydroseeding for consistent, durable turf",
  },
  {
    src: "/images/golf/macatawa-legends-green-surround.webp",
    alt: "Macatawa Legends green surround hydroseeding",
    category: "Golf Courses",
    title: "Macatawa Legends — Green Surrounds",
    description: "Hydroseeded green surrounds and approach areas for seamless turf transition",
  },
  {
    src: "/images/golf/golf-course-erosion-control.webp",
    alt: "Golf course erosion control hydroseeding",
    category: "Golf Courses",
    title: "Course Erosion Control",
    description: "Slope stabilization and erosion control along cart paths and waterways",
  },
  {
    src: "/images/golf/macatawa-legends-bunker-surround.webp",
    alt: "Macatawa Legends bunker surround hydroseeding",
    category: "Golf Courses",
    title: "Macatawa Legends — Bunker Surrounds",
    description: "Clean bunker edge hydroseeding for a polished, professional finish",
  },
  {
    src: "/images/golf/golf-course-cart-path.webp",
    alt: "Golf course cart path hydroseeding",
    category: "Golf Courses",
    title: "Cart Path Restoration",
    description: "Cart path shoulder and border hydroseeding for course-wide consistency",
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
