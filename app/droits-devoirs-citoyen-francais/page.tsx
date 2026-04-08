import type { Metadata } from "next";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import JsonLd from "../components/JsonLd";
import Breadcrumb from "../components/Breadcrumb";
import { breadcrumbJsonLd, faqJsonLd, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Droits et devoirs du citoyen français : tout comprendre",
  description:
    "Quels sont les droits et les devoirs du citoyen français ? Vote, fiscalité, justice, libertés, défense, école : le guide complet pour la naturalisation.",
  alternates: { canonical: "/droits-devoirs-citoyen-francais/" },
};

const droits = [
  { t: "Voter et être éligible", d: "Aux élections présidentielle, législatives, locales et européennes." },
  { t: "Liberté d'expression", d: "Vous parlez librement, dans le respect des lois." },
  { t: "Accès à la justice", d: "Vous êtes jugé par un tribunal indépendant et impartial." },
  { t: "Sécurité sociale", d: "Assurance maladie, retraite, allocations familiales." },
  { t: "École gratuite", d: "L'école publique est gratuite et laïque pour tous." },
  { t: "Libre circulation", d: "Vous voyagez et vous installez dans toute l'Union européenne." },
];

const devoirs = [
  { t: "Respecter les lois", d: "La loi s'applique à tous, sans exception." },
  { t: "Payer ses impôts", d: "Contribuer aux charges publiques selon ses moyens (article 13 DDHC)." },
  { t: "Voter (devoir civique)", d: "Le vote n'est pas obligatoire, mais c'est un devoir moral." },
  { t: "Participer à la défense", d: "Journée de défense et citoyenneté pour les jeunes Français." },
  { t: "Respecter les valeurs", d: "Liberté, égalité, fraternité, laïcité, dignité humaine." },
  { t: "Aider sa famille", d: "Obligation alimentaire entre parents et enfants." },
];

const faqItems = [
  {
    question: "Le vote est-il obligatoire ?",
    answer:
      "Non (sauf pour les sénateurs). Mais c'est un devoir civique très important.",
  },
  {
    question: "Et si je ne paie pas mes impôts ?",
    answer:
      "Vous risquez des pénalités, des majorations, et même des poursuites en cas de fraude. La contribution commune est rappelée dès 1789 dans la Déclaration des droits de l'homme.",
  },
  {
    question: "La JDC, c'est obligatoire ?",
    answer:
      "Oui. Tous les jeunes Français de 16 à 25 ans doivent y participer. Sans elle, pas de permis ni de bac.",
  },
  {
    question: "Peut-on perdre la nationalité française ?",
    answer:
      "Très rarement. Seulement dans des cas exceptionnels (engagement contre la France, fraude à la naturalisation), et toujours sous contrôle du juge.",
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
        highlight="citoyen français"
        subtitle="Devenir Français, c'est gagner des droits, mais aussi accepter des devoirs. Voici le panorama, en clair."
        ctaLabel="Tester mes connaissances"
      />

      <section className="container-prose mt-8">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-lg font-bold text-white sm:text-xl">Un statut, deux faces</h2>
          <p className="mt-4 text-slate-300">
            La citoyenneté française, c'est un équilibre. La République garantit
            vos droits, et vous acceptez des devoirs envers la collectivité.
            C'est ce contrat que vous signez en devenant Français.
          </p>
        </div>
      </section>

      <section className="container-prose mt-6 sm:mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-blue-700/40 bg-blue-700/5 p-5">
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
        <div className="rounded-2xl border border-red-700/40 bg-red-700/5 p-5">
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
        subtitle="Sur cap-citoyen.fr, retrouvez toutes les fiches sur les droits, les devoirs et les institutions."
      />

      <FAQ items={faqItems} />
    </>
  );
}
