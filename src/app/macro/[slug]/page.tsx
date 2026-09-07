import Link from "next/link";
import { notFound } from "next/navigation";
import { revuesMacro } from "@/data/macro";

export function generateStaticParams() {
  return revuesMacro.map((r) => ({ slug: r.slug }));
}

export default async function RevueDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const revue = revuesMacro.find((r) => r.slug === slug);
  if (!revue) return notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
      <Link
        href="/macro"
        className="link-arrow back font-mono text-xs uppercase tracking-widest text-dim transition-colors duration-200 ease hover:text-accent"
      >
        <span className="arrow">←</span> Toutes les revues
      </Link>
      <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
        {revue.date}
      </p>
      <h1 className="mt-3 font-display text-4xl italic leading-[1.1] tracking-tight md:text-5xl">
        {revue.titre}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-dim">{revue.resume}</p>
      <div className="mt-12 space-y-10 border-t rule pt-10">
        {revue.sections.map((s, i) => (
          <section key={i}>
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              {s.titre}
            </h2>
            <ul className="mt-4 space-y-3">
              {s.contenu.map((c, j) => (
                <li key={j} className="flex gap-3 leading-relaxed">
                  <span className="mt-1 text-accent">—</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}
