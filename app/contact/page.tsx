import type { Metadata } from "next";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import JsonLd from "../components/JsonLd";
import Breadcrumb from "../components/Breadcrumb";
import { breadcrumbJsonLd, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Contact — QCM Assimilation",
  description:
    "Contactez l'équipe de QCM Assimilation : suggestion, signalement d'erreur, demande de partenariat. Nous lisons tous les messages.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", url: SITE_URL },
          { name: "Contact", url: `${SITE_URL}/contact/` },
        ])}
      />

      <Breadcrumb items={[{ href: "/contact/", label: "Contact" }]} />

      <Hero
        badge="Contact"
        title="Une question, une suggestion ?"
        highlight="suggestion"
        subtitle="Nous lisons tous les messages, qu'ils viennent de candidats à la naturalisation, d'enseignants, de bénévoles ou de curieux de la France."
        ctaLabel="Aller sur cap-citoyen.fr"
      />

      <section className="container-prose mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-[1.6rem] border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-7 shadow-[0_18px_45px_rgba(2,8,23,0.4)]">
          <h2 className="text-lg font-bold text-white">Email</h2>
          <p className="mt-3 text-sm text-slate-300">
            Envoyez-nous un email à l'adresse :
          </p>
          <a
            href="mailto:contact@qcm-assimilation.fr"
            className="mt-2 inline-block text-base font-semibold text-blue-300 hover:text-blue-200"
          >
            contact@qcm-assimilation.fr
          </a>
        </div>

        <div className="rounded-[1.6rem] border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-7 shadow-[0_18px_45px_rgba(2,8,23,0.4)]">
          <h2 className="text-lg font-bold text-white">Sujets fréquents</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>• Signaler une erreur dans une question</li>
            <li>• Suggérer un nouveau thème</li>
            <li>• Demander un retour d'expérience d'entretien</li>
            <li>• Partenariat associatif ou institutionnel</li>
          </ul>
        </div>
      </section>

      <section className="container-prose mt-12">
        <div className="rounded-2xl border border-blue-700/30 bg-blue-700/5 p-6">
          <h2 className="text-base font-bold text-white">Pour les démarches officielles</h2>
          <p className="mt-2 text-sm text-slate-300">
            Nous ne pouvons pas vous accompagner individuellement sur votre dossier
            de naturalisation. Pour toute question juridique, contactez votre
            préfecture ou consultez{" "}
            <a
              href="https://service-public.fr"
              target="_blank"
              rel="noopener"
              className="text-blue-300 underline"
            >
              service-public.fr
            </a>
            .
          </p>
        </div>
      </section>

      <CTA
        variant="register"
        title="Plus rapide qu'un email : créez votre compte"
        subtitle="Sur cap-citoyen.fr, accédez immédiatement à toutes nos ressources gratuites."
      />
    </>
  );
}
