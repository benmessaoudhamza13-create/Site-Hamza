"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const timeline = [
  {
    titre: "B.A.A. Spécialisations Finance & Économie appliquée",
    sousTitre: "HEC Montréal",
  },
  {
    titre: "Stagiaire Analyste d'affaires, Optimisation continue",
    sousTitre: "Banque Nationale du Canada — Été 2024 – mai 2025",
  },
  {
    titre: "Programme de stage FBNGP — Gestion de patrimoine",
    sousTitre: "Banque Nationale du Canada — Été 2025 – mai 2026",
  },
  {
    titre: "M.Sc. Finance de marché",
    sousTitre: "HEC Montréal — Fin prévue déc. 2027",
  },
  {
    titre: "Fonds BNI-HEC",
    sousTitre: "Poste actuel",
  },
  {
    titre: "Auxiliaire d'enseignement, Options et contrats à terme (FINA 20210)",
    sousTitre: "HEC Montréal — Automne 2026",
  },
];

const certifications = ["Bloomberg Market Concepts (BMC)"];

const benevolat = [
  "Fondation Marie-Vincent",
  "Mission Bon Accueil",
  "Moisson Rive-Sud",
];

const sport = ["Triathlon", "Hyrox", "Spartan Race"];

const CV_PATHS = {
  fr: "/documents/cv-fr.pdf",
  en: "/documents/cv-en.pdf",
} as const;

export default function AProposPage() {
  const [cvOpen, setCvOpen] = useState(false);
  const [cvLang, setCvLang] = useState<"fr" | "en">("fr");
  const cvPath = CV_PATHS[cvLang];

  useEffect(() => {
    if (!cvOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCvOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [cvOpen]);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
      <SectionHeader eyebrow="À propos" title="Mon parcours" />

      <p className="max-w-2xl text-base leading-relaxed text-dim">
        Je suis candidat à la maîtrise en finance de marché à HEC Montréal,
        après une double formation en finance et en économie appliquée. Ce
        parcours m&rsquo;a mené à deux stages consécutifs à la Banque
        Nationale du Canada, d&rsquo;abord en optimisation continue puis en
        gestion de patrimoine, où j&rsquo;ai développé une lecture rigoureuse
        des marchés et des enjeux qui les traversent. Ce site rassemble mes
        projets et mes lectures de marché.
      </p>

      <div className="mt-9">
        <button
          type="button"
          onClick={() => setCvOpen(true)}
          className="btn btn-primary"
        >
          Mon CV
        </button>
      </div>

      <section className="mt-14 border-t rule pt-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
          Formation & expérience
        </p>
        <ol className="relative mt-8 space-y-9 border-l-2 rule pl-7">
          {timeline.map((t) => (
            <li key={t.titre} className="relative">
              <span
                aria-hidden
                className="absolute -left-[35px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-paper"
              />
              <h3 className="font-display text-xl leading-snug">{t.titre}</h3>
              <p className="mt-1.5 font-mono text-xs uppercase tracking-wide text-dim">
                {t.sousTitre}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14 border-t rule pt-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
          Certifications
        </p>
        <ul className="mt-6 space-y-6">
          {certifications.map((c) => (
            <li key={c}>
              <h3 className="font-display text-xl leading-snug">{c}</h3>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 border-t rule pt-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
          Engagement personnel
        </p>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-display text-xl leading-snug">Bénévolat</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {benevolat.map((b) => (
                <span
                  key={b}
                  className="rounded-full border rule px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-dim"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl leading-snug">Sport</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {sport.map((s) => (
                <span
                  key={s}
                  className="rounded-full border rule px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-dim"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {cvOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setCvOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mon CV"
            className="relative flex h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-[14px] border rule bg-card shadow-[0_24px_64px_rgba(32,36,31,0.25)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b rule px-4 py-3">
              <div className="flex items-center gap-4">
                <div
                  role="group"
                  aria-label="Langue du CV"
                  className="flex overflow-hidden rounded-full border rule font-mono text-[10px] uppercase tracking-widest"
                >
                  {(["fr", "en"] as const).map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => setCvLang(lang)}
                      aria-pressed={cvLang === lang}
                      className={`px-3 py-1 transition-colors duration-200 ease ${
                        cvLang === lang
                          ? "bg-accent text-white"
                          : "text-dim hover:text-accent"
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
                <a
                  href={cvPath}
                  download
                  className="font-mono text-xs uppercase tracking-widest text-accent transition-opacity duration-200 ease hover:opacity-80"
                >
                  Télécharger
                </a>
              </div>
              <button
                type="button"
                onClick={() => setCvOpen(false)}
                aria-label="Fermer"
                className="rounded-full p-1.5 text-dim transition-colors duration-200 ease hover:bg-accent/10 hover:text-accent"
              >
                <X size={18} />
              </button>
            </div>
            <iframe
              src={cvPath}
              title={`CV (${cvLang.toUpperCase()})`}
              className="h-full w-full bg-paper"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
