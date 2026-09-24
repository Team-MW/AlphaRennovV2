/** Configurations pour les prises de rendez-vous Cal.com */
export const CALENDLY_URL = "https://cal.com/alpharenovfrance/devis";

export const CAL_CATEGORIES = [
  {
    id: "devis",
    label: "Demande de Devis",
    subtitle: "Rénovation, Travaux & Projets",
    url: "https://cal.com/alpharenovfrance/devis",
    badge: "Populaire",
  },
  {
    id: "artisan",
    label: "Devenir Artisan",
    subtitle: "Partenariat & Sous-traitance",
    url: "https://cal.com/alpharenovfrance/artisan",
    badge: "Pros",
  },
  {
    id: "general",
    label: "Rendez-vous Général",
    subtitle: "Échange & Prise de contact",
    url: "https://cal.com/alpharenovfrance",
    badge: "Direct",
  },
] as const;

export type CalCategoryId = (typeof CAL_CATEGORIES)[number]["id"];

export const CAL_URLS = {
  general: "https://cal.com/alpharenovfrance",
  devis: "https://cal.com/alpharenovfrance/devis",
  artisan: "https://cal.com/alpharenovfrance/artisan",
} as const;
