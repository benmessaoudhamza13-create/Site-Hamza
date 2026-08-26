export default function Footer() {
  return (
    <footer className="border-t rule-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--text-on-ink-dim)]">
          Montréal, QC — FR / EN / AR / ES
        </p>
        <div className="flex flex-wrap gap-6 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--text-on-ink-dim)]">
          <a
            className="transition-colors hover:text-signal"
            href="mailto:hamza.ben-messaoud@hec.ca"
          >
            Courriel
          </a>
          <a
            className="transition-colors hover:text-signal"
            href="https://linkedin.com/in/hamza-benmessaoud"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <span>438 630-1061</span>
        </div>
      </div>
    </footer>
  );
}
