import { ChevronDown } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { projets } from "@/data/projets";

export const metadata = { title: "Projets — Hamza Ben Messaoud" };

export default function ProjetsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
      <SectionHeader
        eyebrow="Projets & compétitions"
        title="Ce que j'ai construit, en classe et en dehors"
      />
      <div className="flex flex-col gap-4">
        {projets.map((p) => (
          <details
            key={p.slug}
            id={p.slug}
            className="card group scroll-mt-28 p-5 md:p-6"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-lg leading-snug transition-colors duration-200 ease group-hover:text-accent md:text-xl">
                    {p.titre}
                  </h3>
                  {p.statut === "En cours" ? (
                    <span className="rounded-full bg-accent px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-white">
                      En cours
                    </span>
                  ) : null}
                </div>
                <p className="mt-1.5 font-mono text-[11px] uppercase tracking-wide text-dim">
                  {p.resultat}
                </p>
              </div>
              <ChevronDown
                size={18}
                strokeWidth={1.75}
                aria-hidden
                className="mt-1 shrink-0 text-dim transition-transform duration-200 ease group-open:rotate-180 group-hover:text-accent"
              />
            </summary>
            <div className="details-body mt-5 border-t rule pt-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-dim">
                {p.periode}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-dim">
                {p.description}
              </p>
              <ul className="mt-4 space-y-2">
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
                    className="rounded-full border rule px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-dim"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.credits && p.credits.length > 0 ? (
                <p className="mt-4 text-xs italic text-dim">
                  Réalisé avec {p.credits.join(", ")}
                </p>
              ) : null}
              {p.document ? (
                <div className="mt-6">
                  <iframe
                    src={p.document}
                    title={`Document — ${p.titre}`}
                    loading="lazy"
                    className="h-[420px] w-full rounded-lg border rule bg-paper md:h-[520px]"
                  />
                  <a
                    href={p.document}
                    target="_blank"
                    rel="noreferrer"
                    className="link-arrow mt-3 font-mono text-xs uppercase tracking-widest text-accent transition-opacity duration-200 ease hover:opacity-80"
                  >
                    Ouvrir en plein écran / télécharger{" "}
                    <span className="arrow">→</span>
                  </a>
                </div>
              ) : null}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
