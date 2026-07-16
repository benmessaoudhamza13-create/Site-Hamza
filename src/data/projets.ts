export type Projet = {
  slug: string;
  code: string;
  titre: string;
  periode: string;
  categorie: "Portefeuille" | "Valorisation" | "Simulation" | "Compétition";
  resultat: string;
  description: string;
  details: string[];
  tags: string[];
};

export const projets: Projet[] = [
  {
    slug: "globstrat",
    code: "P/01",
    titre: "Simulation de gestion stratégique Globstrat",
    periode: "B.A.A. — 1er rang de cohorte",
    categorie: "Simulation",
    resultat: "+50 % du cours de l'action simulée",
    description:
      "Rôle de CFO d'une multinationale simulée sur plusieurs trimestres, en compétition directe avec les autres équipes de la cohorte.",
    details: [
      "Structure du capital : arbitrage dette / équité à chaque levée de fonds simulée",
      "Politique de dividendes et gestion du fonds de roulement (BFR)",
      "1er rang de cohorte, toutes fonctions confondues (Finance, Marketing, Logistique)",
    ],
    tags: ["Structure du capital", "Stratégie financière", "Simulation"],
  },
  {
    slug: "blackberry-dcf",
    code: "P/02",
    titre: "Stock pitch BlackBerry — analyse fondamentale",
    periode: "B.A.A.",
    categorie: "Valorisation",
    resultat: "Cours cible défendu devant comité d'experts sectoriels",
    description:
      "Note de recherche buy-side complète : modèle DCF avec analyse de sensibilité, comparables boursiers et diagnostic stratégique.",
    details: [
      "Modèle DCF multi-scénarios avec tests de sensibilité (WACC, croissance terminale)",
      "Comparables boursiers et diagnostic stratégique (forces, faiblesses, menaces, opportunités)",
      "Défense du cours cible devant un comité d'experts",
    ],
    tags: ["DCF", "Comparables", "Equity research"],
  },
  {
    slug: "stocktrak",
    code: "P/03",
    titre: "Gestion de portefeuille institutionnel — StockTrak",
    periode: "B.A.A.",
    categorie: "Portefeuille",
    resultat: "Mandat simulé de 500 000 $",
    description:
      "Gestion d'un mandat en actions canadiennes avec approche top-down et sélection fondamentale.",
    details: [
      "Allocation sectorielle tactique guidée par un cadre macro top-down",
      "Sélection de titres sur filtres qualité et momentum",
      "Suivi de performance et rebalancement actif du portefeuille",
    ],
    tags: ["Top-Down", "Actions canadiennes", "Sélection de titres"],
  },
  {
    slug: "defi-bnc",
    code: "P/04",
    titre: "Défi de gestion d'actifs — Cohorte financière BNC",
    periode: "Compétition inter-cohortes",
    categorie: "Compétition",
    resultat: "Alpha de 3 % sur la poche Actions Int'l / Alternatifs",
    description:
      "Gestion d'un portefeuille multi-actifs en équipe, avec gouvernance de risque explicite et contraintes de mandat.",
    details: [
      "Portefeuille multi-actifs : actions internationales et actifs alternatifs",
      "Gouvernance des risques : VaR, tracking error, contraintes de mandat",
      "Alpha généré de 3 % vs indice de référence sur la période du défi",
    ],
    tags: ["Multi-actifs", "Gestion du risque", "VaR"],
  },
  {
    slug: "morgan-stanley",
    code: "P/05",
    titre: "Simulation Morgan Stanley",
    periode: "B.A.A.",
    categorie: "Simulation",
    resultat: "Participation compétitive",
    description:
      "Simulation de stratégie d'investissement sur les marchés financiers, dans un format inspiré des programmes de formation buy-side.",
    details: [
      "Construction de thèses d'investissement sous contrainte de temps",
      "Arbitrages risque / rendement présentés à un jury",
    ],
    tags: ["Stratégie d'investissement", "Marchés financiers"],
  },
  {
    slug: "datathon-hec",
    code: "P/06",
    titre: "Datathon HEC",
    periode: "B.A.A.",
    categorie: "Compétition",
    resultat: "Analyse livrée sous contrainte de temps",
    description:
      "Analyse de données appliquée à une problématique d'affaires, en équipe, sur un format compétitif de courte durée.",
    details: [
      "Nettoyage et exploration de données sous forte contrainte de temps",
      "Restitution des résultats à un jury mixte académique / industrie",
    ],
    tags: ["Analyse de données", "Python"],
  },
  {
    slug: "dollarama-esg",
    code: "P/07",
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
