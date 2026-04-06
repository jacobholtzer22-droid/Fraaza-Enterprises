import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 min-h-[44px]";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] shadow-sm hover:shadow-md",
  secondary:
    "bg-[var(--bg-green)] text-[var(--bg-cream)] hover:bg-[var(--green-light)] shadow-sm hover:shadow-md",
  ghost:
    "text-[var(--bg-green)] hover:bg-[var(--bg-green)]/5",
  outline:
    "border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white",
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
