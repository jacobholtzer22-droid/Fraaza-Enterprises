import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

export function ServiceCard({
  title,
  description,
  href,
  image,
  featured,
  className,
}: {
  title: string;
  description: string;
  href: string;
  image: string;
  featured?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col justify-end overflow-hidden rounded-2xl transition-shadow duration-500",
        featured ? "min-h-[380px] sm:min-h-[420px]" : "min-h-[280px] sm:min-h-[320px]",
        "shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)]",
        className,
      )}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black/65 group-hover:via-black/25" />
      {featured && (
        <div className="absolute top-4 left-4 z-20 sm:top-6 sm:left-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            Our Specialty
          </span>
        </div>
      )}
      <div className="relative z-10 p-6 sm:p-8">
        <h3
          className={cn(
            "font-[family-name:var(--font-playfair)] font-bold text-white",
            featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl",
          )}
        >
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/80 max-w-sm">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent-light)] transition-all duration-300 group-hover:gap-3">
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
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
