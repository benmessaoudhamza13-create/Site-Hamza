"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Fait apparaître en douceur les blocs marqués `data-reveal` quand ils
 * entrent dans la fenêtre. Ne rend rien ; sans JS, tout reste visible.
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    root.classList.add("js-reveal");

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => {
      // Déjà dans la fenêtre : on ne fait pas attendre.
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.9) el.classList.add("is-visible");
      else io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
