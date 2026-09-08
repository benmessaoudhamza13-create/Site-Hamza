/** Glyphe « in » dessiné en interne (lucide ne fournit plus d'icônes de marque). */
export default function LinkedInGlyph({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.2 8h4.6v14H.2V8zm7.5 0h4.4v1.9h.06c.61-1.16 2.1-2.38 4.33-2.38 4.63 0 5.49 3.05 5.49 7.02V22h-4.6v-6.6c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V22H7.7V8z" />
    </svg>
  );
}
