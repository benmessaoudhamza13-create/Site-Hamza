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
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/macro"
        className="font-mono text-xs uppercase tracking-widest text-[var(--text-on-ink-dim)] hover:text-signal"
      >
        ← Toutes les revues
      </Link>
      <p className="mt-8 font-mono text-[11px] uppercase tracking-widest text-signal">
        {revue.numero} — {revue.date}
      </p>
      <h1 className="mt-3 font-display text-4xl italic leading-tight">
        {revue.titre}
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-[var(--text-on-ink-dim)]">
        {revue.resume}
      </p>
      <div className="mt-10 space-y-10 border-t rule-ink pt-10">
        {revue.sections.map((s, i) => (
          <div key={i}>
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-sage">
              {s.titre}
            </h2>
            <ul className="mt-4 space-y-3">
              {s.contenu.map((c, j) => (
                <li key={j} className="flex gap-3 leading-relaxed">
                  <span className="mt-1 text-signal">—</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
