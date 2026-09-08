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
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl tracking-tight md:text-4xl">
          {title}
        </h2>
      </div>
      {aside}
    </div>
  );
}
