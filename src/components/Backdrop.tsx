"use client";

import { useEffect, useRef } from "react";

/**
 * Fond du site : grain de papier, motif guilloché très léger et deux halos
 * (or, vert) qui suivent doucement la souris. Purement décoratif.
 */
export default function Backdrop() {
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
        el.style.setProperty("--px", `${x * 18}px`);
        el.style.setProperty("--py", `${y * 14}px`);
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="backdrop pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="glow glow-gold" />
      <div className="glow glow-green" />
      <div className="guilloche" />
      <div className="grain" />
    </div>
  );
}
