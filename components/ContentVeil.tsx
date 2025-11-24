import { cn } from "@/lib/utils";

type ContentVeilProps = {
  className?: string;
};

/**
 * ContentVeil - A dark overlay that sits behind cards to improve readability
 * over the animated DarkVeil background. Creates a contained darker region
 * where content lives while keeping the wavy background visible in gutters.
 */
export default function ContentVeil({ className }: ContentVeilProps) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div
        className={cn(
          "mx-auto h-full max-w-6xl rounded-[40px]",
          "bg-black/70 backdrop-blur-xl",
          "shadow-[0_0_120px_rgba(0,0,0,0.9)]",
          className
        )}
      />
    </div>
  );
}
