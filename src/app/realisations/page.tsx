import type { Metadata } from "next";
import { Faq, FaqJsonLd } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";
import { Projects } from "@/components/Projects";
import { faqByPage } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Sélection de projets de rénovation intérieure Alpha Renov France.",
};

export default function RealisationsPage() {
  const faqs = faqByPage.realisations;

  return (
    <>
      <FaqJsonLd items={faqs} />
      <PageHero
        eyebrow="Réalisations"
        title="Des volumes qui respirent."
        description="Sélection de projets récents — intérieurs rénovés avec la même discipline : lignes, lumière, matière."
      />
      <Projects hideIntro />
      <Faq items={faqs} title="Questions sur nos réalisations" />
    </>
  );
}
