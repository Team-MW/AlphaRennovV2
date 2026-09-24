import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { company } from "@/lib/company";

export function HomeIntro() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-white py-24 md:py-32">
      <div className="section-pad mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="font-display text-[11px] font-semibold tracking-[0.28em] uppercase text-steel">
            L&apos;entreprise
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold tracking-[-0.02em] text-navy">
            Intérieur &amp; extérieur.
            <br />
            Tous corps de métiers du bâtiment.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg">
            Alpha Renov France est une entreprise générale du bâtiment basée à{" "}
            {company.address.city}. Nous réalisons vos travaux d&apos;intérieur
            et d&apos;extérieur — rénovation, maçonnerie, couverture,
            construction — avec un seul interlocuteur et un chantier cadré.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
            De Toulouse à la Haute-Garonne, nous intervenons sur maisons,
            appartements et projets résidentiels : second œuvre, enveloppe du
            bâtiment et rénovation globale.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6 border-t border-line pt-8">
            {[
              ["Siège", company.address.city],
              ["Périmètre", "Intérieur & extérieur"],
              ["Métiers", "Tous corps d'état"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="font-display text-[10px] tracking-[0.2em] uppercase text-steel-muted">
                  {label}
                </p>
                <p className="mt-1.5 font-display text-sm font-semibold text-navy">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80"
              alt="Chantier de rénovation soigné"
              fill
              className="object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="font-display text-[10px] tracking-[0.22em] uppercase text-steel-soft">
                Depuis {company.creationDate.slice(-4)}
              </p>
              <p className="mt-2 max-w-xs font-display text-xl font-semibold text-white md:text-2xl">
                Rigueur artisanale, rendu architectural.
              </p>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden border border-line bg-white px-5 py-4 shadow-[0_20px_50px_rgba(10,31,69,0.08)] md:block">
            <p className="font-display text-[10px] tracking-[0.2em] uppercase text-steel-muted">
              Code NAF
            </p>
            <p className="mt-1 font-display text-sm font-semibold text-navy">
              {company.activity.naf} — Construction
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const expertise = [
  {
    num: "01",
    title: "Rénovation intérieure",
    text: "Cuisine, salles de bain, espaces de vie, cloisons et finitions : un intérieur cohérent, du plan à la livraison.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    num: "02",
    title: "Travaux extérieurs",
    text: "Façades, terrasses, aménagements et enveloppe : l'extérieur traité avec la même exigence que l'intérieur.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    num: "03",
    title: "Maçonnerie & couverture",
    text: "Structure, ouvertures, toiture et étanchéité — les métiers techniques du bâtiment, maîtrisés sur place.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    num: "04",
    title: "Tous corps d'état",
    text: "Un seul pilotage pour tous les corps de métiers : planning, coordination et finitions sous contrôle.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
];

export function HomeExpertise() {
  return (
    <section className="border-t border-line bg-bg-elevated py-24 md:py-32">
      <div className="section-pad mx-auto max-w-7xl">
        <Reveal className="mb-16 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="font-display text-[11px] font-semibold tracking-[0.28em] uppercase text-steel">
              Métiers du bâtiment
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold tracking-[-0.02em] text-navy">
              Intérieur &amp; extérieur.
              <br />
              Tous les corps de métiers.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-muted md:text-right">
            Entreprise générale à Toulouse et Plaisance-du-Touch : rénovation,
            maçonnerie, couverture et construction — une exigence unique.
          </p>
        </Reveal>

        <ul className="grid gap-4 md:grid-cols-2">
          {expertise.map((item, i) => (
            <Reveal key={item.num} as="li" delay={i * 80}>
              <Link
                href="/approche"
                className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden md:min-h-[380px]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-navy/35 transition-colors duration-500 group-hover:bg-navy/25" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-transparent" />
                <div className="relative z-10 p-7 md:p-9">
                  <span className="font-display text-xs tracking-[0.2em] text-steel-soft">
                    {item.num}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-white md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75 md:text-[15px]">
                    {item.text}
                  </p>
                  <span className="mt-6 inline-block font-display text-[10px] tracking-[0.2em] uppercase text-steel-soft transition-transform duration-300 group-hover:translate-x-1">
                    Voir l&apos;approche →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const steps = [
  {
    title: "Écoute & diagnostic",
    text: "Visite du lieu, contraintes techniques, usages du quotidien. On pose le vrai cadre avant de dessiner quoi que ce soit.",
  },
  {
    title: "Conception & devis",
    text: "Plans, choix de matériaux, planning et budget. Un devis lisible, sans zone floue sur le déroulé.",
  },
  {
    title: "Chantier & livraison",
    text: "Coordination des corps d'état, suivi régulier, finitions contrôlées. Votre espace, livré net.",
  },
];

export function HomeMethod() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-white py-24 md:py-32">
      <div className="section-pad mx-auto max-w-7xl">
        <Reveal className="mb-16 max-w-2xl md:mb-20">
          <p className="font-display text-[11px] font-semibold tracking-[0.28em] uppercase text-steel">
            Méthode
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold tracking-[-0.02em] text-navy">
            Une méthode calme.
            <br />
            Un résultat précis.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">
            Peu de bruit, beaucoup de rigueur. Nous travaillons comme un atelier
            d&apos;architecture appliqué à la rénovation et au bâtiment.
          </p>
        </Reveal>

        <ol className="relative grid gap-0 md:grid-cols-3">
          <div
            className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-line md:block"
            aria-hidden
          />
          {steps.map((step, i) => (
            <Reveal
              key={step.title}
              as="li"
              delay={i * 100}
              className="relative border-t border-line py-10 md:border-t-0 md:px-8 md:py-0 md:first:pl-0 md:last:pr-0"
            >
              <span className="relative z-10 flex h-16 w-16 items-center justify-center border border-line bg-white font-display text-xl font-semibold text-navy">
                0{i + 1}
              </span>
              <h3 className="mt-8 font-display text-xl font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-ink-muted">
                {step.text}
              </p>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={200} className="mt-14">
          <Link
            href="/approche"
            className="inline-flex border border-line-strong px-7 py-3.5 font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
          >
            Découvrir notre approche
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "Appartement haussmannien",
    place: "Toulouse",
    tag: "Rénovation globale",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
    span: "md:col-span-7 md:row-span-2 md:min-h-[520px]",
  },
  {
    title: "Cuisine ouverte",
    place: "Plaisance-du-Touch",
    tag: "Cuisine",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1000&q=80",
    span: "md:col-span-5 md:min-h-[250px]",
  },
  {
    title: "Suite parentale",
    place: "Haute-Garonne",
    tag: "Salle de bain & dressing",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
    span: "md:col-span-5 md:min-h-[250px]",
  },
];

export function HomeProjects() {
  return (
    <section className="border-t border-line bg-bg-elevated py-24 md:py-32">
      <div className="section-pad mx-auto max-w-7xl">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="font-display text-[11px] font-semibold tracking-[0.28em] uppercase text-steel">
              Réalisations
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold tracking-[-0.02em] text-navy">
              Des volumes qui respirent.
            </h2>
          </div>
          <Link
            href="/realisations"
            className="font-display text-[11px] tracking-[0.2em] uppercase text-navy transition-colors hover:text-navy-mid"
          >
            Toutes les réalisations →
          </Link>
        </Reveal>

        <div className="grid gap-3 md:grid-cols-12 md:gap-4">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              as="article"
              delay={i * 90}
              className={`group relative min-h-[280px] overflow-hidden ${project.span}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="font-display text-[10px] tracking-[0.22em] uppercase text-steel-soft">
                  {project.place} — {project.tag}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-white md:text-2xl">
                  {project.title}
                </h3>
                <div className="mt-4 h-px w-0 bg-steel-soft transition-all duration-500 group-hover:w-14" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const promises = [
  {
    title: "Un seul interlocuteur",
    text: "Du premier devis à la réception des travaux, vous parlez à la même équipe. Moins de friction, plus de clarté.",
  },
  {
    title: "Devis & planning lisibles",
    text: "Périmètre, délais, matériaux : tout est écrit. Les ajustements se discutent avant, pas au milieu du chantier.",
  },
  {
    title: "Finitions contrôlées",
    text: "Joints, alignements, détails de pose. La qualité se joue dans ce que l'on ne remarque plus une fois livré.",
  },
];

export function HomePromise() {
  return (
    <section className="border-t border-line bg-white py-24 md:py-32">
      <div className="section-pad mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <Reveal>
            <p className="font-display text-[11px] font-semibold tracking-[0.28em] uppercase text-steel">
              Engagements
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,2.85rem)] font-semibold tracking-[-0.02em] text-navy">
              Ce que nous devons à chaque projet.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">
              La confiance se construit chantier après chantier. Voici les
              points non négociables de notre façon de travailler.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8">
              <div>
                <p className="font-display text-3xl font-semibold text-navy md:text-4xl">
                  31
                </p>
                <p className="mt-2 text-sm text-ink-muted">Haute-Garonne</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-navy md:text-4xl">
                  TCE
                </p>
                <p className="mt-2 text-sm text-ink-muted">Tous corps d&apos;état</p>
              </div>
            </div>
          </Reveal>

          <ul className="space-y-0">
            {promises.map((item, i) => (
              <Reveal
                key={item.title}
                as="li"
                delay={i * 90}
                className="group grid grid-cols-[auto_1fr] gap-5 border-t border-line py-8 last:border-b md:gap-8 md:py-10"
              >
                <span className="font-display text-sm tracking-[0.16em] text-steel-muted">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink-muted">
                    {item.text}
                  </p>
                  <div className="mt-5 h-px w-0 bg-navy transition-all duration-500 group-hover:w-12" />
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function HomeLocal() {
  return (
    <section className="relative overflow-hidden border-t border-line">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2400&q=80"
          alt="Maison contemporaine en Haute-Garonne"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/40" />
      </div>

      <div className="section-pad relative mx-auto grid max-w-7xl gap-12 py-24 md:grid-cols-2 md:items-end md:gap-16 md:py-32">
        <Reveal>
          <p className="font-display text-[11px] font-semibold tracking-[0.28em] uppercase text-steel-soft">
            Territoire
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold tracking-[-0.02em] text-white">
            Plaisance-du-Touch.
            <br />
            Toulouse et alentours.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/75">
            Notre siège est au {company.address.street},{" "}
            {company.address.zip} {company.address.city}. Une présence locale
            pour des chantiers suivis de près, sans distance inutile.
          </p>
        </Reveal>

        <Reveal delay={120} className="md:justify-self-end">
          <div className="border border-white/20 bg-white/5 p-7 backdrop-blur-sm md:min-w-[320px] md:p-9">
            <p className="font-display text-[10px] tracking-[0.22em] uppercase text-steel-soft">
              Adresse
            </p>
            <p className="mt-3 font-display text-lg font-semibold text-white">
              {company.address.full}
            </p>
            <div className="mt-6 space-y-2 border-t border-white/15 pt-6 text-sm text-white/70">
              <p>SIREN {company.siren}</p>
              <p>{company.rcs}</p>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex bg-white px-6 py-3.5 font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-navy transition-colors hover:bg-steel-soft"
            >
              Nous contacter
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function HomeCta() {
  return (
    <section className="border-t border-line bg-white py-20 md:py-24">
      <div className="section-pad mx-auto max-w-7xl">
        <Reveal className="flex flex-col items-start justify-between gap-8 border border-line bg-bg-elevated px-8 py-12 md:flex-row md:items-center md:px-12 md:py-14">
          <div className="max-w-xl">
            <p className="font-display text-[11px] font-semibold tracking-[0.28em] uppercase text-steel">
              Prochaine étape
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold tracking-[-0.02em] text-navy">
              Parlons de votre projet.
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
              Réservez un créneau ou écrivez-nous. Nous revenons vers vous sous
              48 h pour un premier échange.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/rendez-vous"
              className="btn-primary inline-flex bg-navy px-7 py-3.5 font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-white transition-colors hover:bg-navy-mid"
            >
              Prendre rendez-vous
            </Link>
            <Link
              href="/approche"
              className="inline-flex border border-line-strong px-7 py-3.5 font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-navy transition-colors hover:border-navy"
            >
              Notre approche
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
