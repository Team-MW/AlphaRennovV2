import type { Metadata } from "next";
import { Approach } from "@/components/Approach";
import { Faq, FaqJsonLd } from "@/components/Faq";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Services } from "@/components/Services";
import { faqByPage } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Approche & métiers du bâtiment",
  description:
    "Intérieur & extérieur, tous corps de métiers : méthode Alpha Renov France — diagnostic, devis et chantier à Toulouse / Plaisance-du-Touch.",
  alternates: { canonical: "/approche" },
  keywords: [
    "entreprise générale bâtiment Toulouse",
    "tous corps d'état",
    "rénovation intérieure extérieure",
    "méthode chantier",
  ],
};

export default function ApprochePage() {
  const faqs = faqByPage.approche;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Approche", path: "/approche" },
        ]}
      />
      <FaqJsonLd items={faqs} />
      <PageHero
        eyebrow="Approche"
        title="Intérieur & extérieur. Tous corps de métiers."
        description="Nos disciplines d'intervention — rénovation, maçonnerie, couverture, TCE — et une méthode claire du diagnostic à la livraison."
      />
      <Services hideIntro />
      <div className="border-t border-line bg-bg-elevated">
        <Approach hideIntro />
      </div>
      <Faq items={faqs} title="Questions sur notre approche" />
    </>
  );
}
