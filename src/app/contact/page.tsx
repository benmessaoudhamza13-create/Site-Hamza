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
        {/* Courriel — l'enveloppe s'ouvre */}
        <a
          href="mailto:hamza.ben-messaoud@hec.ca"
          className="card group flex flex-col gap-6 p-6"
          data-reveal
        >
          <span className="envelope text-accent">
            <span className="letter" />
            <span className="body" />
            <span className="flap" />
          </span>
          <span>
            <span className="label block">{t(ui.contact.email)}</span>
            <span className="mt-1 block break-words text-sm transition-colors duration-200 group-hover:text-accent">
              hamza.ben-messaoud@hec.ca
            </span>
            <span className="link-arrow meta mt-3 text-accent">
              {t(ui.contact.write)} <span className="arrow">→</span>
            </span>
          </span>
        </a>

        {/* Téléphone — sonne au survol */}
        <a
          href="tel:+14386301061"
          className="card group flex flex-col gap-6 p-6"
          data-reveal
          style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
        >
          <span className="flex h-10 items-center">
            <span className="tile ring h-10 w-10">
              <Phone size={18} strokeWidth={1.75} aria-hidden />
            </span>
          </span>
          <span>
            <span className="label block">{t(ui.contact.phone)}</span>
            <span className="mt-1 block text-sm transition-colors duration-200 group-hover:text-accent">
              438 630-1061
            </span>
            <span className="link-arrow meta mt-3 text-accent">
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
          data-reveal
          style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
        >
          <span className="flex h-10 items-center">
            <span className="tile h-10 w-10 group-hover:scale-110 group-hover:bg-[#0a66c2]">
              <LinkedInGlyph className="h-[18px] w-[18px]" />
            </span>
          </span>
          <span>
            <span className="label block">{t(ui.contact.linkedin)}</span>
            <span className="mt-1 block break-words text-sm transition-colors duration-200 group-hover:text-[#0a66c2]">
              linkedin.com/in/hamza-benmessaoud
            </span>
            <span className="link-arrow meta mt-3 text-accent">
              {t(ui.contact.visit)} <span className="arrow">→</span>
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}
