import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { revuesMacro } from "@/data/macro";

export const metadata = { title: "Revue macro — Hamza Ben Messaoud" };

export default function MacroPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeader
        eyebrow="Revue macro hebdomadaire"
        title="Ce qui a bougé, et pourquoi ça compte"
      />
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-dim">
        Une lecture courte des marchés, publiée chaque semaine : trois angles
        fixes — ce qui a bougé, pourquoi ça compte, ce que je surveille
        ensuite. L&rsquo;entrée ci-dessous est un modèle ; les prochaines
        publications suivront ce format.
      </p>
      <div className="divide-y rule border-t border-b rule">
        {revuesMacro.map((r) => (
          <Link
            key={r.slug}
            href={`/macro/${r.slug}`}
            className="group flex flex-col gap-2 rounded-[4px] px-4 py-6 -mx-4 transition-colors hover:bg-card md:flex-row md:items-baseline md:justify-between"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                {r.numero} — {r.date}
              </p>
              <h3 className="mt-1 font-display text-xl italic">{r.titre}</h3>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-dim group-hover:text-accent">
              Lire →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
