import type { Metadata } from "next";
import Link from "next/link";
import { Faq, FaqJsonLd } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";
import { company } from "@/lib/company";
import { faqByPage } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales et informations juridiques d'${company.name} à Plaisance-du-Touch (31). SIREN, coordonnées et hébergement web.`,
  robots: { index: true, follow: true },
};

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

export default function MentionsLegalesPage() {
  const faqs = faqByPage["mentions-legales"];

  return (
    <>
      <FaqJsonLd items={faqs} />
      <PageHero
        eyebrow="Informations légales"
        title="Mentions légales"
        description={`${company.name} — entreprise active, siège à ${company.address.city}.`}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="section-pad mx-auto max-w-3xl space-y-14">
          <div>
            <h2 className="font-display text-xl font-semibold text-navy md:text-2xl">
              Éditeur du site
            </h2>
            <dl className="mt-6 border-t border-line">
              <Row label="Raison sociale" value={company.name} />
              <Row label="Statut" value={company.status} />
              <Row label="Forme juridique" value={company.legalForm} />
              <Row label="Capital social" value={company.capital} />
              <Row label="Dirigeant" value={company.director} />
              <Row label="Création" value={company.creationDate} />
              <Row label="Adresse" value={company.address.full} />
              <Row label="E-mail" value={company.email} />
              <Row label="Téléphone" value={company.phone} />
            </dl>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-navy md:text-2xl">
              Identifiants juridiques
            </h2>
            <dl className="mt-6 border-t border-line">
              <Row label="SIREN" value={company.siren} />
              <Row label="SIRET (siège)" value={company.siret} />
              <Row label="N° TVA" value={company.vat} />
              <Row label="RCS" value={company.rcs} />
              <Row label="Inscription RCS" value={company.rcsStatus} />
              <Row label="RNE" value={company.rne} />
            </dl>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-navy md:text-2xl">
              Activité
            </h2>
            <dl className="mt-6 border-t border-line">
              <Row label="Activité" value={company.activity.main} />
              <Row
                label="Activité déclarée"
                value={company.activity.declared}
              />
              <Row label="Autres activités" value={company.activity.other} />
              <Row
                label="Code NAF / APE"
                value={`${company.activity.naf} — ${company.activity.nafLabel}`}
              />
              <Row label="Domaine" value={company.activity.domain} />
              <Row
                label="Forme d'exercice"
                value={company.activity.exercise}
              />
              <Row label="Effectif" value={company.workforce} />
            </dl>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-navy md:text-2xl">
              Conventions collectives
            </h2>
            <ul className="mt-6 space-y-3 border-t border-line pt-6">
              {company.conventions.map((c) => (
                <li
                  key={c}
                  className="text-[15px] leading-relaxed text-ink-muted"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-navy md:text-2xl">
              Hébergement
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
              Le site est hébergé par le prestataire choisi lors de la mise en
              ligne (Vercel Inc. ou équivalent). Les coordonnées complètes de
              l&apos;hébergeur seront précisées à la publication.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-navy md:text-2xl">
              Propriété intellectuelle
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
              L&apos;ensemble des contenus de ce site (textes, visuels, logo,
              structure) est protégé. Toute reproduction non autorisée est
              interdite.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-navy md:text-2xl">
              Données personnelles
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
              Les informations collectées via les formulaires ou la prise de
              rendez-vous sont destinées uniquement au traitement de votre
              demande. Pour toute question relative à vos données :{" "}
              <a
                href={`mailto:${company.email}`}
                className="text-navy underline-offset-2 hover:underline"
              >
                {company.email}
              </a>
              .
            </p>
          </div>

          <p className="text-sm text-steel-muted">
            <Link href="/" className="hover:text-navy">
              ← Retour à l&apos;accueil
            </Link>
          </p>
        </div>
      </section>

      <Faq items={faqs} title="Questions sur l'entreprise" />
    </>
  );
}
