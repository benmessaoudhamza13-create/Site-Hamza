import { getAllNotesMeta } from "@/lib/revue";
import HomeView from "./HomeView";

export default function Home() {
  const notes = getAllNotesMeta();
  return <HomeView notes={notes} />;
}
