"use client";

import Link from "next/link";
import ReactMarkdown, { type Components } from "react-markdown";
import { FileDown } from "lucide-react";
import type { Note } from "@/lib/revue";
import { useT } from "@/lib/i18n";
import { ui } from "@/i18n/ui";

type Neighbour = { slug: string; titre: string } | undefined;

/* Rendu markdown → composants du site (liens externes, figures légendées). */
const components: Components = {
  a: ({ href = "", children }) => {
    const external = /^https?:\/\//.test(href);
    return (
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
        {children}
      </a>
    );
  },
  img: ({ src, alt }) => (
    <figure>
      {/* Schémas SVG statiques : <img> natif, next/image n'apporte rien ici */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={typeof src === "string" ? src : undefined} alt={alt ?? ""} loading="lazy" />
      {alt ? <figcaption>{alt}</figcaption> : null}
    </figure>
  ),
  // Un paragraphe qui ne contient qu'une image devient la figure elle-même
  // (une <figure> dans un <p> n'est pas du HTML valide).
  p: ({ node, children }) => {
    const only = node?.children?.length === 1 ? node.children[0] : undefined;
    if (only && only.type === "element" && only.tagName === "img") return <>{children}</>;
    return <p>{children}</p>;
  },
};

export default function RevueArticle({
  note,
  newer,
  older,
}: {
  note: Note;
  newer: Neighbour;
  older: Neighbour;
}) {
  const t = useT();

  return (
    <article className="mx-auto max-w-2xl px-6 py-16 md:py-20">
      <Link href="/revue" className="link-arrow back meta text-dim transition-colors duration-200 hover:text-accent">
        <span className="arrow">←</span> {t(ui.revue.back)}
      </Link>

      {/* En-tête */}
      <header className="mt-10">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="eyebrow">{note.dateLabel}</p>
          <span className="chip chip-accent">{note.categorie}</span>
          <span className="label">
            {note.minutes} {t(ui.revue.minutes)}
          </span>
        </div>
        <h1 className="mt-5 font-display text-4xl italic leading-[1.1] tracking-tight md:text-5xl">
          {note.titre}
        </h1>
        {note.sousTitre ? (
          <p className="mt-4 font-display text-xl leading-snug text-dim md:text-2xl">{note.sousTitre}</p>
        ) : null}
        {note.pdf ? (
          <div className="mt-8">
            <a href={note.pdf} download className="btn btn-primary">
              <FileDown size={14} strokeWidth={1.75} aria-hidden />
              {t(ui.revue.download)}
            </a>
          </div>
        ) : null}
      </header>

      {/* Corps */}
      <div className="prose-revue mt-12 border-t rule pt-10">
        <ReactMarkdown components={components}>{note.body}</ReactMarkdown>
      </div>

      {/* Rappel PDF */}
      {note.pdf ? (
        <aside className="card card-static mt-14 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg">{t(ui.revue.pdfNote)}</p>
            <p className="mt-1 text-sm text-dim">{t(ui.revue.pdfHint)}</p>
          </div>
          <a href={note.pdf} download className="btn btn-secondary shrink-0">
            <FileDown size={14} strokeWidth={1.75} aria-hidden />
            {t(ui.revue.download)}
          </a>
        </aside>
      ) : null}

      {/* Navigation entre notes */}
      {newer || older ? (
        <nav className="mt-10 grid gap-4 border-t rule pt-8 sm:grid-cols-2" aria-label="Autres notes">
          {older ? (
            <Link href={`/revue/${older.slug}`} className="group">
              <span className="label block">{t(ui.revue.previous)}</span>
              <span className="mt-1 block font-display text-lg italic leading-snug transition-colors duration-200 group-hover:text-accent">
                {older.titre}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {newer ? (
            <Link href={`/revue/${newer.slug}`} className="group sm:text-right">
              <span className="label block">{t(ui.revue.next)}</span>
              <span className="mt-1 block font-display text-lg italic leading-snug transition-colors duration-200 group-hover:text-accent">
                {newer.titre}
              </span>
            </Link>
          ) : null}
        </nav>
      ) : null}
    </article>
  );
}
