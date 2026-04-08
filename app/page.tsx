import Link from "next/link";
import type { Metadata } from "next";
import Hero from "./components/Hero";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import QCMQuiz from "./components/QCMQuiz";
import JsonLd from "./components/JsonLd";
import SectionTitle from "./components/SectionTitle";
import { questions } from "./lib/questions";
import { faqJsonLd, organizationJsonLd, websiteJsonLd } from "./lib/site";

export const metadata: Metadata = {
  title: "QCM Assimilation France : tests pour la naturalisation 2026",
  description:
    "Réussissez l'entretien d'assimilation et la naturalisation française grâce à 500+ questions corrigées, simulations d'examen et fiches sur les valeurs de la République.",
  alternates: { canonical: "/" },
};

const faqItems = [
  {
    question: "C'est quoi, l'entretien d'assimilation ?",
    answer:
      "C'est le rendez-vous individuel que vous passez en préfecture quand vous demandez la naturalisation. L'agent vérifie que vous parlez bien français, que vous connaissez les bases de la République, l'histoire, les institutions, et que vous êtes vraiment intégré à la vie d'ici.",
  },
  {
    question: "Le QCM est-il le même qu'en préfecture ?",
    answer:
      "Il n'y a pas de QCM officiel unique. Chaque préfecture pioche ses propres questions dans le Livret du citoyen. Nos QCM couvrent tout le livret et reprennent ce qui revient le plus souvent à l'oral.",
  },
  {
    question: "Faut-il payer pour s'entraîner ?",
    answer:
      "Non. Tout ce que vous voyez ici est en accès libre. Si vous voulez aller plus loin (suivi de progression, mode audio, fiches imprimables), vous pouvez créer un compte sur cap-citoyen.fr en 30 secondes.",
  },
  {
    question: "À qui s'adresse ce site ?",
    answer:
      "À toute personne qui prépare un titre de séjour pluriannuel, une naturalisation par décret ou par mariage, ou simplement à ceux qui veulent (re)découvrir la France.",
  },
  {
    question: "Quel niveau de français pour la naturalisation ?",
    answer:
      "Niveau B1 oral et écrit (CECRL), à prouver avec un diplôme ou un test de français reconnu.",
  },
  {
    question: "Combien de temps pour préparer l'entretien ?",
    answer:
      "Avec 15 à 30 minutes par jour, un mois suffit largement pour maîtriser le Livret du citoyen et les questions qui reviennent le plus.",
  },
];

const featuredQuestions = questions.slice(0, 6);

const audiences = [
  {
    title: "Titre de séjour pluriannuel",
    description:
      "Vous demandez votre carte pluriannuelle et il faut montrer que vous êtes intégré : valeurs, histoire, vie de tous les jours.",
    href: "/qcm-assimilation-france/",
    accent: "bleu",
    icon: "🪪",
  },
  {
    title: "Naturalisation française",
    description:
      "Vous préparez l'entretien en préfecture pour devenir Français. Le Livret du citoyen et nos simulations sont faits pour ça.",
    href: "/test-naturalisation-france/",
    accent: "blanc",
    icon: "🇫🇷",
  },
  {
    title: "Curieux de la France",
    description:
      "Vous voulez (re)découvrir l'histoire, les institutions et la culture du pays. Des QCM clairs, des fiches courtes, sans jargon.",
    href: "/culture-francaise-quiz/",
    accent: "rouge",
    icon: "✨",
  },
];

const accentMap = {
  bleu: {
    border: "hover:border-blue-400/30",
    bar: "from-blue-500 to-indigo-500",
    iconBg: "border-blue-400/30 bg-blue-500/15 text-blue-300",
  },
  blanc: {
    border: "hover:border-white/30",
    bar: "from-slate-200 to-slate-400",
    iconBg: "border-white/20 bg-white/10 text-slate-100",
  },
  rouge: {
    border: "hover:border-red-400/30",
    bar: "from-red-500 to-rose-500",
    iconBg: "border-red-400/30 bg-red-500/15 text-red-300",
  },
} as const;

const features = [
  {
    title: "500+ questions corrigées",
    description:
      "Tout le Livret du citoyen est couvert, et les thèmes que les agents posent vraiment.",
  },
  {
    title: "Simulations chrono",
    description:
      "Tests minutés comme en préfecture, avec score et explications question par question.",
  },
  {
    title: "Fiches au bon format",
    description:
      "Symboles, histoire, institutions, valeurs : ce qu'il faut savoir, ni plus ni moins.",
  },
  {
    title: "Mode audio",
    description:
      "Le Livret du citoyen lu à voix haute, pour réviser pendant les trajets.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationJsonLd(), websiteJsonLd(), faqJsonLd(faqItems)]} />

      <Hero
        badge="Préparation · 2026"
        title="Devenez Français, sans stress"
        highlight="Français"
        subtitle="QCM, fiches et simulations d'examen pour préparer l'entretien d'assimilation à votre rythme. Pas d'inscription, fait par des gens qui aiment la France."
        ctaLabel="Commencer maintenant"
        secondaryHref="/test-naturalisation-france/"
        secondaryLabel="Faire un test"
      />

      {/* Audiences */}
      <section className="container-prose mt-6 sm:mt-8">
        <SectionTitle
          eyebrow="Pour qui"
          title="Vous êtes au bon endroit"
          description="Titre de séjour, naturalisation ou curiosité personnelle : on a prévu de quoi vous occuper."
        />
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {audiences.map((a) => {
            const acc = accentMap[a.accent as keyof typeof accentMap];
            return (
              <Link
                key={a.title}
                href={a.href}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-5 shadow-[0_18px_45px_rgba(2,8,23,0.35)] transition-all duration-300 ${acc.border}`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${acc.bar}`}
                  aria-hidden
                />
                <span
                  aria-hidden
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border text-xl ${acc.iconBg}`}
                >
                  {a.icon}
                </span>
                <h3 className="mt-3 text-base font-bold text-white">{a.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                  {a.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-blue-300 transition group-hover:gap-2 group-hover:text-blue-200">
                  S'entraîner <span aria-hidden>→</span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Features */}
      <section className="container-prose mt-10 sm:mt-14">
        <SectionTitle
          eyebrow="Ce qu'on propose"
          title="Une prépa carrée, sans chichi"
          description="Pensé pour les candidats à la naturalisation et au titre de séjour, par des gens qui ont passé le test."
        />
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-4 shadow-[0_18px_45px_rgba(2,8,23,0.3)] transition hover:border-blue-400/20 sm:p-5"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-blue-400/30 bg-blue-500/15 text-[11px] font-bold text-blue-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-sm font-bold text-white sm:text-[15px]">
                {f.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sample QCM */}
      <section className="container-prose mt-10 sm:mt-14">
        <SectionTitle
          eyebrow="À vous de jouer"
          title="6 questions pour s'échauffer"
          description="Cliquez sur une réponse, le corrigé apparaît tout de suite."
        />
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {featuredQuestions.map((q, i) => (
            <QCMQuiz key={q.id} question={q} index={i} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/qcm-assimilation-france/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:border-blue-400/40 hover:bg-white/10 sm:w-auto sm:px-7 sm:py-4 sm:text-base"
          >
            Voir les 50 questions
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <CTA
        variant="register"
        title="On vous accompagne jusqu'au bout"
        subtitle="Compte cap-citoyen.fr, progression sauvegardée, accès aux fiches. Pas de carte bancaire."
      />

      <FAQ items={faqItems} />
    </>
  );
}
