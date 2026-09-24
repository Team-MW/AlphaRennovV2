"use client";

import Link from "next/link";
import { useId, useState } from "react";
import type { FaqItem } from "@/lib/faq";
import { Reveal } from "./Reveal";

type FaqProps = {
  items: readonly FaqItem[];
  title?: string;
};

export function Faq({
  items,
  title = "Questions fréquentes",
}: FaqProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="relative w-full overflow-hidden border-t border-line bg-white py-20 md:py-28"
      aria-labelledby={`${baseId}-heading`}
    >
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-bg-elevated to-transparent lg:block"
        aria-hidden
      />

      <div className="section-pad relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)] lg:gap-20 lg:items-start">
          <Reveal className="lg:sticky lg:top-28">
            <p className="font-display text-[11px] font-semibold tracking-[0.28em] uppercase text-steel">
              FAQ
            </p>
            <h2
              id={`${baseId}-heading`}
              className="mt-4 font-display text-[clamp(1.75rem,3.2vw,2.6rem)] font-semibold tracking-[-0.02em] text-navy"
            >
              {title}
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink-muted">
              Les réponses essentielles avant de démarrer votre projet avec
              Alpha Renov France.
            </p>
            <div className="mt-8 h-px w-16 bg-navy/30" />
            <Link
              href="/contact"
              className="mt-8 inline-flex font-display text-[11px] tracking-[0.2em] uppercase text-navy transition-colors hover:text-navy-mid"
            >
              Une autre question ? →
            </Link>
          </Reveal>

          <div className="space-y-3">
            {items.map((item, index) => {
              const open = openIndex === index;
              const panelId = `${baseId}-panel-${index}`;
              const buttonId = `${baseId}-button-${index}`;
              const num = String(index + 1).padStart(2, "0");

              return (
                <Reveal key={item.question} delay={index * 70}>
                  <div
                    className={`overflow-hidden border transition-all duration-300 ${
                      open
                        ? "border-navy/25 bg-bg-elevated shadow-[0_12px_40px_rgba(10,31,69,0.06)]"
                        : "border-line bg-white hover:border-navy/20"
                    }`}
                  >
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={open}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(open ? null : index)}
                        className="flex w-full items-center gap-4 px-5 py-5 text-left md:gap-6 md:px-7 md:py-6"
                      >
                        <span
                          className={`font-display text-xs tracking-[0.18em] tabular-nums transition-colors ${
                            open ? "text-navy" : "text-steel-muted"
                          }`}
                        >
                          {num}
                        </span>
                        <span className="min-w-0 flex-1 font-display text-[15px] font-semibold leading-snug text-navy md:text-base">
                          {item.question}
                        </span>
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center border transition-all duration-300 ${
                            open
                              ? "border-navy bg-navy text-white"
                              : "border-line text-navy"
                          }`}
                          aria-hidden
                        >
                          <span
                            className={`block text-lg leading-none transition-transform duration-300 ${
                              open ? "rotate-45" : ""
                            }`}
                          >
                            +
                          </span>
                        </span>
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="border-t border-line px-5 pb-6 pt-4 text-[15px] leading-relaxed text-ink-muted md:px-7 md:pb-7 md:pl-[4.25rem]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FaqJsonLd({ items }: { items: readonly FaqItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
