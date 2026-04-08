import type { Metadata } from "next";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import JsonLd from "../components/JsonLd";
import Breadcrumb from "../components/Breadcrumb";
import SectionTitle from "../components/SectionTitle";
import AlertBlock from "../components/AlertBlock";
import MidPageCTA from "../components/MidPageCTA";
import { breadcrumbJsonLd, faqJsonLd, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Questions d'entretien de naturalisation : la liste 2026",
  description:
    "Les questions qui reviennent vraiment en entretien d'assimilation : symboles, valeurs, vie personnelle, intégration. Conseils et exemples de réponses.",
  alternates: { canonical: "/questions-entretien-naturalisation/" },
};

const themes = [
  {
    title: "Sur vous-même",
    color: "border-blue-700/40",
    questions: [
      "Pouvez-vous vous présenter en quelques phrases ?",
      "Depuis combien de temps vivez-vous en France ?",
      "Pourquoi voulez-vous devenir Français ?",
      "Quelle est votre profession et où travaillez-vous ?",
      "Avez-vous de la famille en France ? En dehors de France ?",
      "Quels sont vos projets d'avenir en France ?",
    ],
  },
  {
    title: "Sur la France",
    color: "border-slate-300/30",
    questions: [
      "Quelle est la devise de la République ?",
      "Quels sont les symboles de la République française ?",
      "Qui est l'actuel Président de la République ?",
      "Quels sont les trois pouvoirs de l'État ?",
      "Quelles sont les couleurs du drapeau français ?",
      "Qu'est-ce que la laïcité ?",
      "Quelle est la fête nationale française et que commémore-t-elle ?",
    ],
  },
  {
    title: "Sur les valeurs",
    color: "border-red-700/40",
    questions: [
      "Que signifie pour vous « Liberté, Égalité, Fraternité » ?",
      "Que pensez-vous de l'égalité entre les femmes et les hommes ?",
      "Que pensez-vous du principe de laïcité ?",
      "Êtes-vous prêt à accepter toutes les valeurs de la République ?",
      "Comment réagiriez-vous si une loi française entrait en conflit avec une coutume ?",
    ],
  },
  {
    title: "Sur votre intégration",
    color: "border-blue-700/40",
    questions: [
      "Avez-vous des amis français ?",
      "Participez-vous à la vie associative ou citoyenne ?",
      "Connaissez-vous votre maire ?",
      "Êtes-vous abonné à un média français ?",
      "Quels sont vos loisirs en France ?",
    ],
  },
];

const faqItems = [
  {
    question: "Combien de questions, en moyenne ?",
    answer:
      "L'entretien dure entre 30 et 60 minutes. Comptez 15 à 25 questions, qui alternent vie personnelle et France.",
  },
  {
    question: "Faut-il apprendre par cœur ?",
    answer:
      "Non, surtout pas. L'agent veut voir si vous comprenez et si vous savez parler français. Reformuler avec vos mots vaut mille fois mieux que réciter.",
  },
  {
    question: "Une mauvaise réponse est éliminatoire ?",
    answer:
      "Non. Une mauvaise réponse ne fait pas tomber le dossier. L'agent regarde votre niveau global, votre compréhension et votre adhésion aux valeurs.",
  },
  {
    question: "L'entretien est-il toujours en français ?",
    answer:
      "Oui, du début à la fin. C'est aussi un test de français, niveau B1 oral et écrit minimum.",
  },
  {
    question: "Et si je ne comprends pas une question ?",
    answer:
      "Demandez poliment à l'agent de reformuler ou de répéter doucement. C'est mille fois mieux que de répondre à côté.",
  },
];

export default function QuestionsEntretienPage() {
  const url = `${SITE_URL}/questions-entretien-naturalisation/`;
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Accueil", url: SITE_URL },
            { name: "Questions d'entretien", url },
          ]),
          faqJsonLd(faqItems),
        ]}
      />

      <Breadcrumb items={[{ href: "/questions-entretien-naturalisation/", label: "Questions d'entretien" }]} />

      <Hero
        badge="Entretien d'assimilation"
        title="Les questions qui reviennent en entretien"
        highlight="questions"
        subtitle="Quatre familles de questions, plus de 25 exemples concrets pour ne pas être pris au dépourvu devant l'agent."
        ctaLabel="Faire le test complet"
        ctaHref="https://cap-citoyen.fr/quiz"
      />

      <AlertBlock
        title="L'entretien de naturalisation ne s'improvise pas"
        message="Chaque année, des candidats échouent non par manque de volonté, mais par manque de préparation adaptée aux attentes réelles du jury."
      />

      <section className="container-prose mt-8">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-lg font-bold text-white sm:text-xl">À quoi vous attendre</h2>
          <p className="mt-4 text-slate-300">
            L'entretien, c'est surtout une discussion. L'agent ne cherche pas à
            vous piéger : il veut juste savoir si vous comprenez la France, si vous
            adhérez à ses valeurs, et si votre français tient la route. Notre
            conseil : restez sincère, gardez votre calme, et parlez posément.
          </p>
          <p className="mt-3 text-slate-300">
            Les questions ci-dessous reviennent presque tout le temps. Préparez
            votre réponse à voix haute, avec vos mots à vous. Vous y gagnerez en
            confiance.
          </p>
        </div>
      </section>

      <section className="container-prose mt-8 grid gap-4 md:grid-cols-2">
        {themes.map((t) => (
          <div
            key={t.title}
            className={`rounded-2xl border bg-slate-900/60 p-4 sm:p-5 ${t.color}`}
          >
            <h3 className="text-xl font-bold text-white">{t.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {t.questions.map((q) => (
                <li key={q} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" aria-hidden />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <MidPageCTA />

      <section className="container-prose mt-10">
        <SectionTitle
          eyebrow="Méthode"
          title="3 conseils pour bien répondre"
        />
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {[
            {
              t: "Soyez précis et sincère",
              d: "Donnez des dates, des noms, des exemples concrets. Pas de phrases vagues.",
            },
            {
              t: "Reformulez avec vos mots",
              d: "Une phrase simple et naturelle vaut bien mieux qu'un texte récité.",
            },
            {
              t: "Affirmez vos valeurs",
              d: "Sur la laïcité ou l'égalité, soyez clair et net. Pas de demi-réponse.",
            },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-4 sm:p-5 shadow-[0_18px_45px_rgba(2,8,23,0.3)]">
              <h3 className="text-base font-semibold text-white">{c.t}</h3>
              <p className="mt-2 text-sm text-slate-400">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA
        variant="register"
        title="Préparez l'oral à votre rythme"
        subtitle="Sur cap-citoyen.fr, vous écoutez des réponses modèles et vous vous entraînez quand vous voulez."
      />

      <FAQ items={faqItems} />
    </>
  );
}
