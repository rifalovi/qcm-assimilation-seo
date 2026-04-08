import Link from "next/link";
import type { Metadata } from "next";
import Hero from "./components/Hero";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import QCMCard from "./components/QCMCard";
import JsonLd from "./components/JsonLd";
import SectionTitle from "./components/SectionTitle";
import { questions } from "./lib/questions";
import { faqJsonLd, organizationJsonLd, websiteJsonLd } from "./lib/site";

export const metadata: Metadata = {
  title: "QCM Assimilation France — Tests gratuits pour la naturalisation",
  description:
    "Réussissez l'entretien d'assimilation et la naturalisation française grâce à 500+ questions corrigées, simulations d'examen et fiches sur les valeurs de la République.",
  alternates: { canonical: "/" },
};

const faqItems = [
  {
    question: "Qu'est-ce que l'entretien d'assimilation ?",
    answer:
      "C'est l'entretien individuel mené en préfecture lors d'une demande de naturalisation. L'agent vérifie votre niveau de français, votre connaissance des valeurs de la République, de l'histoire et des institutions, ainsi que votre intégration réelle dans la société française.",
  },
  {
    question: "Le QCM est-il identique à celui de la préfecture ?",
    answer:
      "Aucun QCM officiel n'est imposé : chaque préfecture pose ses propres questions, généralement issues du Livret du citoyen. Nos QCM couvrent l'intégralité de ce livret et reprennent les thèmes les plus fréquemment posés en entretien.",
  },
  {
    question: "Faut-il payer pour s'entraîner ?",
    answer:
      "Non. Toutes les questions de QCM Assimilation sont gratuites. Pour aller plus loin (suivi de progression, mode audio, fiches imprimables), vous pouvez créer un compte gratuit sur cap-citoyen.fr.",
  },
  {
    question: "À qui s'adresse ce site ?",
    answer:
      "À toute personne qui prépare un titre de séjour pluriannuel, une naturalisation par décret ou par mariage, ainsi qu'à toute personne curieuse de la France et de ses valeurs.",
  },
  {
    question: "Quel niveau de français faut-il pour la naturalisation ?",
    answer:
      "Le niveau requis est le B1 oral et écrit du Cadre européen commun de référence pour les langues (CECRL). Il doit être attesté par un diplôme ou un test de français reconnu.",
  },
  {
    question: "Combien de temps faut-il pour préparer l'entretien ?",
    answer:
      "Avec un entraînement régulier (15 à 30 minutes par jour), un mois suffit pour bien maîtriser les bases du Livret du citoyen et les questions les plus posées.",
  },
];

const featuredQuestions = questions.slice(0, 6);

const audiences = [
  {
    title: "Titre de séjour pluriannuel",
    description:
      "Vous demandez votre titre de séjour pluriannuel et devez prouver votre intégration : valeurs, histoire, vie quotidienne en France.",
    href: "/qcm-assimilation-france/",
    color: "from-blue-700/20 to-blue-900/20 border-blue-700/40",
  },
  {
    title: "Naturalisation française",
    description:
      "Vous préparez l'entretien d'assimilation en préfecture pour devenir Français : entraînez-vous sur le Livret du citoyen et nos simulations.",
    href: "/test-naturalisation-france/",
    color: "from-slate-100/10 to-slate-300/10 border-slate-300/30",
  },
  {
    title: "Curieux de la France",
    description:
      "Vous voulez (re)découvrir l'histoire, les institutions et la culture françaises : des QCM clairs et des fiches synthétiques.",
    href: "/culture-francaise-quiz/",
    color: "from-red-700/20 to-red-900/20 border-red-700/40",
  },
];

const features = [
  {
    title: "500+ questions corrigées",
    description:
      "Couvre l'intégralité du Livret du citoyen et les thèmes posés en entretien d'assimilation.",
  },
  {
    title: "Simulations d'examen",
    description:
      "Tests chronométrés type préfecture, avec score et explications détaillées.",
  },
  {
    title: "Fiches officielles",
    description:
      "Symboles, histoire, institutions, valeurs : tout ce qu'un futur Français doit connaître.",
  },
  {
    title: "Mode audio",
    description:
      "Le Livret du citoyen lu pour vous, à écouter dans les transports.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationJsonLd(), websiteJsonLd(), faqJsonLd(faqItems)]} />

      <Hero
        badge="Préparation gratuite — mise à jour 2026"
        title="Réussissez votre entretien d'assimilation et votre naturalisation française"
        subtitle="QCM, fiches, simulations d'examen et corrigés détaillés. Tout ce qu'il faut pour devenir Français en toute sérénité, gratuitement."
        ctaLabel="Commencer gratuitement"
        secondaryHref="/test-naturalisation-france/"
        secondaryLabel="Faire un test"
      />

      {/* Audiences */}
      <section className="container-prose mt-8">
        <SectionTitle
          eyebrow="À qui s'adresse ce site"
          title="Trois publics, un même objectif : maîtriser la France"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {audiences.map((a) => (
            <Link
              key={a.title}
              href={a.href}
              className={`group rounded-2xl border bg-gradient-to-br ${a.color} p-6 transition hover:scale-[1.01]`}
            >
              <h3 className="text-lg font-bold text-white">{a.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{a.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-300 group-hover:text-blue-200">
                S'entraîner →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container-prose mt-20">
        <SectionTitle
          eyebrow="Pourquoi QCM Assimilation"
          title="Une préparation complète, claire et gratuite"
          description="Conçu pour les candidats à la naturalisation et au titre de séjour, par des passionnés de la République."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-5"
            >
              <h3 className="text-base font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sample QCM */}
      <section className="container-prose mt-20">
        <SectionTitle
          eyebrow="Aperçu des questions"
          title="6 questions extraites du Livret du citoyen"
          description="Voici un aperçu gratuit des questions que vous pourrez retrouver en entretien."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {featuredQuestions.map((q, i) => (
            <QCMCard key={q.id} question={q} index={i} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/qcm-assimilation-france/"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900/40 px-5 py-3 text-sm font-semibold text-white hover:border-slate-500"
          >
            Voir les 50 questions →
          </Link>
        </div>
      </section>

      <CTA
        variant="register"
        title="Devenez Français sans stress"
        subtitle="Créez votre compte gratuit, suivez votre progression et accédez aux fiches officielles, sans engagement."
      />

      <FAQ items={faqItems} />
    </>
  );
}
