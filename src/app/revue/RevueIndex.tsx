"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, FileDown } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import type { NoteMeta } from "@/lib/revue";
import { useT } from "@/lib/i18n";
import { ui } from "@/i18n/ui";

export default function RevueIndex({ notes }: { notes: NoteMeta[] }) {
  const t = useT();
  const [q, setQ] = useState("");

  const norm = (s: string) => s.toLowerCase();
  const matches = (n: NoteMeta) => {
    const needle = norm(q.trim());
    if (!needle) return true;
    return [n.titre, n.sousTitre ?? "", n.resume, n.categorie, n.dateLabel].some((s) =>
      norm(s).includes(needle),
    );
  };

  const [latest, ...rest] = notes;
  const showLatest = latest ? matches(latest) : false;
  const archive = rest.filter(matches);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <SectionHeader
        eyebrow={t(ui.revue.eyebrow)}
        title={t(ui.revue.title)}
        aside={
          notes.length > 1 ? (
            <label className="relative block w-full sm:w-64">
              <Search
                size={14}
                strokeWidth={1.75}
                aria-hidden
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-dim"
              />
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t(ui.revue.search)}
                className="w-full rounded-full border rule bg-card py-2 pl-9 pr-4 font-mono text-xs tracking-wide text-text placeholder:text-dim focus:border-accent focus:outline-none"
              />
            </label>
          ) : null
        }
      />
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-dim">{t(ui.revue.intro)}</p>

      {latest && showLatest ? (
        <Link href={`/revue/${latest.slug}`} className="featured group block p-7 md:p-9" data-reveal>
          <span className="halo" />
          <div className="relative flex flex-wrap items-center gap-3">
            <p className="eyebrow">
              {t(ui.revue.latest)} — {latest.dateLabel}
            </p>
            <span className="chip chip-gold">{latest.categorie}</span>
          </div>
          <h3 className="relative mt-4 max-w-2xl font-display text-2xl italic leading-snug md:text-3xl">
            {latest.titre}
          </h3>
          {latest.sousTitre ? (
            <p className="relative mt-2 max-w-2xl font-display text-lg text-[var(--gold-soft)]">
              {latest.sousTitre}
            </p>
          ) : null}
          <p className="relative mt-4 max-w-2xl text-[var(--text-on-dark-dim)]">{latest.resume}</p>
          <div className="relative mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="link-arrow meta text-[var(--gold-soft)]">
              {t(ui.revue.read)} <span className="arrow">→</span>
            </span>
            <span className="label">
              {latest.minutes} {t(ui.revue.minutes)}
            </span>
            {latest.pdf ? (
              <span className="label inline-flex items-center gap-1.5">
                <FileDown size={12} strokeWidth={1.6} aria-hidden /> PDF
              </span>
            ) : null}
          </div>
        </Link>
      ) : null}

      {archive.length > 0 ? (
        <>
          <p className="eyebrow mt-12 mb-5">{t(ui.revue.archive)}</p>
          <div className="grid gap-4 md:grid-cols-2">
            {archive.map((n, i) => (
              <Link
                key={n.slug}
                href={`/revue/${n.slug}`}
                className="card group flex flex-col justify-between p-6"
                data-reveal
                style={{ "--reveal-delay": `${Math.min(i, 5) * 60}ms` } as React.CSSProperties}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <p className="label text-accent">{n.dateLabel}</p>
                    <span className="chip">{n.categorie}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl italic leading-snug transition-colors duration-200 group-hover:text-accent">
                    {n.titre}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-dim">{n.resume}</p>
                </div>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <span className="link-arrow meta text-dim group-hover:text-accent">
                    {t(ui.revue.read)} <span className="arrow">→</span>
                  </span>
                  <span className="label">
                    {n.minutes} {t(ui.revue.minutes)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : null}

      {!showLatest && archive.length === 0 ? (
        <p className="label py-10 text-center">{t(ui.revue.noResult)}</p>
      ) : null}
    </div>
  );
}
