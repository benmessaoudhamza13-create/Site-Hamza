const items = [
  { label: "S&P 500", value: "—" },
  { label: "CAD/USD", value: "—" },
  { label: "TX 10 ANS", value: "—" },
  { label: "TAUX BDC", value: "—" },
  { label: "TAUX FED", value: "—" },
  { label: "VIX", value: "—" },
];

export default function Ticker() {
  const row = [...items, ...items];
  return (
    <div className="w-full overflow-hidden border-y rule-ink bg-ink-2">
      <div className="flex w-max animate-[scroll_38s_linear_infinite] motion-reduce:animate-none py-2.5">
        {row.map((it, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-6 font-mono text-[11px] tracking-wider text-[var(--text-on-ink-dim)] whitespace-nowrap"
          >
            <span className="text-signal">·</span>
            <span className="opacity-70">{it.label}</span>
            <span className="text-[var(--text-on-ink)]">{it.value}</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
