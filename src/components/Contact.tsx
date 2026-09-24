"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { company } from "@/lib/company";
import { Reveal } from "./Reveal";

export function Contact({ hideIntro = false }: { hideIntro?: boolean }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="w-full overflow-hidden bg-white py-16 md:py-24">
      <div
        className={`section-pad mx-auto grid max-w-7xl gap-16 ${
          hideIntro ? "lg:grid-cols-1 lg:max-w-3xl" : "lg:grid-cols-2 lg:gap-24"
        }`}
      >
        {!hideIntro && (
          <Reveal>
            <p className="font-display text-[11px] font-semibold tracking-[0.28em] uppercase text-steel">
              Contact
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.02em] text-navy">
              Parlons de votre lieu.
            </h2>
            <p className="mt-5 max-w-md text-ink-muted leading-relaxed">
              Décrivez-nous votre projet. Nous revenons vers vous sous 48 h pour
              un premier échange et, si pertinent, une visite.
            </p>

            <dl className="mt-12 space-y-6 border-t border-line pt-10">
              <ContactDetails />
            </dl>
          </Reveal>
        )}

        {hideIntro && (
          <Reveal>
            <dl className="mb-12 grid gap-6 border-b border-line pb-10 sm:grid-cols-3">
              <ContactDetails />
            </dl>
          </Reveal>
        )}

        <Reveal delay={hideIntro ? 0 : 120}>
          <form
            onSubmit={onSubmit}
            className="border border-line bg-bg-elevated p-6 transition-colors duration-500 focus-within:border-line-strong md:p-10"
          >
            {sent ? (
              <div className="flex min-h-[280px] flex-col justify-center">
                <p className="font-display text-2xl font-semibold text-navy">
                  Message envoyé.
                </p>
                <p className="mt-3 text-ink-muted">
                  Merci. Notre équipe vous recontacte très bientôt.
                </p>
                <Link
                  href="/rendez-vous"
                  className="mt-6 font-display text-[11px] tracking-[0.2em] uppercase text-navy underline-offset-4 hover:underline"
                >
                  Ou prenez rendez-vous →
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                <Field label="Nom" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Téléphone" name="phone" type="tel" />
                <div>
                  <label
                    htmlFor="message"
                    className="font-display text-[10px] tracking-[0.2em] uppercase text-steel-muted"
                  >
                    Projet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full resize-none border-b border-line bg-transparent py-3 text-navy outline-none transition-colors placeholder:text-ink-muted/50 focus:border-navy"
                    placeholder="Type de bien, surface, délais souhaités…"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary mt-4 w-full bg-navy py-4 font-display text-[11px] font-semibold tracking-[0.22em] uppercase text-white transition-transform duration-300 hover:bg-navy-mid hover:scale-[1.01] md:w-auto md:px-10"
                >
                  Envoyer
                </button>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function ContactDetails() {
  return (
    <>
      <div>
        <dt className="font-display text-[10px] tracking-[0.22em] uppercase text-steel-muted">
          Email
        </dt>
        <dd className="mt-2">
          <a
            href={`mailto:${company.email}`}
            className="text-navy transition-colors hover:text-navy-mid"
          >
            {company.email}
          </a>
        </dd>
      </div>
      <div>
        <dt className="font-display text-[10px] tracking-[0.22em] uppercase text-steel-muted">
          Téléphone
        </dt>
        <dd className="mt-2">
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            className="text-navy transition-colors hover:text-navy-mid"
          >
            {company.phone}
          </a>
        </dd>
      </div>
      <div>
        <dt className="font-display text-[10px] tracking-[0.22em] uppercase text-steel-muted">
          Adresse
        </dt>
        <dd className="mt-2 text-ink-muted">{company.address.full}</dd>
      </div>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-display text-[10px] tracking-[0.2em] uppercase text-steel-muted"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-b border-line bg-transparent py-3 text-navy outline-none transition-colors placeholder:text-ink-muted/50 focus:border-navy"
      />
    </div>
  );
}
