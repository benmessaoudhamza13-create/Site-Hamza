"use client";

import { useEffect, useRef } from "react";

/**
 * Croquis « au crayon » en filigrane derrière tout le site, avec un léger
 * parallaxe au mouvement de la souris. Purement décoratif.
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

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="sketches pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <svg width="0" height="0" className="absolute">
        <filter id="pencil" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="2" seed="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.4" />
        </filter>
      </svg>

      {/* Chandeliers — haut droite */}
      <svg
        viewBox="0 0 320 200"
        className="sketch absolute -right-6 top-24 w-[300px] md:right-[6%] md:top-28 md:w-[360px]"
      >
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          {[
            [30, 70, 130, 90, 115],
            [70, 60, 140, 85, 120],
            [110, 90, 150, 100, 135],
            [150, 40, 120, 55, 100],
            [190, 30, 110, 45, 85],
            [230, 55, 125, 70, 105],
            [270, 25, 95, 40, 75],
          ].map(([x, top, bottom, o, c]) => (
            <g key={x}>
              <line x1={x} y1={top} x2={x} y2={bottom} />
              <rect x={x - 9} y={Math.min(o, c)} width="18" height={Math.abs(c - o)} />
            </g>
          ))}
          <line x1="12" y1="170" x2="308" y2="170" strokeDasharray="2 5" />
        </g>
      </svg>

      {/* Courbe et axes — bas gauche */}
      <svg
        viewBox="0 0 360 240"
        className="sketch absolute -left-8 bottom-16 w-[280px] md:left-[4%] md:bottom-20 md:w-[380px]"
      >
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 30 20 L 30 210 L 340 210" />
          <path d="M 40 190 C 80 175, 100 185, 130 150 S 190 120, 220 105 S 270 60, 330 35" />
          <path d="M 40 200 C 90 195, 120 190, 160 180 S 230 165, 330 150" strokeDasharray="3 6" />
          {[70, 120, 170, 220, 270].map((x) => (
            <line key={x} x1={x} y1="206" x2={x} y2="214" />
          ))}
        </g>
      </svg>

      {/* Globe — milieu droite */}
      <svg
        viewBox="0 0 200 200"
        className="sketch absolute right-[8%] top-[52%] hidden w-[180px] md:block"
      >
        <g fill="none" strokeLinecap="round">
          <circle cx="100" cy="100" r="80" />
          <ellipse cx="100" cy="100" rx="34" ry="80" />
          <ellipse cx="100" cy="100" rx="80" ry="28" />
          <line x1="20" y1="100" x2="180" y2="100" />
          <path d="M 42 60 Q 100 44 158 60" />
          <path d="M 42 140 Q 100 156 158 140" />
        </g>
      </svg>

      {/* Skyline — bas centre, discret */}
      <svg
        viewBox="0 0 600 120"
        className="sketch absolute bottom-0 left-1/2 hidden w-[620px] -translate-x-1/2 md:block"
      >
        <g fill="none" strokeLinejoin="round">
          <path d="M 0 110 L 40 110 L 40 70 L 70 70 L 70 95 L 95 95 L 95 40 L 120 40 L 120 80 L 150 80 L 150 55 L 185 55 L 185 30 L 205 18 L 225 30 L 225 100 L 260 100 L 260 60 L 290 60 L 290 45 L 320 45 L 320 85 L 345 85 L 345 25 L 375 25 L 375 70 L 410 70 L 410 50 L 440 50 L 440 95 L 470 95 L 470 65 L 505 65 L 505 40 L 535 40 L 535 90 L 570 90 L 570 110 L 600 110" />
          <path d="M 345 25 L 345 8 L 351 4 L 357 8 L 357 25" />
        </g>
      </svg>
    </div>
  );
}
