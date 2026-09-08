"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronDown, FileText } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ProjectSketch from "@/components/ProjectSketch";
import PdfModal from "@/components/PdfModal";
import { projets, type Categorie, type Projet } from "@/data/projets";
import { useT } from "@/lib/i18n";
import { ui } from "@/i18n/ui";

const categories: Categorie[] = ["Portefeuille", "Valorisation", "Quantitatif", "Compétition"];

export default function ProjetsPage() {
  const t = useT();
  const [filter, setFilter] = useState<Categorie | "all">("all");
  const [open, setOpen] = useState<string | null>(null);
  const [doc, setDoc] = useState<{ src: string; title: string } | null>(null);

  // Ouvre le projet ciblé par l'ancre (#slug) à l'arrivée.
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash || !projets.some((p) => p.slug === hash)) return;
    const id = requestAnimationFrame(() => {
      setOpen(hash);
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ block: "start" });
      });
    });
    return () => cancelAnimationFrame(id);
  }, []);

  const completed = useMemo(
    () => projets.filter((p) => p.statut !== "En cours"),
    [],
  );
  const ongoing = useMemo(() => projets.filter((p) => p.statut === "En cours"), []);
  const shown = completed.filter((p) => filter === "all" || p.categorie === filter);
  const presentCats = categories.filter((c) => completed.some((p) => p.categorie === c));

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
      <SectionHeader eyebrow={t(ui.projets.eyebrow)} title={t(ui.projets.title)} />

      {/* Filtres discrets */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={`chip chip-btn ${filter === "all" ? "chip-active" : ""}`}
        >
          {t(ui.projets.all)}
        </button>
        {presentCats.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            className={`chip chip-btn ${filter === c ? "chip-active" : ""}`}
          >
            {t(ui.cat[c])}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {shown.map((p) => (
          <ProjectCard
            key={p.slug}
            p={p}
            isOpen={open === p.slug}
            onToggle={() => setOpen(open === p.slug ? null : p.slug)}
            onOpenDoc={() => p.document && setDoc({ src: p.document, title: t(p.titre) })}
          />
        ))}
        {shown.length === 0 ? (
          <p className="py-10 text-center font-mono text-xs uppercase tracking-widest text-dim">
            {t(ui.projets.noResult)}
          </p>
        ) : null}
      </div>

      {/* En cours & à venir */}
      {ongoing.length > 0 ? (
        <section className="mt-20 border-t rule pt-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
            {t(ui.projets.ongoingEyebrow)}
          </p>
          <h2 className="mt-3 font-display text-2xl tracking-tight md:text-3xl">
            {t(ui.projets.ongoingTitle)}
          </h2>
          <div className="mt-8 flex flex-col gap-4">
            {ongoing.map((p) => (
              <ProjectCard
                key={p.slug}
                p={p}
                ongoing
                isOpen={open === p.slug}
                onToggle={() => setOpen(open === p.slug ? null : p.slug)}
                onOpenDoc={() => p.document && setDoc({ src: p.document, title: t(p.titre) })}
              />
            ))}
          </div>
        </section>
      ) : null}

      <PdfModal
        open={doc !== null}
        onClose={() => setDoc(null)}
        src={doc?.src ?? ""}
        title={doc?.title ?? ""}
      />
    </div>
  );
}

function ProjectCard({
  p,
  isOpen,
  onToggle,
  onOpenDoc,
  ongoing = false,
}: {
  p: Projet;
  isOpen: boolean;
  onToggle: () => void;
  onOpenDoc: () => void;
  ongoing?: boolean;
}) {
  const t = useT();
  const bodyId = `${p.slug}-body`;

  return (
    <article
      id={p.slug}
      className={`card group scroll-mt-28 ${
        ongoing ? "border-dashed" : ""
      } ${isOpen ? "card-static border-accent/30" : ""}`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={bodyId}
        className="flex w-full items-start gap-4 p-5 text-left md:p-6"
      >
        <span
          className={`mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-200 ${
            isOpen
              ? "bg-accent text-white"
              : "bg-accent/[0.07] text-accent group-hover:bg-accent group-hover:text-white"
          }`}
        >
          <ProjectSketch icone={p.icone} className="h-7 w-7" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-display text-lg leading-snug transition-colors duration-200 group-hover:text-accent md:text-xl">
              {t(p.titre)}
            </h3>
            {ongoing ? (
              <span className="rounded-full bg-accent px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-white">
                {t(ui.projets.inProgress)}
              </span>
            ) : null}
          </span>
          <span className="mt-1.5 block font-mono text-[11px] uppercase tracking-wide text-dim">
            {t(p.resultat)}
          </span>
          {/* Aperçu au survol (fermé seulement) */}
          {!isOpen ? (
            <span className="block max-h-0 overflow-hidden text-sm leading-relaxed text-dim opacity-0 transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:mt-3 group-hover:max-h-24 group-hover:opacity-100">
              {t(p.description)}
            </span>
          ) : null}
        </span>
        <ChevronDown
          size={18}
          strokeWidth={1.75}
          aria-hidden
          className={`mt-1 shrink-0 text-dim transition-transform duration-200 ease group-hover:text-accent ${
            isOpen ? "rotate-180 text-accent" : ""
          }`}
        />
      </button>

      {isOpen ? (
        <div id={bodyId} className="reveal border-t rule px-5 pb-6 pt-5 md:px-6">
          <p className="font-mono text-[10px] uppercase tracking-widest text-dim">
            {t(p.periode)}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-dim">{t(p.description)}</p>
          <ul className="mt-4 space-y-2">
            {t(p.details).map((d, i) => (
              <li key={i} className="flex gap-2 text-sm text-dim">
                <span className="text-accent">—</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="chip text-accent">{t(ui.cat[p.categorie])}</span>
            {t(p.tags).map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
          {p.credits ? (
            <p className="mt-4 text-xs italic text-dim">
              {t(ui.projets.madeWith)} {t(p.credits).join(", ")}
            </p>
          ) : null}
          {p.document ? (
            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" onClick={onOpenDoc} className="btn btn-primary">
                <FileText size={14} strokeWidth={1.75} aria-hidden />
                {t(ui.projets.readDoc)}
              </button>
              <a href={p.document} download className="btn btn-secondary">
                {t(ui.projets.download)}
              </a>
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
