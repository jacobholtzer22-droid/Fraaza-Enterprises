"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { Container } from "@/components/Container";
import { SITE } from "@/lib/site";
import { Button } from "@/components/Button";

const hydroseedingDropdown = [
  { href: "/hydroseeding", label: "What is Hydroseeding", icon: "💧" },
  { href: "/erosion-control", label: "Erosion Control", icon: "\u{1F6E1}\u{FE0F}" },
  { href: "/faq", label: "FAQ", icon: "\u{2753}" },
  { href: "/care-and-watering", label: "Care & Watering", icon: "\u{1F4A7}" },
] as const;

const servicesDropdown = [
  { href: "/services/hydroseeding", label: "Hydroseeding", icon: "💧" },
  { href: "/services/landscaping", label: "Landscaping", icon: "🌿" },
  { href: "/services/snow-plowing", label: "Snow Plowing", icon: "\u{2744}\u{FE0F}" },
  { href: "/services/soil-preparation", label: "Soil Preparation", icon: "⛏️" },
] as const;

const nav = [
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

type DropdownId = "hydroseeding" | "services" | null;

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M3 4.5l3 3 3-3" />
    </svg>
  );
}

function DesktopDropdown({
  items,
  onClose,
  footerHref,
  footerLabel,
}: {
  items: ReadonlyArray<{ href: string; label: string; icon: string }>;
  onClose: () => void;
  footerHref?: string;
  footerLabel?: string;
}) {
  return (
    <div className="dropdown-enter absolute left-1/2 top-full z-50 mt-3 w-60 -translate-x-1/2 rounded-xl border border-[var(--border)] bg-[var(--bg-cream)] p-2 shadow-[var(--shadow-lg)]">
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-4 rotate-45 border-l border-t border-[var(--border)] bg-[var(--bg-cream)]" />
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition-all duration-150 hover:bg-[var(--bg-green)]/5 hover:text-[var(--bg-green)] hover:translate-x-0.5"
        >
          <span className="text-base">{item.icon}</span>
          {item.label}
        </Link>
      ))}
      {footerHref && footerLabel && (
        <>
          <div className="my-1.5 border-t border-[var(--border)]" />
          <Link
            href={footerHref}
            onClick={onClose}
            className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-[var(--accent)] transition-all duration-150 hover:bg-[var(--accent)]/5"
          >
            {footerLabel}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </>
      )}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownId>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileHydroseedingOpen, setMobileHydroseedingOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeAll = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeAll();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeAll]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (id: DropdownId) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "header-scrolled"
          : "border-[var(--border)] bg-[var(--bg-cream)]/90 backdrop-blur-md"
      }`}
    >
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

        <nav ref={navRef} className="hidden items-center gap-8 md:flex">
          {/* Hydroseeding dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("hydroseeding")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === "hydroseeding" ? null : "hydroseeding")}
              className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-[var(--accent)]"
            >
              Hydroseeding
              <ChevronDown open={activeDropdown === "hydroseeding"} />
            </button>
            {activeDropdown === "hydroseeding" && (
              <DesktopDropdown items={hydroseedingDropdown} onClose={closeAll} />
            )}
          </div>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
              className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-[var(--accent)]"
            >
              Services
              <ChevronDown open={activeDropdown === "services"} />
            </button>
            {activeDropdown === "services" && (
              <DesktopDropdown
                items={servicesDropdown}
                onClose={closeAll}
                footerHref="/services"
                footerLabel="View All Services"
              />
            )}
          </div>

          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-[var(--accent)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={SITE.phoneHref}
            className="hidden text-sm font-medium hover:text-[var(--accent)] lg:block"
          >
            {SITE.phone}
          </a>
          <Button href="/quote" className="hidden sm:inline-flex">
            Free Quote
          </Button>
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg hover:bg-white/10 md:hidden"
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

      {/* Mobile menu */}
      <div
        className={`md:hidden grid transition-[grid-template-rows] duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        aria-hidden={!open}
      >
        <div className="overflow-hidden">
          <div className="border-t border-[var(--border)] bg-[var(--bg-cream)]">
            <Container className="py-4 space-y-1">
              {/* Mobile Hydroseeding accordion */}
              <button
                onClick={() => setMobileHydroseedingOpen(!mobileHydroseedingOpen)}
                className="flex w-full items-center justify-between rounded-lg px-4 min-h-[44px] text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-green)]/5 hover:text-[var(--bg-green)]"
                tabIndex={open ? 0 : -1}
              >
                Hydroseeding
                <ChevronDown open={mobileHydroseedingOpen} />
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
                        className="flex items-center gap-2 rounded-lg px-4 min-h-[44px] text-sm text-[var(--text-secondary)] hover:bg-[var(--bg-green)]/5 hover:text-[var(--bg-green)]"
                        tabIndex={open && mobileHydroseedingOpen ? 0 : -1}
                      >
                        <span className="text-base">{item.icon}</span>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Services accordion */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex w-full items-center justify-between rounded-lg px-4 min-h-[44px] text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-green)]/5 hover:text-[var(--bg-green)]"
                tabIndex={open ? 0 : -1}
              >
                Services
                <ChevronDown open={mobileServicesOpen} />
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  mobileServicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="ml-4 space-y-1 border-l-2 border-[var(--accent)]/30 pl-3">
                    {servicesDropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2 rounded-lg px-4 min-h-[44px] text-sm text-[var(--text-secondary)] hover:bg-[var(--bg-green)]/5 hover:text-[var(--bg-green)]"
                        tabIndex={open && mobileServicesOpen ? 0 : -1}
                      >
                        <span className="text-base">{item.icon}</span>
                        {item.label}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2 rounded-lg px-4 min-h-[44px] text-sm font-semibold text-[var(--accent)] hover:bg-[var(--accent)]/5"
                      tabIndex={open && mobileServicesOpen ? 0 : -1}
                    >
                      View All Services &rarr;
                    </Link>
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
