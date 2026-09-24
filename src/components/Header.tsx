"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/approche", label: "Approche" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/nous-rejoindre", label: "Partenaires" },
  { href: "/rendez-vous", label: "Rendez-vous" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "border-b border-line bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="section-pad mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <Link href="/" className="shrink-0" aria-label="Alpha Renov France">
          <Image
            src="/logo.svg"
            alt="Alpha Renov France"
            width={220}
            height={150}
            className="h-12 w-auto object-contain sm:h-14 md:h-16"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-[11px] font-medium tracking-[0.22em] uppercase transition-colors ${
                  active ? "text-navy" : "text-ink-muted hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/rendez-vous"
          className="hidden border border-line-strong px-5 py-2.5 font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white md:inline-block"
        >
          Devis
        </Link>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-line lg:hidden"
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
        <div className="border-t border-line bg-white/98 backdrop-blur-md lg:hidden">
          <nav className="section-pad flex flex-col gap-1 py-6" aria-label="Navigation mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 font-display text-sm tracking-[0.18em] uppercase text-ink-muted hover:text-navy"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/rendez-vous"
              className="mt-4 border border-line-strong px-5 py-3 text-center font-display text-[11px] tracking-[0.2em] uppercase text-navy"
            >
              Prendre rendez-vous
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
