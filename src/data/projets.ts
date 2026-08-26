export type Projet = {
  slug: string;
  code: string;
  titre: string;
  periode: string;
  categorie: "Portefeuille" | "Valorisation" | "Quantitatif" | "Compétition";
  resultat: string;
  description: string;
  details: string[];
  tags: string[];
};

export const projets: Projet[] = [
  {
    slug: "defi-bnc",
    code: "P/01",
    titre: "Défi de gestion d'actifs BNC — allocation marchés émergents et gouvernance",
    periode: "Compétition inter-cohortes — Cohorte Financière BNC",
    categorie: "Portefeuille",
    resultat: "Alpha de 3 % sur la poche Actions Int'l / Alternatifs (résultat d'équipe)",
    description:
      "Gestion en équipe d'un portefeuille multi-actifs avec gouvernance de risque explicite. Responsable de l'allocation aux marchés émergents et de la gouvernance globale du projet.",
    details: [
      "Gestion de l'allocation aux marchés émergents (pondération pays / région) au sein d'une équipe de gestion multi-actifs",
      "Animation de réunions macro hebdomadaires (les lundis) : mise à jour de la thèse et ajustement des décisions d'allocation",
      "Gouvernance du projet : structure de prise de décision d'équipe",
      "Résultat d'équipe : alpha de 3 % généré via couverture Delta-Gamma sur la poche Alternatifs, suivi VaR et tracking error",
    ],
    tags: ["Allocation d'actifs", "Marchés émergents", "Gouvernance", "Macro discrétionnaire"],
  },
  {
    slug: "modele-factoriel-devises",
    code: "P/02",
    titre: "Modèle factoriel des devises par analyse en composantes principales",
    periode: "M.Sc. — Méthodes économétriques en finance, HEC Montréal",
    categorie: "Quantitatif",
    resultat: "3 facteurs expliquant 86,9 % de la variance des rendements (5 devises, 2004-2023)",
    description:
      "Construction d'un modèle factoriel de risque de change par ACP, cadré comme mandat pour une société de gestion exposée au risque de change.",
    details: [
      "Extraction de 3 composantes principales par décomposition spectrale : Facteur Dollar, Liquidité Monétaire USD / Global Financial Cycle, Facteur Émergent / Commodités",
      "Modèle de régression à 3 facteurs avec R² moyen de 79,97 %, validé contre le VIX, le taux 3 mois américain et le pétrole WTI",
      "Tests de robustesse : ARCH-LM, correction des écarts-types par la méthode HC3 de White",
    ],
    tags: ["ACP", "Facteurs macro", "Devises", "Économétrie"],
  },
  {
    slug: "cad-usd-determinants",
    code: "P/03",
    titre: "Déterminants macro-financiers du taux de change CAD/USD",
    periode: "M.Sc. — Introduction à l'économétrie, HEC Montréal (travail d'équipe de 4)",
    categorie: "Quantitatif",
    resultat: "R² ajusté de 0,639 sur 179 observations mensuelles (2010-2024)",
    description:
      "Identification empirique des déterminants macro-financiers du CAD/USD par régression multiple, avec emphase sur l'effet du prix du pétrole.",
    details: [
      "Modèle OLS multivarié (erreurs-types robustes HC1) : Dollar Index (+1 % USD → -0,79 % CAD, p<0,001), pétrole (+10 % pétrole → +0,23 % CAD, p=0,026), VIX significatif",
      "Batterie de diagnostics : Breusch-Pagan et White, Ramsey RESET, VIF (toutes < 4)",
      "Revue de littérature académique intégrée sur le statut de pétro-devise du Canada",
    ],
    tags: ["Macro", "Devises", "Pétro-devise", "OLS"],
  },
  {
    slug: "blackberry-dcf",
    code: "P/04",
    titre: "Stock pitch BlackBerry — analyse fondamentale",
    periode: "B.A.A.",
    categorie: "Valorisation",
    resultat: "Cours cible défendu devant comité d'experts sectoriels",
    description:
      "Note de recherche buy-side complète : modèle DCF avec analyse de sensibilité, comparables boursiers et diagnostic stratégique.",
    details: [
      "Modèle DCF multi-scénarios avec tests de sensibilité (WACC, croissance terminale)",
      "Comparables boursiers et diagnostic stratégique",
      "Défense du cours cible devant un comité d'experts",
    ],
    tags: ["DCF", "Comparables", "Equity research"],
  },
  {
    slug: "dollarama-esg",
    code: "P/05",
    titre: "Stock pitch ESG — Dollarama",
    periode: "B.A.A. — 2e place",
    categorie: "Valorisation",
    resultat: "2e place devant jury Club IRQ et Finance Montréal",
    description:
      "Thèse d'investissement intégrant des critères ESG, défendue devant un jury de professionnels de l'industrie.",
    details: [
      "Intégration de critères ESG dans la thèse d'investissement",
      "Défense devant jury du Club IRQ et de Finance Montréal",
      "2e place de la compétition",
    ],
    tags: ["ESG", "Equity research", "Pitch"],
  },
];
