export type FaqItem = {
  question: string;
  answer: string;
};

export const faqByPage = {
  home: [
    {
      question: "Qui est Alpha Renov France ?",
      answer:
        "Alpha Renov France est une entreprise générale du bâtiment basée à Plaisance-du-Touch (31). Nous réalisons des rénovations intérieures et des travaux tous corps d'état, avec une approche précise et qualitative.",
    },
    {
      question: "Dans quelle zone intervenez-vous ?",
      answer:
        "Nous intervenons principalement en Haute-Garonne et autour de Toulouse, depuis notre siège à Plaisance-du-Touch. Les projets hors zone sont étudiés au cas par cas.",
    },
    {
      question: "Quels types de travaux proposez-vous ?",
      answer:
        "Cuisine sur mesure, salles de bain, espaces de vie, rénovation globale et travaux de bâtiment tous corps d'état (maçonnerie, couverture, etc.).",
    },
    {
      question: "Comment démarrer un projet avec vous ?",
      answer:
        "Vous pouvez prendre rendez-vous en ligne, nous écrire via le formulaire de contact, ou nous appeler. Nous organisons ensuite un diagnostic et un devis clair.",
    },
  ],
  approche: [
    {
      question: "Comment se déroule un projet de rénovation ?",
      answer:
        "Notre méthode suit trois étapes : écoute et diagnostic, conception et devis, puis réalisation du chantier avec un suivi régulier jusqu'à la livraison.",
    },
    {
      question: "Proposez-vous un devis détaillé ?",
      answer:
        "Oui. Après visite et analyse des contraintes techniques, nous établissons un devis clair avec planning, matériaux et périmètre des travaux.",
    },
    {
      question: "Quelles disciplines maîtrisez-vous ?",
      answer:
        "Cuisine sur mesure, salles de bain, espaces de vie et rénovation globale, en coordination des corps d'état pour un rendu cohérent.",
    },
    {
      question: "Combien de temps dure une rénovation ?",
      answer:
        "Cela dépend de la surface et de l'ampleur des travaux. Un planning est défini dès la phase de conception pour cadrer les délais.",
    },
  ],
  realisations: [
    {
      question: "Puis-je visiter des chantiers ou projets réalisés ?",
      answer:
        "Selon les disponibilités et l'accord des clients, nous pouvons partager des références ou organiser une présentation de projets similaires au vôtre.",
    },
    {
      question: "Travaillez-vous sur des appartements et des maisons ?",
      answer:
        "Oui. Nous rénovons des appartements, maisons individuelles et espaces de vie, en adaptant la méthode au type de bien.",
    },
    {
      question: "Les photos des réalisations sont-elles représentatives ?",
      answer:
        "Elles illustrent notre exigence de finition et d'ambiance. Chaque projet est unique : volumes, matériaux et usages sont définis avec vous.",
    },
    {
      question: "Pouvez-vous reprendre un chantier déjà commencé ?",
      answer:
        "Oui, après un diagnostic technique. Nous évaluons l'existant, les priorités et le budget pour reprendre le projet proprement.",
    },
  ],
  "rendez-vous": [
    {
      question: "Comment prendre rendez-vous ?",
      answer:
        "Utilisez le module de réservation sur cette page pour choisir un créneau. Vous recevez une confirmation avec les détails de l'échange.",
    },
    {
      question: "Le premier rendez-vous est-il gratuit ?",
      answer:
        "Le premier échange téléphonique ou en visioconférence est sans engagement. Une visite sur site peut ensuite être planifiée selon le projet.",
    },
    {
      question: "Que préparer avant le rendez-vous ?",
      answer:
        "Idéalement : type de bien, surface approximative, photos, contraintes (délais, budget), et vos priorités (cuisine, salle de bain, rénovation globale…).",
    },
    {
      question: "Puis-je modifier ou annuler mon créneau ?",
      answer:
        "Oui. Vous pouvez gérer votre rendez-vous via le lien de confirmation reçu par e-mail, ou nous contacter directement.",
    },
  ],
  contact: [
    {
      question: "Quel est le délai de réponse ?",
      answer:
        "Nous revenons vers vous sous 48 h ouvrées après réception de votre message, pour un premier échange ou pour fixer une visite.",
    },
    {
      question: "Où se trouve Alpha Renov France ?",
      answer:
        "Notre siège est situé au 10 Rue Issac Newton, 31830 Plaisance-du-Touch (Haute-Garonne).",
    },
    {
      question: "Comment obtenir un devis ?",
      answer:
        "Décrivez votre projet via le formulaire, prenez rendez-vous, ou appelez-nous. Un devis détaillé suit le diagnostic.",
    },
    {
      question: "Intervenez-vous en urgence ?",
      answer:
        "Nous priorisons les demandes selon leur nature. Contactez-nous pour évaluer la rapidité d'intervention possible.",
    },
  ],
  "mentions-legales": [
    {
      question: "Quelle est la forme juridique d'Alpha Renov France ?",
      answer:
        "Alpha Renov France est une SASU (société par actions simplifiée unipersonnelle), immatriculée au RCS de Toulouse sous le numéro 939 665 204.",
    },
    {
      question: "Qui dirige l'entreprise ?",
      answer:
        "Le dirigeant est DJAOUTI Liamine. Le capital social s'élève à 1 000,00 €.",
    },
    {
      question: "Quel est le numéro de TVA ?",
      answer:
        "Le numéro de TVA intracommunautaire est FR54939665204. Le SIRET du siège est 939 665 204 00011.",
    },
  ],
} as const satisfies Record<string, FaqItem[]>;

export type FaqPageKey = keyof typeof faqByPage;
