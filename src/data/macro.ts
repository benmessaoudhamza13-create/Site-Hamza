import type { L } from "@/lib/i18n";

export type RevueMacro = {
  slug: string;
  numero: string;
  date: L;
  titre: L;
  resume: L;
  sections: {
    titre: L;
    contenu: L<string[]>;
  }[];
};

// Entrée modèle — à dupliquer pour chaque nouvelle revue. Remplace le
// contenu entre crochets par ta propre analyse. Le format (3 sections
// courtes) est pensé pour être écrit en 20-30 minutes, pas pour être
// exhaustif.
export const revuesMacro: RevueMacro[] = [
  {
    slug: "modele",
    numero: "M/00",
    date: { fr: "À publier", en: "Upcoming" },
    titre: {
      fr: "[Titre de la semaine — l'angle, pas juste la date]",
      en: "[Title of the week — the angle, not just the date]",
    },
    resume: {
      fr: "[Une phrase : le fait macro le plus important de la semaine et pourquoi il compte pour un investisseur.]",
      en: "[One sentence: the most important macro fact of the week and why it matters to an investor.]",
    },
    sections: [
      {
        titre: { fr: "Ce qui a bougé", en: "What moved" },
        contenu: {
          fr: [
            "[Donnée ou décision clé #1 — chiffre précis, source, surprise vs attentes]",
            "[Donnée ou décision clé #2]",
          ],
          en: [
            "[Key data point or decision #1 — precise figure, source, surprise vs expectations]",
            "[Key data point or decision #2]",
          ],
        },
      },
      {
        titre: { fr: "Pourquoi ça compte", en: "Why it matters" },
        contenu: {
          fr: [
            "[Mécanisme de transmission : taux → devise → actifs risqués, ou équivalent]",
            "[Qui gagne, qui perd — secteurs, classes d'actifs, régions]",
          ],
          en: [
            "[Transmission mechanism: rates → currency → risk assets, or equivalent]",
            "[Who wins, who loses — sectors, asset classes, regions]",
          ],
        },
      },
      {
        titre: { fr: "Ce que je surveille", en: "What I’m watching" },
        contenu: {
          fr: [
            "[Prochaine donnée / décision à surveiller et pourquoi]",
            "[Ton biais ou ta conviction, assumés — c'est ce qui rend la revue utile dans une entrevue]",
          ],
          en: [
            "[Next data point / decision to watch and why]",
            "[Your bias or conviction, stated plainly — that’s what makes the review useful in an interview]",
          ],
        },
      },
    ],
  },
];
