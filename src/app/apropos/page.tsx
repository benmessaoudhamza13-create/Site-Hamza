import SectionHeader from "@/components/SectionHeader";

export const metadata = { title: "À propos — Hamza Ben Messaoud" };

const formation = [
  {
    diplome: "M.Sc. Finance de marché",
    etablissement: "HEC Montréal",
    periode: "Fin prévue déc. 2027",
  },
  {
    diplome: "B.A.A. Spécialisations Finance & Économie appliquée",
    etablissement: "HEC Montréal",
    periode: "",
  },
];

const experience = [
  {
    titre: "Programme de stage FBNGP — Gestion de patrimoine",
    entreprise: "Banque Nationale du Canada",
    periode: "Été 2025 — mai 2026",
  },
  {
    titre: "Stagiaire Analyste d'affaires, Optimisation continue",
    entreprise: "Banque Nationale du Canada",
    periode: "Été 2024 — mai 2025",
  },
];

const implication = [
  {
    titre: "Bloomberg Market Concepts (BMC)",
    detail: "",
  },
  {
    titre: "Auxiliaire d'enseignement, Options et contrats à terme (FINA 20210)",
    entreprise: "HEC Montréal",
    periode: "Automne 2026",
  },
];

export default function AProposPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <SectionHeader eyebrow="À propos" title="Parcours" />

      <p className="max-w-2xl text-sm leading-relaxed text-dim">
        Je suis candidat à la maîtrise en finance de marché à HEC Montréal,
        après une double formation en finance et en économie appliquée. Ce
        parcours m&rsquo;a mené à deux stages consécutifs à la Banque
        Nationale du Canada, d&rsquo;abord en optimisation continue puis en
        gestion de patrimoine, où j&rsquo;ai développé une lecture rigoureuse
        des marchés et des enjeux qui les traversent. Ce site rassemble mes
        projets, mes lectures de marché et les outils que je construis en
        marge de mes études.
      </p>

      <div className="mt-9">
        <a
          href="/cv-hamza-benmessaoud.pdf"
          className="inline-block rounded-[4px] bg-accent px-5 py-3 font-mono text-xs uppercase tracking-widest text-white transition-opacity hover:opacity-90"
        >
          Télécharger le CV (PDF)
        </a>
      </div>

      <div className="mt-14 border-t rule pt-10">
        <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
          Formation
        </p>
        <ul className="mt-6 space-y-6">
          {formation.map((f) => (
            <li key={f.diplome}>
              <h3 className="font-display text-xl leading-snug">
                {f.diplome}
              </h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-dim">
                {f.etablissement}
                {f.periode ? ` — ${f.periode}` : ""}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14 border-t rule pt-10">
        <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
          Expérience professionnelle
        </p>
        <ul className="mt-6 space-y-6">
          {experience.map((e) => (
            <li key={e.titre}>
              <h3 className="font-display text-xl leading-snug">{e.titre}</h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-dim">
                {e.entreprise} — {e.periode}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14 border-t rule pt-10">
        <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
          Certifications & implication
        </p>
        <ul className="mt-6 space-y-6">
          {implication.map((i) => (
            <li key={i.titre}>
              <h3 className="font-display text-xl leading-snug">{i.titre}</h3>
              {i.entreprise ? (
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-dim">
                  {i.entreprise} — {i.periode}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
