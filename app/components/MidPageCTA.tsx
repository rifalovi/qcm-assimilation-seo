import PrimaryCTAButton from "./PrimaryCTAButton";

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
          label={label ?? "Obtenir mon coaching IA gratuit"}
          className="w-full max-w-xs"
        />
        <p className="text-xs" style={{ color: "var(--cc-text-muted)" }}>
          {caption ?? "Quiz, coaching IA personnalisé et assistant démarches sur cap-citoyen.fr"}
        </p>
      </div>
    </section>
  );
}
