"use client";

import { useState } from "react";
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

const CV_PATH = "/cv-hamza-benmessaoud.pdf";

export default function AProposPage() {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <SectionHeader eyebrow="À propos" title="Mon parcours" />

      <p className="max-w-2xl text-sm leading-relaxed text-dim">
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
          className="inline-block rounded-[4px] bg-accent px-5 py-3 font-mono text-xs uppercase tracking-widest text-white transition-opacity duration-200 ease hover:opacity-90"
        >
          Mon CV
        </button>
      </div>

      <div className="mt-14 border-t rule pt-10">
        <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
          Formation & expérience
        </p>
        <ol className="relative mt-8 space-y-8 border-l-2 rule pl-6">
          {timeline.map((t) => (
            <li key={t.titre} className="relative">
              <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
              <h3 className="font-display text-xl leading-snug">{t.titre}</h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-dim">
                {t.sousTitre}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-14 border-t rule pt-10">
        <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
          Certifications
        </p>
        <ul className="mt-6 space-y-6">
          {certifications.map((c) => (
            <li key={c}>
              <h3 className="font-display text-xl leading-snug">{c}</h3>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14 border-t rule pt-10">
        <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
          Engagement personnel
        </p>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-display text-xl leading-snug">Bénévolat</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {benevolat.map((b) => (
                <span
                  key={b}
                  className="rounded-[4px] border rule px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-dim"
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
                  className="rounded-[4px] border rule px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-dim"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {cvOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setCvOpen(false)}
        >
          <div
            className="card relative flex h-[85vh] w-full max-w-3xl flex-col overflow-hidden p-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b rule px-4 py-3">
              <a
                href={CV_PATH}
                download
                className="font-mono text-xs uppercase tracking-widest text-accent transition-opacity duration-200 ease hover:opacity-80"
              >
                Télécharger
              </a>
              <button
                type="button"
                onClick={() => setCvOpen(false)}
                aria-label="Fermer"
                className="text-dim transition-colors duration-200 ease hover:text-accent"
              >
                <X size={20} />
              </button>
            </div>
            <iframe src={CV_PATH} className="h-full w-full" />
          </div>
        </div>
      ) : null}
    </div>
  );
}
