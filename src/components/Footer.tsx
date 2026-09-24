import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/company";

const navLinks = [
  ["/", "Accueil"],
  ["/approche", "Approche"],
  ["/realisations", "Réalisations"],
  ["/rendez-vous", "Rendez-vous"],
  ["/contact", "Contact"],
] as const;

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-line bg-white">
      <div className="section-pad relative mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 border-b border-line py-12 md:flex-row md:items-center md:justify-between md:py-14">
          <div className="max-w-xl">
            <p className="font-display text-[11px] font-semibold tracking-[0.28em] uppercase text-steel">
              Projet
            </p>
            <p className="mt-3 font-display text-[clamp(1.5rem,3vw,2.15rem)] font-semibold tracking-[-0.02em] text-navy">
              Prêt à transformer votre lieu ?
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/rendez-vous"
              className="inline-flex bg-navy px-6 py-3.5 font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-white transition-colors hover:bg-navy-mid"
            >
              Prendre rendez-vous
            </Link>
            <Link
              href="/contact"
              className="inline-flex border border-line-strong px-6 py-3.5 font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-navy transition-colors hover:border-navy hover:bg-bg-elevated"
            >
              Nous écrire
            </Link>
          </div>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-12 md:gap-8 md:py-16">
          <div className="md:col-span-5">
            <Link href="/" aria-label="Alpha Renov France" className="inline-block">
              <Image
                src="/logo.png"
                alt="Alpha Renov France"
                width={150}
                height={106}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-muted">
              Intérieur &amp; extérieur — tous corps de métiers du bâtiment.
              Rénovation, maçonnerie, couverture et construction depuis
              Plaisance-du-Touch.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-ink-muted">
              {company.address.full}
              <br />
              SIREN {company.siren}
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="font-display text-[10px] tracking-[0.24em] uppercase text-steel-muted">
              Navigation
            </p>
            <nav className="mt-5 flex flex-col gap-3.5" aria-label="Pied de page">
              {navLinks.map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="font-display text-[12px] tracking-[0.16em] uppercase text-navy transition-colors hover:text-navy-mid"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-3">
            <p className="font-display text-[10px] tracking-[0.24em] uppercase text-steel-muted">
              Contact
            </p>
            <div className="mt-5 flex flex-col gap-3.5 text-sm">
              <a
                href={`mailto:${company.email}`}
                className="text-ink-muted transition-colors hover:text-navy"
              >
                {company.email}
              </a>
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="text-ink-muted transition-colors hover:text-navy"
              >
                {company.phone}
              </a>
              <Link
                href="/mentions-legales"
                className="mt-2 font-display text-[11px] tracking-[0.16em] uppercase text-steel-muted transition-colors hover:text-navy"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-de-confidentialite"
                className="font-display text-[11px] tracking-[0.16em] uppercase text-steel-muted transition-colors hover:text-navy"
              >
                Confidentialité
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-steel-muted">
            © {new Date().getFullYear()} {company.name}
          </p>
          <a
            href="https://microdidact.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group font-display text-[10px] tracking-[0.2em] uppercase text-steel-muted transition-colors hover:text-navy"
          >
            Réalisé par{" "}
            <span className="text-navy transition-colors group-hover:underline">
              Microdidact
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
