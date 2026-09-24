import Image from "next/image";
import { RoofMark } from "./RoofMark";

export function Footer() {
  return (
    <footer className="w-full overflow-hidden border-t border-line bg-white">
      <div className="section-pad mx-auto flex max-w-7xl flex-col gap-10 py-14 md:flex-row md:items-end md:justify-between">
        <div className="flex items-start gap-4">
          <RoofMark className="mt-1 h-8 w-12 shrink-0" />
          <div>
            <Image
              src="/logo.png"
              alt="Alpha Renov France"
              width={140}
              height={99}
              className="h-14 w-auto object-contain"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              Rénovation intérieure d&apos;exception.
              <br />
              Design architectural, exécution précise.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <nav className="flex flex-wrap gap-6" aria-label="Pied de page">
            {[
              ["#savoir-faire", "Savoir-faire"],
              ["#approche", "Approche"],
              ["#realisations", "Réalisations"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="font-display text-[10px] tracking-[0.2em] uppercase text-ink-muted transition-colors hover:text-navy"
              >
                {label}
              </a>
            ))}
          </nav>
          <p className="text-xs text-steel-muted">
            © {new Date().getFullYear()} Alpha Renov France — Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
