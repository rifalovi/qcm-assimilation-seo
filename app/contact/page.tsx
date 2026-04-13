import type { Metadata } from "next";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import JsonLd from "../components/JsonLd";
import Breadcrumb from "../components/Breadcrumb";
import { breadcrumbJsonLd, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Contact : écrire à QCM Assimilation",
  description:
    "Contactez QCM Assimilation : suggestion, signalement d'erreur, partenariat. Découvrez aussi l'assistant IA naturalisation, le coach examen civique et l'aide démarches titre de séjour.",
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
        ctaLabel="Écrire à l'équipe"
        ctaHref="https://cap-citoyen.fr/contact"
      />

      <section className="container-prose mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-4 sm:p-5 shadow-[0_18px_45px_rgba(2,8,23,0.4)]">
          <h2 className="text-lg font-bold text-white">Email</h2>
          <p className="mt-3 text-sm text-slate-300">
            Écrivez-nous à :
          </p>
          <a
            href="mailto:contact@cap-citoyen.fr"
            className="mt-2 inline-block break-all text-sm font-semibold text-blue-300 hover:text-blue-200 sm:text-base"
          >
            contact@cap-citoyen.fr
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
        variant="assistant"
        title="Plus rapide qu'un email : posez votre question à l'IA"
        subtitle="L'assistant IA répond instantanément à vos questions sur la naturalisation, le titre de séjour et l'examen civique."
      />
    </>
  );
}
