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
  title: "Valeurs de la République française — Liberté, Égalité, Fraternité, Laïcité",
  description:
    "Comprendre les valeurs de la République française : liberté, égalité, fraternité, laïcité, démocratie, fraternité. Indispensable pour la naturalisation.",
  alternates: { canonical: "/valeurs-republique-francaise/" },
};

const valeurs = getQuestionsByCategory("valeurs");

const principes = [
  {
    title: "Liberté",
    color: "border-blue-700/40 bg-blue-700/5",
    description:
      "Liberté d'expression, de conscience, de circulation, de réunion, de la presse. C'est le premier mot de la devise et le fondement de toutes les autres valeurs.",
  },
  {
    title: "Égalité",
    color: "border-slate-300/30 bg-slate-300/5",
    description:
      "Égalité devant la loi sans distinction d'origine, de religion, de sexe ou d'orientation. Égalité hommes-femmes inscrite dans la Constitution.",
  },
  {
    title: "Fraternité",
    color: "border-red-700/40 bg-red-700/5",
    description:
      "Solidarité entre les citoyens, refus du racisme et de la discrimination, devoir d'aider son prochain. La fraternité est la condition d'une société unie.",
  },
  {
    title: "Laïcité",
    color: "border-blue-700/40 bg-blue-700/5",
    description:
      "Séparation des religions et de l'État (loi de 1905), liberté de conscience, neutralité de l'État. La laïcité protège tous les croyants et tous les non-croyants.",
  },
];

const faqItems = [
  {
    question: "Pourquoi la laïcité est-elle si importante en France ?",
    answer:
      "Parce qu'elle garantit la liberté de conscience pour tous, et l'égalité devant la loi sans distinction de religion. Elle est la condition d'une République neutre et apaisée.",
  },
  {
    question: "L'égalité hommes-femmes est-elle un principe légal ?",
    answer:
      "Oui, elle est inscrite dans la Constitution et dans de nombreuses lois. Toute discrimination fondée sur le sexe est interdite et sanctionnée.",
  },
  {
    question: "Que faire si une coutume entre en conflit avec une loi française ?",
    answer:
      "La loi française prévaut. Aucune coutume, aucune tradition ne peut justifier une atteinte aux droits fondamentaux.",
  },
  {
    question: "La liberté d'expression a-t-elle des limites ?",
    answer:
      "Oui, elle s'arrête là où commencent l'incitation à la haine, l'injure raciste, l'apologie du terrorisme ou la diffamation. Mais la critique, même dure, est protégée.",
  },
  {
    question: "Que signifie « République sociale » ?",
    answer:
      "Que la République garantit la solidarité entre citoyens via la Sécurité sociale, l'éducation gratuite, les minima sociaux, l'assurance chômage, etc.",
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
        title="Les valeurs de la République française"
        highlight="valeurs"
        subtitle="Liberté, Égalité, Fraternité, Laïcité : ce que ces mots signifient concrètement, et pourquoi ils sont au cœur de l'entretien d'assimilation."
        ctaLabel="S'entraîner sur les valeurs"
      />

      <section className="container-prose mt-8">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white">Pourquoi les valeurs sont-elles centrales ?</h2>
          <p className="mt-4 text-slate-300">
            Devenir Français, c'est adhérer à un projet collectif. Les valeurs de la
            République ne sont pas des slogans : elles structurent les lois, l'école,
            la justice et la vie quotidienne. L'agent de préfecture vérifiera votre
            compréhension réelle de ces principes — et pas seulement votre capacité
            à les réciter.
          </p>
        </div>
      </section>

      <section className="container-prose mt-12 grid gap-5 md:grid-cols-2">
        {principes.map((p) => (
          <div key={p.title} className={`rounded-2xl border p-6 ${p.color}`}>
            <h3 className="text-2xl font-bold text-white">{p.title}</h3>
            <p className="mt-3 text-sm text-slate-200">{p.description}</p>
          </div>
        ))}
      </section>

      <section className="container-prose mt-20">
        <SectionTitle
          eyebrow="Quiz"
          title="Questions sur les valeurs républicaines"
          description="Les questions du QCM consacrées aux valeurs de la République, avec corrigés."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {valeurs.map((q, i) => (
            <QCMQuiz key={q.id} question={q} index={i} />
          ))}
        </div>
      </section>

      <CTA
        variant="register"
        title="Préparez sereinement l'entretien d'assimilation"
        subtitle="Inscription gratuite sur cap-citoyen.fr — accédez aux fiches officielles et au mode audio."
      />

      <FAQ items={faqItems} />
    </>
  );
}
