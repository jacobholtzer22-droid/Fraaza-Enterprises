import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function ServiceCard({
  title,
  description,
  href,
  imageSrc,
  imageAlt,
  emoji,
  className,
}: {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  emoji?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]",
        className,
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 group-hover:from-black/80 group-hover:via-black/50 group-hover:to-black/30 transition-all duration-300" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
        {emoji && <span className="text-4xl mb-3 drop-shadow-lg">{emoji}</span>}
        <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white drop-shadow-md">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/80 max-w-[220px] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {description}
        </p>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent-light)] drop-shadow-md">
          Learn more
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
