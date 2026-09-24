import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Nous rejoindre — Partenaires professionnels",
  description:
    "Syndics de copropriété, assureurs, gestionnaires de sinistres, agences immobilières : devenez partenaire Alpha Renov France. Entreprise générale du bâtiment, tous corps de métiers à Toulouse (31).",
  alternates: { canonical: "/nous-rejoindre" },
  openGraph: {
    title: "Nous rejoindre — Partenaires professionnels | Alpha Renov France",
    description:
      "Syndics, assureurs, gestionnaires de sinistres, agences immo : un seul prestataire bâtiment pour tous vos besoins en Haute-Garonne.",
    url: "/nous-rejoindre",
  },
};

/* ── Partner profiles ─────────────────────────────────────── */
const partners = [
  {
    num: "01",
    title: "Syndics de copropriété",
    description:
      "Entretien des parties communes, ravalement, toiture, mise en conformité — un seul prestataire TCE pour simplifier la gestion de vos immeubles.",
    benefits: [
      "Devis détaillés pour les AG",
      "Interlocuteur unique du diagnostic à la réception",
      "Interventions planifiées selon vos contraintes copro",
      "Reporting photo et suivi d'avancement",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-6h6v6" />
        <path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Assureurs",
    description:
      "Réparations de sinistres, remise en état, chiffrages contradictoires — réactivité et transparence pour accélérer vos dossiers d'indemnisation.",
    benefits: [
      "Intervention rapide après déclaration",
      "Chiffrages détaillés conformes aux grilles",
      "Coordination directe avec vos experts",
      "Garantie décennale et RC Pro",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Gestionnaires de sinistres",
    description:
      "Dégâts des eaux, incendies, catastrophes naturelles — prise en charge complète de la remise en état, du constat aux finitions.",
    benefits: [
      "Diagnostic technique sur site sous 48 h",
      "Devis conforme aux conventions IRSI / CIDRE",
      "Suivi de chantier avec reporting régulier",
      "Facturation claire et traçable",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 14l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Agences immobilières",
    description:
      "Remise en état avant vente, rafraîchissement locatif, travaux de valorisation — des prestations rapides qui maximisent vos mandats.",
    benefits: [
      "Home staging et remise en état express",
      "Travaux de valorisation avant mise en vente",
      "Rénovation locative clé en main",
      "Tarifs partenaires et délais maîtrisés",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15 21v-4a2 2 0 00-2-2H9" />
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <circle cx="17" cy="17" r="3" />
        <path d="M21 21l-1.5-1.5" />
      </svg>
    ),
  },
];

/* ── Strengths ────────────────────────────────────────────── */
const strengths = [
  {
    label: "TCE",
    value: "Tous corps d'état",
    description: "Un seul contrat, un seul interlocuteur pour tous les lots du bâtiment.",
  },
  {
    label: "Réactivité",
    value: "48 h",
    description: "Diagnostic sur site et premier chiffrage sous deux jours ouvrés.",
  },
  {
    label: "Couverture",
    value: "31 · Haute-Garonne",
    description: "Toulouse, Plaisance-du-Touch et communes limitrophes.",
  },
  {
    label: "Garanties",
    value: "Décennale & RC Pro",
    description: "Assurances professionnelles à jour, attestations disponibles sur demande.",
  },
];

export default function NousRejoindrePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Nous rejoindre", path: "/nous-rejoindre" },
        ]}
      />

      <PageHero
        eyebrow="Partenaires"
        title="Devenez donneur d'ordre."
        description="Syndics, assureurs, gestionnaires de sinistres, agences immobilières — un prestataire bâtiment TCE unique pour tous vos besoins en Haute-Garonne."
      />

      {/* ── Strengths bar ─────────────────────────────────── */}
      <section className="border-b border-line bg-white py-16 md:py-20">
        <div className="section-pad mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-8 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
              {strengths.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-[10px] tracking-[0.22em] uppercase text-steel-muted">
                    {s.label}
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold text-navy">
                    {s.value}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Partner profiles ──────────────────────────────── */}
      <section className="bg-bg-elevated py-24 md:py-32">
        <div className="section-pad mx-auto max-w-7xl">
          <Reveal className="mb-16 max-w-2xl md:mb-20">
            <p className="font-display text-[11px] font-semibold tracking-[0.28em] uppercase text-steel">
              Donneurs d&apos;ordre
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold tracking-[-0.02em] text-navy">
              À chaque métier,{" "}
              <br className="hidden md:block" />
              une réponse bâtiment adaptée.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">
              Nous comprenons les contraintes propres à chaque profession.
              Nos process sont pensés pour s&apos;intégrer à vos méthodes de
              travail, pas l&apos;inverse.
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {partners.map((partner, i) => (
              <Reveal
                key={partner.num}
                delay={i * 90}
                className="group flex flex-col border border-line bg-white p-8 transition-all duration-500 hover:border-line-strong hover:shadow-[0_20px_50px_rgba(10,31,69,0.06)] md:p-10"
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center border border-line text-navy transition-colors duration-500 group-hover:border-navy group-hover:bg-navy group-hover:text-white">
                    {partner.icon}
                  </div>
                  <span className="font-display text-sm tracking-[0.16em] text-steel-muted">
                    {partner.num}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-6 font-display text-xl font-semibold text-navy md:text-2xl">
                  {partner.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                  {partner.description}
                </p>

                {/* Benefits */}
                <ul className="mt-6 flex-1 space-y-2.5 border-t border-line pt-6">
                  {partner.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2.5 text-sm text-ink-muted"
                    >
                      <span className="mt-1.5 block h-1 w-1 shrink-0 bg-navy" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* Animated line */}
                <div className="mt-8 h-px w-0 bg-navy transition-all duration-500 group-hover:w-16" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────── */}
      <section className="border-t border-line bg-white py-24 md:py-32">
        <div className="section-pad mx-auto max-w-7xl">
          <Reveal className="mb-16 max-w-2xl md:mb-20">
            <p className="font-display text-[11px] font-semibold tracking-[0.28em] uppercase text-steel">
              Process
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold tracking-[-0.02em] text-navy">
              Un process simple,{" "}
              <br className="hidden md:block" />
              pensé pour les pros.
            </h2>
          </Reveal>

          <ol className="relative grid gap-0 md:grid-cols-4">
            <div
              className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-line md:block"
              aria-hidden="true"
            />
            {[
              {
                title: "Prise de contact",
                text: "Vous nous transmettez votre besoin par email, téléphone ou via le formulaire. Nous qualifions la demande sous 24 h.",
              },
              {
                title: "Diagnostic & chiffrage",
                text: "Visite sur site, relevés techniques, devis détaillé conforme à vos exigences (grilles assureurs, format AG, etc.).",
              },
              {
                title: "Exécution & suivi",
                text: "Coordination TCE, planning partagé, reporting photo. Un seul interlocuteur tout au long du chantier.",
              },
              {
                title: "Réception & SAV",
                text: "Réception contradictoire, PV, levée de réserves. Vos dossiers sont bouclés proprement.",
              },
            ].map((step, i) => (
              <Reveal
                key={step.title}
                as="li"
                delay={i * 100}
                className="relative border-t border-line py-10 md:border-t-0 md:px-8 md:py-0 md:first:pl-0 md:last:pr-0"
              >
                <span className="relative z-10 flex h-16 w-16 items-center justify-center border border-line bg-white font-display text-xl font-semibold text-navy">
                  0{i + 1}
                </span>
                <h3 className="mt-8 font-display text-lg font-semibold text-navy md:text-xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-ink-muted">
                  {step.text}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="border-t border-line bg-bg-elevated py-20 md:py-24">
        <div className="section-pad mx-auto max-w-7xl">
          <Reveal className="flex flex-col items-start justify-between gap-10 border border-line bg-white px-8 py-12 md:flex-row md:items-center md:px-12 md:py-14">
            <div className="max-w-xl">
              <p className="font-display text-[11px] font-semibold tracking-[0.28em] uppercase text-steel">
                Partenariat
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold tracking-[-0.02em] text-navy">
                Travaillons ensemble.
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                Contactez-nous pour discuter de vos besoins. Nous construisons
                des partenariats durables, fondés sur la rigueur et la réactivité.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-line pt-6 text-sm text-ink-muted">
                <span>SIREN {company.siren}</span>
                <span className="hidden sm:inline">·</span>
                <span>{company.rcs}</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center bg-navy px-7 py-3.5 font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-white transition-colors hover:bg-navy-mid"
              >
                Nous contacter
              </Link>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center justify-center border border-line-strong px-7 py-3.5 font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-navy transition-colors hover:border-navy"
              >
                {company.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
