import type { Metadata } from "next";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { Faq, FaqJsonLd } from "@/components/Faq";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { faqByPage } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Devis & rendez-vous bâtiment Toulouse",
  description:
    "Prenez rendez-vous pour un devis de rénovation intérieure, extérieure ou tous corps d'état — Alpha Renov France, Plaisance-du-Touch.",
  alternates: { canonical: "/rendez-vous" },
};

export default function RendezVousPage() {
  const faqs = faqByPage["rendez-vous"];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Rendez-vous", path: "/rendez-vous" },
        ]}
      />
      <FaqJsonLd items={faqs} />
      <PageHero
        eyebrow="Rendez-vous"
        title="Devis intérieur, extérieur ou TCE."
        description="Réservez un créneau pour parler de votre projet de bâtiment en Haute-Garonne."
      />
      <section className="bg-white py-16 md:py-24">
        <div className="section-pad mx-auto max-w-5xl">
          <Reveal>
            <CalendlyEmbed />
          </Reveal>
        </div>
      </section>
      <Faq items={faqs} title="Questions sur les rendez-vous" />
    </>
  );
}
