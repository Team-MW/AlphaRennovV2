export type FaqItem = {
  question: string;
  answer: string;
};

export const faqByPage = {
  home: [
    {
      question:
        "Alpha Renov France intervient-elle en intérieur et en extérieur ?",
      answer:
        "Oui. Nous couvrons l'intérieur (rénovation, cuisine, salles de bain, espaces de vie) et l'extérieur (façades, terrasses, aménagements, enveloppe du bâtiment), en tant qu'entreprise générale du bâtiment tous corps d'état à Plaisance-du-Touch et autour de Toulouse.",
    },
    {
      question: "Quels corps de métiers du bâtiment proposez-vous ?",
      answer:
        "Maçonnerie, couverture, rénovation intérieure et extérieure, second œuvre, construction de maisons individuelles et pilotage tous corps d'état. Un seul interlocuteur pour coordonner l'ensemble du chantier.",
    },
    {
      question: "Dans quelle zone intervenez-vous ?",
      answer:
        "Principalement en Haute-Garonne (31) : Plaisance-du-Touch, Toulouse et communes alentours. Les projets hors zone sont étudiés au cas par cas.",
    },
    {
      question: "Comment obtenir un devis pour des travaux de bâtiment ?",
      answer:
        "Prenez rendez-vous en ligne, utilisez le formulaire de contact ou appelez-nous. Après diagnostic, nous établissons un devis clair avec planning, matériaux et périmètre des travaux.",
    },
  ],
  approche: [
    {
      question: "Comment se déroule un projet intérieur ou extérieur ?",
      answer:
        "Même méthode pour l'intérieur et l'extérieur : écoute et diagnostic, conception et devis, puis réalisation avec suivi jusqu'à la livraison.",
    },
    {
      question: "Gérez-vous tous les corps d'état ?",
      answer:
        "Oui. En tant qu'entreprise générale du bâtiment, nous coordonnons les métiers nécessaires (maçonnerie, couverture, second œuvre, finitions) pour un chantier cohérent.",
    },
    {
      question: "Proposez-vous un devis détaillé ?",
      answer:
        "Oui. Après visite et analyse technique, nous remettons un devis lisible : périmètre, délais, matériaux et planning.",
    },
    {
      question: "Combien de temps dure une rénovation ou des travaux TCE ?",
      answer:
        "Cela dépend de la surface, de l'intérieur/extérieur et de l'ampleur. Un planning est fixé dès la conception pour cadrer les délais.",
    },
  ],
  realisations: [
    {
      question: "Réalisez-vous des projets intérieur et extérieur ?",
      answer:
        "Oui. Nos réalisations couvrent rénovations intérieures, travaux d'enveloppe, aménagements extérieurs et projets globaux tous corps d'état.",
    },
    {
      question: "Travaillez-vous sur des appartements et des maisons ?",
      answer:
        "Oui. Appartements, maisons individuelles et projets résidentiels en Haute-Garonne, adaptés à chaque type de bien.",
    },
    {
      question: "Les photos des réalisations sont-elles représentatives ?",
      answer:
        "Elles illustrent notre exigence de finition. Chaque projet est unique : volumes, matériaux et usages sont définis avec vous.",
    },
    {
      question: "Pouvez-vous reprendre un chantier déjà commencé ?",
      answer:
        "Oui, après diagnostic technique. Nous évaluons l'existant, les priorités et le budget pour reprendre proprement.",
    },
  ],
  "rendez-vous": [
    {
      question: "Comment prendre rendez-vous pour un devis bâtiment ?",
      answer:
        "Utilisez le module de réservation sur cette page. Idéal pour un projet de rénovation intérieure, extérieure ou tous corps d'état à Toulouse.",
    },
    {
      question: "Le premier rendez-vous est-il gratuit ?",
      answer:
        "Le premier échange téléphonique ou en visioconférence est sans engagement. Une visite sur site peut suivre selon le projet.",
    },
    {
      question: "Que préparer avant le rendez-vous ?",
      answer:
        "Type de bien, intérieur et/ou extérieur, surface, photos, délais, budget, et vos priorités (rénovation, maçonnerie, toiture, etc.).",
    },
    {
      question: "Puis-je modifier ou annuler mon créneau ?",
      answer:
        "Oui, via le lien de confirmation reçu par e-mail, ou en nous contactant directement.",
    },
  ],
  contact: [
    {
      question: "Quel est le délai de réponse ?",
      answer:
        "Sous 48 h ouvrées après votre message, pour un premier échange ou pour fixer une visite (intérieur, extérieur ou TCE).",
    },
    {
      question: "Où se trouve Alpha Renov France ?",
      answer:
        "Siège : 10 Rue Issac Newton, 31830 Plaisance-du-Touch (Haute-Garonne), près de Toulouse.",
    },
    {
      question: "Comment obtenir un devis intérieur / extérieur ?",
      answer:
        "Décrivez votre projet (intérieur, extérieur ou global), prenez rendez-vous ou appelez-nous. Un devis détaillé suit le diagnostic.",
    },
    {
      question: "Intervenez-vous en urgence ?",
      answer:
        "Nous priorisons selon la nature de la demande. Contactez-nous pour évaluer la rapidité d'intervention possible.",
    },
  ],
  "mentions-legales": [
    {
      question: "Quelle est la forme juridique d'Alpha Renov France ?",
      answer:
        "SASU (société par actions simplifiée unipersonnelle), immatriculée au RCS de Toulouse sous le n° 939 665 204.",
    },
    {
      question: "Qui dirige l'entreprise ?",
      answer:
        "Le dirigeant est DJAOUTI Liamine. Capital social : 1 000,00 €.",
    },
    {
      question: "Quel est le numéro de TVA ?",
      answer:
        "TVA intracommunautaire : FR54939665204. SIRET siège : 939 665 204 00011.",
    },
  ],
} as const satisfies Record<string, FaqItem[]>;

export type FaqPageKey = keyof typeof faqByPage;
