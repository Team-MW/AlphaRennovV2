import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full max-w-[100vw] items-end overflow-hidden bg-white">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=80"
          alt="Intérieur contemporain rénové"
          fill
          priority
          className="object-cover object-[72%_center] scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/88 via-white/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/20" />
        <div className="geometric-grid absolute inset-0 opacity-25" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="section-pad relative z-10 mx-auto w-full max-w-7xl pb-16 pt-32 md:pb-24 md:pt-36">
        <div className="max-w-2xl">
          <div className="animate-fade-up mb-8 md:mb-10">
            <Image
              src="/logo.svg"
              alt="Alpha Renov France"
              width={280}
              height={198}
              priority
              className="h-auto w-[min(200px,55vw)] object-contain md:w-[240px]"
            />
          </div>

          <h1 className="animate-fade-up delay-1 font-display text-[clamp(2.1rem,5.2vw,4rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-navy">
            Intérieur &amp; extérieur.
            <br />
            Tous corps de métiers.
          </h1>

          <p className="animate-fade-up delay-2 mt-5 max-w-lg text-base leading-relaxed text-ink-muted md:text-lg">
            Entreprise générale du bâtiment à Plaisance-du-Touch — rénovation,
            maçonnerie, couverture et construction en Haute-Garonne.
          </p>

          <div className="animate-fade-up delay-3 mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/rendez-vous"
              className="btn-primary inline-flex items-center justify-center bg-navy px-7 py-3.5 font-display text-[11px] font-semibold tracking-[0.22em] uppercase text-white transition-transform duration-300 hover:bg-navy-mid hover:scale-[1.02]"
            >
              Prendre rendez-vous
            </Link>
            <Link
              href="/rendez-vous?category=artisan"
              className="inline-flex items-center justify-center border border-line-strong px-7 py-3.5 font-display text-[11px] font-semibold tracking-[0.22em] uppercase text-navy transition-all duration-300 hover:border-navy hover:bg-navy/[0.04]"
            >
              Devenir Artisan Partenaire
            </Link>
          </div>

          <div className="animate-draw-line delay-4 mt-14 h-px w-24 bg-steel" />
        </div>
      </div>

      <Link
        href="/approche"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        aria-label="Découvrir notre approche"
      >
        <span className="font-display text-[9px] tracking-[0.3em] uppercase text-steel-muted">
          Explorer
        </span>
        <span className="block h-8 w-px origin-top animate-pulse bg-gradient-to-b from-navy to-transparent" />
      </Link>
    </section>
  );
}
