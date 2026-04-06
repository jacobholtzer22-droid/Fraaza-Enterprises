import Image from "next/image";
import { cn } from "@/lib/cn";

export type GalleryItem = {
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
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
        "group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-[var(--shadow-md)] transition-shadow duration-500 hover:shadow-[var(--shadow-xl)]",
        className,
      )}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-colors duration-500 group-hover:from-black/55 group-hover:via-black/5" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-5">
        <span className="inline-block w-fit rounded-full bg-[var(--bg-green)]/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
          {item.category}
        </span>
        <h3 className="text-base font-bold leading-snug text-white sm:text-lg">
          {item.title}
        </h3>
        <p className="text-sm leading-snug text-white/70">{item.description}</p>
      </div>
    </div>
  );
}
