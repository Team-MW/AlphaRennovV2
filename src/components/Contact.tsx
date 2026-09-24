"use client";


import { useEffect, useState } from "react";
import { company } from "@/lib/company";
import { Reveal } from "./Reveal";

export function Contact({ hideIntro = false }: { hideIntro?: boolean }) {
  return (
    <section className="w-full overflow-hidden bg-white py-0 md:py-0">
      <div
        className={`section-pad mx-auto grid max-w-7xl gap-0 ${
          hideIntro ? "lg:grid-cols-1 lg:max-w-3xl" : "lg:grid-cols-2 lg:gap-24 py-16 md:py-24"
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
            <dl className="grid gap-6 border-b border-line py-8 sm:grid-cols-3">
              <ContactDetails />
            </dl>
          </Reveal>
        )}

        <JotFormEmbed formId="262642312011340" />
      </div>
    </section>
  );
}

/* ── JotForm embed with loading state ─────────────────────── */
function JotFormEmbed({ formId }: { formId: string }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Inject JotForm's iframe resizer script for auto-height
    const existing = document.getElementById("jotform-handler");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "jotform-handler";
      script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
      script.async = true;
      script.onload = () => {
        // @ts-expect-error JotForm global
        if (window.jotformEmbedHandler) {
          // @ts-expect-error JotForm global
          window.jotformEmbedHandler(
            `iframe[id='JotFormIFrame-${formId}']`,
            "https://form.jotform.com/"
          );
        }
      };
      document.body.appendChild(script);
    }
  }, [formId]);

  return (
    <div className="relative">
      {/* Loading skeleton */}
      {!loaded && (
        <div className="flex flex-col items-center gap-5 bg-white py-12">
          <div className="w-full max-w-sm space-y-4">
            <div className="h-8 w-3/5 overflow-hidden bg-bg-elevated">
              <div className="calendly-loader h-full w-1/2 bg-gradient-to-r from-transparent via-line-strong to-transparent" />
            </div>
            <div className="h-px w-16 bg-steel" />
            <div className="space-y-3">
              <div className="h-4 w-full overflow-hidden bg-bg-elevated">
                <div className="calendly-loader h-full w-1/2 bg-gradient-to-r from-transparent via-line-strong to-transparent" />
              </div>
              <div className="h-4 w-4/5 overflow-hidden bg-bg-elevated">
                <div className="calendly-loader h-full w-1/2 bg-gradient-to-r from-transparent via-line-strong to-transparent" />
              </div>
              <div className="h-4 w-3/5 overflow-hidden bg-bg-elevated">
                <div className="calendly-loader h-full w-1/2 bg-gradient-to-r from-transparent via-line-strong to-transparent" />
              </div>
            </div>
            <div className="h-10 w-2/5 overflow-hidden bg-bg-elevated">
              <div className="calendly-loader h-full w-1/2 bg-gradient-to-r from-transparent via-line-strong to-transparent" />
            </div>
          </div>
          <p className="font-display text-[10px] tracking-[0.22em] uppercase text-steel-muted">
            Chargement du formulaire…
          </p>
        </div>
      )}

      {/* JotForm iframe — full height, no internal scroll */}
      <iframe
        id={`JotFormIFrame-${formId}`}
        title="Formulaire de contact"
        src={`https://form.jotform.com/${formId}`}
        onLoad={() => setLoaded(true)}
        loading="eager"
        scrolling="no"
        allow="geolocation; microphone; camera; fullscreen"
        style={{
          width: "100%",
          height: 900,
          border: "none",
          background: "transparent",
          display: loaded ? "block" : "none",
          overflow: "hidden",
        }}
      />
    </div>
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

