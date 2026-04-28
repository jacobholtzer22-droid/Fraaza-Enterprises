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
    title: "New Lawn Install",
  },
  {
    src: "/images/portfolio/pool-landscape-design.webp",
    alt: "Pool area with professional landscape design",
    category: "Landscaping",
    title: "Pool Area Plantings & Fire Pit Ring",
  },
  {
    src: "/images/heroes/craftsman-home-hydroseeding.webp",
    alt: "Craftsman home hydroseeding project",
    category: "Hydroseeding",
    title: "New Hydroseeded Lawn Application",
  },
  {
    src: "/images/portfolio/stone-retaining-wall-planting.webp",
    alt: "Stone retaining wall with planting beds",
    category: "Landscaping",
    title: "Stone Wall & Beds",
  },
  {
    src: "/images/portfolio/retaining-wall-hydroseeding.webp",
    alt: "Retaining wall with hydroseeded lawn",
    category: "Landscaping",
    title: "Wall & Lawn",
  },
  {
    src: "/images/heroes/lakefront-hydroseeding.webp",
    alt: "Lakefront property hydroseeding",
    category: "Hydroseeding",
    title: "Lakefront Property",
  },
  {
    src: "/images/portfolio/natural-stone-wall.webp",
    alt: "Natural stone wall",
    category: "Landscaping",
    title: "Natural Stone Wall",
  },
  {
    src: "/images/services/hydroseeding-mulch-application.webp",
    alt: "Hydroseeding mulch application in progress",
    category: "Hydroseeding",
    title: "Retaining Wall & Hydroseed",
  },
  {
    src: "/images/heroes/new-build-landscaping.webp",
    alt: "New build with landscaping and stone wall",
    category: "Landscaping",
    title: "New Build with Wall",
  },
  {
    src: "/images/portfolio/river-rock-landscaping.webp",
    alt: "River rock landscaping borders",
    category: "Landscaping",
    title: "River Rock Borders",
  },
  {
    src: "/images/services/roadside-hydroseeding.webp",
    alt: "Roadside hydroseeding project",
    category: "Hydroseeding",
    title: "Roadside Project",
  },
  {
    src: "/images/portfolio/lawn-growth-14-days.webp",
    alt: "Lawn growth 14 days after hydroseeding",
    category: "Hydroseeding",
    title: "14-Day Growth",
  },
  {
    src: "/images/services/hydroseeder-truck-jobsite.webp",
    alt: "Hydroseeder truck on jobsite",
    category: "Hydroseeding",
    title: "Hydroseed Truck on Jobsite",
  },
  {
    src: "/images/portfolio/estate-hydroseeding.webp",
    alt: "Large property hydroseeding",
    category: "Hydroseeding",
    title: "New Hydroseeded Lawn",
  },
  {
    src: "/images/services/snow-plow-truck.webp",
    alt: "Snow plow truck in action",
    category: "Snow Plowing",
    title: "Plow in Action",
  },
  {
    src: "/images/portfolio/new-construction-lawn.webp",
    alt: "New construction lawn hydroseeding",
    category: "Hydroseeding",
    title: "Established Hydroseeded Lawn",
  },
  {
    src: "/images/gallery/backyard-patio-hydroseeding.webp",
    alt: "Backyard patio with hydroseeding",
    category: "Hydroseeding",
    title: "Block Retaining Wall & Hydroseed",
  },
  {
    src: "/images/portfolio/macatawa-finished-lawn.webp",
    alt: "Finished hydroseeded lawn",
    category: "Hydroseeding",
    title: "Established Hydroseeded Lawn",
  },
  {
    src: "/images/services/commercial-hydroseeding-1.webp",
    alt: "Large-scale commercial hydroseeding",
    category: "Hydroseeding",
    title: "Commercial Project",
  },
  {
    src: "/images/gallery/ornamental-tree-planting.webp",
    alt: "Ornamental tree planting with mulch bed",
    category: "Landscaping",
    title: "Tree Planting",
  },
  {
    src: "/images/portfolio/subdivision-lawn-install.webp",
    alt: "Subdivision lawn installation",
    category: "Hydroseeding",
    title: "Subdivision Install",
  },
  {
    src: "/images/portfolio/full-property-hydroseeding.webp",
    alt: "Full property hydroseeding coverage",
    category: "Hydroseeding",
    title: "Retaining Wall",
  },
  {
    src: "/images/services/hydroseeder-landscaping-project.webp",
    alt: "Hydroseeder at landscaping project",
    category: "Hydroseeding",
    title: "On Location",
  },
  {
    src: "/images/gallery/new-retaining-wall-1.webp",
    alt: "New retaining wall installation",
    category: "Landscaping",
    title: "Shed Pad Retaining Wall",
  },
  {
    src: "/images/gallery/completed-wall-project-1.webp",
    alt: "Completed retaining wall project",
    category: "Landscaping",
    title: "Completed Wall",
  },
  {
    src: "/images/services/topsoil-delivery.webp",
    alt: "Topsoil delivery for site preparation",
    category: "Soil Prep",
    title: "Topsoil Delivery",
  },
  {
    src: "/images/bobcat-soil-conditioner.png",
    alt: "Bobcat soil conditioner preparing ground for seeding",
    category: "Soil Prep",
    title: "Bobcat Soil Conditioner",
  },
  {
    src: "/images/gallery/soil-prep-prepared-yard.png",
    alt: "Prepared soil in front yard ready for hydroseeding",
    category: "Soil Prep",
    title: "Prepared Yard",
  },
  {
    src: "/images/gallery/church-hydroseeding.png",
    alt: "Church property with fresh hydroseeding application",
    category: "Hydroseeding",
    title: "Church Property Hydroseeding",
  },
  {
    src: "/images/gallery/macatawa-legends-hydroseed-1.png",
    alt: "Macatawa Legends golf course hydroseeding with irrigation sprinklers",
    category: "Golf Courses",
    title: "Macatawa Legends",
  },
  {
    src: "/images/gallery/macatawa-legends-hydroseed-2.png",
    alt: "Workers applying hydroseed at Macatawa Legends golf course",
    category: "Golf Courses",
    title: "Macatawa Legends",
  },
  {
    src: "/images/gallery/macatawa-legends-hydroseed-3.png",
    alt: "Hydroseed spray application at Macatawa Legends",
    category: "Golf Courses",
    title: "Macatawa Legends",
  },
  {
    src: "/images/gallery/macatawa-legends-hydroseed-4.png",
    alt: "Macatawa Legends golf course cart path with hydroseeding",
    category: "Golf Courses",
    title: "Macatawa Legends",
  },
  {
    src: "/images/gallery/macatawa-legends-hydroseed-5.png",
    alt: "Hydroseeding a hillside at Macatawa Legends golf course",
    category: "Golf Courses",
    title: "Macatawa Legends",
  },
  {
    src: "/images/gallery/macatawa-legends-hydroseed-7.png",
    alt: "Straw mulching operation at Macatawa Legends golf course",
    category: "Golf Courses",
    title: "Macatawa Legends",
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
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--bg-green)]/75 via-[var(--bg-green)]/35 to-transparent" />
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
