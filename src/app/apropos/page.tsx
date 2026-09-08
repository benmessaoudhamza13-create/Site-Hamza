"use client";

import { useState } from "react";
import { Award } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CvButton from "@/components/CvButton";
import { useT, type L } from "@/lib/i18n";
import { ui } from "@/i18n/ui";

type Etape = {
  titre: L;
  sousTitre: L;
  details?: L<string[]>;
  current?: boolean;
};

// Du plus ancien (haut) au plus récent (bas). Détails tirés du CV.
const timeline: Etape[] = [
  {
    titre: {
      fr: "B.A.A. — Spécialisations Finance & Économie appliquée",
      en: "B.B.A. — Finance & Applied Economics",
    },
    sousTitre: { fr: "HEC Montréal — 2025", en: "HEC Montréal — 2025" },
    details: {
      fr: [
        "Économétrie, diagnostic financier, gestion de portefeuille, options et contrats à terme",
        "Échange : Tecnológico de Monterrey (bourse de mobilité)",
      ],
      en: [
        "Econometrics, financial diagnosis, portfolio management, options and futures",
        "Exchange: Tecnológico de Monterrey (mobility scholarship)",
      ],
    },
  },
  {
    titre: {
      fr: "Stagiaire — Analyste d'affaires, Optimisation continue",
      en: "Intern — Business Analyst, Continuous Improvement",
    },
    sousTitre: {
      fr: "Banque Nationale du Canada — Été 2024 à mai 2025",
      en: "National Bank of Canada — Summer 2024 to May 2025",
    },
    details: {
      fr: [
        "Modélisation de la rentabilité d'un portefeuille de 30 000+ comptes (Excel VBA) ; tableaux de bord utilisés par la haute direction — gain d'efficacité de 15 %",
        "Recommandations stratégiques présentées à la direction — impact direct sur 500 succursales et 2 000 employés",
      ],
      en: [
        "Modelled the profitability of a 30,000+ account portfolio (Excel VBA); performance dashboards used by senior management — 15% efficiency gain",
        "Strategic recommendations presented to management — direct impact on 500 branches and 2,000 employees",
      ],
    },
  },
  {
    titre: {
      fr: "Programme de stage FBNGP — Gestion de patrimoine",
      en: "NBFWM Internship Program — Wealth Management",
    },
    sousTitre: {
      fr: "Banque Nationale du Canada — Été 2025 à mai 2026",
      en: "National Bank of Canada — Summer 2025 to May 2026",
    },
    details: {
      fr: [
        "Pilotage de la transition Axonify vers Propulsion Carrière à l'échelle du réseau FBNGP, touchant 850 conseillers en placement — réduction estimée de 10 % du temps de mise en poste",
      ],
      en: [
        "Led the Axonify-to-Propulsion Carrière transition across the NBFWM network, reaching 850 investment advisors — estimated 10% reduction in onboarding time",
      ],
    },
  },
  {
    titre: { fr: "M.Sc. Finance de marché", en: "M.Sc. Financial Markets" },
    sousTitre: {
      fr: "HEC Montréal — Fin prévue déc. 2027",
      en: "HEC Montréal — Expected Dec. 2027",
    },
    details: {
      fr: [
        "Cours complétés : Évaluation des produits dérivés, Méthodes économétriques en finance, Finance empirique",
        "En cours : Finance d'entreprise (FINA 60222 — F&A, évaluation avec effet de levier, structure de capital, gouvernance), Théorie des marchés des capitaux",
      ],
      en: [
        "Completed: Derivatives Valuation, Econometric Methods in Finance, Empirical Finance",
        "Ongoing: Corporate Finance (FINA 60222 — M&A, leveraged valuation, capital structure, governance), Capital Markets Theory",
      ],
    },
    current: true,
  },
  {
    titre: {
      fr: "Auxiliaire d'enseignement — Options et contrats à terme (FINA 20210)",
      en: "Teaching Assistant — Options and Futures (FINA 20210)",
    },
    sousTitre: { fr: "HEC Montréal — Automne 2026", en: "HEC Montréal — Fall 2026" },
    details: {
      fr: [
        "Accompagnement des étudiants et correction des devoirs et examens pour environ 300 étudiants répartis sur 6 sections, sous la supervision du Prof. Aboul-Enein",
      ],
      en: [
        "Student support and grading of assignments and exams for about 300 students across 6 sections, under the supervision of Prof. Aboul-Enein",
      ],
    },
  },
  {
    titre: {
      fr: "Analyste économique — Allocation d'actif",
      en: "Economic Analyst — Asset Allocation",
    },
    sousTitre: {
      fr: "Fonds BNI-HEC Montréal — Automne 2026 à aujourd'hui",
      en: "BNI-HEC Montréal Fund — Fall 2026 to present",
    },
    details: {
      fr: [
        "Rédaction de thèses d'investissement macro appuyant les décisions d'allocation stratégique (80 %) et tactique (20 %) d'un portefeuille multi-actifs (8 M$+ d'actifs sous gestion)",
      ],
      en: [
        "Writing macro investment theses supporting the strategic (80%) and tactical (20%) allocation decisions of a multi-asset portfolio ($8M+ AUM)",
      ],
    },
    current: true,
  },
];

