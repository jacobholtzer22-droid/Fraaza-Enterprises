"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

export function FadeIn({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "fade-in-up",
        delay === 1 && "fade-in-up-delay-1",
        delay === 2 && "fade-in-up-delay-2",
        delay === 3 && "fade-in-up-delay-3",
        delay === 4 && "fade-in-up-delay-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
