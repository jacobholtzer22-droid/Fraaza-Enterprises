import Link from "next/link";
import { Container } from "@/components/Container";
import { SITE } from "@/lib/site";
import { Button } from "@/components/Button";

export function Footer() {
  const googleReviewUrl = process.env.GOOGLE_REVIEW_URL;

  return (
    <footer className="bg-[var(--bg-green)] text-[var(--bg-cream)]">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-white">
              {SITE.name}
            </div>
            <div className="mt-2 text-sm text-white/60">{SITE.tagline}</div>
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
  );
}
