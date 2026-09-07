import SectionHeader from "@/components/SectionHeader";
import { projets } from "@/data/projets";

export const metadata = { title: "Projets — Hamza Ben Messaoud" };

export default function ProjetsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeader
        eyebrow="Projets & compétitions"
        title="Ce que j'ai construit, en classe et en dehors"
      />
      <div className="divide-y rule border-t border-b rule">
        {projets.map((p) => (
          <details key={p.slug} id={p.slug} className="group scroll-mt-24 py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
              <div className="flex min-w-0 flex-col gap-1 md:flex-row md:items-baseline md:gap-4">
                <span className="shrink-0 font-mono text-[11px] uppercase tracking-widest text-accent">
                  {p.categorie}
                </span>
                <h3 className="truncate font-display text-lg leading-snug md:text-xl">
                  {p.titre}
                </h3>
              </div>
              <div className="flex shrink-0 items-center gap-4">
                <span className="hidden font-mono text-[11px] uppercase tracking-wide text-dim md:inline">
                  {p.resultat}
                </span>
                <span className="font-mono text-lg text-dim transition-transform group-open:rotate-45">
                  +
                </span>
              </div>
            </summary>
            <div className="mt-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-dim">
                {p.periode}
              </p>
              <p className="mt-2 font-mono text-xs uppercase tracking-wide text-accent md:hidden">
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
              {p.document ? (
                <a
                  href={p.document}
                  className="mt-5 inline-block font-mono text-xs uppercase tracking-widest text-accent hover:opacity-80"
                >
                  Voir le document →
                </a>
              ) : null}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
