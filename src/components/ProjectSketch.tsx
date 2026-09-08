import {
  Target,
  PieChart,
  ArrowLeftRight,
  Droplets,
  ChartColumn,
  Leaf,
  Smartphone,
} from "lucide-react";
import type { Icone } from "@/data/projets";

const icons = {
  prediction: Target,
  portfolio: PieChart,
  fx: ArrowLeftRight,
  oil: Droplets,
  dcf: ChartColumn,
  esg: Leaf,
  retail: Smartphone,
} as const;

/** Pictogramme fin et cohérent pour chaque projet. Hérite de currentColor. */
export default function ProjectSketch({
  icone,
  className = "h-6 w-6",
}: {
  icone: Icone;
  className?: string;
}) {
  const Icon = icons[icone];
  return <Icon className={className} strokeWidth={1.5} aria-hidden />;
}
