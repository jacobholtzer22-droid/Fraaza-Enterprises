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

type Category = (typeof CATEGORIES)[number];

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<Category>("All Projects");

  const filtered =
    active === "All Projects"
      ? items
      : items.filter((item) => item.category === active);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
              active === cat
                ? "bg-[var(--bg-green)] text-white shadow-md"
                : "border border-[var(--border)] bg-white text-[var(--text-secondary)] hover:border-[var(--bg-green)]/30 hover:text-[var(--bg-green)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, idx) => (
          <FadeIn key={item.src} delay={((idx % 3) + 1) as 1 | 2 | 3}>
            <GalleryCard item={item} />
          </FadeIn>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-[var(--text-muted)]">
          No projects found in this category yet.
        </p>
      )}
    </>
  );
}
