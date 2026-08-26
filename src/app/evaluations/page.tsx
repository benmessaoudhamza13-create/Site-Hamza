import SectionHeader from "@/components/SectionHeader";

const evaluations = [
  {
    code: "E/01",
    entreprise: "BlackBerry Ltd.",
    methode: "DCF + comparables boursiers",
    statut: "Complétée",
    resume:
      "Modèle DCF multi-scénarios avec analyse de sensibilité (WACC, croissance terminale), comparables boursiers et diagnostic stratégique. Cours cible défendu devant un comité d'experts sectoriels.",
  },
  {
    code: "E/02",
    entreprise: "Dollarama inc.",
    methode: "Thèse d'investissement ESG",
    statut: "Complétée — 2e place",
    resume:
      "Thèse d'investissement intégrant des critères ESG, défendue devant jury du Club IRQ et de Finance Montréal.",
  },
  {
    code: "E/03",
    entreprise: "[Prochaine entreprise]",
    methode: "[DCF / comparables / LBO]",
    statut: "À venir",
    resume:
      "Espace réservé pour la prochaine évaluation — construite en dehors du cadre académique, sur un titre suivi dans la revue macro.",
  },
];

export const metadata = { title: "Évaluations — Hamza Ben Messaoud" };

export default function EvaluationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeader
        eyebrow="Évaluations d'entreprises"
        title="Modèles, hypothèses et thèses complètes"
      />
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-dim">
        Chaque évaluation ici inclut la méthode et les hypothèses, pas
        seulement la conclusion — l&rsquo;idée est de montrer le
        raisonnement, pas juste le chiffre final.
      </p>
      <div className="divide-y rule border-t border-b rule">
        {evaluations.map((e) => (
          <div key={e.code} className="grid gap-3 py-6 md:grid-cols-[1fr_2fr] md:gap-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                {e.code}
              </p>
              <h3 className="mt-1 font-display text-xl">{e.entreprise}</h3>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-accent">
                {e.statut}
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-dim">
                {e.methode}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-dim">
                {e.resume}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
