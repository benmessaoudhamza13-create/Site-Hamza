"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLang, useT } from "@/lib/i18n";
import { ui } from "@/i18n/ui";

export default function Nav() {
  const pathname = usePathname();
  const { lang, setLang } = useLang();
  const t = useT();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/apropos", label: t(ui.nav.parcours) },
    { href: "/projets", label: t(ui.nav.projets) },
    { href: "/macro", label: t(ui.nav.macro) },
  ];

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-paper/85 backdrop-blur-md transition-[box-shadow,border-color] duration-300 ${
        scrolled ? "rule shadow-[0_8px_24px_rgba(31,36,32,0.06)]" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4">
        <Link href="/" className="group flex flex-col gap-1 leading-none">
          <span className="font-display text-lg tracking-tight transition-colors duration-200 group-hover:text-accent">
            Hamza Ben Messaoud
          </span>
          <span className="label hidden sm:block">{t(ui.nav.tagline)}</span>
        </Link>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className="nav-link"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            aria-current={isActive("/contact") ? "page" : undefined}
            className={`rounded-[var(--radius-btn)] border px-3 py-1.5 font-mono text-xs uppercase tracking-[0.1em] transition-colors duration-200 hover:border-accent hover:text-accent ${
              isActive("/contact") ? "border-accent text-accent" : "rule text-text"
            }`}
          >
            {t(ui.nav.contact)}
          </Link>
          <button
            type="button"
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            aria-label={t(ui.nav.switchTo)}
            title={t(ui.nav.switchTo)}
            className="relative flex overflow-hidden rounded-full border rule font-mono text-[10px] uppercase tracking-[0.12em]"
          >
            <span
              aria-hidden
              className={`absolute inset-y-0 w-1/2 rounded-full bg-gold transition-transform duration-300 ease-[var(--ease)] ${
                lang === "en" ? "translate-x-full" : "translate-x-0"
              }`}
            />
            <span className={`relative z-10 px-2.5 py-1 transition-colors duration-200 ${lang === "fr" ? "text-ink" : "text-dim"}`}>
              FR
            </span>
            <span className={`relative z-10 px-2.5 py-1 transition-colors duration-200 ${lang === "en" ? "text-ink" : "text-dim"}`}>
              EN
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
