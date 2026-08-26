import Link from "next/link";

const links = [
  { href: "/apropos", label: "À propos", code: "01" },
  { href: "/projets", label: "Projets", code: "02" },
  { href: "/macro", label: "Revue macro", code: "03" },
  { href: "/outils", label: "Outils", code: "04" },
  { href: "/evaluations", label: "Évaluations", code: "05" },
];

export default function Nav() {
  return (
    <header className="border-b rule-ink">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-display text-lg tracking-tight">
            Hamza Ben Messaoud
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-on-ink-dim)]">
            Finance de marché — HEC Montréal
          </span>
        </Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-widest text-[var(--text-on-ink-dim)] transition-colors hover:text-signal"
            >
              <span className="text-signal">{l.code}</span> {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-mono text-xs uppercase tracking-widest border rule-ink px-3 py-1 transition-colors hover:border-signal hover:text-signal"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
