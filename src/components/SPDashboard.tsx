"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Données d'exemple pour illustrer le composant. À remplacer par un appel
// à une API en direct (Alpha Vantage, Financial Modeling Prep, Yahoo
// Finance non-officiel) via une route API Next.js — voir la note plus bas.
const data = [
  { mois: "Jan", valeur: 4780 },
  { mois: "Fév", valeur: 4980 },
  { mois: "Mar", valeur: 5100 },
  { mois: "Avr", valeur: 4950 },
  { mois: "Mai", valeur: 5240 },
  { mois: "Juin", valeur: 5460 },
  { mois: "Juil", valeur: 5600 },
];

export default function SPDashboard() {
  return (
    <div className="rounded-[4px] bg-card p-6 shadow-[0_1px_2px_rgba(32,36,31,0.06)]">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
            S&P 500 — évolution
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-dim">
            Données d&rsquo;exemple — à connecter à une API en direct
          </p>
        </div>
      </div>
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: -10, right: 10 }}>
            <defs>
              <linearGradient id="fillAccent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2f5c4a" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#2f5c4a" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="2 4"
              stroke="rgba(32,36,31,0.14)"
              vertical={false}
            />
            <XAxis
              dataKey="mois"
              stroke="rgba(32,36,31,0.45)"
              tick={{ fontFamily: "var(--font-mono)", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              stroke="rgba(32,36,31,0.45)"
              tick={{ fontFamily: "var(--font-mono)", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              domain={["dataMin - 100", "dataMax + 100"]}
            />
            <Tooltip
              contentStyle={{
                background: "#ffffff",
                border: "1px solid rgba(32,36,31,0.14)",
                fontFamily: "var(--font-mono)",
                fontSize: 12,
              }}
              labelStyle={{ color: "#20241f" }}
            />
            <Area
              type="monotone"
              dataKey="valeur"
              stroke="#2f5c4a"
              strokeWidth={2}
              fill="url(#fillAccent)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
