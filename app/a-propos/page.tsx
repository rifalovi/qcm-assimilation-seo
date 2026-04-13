import type { Metadata } from "next";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import JsonLd from "../components/JsonLd";
import Breadcrumb from "../components/Breadcrumb";
import { breadcrumbJsonLd, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "À propos : la mission de QCM Assimilation",
  description:
    "QCM Assimilation accompagne les candidats à la naturalisation avec un assistant IA naturalisation, un coach examen civique personnalisé et une aide démarches titre de séjour. Notre mission.",
  alternates: { canonical: "/a-propos/" },
};

export default function AProposPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", url: SITE_URL },
          { name: "À propos", url: `${SITE_URL}/a-propos/` },
        ])}
      />

      <Breadcrumb items={[{ href: "/a-propos/", label: "À propos" }]} />

      <Hero
        badge="Notre mission"
        title="Réussir l'examen civique et la naturalisation du premier coup"
        highlight="du premier coup"
        subtitle="QCM Assimilation, c'est une initiative indépendante qui rassemble en accès libre les meilleures ressources pour préparer la naturalisation."
        ctaLabel="Accéder au quiz, à l'assistant IA et au coaching personnalisé"
      />

      <section className="container-prose mt-8">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-lg font-bold text-white sm:text-xl">Pourquoi ce site</h2>
          <p className="mt-4 text-slate-300">
            Demander la nationalité française, c'est souvent l'aboutissement d'un
            long parcours personnel. Et pourtant, beaucoup arrivent à l'entretien
            sans vraiment s'être préparés, parce qu'il manque des ressources claires
            et accessibles. C'est pour ça que ce site existe.
          </p>
          <p className="mt-3 text-slate-300">
            L'idée : rassembler au même endroit tout ce qu'il faut savoir sur le
            Livret du citoyen, les valeurs de la République, l'histoire et les
            institutions. Et le rendre accessible à tous.
          </p>

          <h2 className="mt-8 text-lg font-bold text-white sm:text-xl">Notre méthode</h2>
          <p className="mt-4 text-slate-300">
            On croit à l'apprentissage actif : un QCM bien fait, avec une explication
            courte, vaut mieux que dix pages à lire. Toutes nos questions viennent
            du Livret du citoyen et des retours de candidats qui sont passés par là.
          </p>

          <h2 className="mt-8 text-lg font-bold text-white sm:text-xl">Notre lien avec cap-citoyen.fr</h2>
          <p className="mt-4 text-slate-300">
            QCM Assimilation est la vitrine SEO de cap-citoyen.fr, une appli web
            avec assistant IA démarches (naturalisation, titre de séjour, examen
            civique), coach IA personnalisé après chaque quiz, explications IA
            après chaque mauvaise réponse, messagerie instantanée avec la
            communauté, suivi de progression, fiches imprimables et version audio
            du Livret du citoyen. Pas de carte bancaire à sortir.
          </p>

          <h2 className="mt-8 text-lg font-bold text-white sm:text-xl">Indépendance</h2>
          <p className="mt-4 text-slate-300">
            On est un site indépendant, sans lien officiel avec l'État français.
            Les infos qu'on partage ne remplacent pas les documents officiels.
            En cas de doute juridique, le réflexe c'est service-public.fr.
          </p>
        </div>
      </section>

      {/* App mobile */}
      <section className="container-prose mt-10 sm:mt-14">
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-6 text-center shadow-[0_18px_45px_rgba(2,8,23,0.4)] sm:p-8">
          <h2 className="text-lg font-bold text-white sm:text-xl">
            Cap Citoyen sur mobile
          </h2>
          <p className="max-w-md text-sm text-slate-300">
            Révisez partout avec l'app Cap Citoyen : quiz, coaching IA, assistant
            démarches et messagerie communautaire dans votre poche.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=fr.capcitoyen.app"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-black px-5 py-3 text-white transition hover:bg-white/10"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
              <path d="M3.61 1.814L13.793 12 3.61 22.186a2.376 2.376 0 0 1-.61-1.6V3.414c0-.605.222-1.16.61-1.6Zm.96-.77L15.5 7.382l-2.86 2.858L4.57 1.044ZM16.397 8l3.102 1.792a1.88 1.88 0 0 1 0 3.416L16.397 15l-3.15-3.15L16.397 8ZM4.57 22.956l8.07-9.196 2.86 2.858L4.57 22.956Z" />
            </svg>
            <span className="flex flex-col items-start leading-tight">
              <span className="text-[10px] uppercase tracking-wider text-slate-400">
                Télécharger sur
              </span>
              <span className="text-sm font-bold">Google Play</span>
            </span>
          </a>
          <p className="text-xs text-slate-500">
            App Store bientôt disponible
          </p>
        </div>
      </section>

      <CTA
        variant="register"
        title="Rejoignez la communauté"
        subtitle="Assistant IA démarches, coaching personnalisé, explications IA et messagerie communautaire. Sans engagement, sans carte bancaire."
      />
    </>
  );
}
