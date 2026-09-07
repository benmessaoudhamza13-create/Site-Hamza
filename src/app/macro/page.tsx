import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { revuesMacro } from "@/data/macro";

export const metadata = { title: "Revue macro — Hamza Ben Messaoud" };

export default function MacroPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeader
        eyebrow="Mes revues macro"
        title="Ce qui a bougé, et pourquoi ça compte"
      />
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-dim">
        Une lecture courte des marchés : trois angles fixes — ce qui a bougé,
        pourquoi ça compte, ce que je surveille ensuite. L&rsquo;entrée
        ci-dessous est un modèle ; les prochaines publications suivront ce
        format.
      </p>
      <div className="flex flex-col gap-4">
        {revuesMacro.map((r) => (
          <Link
            key={r.slug}
            href={`/macro/${r.slug}`}
            className="card group flex flex-col gap-2 p-6 md:flex-row md:items-baseline md:justify-between"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                {r.date}
              </p>
              <h3 className="mt-1 font-display text-xl italic">{r.titre}</h3>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-dim transition-colors duration-200 ease group-hover:text-accent">
              Lire →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
