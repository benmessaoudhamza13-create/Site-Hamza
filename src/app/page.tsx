import Link from "next/link";
import { projets } from "@/data/projets";
import { revuesMacro } from "@/data/macro";

const highlights = projets.slice(0, 3);
const derniereRevue = revuesMacro[0];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
              H.BM — Montréal, QC
            </p>
            <h1 className="mt-5 max-w-xl font-display text-4xl italic leading-tight tracking-tight md:text-6xl">
              Comprendre pourquoi un actif est mal évalué.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-dim">
              Candidat à la maîtrise en finance de marché à HEC Montréal, avec
              une double formation en finance et économie. Ce site rassemble
              mes projets, mes lectures de marché hebdomadaires et les outils
              que je construis en marge de mes études — la trace continue
              d&rsquo;un travail d&rsquo;analyse, pas juste un CV figé.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/projets"
                className="rounded-[4px] bg-accent px-5 py-3 font-mono text-xs uppercase tracking-widest text-white transition-opacity hover:opacity-90"
              >
                Voir les projets
              </Link>
              <Link
                href="/macro"
                className="rounded-[4px] border border-text px-5 py-3 font-mono text-xs uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
              >
                Revue macro
              </Link>
            </div>
          </div>
          <div className="flex aspect-[3/4] w-full items-center justify-center rounded-[4px] bg-gradient-to-br from-[#ece5d2] to-[#d3ddd0]">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-dim">
              Photo / portrait
            </span>
          </div>
        </div>
      </section>

      {/* PROJETS — aperçu */}
      <section className="border-t rule">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                02 — Projets
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight">
                Sélection de projets
              </h2>
            </div>
            <Link
              href="/projets"
              className="hidden font-mono text-xs uppercase tracking-widest text-dim hover:text-accent md:block"
            >
              Tout voir →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((p) => (
              <Link
                key={p.slug}
                href={`/projets#${p.slug}`}
                className="group flex flex-col justify-between gap-6 rounded-[4px] bg-card p-6 shadow-[0_1px_2px_rgba(32,36,31,0.06)] transition-shadow hover:shadow-[0_4px_16px_rgba(32,36,31,0.1)]"
              >
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                    {p.code} · {p.categorie}
                  </p>
                  <h3 className="mt-3 font-display text-xl leading-snug">
                    {p.titre}
                  </h3>
                </div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-accent">
                  {p.resultat}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MACRO — dernière revue */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
          03 — Revue macro
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-tight">
          Lecture de marché, chaque semaine
        </h2>
        <div className="mt-8 border-t rule pt-8">
          <p className="font-mono text-[11px] uppercase tracking-widest text-dim">
            {derniereRevue.numero} — {derniereRevue.date}
          </p>
          <h3 className="mt-2 font-display text-2xl italic">
            {derniereRevue.titre}
          </h3>
          <p className="mt-3 max-w-2xl text-dim">{derniereRevue.resume}</p>
          <Link
            href="/macro"
            className="mt-5 inline-block font-mono text-xs uppercase tracking-widest text-accent hover:opacity-80"
          >
            Lire la revue →
          </Link>
        </div>
      </section>

      {/* OUTILS + EVALUATIONS teaser */}
      <section className="border-t rule">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/outils"
              className="group rounded-[4px] bg-card p-8 shadow-[0_1px_2px_rgba(32,36,31,0.06)] transition-shadow hover:shadow-[0_4px_16px_rgba(32,36,31,0.1)]"
            >
              <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                04 — Outils
              </p>
              <h3 className="mt-3 font-display text-2xl">
                Dashboards &amp; instruments de marché
              </h3>
              <p className="mt-3 text-sm text-dim">
                Suivi du S&amp;P 500 et autres instruments construits pour mon
                propre usage, en direct.
              </p>
            </Link>
            <Link
              href="/evaluations"
              className="group rounded-[4px] bg-card p-8 shadow-[0_1px_2px_rgba(32,36,31,0.06)] transition-shadow hover:shadow-[0_4px_16px_rgba(32,36,31,0.1)]"
            >
              <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                05 — Évaluations
              </p>
              <h3 className="mt-3 font-display text-2xl">
                Évaluations d&rsquo;entreprises
              </h3>
              <p className="mt-3 text-sm text-dim">
                Modèles DCF et thèses d&rsquo;investissement complets, méthode
                et hypothèses incluses.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
