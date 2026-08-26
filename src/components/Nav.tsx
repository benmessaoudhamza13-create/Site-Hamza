import Link from "next/link";

const links = [
  { href: "/apropos", label: "À propos" },
  { href: "/projets", label: "Projets" },
  { href: "/macro", label: "Revue macro" },
  { href: "/outils", label: "Outils" },
  { href: "/evaluations", label: "Évaluations" },
];

export default function Nav() {
  return (
    <header className="border-b rule">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-display text-lg tracking-tight">
            Hamza Ben Messaoud
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
            Finance de marché — HEC Montréal
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-widest text-dim transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-[4px] border rule px-3 py-1 font-mono text-xs uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
