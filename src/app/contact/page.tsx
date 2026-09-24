import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { Faq, FaqJsonLd } from "@/components/Faq";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { faqByPage } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Contact entreprise bâtiment Plaisance-du-Touch",
  description:
    "Contactez Alpha Renov France — entreprise générale du bâtiment, intérieur & extérieur, tous corps de métiers à Plaisance-du-Touch (31).",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const faqs = faqByPage.contact;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <FaqJsonLd items={faqs} />
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre chantier."
        description="Intérieur, extérieur ou projet tous corps d'état — décrivez-nous votre besoin. Réponse sous 48 h."
      />
      <Contact hideIntro />
      <Faq items={faqs} title="Questions avant de nous écrire" />
    </>
  );
}
