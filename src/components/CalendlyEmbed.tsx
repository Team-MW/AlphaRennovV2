"use client";

import { useEffect, useState } from "react";
import { CAL_CATEGORIES, CalCategoryId } from "@/lib/calendly";

type CalendlyEmbedProps = {
  defaultCategory?: CalCategoryId;
  showSelector?: boolean;
  className?: string;
};

export function CalendlyEmbed({
  defaultCategory = "devis",
  showSelector = true,
  className = "",
}: CalendlyEmbedProps) {
  const [activeId, setActiveId] = useState<CalCategoryId>(defaultCategory);
  const [loaded, setLoaded] = useState(false);

  const activeCategory =
    CAL_CATEGORIES.find((c) => c.id === activeId) ?? CAL_CATEGORIES[0];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get("category") as CalCategoryId | null;
      if (catParam && CAL_CATEGORIES.some((c) => c.id === catParam)) {
        setActiveId(catParam);
      }
    }
  }, []);

  useEffect(() => {
    setLoaded(false);
  }, [activeId]);

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Category Selector Buttons */}
      {showSelector && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] uppercase text-steel">
              Sélectionnez votre besoin :
            </p>
            <span className="text-[11px] font-medium text-steel-muted">
              3 créneaux disponibles
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {CAL_CATEGORIES.map((cat) => {
              const isActive = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveId(cat.id)}
                  className={`group relative flex flex-col items-start p-4 text-left transition-all duration-300 rounded-xl border ${
                    isActive
                      ? "border-navy bg-navy text-white shadow-lg shadow-navy/15 scale-[1.01]"
                      : "border-line bg-white text-navy hover:border-navy/40 hover:bg-bg-elevated"
                  }`}
                >
                  <div className="flex w-full items-center justify-between gap-2">
                    <span
                      className={`font-display text-xs font-semibold tracking-wider uppercase ${
                        isActive ? "text-white" : "text-navy"
                      }`}
                    >
                      {cat.label}
                    </span>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-bg-elevated text-steel-muted border border-line"
                      }`}
                    >
                      {cat.badge}
                    </span>
                  </div>
                  <span
                    className={`mt-1.5 text-xs leading-relaxed ${
                      isActive ? "text-white/80" : "text-ink-muted"
                    }`}
                  >
                    {cat.subtitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Embedded Cal.com Container */}
      <div className="relative min-h-[680px] w-full overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
        {!loaded && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-white p-8">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-line border-t-navy" />
            <p className="font-display text-[10px] tracking-[0.22em] uppercase text-steel-muted">
              Chargement du calendrier {activeCategory.label}…
            </p>
          </div>
        )}

        <iframe
          key={activeCategory.url}
          title={`Prendre rendez-vous - ${activeCategory.label}`}
          src={activeCategory.url}
          className="absolute inset-0 h-full w-full border-0 bg-white"
          onLoad={() => setLoaded(true)}
          allow="camera; microphone; fullscreen"
        />
      </div>
    </div>
  );
}
