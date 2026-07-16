export default function SectionHeader({
  code,
  eyebrow,
  title,
  dark,
}: {
  code: string;
  eyebrow: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-signal">
        <span>{code}</span>
        <span
          className={
            dark
              ? "text-[var(--text-on-paper-dim)]"
              : "text-[var(--text-on-ink-dim)]"
          }
        >
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
