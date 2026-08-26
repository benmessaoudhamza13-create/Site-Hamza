import SectionHeader from "@/components/SectionHeader";

export const metadata = { title: "Contact — Hamza Ben Messaoud" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <SectionHeader code="06" eyebrow="Contact" title="Parlons-en" />
      <p className="max-w-xl text-sm leading-relaxed text-[var(--text-on-ink-dim)]">
        Ouvert aux échanges autour des marchés des capitaux, de la gestion
        de portefeuille et de la finance corporative — coffee chats
        bienvenus.
      </p>
      <div className="mt-8 space-y-4 border-t rule-ink pt-8 font-mono text-sm">
        <p>
          <span className="text-signal">Courriel — </span>
          <a
            className="hover:text-signal"
            href="mailto:hamza.ben-messaoud@hec.ca"
          >
            hamza.ben-messaoud@hec.ca
          </a>
        </p>
        <p>
          <span className="text-signal">Téléphone — </span>438 630-1061
        </p>
        <p>
          <span className="text-signal">LinkedIn — </span>
          <a
            className="hover:text-signal"
            href="https://linkedin.com/in/hamza-benmessaoud"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/hamza-benmessaoud
          </a>
        </p>
      </div>
    </div>
  );
}
