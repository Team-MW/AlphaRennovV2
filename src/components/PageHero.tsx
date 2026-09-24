import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-line bg-bg-elevated pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="section-pad mx-auto max-w-7xl">
        <p className="font-display text-[11px] font-semibold tracking-[0.28em] uppercase text-steel">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold tracking-[-0.02em] text-navy">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            {description}
          </p>
        )}
        <div className="mt-8">
          <Link
            href="/"
            className="font-display text-[10px] tracking-[0.2em] uppercase text-ink-muted transition-colors hover:text-navy"
          >
            ← Accueil
          </Link>
        </div>
      </div>
    </section>
  );
}
