"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Fait apparaître en douceur les blocs marqués `data-reveal` quand ils
 * entrent dans la fenêtre. L'état « révélé » est stocké dans un attribut
 * (`data-revealed`) que React ne réécrit jamais, donc un re-rendu du
 * composant ne fait pas disparaître le bloc.
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    root.classList.add("js-reveal");

    const show = (el: Element) => el.setAttribute("data-revealed", "");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            show(e.target);
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const attach = (el: Element) => {
      if (el.hasAttribute("data-revealed")) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.9) show(el);
      else io.observe(el);
    };
    document.querySelectorAll("[data-reveal]").forEach(attach);

    // Blocs ajoutés plus tard (filtres, ouverture d'un projet…)
    const mo = new MutationObserver((muts) => {
      for (const m of muts) {
        m.addedNodes.forEach((n) => {
          if (!(n instanceof Element)) return;
          if (n.hasAttribute("data-reveal")) attach(n);
          n.querySelectorAll?.("[data-reveal]").forEach(attach);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
