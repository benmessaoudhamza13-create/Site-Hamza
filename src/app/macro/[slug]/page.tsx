import { notFound } from "next/navigation";
import { revuesMacro } from "@/data/macro";
import RevueView from "./RevueView";

export function generateStaticParams() {
  return revuesMacro.map((r) => ({ slug: r.slug }));
}

export default async function RevueDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const revue = revuesMacro.find((r) => r.slug === slug);
  if (!revue) return notFound();
  return <RevueView revue={revue} />;
}
