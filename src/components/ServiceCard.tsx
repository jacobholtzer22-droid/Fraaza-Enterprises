import Link from "next/link";
import { cn } from "@/lib/cn";

export function ServiceCard({
  title,
  description,
  href,
  emoji,
  className,
}: {
  title: string;
  description: string;
  href: string;
  emoji?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-[var(--shadow-md)] transition-all duration-300 hover:shadow-[var(--shadow-lg)] hover:-translate-y-1",
        className,
      )}
    >
      {emoji && <span className="text-4xl">{emoji}</span>}
      <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-xl font-bold text-[var(--text-primary)]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
        {description}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] transition-colors group-hover:text-[var(--accent-hover)]">
        Learn more
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
