import type { L } from "@/lib/i18n";

export type Categorie = "Portefeuille" | "Valorisation" | "Quantitatif" | "Compétition";
export type Icone = "prediction" | "portfolio" | "fx" | "oil" | "dcf" | "esg" | "retail";

export type Projet = {
  slug: string;
  code: string;
  icone: Icone;
  titre: L;
  periode: L;
  categorie: Categorie;
  resultat: L;
  description: L;
  details: L<string[]>;
  tags: L<string[]>;
  document?: string;
  credits?: L<string[]>;
  statut?: "Complété" | "En cours";
};

export const projets: Projet[] = [
  {
    slug: "marches-predictifs-macro",
    code: "P/00",
    icone: "prediction",
    titre: {
      fr: "Marchés prédictifs comme outil de couverture macro",
      en: "Prediction markets as a macro hedging tool",
    },
    periode: {
      fr: "Projet supervisé — HEC Montréal, avec le Prof. Anthony Sanford",
      en: "Supervised project — HEC Montréal, with Prof. Anthony Sanford",
    },
    categorie: "Quantitatif",
    statut: "En cours",
    resultat: { fr: "En développement", en: "In development" },
    description: {
      fr: "Exploration des marchés prédictifs (type Polymarket) comme signal ou outil de couverture macro sur les actifs tangibles : or, pétrole, taux.",
      en: "Exploring prediction markets (Polymarket-style) as a macro signal or hedging tool for tangible assets: gold, oil, rates.",
    },
    details: {
      fr: [
        "Revue de la littérature sur les marchés prédictifs comme source d'information macro",
        "Analyse de la stabilité et de la profondeur de marché de ces instruments comme limite potentielle à leur usage direct en couverture",
      ],
      en: [
        "Literature review on prediction markets as a source of macro information",
        "Analysis of the stability and market depth of these instruments as a potential limit to their direct use in hedging",
      ],
    },
    tags: {
      fr: ["Marchés prédictifs", "Macro", "Actifs tangibles"],
      en: ["Prediction markets", "Macro", "Tangible assets"],
    },
  },
  {
    slug: "defi-bnc",
    code: "P/01",
    icone: "portfolio",
    titre: {
      fr: "Défi de gestion d'actifs BNC — allocation marchés émergents et gouvernance",
      en: "NBC Asset Management Challenge — emerging markets allocation and governance",
    },
    periode: {
      fr: "Compétition inter-cohortes — Cohorte Financière BNC",
      en: "Inter-cohort competition — NBC Finance Cohort",
    },
    categorie: "Portefeuille",
    resultat: {
      fr: "Alpha de 3 % sur la poche Actions Int'l / Alternatifs (résultat d'équipe)",
      en: "3% alpha on the Int'l Equities / Alternatives sleeve (team result)",
    },
    description: {
      fr: "Gestion en équipe d'un portefeuille multi-actifs avec gouvernance de risque explicite. Responsable de l'allocation aux marchés émergents et de la gouvernance globale du projet.",
      en: "Team management of a multi-asset portfolio with explicit risk governance. Responsible for the emerging markets allocation and the overall governance of the project.",
    },
    details: {
      fr: [
        "Gestion de l'allocation aux marchés émergents (pondération pays / région) au sein d'une équipe de gestion multi-actifs",
        "Animation de réunions macro hebdomadaires (les lundis) : mise à jour de la thèse et ajustement des décisions d'allocation",
        "Gouvernance du projet : structure de prise de décision d'équipe",
        "Résultat d'équipe : alpha de 3 % généré via couverture Delta-Gamma sur la poche Alternatifs, suivi VaR et tracking error",
      ],
      en: [
        "Managed the emerging markets allocation (country / region weights) within a multi-asset management team",
        "Led weekly macro meetings (Mondays): thesis updates and allocation adjustments",
        "Project governance: team decision-making structure",
        "Team result: 3% alpha generated through Delta-Gamma hedging on the Alternatives sleeve, with VaR and tracking error monitoring",
      ],
    },
    tags: {
      fr: ["Allocation d'actifs", "Marchés émergents", "Gouvernance", "Macro discrétionnaire"],
      en: ["Asset allocation", "Emerging markets", "Governance", "Discretionary macro"],
    },
    credits: {
      fr: ["la cohorte de stagiaires 2025 FBNGP"],
      en: ["the 2025 NBFWM intern cohort"],
    },
  },
  {
    slug: "modele-factoriel-devises",
    code: "P/02",
    icone: "fx",
    titre: {
      fr: "Modèle factoriel des devises par analyse en composantes principales",
      en: "Currency factor model via principal component analysis",
    },
    periode: {
      fr: "M.Sc. — Méthodes économétriques en finance, HEC Montréal",
      en: "M.Sc. — Econometric Methods in Finance, HEC Montréal",
    },
    categorie: "Quantitatif",
    resultat: {
      fr: "3 facteurs expliquant 86,9 % de la variance des rendements (5 devises, 2004-2023)",
      en: "3 factors explaining 86.9% of return variance (5 currencies, 2004-2023)",
    },
    description: {
      fr: "Construction d'un modèle factoriel de risque de change par ACP, cadré comme mandat pour une société de gestion exposée au risque de change.",
      en: "Built a PCA-based currency risk factor model, framed as a mandate for an asset manager exposed to FX risk.",
    },
    details: {
      fr: [
        "Extraction de 3 composantes principales par décomposition spectrale : Facteur Dollar, Liquidité Monétaire USD / Global Financial Cycle, Facteur Émergent / Commodités",
        "Modèle de régression à 3 facteurs avec R² moyen de 79,97 %, validé contre le VIX, le taux 3 mois américain et le pétrole WTI",
        "Tests de robustesse : ARCH-LM, correction des écarts-types par la méthode HC3 de White",
      ],
      en: [
        "Extracted 3 principal components via spectral decomposition: Dollar Factor, USD Monetary Liquidity / Global Financial Cycle, Emerging / Commodities Factor",
        "3-factor regression model with an average R² of 79.97%, validated against the VIX, the US 3-month rate and WTI crude",
        "Robustness tests: ARCH-LM, White's HC3 standard error correction",
      ],
    },
    tags: {
      fr: ["ACP", "Facteurs macro", "Devises", "Économétrie"],
      en: ["PCA", "Macro factors", "Currencies", "Econometrics"],
    },
    document: "/documents/modele-factoriel-devises.pdf",
  },
  {
    slug: "cad-usd-determinants",
    code: "P/03",
    icone: "oil",
    titre: {
      fr: "Déterminants macro-financiers du taux de change CAD/USD",
      en: "Macro-financial determinants of the CAD/USD exchange rate",
    },
    periode: {
      fr: "M.Sc. — Introduction à l'économétrie, HEC Montréal (travail d'équipe de 4)",
      en: "M.Sc. — Introduction to Econometrics, HEC Montréal (team of 4)",
    },
    categorie: "Quantitatif",
    resultat: {
      fr: "R² ajusté de 0,639 sur 179 observations mensuelles (2010-2024)",
      en: "Adjusted R² of 0.639 over 179 monthly observations (2010-2024)",
    },
    description: {
      fr: "Identification empirique des déterminants macro-financiers du CAD/USD par régression multiple, avec emphase sur l'effet du prix du pétrole.",
      en: "Empirical identification of the macro-financial drivers of CAD/USD via multiple regression, with emphasis on the effect of oil prices.",
    },
    details: {
      fr: [
        "Modèle OLS multivarié (erreurs-types robustes HC1) : Dollar Index (+1 % USD → -0,79 % CAD, p<0,001), pétrole (+10 % pétrole → +0,23 % CAD, p=0,026), VIX significatif",
        "Batterie de diagnostics : Breusch-Pagan et White, Ramsey RESET, VIF (toutes < 4)",
        "Revue de littérature académique intégrée sur le statut de pétro-devise du Canada",
      ],
      en: [
        "Multivariate OLS model (HC1 robust standard errors): Dollar Index (+1% USD → -0.79% CAD, p<0.001), oil (+10% oil → +0.23% CAD, p=0.026), significant VIX",
        "Diagnostic battery: Breusch-Pagan and White, Ramsey RESET, VIF (all < 4)",
        "Integrated academic literature review on Canada's petro-currency status",
      ],
    },
    tags: {
      fr: ["Macro", "Devises", "Pétro-devise", "OLS"],
      en: ["Macro", "Currencies", "Petro-currency", "OLS"],
    },
    document: "/documents/cad-usd-determinants.pdf",
    credits: {
      fr: ["Louis-Thomas", "Alexis", "William"],
      en: ["Louis-Thomas", "Alexis", "William"],
    },
  },
  {
    slug: "blackberry-dcf",
    code: "P/04",
    icone: "dcf",
    titre: {
      fr: "Stock pitch BlackBerry — analyse fondamentale",
      en: "BlackBerry stock pitch — fundamental analysis",
    },
    periode: { fr: "B.A.A.", en: "B.B.A." },
    categorie: "Valorisation",
    resultat: {
      fr: "Cours cible défendu devant comité d'experts sectoriels",
      en: "Target price defended before a panel of industry experts",
    },
    description: {
      fr: "Note de recherche buy-side complète : modèle DCF avec analyse de sensibilité, comparables boursiers et diagnostic stratégique.",
      en: "Full buy-side research note: DCF model with sensitivity analysis, trading comparables and strategic diagnosis.",
    },
    details: {
      fr: [
        "Modèle DCF multi-scénarios avec tests de sensibilité (WACC, croissance terminale)",
        "Comparables boursiers et diagnostic stratégique",
        "Défense du cours cible devant un comité d'experts",
      ],
      en: [
        "Multi-scenario DCF model with sensitivity tests (WACC, terminal growth)",
        "Trading comparables and strategic diagnosis",
        "Target price defended before an expert panel",
      ],
    },
    tags: {
      fr: ["DCF", "Comparables", "Equity research"],
      en: ["DCF", "Comparables", "Equity research"],
    },
    document: "/documents/blackberry-dcf.pdf",
  },
  {
    slug: "dollarama-esg",
    code: "P/05",
    icone: "esg",
    titre: {
      fr: "Stock pitch ESG — Dollarama",
      en: "ESG stock pitch — Dollarama",
    },
    periode: { fr: "B.A.A. — 2e place", en: "B.B.A. — 2nd place" },
    categorie: "Valorisation",
    resultat: {
      fr: "2e place devant jury Club IRQ et Finance Montréal",
      en: "2nd place before a Club IRQ and Finance Montréal jury",
    },
    description: {
      fr: "Thèse d'investissement intégrant des critères ESG, défendue devant un jury de professionnels de l'industrie.",
      en: "Investment thesis integrating ESG criteria, defended before a jury of industry professionals.",
    },
    details: {
      fr: [
        "Intégration de critères ESG dans la thèse d'investissement",
        "Défense devant jury du Club IRQ et de Finance Montréal",
        "2e place de la compétition",
      ],
      en: [
        "ESG criteria integrated into the investment thesis",
        "Defended before a Club IRQ and Finance Montréal jury",
        "2nd place in the competition",
      ],
    },
    tags: {
      fr: ["ESG", "Equity research", "Pitch"],
      en: ["ESG", "Equity research", "Pitch"],
    },
    document: "/documents/dollarama-esg.pdf",
  },
  {
    slug: "gamestop-robinhood",
    code: "P/06",
    icone: "retail",
    titre: {
      fr: "Analyse de la performance et du risque du trading retail (GameStop/Robinhood)",
      en: "Performance and risk analysis of retail trading (GameStop/Robinhood)",
    },
    periode: {
      fr: "M.Sc. — Méthodes économétriques en finance, HEC Montréal",
      en: "M.Sc. — Econometric Methods in Finance, HEC Montréal",
    },
    categorie: "Quantitatif",
    resultat: {
      fr: "Rendement annualisé de 32,18 % (vs 21,86 % S&P 500), mais VaR 1 % de -8,21 % (vs -5,22 %)",
      en: "Annualized return of 32.18% (vs 21.86% S&P 500), but 1% VaR of -8.21% (vs -5.22%)",
    },
    description: {
      fr: "Construction d'un portefeuille synthétique répliquant le comportement collectif des utilisateurs Robinhood, comparaison de performance et de risque de queue contre le S&P 500, puis test de la prévisibilité de l'anomalie GameStop.",
      en: "Built a synthetic portfolio replicating the collective behaviour of Robinhood users, compared performance and tail risk against the S&P 500, then tested the predictability of the GameStop anomaly.",
    },
    details: {
      fr: [
        "Portefeuille pondéré par le nombre de comptes détenteurs (données Robintrack), comparé au S&P 500",
        "Ratio de Sharpe validé par bootstrap (5 000 itérations), VaR et Expected Shortfall à 1 % / 5 %",
        "Modèle AR(4) testé sur le short squeeze GameStop : prévision de +1,25 %/jour vs réalité de +59,4 %/jour (25-28 janvier 2021)",
      ],
      en: [
        "Portfolio weighted by the number of holding accounts (Robintrack data), compared to the S&P 500",
        "Sharpe ratio validated via bootstrap (5,000 iterations), VaR and Expected Shortfall at 1% / 5%",
        "AR(4) model tested on the GameStop short squeeze: forecast of +1.25%/day vs actual +59.4%/day (January 25-28, 2021)",
      ],
    },
    tags: {
      fr: ["VaR", "Bootstrap", "Risque de queue", "Python"],
      en: ["VaR", "Bootstrap", "Tail risk", "Python"],
    },
    document: "/documents/gamestop-robinhood.pdf",
  },
];
