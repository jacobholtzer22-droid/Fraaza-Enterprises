import { cn } from "@/lib/cn";

export function BlobBackground({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="blob blob-1 left-[-120px] top-[-140px] h-[340px] w-[340px] sm:h-[420px] sm:w-[420px]" />
      <div className="blob blob-2 right-[-140px] top-[120px] h-[360px] w-[360px] sm:h-[460px] sm:w-[460px]" />
      <div className="blob blob-3 left-[35%] bottom-[-160px] h-[360px] w-[360px] sm:h-[520px] sm:w-[520px]" />
    </div>
  );
}

