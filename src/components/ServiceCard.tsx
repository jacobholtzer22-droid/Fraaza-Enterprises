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
        "group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-colors hover:bg-white/[0.075]",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-base font-semibold tracking-tight text-white">
            {title}
          </h3>
          <span className="text-xs font-semibold text-[var(--accent-3)]">
            Learn more →
          </span>
        </div>
        <p className="mt-2 text-sm leading-6 text-white/65">{description}</p>
      </div>
    </Link>
  );
}

