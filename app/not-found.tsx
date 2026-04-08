import Link from "next/link";

export const metadata = {
  title: "Page introuvable",
  description: "Cette page n'existe pas. Retournez à l'accueil de QCM Assimilation.",
};

export default function NotFound() {
  return (
    <section className="container-prose flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
        Erreur 404
      </span>
      <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">
        Page introuvable
      </h1>
      <p className="mt-4 max-w-xl text-base text-slate-300">
        La page que vous cherchez n'existe pas ou a été déplacée. Pas de panique :
        retournez à l'accueil et reprenez votre préparation à la naturalisation.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-600"
        >
          Retour à l'accueil
        </Link>
        <Link
          href="/qcm-assimilation-france/"
          className="rounded-lg border border-slate-700 bg-slate-900/40 px-5 py-3 text-sm font-semibold text-white hover:border-slate-500"
        >
          Voir le QCM
        </Link>
      </div>
    </section>
  );
}
