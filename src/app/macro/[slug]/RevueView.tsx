"use client";

import Link from "next/link";
import type { RevueMacro } from "@/data/macro";
import { useT } from "@/lib/i18n";
import { ui } from "@/i18n/ui";

export default function RevueView({ revue }: { revue: RevueMacro }) {
  const t = useT();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
      <Link
        href="/macro"
        className="link-arrow back meta text-dim transition-colors duration-200 hover:text-accent"
      >
        <span className="arrow">←</span> {t(ui.macro.back)}
      </Link>
      <p className="eyebrow mt-10">{t(revue.date)}</p>
      <h1 className="mt-3 font-display text-4xl italic leading-[1.1] tracking-tight md:text-5xl">
        {t(revue.titre)}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-dim">{t(revue.resume)}</p>
      <div className="mt-12 space-y-10 border-t rule pt-10">
        {revue.sections.map((s, i) => (
          <section key={i} data-reveal>
            <h2 className="eyebrow">{t(s.titre)}</h2>
            <ul className="mt-4 space-y-3">
              {t(s.contenu).map((c, j) => (
                <li key={j} className="flex gap-3 leading-relaxed">
                  <span className="mt-1 text-accent">—</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}
