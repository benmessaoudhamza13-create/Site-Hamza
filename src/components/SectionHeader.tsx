export default function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
  code?: string;
}) {
  return (
    <div className="mb-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
