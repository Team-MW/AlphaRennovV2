import type { Metadata } from "next";
import { Faq, FaqJsonLd } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import {
  HomeCta,
  HomeExpertise,
  HomeIntro,
  HomeLocal,
  HomeMethod,
  HomeProjects,
  HomePromise,
} from "@/components/home/HomeSections";
import { faqByPage } from "@/lib/faq";
import { defaultDescription, defaultTitle } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: defaultTitle },
  description: defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
  },
};

export default function HomePage() {
  const faqs = faqByPage.home;

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }]} />
      <FaqJsonLd items={faqs} />
      <Hero />
      <HomeIntro />
      <HomeExpertise />
      <HomeMethod />
      <HomeProjects />
      <HomePromise />
      <HomeLocal />
      <HomeCta />
      <Faq items={faqs} />
    </>
  );
}
