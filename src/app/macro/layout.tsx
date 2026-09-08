import type { Metadata } from "next";

export const metadata: Metadata = { title: "Revue macro — Hamza Ben Messaoud" };

export default function MacroLayout({ children }: { children: React.ReactNode }) {
  return children;
}