const analyse: L<string[]> = {
  fr: ["DCF", "Multiples", "Analyse macro", "Gestion de portefeuille", "Analyse quantitative"],
  en: ["DCF", "Multiples", "Macro analysis", "Portfolio management", "Quantitative analysis"],
};
const outils = ["Python", "R", "Bloomberg Terminal", "Excel VBA"];
const certifications = ["Bloomberg Market Concepts (BMC)"];

const leadership: { titre: L; detail?: L }[] = [
  {
    titre: { fr: "Ambassadeur HEC (MaCarrière)", en: "HEC Ambassador (MaCarrière)" },
  },
  {
    titre: {
      fr: "Président de groupe, Chargé de visibilité — ASGC",
      en: "Group President, Visibility Lead — ASGC",
    },
  },
  {
    titre: { fr: "Campagne CHU Sainte-Justine", en: "CHU Sainte-Justine campaign" },
    detail: { fr: "38 000 $ amassés", en: "$38,000 raised" },
  },
];
const benevolat = ["Fondation Marie-Vincent", "Mission Bon Accueil", "Moisson Rive-Sud"];
const sport = ["Triathlon", "Hyrox", "Spartan Race"];

export default function AProposPage() {
  const t = useT();
  const [openStep, setOpenStep] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
      <SectionHeader eyebrow={t(ui.apropos.eyebrow)} title={t(ui.apropos.title)} />

      <p className="max-w-2xl text-base leading-relaxed text-dim">{t(ui.apropos.intro)}</p>

      <div className="mt-9">
        <CvButton />
      </div>

      {/* FRISE SERPENTINE */}
      <section className="mt-16 border-t rule pt-12">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-3" data-reveal>
          <p className="eyebrow">{t(ui.apropos.timelineEyebrow)}</p>
          <p className="label hidden md:block">{t(ui.apropos.timelineHint)}</p>
        </div>

        <ol className="relative">
          {timeline.map((step, i) => {
            const left = i % 2 === 0;
            const last = i === timeline.length - 1;
            const x0 = left ? 25 : 75;
            const x1 = left ? 75 : 25;
            const isOpen = openStep === i;
            return (
              <li
                key={i}
                data-reveal
                style={{ "--reveal-delay": `${Math.min(i, 5) * 50}ms` } as React.CSSProperties}
                className={`timeline-item relative grid gap-x-12 pb-12 md:grid-cols-2 ${
                  isOpen ? "is-open" : ""
                } ${last ? "pb-4" : ""}`}
              >
                {/* Connecteur — mobile : droit ; desktop : courbe en S */}
                {!last ? (
                  <>
                    <svg
                      className="pointer-events-none absolute inset-0 h-full w-full md:hidden"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      aria-hidden
                    >
                      <line x1="0" y1="0" x2="0" y2="100" stroke="var(--line)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    </svg>
                    <svg
                      className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      aria-hidden
                    >
                      <path
                        d={`M ${x0} 0 C ${x0} 55, ${x1} 45, ${x1} 100`}
                        fill="none"
                        stroke="var(--line)"
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  </>
                ) : null}

                {/* Nœud */}
                <span
                  aria-hidden
                  style={{ "--nx": `${x0}%` } as React.CSSProperties}
                  className={`timeline-node absolute left-0 top-0 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full ring-4 ring-paper md:left-[var(--nx)] ${
                    step.current ? "bg-gold" : "border-2 border-accent bg-card"
                  }`}
                />

                {/* Carte */}
                <div
                  className={`pl-7 pt-0 md:pl-0 ${left ? "md:col-start-1 md:pr-8" : "md:col-start-2 md:pl-8"}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenStep(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="card card-static block w-full p-5 text-left transition-[border-color,box-shadow] duration-200 hover:border-accent/30 md:-mt-3 md:p-6"
                  >
                    <span className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-lg leading-snug md:text-xl">
                        {t(step.titre)}
                      </h3>
                      {step.current ? (
                        <span className="chip chip-gold">{t(ui.apropos.current)}</span>
                      ) : null}
                    </span>
                    <span className="meta mt-1.5 block text-dim">{t(step.sousTitre)}</span>
                    {step.details ? (
                      <span className="timeline-detail">
                        <span className="block">
                          <ul className="mt-4 space-y-2 border-t rule pt-4">
                            {t(step.details).map((d, j) => (
                              <li key={j} className="flex gap-2 text-sm leading-relaxed text-dim">
                                <span className="text-accent">—</span>
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </span>
                      </span>
                    ) : null}
                  </button>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      {/* COMPÉTENCES */}
      <section className="mt-12 border-t rule pt-12" data-reveal>
        <p className="eyebrow">{t(ui.apropos.skillsEyebrow)}</p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-display text-lg">{t(ui.apropos.analysis)}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {t(analyse).map((s) => (
                <span key={s} className="chip chip-hover">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-lg">{t(ui.apropos.tools)}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {outils.map((s) => (
                <span key={s} className="chip chip-hover">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-lg">{t(ui.apropos.languages)}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {(["fr", "ar", "en", "es"] as const).map((code) => (
                <span
                  key={code}
                  tabIndex={0}
                  className="tip chip chip-hover cursor-default"
                >
                  {ui.langs[code].code} · {t(ui.langs[code].level)}
                  <span className="tip-bubble px-3 py-1.5 font-display text-base normal-case tracking-normal text-text">
                    {ui.langs[code].greeting}
                  </span>
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-lg">{t(ui.apropos.certifications)}</h3>
            <ul className="mt-3 space-y-2">
              {certifications.map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm">
                  <Award size={16} strokeWidth={1.75} aria-hidden className="text-accent" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT */}
      <section className="mt-12 border-t rule pt-12" data-reveal>
        <p className="eyebrow">{t(ui.apropos.engagementEyebrow)}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="card card-static p-6">
            <h3 className="font-display text-lg">{t(ui.apropos.leadership)}</h3>
            <ul className="mt-4 space-y-3">
              {leadership.map((item, i) => (
                <li key={i} className="group/l text-sm">
                  <span className="block transition-colors duration-200 group-hover/l:text-accent">
                    {t(item.titre)}
                  </span>
                  {item.detail ? <span className="label block">{t(item.detail)}</span> : null}
                </li>
              ))}
            </ul>
          </div>
          <div className="card card-static p-6">
            <h3 className="font-display text-lg">{t(ui.apropos.benevolat)}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {benevolat.map((b) => (
                <span key={b} className="chip chip-hover">
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div className="card card-static p-6">
            <h3 className="font-display text-lg">{t(ui.apropos.sport)}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {sport.map((s) => (
                <span key={s} className="chip chip-hover">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
