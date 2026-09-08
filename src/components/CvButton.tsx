"use client";

import { useState } from "react";
import { FileText } from "lucide-react";
import PdfModal from "@/components/PdfModal";
import { useLang, useT, type Lang } from "@/lib/i18n";
import { ui } from "@/i18n/ui";

const CV_PATHS: Record<Lang, string> = {
  fr: "/documents/Hamza_CV_FR.pdf",
  en: "/documents/Hamza_CV_EN.pdf",
};

/** Bouton « Mon CV » : ouvre la visionneuse avec bascule FR / EN. */
export default function CvButton({ className = "btn btn-primary" }: { className?: string }) {
  const t = useT();
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const [cvLang, setCvLang] = useState<Lang>(lang);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setCvLang(lang);
          setOpen(true);
        }}
        className={className}
      >
        <FileText size={14} strokeWidth={1.75} aria-hidden />
        {t(ui.apropos.cv)}
      </button>
      <PdfModal
        open={open}
        onClose={() => setOpen(false)}
        src={CV_PATHS[cvLang]}
        title={`${t(ui.apropos.cvTitle)} (${cvLang.toUpperCase()})`}
        toolbar={
          <div
            role="group"
            aria-label="FR / EN"
            className="flex shrink-0 overflow-hidden rounded-full border rule font-mono text-[10px] uppercase tracking-widest"
          >
            {(["fr", "en"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setCvLang(l)}
                aria-pressed={cvLang === l}
                className={`px-3 py-1 transition-colors duration-200 ease ${
                  cvLang === l ? "bg-accent text-white" : "text-dim hover:text-accent"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        }
      />
    </>
  );
}
