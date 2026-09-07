import Link from "next/link";
import { projets } from "@/data/projets";
import { revuesMacro } from "@/data/macro";

const highlights = projets.slice(0, 5);
const derniereRevue = revuesMacro[0];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <h1 className="max-w-xl font-display text-4xl italic leading-tight tracking-tight md:text-6xl">
              Mon répertoire de projets et d&rsquo;accomplissements.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-dim">
              Candidat à la maîtrise en finance de marché à HEC Montréal, avec
              une double formation en finance et économie. Ce site rassemble
              mes projets et mes lectures de marché — la trace continue
              d&rsquo;un travail d&rsquo;analyse, pas juste un CV figé.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/projets"
                className="rounded-lg bg-accent px-5 py-3 font-mono text-xs uppercase tracking-widest text-white transition-opacity duration-200 ease hover:opacity-90"
              >
                Voir les projets
              </Link>
              <Link
                href="/macro"
                className="rounded-lg border border-text px-5 py-3 font-mono text-xs uppercase tracking-widest transition-colors duration-200 ease hover:border-accent hover:text-accent"
              >
                Revue macro
              </Link>
            </div>
          </div>
          <svg
            viewBox="0 0 400 500"
            className="card aspect-[4/5] w-full overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#e8e2d0" />
                <stop offset="100%" stopColor="#cfd8c9" />
              </linearGradient>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2f5c4a" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#2f5c4a" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect width="400" height="500" fill="url(#bgGrad)" rx="14" />
            <g stroke="rgba(32,36,31,0.08)" strokeWidth="1">
              <line x1="0" y1="125" x2="400" y2="125" />
              <line x1="0" y1="250" x2="400" y2="250" />
              <line x1="0" y1="375" x2="400" y2="375" />
            </g>
            <path
              d="M 40 380 L 120 340 L 180 360 L 240 260 L 300 220 L 360 120 L 360 460 L 40 460 Z"
              fill="url(#areaGrad)"
              stroke="none"
            />
            <path
              d="M 40 380 L 120 340 L 180 360 L 240 260 L 300 220 L 360 120"
              fill="none"
              stroke="#2f5c4a"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {[
              [40, 380],
              [120, 340],
              [180, 360],
              [240, 260],
              [300, 220],
            ].map(([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" fill="#f3efe6" stroke="#2f5c4a" strokeWidth="2" />
            ))}
            <circle cx="360" cy="120" r="6" fill="#2f5c4a" />
          </svg>
        </div>
      </section>

      {/* PROJETS — aperçu */}
      <section className="border-t rule bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                Projets
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight">
                Quelques projets
              </h2>
            </div>
            <Link
              href="/projets"
              className="hidden font-mono text-xs uppercase tracking-widest text-dim transition-colors duration-200 ease hover:text-accent md:block"
            >
              Tout voir →
            </Link>
          </div>
          <div className="[mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%-16px),transparent)]">
            <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2">
              {highlights.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projets#${p.slug}`}
                  className="card group flex w-72 shrink-0 snap-start flex-col justify-between gap-6 p-6"
                >
                  <div>
                    <span className="inline-block rounded-full border rule px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
                      {p.categorie}
                    </span>
                    <h3 className="mt-4 font-display text-xl leading-snug">
                      {p.titre}
                    </h3>
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-accent">
                    {p.resultat}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MACRO — dernière revue */}
      <section className="border-t rule bg-card">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
            Revue macro
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight">
            Mes revues macro
          </h2>
          <div className="mt-8 border-t rule pt-8">
            <p className="font-mono text-[11px] uppercase tracking-widest text-dim">
              {derniereRevue.date}
            </p>
            <h3 className="mt-2 font-display text-2xl italic">
              {derniereRevue.titre}
            </h3>
            <p className="mt-3 max-w-2xl text-dim">{derniereRevue.resume}</p>
            <Link
              href="/macro"
              className="mt-5 inline-block font-mono text-xs uppercase tracking-widest text-accent transition-opacity duration-200 ease hover:opacity-80"
            >
              Lire la revue →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
