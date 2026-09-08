"use client";

import { useEffect, useRef } from "react";

/**
 * Motifs finance & économie « au crayon » en filigrane derrière tout le site,
 * avec un léger parallaxe au mouvement de la souris. Purement décoratif.
 */
export default function Sketches() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--px", `${x * -10}px`);
        el.style.setProperty("--py", `${y * -8}px`);
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const g = {
    fill: "none",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="sketches pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <svg width="0" height="0" className="absolute">
        <filter id="pencil" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="1.6" numOctaves="2" seed="5" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" />
        </filter>
      </svg>

      {/* Pièce lauréée — haut droite (or) */}
      <svg viewBox="0 0 220 220" className="sketch sketch-gold absolute -right-8 top-20 w-[200px] md:right-[5%] md:top-24 md:w-[240px]">
        <g {...g}>
          <circle cx="110" cy="110" r="88" />
          <circle cx="110" cy="110" r="72" strokeDasharray="1 4" />
          {/* Laurier gauche */}
          <path d="M 70 150 C 52 132, 48 106, 60 80" />
          {[0, 1, 2, 3, 4].map((i) => (
            <path key={`l${i}`} d={`M ${58 + i * 3} ${140 - i * 14} c -12 -2 -18 -8 -20 -16 c 8 -2 16 2 20 16 z`} />
          ))}
          {/* Laurier droit */}
          <path d="M 150 150 C 168 132, 172 106, 160 80" />
          {[0, 1, 2, 3, 4].map((i) => (
            <path key={`r${i}`} d={`M ${162 - i * 3} ${140 - i * 14} c 12 -2 18 -8 20 -16 c -8 -2 -16 2 -20 16 z`} />
          ))}
          <text x="110" y="122" textAnchor="middle" fontSize="34" fontFamily="var(--font-display)" fontStyle="italic" fill="currentColor" stroke="none">
            $
          </text>
        </g>
      </svg>

      {/* Balance — milieu gauche */}
      <svg viewBox="0 0 240 220" className="sketch absolute -left-6 top-[38%] w-[200px] md:left-[3%] md:w-[230px]">
        <g {...g}>
          <path d="M 120 30 V 170 M 80 180 H 160 M 96 190 H 144" />
          <circle cx="120" cy="24" r="6" />
          <path d="M 40 60 H 200" />
          <path d="M 40 60 L 26 114 M 40 60 L 54 114 M 20 114 Q 40 136 60 114" />
          <path d="M 200 60 L 186 114 M 200 60 L 214 114 M 180 114 Q 200 136 220 114" />
          <path d="M 44 64 L 40 60 M 196 64 L 200 60" strokeOpacity="0.5" />
        </g>
      </svg>

      {/* Colonnade de Bourse — bas droite */}
      <svg viewBox="0 0 320 200" className="sketch absolute -right-10 bottom-8 w-[280px] md:right-[4%] md:bottom-14 md:w-[340px]">
        <g {...g}>
          <path d="M 20 60 L 160 14 L 300 60 Z" />
          <path d="M 30 60 H 290 V 74 H 30 Z" />
          {[50, 100, 150, 200, 250].map((x) => (
            <g key={x}>
              <path d={`M ${x - 10} 74 H ${x + 10} M ${x - 8} 80 V 166 M ${x + 8} 80 V 166`} />
              <path d={`M ${x - 8} 96 V 160`} strokeOpacity="0.35" strokeDasharray="1 3" />
              <path d={`M ${x - 12} 166 H ${x + 12} M ${x - 14} 174 H ${x + 14}`} />
            </g>
          ))}
          <path d="M 16 182 H 304 M 10 190 H 310" />
          <path d="M 130 30 L 160 22 L 190 30" strokeOpacity="0.5" />
        </g>
      </svg>

      {/* Offre / demande — haut gauche */}
      <svg viewBox="0 0 260 220" className="sketch absolute -left-8 top-[8%] hidden w-[220px] md:block lg:left-[4%]">
        <g {...g}>
          <path d="M 30 20 V 190 H 240" />
          <path d="M 44 176 C 100 150, 150 100, 224 44" />
          <path d="M 44 44 C 100 100, 150 150, 224 176" />
          <circle cx="134" cy="110" r="4" />
          <path d="M 134 110 V 190 M 134 110 H 30" strokeDasharray="2 5" strokeOpacity="0.6" />
          <text x="228" y="40" fontSize="12" fontFamily="var(--font-mono)" fill="currentColor" stroke="none">S</text>
          <text x="228" y="188" fontSize="12" fontFamily="var(--font-mono)" fill="currentColor" stroke="none">D</text>
        </g>
      </svg>

      {/* Plume et signature — milieu droite */}
      <svg viewBox="0 0 260 160" className="sketch absolute right-[10%] top-[58%] hidden w-[220px] md:block">
        <g {...g}>
          <path d="M 190 20 C 150 26, 116 52, 100 96 L 92 118 L 114 110 C 156 92, 180 60, 190 20 Z" />
          <path d="M 100 96 L 134 62" strokeOpacity="0.6" />
          <path d="M 92 118 L 72 138" />
          <path d="M 20 146 C 40 120, 50 150, 70 128 S 100 150, 120 130 S 150 146, 180 132 C 200 124, 220 140, 244 130" strokeOpacity="0.7" />
        </g>
      </svg>

      {/* Sablier — bas gauche */}
      <svg viewBox="0 0 160 220" className="sketch absolute left-[6%] bottom-16 hidden w-[130px] lg:block">
        <g {...g}>
          <path d="M 30 20 H 130 M 30 200 H 130" strokeWidth="2" />
          <path d="M 40 26 C 40 80, 74 96, 80 110 C 86 124, 120 140, 120 194" />
          <path d="M 120 26 C 120 80, 86 96, 80 110 C 74 124, 40 140, 40 194" />
          <path d="M 52 40 C 60 60, 100 60, 108 40" strokeOpacity="0.5" />
          <path d="M 56 186 C 64 168, 96 168, 104 186 Z" strokeOpacity="0.6" />
          <path d="M 80 112 V 170" strokeDasharray="1 4" strokeOpacity="0.6" />
        </g>
      </svg>

      {/* Chandeliers — centre haut, discret */}
      <svg viewBox="0 0 320 140" className="sketch absolute left-1/2 top-[70%] hidden w-[300px] -translate-x-1/2 lg:block">
        <g {...g}>
          {[
            [30, 50, 110, 64, 96],
            [70, 40, 118, 58, 100],
            [110, 60, 124, 74, 110],
            [150, 24, 96, 36, 80],
            [190, 18, 88, 30, 66],
            [230, 36, 100, 50, 84],
            [270, 12, 74, 24, 58],
          ].map(([x, top, bottom, o, c]) => (
            <g key={x}>
              <line x1={x} y1={top} x2={x} y2={bottom} />
              <rect x={x - 8} y={Math.min(o, c)} width="16" height={Math.abs(c - o)} />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
