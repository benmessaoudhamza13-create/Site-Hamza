import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * Lecture des notes de la revue macro depuis `content/revue/*.md`.
 * Côté serveur uniquement (fs). Le contenu est figé au build.
 */

export type NoteMeta = {
  slug: string;
  titre: string;
  sousTitre?: string;
  /** ISO (AAAA-MM-JJ) */
  date: string;
  /** Date lisible en français, ex. « 1 septembre 2026 » */
  dateLabel: string;
  categorie: string;
  pdf?: string;
  resume: string;
  /** Première image du corps, pour l'Open Graph */
  image?: string;
  /** Minutes de lecture estimées */
  minutes: number;
};

export type Note = NoteMeta & {
  /** Corps markdown, sans le titre H1 initial (déjà affiché depuis le frontmatter). */
  body: string;
};

const DIR = path.join(process.cwd(), "content", "revue");

const dateFmt = new Intl.DateTimeFormat("fr-CA", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function toIso(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}/.test(value)) return value.slice(0, 10);
  throw new Error(`Date invalide dans le frontmatter : ${String(value)}`);
}

function readFile(file: string): Note {
  const raw = fs.readFileSync(path.join(DIR, file), "utf8");
  const { data, content } = matter(raw);

  const required = ["titre", "date", "slug", "categorie", "resume"] as const;
  for (const key of required) {
    if (!data[key]) throw new Error(`Champ « ${key} » manquant dans ${file}`);
  }

  const iso = toIso(data.date);
  const dateLabel = dateFmt.format(new Date(`${iso}T00:00:00Z`)).replace(/^1 /, "1er ");

  // Le corps commence souvent par le titre en H1 : on l'enlève pour ne pas
  // l'afficher deux fois (le titre vient du frontmatter).
  const body = content.replace(/^\s*#\s+[^\n]+\n+/, "");

  const image = body.match(/!\[[^\]]*\]\(([^)\s]+)/)?.[1];
  const words = body.split(/\s+/).filter(Boolean).length;

  return {
    slug: String(data.slug),
    titre: String(data.titre),
    sousTitre: data.sous_titre ? String(data.sous_titre) : undefined,
    date: iso,
    dateLabel,
    categorie: String(data.categorie),
    pdf: data.pdf ? String(data.pdf) : undefined,
    resume: String(data.resume),
    image,
    minutes: Math.max(1, Math.round(words / 200)),
    body,
  };
}

export function getAllNotes(): Note[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map(readFile)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

/** Métadonnées seules (sérialisables pour un composant client). */
export function getAllNotesMeta(): NoteMeta[] {
  return getAllNotes().map(({ body, ...meta }) => {
    void body;
    return meta;
  });
}

export function getNote(slug: string): Note | undefined {
  return getAllNotes().find((n) => n.slug === slug);
}
