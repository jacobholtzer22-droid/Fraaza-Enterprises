import { cn } from "@/lib/cn";

type CurveDividerProps = {
  flip?: boolean;
  className?: string;
};

export function CurveDivider({ flip, className }: CurveDividerProps) {
  return (
    <div className={cn("relative h-16 sm:h-20", className)} aria-hidden="true">
      <svg
        className={cn("absolute inset-0 h-full w-full", flip && "rotate-180")}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64 C240,120 480,120 720,64 C960,8 1200,8 1440,64 L1440,120 L0,120 Z"
          fill="var(--bg-1)"
        />
      </svg>
    </div>
  );
}

