import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 min-h-[44px] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--accent)] text-white shadow-md hover:bg-[var(--accent-hover)] hover:shadow-xl hover:shadow-[var(--accent)]/25 btn-shimmer overflow-hidden",
  secondary:
    "bg-[var(--bg-green)] text-[var(--bg-cream)] shadow-md hover:bg-[var(--green-light)] hover:shadow-xl hover:shadow-[var(--bg-green)]/25 btn-shimmer overflow-hidden",
  ghost:
    "text-[var(--bg-green)] hover:bg-[var(--bg-green)]/5",
  outline:
    "border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white hover:shadow-lg hover:shadow-[var(--accent)]/20",
};

export function Button({
  variant = "primary",
  className,
  href,
  children,
}: {
  variant?: ButtonVariant;
  className?: string;
  href: string;
  children: React.ReactNode;
}) {
  const cls = cn(base, variants[variant], className);
  const isExternal = href.startsWith("http");
  if (isExternal) {
    return (
      <a className={cls} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link className={cls} href={href}>
      {children}
    </Link>
  );
}
