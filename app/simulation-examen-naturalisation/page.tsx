import type { Metadata } from "next";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import JsonLd from "../components/JsonLd";
import Breadcrumb from "../components/Breadcrumb";
import SectionTitle from "../components/SectionTitle";
import { breadcrumbJsonLd, faqJsonLd, quizJsonLd, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Simulation d'examen de naturalisation française 2026",
  description:
    "Passez une simulation d'examen de naturalisation en conditions réelles : 20 questions, 15 minutes, score immédiat. Identique à l'entretien d'assimilation en préfecture.",
  alternates: { canonical: "/simulation-examen-naturalisation/" },
};

const faqItems = [
  {
    question: "Comment se passe l'examen de naturalisation en préfecture ?",
    answer:
      "Vous êtes reçu individuellement par un agent en préfecture. Il vérifie votre dossier puis vous pose des questions sur la France et sur votre vie. L'entretien dure de 30 minutes à 1 heure.",
  },
  {
    question: "La simulation est-elle vraiment chronométrée ?",
    answer:
      "Oui : 15 minutes pour 20 questions, soit 45 secondes par question. C'est le rythme réel d'un échange en entretien d'assimilation.",
  },
  {
    question: "Que se passe-t-il si je dépasse le temps ?",
    answer:
      "Vous obtenez quand même votre score, mais les questions non répondues comptent comme fausses. C'est un bon indicateur de votre rapidité.",
  },
  {
    question: "Puis-je voir mes erreurs après la simulation ?",
    answer:
      "Oui. Sur cap-citoyen.fr, vous obtenez le détail question par question, avec la bonne réponse et l'explication.",
  },
  {
    question: "Combien de simulations puis-je faire ?",
    answer:
      "Autant que vous le souhaitez. À chaque session, le tirage des questions est différent.",
  },
];

const steps = [
  {
    n: "01",
    title: "Vérification du dossier",
    description:
      "L'agent vous demande pièce d'identité, justificatifs de domicile, fiches de paie, casier judiciaire et certificat de niveau de français.",
  },
  {
    n: "02",
    title: "Présentation de vous-même",
    description:
      "Vous expliquez votre parcours : pays d'origine, arrivée en France, famille, études, profession, projets.",
  },
  {
    n: "03",
    title: "Questions sur la France",
    description:
      "L'agent pose 15 à 25 questions issues du Livret du citoyen : symboles, histoire, institutions, valeurs.",
  },
  {
    n: "04",
    title: "Adhésion aux valeurs",
    description:
      "L'agent évalue votre adhésion à la laïcité, à l'égalité, à la liberté, et votre volonté de devenir Français.",
  },
];

export default function SimulationPage() {
  const url = `${SITE_URL}/simulation-examen-naturalisation/`;
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Accueil", url: SITE_URL },
            { name: "Simulation d'examen", url },
          ]),
          quizJsonLd({
            name: "Simulation d'examen de naturalisation",
            description:
              "Simulation chronométrée type préfecture : 20 questions en 15 minutes.",
            url,
            numQuestions: 20,
          }),
          faqJsonLd(faqItems),
        ]}
      />

      <Breadcrumb items={[{ href: "/simulation-examen-naturalisation/", label: "Simulation d'examen" }]} />

      <Hero
        badge="Mode chronométré · 15 minutes"
        title="Simulation d'examen de naturalisation"
        highlight="Simulation"
        subtitle="Passez l'examen comme en préfecture : 20 questions, 15 minutes, score immédiat. La méthode la plus efficace pour vaincre le stress."
        ctaLabel="Lancer la simulation"
        ctaHref="https://cap-citoyen.fr/quiz"
      />

      <section className="container-prose mt-8">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white">Comment se passe l'examen le jour J ?</h2>
          <p className="mt-4 text-slate-300">
            L'entretien d'assimilation se déroule en préfecture, dans un bureau, en
            face-à-face avec un agent. Il dure entre 30 et 60 minutes et alterne
            quatre grandes phases. Notre simulation reprend la troisième phase, qui
            est la plus stressante : les questions sur la France.
          </p>
        </div>
      </section>

      <section className="container-prose mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="rounded-[1.6rem] border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-7 shadow-[0_18px_45px_rgba(2,8,23,0.4)]">
            <span className="text-xs font-bold text-blue-400">Étape {s.n}</span>
            <h3 className="mt-2 text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{s.description}</p>
          </div>
        ))}
      </section>

      <section className="container-prose mt-20">
        <SectionTitle
          eyebrow="Pourquoi simuler"
          title="3 bonnes raisons de passer une simulation à blanc"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { t: "Vaincre le stress", d: "Plus vous le ferez, moins le jour J vous fera peur." },
            { t: "Identifier vos lacunes", d: "Le score détaillé vous montre où vous devez réviser." },
            { t: "Travailler la rapidité", d: "Apprenez à répondre en moins d'une minute, comme à l'oral." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-6 shadow-[0_18px_45px_rgba(2,8,23,0.3)]">
              <h3 className="text-base font-semibold text-white">{c.t}</h3>
              <p className="mt-2 text-sm text-slate-400">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA
        variant="quiz"
        title="Prêt à vous tester ?"
        subtitle="Lancez la simulation chronométrée sur cap-citoyen.fr. Score immédiat, corrigés détaillés."
      />

      <FAQ items={faqItems} />
    </>
  );
}
