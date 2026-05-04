"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { Container } from "@/components/Container";
import { SITE } from "@/lib/site";
import { Button } from "@/components/Button";
import {
  DropletIcon,
  ShieldIcon,
  HelpCircleIcon,
  SproutIcon,
  LeafIcon,
  SnowflakeIcon,
  LayersIcon,
} from "@/components/Icons";

const hydroseedingDropdown: { href: string; label: string; icon: ReactNode }[] = [
  { href: "/hydroseeding", label: "What is Hydroseeding", icon: <DropletIcon /> },
  { href: "/erosion-control", label: "Erosion Control", icon: <ShieldIcon /> },
  { href: "/faq", label: "FAQ", icon: <HelpCircleIcon /> },
  { href: "/care-and-watering", label: "Care & Watering", icon: <SproutIcon /> },
];

const servicesDropdown: { href: string; label: string; icon: ReactNode }[] = [
  { href: "/services/hydroseeding", label: "Hydroseeding", icon: <DropletIcon /> },
  { href: "/services/landscaping", label: "Landscaping", icon: <LeafIcon /> },
  { href: "/services/snow-plowing", label: "Snow Plowing", icon: <SnowflakeIcon /> },
  { href: "/services/soil-preparation", label: "Soil Preparation", icon: <LayersIcon /> },
];

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
  items: ReadonlyArray<{ href: string; label: string; icon: ReactNode }>;
  onClose: () => void;
  footerHref?: string;
  footerLabel?: string;
}) {
  return (
    <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
      <div className="dropdown-enter relative w-60 rounded-xl border border-[var(--border)] bg-[var(--bg-cream)] p-2 shadow-[var(--shadow-lg)]">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-4 rotate-45 border-l border-t border-[var(--border)] bg-[var(--bg-cream)]" />
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition-all duration-150 hover:bg-[var(--text-green)]/10 hover:text-[var(--text-green)] hover:translate-x-0.5"
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
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownId>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileHydroseedingOpen, setMobileHydroseedingOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
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
    if (!open) return;
    function handleDocMouseDown(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleDocMouseDown);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleDocMouseDown);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

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
    <>
      <header
        ref={headerRef}
        className="fixed inset-x-0 top-0 z-50 overflow-x-hidden border-b border-[var(--border)] bg-[var(--bg-cream)]/90 backdrop-blur-md transition-all duration-500"
      >
        <Container
          className="max-w-7xl flex h-24 min-w-0 items-center justify-between gap-2 transition-all duration-500 lg:h-[7.5rem]"
        >
        <Link
          href="/"
          className="group inline-flex max-w-[min(52vw,200px)] shrink-0 items-center gap-3 sm:max-w-none sm:gap-5 mr-1 sm:mr-3 lg:mr-5 transition-all duration-500"
        >
          <Image
            src="/images/fraaza-logo.webp"
            alt={SITE.name}
            width={320}
            height={174}
            className={`w-auto max-h-full rounded-lg object-contain object-left transition-all duration-500 ${
              scrolled ? "h-[36px] sm:h-[42px] lg:h-[50px]" : "h-[48px] sm:h-[52px] lg:h-[82px]"
            }`}
            priority
          />
          <div className="hidden xl:flex flex-col leading-tight">
            <span className="text-2xl font-bold tracking-tight transition-all duration-500">
              {SITE.name}
            </span>
            <span className="text-base text-[var(--text-muted)] transition-all duration-500">
              Serving West Michigan
            </span>
          </div>
        </Link>

        <nav ref={navRef} className="hidden min-w-0 flex-1 items-center justify-center gap-4 lg:flex xl:gap-6">
          <Link
            href="/"
            className="text-base font-medium transition-colors hover:text-[var(--accent)]"
          >
            Home
          </Link>

          {/* Hydroseeding dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("hydroseeding")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === "hydroseeding" ? null : "hydroseeding")}
              className="inline-flex items-center gap-1 text-base font-medium transition-colors hover:text-[var(--accent)]"
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
              className="inline-flex items-center gap-1 text-base font-medium transition-colors hover:text-[var(--accent)]"
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
              className="text-base font-medium transition-colors hover:text-[var(--accent)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-4 flex shrink-0 items-center gap-2">
          <Button
            href={SITE.phoneHref}
            variant="secondary"
            className="hidden whitespace-nowrap lg:inline-flex px-4 py-2 text-xs"
          >
            Call
          </Button>
          <Button href="/quote" className="hidden whitespace-nowrap xl:inline-flex">
            Free Quote
          </Button>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex h-11 min-h-[44px] w-11 min-w-[44px] shrink-0 items-center justify-center rounded-lg hover:bg-white/10 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
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
          className={`lg:hidden grid transition-[grid-template-rows] duration-300 ease-in-out ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
          aria-hidden={!open}
        >
          <div className="overflow-hidden">
            <div className="border-t border-[var(--border)] bg-[var(--bg-cream)]">
              <Container className="py-4 space-y-1">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center rounded-lg px-4 min-h-[44px] text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--text-green)]/10 hover:text-[var(--text-green)]"
                tabIndex={open ? 0 : -1}
              >
                Home
              </Link>

              {/* Mobile Hydroseeding accordion */}
              <button
                onClick={() => setMobileHydroseedingOpen(!mobileHydroseedingOpen)}
                className="flex w-full items-center justify-between rounded-lg px-4 min-h-[44px] text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--text-green)]/10 hover:text-[var(--text-green)]"
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
                        className="flex items-center gap-2 rounded-lg px-4 min-h-[44px] text-sm text-[var(--text-secondary)] hover:bg-[var(--text-green)]/10 hover:text-[var(--text-green)]"
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
                className="flex w-full items-center justify-between rounded-lg px-4 min-h-[44px] text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--text-green)]/10 hover:text-[var(--text-green)]"
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
                        className="flex items-center gap-2 rounded-lg px-4 min-h-[44px] text-sm text-[var(--text-secondary)] hover:bg-[var(--text-green)]/10 hover:text-[var(--text-green)]"
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
                  className="flex items-center rounded-lg px-4 min-h-[44px] text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--text-green)]/10 hover:text-[var(--text-green)]"
                  tabIndex={open ? 0 : -1}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <Button href={SITE.phoneHref} variant="secondary" className="w-full">
                  Call Now
                </Button>
              </div>
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
      <div
        aria-hidden="true"
        className="h-24 transition-all duration-500 lg:h-[7.5rem]"
      />
    </>
  );
}
