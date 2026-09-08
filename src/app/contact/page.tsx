"use client";

import { Phone } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import LinkedInGlyph from "@/components/LinkedInGlyph";
import { useT } from "@/lib/i18n";
import { ui } from "@/i18n/ui";

export default function ContactPage() {
  const t = useT();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
      <SectionHeader eyebrow={t(ui.contact.eyebrow)} title={t(ui.contact.title)} />
      <p className="max-w-2xl text-base leading-relaxed text-dim">{t(ui.contact.intro)}</p>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {/* Courriel — enveloppe qui s'ouvre */}
        <a
          href="mailto:hamza.ben-messaoud@hec.ca"
          className="card group flex flex-col gap-6 p-6 hover:border-[#c0392b]/40"
        >
          <span className="envelope text-accent transition-colors duration-200 group-hover:text-[#c0392b]">
            <span className="letter" />
            <span className="body" />
            <span className="flap" />
          </span>
          <span>
            <span className="block font-mono text-[10px] uppercase tracking-widest text-dim">
              {t(ui.contact.email)}
            </span>
            <span className="mt-1 block break-words text-sm transition-colors duration-200 group-hover:text-[#c0392b]">
              hamza.ben-messaoud@hec.ca
            </span>
            <span className="link-arrow mt-3 font-mono text-[11px] uppercase tracking-widest text-accent">
              {t(ui.contact.write)} <span className="arrow">→</span>
            </span>
          </span>
        </a>

        {/* Téléphone — sonne au survol */}
        <a href="tel:+14386301061" className="card group flex flex-col gap-6 p-6">
          <span className="flex h-10 w-14 items-center text-accent">
            <span className="ring flex h-10 w-10 items-center justify-center rounded-full bg-accent/[0.08] transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
              <Phone size={18} strokeWidth={1.75} aria-hidden />
            </span>
          </span>
          <span>
            <span className="block font-mono text-[10px] uppercase tracking-widest text-dim">
              {t(ui.contact.phone)}
            </span>
            <span className="mt-1 block text-sm transition-colors duration-200 group-hover:text-accent">
              438 630-1061
            </span>
            <span className="link-arrow mt-3 font-mono text-[11px] uppercase tracking-widest text-accent">
              {t(ui.contact.call)} <span className="arrow">→</span>
            </span>
          </span>
        </a>

        {/* LinkedIn — le « in » grandit et prend sa couleur */}
        <a
          href="https://linkedin.com/in/hamza-benmessaoud"
          target="_blank"
          rel="noreferrer"
          className="card group flex flex-col gap-6 p-6 hover:border-[#0a66c2]/40"
        >
          <span className="flex h-10 w-14 items-center text-accent">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/[0.08] transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-110 group-hover:bg-[#0a66c2] group-hover:text-white">
              <LinkedInGlyph className="h-[18px] w-[18px]" />
            </span>
          </span>
          <span>
            <span className="block font-mono text-[10px] uppercase tracking-widest text-dim">
              {t(ui.contact.linkedin)}
            </span>
            <span className="mt-1 block break-words text-sm transition-colors duration-200 group-hover:text-[#0a66c2]">
              linkedin.com/in/hamza-benmessaoud
            </span>
            <span className="link-arrow mt-3 font-mono text-[11px] uppercase tracking-widest text-accent">
              {t(ui.contact.visit)} <span className="arrow">→</span>
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}
