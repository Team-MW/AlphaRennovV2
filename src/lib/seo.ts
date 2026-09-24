import { company } from "./company";

export const siteConfig = {
  name: company.shortName,
  legalName: company.name,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://alpharenov.fr",
  locale: "fr_FR",
  phone: company.phone,
  email: company.email,
  address: company.address,
} as const;

export const seoKeywords = [
  "entreprise générale du bâtiment Toulouse",
  "rénovation intérieure Toulouse",
  "rénovation extérieure Haute-Garonne",
  "tous corps d'état bâtiment",
  "maçonnerie Plaisance-du-Touch",
  "couverture toiture Toulouse",
  "rénovation maison Haute-Garonne",
  "construction maisons individuelles 31",
  "entreprise bâtiment Plaisance-du-Touch",
  "travaux intérieur extérieur",
  "Alpha Renov France",
  "rénovation cuisine salle de bain Toulouse",
  "façade terrasse aménagement extérieur",
  "entreprise tous corps d'état Toulouse",
] as const;

export const defaultDescription =
  "Entreprise générale du bâtiment à Plaisance-du-Touch (31). Rénovation intérieure, extérieure, maçonnerie & couverture à Toulouse. Devis gratuit en 48h !";

export const defaultTitle =
  "Alpha Renov France | Intérieur & Extérieur — Tous corps de métiers du bâtiment à Toulouse";

export function absoluteUrl(path = "/") {
  const base = siteConfig.url.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
