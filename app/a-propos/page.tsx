import type { Metadata } from "next";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import JsonLd from "../components/JsonLd";
import Breadcrumb from "../components/Breadcrumb";
import { breadcrumbJsonLd, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "À propos — La mission de QCM Assimilation",
  description:
    "QCM Assimilation aide gratuitement les candidats à la naturalisation française à préparer leur entretien d'assimilation. Notre mission, notre méthode, nos valeurs.",
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
        title="Aider chaque candidat à devenir Français sereinement"
        highlight="Français"
        subtitle="QCM Assimilation est une initiative indépendante qui propose gratuitement les meilleures ressources pour préparer la naturalisation française."
        ctaLabel="Découvrir cap-citoyen.fr"
      />

      <section className="container-prose mt-8">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white">Pourquoi ce site ?</h2>
          <p className="mt-4 text-slate-300">
            Demander la nationalité française est l'aboutissement d'un long parcours
            personnel. Pourtant, beaucoup de candidats se présentent à l'entretien
            d'assimilation sans véritable préparation, faute de ressources claires
            et accessibles. QCM Assimilation est né de ce constat.
          </p>
          <p className="mt-3 text-slate-300">
            Notre objectif : rassembler en un seul endroit tout ce qu'il faut savoir
            sur le Livret du citoyen, les valeurs de la République, l'histoire et
            les institutions, et le rendre totalement gratuit.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-white">Notre méthode</h2>
          <p className="mt-4 text-slate-300">
            Nous croyons à la pédagogie active : un QCM bien fait, avec une explication
            claire, vaut mieux que dix pages à lire. Toutes nos questions sont conçues
            à partir du Livret du citoyen et des retours réels des candidats à la
            naturalisation.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-white">Notre relation avec cap-citoyen.fr</h2>
          <p className="mt-4 text-slate-300">
            QCM Assimilation est l'antenne SEO de cap-citoyen.fr, une application
            web qui propose un suivi de progression, des fiches imprimables et
            une version audio du Livret du citoyen. Tout est gratuit. Si vous
            souhaitez aller plus loin, c'est par là.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-white">Indépendance</h2>
          <p className="mt-4 text-slate-300">
            QCM Assimilation est un site indépendant, sans aucun lien officiel avec
            l'État français. Les informations qu'il propose ne se substituent pas aux
            documents officiels de l'administration. En cas de doute juridique,
            consultez toujours service-public.fr.
          </p>
        </div>
      </section>

      <CTA
        variant="register"
        title="Rejoignez la communauté"
        subtitle="Inscription gratuite sur cap-citoyen.fr — accédez à toutes les ressources, sans engagement."
      />
    </>
  );
}
