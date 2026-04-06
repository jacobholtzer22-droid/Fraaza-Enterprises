import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function ServiceCard({
  title,
  description,
  href,
  imageSrc,
  imageAlt,
  className,
}: {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-sm)] transition-all duration-500 hover:shadow-[var(--shadow-lg)]",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-green)]/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-5 right-5">
          <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-white">
            {title}
          </h3>
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
        <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[var(--accent)] transition-all duration-300 group-hover:gap-2">
          Learn more
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
