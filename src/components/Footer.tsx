import Link from "next/link";
import { Container } from "@/components/Container";
import { SITE } from "@/lib/site";
import { Button } from "@/components/Button";

export function Footer() {
  const googleReviewUrl = process.env.GOOGLE_REVIEW_URL;

  return (
    <footer className="border-t border-white/10 bg-[var(--bg-1)]">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-base font-semibold tracking-tight text-white">
              {SITE.name}
            </div>
            <div className="mt-2 text-sm text-white/65">{SITE.tagline}</div>
            <div className="mt-4 text-sm text-white/65">
              <div className="font-semibold text-white/85">Service area</div>
              <div>{SITE.serviceArea}</div>
            </div>
          </div>

          <div className="text-sm text-white/65">
            <div className="font-semibold text-white/85">Contact</div>
            <div className="mt-3 space-y-2">
              <a className="block hover:text-white" href={SITE.phoneHref}>
                {SITE.phone}
              </a>
              <a className="block hover:text-white" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              <div className="pt-2">
                <div className="font-semibold text-white/85">Business hours</div>
                <div className="mt-1 space-y-1">
                  {SITE.hours.map((h) => (
                    <div key={h.label} className="flex items-center justify-between gap-6">
                      <span>{h.label}</span>
                      <span className="text-white/55">{h.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white/85">Explore</div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <Link className="text-white/65 hover:text-white" href="/services">
                Services
              </Link>
              <Link className="text-white/65 hover:text-white" href="/gallery">
                Gallery
              </Link>
              <Link className="text-white/65 hover:text-white" href="/about">
                About
              </Link>
              <Link className="text-white/65 hover:text-white" href="/contact">
                Contact
              </Link>
              <Link
                className="text-white/65 hover:text-white"
                href="/privacy-policy"
              >
                Privacy
              </Link>
              <Link className="text-white/65 hover:text-white" href="/terms">
                Terms
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {googleReviewUrl ? (
                <Button href={googleReviewUrl} variant="secondary">
                  Leave Us a Review
                </Button>
              ) : (
                <Button href="/contact" variant="secondary">
                  Leave Us a Review
                </Button>
              )}
              <Button href="/contact" variant="ghost">
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-x-2">
            <span>Website by</span>
            <a
              className="font-semibold text-white/75 hover:text-white"
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

