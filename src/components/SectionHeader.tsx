export default function SectionHeader({
  eyebrow,
  title,
  aside,
}: {
  eyebrow: string;
  title: string;
  aside?: React.ReactNode;
  code?: string;
}) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
          {eyebrow}
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight md:text-4xl">
          {title}
        </h2>
      </div>
      {aside}
    </div>
  );
}
