import type { Metadata } from "next";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import JsonLd from "../components/JsonLd";
import Breadcrumb from "../components/Breadcrumb";
import { breadcrumbJsonLd, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Contact : écrire à QCM Assimilation",
  description:
    "Contactez l'équipe de QCM Assimilation : suggestion, signalement d'erreur, demande de partenariat. On lit tous les messages.",
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
        title="Une question, une idée ?"
        highlight="idée"
        subtitle="On lit tous les messages, qu'ils viennent de candidats, d'enseignants, de bénévoles ou de curieux."
        ctaLabel="Aller sur cap-citoyen.fr"
      />

      <section className="container-prose mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-4 sm:p-5 shadow-[0_18px_45px_rgba(2,8,23,0.4)]">
          <h2 className="text-lg font-bold text-white">Email</h2>
          <p className="mt-3 text-sm text-slate-300">
            Écrivez-nous à :
          </p>
          <a
            href="mailto:contact@qcm-assimilation.fr"
            className="mt-2 inline-block break-all text-sm font-semibold text-blue-300 hover:text-blue-200 sm:text-base"
          >
            contact@qcm-assimilation.fr
          </a>
        </div>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-4 sm:p-5 shadow-[0_18px_45px_rgba(2,8,23,0.4)]">
          <h2 className="text-lg font-bold text-white">Ce qu'on reçoit le plus</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>• Une coquille à corriger dans une question</li>
            <li>• L'envie d'un nouveau thème de QCM</li>
            <li>• Un retour d'expérience après l'entretien</li>
            <li>• Une demande de partenariat associatif ou institutionnel</li>
          </ul>
        </div>
      </section>

      <section className="container-prose mt-6 sm:mt-8">
        <div className="rounded-2xl border border-blue-700/30 bg-blue-700/5 p-5">
          <h2 className="text-base font-bold text-white">Pour les démarches officielles</h2>
          <p className="mt-2 text-sm text-slate-300">
            On ne peut pas vous accompagner sur votre dossier en particulier. Pour
            toute question juridique, le bon réflexe c'est votre préfecture ou{" "}
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
        subtitle="Sur cap-citoyen.fr, vous accédez tout de suite à toutes les ressources."
      />
    </>
  );
}
