"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useT } from "@/lib/i18n";
import { ui } from "@/i18n/ui";
import LinkedInGlyph from "@/components/LinkedInGlyph";

const langs = ["fr", "en", "ar", "es"] as const;

export default function Footer() {
  const t = useT();

  return (
    <footer className="band-dark mt-10">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {/* Ville avec croquis au survol */}
            <span className="tip label inline-flex cursor-default items-center gap-2 transition-colors duration-200 hover:text-[var(--gold-soft)]">
              <MapPin size={14} strokeWidth={1.6} aria-hidden />
              {t(ui.footer.location)}
              <span className="tip-bubble px-3 py-2">
                <svg viewBox="0 0 200 60" className="h-9 w-32 text-accent" aria-hidden>
                  <path
                    d="M 0 52 H 14 V 34 H 26 V 44 H 36 V 20 H 48 V 40 H 60 V 28 H 74 V 12 L 82 6 L 90 12 V 48 H 104 V 30 H 116 V 22 H 128 V 42 H 140 V 14 H 152 V 36 H 166 V 26 H 178 V 46 H 190 V 52 H 200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path d="M 74 12 V 2 L 78 0 L 82 2 V 6" fill="none" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </span>
            </span>

            {/* Langues : salutation + niveau au survol */}
            <span className="label flex items-center gap-1">
              {langs.map((code) => {
                const item = ui.langs[code];
                return (
                  <span
                    key={code}
                    tabIndex={0}
                    className="tip cursor-default rounded-md px-1.5 py-0.5 transition-colors duration-200 hover:bg-white/10 hover:text-[var(--gold-soft)] focus:bg-white/10 focus:text-[var(--gold-soft)]"
                  >
                    {item.code}
                    <span className="tip-bubble px-3 py-2 text-left">
                      <span className="block font-display text-base normal-case tracking-normal text-text">
                        {item.greeting}
                      </span>
                      <span className="label block">{t(item.level)}</span>
                    </span>
                  </span>
                );
              })}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a className="foot-pill label" href="mailto:hamza.ben-messaoud@hec.ca">
              <Mail size={14} strokeWidth={1.6} aria-hidden />
              {t(ui.contact.email)}
            </a>
            <a className="foot-pill is-green label group" href="tel:+14386301061">
              <Phone size={14} strokeWidth={1.6} aria-hidden className="ring" />
              438 630-1061
            </a>
            <a
              className="foot-pill is-linkedin label"
              href="https://linkedin.com/in/hamza-benmessaoud"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInGlyph className="h-3.5 w-3.5" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t rule pt-6">
          <span className="font-display text-sm text-[var(--text-on-dark-dim)]">Hamza Benmessaoud</span>
          <span className="label">HEC Montréal</span>
        </div>
      </div>
    </footer>
  );
}
