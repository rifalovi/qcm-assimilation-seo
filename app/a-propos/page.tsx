import type { Metadata } from "next";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import JsonLd from "../components/JsonLd";
import Breadcrumb from "../components/Breadcrumb";
import { breadcrumbJsonLd, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "À propos : la mission de QCM Assimilation",
  description:
    "QCM Assimilation accompagne les candidats à la naturalisation française dans la préparation de leur entretien d'assimilation. Notre mission, notre méthode, nos valeurs.",
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
        title="Vous aider à devenir Français sereinement"
        highlight="Français"
        subtitle="QCM Assimilation, c'est une initiative indépendante qui rassemble en accès libre les meilleures ressources pour préparer la naturalisation."
        ctaLabel="Découvrir quiz, audio et mode scroll"
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
            avec suivi de progression, fiches imprimables et version audio du
            Livret du citoyen. Pas de carte bancaire à sortir. Si vous voulez
            aller plus loin, c'est par là.
          </p>

          <h2 className="mt-8 text-lg font-bold text-white sm:text-xl">Indépendance</h2>
          <p className="mt-4 text-slate-300">
            On est un site indépendant, sans lien officiel avec l'État français.
            Les infos qu'on partage ne remplacent pas les documents officiels.
            En cas de doute juridique, le réflexe c'est service-public.fr.
          </p>
        </div>
      </section>

      <CTA
        variant="register"
        title="Rejoignez la communauté"
        subtitle="Inscription sur cap-citoyen.fr, sans engagement, sans carte bancaire."
      />
    </>
  );
}
