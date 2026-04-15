import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SITE } from "@/lib/site";
import { Button } from "@/components/Button";

const mosaicPhotos = [
  { src: "/images/portfolio/stone-wall-detail.webp", alt: "Stone wall detail", category: "Landscaping", title: "Stone Wall" },
  { src: "/images/gallery/backyard-patio-hydroseeding.webp", alt: "Backyard hydroseeding", category: "Hydroseeding", title: "Block Wall & Hydroseed" },
  { src: "/images/portfolio/front-yard-stone-border.webp", alt: "Front yard stone border", category: "Landscaping", title: "Stone Border" },
  { src: "/images/services/hydroseeding-mulch-application.webp", alt: "Hydroseeding application", category: "Hydroseeding", title: "Mulch Application" },
  { src: "/images/portfolio/pool-landscape-design.webp", alt: "Pool landscape design", category: "Landscaping", title: "Pool Area Plantings" },
  { src: "/images/gallery/new-retaining-wall-1.webp", alt: "Retaining wall", category: "Landscaping", title: "Retaining Wall" },
  { src: "/images/portfolio/river-rock-landscaping.webp", alt: "River rock landscaping", category: "Landscaping", title: "River Rock Borders" },
  { src: "/images/heroes/craftsman-home-hydroseeding.webp", alt: "Craftsman home", category: "Hydroseeding", title: "Craftsman Home" },
];

export function Footer() {
  const googleReviewUrl = process.env.GOOGLE_REVIEW_URL;

  return (
    <>
      {/* Photo Mosaic Strip */}
      <div className="photo-mosaic">
        {mosaicPhotos.map((photo) => (
          <div key={photo.src} className="group relative aspect-[3/2] overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 25vw, 12.5vw"
              className="object-cover opacity-50 group-hover:opacity-90 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="inline-block w-fit rounded-full bg-[var(--bg-green)]/85 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                {photo.category}
              </span>
              <span className="text-[10px] font-semibold text-white leading-tight">
                {photo.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      <footer className="bg-[var(--bg-green)] text-[var(--bg-cream)]">
        <Container className="py-16">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <Image
                src="/images/fraaza-logo.webp"
                alt={SITE.name}
                width={324}
                height={181}
                className="h-20 w-auto rounded-lg"
              />
              <div className="mt-4 text-sm text-white/60">{SITE.tagline}</div>
              <p className="mt-2 text-sm text-white/50">Specializing in hydroseeding since 2004. Also offering soil preparation, landscaping, and snow plowing.</p>
              <div className="mt-6 text-sm text-white/60">
                <div className="font-semibold text-white/80">Service area</div>
                <div className="mt-1">{SITE.serviceArea}</div>
              </div>

              <a
                href="https://www.hydroseeding.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-3 group"
              >
                <Image
                  src="/images/iahp-logo.jpg"
                  alt="International Association of Hydroseeding Professionals"
                  width={129}
                  height={97}
                  className="h-14 w-auto rounded bg-white/90 p-1"
                />
                <span className="text-xs leading-tight text-white/50 group-hover:text-white/80 transition-colors">
                  Member of the International<br />Association of Hydroseeding<br />Professionals
                </span>
              </a>
            </div>

            <div className="text-sm text-white/60">
              <div className="font-semibold text-white/80">Contact</div>
              <div className="mt-3 space-y-1">
                <a className="flex items-center min-h-[44px] hover:text-white transition-colors" href={SITE.phoneHref}>
                  {SITE.phone}
                </a>
                <a className="flex items-center min-h-[44px] hover:text-white transition-colors" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
                <div className="pt-3">
                  <div className="font-semibold text-white/80">Business hours</div>
                  <div className="mt-2 space-y-1">
                    {SITE.hours.map((h) => (
                      <div key={h.label} className="flex items-center justify-between gap-6">
                        <span>{h.label}</span>
                        <span className="text-white/40">{h.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-white/80">Explore</div>
              <div className="mt-3 grid grid-cols-2 gap-1 text-sm">
                <Link className="flex items-center min-h-[44px] text-white/60 hover:text-white transition-colors" href="/services">
                  Services
                </Link>
                <Link className="flex items-center min-h-[44px] text-white/60 hover:text-white transition-colors" href="/gallery">
                  Gallery
                </Link>
                <Link className="flex items-center min-h-[44px] text-white/60 hover:text-white transition-colors" href="/about">
                  About
                </Link>
                <Link className="flex items-center min-h-[44px] text-white/60 hover:text-white transition-colors" href="/contact">
                  Contact
                </Link>
                <Link className="flex items-center min-h-[44px] text-white/60 hover:text-white transition-colors" href="/privacy-policy">
                  Privacy
                </Link>
                <Link className="flex items-center min-h-[44px] text-white/60 hover:text-white transition-colors" href="/terms">
                  Terms
                </Link>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {googleReviewUrl ? (
                  <Button href={googleReviewUrl} variant="outline" className="w-full sm:w-auto">
                    Leave Us a Review
                  </Button>
                ) : (
                  <Button href="/contact" variant="outline" className="w-full sm:w-auto">
                    Leave Us a Review
                  </Button>
                )}
                <Button href="/contact" variant="ghost" className="w-full sm:w-auto">
                  <span className="text-white/70 hover:text-white">Contact Us</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <div>
              &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-x-2">
              <span>Website by</span>
              <a
                className="font-semibold text-white/60 hover:text-white transition-colors"
                href="https://alignandacquire.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Align &amp; Acquire
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
