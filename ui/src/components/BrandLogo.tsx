import { cn } from "@/lib/utils";

// Reusable Tera wordmark. Theme-aware by default: the dark logo shows on light
// surfaces and the light/cream logo shows on dark. Pass `inverse` to force the
// light logo on an always-dark surface (e.g. the auth brand panel). Pass `mark`
// to render the square logo mark instead of the full wordmark (e.g. the app
// sidebar header). Height is controlled by the caller via className (e.g.
// "h-7"); width stays auto so each lockup keeps its aspect ratio.
export function BrandLogo({
  className,
  inverse = false,
  mark = false,
}: {
  className?: string;
  inverse?: boolean;
  mark?: boolean;
}) {
  const markElement = (
    <span
      className="flex items-center justify-center bg-primary text-primary-foreground font-extrabold rounded-full w-8 h-8 shrink-0"
      aria-hidden="true"
    >
      T
    </span>
  );

  if (mark) {
    return (
      <div className={cn("inline-flex items-center", className)}>
        {markElement}
      </div>
    );
  }

  return (
    <div className={cn("inline-flex items-center gap-2 font-sans font-bold text-xl tracking-tight", inverse ? "text-white" : "text-foreground", className)}>
      {markElement}
      <span className="name">
        Tera<span className="text-primary">.</span>
      </span>
    </div>
  );
}
