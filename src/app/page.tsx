"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projets } from "@/data/projets";
import { revuesMacro } from "@/data/macro";
import { useT } from "@/lib/i18n";
import { ui } from "@/i18n/ui";
import Skyline from "@/components/Skyline";
import ProjectSketch from "@/components/ProjectSketch";

const highlights = projets.filter((p) => p.statut !== "En cours").slice(0, 6);
const [featured, ...others] = revuesMacro;

export default function Home() {
  const t = useT();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-16 md:pt-24">
          <span aria-hidden className="mb-7 block h-px w-14 bg-gold" />
          <h1 className="max-w-3xl font-display text-4xl italic leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
            {t(ui.hero.title)}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-dim md:text-xl">
            {t(ui.hero.lead)}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/projets" className="btn btn-primary">
              {t(ui.hero.ctaProjects)}
            </Link>
            <Link href="/macro" className="btn btn-secondary">
              {t(ui.hero.ctaMacro)}
            </Link>
            <span className="ml-1 hidden font-mono text-[11px] uppercase tracking-[0.25em] text-dim sm:inline">
              — {t(ui.hero.place)}
            </span>
          </div>
        </div>
        <div className="pointer-events-none relative mx-auto -mt-6 max-w-7xl md:-mt-16">
          <Skyline className="skyline w-full opacity-[0.55]" />
        </div>
      </section>

      {/* SÉLECTION DE PROJETS */}
      <section className="border-t rule bg-paper-2/70">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                {t(ui.home.selectionEyebrow)}
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
                {t(ui.home.selectionTitle)}
              </h2>
            </div>
            <Link
              href="/projets"
              className="link-arrow hidden font-mono text-xs uppercase tracking-widest text-dim transition-colors duration-200 ease hover:text-accent md:inline-flex"
            >
              {t(ui.home.seeAll)} <span className="arrow">→</span>
            </Link>
          </div>

          <div className="-mx-6 px-6 [mask-image:linear-gradient(to_right,transparent,black_24px,black_calc(100%-24px),transparent)]">
            <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto py-3">
              {highlights.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projets#${p.slug}`}
                  className="card group relative flex h-[300px] w-[280px] shrink-0 snap-start flex-col justify-between overflow-hidden p-6 sm:w-[300px]"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/[0.07] text-accent transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
                      <ProjectSketch icone={p.icone} className="h-8 w-8" />
                    </span>
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.75}
                      aria-hidden
                      className="text-dim opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent group-hover:opacity-100"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-xl leading-snug">
                      {t(p.titre)}
                    </h3>
                    <p className="mt-3 font-mono text-[11px] uppercase tracking-wide text-accent">
                      {t(p.resultat)}
                    </p>
                  </div>

                  {/* Aperçu au survol */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-full border-t rule bg-card/95 p-5 backdrop-blur-sm transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:translate-y-0 group-focus-visible:translate-y-0">
                    <p className="text-sm leading-relaxed text-dim">
                      {t(p.description)}
                    </p>
                    <span className="link-arrow mt-3 font-mono text-[11px] uppercase tracking-widest text-accent">
                      {t(ui.home.seeMore)} <span className="arrow">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/projets"
            className="link-arrow mt-4 font-mono text-xs uppercase tracking-widest text-dim transition-colors duration-200 ease hover:text-accent md:hidden"
          >
            {t(ui.home.seeAll)} <span className="arrow">→</span>
          </Link>
        </div>
      </section>

      {/* REVUE MACRO */}
      <section className="border-t rule bg-paper/70">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                {t(ui.home.macroEyebrow)}
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
                {t(ui.home.macroTitle)}
              </h2>
            </div>
            <Link
              href="/macro"
              className="link-arrow hidden font-mono text-xs uppercase tracking-widest text-dim transition-colors duration-200 ease hover:text-accent md:inline-flex"
            >
              {t(ui.home.allReviews)} <span className="arrow">→</span>
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-[1.4fr_1fr]">
            <Link
              href={`/macro/${featured.slug}`}
              className="featured group relative flex flex-col justify-between overflow-hidden rounded-[14px] p-7 transition-transform duration-200 hover:-translate-y-0.5 md:p-9"
            >
              <span className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/[0.06] transition-transform duration-500 group-hover:scale-125" />
              <div>
                <p className="eyebrow font-mono text-[11px] uppercase tracking-[0.25em]">
                  {t(ui.home.featured)} — {t(featured.date)}
                </p>
                <h3 className="mt-4 font-display text-2xl italic leading-snug md:text-3xl">
                  {t(featured.titre)}
                </h3>
                <p className="mt-4 max-w-xl text-white/80">{t(featured.resume)}</p>
              </div>
              <span className="link-arrow mt-8 font-mono text-xs uppercase tracking-widest">
                {t(ui.home.readReview)} <span className="arrow">→</span>
              </span>
            </Link>

            <div className="flex flex-col gap-4">
              {others.slice(0, 2).map((r) => (
                <Link
                  key={r.slug}
                  href={`/macro/${r.slug}`}
                  className="card group flex flex-1 flex-col justify-between p-6"
                >
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                      {t(r.date)}
                    </p>
                    <h3 className="mt-2 font-display text-lg italic leading-snug transition-colors duration-200 group-hover:text-accent">
                      {t(r.titre)}
                    </h3>
                  </div>
                  <span className="link-arrow mt-4 font-mono text-[11px] uppercase tracking-widest text-dim group-hover:text-accent">
                    {t(ui.home.readReview)} <span className="arrow">→</span>
                  </span>
                </Link>
              ))}
              {others.length === 0 ? (
                <div className="flex flex-1 items-center justify-center rounded-[14px] border border-dashed rule p-6 text-center font-mono text-[11px] uppercase tracking-widest text-dim">
                  {t(ui.home.moreSoon)}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
