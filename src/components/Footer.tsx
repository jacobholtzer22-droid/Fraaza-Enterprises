import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SITE } from "@/lib/site";
import { Button } from "@/components/Button";

const mosaicPhotos = [
  { src: "/images/portfolio/stone-wall-detail.jpg", alt: "Stone wall detail" },
  { src: "/images/gallery/backyard-patio-hydroseeding.jpg", alt: "Backyard hydroseeding" },
  { src: "/images/portfolio/front-yard-stone-border.jpg", alt: "Front yard stone border" },
  { src: "/images/services/hydroseeding-mulch-application.jpg", alt: "Hydroseeding application" },
  { src: "/images/portfolio/pool-landscape-design.jpg", alt: "Pool landscape design" },
  { src: "/images/gallery/new-retaining-wall-1.jpg", alt: "Retaining wall" },
  { src: "/images/portfolio/river-rock-landscaping.jpg", alt: "River rock landscaping" },
  { src: "/images/heroes/craftsman-home-hydroseeding.jpg", alt: "Craftsman home" },
];

export function Footer() {
  const googleReviewUrl = process.env.GOOGLE_REVIEW_URL;

  return (
    <>
      {/* Photo Mosaic Strip */}
      <div className="photo-mosaic">
        {mosaicPhotos.map((photo) => (
          <div key={photo.src} className="relative aspect-[3/2] overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 25vw, 12.5vw"
              className="object-cover opacity-50 hover:opacity-90 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>

      <footer className="bg-[var(--bg-green)] text-[var(--bg-cream)]">
        <Container className="py-16">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <Image
                src="/images/fraaza-logo.png"
                alt={SITE.name}
                width={324}
                height={181}
                className="h-20 w-auto rounded-lg"
              />
              <div className="mt-4 text-sm text-white/60">{SITE.tagline}</div>
              <div className="mt-6 text-sm text-white/60">
                <div className="font-semibold text-white/80">Service area</div>
                <div className="mt-1">{SITE.serviceArea}</div>
              </div>
            </div>

            <div className="text-sm text-white/60">
              <div className="font-semibold text-white/80">Contact</div>
              <div className="mt-3 space-y-2">
                <a className="block hover:text-white transition-colors" href={SITE.phoneHref}>
                  {SITE.phone}
                </a>
                <a className="block hover:text-white transition-colors" href={`mailto:${SITE.email}`}>
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
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <Link className="text-white/60 hover:text-white transition-colors" href="/services">
                  Services
                </Link>
                <Link className="text-white/60 hover:text-white transition-colors" href="/gallery">
                  Gallery
                </Link>
                <Link className="text-white/60 hover:text-white transition-colors" href="/about">
                  About
                </Link>
                <Link className="text-white/60 hover:text-white transition-colors" href="/contact">
                  Contact
                </Link>
                <Link className="text-white/60 hover:text-white transition-colors" href="/privacy-policy">
                  Privacy
                </Link>
                <Link className="text-white/60 hover:text-white transition-colors" href="/terms">
                  Terms
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {googleReviewUrl ? (
                  <Button href={googleReviewUrl} variant="outline">
                    Leave Us a Review
                  </Button>
                ) : (
                  <Button href="/contact" variant="outline">
                    Leave Us a Review
                  </Button>
                )}
                <Button href="/contact" variant="ghost">
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
