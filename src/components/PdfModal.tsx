"use client";

import { useEffect } from "react";
import { X, Download, ExternalLink } from "lucide-react";
import { useT } from "@/lib/i18n";
import { ui } from "@/i18n/ui";

export default function PdfModal({
  open,
  onClose,
  src,
  title,
  toolbar,
}: {
  open: boolean;
  onClose: () => void;
  src: string;
  title: string;
  /** Contenu optionnel à gauche de la barre (ex. bascule FR/EN). */
  toolbar?: React.ReactNode;
}) {
  const t = useT();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm md:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="rise-in relative flex h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-[14px] border rule bg-card shadow-[0_24px_64px_rgba(32,36,31,0.25)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b rule px-4 py-3">
          <div className="flex min-w-0 items-center gap-4">
            {toolbar}
            <p className="truncate font-display text-base">{title}</p>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <a
              href={src}
              download
              title={t(ui.pdf.download)}
              aria-label={t(ui.pdf.download)}
              className="rounded-full p-2 text-dim transition-colors duration-200 ease hover:bg-accent/10 hover:text-accent"
            >
              <Download size={17} strokeWidth={1.75} />
            </a>
            <a
              href={src}
              target="_blank"
              rel="noreferrer"
              title={t(ui.pdf.fullscreen)}
              aria-label={t(ui.pdf.fullscreen)}
              className="rounded-full p-2 text-dim transition-colors duration-200 ease hover:bg-accent/10 hover:text-accent"
            >
              <ExternalLink size={17} strokeWidth={1.75} />
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label={t(ui.pdf.close)}
              className="rounded-full p-2 text-dim transition-colors duration-200 ease hover:bg-accent/10 hover:text-accent"
            >
              <X size={18} />
            </button>
          </div>
        </div>
        <object
          data={src}
          type="application/pdf"
          aria-label={title}
          className="h-full w-full bg-paper"
        >
          <div className="flex h-full flex-col items-center justify-center gap-5 p-8 text-center">
            <p className="max-w-sm text-sm leading-relaxed text-dim">{t(ui.pdf.fallback)}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={src} target="_blank" rel="noreferrer" className="btn btn-primary">
                <ExternalLink size={14} strokeWidth={1.75} aria-hidden />
                {t(ui.pdf.fullscreen)}
              </a>
              <a href={src} download className="btn btn-secondary">
                <Download size={14} strokeWidth={1.75} aria-hidden />
                {t(ui.pdf.download)}
              </a>
            </div>
          </div>
        </object>
      </div>
    </div>
  );
}
