"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Container } from "@/components/Container";
import { SITE } from "@/lib/site";
import { Button } from "@/components/Button";

const hydroseedingDropdown = [
  { href: "/hydroseeding", label: "What is Hydroseeding" },
  { href: "/erosion-control", label: "Erosion Control" },
  { href: "/faq", label: "FAQ" },
  { href: "/care-and-watering", label: "Care & Watering" },
] as const;

const nav = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileHydroseedingOpen, setMobileHydroseedingOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg-cream)]/90 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between">
        <Link href="/" className="group inline-flex items-center">
          <Image
            src="/images/fraaza-logo.webp"
            alt={SITE.name}
            width={180}
            height={100}
            className="h-[44px] w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {/* Hydroseeding dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="inline-flex items-center gap-1 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--bg-green)]"
            >
              Hydroseeding
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              >
                <path d="M3 4.5l3 3 3-3" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute left-1/2 top-full z-50 mt-3 w-56 -translate-x-1/2 rounded-xl border border-[var(--border)] bg-[var(--bg-cream)] p-2 shadow-[var(--shadow-md)]">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-4 rotate-45 border-l border-t border-[var(--border)] bg-[var(--bg-cream)]" />
                {hydroseedingDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setDropdownOpen(false)}
                    className="relative block rounded-lg px-4 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-green)]/5 hover:text-[var(--bg-green)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

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
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-green)]/5 md:hidden"
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

      <div
        className={`md:hidden grid transition-[grid-template-rows] duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        aria-hidden={!open}
      >
        <div className="overflow-hidden">
          <div className="border-t border-[var(--border)] bg-[var(--bg-cream)]">
            <Container className="py-4 space-y-1">
              <button
                onClick={() => setMobileHydroseedingOpen(!mobileHydroseedingOpen)}
                className="flex w-full items-center justify-between rounded-lg px-4 min-h-[44px] text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-green)]/5 hover:text-[var(--bg-green)]"
                tabIndex={open ? 0 : -1}
              >
                Hydroseeding
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`transition-transform duration-200 ${mobileHydroseedingOpen ? "rotate-180" : ""}`}
                >
                  <path d="M3 4.5l3 3 3-3" />
                </svg>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  mobileHydroseedingOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="ml-4 space-y-1 border-l-2 border-[var(--accent)]/30 pl-3">
                    {hydroseedingDropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center rounded-lg px-4 min-h-[44px] text-sm text-[var(--text-secondary)] hover:bg-[var(--bg-green)]/5 hover:text-[var(--bg-green)]"
                        tabIndex={open && mobileHydroseedingOpen ? 0 : -1}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center rounded-lg px-4 min-h-[44px] text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-green)]/5 hover:text-[var(--bg-green)]"
                  tabIndex={open ? 0 : -1}
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
        </div>
      </div>
    </header>
  );
}
