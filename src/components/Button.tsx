import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-0";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--accent)] text-black hover:bg-[var(--accent-3)]",
  secondary:
    "border border-white/15 bg-white/5 text-white hover:bg-white/10",
  ghost: "text-white hover:bg-white/5",
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

