import type { Metadata } from "next";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import QCMQuiz from "../components/QCMQuiz";
import JsonLd from "../components/JsonLd";
import Breadcrumb from "../components/Breadcrumb";
import SectionTitle from "../components/SectionTitle";
import { getQuestionsByCategory } from "../lib/questions";
import { breadcrumbJsonLd, faqJsonLd, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Valeurs de la République française : Liberté, Égalité, Fraternité, Laïcité",
  description:
    "Comprendre les valeurs de la République française : liberté, égalité, fraternité, laïcité, démocratie. Au cœur de l'entretien de naturalisation.",
  alternates: { canonical: "/valeurs-republique-francaise/" },
};

const valeurs = getQuestionsByCategory("valeurs");

const principes = [
  {
    title: "Liberté",
    color: "border-blue-700/40 bg-blue-700/5",
    description:
      "Liberté d'expression, de conscience, de circulation, de réunion, de la presse. C'est le premier mot de la devise, et la base de tout le reste.",
  },
  {
    title: "Égalité",
    color: "border-slate-300/30 bg-slate-300/5",
    description:
      "Égalité devant la loi, sans distinction d'origine, de religion, de sexe ou d'orientation. L'égalité femmes-hommes est inscrite dans la Constitution.",
  },
  {
    title: "Fraternité",
    color: "border-red-700/40 bg-red-700/5",
    description:
      "La solidarité entre citoyens, le refus du racisme, le devoir d'aider son prochain. C'est ce qui tient le pays ensemble.",
  },
  {
    title: "Laïcité",
    color: "border-blue-700/40 bg-blue-700/5",
    description:
      "Séparation des religions et de l'État (loi de 1905), liberté de conscience, neutralité de l'État. Elle protège tout le monde, croyants comme non-croyants.",
  },
];

const faqItems = [
  {
    question: "Pourquoi la laïcité est si importante ?",
    answer:
      "Parce qu'elle garantit à chacun la liberté de croire ou de ne pas croire, et l'égalité devant la loi quelle que soit sa religion. C'est ce qui permet à la République de rester neutre et apaisée.",
  },
  {
    question: "L'égalité femmes-hommes, c'est dans la loi ?",
    answer:
      "Oui, c'est inscrit dans la Constitution et dans plein de lois. Toute discrimination basée sur le sexe est interdite et punie.",
  },
  {
    question: "Et si une coutume va contre la loi française ?",
    answer:
      "La loi française passe avant tout. Aucune coutume, aucune tradition ne peut servir d'excuse pour bafouer les droits fondamentaux.",
  },
  {
    question: "La liberté d'expression a-t-elle des limites ?",
    answer:
      "Oui : pas d'incitation à la haine, pas d'injure raciste, pas d'apologie du terrorisme, pas de diffamation. La critique, même dure, reste protégée.",
  },
  {
    question: "Que veut dire « République sociale » ?",
    answer:
      "Que la République garantit la solidarité entre citoyens : Sécurité sociale, école gratuite, minima sociaux, assurance chômage, etc.",
  },
];

export default function ValeursPage() {
  const url = `${SITE_URL}/valeurs-republique-francaise/`;
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Accueil", url: SITE_URL },
            { name: "Valeurs de la République", url },
          ]),
          faqJsonLd(faqItems),
        ]}
      />

      <Breadcrumb items={[{ href: "/valeurs-republique-francaise/", label: "Valeurs de la République" }]} />

      <Hero
        badge="Valeurs républicaines"
        title="Les valeurs de la République, en clair"
        highlight="valeurs"
        subtitle="Liberté, Égalité, Fraternité, Laïcité : ce que ces mots veulent dire concrètement, et pourquoi ils reviennent toujours en entretien."
        ctaLabel="Découvrir quiz, audio et mode scroll"
      />

      <section className="container-prose mt-8">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-lg font-bold text-white sm:text-xl">Pourquoi les valeurs comptent autant</h2>
          <p className="mt-4 text-slate-300">
            Devenir Français, c'est adhérer à un projet collectif. Ces valeurs ne
            sont pas des slogans : elles structurent les lois, l'école, la justice
            et la vie de tous les jours. L'agent vérifiera que vous les comprenez
            vraiment, pas que vous savez les réciter.
          </p>
        </div>
      </section>

      <section className="container-prose mt-6 sm:mt-8 grid gap-5 md:grid-cols-2">
        {principes.map((p) => (
          <div key={p.title} className={`rounded-2xl border p-4 sm:p-5 ${p.color}`}>
            <h3 className="text-lg font-bold text-white sm:text-xl">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-200">{p.description}</p>
          </div>
        ))}
      </section>

      <section className="container-prose mt-10">
        <SectionTitle
          eyebrow="Quiz"
          title="Questions sur les valeurs républicaines"
          description="Les questions du QCM sur les valeurs, avec corrigés."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {valeurs.map((q, i) => (
            <QCMQuiz key={q.id} question={q} index={i} />
          ))}
        </div>
      </section>

      <CTA
        variant="register"
        title="Préparez l'entretien sereinement"
        subtitle="Inscription rapide sur cap-citoyen.fr : accès aux fiches et au mode audio."
      />

      <FAQ items={faqItems} />
    </>
  );
}
