import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { Faq, FaqJsonLd } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";
import { faqByPage } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Alpha Renov France pour votre projet de rénovation intérieure.",
};

export default function ContactPage() {
  const faqs = faqByPage.contact;

  return (
    <>
      <FaqJsonLd items={faqs} />
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre lieu."
        description="Décrivez-nous votre projet. Nous revenons vers vous sous 48 h pour un premier échange et, si pertinent, une visite."
      />
      <Contact hideIntro />
      <Faq items={faqs} title="Questions avant de nous écrire" />
    </>
  );
}
