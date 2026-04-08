import type { Metadata } from "next";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import JsonLd from "../components/JsonLd";
import Breadcrumb from "../components/Breadcrumb";
import SectionTitle from "../components/SectionTitle";
import { breadcrumbJsonLd, faqJsonLd, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Demande de nationalité française : démarches 2026",
  description:
    "Le guide complet pour demander la nationalité française : conditions, pièces à fournir, étapes, délais. Préparez votre dossier sereinement.",
  alternates: { canonical: "/nationalite-francaise-demande/" },
};

const conditions = [
  { t: "Résidence en France", d: "Au moins 5 ans en France (2 ans après des études supérieures réussies ici, parfois sans délai en cas de mariage)." },
  { t: "Niveau de français B1", d: "Oral et écrit, prouvé par un diplôme ou un test reconnu (TCF, TEF, DELF B1...)." },
  { t: "Intégration républicaine", d: "Vous adhérez aux valeurs de la République. C'est ce que l'agent vérifie en entretien." },
  { t: "Casier propre", d: "Aucune condamnation qui empêche d'obtenir la nationalité. Le casier est vérifié." },
  { t: "Ressources stables", d: "Des revenus réguliers et suffisants, en général issus du travail." },
];

const documents = [
  "Pièce d'identité (passeport, titre de séjour)",
  "Acte de naissance traduit et légalisé",
  "Justificatifs de domicile (5 dernières années)",
  "Avis d'imposition (3 dernières années)",
  "Fiches de paie ou justificatifs d'activité",
  "Certificat de niveau de français B1",
  "Casier judiciaire du pays d'origine",
  "Documents relatifs à la situation familiale",
];

const faqItems = [
  {
    question: "Combien de temps pour devenir Français ?",
    answer:
      "Comptez 18 à 24 mois entre le dépôt du dossier et le décret de naturalisation. Les délais varient pas mal selon les préfectures.",
  },
  {
    question: "Combien ça coûte ?",
    answer:
      "55 € de timbre fiscal pour la naturalisation par décret. Si vous passez par le mariage, c'est gratuit.",
  },
  {
    question: "Je peux garder ma nationalité d'origine ?",
    answer:
      "Côté France, oui : la double nationalité est acceptée. Vérifiez quand même côté pays d'origine, certains ne l'autorisent pas.",
  },
  {
    question: "Et si ma demande est refusée ?",
    answer:
      "Vous avez 2 mois pour faire un recours gracieux, puis vous pouvez porter l'affaire devant le tribunal administratif.",
  },
  {
    question: "Naturalisation ou déclaration, quelle différence ?",
    answer:
      "La naturalisation par décret reste à la discrétion de l'État. La déclaration (notamment pour les conjoints de Français) est un droit, sous conditions.",
  },
];

export default function DemandeNationalitePage() {
  const url = `${SITE_URL}/nationalite-francaise-demande/`;
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Accueil", url: SITE_URL },
            { name: "Demande de nationalité", url },
          ]),
          faqJsonLd(faqItems),
        ]}
      />

      <Breadcrumb items={[{ href: "/nationalite-francaise-demande/", label: "Demande de nationalité" }]} />

      <Hero
        badge="Guide démarches 2026"
        title="Demande de nationalité française : le guide"
        highlight="nationalité française"
        subtitle="Conditions, pièces à fournir, étapes, délais, recours : ce qu'il faut savoir pour monter votre dossier sans vous tromper."
        ctaLabel="Préparer mon entretien"
      />

      <section className="container-prose mt-8">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-lg font-bold text-white sm:text-xl">Cinq conditions à cocher</h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {conditions.map((c, i) => (
            <div key={c.t} className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-4 sm:p-5 shadow-[0_18px_45px_rgba(2,8,23,0.3)]">
              <span className="text-xs font-bold text-blue-400">0{i + 1}</span>
              <h3 className="mt-1 text-base font-semibold text-white">{c.t}</h3>
              <p className="mt-2 text-sm text-slate-400">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-prose mt-8 sm:mt-10">
        <SectionTitle
          eyebrow="Pièces à fournir"
          title="Le dossier type"
          description="Préparez tout avant de déposer la demande, vous gagnerez des semaines."
        />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {documents.map((d) => (
            <li
              key={d}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-4 text-sm text-slate-200 shadow-[0_8px_22px_rgba(2,8,23,0.3)]"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-700/30 text-xs text-blue-200">
                ✓
              </span>
              {d}
            </li>
          ))}
        </ul>
      </section>

      <section className="container-prose mt-8 sm:mt-10">
        <SectionTitle
          eyebrow="Procédure"
          title="Du dépôt au décret, en cinq étapes"
        />
        <ol className="mt-8 space-y-4">
          {[
            "Préparer le dossier complet (pièces d'identité, justificatifs, casier judiciaire).",
            "Déposer la demande en préfecture ou sur la plateforme régionale (selon votre département).",
            "Passer l'entretien d'assimilation avec un agent.",
            "Attendre l'avis favorable de la préfecture, transmis au ministère de l'Intérieur.",
            "Recevoir le décret de naturalisation publié au Journal officiel.",
          ].map((step, i) => (
            <li key={step} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-4 shadow-[0_18px_45px_rgba(2,8,23,0.3)]">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                {i + 1}
              </span>
              <p className="text-sm text-slate-200">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <CTA
        variant="register"
        title="Préparez l'entretien sereinement"
        subtitle="Avec QCM Assimilation et cap-citoyen.fr, vous arrivez en préfecture avec une longueur d'avance."
      />

      <FAQ items={faqItems} />
    </>
  );
}
