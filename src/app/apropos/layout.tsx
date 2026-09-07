import type { Metadata } from "next";

export const metadata: Metadata = { title: "Mon parcours — Hamza Ben Messaoud" };

export default function AProposLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
