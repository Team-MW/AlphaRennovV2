import type { Metadata } from "next";
import { Faq, FaqJsonLd } from "@/components/Faq";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Projects } from "@/components/Projects";
import { faqByPage } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Réalisations intérieur & extérieur",
  description:
    "Projets de rénovation intérieure et extérieure, travaux tous corps d'état en Haute-Garonne — Alpha Renov France.",
  alternates: { canonical: "/realisations" },
};

export default function RealisationsPage() {
  const faqs = faqByPage.realisations;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Réalisations", path: "/realisations" },
        ]}
      />
      <FaqJsonLd items={faqs} />
      <PageHero
        eyebrow="Réalisations"
        title="Intérieur & extérieur, réalisés avec précision."
        description="Sélection de projets — rénovation, enveloppe et chantiers tous corps d'état en Haute-Garonne."
      />
      <Projects hideIntro />
      <Faq items={faqs} title="Questions sur nos réalisations" />
    </>
  );
}
