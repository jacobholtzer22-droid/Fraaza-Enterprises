"use client";

import Link from "next/link";
import Image from "next/image";
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
        <Link href="/" className="group inline-flex items-center">
          <Image
            src="/images/fraaza-logo.png"
            alt={SITE.name}
            width={180}
            height={100}
            className="h-[44px] w-auto"
            priority
          />
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
