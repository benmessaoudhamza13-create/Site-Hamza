import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllNotes, getNote } from "@/lib/revue";
import RevueArticle from "./RevueArticle";

export function generateStaticParams() {
  return getAllNotes().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return {};
  const title = `${note.titre} — Revue macro`;
  return {
    title,
    description: note.resume,
    openGraph: {
      title: note.titre,
      description: note.resume,
      type: "article",
      publishedTime: note.date,
      locale: "fr_CA",
      url: `/revue/${note.slug}`,
      images: note.image ? [{ url: note.image, alt: note.titre }] : undefined,
    },
    twitter: {
      card: note.image ? "summary_large_image" : "summary",
      title: note.titre,
      description: note.resume,
      images: note.image ? [note.image] : undefined,
    },
  };
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const notes = getAllNotes();
  const index = notes.findIndex((n) => n.slug === slug);
  if (index === -1) return notFound();

  const note = notes[index];
  // Tri décroissant : la « suivante » dans le temps est à l'index précédent.
  const newer = index > 0 ? notes[index - 1] : undefined;
  const older = index < notes.length - 1 ? notes[index + 1] : undefined;

  const pick = (n?: (typeof notes)[number]) =>
    n ? { slug: n.slug, titre: n.titre } : undefined;

  return <RevueArticle note={note} newer={pick(newer)} older={pick(older)} />;
}
