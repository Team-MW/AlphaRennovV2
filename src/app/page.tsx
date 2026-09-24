import Link from "next/link";
import { Faq, FaqJsonLd } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { faqByPage } from "@/lib/faq";

const highlights = [
  {
    href: "/approche",
    num: "01",
    title: "Approche",
    text: "Savoir-faire et méthode, du diagnostic à la livraison.",
  },
  {
    href: "/realisations",
    num: "02",
    title: "Réalisations",
    text: "Des intérieurs rénovés avec précision et matière.",
  },
  {
    href: "/rendez-vous",
    num: "03",
    title: "Rendez-vous",
    text: "Réservez un créneau pour parler de votre projet.",
  },
];

export default function HomePage() {
  const faqs = faqByPage.home;

  return (
    <>
      <FaqJsonLd items={faqs} />
      <Hero />
      <section className="border-t border-line bg-white py-20 md:py-28">
        <div className="section-pad mx-auto max-w-7xl">
          <Reveal className="mb-14 max-w-xl">
            <p className="font-display text-[11px] font-semibold tracking-[0.28em] uppercase text-steel">
              Explorer
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.02em] text-navy">
              Trois portes d&apos;entrée.
            </h2>
          </Reveal>

          <ul className="grid gap-0 border-t border-line sm:grid-cols-3">
            {highlights.map((item, i) => (
              <Reveal key={item.href} as="li" delay={i * 80}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col border-b border-line px-0 py-8 transition-colors hover:bg-bg-elevated sm:border-r sm:px-6 sm:last:border-r-0 sm:first:pl-0 sm:last:pr-0"
                >
                  <span className="font-display text-xs tracking-[0.2em] text-steel-muted">
                    {item.num}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-navy transition-colors group-hover:text-navy-mid">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {item.text}
                  </p>
                  <span className="mt-6 font-display text-[10px] tracking-[0.18em] uppercase text-steel transition-colors group-hover:text-navy">
                    Découvrir →
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <Faq items={faqs} />
    </>
  );
}
