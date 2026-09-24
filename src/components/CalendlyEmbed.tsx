"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CALENDLY_URL } from "@/lib/calendly";

type CalendlyEmbedProps = {
  className?: string;
};

export function CalendlyEmbed({ className = "" }: CalendlyEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const hasUrl = Boolean(CALENDLY_URL.trim());

  useEffect(() => {
    setLoaded(false);
  }, []);

  return (
    <div
      className={`relative min-h-[640px] w-full overflow-hidden rounded-2xl border border-line bg-bg-elevated ${className}`}
    >
      {/* Écran de chargement — visible tant que le code n'est pas là, ou pendant le load iframe */}
      {(!hasUrl || !loaded) && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 bg-white">
          <div className="overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(0,107,255,0.18)] ring-1 ring-black/5">
            <Image
              src="/calendly.jpeg"
              alt="Calendly"
              width={220}
              height={64}
              className="h-16 w-auto rounded-2xl object-cover"
              priority
            />
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="h-1 w-28 overflow-hidden rounded-full bg-line">
              <div className="calendly-loader h-full w-1/2 rounded-full bg-[#006BFF]" />
            </div>
            <p className="font-display text-[10px] tracking-[0.22em] uppercase text-ink-muted">
              {hasUrl ? "Chargement du calendrier…" : "Préparation du rendez-vous…"}
            </p>
          </div>
        </div>
      )}

      {hasUrl && (
        <iframe
          title="Prendre rendez-vous avec Alpha Renov"
          src={CALENDLY_URL}
          className="absolute inset-0 h-full w-full border-0"
          onLoad={() => setLoaded(true)}
          allow="camera; microphone; fullscreen"
        />
      )}
    </div>
  );
}
