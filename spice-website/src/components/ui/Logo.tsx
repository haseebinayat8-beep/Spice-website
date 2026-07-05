import { cn } from "@/lib/utils";

/**
 * Logo
 * Renders the Spice wordmark, recolored via CSS mask (no chip/background).
 * - variant="auto" (default): red in light mode, white in dark mode —
 *   driven by the --logo-auto-color CSS variable, which flips with the
 *   `.dark-mode` class on <html> (see globals.css). This avoids relying on
 *   Tailwind's arbitrary-variant selector parsing for correctness.
 * - variant="white": always white — for permanently-dark surfaces (footer).
 */
export default function Logo({
  className,
  variant = "auto",
}: {
  className?: string;
  variant?: "auto" | "white";
}) {
  return (
    <span
      role="img"
      aria-label="Spice"
      className={cn("inline-block transition-colors duration-300", className)}
      style={{
        backgroundColor: variant === "white" ? "#FFFFFF" : "var(--logo-auto-color)",
        WebkitMaskImage: "url(/brand/spice-logo-white.png)",
        maskImage: "url(/brand/spice-logo-white.png)",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}
