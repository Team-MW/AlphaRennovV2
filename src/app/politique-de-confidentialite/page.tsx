import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité et protection des données (RGPD) d'${company.name}. Transparence sur le traitement de vos informations personnelles.`,
  robots: { index: true, follow: true },
  alternates: { canonical: "/politique-de-confidentialite" },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Politique de confidentialité", path: "/politique-de-confidentialite" },
        ]}
      />

      <PageHero
        eyebrow="Confidentialité"
        title="Politique de confidentialité"
        description="Comment nous collectons, utilisons et protégeons vos données personnelles."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="section-pad mx-auto max-w-3xl space-y-14">

          {/* ── 1. Responsable du traitement ──────────────── */}
          <div>
            <h2 className="font-display text-xl font-semibold text-navy md:text-2xl">
              1. Responsable du traitement
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
              Le responsable du traitement des données collectées sur ce site est :
            </p>
            <dl className="mt-6 border-t border-line">
              <Row label="Raison sociale" value={company.name} />
              <Row label="Forme juridique" value={company.legalForm} />
              <Row label="Siège social" value={company.address.full} />
              <Row label="SIREN" value={company.siren} />
              <Row label="Dirigeant" value={company.director} />
              <Row label="E-mail" value={company.email} />
              <Row label="Téléphone" value={company.phone} />
            </dl>
          </div>

          {/* ── 2. Données collectées ─────────────────────── */}
          <div>
            <h2 className="font-display text-xl font-semibold text-navy md:text-2xl">
              2. Données collectées
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
              Nous collectons uniquement les données que vous nous transmettez
              volontairement via les formulaires de contact, de demande de devis
              ou de prise de rendez-vous :
            </p>
            <ul className="mt-4 space-y-2 border-t border-line pt-6">
              {[
                "Nom et prénom",
                "Adresse e-mail",
                "Numéro de téléphone",
                "Adresse postale (si renseignée)",
                "Description du projet ou de la demande",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[15px] text-ink-muted"
                >
                  <span className="mt-2 block h-1 w-1 shrink-0 bg-navy" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
              Aucune donnée sensible (origine ethnique, opinions politiques,
              données de santé, etc.) n&apos;est collectée.
            </p>
          </div>

          {/* ── 3. Finalités du traitement ────────────────── */}
          <div>
            <h2 className="font-display text-xl font-semibold text-navy md:text-2xl">
              3. Finalités du traitement
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
              Vos données personnelles sont collectées et traitées pour les
              finalités suivantes :
            </p>
            <ul className="mt-4 space-y-2 border-t border-line pt-6">
              {[
                "Répondre à vos demandes de contact et de devis",
                "Assurer le suivi de votre projet de travaux",
                "Planifier et confirmer vos rendez-vous",
                "Vous recontacter dans le cadre de votre demande",
                "Améliorer la qualité de nos services",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[15px] text-ink-muted"
                >
                  <span className="mt-2 block h-1 w-1 shrink-0 bg-navy" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── 4. Base légale ────────────────────────────── */}
          <div>
            <h2 className="font-display text-xl font-semibold text-navy md:text-2xl">
              4. Base légale du traitement
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
              Le traitement de vos données repose sur :
            </p>
            <ul className="mt-4 space-y-2 border-t border-line pt-6">
              {[
                "Votre consentement (article 6.1.a du RGPD) — lorsque vous remplissez un formulaire",
                "L'exécution de mesures précontractuelles (article 6.1.b du RGPD) — dans le cadre d'une demande de devis",
                "Notre intérêt légitime (article 6.1.f du RGPD) — pour améliorer nos services",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[15px] text-ink-muted"
                >
                  <span className="mt-2 block h-1 w-1 shrink-0 bg-navy" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── 5. Destinataires ──────────────────────────── */}
          <div>
            <h2 className="font-display text-xl font-semibold text-navy md:text-2xl">
              5. Destinataires des données
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
              Vos données sont destinées exclusivement à l&apos;équipe
              d&apos;{company.shortName} et ne sont jamais vendues, louées ou
              cédées à des tiers à des fins commerciales.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
              Elles peuvent être transmises à nos sous-traitants techniques
              dans le strict cadre de leur mission :
            </p>
            <ul className="mt-4 space-y-2 border-t border-line pt-6">
              {[
                "Hébergeur du site (Vercel Inc.)",
                "Service de formulaires (JotForm Inc.)",
                "Service de prise de rendez-vous (Calendly LLC)",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[15px] text-ink-muted"
                >
                  <span className="mt-2 block h-1 w-1 shrink-0 bg-navy" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── 6. Durée de conservation ──────────────────── */}
          <div>
            <h2 className="font-display text-xl font-semibold text-navy md:text-2xl">
              6. Durée de conservation
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
              Vos données personnelles sont conservées pendant une durée
              proportionnée à leur finalité :
            </p>
            <dl className="mt-6 border-t border-line">
              <Row
                label="Demandes de contact"
                value="3 ans à compter du dernier échange"
              />
              <Row
                label="Demandes de devis"
                value="3 ans à compter de la fin de la relation commerciale"
              />
              <Row
                label="Rendez-vous"
                value="1 an après la date du rendez-vous"
              />
            </dl>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
              Au-delà de ces durées, vos données sont supprimées ou anonymisées.
            </p>
          </div>

          {/* ── 7. Cookies ────────────────────────────────── */}
          <div>
            <h2 className="font-display text-xl font-semibold text-navy md:text-2xl">
              7. Cookies
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
              Ce site utilise uniquement des cookies strictement nécessaires au
              bon fonctionnement du site (cookies techniques). Aucun cookie
              publicitaire ou de traçage n&apos;est déposé.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
              Les services tiers intégrés (JotForm, Calendly) peuvent déposer
              leurs propres cookies dans le cadre de leur fonctionnement. Nous
              vous invitons à consulter leurs politiques de confidentialité
              respectives.
            </p>
          </div>

          {/* ── 8. Vos droits ─────────────────────────────── */}
          <div>
            <h2 className="font-display text-xl font-semibold text-navy md:text-2xl">
              8. Vos droits
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
              Conformément au Règlement Général sur la Protection des Données
              (RGPD) et à la loi Informatique et Libertés, vous disposez des
              droits suivants :
            </p>
            <ul className="mt-4 space-y-2 border-t border-line pt-6">
              {[
                "Droit d'accès — obtenir la confirmation du traitement de vos données et en recevoir une copie",
                "Droit de rectification — demander la correction de données inexactes ou incomplètes",
                "Droit à l'effacement — demander la suppression de vos données",
                "Droit à la limitation — restreindre temporairement le traitement",
                "Droit d'opposition — vous opposer au traitement fondé sur l'intérêt légitime",
                "Droit à la portabilité — recevoir vos données dans un format structuré et lisible",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[15px] text-ink-muted"
                >
                  <span className="mt-2 block h-1 w-1 shrink-0 bg-navy" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] leading-relaxed text-ink-muted">
              Pour exercer ces droits, adressez votre demande par e-mail à{" "}
              <a
                href={`mailto:${company.email}`}
                className="text-navy underline-offset-2 hover:underline"
              >
                {company.email}
              </a>{" "}
              ou par courrier à : {company.address.full}.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
              Nous nous engageons à répondre dans un délai d&apos;un mois.
            </p>
          </div>

          {/* ── 9. Réclamation CNIL ────────────────────────── */}
          <div>
            <h2 className="font-display text-xl font-semibold text-navy md:text-2xl">
              9. Réclamation auprès de la CNIL
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
              Si vous estimez que le traitement de vos données ne respecte pas
              la réglementation, vous pouvez introduire une réclamation auprès
              de la Commission Nationale de l&apos;Informatique et des Libertés
              (CNIL) :
            </p>
            <dl className="mt-6 border-t border-line">
              <Row label="Site web" value="www.cnil.fr" />
              <Row label="Adresse" value="3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07" />
            </dl>
          </div>

          {/* ── 10. Sécurité ──────────────────────────────── */}
          <div>
            <h2 className="font-display text-xl font-semibold text-navy md:text-2xl">
              10. Sécurité des données
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
              Nous mettons en œuvre les mesures techniques et organisationnelles
              appropriées pour protéger vos données contre tout accès non
              autorisé, altération, divulgation ou destruction. Le site est
              accessible en HTTPS et les données transmises via les formulaires
              sont chiffrées.
            </p>
          </div>

          {/* ── 11. Mise à jour ───────────────────────────── */}
          <div>
            <h2 className="font-display text-xl font-semibold text-navy md:text-2xl">
              11. Mise à jour de cette politique
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
              Cette politique de confidentialité peut être modifiée à tout
              moment. La date de dernière mise à jour est indiquée ci-dessous.
              Nous vous recommandons de la consulter régulièrement.
            </p>
            <p className="mt-4 text-sm text-steel-muted">
              Dernière mise à jour : septembre 2025
            </p>
          </div>

          <p className="text-sm text-steel-muted">
            <Link href="/mentions-legales" className="hover:text-navy">
              Voir les mentions légales →
            </Link>
            <span className="mx-3">·</span>
            <Link href="/" className="hover:text-navy">
              ← Retour à l&apos;accueil
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-b border-line py-4 sm:grid-cols-[220px_1fr] sm:gap-8">
      <dt className="font-display text-[10px] tracking-[0.2em] uppercase text-steel-muted">
        {label}
      </dt>
      <dd className="text-[15px] leading-relaxed text-navy">{value}</dd>
    </div>
  );
}
