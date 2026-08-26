import SectionHeader from "@/components/SectionHeader";
import { projets } from "@/data/projets";

export const metadata = { title: "Projets — Hamza Ben Messaoud" };

export default function ProjetsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeader
        eyebrow="Projets & compétitions"
        title="Ce que j'ai construit, en classe et en dehors"
      />
      <div className="grid gap-8 md:grid-cols-2">
        {projets.map((p) => (
          <article
            key={p.slug}
            id={p.slug}
            className="scroll-mt-24 rounded-[4px] bg-card p-6 shadow-[0_1px_2px_rgba(32,36,31,0.06)]"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                {p.code} · {p.categorie}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-dim">
                {p.periode}
              </p>
            </div>
            <h3 className="mt-3 font-display text-2xl leading-snug">
              {p.titre}
            </h3>
            <p className="mt-2 font-mono text-xs uppercase tracking-wide text-accent">
              {p.resultat}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-dim">
              {p.description}
            </p>
            <ul className="mt-4 space-y-2 border-t rule pt-4">
              {p.details.map((d, i) => (
                <li key={i} className="flex gap-2 text-sm text-dim">
                  <span className="text-accent">—</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-[4px] border rule px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-dim"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
