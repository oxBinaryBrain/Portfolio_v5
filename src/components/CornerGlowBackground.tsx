import { cls } from "@/lib/utils";

interface CornerGlowBackgroundProps {
  position?: "fixed" | "absolute";
}

export function CornerGlowBackground({
  position = "fixed",
}: CornerGlowBackgroundProps) {
  return (
    <div
      className={cls(
        position,
        "pointer-events-none inset-0 -z-10 overflow-hidden select-none",
        position === "absolute" &&
          "mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]",
      )}
      aria-hidden="true"
    >
      <div className="absolute top-0 right-0 aspect-square w-9/10 translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 [background:radial-gradient(circle_at_center,var(--color-background-accent)_35%,transparent_70%)] md:w-6/10" />
      <div className="absolute bottom-0 left-0 aspect-square w-9/10 -translate-x-1/2 translate-y-1/2 rounded-full opacity-20 [background:radial-gradient(circle_at_center,var(--color-background-accent)_35%,transparent_70%)] md:w-6/10" />
    </div>
  );
}