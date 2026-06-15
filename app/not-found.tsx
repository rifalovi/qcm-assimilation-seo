import Link from "next/link";

export const metadata = {
  title: "Page introuvable",
  description: "Cette page n'existe pas. Retournez à l'accueil de QCM Assimilation.",
};

export default function NotFound() {
  return (
    <section className="container-prose flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--cc-primary)" }}>
        Erreur 404
      </span>
      <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl" style={{ color: "var(--cc-text)" }}>
        Page introuvable
      </h1>
      <p className="mt-4 max-w-xl text-base" style={{ color: "var(--cc-text-muted)" }}>
        La page que vous cherchez n'existe pas ou a été déplacée. Pas de panique :
        retournez à l'accueil et reprenez votre préparation à la naturalisation.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="cc-btn cc-btn-primary">
          Retour à l'accueil
        </Link>
        <Link href="/qcm-assimilation-france/" className="cc-btn cc-btn-secondary">
          Voir le QCM
        </Link>
      </div>
    </section>
  );
}
