import { Reveal } from "./Reveal";

const services = [
  {
    num: "01",
    title: "Rénovation intérieure",
    text: "Cuisine, salles de bain, espaces de vie, cloisons, sols et finitions — un intérieur cohérent du plan à la pose.",
  },
  {
    num: "02",
    title: "Travaux extérieurs",
    text: "Façades, terrasses, aménagements extérieurs et enveloppe du bâtiment — durables, nets, pensés pour le climat local.",
  },
  {
    num: "03",
    title: "Maçonnerie & structure",
    text: "Ouvertures, extensions, reprises et gros œuvre : la base technique de tout projet bien mené.",
  },
  {
    num: "04",
    title: "Couverture & toiture",
    text: "Étanchéité, couverture et travaux de toiture pour protéger durablement votre bien.",
  },
  {
    num: "05",
    title: "Tous corps d'état",
    text: "Coordination complète des métiers du bâtiment : un seul interlocuteur, un chantier cadré, des finitions soignées.",
  },
  {
    num: "06",
    title: "Construction & global",
    text: "Maisons individuelles et rénovation globale — du diagnostic au livré, avec planning et devis clairs.",
  },
];

export function Services({ hideIntro = false }: { hideIntro?: boolean }) {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-24">
      <div className="section-pad mx-auto max-w-7xl">
        {!hideIntro && (
          <Reveal className="mb-16 max-w-xl md:mb-20">
            <p className="font-display text-[11px] font-semibold tracking-[0.28em] uppercase text-steel">
              Savoir-faire
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.02em] text-navy">
              Intérieur &amp; extérieur, tous corps de métiers.
            </h2>
            <p className="mt-4 text-ink-muted leading-relaxed">
              Alpha Renov France intervient sur l&apos;ensemble des métiers du
              bâtiment — rénovation, maçonnerie, couverture et construction —
              en Haute-Garonne.
            </p>
          </Reveal>
        )}

        <ul className="grid gap-0 border-t border-line md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal
              key={service.num}
              as="li"
              delay={i * 70}
              className="group border-b border-line px-0 py-10 transition-colors duration-500 hover:bg-bg-elevated md:border-r md:px-8 md:odd:pl-0 md:even:border-r-0 md:even:pr-0 lg:py-12"
            >
              <span className="font-display text-xs tracking-[0.2em] text-steel-muted transition-colors group-hover:text-navy">
                {service.num}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-navy transition-colors duration-300 group-hover:text-navy-mid md:text-2xl">
                {service.title}
              </h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink-muted">
                {service.text}
              </p>
              <div className="mt-8 h-px w-0 bg-navy transition-all duration-500 ease-out group-hover:w-16" />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
