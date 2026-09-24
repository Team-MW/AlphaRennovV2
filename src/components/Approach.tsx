import { Reveal } from "./Reveal";
import { RoofMark } from "./RoofMark";

export function Approach({ hideIntro = false }: { hideIntro?: boolean }) {
  const steps = [
    {
      title: "Écoute & diagnostic",
      text: "Visite, contraintes techniques, usages du lieu — on pose le vrai cadre du projet.",
    },
    {
      title: "Conception & devis",
      text: "Plans, choix de matériaux, planning clair. Zéro surprise sur le déroulé.",
    },
    {
      title: "Réalisation",
      text: "Chantier cadré, finitions exigeantes, livraison nette. Votre espace, transformé.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-24">
      <div
        className="pointer-events-none absolute right-0 top-1/2 hidden h-64 w-64 -translate-y-1/2 opacity-[0.12] lg:block"
        aria-hidden
      >
        <RoofMark className="h-full w-full" />
      </div>

      <div
        className={`section-pad relative mx-auto grid max-w-7xl gap-16 ${
          hideIntro ? "" : "lg:grid-cols-[1fr_1.15fr] lg:gap-24"
        }`}
      >
        {!hideIntro && (
          <Reveal>
            <p className="font-display text-[11px] font-semibold tracking-[0.28em] uppercase text-steel">
              Approche
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.02em] text-navy">
              Une méthode calme.
              <br />
              Un résultat précis.
            </h2>
            <p className="mt-5 max-w-md text-ink-muted leading-relaxed">
              Nous travaillons comme un atelier d&apos;architecture appliqué à la
              rénovation : peu de bruit, beaucoup de rigueur.
            </p>
          </Reveal>
        )}

        <ol className={`space-y-0 ${hideIntro ? "max-w-3xl" : ""}`}>
          {steps.map((step, i) => (
            <Reveal
              key={step.title}
              as="li"
              delay={i * 120}
              className="group grid grid-cols-[auto_1fr] gap-6 border-t border-line py-8 last:border-b md:gap-10 md:py-10"
            >
              <span className="font-display text-3xl font-semibold tabular-nums text-steel transition-colors duration-300 group-hover:text-navy md:text-4xl">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-navy md:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink-muted">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
