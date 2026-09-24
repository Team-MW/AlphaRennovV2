"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { RoofMark } from "./RoofMark";

const links = [
  { href: "#savoir-faire", label: "Savoir-faire" },
  { href: "#approche", label: "Approche" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="section-pad mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <a href="#top" className="group flex items-center gap-3" aria-label="Alpha Renov France">
          <RoofMark className="h-7 w-11 transition-transform duration-500 group-hover:-translate-y-0.5" />
          <div className="hidden sm:block">
            <Image
              src="/logo.png"
              alt="Alpha Renov France"
              width={120}
              height={85}
              className="h-10 w-auto object-contain"
              priority
            />
          </div>
          <span className="font-display text-[11px] font-semibold tracking-[0.28em] text-navy sm:hidden">
            ALPHA RENOV
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Navigation principale">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-[11px] font-medium tracking-[0.22em] uppercase text-ink-muted transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden border border-line-strong px-5 py-2.5 font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white md:inline-block"
        >
          Devis
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-line md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-4 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-navy transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-full bg-navy transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white/98 backdrop-blur-md md:hidden">
          <nav className="section-pad flex flex-col gap-1 py-6" aria-label="Navigation mobile">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 font-display text-sm tracking-[0.18em] uppercase text-ink-muted hover:text-navy"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 border border-line-strong px-5 py-3 text-center font-display text-[11px] tracking-[0.2em] uppercase text-navy"
            >
              Demander un devis
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
