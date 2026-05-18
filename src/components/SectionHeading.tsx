import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  light,
  centered,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  light?: boolean;
  centered?: boolean;
  as?: "h1" | "h2";
}) {
  const titleCls =
    Tag === "h1"
      ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight hyphens-none"
      : "text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight hyphens-none";

  return (
    <div className={cn("max-w-2xl min-w-0", centered && "mx-auto text-center", className)}>
      {eyebrow ? (
        <div
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.22em]",
            light
              ? "text-[var(--accent-light)] max-sm:[text-shadow:0_1px_8px_rgba(0,0,0,0.85)]"
              : "text-[var(--accent)]",
          )}
        >
          {eyebrow}
        </div>
      ) : null}
      <Tag
        className={cn(
          "mt-3 font-[family-name:var(--font-playfair)] font-semibold tracking-tight break-words [overflow-wrap:anywhere]",
          titleCls,
          light
            ? "text-[var(--text-light)] max-sm:[text-shadow:0_2px_18px_rgba(0,0,0,0.85),0_1px_3px_rgba(0,0,0,0.95)]"
            : "text-[var(--text-primary)]",
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-7 break-words text-pretty sm:text-[1.05rem] sm:leading-8",
            light
              ? "text-white/90 max-sm:text-white max-sm:[text-shadow:0_1px_12px_rgba(0,0,0,0.85),0_1px_2px_rgba(0,0,0,0.95)]"
              : "text-[var(--text-secondary)]",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
