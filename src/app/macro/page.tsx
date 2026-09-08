"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { revuesMacro } from "@/data/macro";
import { useT } from "@/lib/i18n";
import { ui } from "@/i18n/ui";

export default function MacroPage() {
  const t = useT();
  const [q, setQ] = useState("");
  const [latest, ...rest] = revuesMacro;

  const norm = (s: string) => s.toLowerCase();
  const matches = (r: (typeof revuesMacro)[number]) =>
    q.trim() === "" ||
    norm(t(r.titre)).includes(norm(q)) ||
    norm(t(r.resume)).includes(norm(q)) ||
    norm(t(r.date)).includes(norm(q));

  const archive = rest.filter(matches);
  const showLatest = matches(latest);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <SectionHeader
        eyebrow={t(ui.macro.eyebrow)}
        title={t(ui.macro.title)}
        aside={
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
              placeholder={t(ui.macro.search)}
              className="w-full rounded-full border rule bg-card py-2 pl-9 pr-4 font-mono text-xs tracking-wide text-text placeholder:text-dim focus:border-accent focus:outline-none"
            />
          </label>
        }
      />
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-dim">
        {t(ui.macro.intro)}
      </p>

      {showLatest ? (
        <Link
          href={`/macro/${latest.slug}`}
          className="featured group relative block overflow-hidden rounded-[14px] p-7 transition-transform duration-200 hover:-translate-y-0.5 md:p-9"
        >
          <span className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/[0.06] transition-transform duration-500 group-hover:scale-125" />
          <p className="eyebrow font-mono text-[11px] uppercase tracking-[0.25em]">
            {t(ui.macro.latest)} — {t(latest.date)}
          </p>
          <h3 className="mt-4 max-w-2xl font-display text-2xl italic leading-snug md:text-3xl">
            {t(latest.titre)}
          </h3>
          <p className="mt-4 max-w-2xl text-white/80">{t(latest.resume)}</p>
          <span className="link-arrow mt-8 inline-flex font-mono text-xs uppercase tracking-widest">
            {t(ui.macro.read)} <span className="arrow">→</span>
          </span>
        </Link>
      ) : null}

      {archive.length > 0 ? (
        <>
          <p className="mt-12 mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
            {t(ui.macro.archive)}
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {archive.map((r) => (
              <Link
                key={r.slug}
                href={`/macro/${r.slug}`}
                className="card group flex flex-col justify-between p-6"
              >
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                    {t(r.date)}
                  </p>
                  <h3 className="mt-2 font-display text-xl italic leading-snug transition-colors duration-200 group-hover:text-accent">
                    {t(r.titre)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-dim">{t(r.resume)}</p>
                </div>
                <span className="link-arrow mt-5 font-mono text-[11px] uppercase tracking-widest text-dim group-hover:text-accent">
                  {t(ui.macro.read)} <span className="arrow">→</span>
                </span>
              </Link>
            ))}
          </div>
        </>
      ) : null}

      {!showLatest && archive.length === 0 ? (
        <p className="py-10 text-center font-mono text-xs uppercase tracking-widest text-dim">
          {t(ui.macro.noResult)}
        </p>
      ) : null}
    </div>
  );
}
