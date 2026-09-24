import Link from "next/link";
import { Reveal } from "./Reveal";

/* ── Review data ──────────────────────────────────────────── */
const GOOGLE_REVIEW_URL =
  "https://g.page/r/alpharenov/review"; // ← Replace with your real Google review link

const reviews: Review[] = [
  {
    name: "Stéphane M.",
    date: "il y a 2 semaines",
    rating: 5,
    text: "Travaux de rénovation complète réalisés avec un soin remarquable. L'équipe a été ponctuelle, propre et très professionnelle. Le résultat dépasse nos attentes. Je recommande vivement.",
  },
  {
    name: "Caroline D.",
    date: "il y a 1 mois",
    rating: 5,
    text: "Excellente expérience pour la réfection de notre toiture. Devis clair, respect des délais et finitions impeccables. Un seul interlocuteur du début à la fin, c'est appréciable.",
  },
  {
    name: "Karim B.",
    date: "il y a 1 mois",
    rating: 5,
    text: "Rénovation de notre salle de bain et cuisine. Le chantier a été parfaitement coordonné. Très bon rapport qualité-prix pour la région toulousaine.",
  },
  {
    name: "Marie-Claire L.",
    date: "il y a 2 mois",
    rating: 5,
    text: "Intervention rapide et soignée pour des travaux de maçonnerie et ravalement de façade. Entreprise sérieuse, je ferai appel à eux pour la suite de nos projets.",
  },
  {
    name: "Thomas R.",
    date: "il y a 3 mois",
    rating: 5,
    text: "Chantier de construction mené avec rigueur. Planning respecté, communication fluide, et le rendu final est exactement ce qu'on avait imaginé. Merci Alpha Renov !",
  },
];

type Review = {
  name: string;
  date: string;
  rating: number;
  text: string;
};

const averageRating = (
  reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
).toFixed(1);

/* ── Stars component ──────────────────────────────────────── */
function Stars({ count, size = 16 }: { count: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={i < count ? "#FBBC04" : "#E4E4E4"}
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

/* ── Google "G" logo ──────────────────────────────────────── */
function GoogleLogo({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-label="Google"
    >
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59A14.5 14.5 0 019.5 24c0-1.59.28-3.14.76-4.59l-7.98-6.19A23.9 23.9 0 000 24c0 3.77.9 7.35 2.56 10.53l7.97-5.94z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 5.94C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

/* ── Main component ───────────────────────────────────────── */
export function GoogleReviews() {
  return (
    <section className="border-t border-line bg-white py-24 md:py-32">
      <div className="section-pad mx-auto max-w-7xl">
        {/* ── Header ──────────────────────────────────────── */}
        <Reveal className="mb-16 md:mb-20">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="font-display text-[11px] font-semibold tracking-[0.28em] uppercase text-steel">
                Avis clients
              </p>
              <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold tracking-[-0.02em] text-navy">
                La confiance se lit.
              </h2>
            </div>

            {/* ── Rating badge ───────────────────────────── */}
            <div className="flex items-center gap-5 border border-line bg-bg-elevated px-6 py-4 md:px-8">
              <GoogleLogo size={32} />
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="font-display text-3xl font-semibold text-navy">
                    {averageRating}
                  </span>
                  <Stars count={Math.round(Number(averageRating))} size={18} />
                </div>
                <p className="mt-0.5 text-[13px] text-ink-muted">
                  {reviews.length} avis sur{" "}
                  <span className="font-semibold text-navy">Google</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 h-px w-24 bg-steel" />
        </Reveal>

        {/* ── Reviews grid ────────────────────────────────── */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal
              key={review.name}
              delay={i * 80}
              className="group flex flex-col border border-line p-7 transition-all duration-500 hover:border-line-strong hover:bg-bg-elevated md:p-8"
            >
              {/* Stars */}
              <Stars count={review.rating} />

              {/* Text */}
              <p className="mt-5 flex-1 text-[15px] leading-relaxed text-ink-muted">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                {/* Avatar with initial */}
                <span className="flex h-10 w-10 items-center justify-center bg-navy font-display text-sm font-semibold text-white">
                  {review.name.charAt(0)}
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-navy">
                    {review.name}
                  </p>
                  <div className="flex items-center gap-1.5">
                    <GoogleLogo size={12} />
                    <p className="text-xs text-steel-muted">{review.date}</p>
                  </div>
                </div>
              </div>

              {/* Animated line on hover */}
              <div className="mt-6 h-px w-0 bg-navy transition-all duration-500 group-hover:w-12" />
            </Reveal>
          ))}
        </div>

        {/* ── CTA ─────────────────────────────────────────── */}
        <Reveal delay={300} className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2.5 bg-navy px-7 py-3.5 font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-white transition-transform duration-300 hover:bg-navy-mid hover:scale-[1.01]"
          >
            <GoogleLogo size={16} />
            Laisser un avis
          </a>
          <p className="text-sm text-ink-muted">
            Votre retour nous aide à progresser.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
