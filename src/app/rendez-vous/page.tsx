import type { Metadata } from "next";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { Faq, FaqJsonLd } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { faqByPage } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Rendez-vous",
  description:
    "Prenez rendez-vous en ligne avec Alpha Renov France via Calendly.",
};

export default function RendezVousPage() {
  const faqs = faqByPage["rendez-vous"];

  return (
    <>
      <FaqJsonLd items={faqs} />
      <PageHero
        eyebrow="Rendez-vous"
        title="Réservez un créneau."
        description="Choisissez le moment qui vous convient pour échanger sur votre projet de rénovation."
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
