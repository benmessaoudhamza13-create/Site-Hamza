"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/apropos", label: "Mon parcours" },
  { href: "/projets", label: "Projets" },
  { href: "/macro", label: "Revue macro" },
];

export default function Nav() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b rule bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="group flex flex-col gap-1 leading-none">
          <span className="font-display text-lg tracking-tight transition-colors duration-200 ease group-hover:text-accent">
            Hamza Ben Messaoud
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
            Économie appliquée et finance — HEC Montréal
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-1 font-mono text-xs uppercase tracking-widest transition-colors duration-200 ease hover:text-accent after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 ${
                  active ? "text-accent after:scale-x-100" : "text-dim"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            aria-current={isActive("/contact") ? "page" : undefined}
            className={`rounded-lg border px-3 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors duration-200 ease hover:border-accent hover:text-accent ${
              isActive("/contact")
                ? "border-accent text-accent"
                : "rule"
            }`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
