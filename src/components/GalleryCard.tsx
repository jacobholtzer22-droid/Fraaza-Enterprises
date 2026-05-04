import Image from "next/image";
import { cn } from "@/lib/cn";

export type GalleryItem = {
  src: string;
  alt: string;
  category?: string;
  title: string;
  description?: string;
};

export function GalleryCard({
  item,
  className,
}: {
  item: GalleryItem;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[var(--shadow-md)] transition-shadow duration-500 hover:shadow-[var(--shadow-xl)]",
        className,
      )}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        quality={90}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="lazy"
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 via-black/10 to-transparent transition-opacity duration-500 group-hover:from-black/40" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-5">
        {item.category && (
          <span className="inline-block w-fit rounded-full bg-[var(--bg-green)]/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            {item.category}
          </span>
        )}
        <h3 className="break-words text-sm font-semibold leading-snug text-white sm:text-base">
          {item.title}
        </h3>
      </div>
    </div>
  );
}
