import type { Metadata } from "next";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import JsonLd from "../components/JsonLd";
import Breadcrumb from "../components/Breadcrumb";
import SectionTitle from "../components/SectionTitle";
import { breadcrumbJsonLd, faqJsonLd, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Questions d'entretien de naturalisation — Liste 2026",
  description:
    "Découvrez les questions les plus fréquemment posées en entretien d'assimilation : symboles, valeurs, vie personnelle, projet d'intégration. Conseils et exemples de réponses.",
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
    question: "Combien de questions sont posées en moyenne ?",
    answer:
      "L'entretien dure entre 30 et 60 minutes. L'agent pose en moyenne 15 à 25 questions, alternant questions personnelles et questions sur la France.",
  },
  {
    question: "Faut-il apprendre des réponses par cœur ?",
    answer:
      "Non. L'agent cherche à voir si vous comprenez réellement et si vous savez vous exprimer en français. Mieux vaut savoir reformuler que réciter.",
  },
  {
    question: "Peut-on être recalé pour une seule mauvaise réponse ?",
    answer:
      "Non. Une mauvaise réponse n'est pas éliminatoire. L'agent évalue votre niveau global, votre compréhension et votre adhésion aux valeurs.",
  },
  {
    question: "L'entretien est-il toujours en français ?",
    answer:
      "Oui, intégralement. C'est aussi un test de votre niveau de français, qui doit être au minimum B1 oral et écrit.",
  },
  {
    question: "Que faire si je ne comprends pas une question ?",
    answer:
      "Demandez poliment à l'agent de reformuler ou de répéter plus lentement. C'est mieux que de répondre à côté.",
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
        title="Les questions les plus posées en entretien"
        highlight="entretien"
        subtitle="Quatre familles de questions, plus de 25 exemples concrets pour vous préparer à l'oral devant l'agent de préfecture."
        ctaLabel="S'entraîner gratuitement"
      />

      <section className="container-prose mt-8">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white">À quoi vous attendre</h2>
          <p className="mt-4 text-slate-300">
            L'entretien d'assimilation est avant tout une discussion. L'agent de préfecture
            n'est pas là pour vous piéger : il veut s'assurer que vous comprenez la France,
            que vous adhérez à ses valeurs, et que votre français est suffisant. Notre conseil :
            soyez sincère, restez calme, et répondez à voix posée.
          </p>
          <p className="mt-3 text-slate-300">
            Les questions ci-dessous reviennent presque systématiquement. Préparez votre
            réponse à voix haute, avec vos propres mots. Vous gagnerez en assurance.
          </p>
        </div>
      </section>

      <section className="container-prose mt-14 grid gap-6 md:grid-cols-2">
        {themes.map((t) => (
          <div
            key={t.title}
            className={`rounded-2xl border bg-slate-900/60 p-6 ${t.color}`}
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

      <section className="container-prose mt-20">
        <SectionTitle
          eyebrow="Méthode"
          title="3 conseils pour bien répondre"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              t: "Soyez précis et sincère",
              d: "Donnez des dates, des noms, des exemples concrets. Évitez les généralités.",
            },
            {
              t: "Reformulez avec vos mots",
              d: "Mieux vaut une réponse simple et naturelle qu'un texte récité.",
            },
            {
              t: "Affirmez vos valeurs",
              d: "Sur la laïcité ou l'égalité, soyez clair et catégorique.",
            },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-6 shadow-[0_18px_45px_rgba(2,8,23,0.3)]">
              <h3 className="text-base font-semibold text-white">{c.t}</h3>
              <p className="mt-2 text-sm text-slate-400">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA
        variant="register"
        title="Entraînez-vous à l'oral, gratuitement"
        subtitle="Sur cap-citoyen.fr, écoutez les réponses modèles et préparez votre entretien à votre rythme."
      />

      <FAQ items={faqItems} />
    </>
  );
}
