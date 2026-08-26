import SectionHeader from "@/components/SectionHeader";
import SPDashboard from "@/components/SPDashboard";

export const metadata = { title: "Outils — Hamza Ben Messaoud" };

export default function OutilsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeader
        code="04"
        eyebrow="Outils & instruments"
        title="Dashboards construits pour mon propre usage"
      />
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-[var(--text-on-ink-dim)]">
        Des instruments que je construis pour suivre les marchés au
        quotidien — pas des démos, des outils que j&rsquo;utilise vraiment.
        Le premier suit le S&amp;P 500 ; d&rsquo;autres suivront (courbe des
        taux, spreads de crédit, indicateurs macro canadiens).
      </p>
      <SPDashboard />
      <div className="mt-10 border rule-ink p-6">
        <p className="font-mono text-[11px] uppercase tracking-widest text-sage">
          Prochaine étape technique
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-on-ink-dim)]">
          Ce graphique affiche des données d&rsquo;exemple. Pour le rendre
          vraiment en direct, la prochaine étape est de créer une route API
          Next.js qui interroge une source gratuite (Alpha Vantage,
          Financial Modeling Prep, ou Stooq) et de rafraîchir les données
          côté client à intervalle régulier.
        </p>
      </div>
    </div>
  );
}
