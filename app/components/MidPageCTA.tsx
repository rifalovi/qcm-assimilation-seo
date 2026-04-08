import PrimaryCTAButton from "./PrimaryCTAButton";

/**
 * CTA centré « milieu de page », posé entre deux sections de contenu.
 * Compact, sans habillage de carte, pour ne pas concurrencer la
 * grande section CTA de bas de page.
 */
export default function MidPageCTA({
  label,
  caption,
}: {
  label?: string;
  caption?: string;
}) {
  return (
    <section className="container-prose mt-10 sm:mt-12">
      <div className="flex flex-col items-center gap-2 text-center">
        <PrimaryCTAButton
          label={label ?? "Faire le test complet"}
          className="w-full max-w-xs"
        />
        <p className="text-xs text-slate-500">
          {caption ?? "Sur cap-citoyen.fr · accès offert"}
        </p>
      </div>
    </section>
  );
}
