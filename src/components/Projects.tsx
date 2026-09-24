import Image from "next/image";
import { Reveal } from "./Reveal";

const projects = [
  {
    title: "Appartement Haussmannien",
    place: "Paris 16ᵉ",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Cuisine ouverte",
    place: "Boulogne",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
    span: "",
  },
  {
    title: "Suite parentale",
    place: "Neuilly",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    span: "",
  },
];

export function Projects() {
  return (
    <section
      id="realisations"
      className="w-full overflow-hidden border-t border-line bg-white py-24 md:py-32"
    >
      <div className="section-pad mx-auto max-w-7xl">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="font-display text-[11px] font-semibold tracking-[0.28em] uppercase text-steel">
              Réalisations
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.02em] text-navy">
              Des volumes qui respirent.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-muted md:text-right">
            Sélection de projets récents — intérieurs rénovés avec la même
            discipline : lignes, lumière, matière.
          </p>
        </Reveal>

        <div className="grid gap-3 md:grid-cols-2 md:grid-rows-2 md:gap-4">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              as="article"
              delay={i * 100}
              className={`group relative min-h-[280px] overflow-hidden md:min-h-0 ${project.span || "md:min-h-[280px]"}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-navy/25 transition-opacity duration-500 group-hover:bg-navy/15" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 translate-y-1 p-6 transition-transform duration-500 group-hover:translate-y-0 md:p-8">
                <p className="font-display text-[10px] tracking-[0.24em] uppercase text-steel-soft">
                  {project.place}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-white md:text-2xl">
                  {project.title}
                </h3>
                <div className="mt-4 h-px w-0 bg-steel-soft transition-all duration-500 group-hover:w-12" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
