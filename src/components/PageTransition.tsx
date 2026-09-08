"use client";

import { usePathname } from "next/navigation";

/** Fondu + léger glissement à chaque changement de page. */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="page-enter flex-1">
      {children}
    </div>
  );
}
