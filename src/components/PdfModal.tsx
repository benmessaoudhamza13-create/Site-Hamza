"use client";

import { useEffect, useRef, useState } from "react";
import { X, Download, ExternalLink, Printer, Share2, Check } from "lucide-react";
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
  const frame = useRef<HTMLIFrameElement>(null);
  const [copied, setCopied] = useState(false);

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

  // Masque la barre d'outils du lecteur PDF intégré (Chrome/Edge) pour un
  // rendu « document » plutôt que « fichier ».
  const viewerSrc = `${src}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`;

  const print = () => {
    try {
      const w = frame.current?.contentWindow;
      if (w) {
        w.focus();
        w.print();
        return;
      }
    } catch {}
    window.open(src, "_blank", "noopener");
  };

  const share = async () => {
    const url = new URL(src, window.location.origin).toString();
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
        return;
      }
    } catch {}
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <div
      className="fade-in fixed inset-0 z-50 flex items-center justify-center bg-[rgba(14,28,23,0.72)] p-3 backdrop-blur-md md:p-8"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="rise-in relative flex h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-[var(--radius-card)] bg-paper-2 shadow-[var(--shadow-modal)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barre sobre : titre à gauche, actions à droite */}
        <div className="flex items-center justify-between gap-4 border-b rule bg-card/70 px-4 py-2.5 backdrop-blur-sm md:px-5">
          <div className="flex min-w-0 items-center gap-4">
            {toolbar}
            <p className="truncate font-display text-base">{title}</p>
          </div>
          <div className="flex shrink-0 items-center gap-0.5">
            <a href={src} download className="icon-btn" title={t(ui.pdf.download)} aria-label={t(ui.pdf.download)}>
              <Download size={17} strokeWidth={1.6} />
            </a>
            <button type="button" onClick={print} className="icon-btn" title={t(ui.pdf.print)} aria-label={t(ui.pdf.print)}>
              <Printer size={17} strokeWidth={1.6} />
            </button>
            <button
              type="button"
              onClick={share}
              className="icon-btn"
              title={copied ? t(ui.pdf.copied) : t(ui.pdf.share)}
              aria-label={t(ui.pdf.share)}
            >
              {copied ? <Check size={17} strokeWidth={1.8} className="text-accent" /> : <Share2 size={17} strokeWidth={1.6} />}
            </button>
            <a href={src} target="_blank" rel="noreferrer" className="icon-btn" title={t(ui.pdf.fullscreen)} aria-label={t(ui.pdf.fullscreen)}>
              <ExternalLink size={17} strokeWidth={1.6} />
            </a>
            <span aria-hidden className="mx-1 h-5 w-px bg-[var(--line)]" />
            <button type="button" onClick={onClose} className="icon-btn" aria-label={t(ui.pdf.close)}>
              <X size={18} strokeWidth={1.6} />
            </button>
          </div>
        </div>

        {/* Le document, sur fond papier, comme une feuille posée */}
        <div className="relative flex-1 bg-paper-2 p-2 md:p-4">
          <iframe
            ref={frame}
            src={viewerSrc}
            title={title}
            className="h-full w-full rounded-lg bg-white shadow-[0_2px_12px_rgba(27,33,30,0.12)]"
          />
        </div>

        <p className="label flex items-center justify-center gap-3 border-t rule bg-card/70 px-4 py-2">
          <span>{t(ui.pdf.notShown)}</span>
          <a href={src} target="_blank" rel="noreferrer" className="text-accent underline-offset-4 hover:underline">
            {t(ui.pdf.fullscreen)}
          </a>
          <span aria-hidden>·</span>
          <a href={src} download className="text-accent underline-offset-4 hover:underline">
            {t(ui.pdf.download)}
          </a>
        </p>
      </div>
    </div>
  );
}
