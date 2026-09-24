import { company } from "@/lib/company";
import { absoluteUrl, defaultDescription, siteConfig } from "@/lib/seo";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Organization", "HomeAndConstructionBusiness", "GeneralContractor"],
    "@id": absoluteUrl("/#organization"),
    name: company.name,
    legalName: company.name,
    alternateName: ["Alpha Renov", "Alpha Renov France"],
    url: absoluteUrl("/"),
    logo: absoluteUrl("/logo.png"),
    image: absoluteUrl("/og-image.png"),
    description: defaultDescription,
    email: company.email,
    telephone: company.phone,
    foundingDate: "2025-01-09",
    taxID: company.siren.replace(/\s/g, ""),
    vatID: company.vat,
    naics: "236118",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      postalCode: company.address.zip,
      addressRegion: "Occitanie",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.5655,
      longitude: 1.2975,
    },
    areaServed: [
      { "@type": "City", name: "Toulouse" },
      { "@type": "AdministrativeArea", name: "Haute-Garonne" },
      { "@type": "AdministrativeArea", name: "Occitanie" },
    ],
    knowsAbout: [
      "Rénovation intérieure",
      "Rénovation extérieure",
      "Tous corps d'état du bâtiment",
      "Maçonnerie",
      "Couverture",
      "Construction de maisons individuelles",
      "Cuisine sur mesure",
      "Salle de bain",
      "Façade",
      "Terrasse",
    ],
    founder: {
      "@type": "Person",
      name: company.director,
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: absoluteUrl("/"),
    name: siteConfig.name,
    description: defaultDescription,
    publisher: { "@id": absoluteUrl("/#organization") },
    inLanguage: "fr-FR",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
