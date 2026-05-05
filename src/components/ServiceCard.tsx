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
        featured ? "min-h-[300px] sm:min-h-[420px]" : "min-h-[240px] sm:min-h-[320px]",
        "shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)]",
        className,
      )}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover object-[center_30%] transition-transform duration-700 ease-out group-hover:scale-110 sm:object-center"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/55 group-hover:via-black/10" />
      {featured && (
        <div className="absolute top-4 left-4 z-20 sm:top-6 sm:left-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            Our Specialty
          </span>
        </div>
      )}
      <div className="relative z-10 p-4 sm:p-6 lg:p-8">
        <h3
          className={cn(
            "hyphens-auto break-words font-[family-name:var(--font-playfair)] font-bold leading-tight text-white",
            featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl",
          )}
        >
          {title}
        </h3>
        <p className="mt-2 max-w-sm text-base leading-relaxed text-white/80 sm:text-sm">
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
