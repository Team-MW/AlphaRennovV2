import { Reveal } from "./Reveal";

const services = [
  {
    num: "01",
    title: "Cuisine sur mesure",
    text: "Volumes, lumière et flux pensés comme une pièce de vie — du plan à la pose.",
  },
  {
    num: "02",
    title: "Salles de bain",
    text: "Espaces de confort maîtrisés : étanchéité, matière, géométrie et lumière.",
  },
  {
    num: "03",
    title: "Espaces de vie",
    text: "Ouverture, cloisons, parquet, peinture — une continuité d’ambiance claire.",
  },
  {
    num: "04",
    title: "Rénovation globale",
    text: "Pilotage de chantier complet, coordination des corps d’état, finitions soignées.",
  },
];

export function Services() {
  return (
    <section
      id="savoir-faire"
      className="relative w-full overflow-hidden border-t border-line bg-white py-24 md:py-32"
    >
      <div className="section-pad mx-auto max-w-7xl">
        <Reveal className="mb-16 max-w-xl md:mb-20">
          <p className="font-display text-[11px] font-semibold tracking-[0.28em] uppercase text-steel">
            Savoir-faire
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.02em] text-navy">
            Quatre disciplines, une même exigence.
          </h2>
          <p className="mt-4 text-ink-muted leading-relaxed">
            Chaque intervention suit la même ligne : structure nette, matériaux
            justes, rendu architectural.
          </p>
        </Reveal>

        <ul className="grid gap-0 border-t border-line md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal
              key={service.num}
              as="li"
              delay={i * 90}
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
