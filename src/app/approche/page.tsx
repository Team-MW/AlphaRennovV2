import type { Metadata } from "next";
import { Approach } from "@/components/Approach";
import { Faq, FaqJsonLd } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";
import { Services } from "@/components/Services";
import { faqByPage } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Approche",
  description:
    "Découvrez le savoir-faire et la méthode Alpha Renov : disciplines, diagnostic, conception et réalisation précise.",
};

export default function ApprochePage() {
  const faqs = faqByPage.approche;

  return (
    <>
      <FaqJsonLd items={faqs} />
      <PageHero
        eyebrow="Approche"
        title="Savoir-faire & méthode."
        description="Nos disciplines d'intervention, puis une méthode claire du diagnostic à la livraison."
      />
      <Services hideIntro />
      <div className="border-t border-line bg-bg-elevated">
        <Approach hideIntro />
      </div>
      <Faq items={faqs} title="Questions sur notre approche" />
    </>
  );
}
