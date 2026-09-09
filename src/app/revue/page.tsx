import type { Metadata } from "next";
import { getAllNotesMeta } from "@/lib/revue";
import RevueIndex from "./RevueIndex";

export const metadata: Metadata = {
  title: "Revue macro — Hamza Benmessaoud",
  description:
    "Notes d’analyse macroéconomique : ce qui a bougé, pourquoi ça compte, ce que je surveille ensuite.",
};

export default function RevuePage() {
  const notes = getAllNotesMeta();
  return <RevueIndex notes={notes} />;
}
