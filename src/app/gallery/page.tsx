import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View hydroseeding, landscaping, and soil preparation project photos from Fraaza Enterprises serving Holland, MI and West Michigan. (Placeholder images for now.)",
  openGraph: {
    title: "Gallery | Fraaza Enterprises",
    description:
      "Hydroseeding, landscaping, and soil preparation project gallery (placeholders for now).",
    url: "/gallery",
  },
};

const photos = [
  {
    src: "/images/client/placeholder-hydroseeding.svg",
    alt: "Hydroseeding application on a prepared lawn area",
  },
  {
    src: "/images/client/placeholder-landscaping.svg",
    alt: "Landscaping project with fresh sod and planting",
  },
  {
    src: "/images/client/placeholder-soil-prep.svg",
    alt: "Soil preparation and grading work for a new lawn",
  },
  {
    src: "/images/client/placeholder-hydroseeding.svg",
    alt: "Erosion control hydroseeding on a slope near a roadside",
  },
  {
    src: "/images/client/placeholder-landscaping.svg",
    alt: "Retaining wall and landscaping installation detail",
  },
  {
    src: "/images/client/placeholder-soil-prep.svg",
    alt: "Topsoil and compost installation during site prep",
  },
] as const;

export default function GalleryPage() {
  return (
    <div>
      <section className="bg-[var(--bg-0)]">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            eyebrow="Gallery"
            title="Work we’re proud of"
            description="Placeholder images are shown for now. Real project photos will be added soon."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((p, idx) => (
              <div
                key={`${p.alt}-${idx}`}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <div className="text-sm font-semibold text-white/85">
                    {p.alt}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

