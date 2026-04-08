import type { Metadata } from "next";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import JsonLd from "../components/JsonLd";
import Breadcrumb from "../components/Breadcrumb";
import { breadcrumbJsonLd, faqJsonLd, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Droits et devoirs du citoyen français — Tout comprendre",
  description:
    "Quels sont les droits et les devoirs du citoyen français ? Vote, fiscalité, justice, libertés, défense, école : le guide complet pour la naturalisation.",
  alternates: { canonical: "/droits-devoirs-citoyen-francais/" },
};

const droits = [
  { t: "Voter et être éligible", d: "Aux élections présidentielle, législatives, locales et européennes." },
  { t: "Liberté d'expression", d: "S'exprimer librement, dans le respect des lois." },
  { t: "Accès à la justice", d: "Être jugé par un tribunal indépendant et impartial." },
  { t: "Sécurité sociale", d: "Bénéficier de l'assurance maladie, retraite, famille." },
  { t: "Éducation gratuite", d: "Accès à l'école publique gratuite et laïque." },
  { t: "Liberté de circulation", d: "Se déplacer dans toute l'Union européenne." },
];

const devoirs = [
  { t: "Respecter les lois", d: "La loi française s'applique à tous, sans exception." },
  { t: "Payer ses impôts", d: "Contribuer aux charges publiques selon ses moyens (article 13 DDHC)." },
  { t: "Voter (devoir civique)", d: "Le vote n'est pas obligatoire mais c'est un devoir moral." },
  { t: "Participer à la défense", d: "Journée de défense et citoyenneté pour les jeunes Français." },
  { t: "Respecter les valeurs", d: "Liberté, égalité, fraternité, laïcité, dignité humaine." },
  { t: "Assister sa famille", d: "Obligation alimentaire entre parents et enfants." },
];

const faqItems = [
  {
    question: "Le vote est-il obligatoire en France ?",
    answer:
      "Non, le vote n'est pas obligatoire en France (à l'exception des sénateurs). Mais il est considéré comme un devoir civique fondamental.",
  },
  {
    question: "Que se passe-t-il si je ne paie pas mes impôts ?",
    answer:
      "Vous risquez des pénalités, des majorations, voire des poursuites pénales en cas de fraude. L'article 13 de la Déclaration des droits de l'homme rappelle que la contribution commune est indispensable.",
  },
  {
    question: "Suis-je obligé de faire la JDC (Journée Défense Citoyenneté) ?",
    answer:
      "Oui, tous les jeunes Français de 16 à 25 ans doivent y participer. Elle est obligatoire pour s'inscrire à un examen (permis, bac, etc.).",
  },
  {
    question: "Puis-je perdre la nationalité française ?",
    answer:
      "C'est très rare. Cela ne peut intervenir que dans des cas exceptionnels (engagement contre la France, fraude à la naturalisation), sous contrôle strict du juge.",
  },
];

export default function DroitsDevoirsPage() {
  const url = `${SITE_URL}/droits-devoirs-citoyen-francais/`;
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Accueil", url: SITE_URL },
            { name: "Droits et devoirs", url },
          ]),
          faqJsonLd(faqItems),
        ]}
      />

      <Breadcrumb items={[{ href: "/droits-devoirs-citoyen-francais/", label: "Droits et devoirs" }]} />

      <Hero
        badge="Citoyenneté · Naturalisation"
        title="Droits et devoirs du citoyen français"
        subtitle="Devenir Français, c'est obtenir des droits, mais aussi accepter des devoirs. Le panorama complet pour préparer l'entretien d'assimilation."
        ctaLabel="Tester mes connaissances"
      />

      <section className="container-prose mt-8">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white">Citoyen : un statut, deux faces</h2>
          <p className="mt-4 text-slate-300">
            La citoyenneté française repose sur un équilibre : la République garantit
            des droits fondamentaux, et chaque citoyen accepte des devoirs envers la
            collectivité. C'est ce contrat moral et juridique que vous reconnaissez
            en devenant Français.
          </p>
        </div>
      </section>

      <section className="container-prose mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-blue-700/40 bg-blue-700/5 p-6">
          <h3 className="text-xl font-bold text-white">Vos droits</h3>
          <ul className="mt-4 space-y-3">
            {droits.map((d) => (
              <li key={d.t}>
                <p className="text-sm font-semibold text-blue-200">{d.t}</p>
                <p className="text-sm text-slate-300">{d.d}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-red-700/40 bg-red-700/5 p-6">
          <h3 className="text-xl font-bold text-white">Vos devoirs</h3>
          <ul className="mt-4 space-y-3">
            {devoirs.map((d) => (
              <li key={d.t}>
                <p className="text-sm font-semibold text-red-200">{d.t}</p>
                <p className="text-sm text-slate-300">{d.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA
        variant="register"
        title="Devenez un citoyen averti"
        subtitle="Sur cap-citoyen.fr, accédez à toutes les fiches sur les droits, devoirs et institutions."
      />

      <FAQ items={faqItems} />
    </>
  );
}
