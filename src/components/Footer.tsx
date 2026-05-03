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
  { src: "/images/gallery/completed-wall-project-1.webp", alt: "Shed pad retaining wall", category: "Landscaping", title: "Retaining Wall" },
  { src: "/images/portfolio/river-rock-landscaping.webp", alt: "River rock landscaping", category: "Landscaping", title: "River Rock Borders" },
  { src: "/images/heroes/craftsman-home-hydroseeding.webp", alt: "Craftsman home", category: "Hydroseeding", title: "Craftsman Home" },
];

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?q=Fraaza+Enterprises+Inc+Reviews#lrd=0x881990e04401c901:0x694e8308491078e7,1,,,,";

export function Footer() {
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
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
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

      <footer className="bg-[var(--bg-green)] text-[var(--text-light)]">
        <Container className="py-14 lg:py-16">
          {/* Top: Brand + CTA */}
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
              <Image
                src="/images/fraaza-logo.webp"
                alt={SITE.name}
                width={324}
                height={181}
                className="h-16 w-auto rounded-lg"
              />
              <div>
                <p className="text-lg font-bold tracking-tight text-white">{SITE.name}</p>
                <p className="text-sm font-medium text-white/80">{SITE.tagline}</p>
                <p className="mt-1 text-xs text-white/45">Serving West Michigan since 2004</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                href={GOOGLE_REVIEW_URL}
                variant="outline"
              >
                Leave a Review
              </Button>
              <Button href="/contact" variant="primary">
                Get in Touch
              </Button>
            </div>
          </div>

          <hr className="my-10 border-white/10" />

          {/* Middle: 3-column grid */}
          <div className="grid gap-10 text-sm sm:grid-cols-3">
            {/* Quick Links */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/90">
                Quick Links
              </h3>
              <nav className="mt-4 flex flex-col gap-2.5">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/90">
                Contact
              </h3>
              <div className="mt-4 space-y-3">
                <a
                  className="flex items-center gap-2.5 text-white/60 hover:text-white transition-colors"
                  href={SITE.phoneHref}
                >
                  <svg className="h-4 w-4 shrink-0 text-white/40" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  {SITE.phone}
                </a>
                <a
                  className="flex items-center gap-2.5 text-white/60 hover:text-white transition-colors"
                  href={`mailto:${SITE.email}`}
                >
                  <svg className="h-4 w-4 shrink-0 text-white/40" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  {SITE.email}
                </a>
                <div className="flex items-start gap-2.5 text-white/60">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-white/40" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span>{SITE.serviceArea}</span>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/90">
                Business Hours
              </h3>
              <dl className="mt-4 space-y-2.5">
                {SITE.hours.map((h) => (
                  <div key={h.label} className="flex items-center justify-between gap-4">
                    <dt className="text-white/60">{h.label}</dt>
                    <dd className="text-white/40">{h.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <hr className="my-10 border-white/10" />

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <a
              href="http://www.hydroseeding.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3"
            >
              <Image
                src="/images/iahp-logo.jpg"
                alt="International Association of Hydroseeding Professionals"
                width={129}
                height={97}
                className="h-11 w-auto rounded-lg bg-white/90 p-1"
              />
              <span className="hidden text-xs leading-tight text-white/45 group-hover:text-white/75 transition-colors sm:block">
                IAHP Member
              </span>
            </a>
            <a
              href="https://www.bbb.org/us/mi/zeeland/profile/landscape-contractors/fraaza-enterprises-inc-0372-38114728"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3"
            >
              <Image
                src="/images/bbb-accredited.svg"
                alt="BBB Accredited Business — A+ Rating"
                width={200}
                height={76}
                className="h-11 w-auto rounded-lg"
              />
              <span className="hidden text-xs leading-tight text-white/45 group-hover:text-white/75 transition-colors sm:block">
                BBB A+ Rating
              </span>
            </a>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 flex flex-col items-center gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:justify-between">
            <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <Link className="hover:text-white/70 transition-colors" href="/privacy-policy">
                Privacy Policy
              </Link>
              <span className="text-white/20">|</span>
              <Link className="hover:text-white/70 transition-colors" href="/terms">
                Terms of Service
              </Link>
              <span className="text-white/20">|</span>
              <span>
                Website by{" "}
                <a
                  className="font-semibold text-white/60 hover:text-white transition-colors"
                  href="https://alignandacquire.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Align &amp; Acquire
                </a>
              </span>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
