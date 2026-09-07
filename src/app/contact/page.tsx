import { Mail, Phone, Link2 } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export const metadata = { title: "Contact — Hamza Ben Messaoud" };

const contacts = [
  {
    icon: Mail,
    label: "Courriel",
    value: "hamza.ben-messaoud@hec.ca",
    href: "mailto:hamza.ben-messaoud@hec.ca",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "438 630-1061",
    href: "tel:+14386301061",
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: "linkedin.com/in/hamza-benmessaoud",
    href: "https://linkedin.com/in/hamza-benmessaoud",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <SectionHeader eyebrow="Contact" title="Parlons-en" />
      <p className="max-w-xl text-sm leading-relaxed text-dim">
        Ouvert aux échanges autour des marchés des capitaux, de la gestion
        de portefeuille et de la finance corporative — coffee chats
        bienvenus.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
            className="group flex flex-col gap-4 rounded-[4px] bg-card p-6 shadow-[0_1px_2px_rgba(32,36,31,0.06)] transition-shadow hover:shadow-[0_4px_16px_rgba(32,36,31,0.1)]"
          >
            <c.icon
              className="text-accent"
              size={22}
              strokeWidth={1.75}
              aria-hidden
            />
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-dim">
                {c.label}
              </p>
              <p className="mt-1 break-words text-sm text-text group-hover:text-accent">
                {c.value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
