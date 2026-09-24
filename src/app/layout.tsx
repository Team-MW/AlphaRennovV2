import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alpha Renov France — Rénovation d'exception",
  description:
    "Alpha Renov France conçoit et réalise des rénovations intérieures exigeantes : cuisine, salle de bain, espaces de vie. Élégance, précision, savoir-faire.",
  openGraph: {
    title: "Alpha Renov France",
    description: "Rénovation d'exception, design architectural.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${outfit.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex w-full max-w-[100vw] flex-col overflow-x-clip bg-white text-ink">
        {children}
      </body>
    </html>
  );
}
