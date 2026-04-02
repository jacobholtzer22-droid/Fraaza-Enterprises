import Link from "next/link";
import { Container } from "@/components/Container";
import { SITE } from "@/lib/site";
import { Button } from "@/components/Button";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight text-white">
              {SITE.name}
            </div>
            <div className="text-xs text-white/60">{SITE.motto}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/75 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SITE.phoneHref}
            className="hidden text-sm font-semibold text-white/75 hover:text-white sm:block"
          >
            {SITE.phone}
          </a>
          <Button href="/quote" className="hidden sm:inline-flex">
            Get a Free Quote
          </Button>
          <Button href="/contact" className="sm:hidden">
            Quote
          </Button>
        </div>
      </Container>
    </header>
  );
}

