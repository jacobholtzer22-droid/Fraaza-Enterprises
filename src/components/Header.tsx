"use client";

import Link from "next/link";
import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg-cream)]/90 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between">
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--bg-green)]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--bg-cream)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 20h10" />
              <path d="M10 20c5.5-2.5.8-6.4 3-10" />
              <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
              <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
            </svg>
          </span>
          <div className="leading-tight">
            <div className="font-[family-name:var(--font-playfair)] text-base font-semibold tracking-tight text-[var(--bg-green)]">
              {SITE.name}
            </div>
            <div className="text-[11px] tracking-wide text-[var(--text-muted)] uppercase">
              {SITE.motto}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--bg-green)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={SITE.phoneHref}
            className="hidden text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--bg-green)] lg:block"
          >
            {SITE.phone}
          </a>
          <Button href="/quote" className="hidden sm:inline-flex">
            Free Quote
          </Button>
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-green)]/5 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--bg-cream)] md:hidden">
          <Container className="py-4 space-y-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-green)]/5 hover:text-[var(--bg-green)]"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button href="/quote" className="w-full">
                Get a Free Quote
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
