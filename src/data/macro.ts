export type RevueMacro = {
  slug: string;
  numero: string;
  date: string;
  titre: string;
  resume: string;
  sections: {
    titre: string;
    contenu: string[];
  }[];
};

// Entrée modèle — à dupliquer chaque semaine. Remplace le contenu entre
// crochets par ta propre analyse. Le format (3 sections courtes) est pensé
// pour être écrit en 20-30 minutes, pas pour être exhaustif.
export const revuesMacro: RevueMacro[] = [
  {
    slug: "modele",
    numero: "M/00",
    date: "À publier",
    titre: "[Titre de la semaine — l'angle, pas juste la date]",
    resume:
      "[Une phrase : le fait macro le plus important de la semaine et pourquoi il compte pour un investisseur.]",
    sections: [
      {
        titre: "Ce qui a bougé",
        contenu: [
          "[Donnée ou décision clé #1 — chiffre précis, source, surprise vs attentes]",
          "[Donnée ou décision clé #2]",
        ],
      },
      {
        titre: "Pourquoi ça compte",
        contenu: [
          "[Mécanisme de transmission : taux → devise → actifs risqués, ou équivalent]",
          "[Qui gagne, qui perd — secteurs, classes d'actifs, régions]",
        ],
      },
      {
        titre: "Ce que je surveille",
        contenu: [
          "[Prochaine donnée / décision à surveiller et pourquoi]",
          "[Ton biais ou ta conviction, assumés — c'est ce qui rend la revue utile dans une entrevue]",
        ],
      },
    ],
  },
];
