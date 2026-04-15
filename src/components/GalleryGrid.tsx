"use client";

import { useState } from "react";
import { GalleryCard } from "@/components/GalleryCard";
import { FadeIn } from "@/components/FadeIn";
import type { GalleryItem } from "@/components/GalleryCard";

const CATEGORIES = [
  "All Projects",
  "Hydroseeding",
  "Golf Courses",
  "Landscaping",
  "Soil Prep",
  "Snow Plowing",
] as const;

type Tab = (typeof CATEGORIES)[number];

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<Tab>("All Projects");

  const visible =
    active === "All Projects"
      ? items
      : items.filter((item) => item.category === active);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {CATEGORIES.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
              active === tab
                ? "bg-[var(--bg-green)] text-white shadow-md"
                : "border border-[var(--border)] bg-white text-[var(--text-secondary)] hover:border-[var(--bg-green)]/30 hover:text-[var(--bg-green)]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid — all photos mixed together, each card shows its category badge */}
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item, idx) => (
          <FadeIn key={item.src} delay={((idx % 3) + 1) as 1 | 2 | 3}>
            <GalleryCard item={item} />
          </FadeIn>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-12 text-center text-[var(--text-muted)]">
          No projects found in this category yet.
        </p>
      )}
    </>
  );
}
