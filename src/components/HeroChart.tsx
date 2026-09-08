"use client";

import { useMemo, useRef, useState } from "react";
import { useT } from "@/lib/i18n";
import { ui } from "@/i18n/ui";

const W = 400;
const H = 500;
const PAD = { l: 36, r: 36, t: 70, b: 70 };

// Série purement illustrative (générateur déterministe, aucune donnée réelle).
function buildSeries(n = 36) {
  let seed = 7;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280 - 0.5;
  };
  const out: number[] = [];
  let v = 100;
  for (let i = 0; i < n; i++) {
    v = v * (1 + 0.012 + rand() * 0.06);
    out.push(v);
  }
  return out;
}

export default function HeroChart() {
  const t = useT();
  const series = useMemo(() => buildSeries(), []);
  const [hover, setHover] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const min = Math.min(...series);
  const max = Math.max(...series);
  const x = (i: number) => PAD.l + (i / (series.length - 1)) * (W - PAD.l - PAD.r);
  const y = (v: number) => H - PAD.b - ((v - min) / (max - min)) * (H - PAD.t - PAD.b);

  const line = series.map((v, i) => `${i === 0 ? "M" : "L"} ${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");
  const area = `${line} L ${x(series.length - 1).toFixed(1)} ${H - PAD.b} L ${x(0).toFixed(1)} ${H - PAD.b} Z`;

  const onMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * W;
    const i = Math.round(((px - PAD.l) / (W - PAD.l - PAD.r)) * (series.length - 1));
    setHover(Math.max(0, Math.min(series.length - 1, i)));
  };

  const hv = hover !== null ? series[hover] : series[series.length - 1];
  const hx = hover !== null ? x(hover) : x(series.length - 1);
  const hy = hover !== null ? y(hv) : y(hv);
  const change = ((hv / series[0] - 1) * 100).toFixed(1);

  return (
    <div className="card hero-chart relative aspect-[4/5] w-full max-w-sm justify-self-center overflow-hidden md:max-w-none">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        className="h-full w-full"
        onMouseMove={onMove}
        onMouseLeave={() => setHover(null)}
        role="img"
        aria-label={t(ui.hero.chartCaption)}
      >
        <defs>
          <linearGradient id="heroBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ebe6d6" />
            <stop offset="100%" stopColor="#d3dccf" />
          </linearGradient>
          <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2f5c4a" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#2f5c4a" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width={W} height={H} fill="url(#heroBg)" />
        <g stroke="rgba(32,36,31,0.09)" strokeWidth="1">
          {[0.25, 0.5, 0.75].map((f) => {
            const gy = PAD.t + f * (H - PAD.t - PAD.b);
            return <line key={f} x1={PAD.l} y1={gy} x2={W - PAD.r} y2={gy} />;
          })}
        </g>
        <path d={area} fill="url(#heroArea)" className="hero-area" />
        <path
          d={line}
          fill="none"
          stroke="#2f5c4a"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="hero-line"
          pathLength={1}
        />
        {/* Curseur */}
        <g className={`transition-opacity duration-200 ${hover !== null ? "opacity-100" : "opacity-0"}`}>
          <line x1={hx} y1={PAD.t - 10} x2={hx} y2={H - PAD.b} stroke="rgba(32,36,31,0.25)" strokeDasharray="3 4" />
        </g>
        <circle cx={hx} cy={hy} r="9" fill="#2f5c4a" fillOpacity="0.15" className="hero-pulse" />
        <circle cx={hx} cy={hy} r="4.5" fill="#f3efe6" stroke="#2f5c4a" strokeWidth="2.5" />
        {/* Étiquette */}
        <g fontFamily="var(--font-mono)" fill="#20241f">
          <text x={PAD.l} y="40" fontSize="11" letterSpacing="2" fill="rgba(32,36,31,0.6)">
            {t(ui.hero.chartCaption).toUpperCase()}
          </text>
          <text x={PAD.l} y={H - 34} fontSize="30" fontFamily="var(--font-display)" fontStyle="italic">
            {hv.toFixed(1)}
          </text>
          <text x={PAD.l + 100} y={H - 34} fontSize="12" fill="#2f5c4a">
            {Number(change) >= 0 ? "+" : ""}
            {change}%
          </text>
          <text x={W - PAD.r} y={H - 34} fontSize="10" textAnchor="end" letterSpacing="1.5" fill="rgba(32,36,31,0.5)">
            {hover === null ? t(ui.hero.chartHint).toUpperCase() : `T+${hover}`}
          </text>
        </g>
      </svg>
    </div>
  );
}
