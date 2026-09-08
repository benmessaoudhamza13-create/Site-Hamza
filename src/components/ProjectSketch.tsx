import type { Icone } from "@/data/projets";

/** Petit croquis au trait pour chaque projet. Hérite de currentColor. */
export default function ProjectSketch({
  icone,
  className = "h-10 w-10",
}: {
  icone: Icone;
  className?: string;
}) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (icone) {
    case "prediction":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden {...common}>
          <path d="M 6 36 C 14 36, 16 12, 24 12 S 34 36, 42 36" />
          <line x1="24" y1="12" x2="24" y2="40" strokeDasharray="2 3" />
          <path d="M 6 40 H 42" />
          <circle cx="24" cy="12" r="2.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "portfolio":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden {...common}>
          <circle cx="24" cy="24" r="16" />
          <path d="M 24 8 V 24 L 38 32" />
          <path d="M 24 24 L 10 30" />
          <circle cx="24" cy="24" r="2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "fx":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden {...common}>
          <path d="M 10 18 H 34 L 28 12" />
          <path d="M 38 30 H 14 L 20 36" />
          <text x="9" y="13" fontSize="9" fill="currentColor" stroke="none" fontFamily="var(--font-mono)">
            $
          </text>
          <text x="35" y="43" fontSize="9" fill="currentColor" stroke="none" fontFamily="var(--font-mono)">
            €
          </text>
        </svg>
      );
    case "oil":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden {...common}>
          <path d="M 24 6 C 24 6, 12 20, 12 28 A 12 12 0 0 0 36 28 C 36 20, 24 6, 24 6 Z" />
          <path d="M 18 30 A 6 6 0 0 0 24 36" />
          <path d="M 30 42 L 34 46 M 40 40 L 44 44" strokeWidth="1.2" />
        </svg>
      );
    case "dcf":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden {...common}>
          <rect x="8" y="26" width="7" height="14" />
          <rect x="20" y="18" width="7" height="22" />
          <rect x="32" y="10" width="7" height="30" />
          <path d="M 6 40 H 42" />
          <path d="M 10 20 C 18 16, 26 10, 38 6 L 34 6 M 38 6 V 10" />
        </svg>
      );
    case "esg":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden {...common}>
          <path d="M 10 38 C 10 20, 22 10, 40 10 C 40 28, 28 40, 10 38 Z" />
          <path d="M 10 38 C 18 30, 26 24, 34 16" />
        </svg>
      );
    case "retail":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden {...common}>
          <rect x="14" y="6" width="20" height="36" rx="3" />
          <path d="M 18 30 L 22 24 L 26 27 L 31 16" />
          <line x1="22" y1="38" x2="26" y2="38" />
        </svg>
      );
  }
}
