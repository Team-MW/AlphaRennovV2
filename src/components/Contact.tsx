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

/* ── JotForm embed — zero delay, progressive render ─────────────────────── */
function JotFormEmbed({ formId }: { formId: string }) {
  useEffect(() => {
    // Inject JotForm's iframe resizer script for auto-height
    const initHandler = () => {
      // @ts-expect-error JotForm global
      if (window.jotformEmbedHandler) {
        // @ts-expect-error JotForm global
        window.jotformEmbedHandler(
          `iframe[id='JotFormIFrame-${formId}']`,
          "https://form.jotform.com/"
        );
      }
    };

    const existing = document.getElementById("jotform-handler");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "jotform-handler";
      script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
      script.async = true;
      script.onload = initHandler;
      document.body.appendChild(script);
    } else {
      initHandler();
    }
  }, [formId]);

  return (
    <div className="relative min-h-[750px] w-full bg-white">
      {/* JotForm iframe — immediate display for progressive rendering */}
      <iframe
        id={`JotFormIFrame-${formId}`}
        title="Formulaire de contact"
        src={`https://form.jotform.com/${formId}`}
        loading="eager"
        scrolling="no"
        allow="geolocation; microphone; camera; fullscreen"
        style={{
          width: "100%",
          minHeight: "750px",
          border: "none",
          background: "transparent",
          display: "block",
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

