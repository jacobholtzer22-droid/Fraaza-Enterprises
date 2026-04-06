import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  light,
  centered,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  light?: boolean;
  centered?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center", className)}>
      {eyebrow ? (
        <div
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.22em]",
            light ? "text-[var(--accent-light)]" : "text-[var(--accent)]",
          )}
        >
          {eyebrow}
        </div>
      ) : null}
      <h2
        className={cn(
          "mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold tracking-tight sm:text-4xl",
          light ? "text-[var(--bg-cream)]" : "text-[var(--bg-green)]",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-7",
            light ? "text-white/70" : "text-[var(--text-secondary)]",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
