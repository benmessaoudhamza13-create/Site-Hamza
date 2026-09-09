import type { Metadata } from "next";

export const metadata: Metadata = { title: "Mon parcours — Hamza Benmessaoud" };

export default function AProposLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
