import type { Metadata, Viewport } from "next";
import { Manrope, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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

const siteName = "Alpha Renov France";
const siteDescription =
  "Alpha Renov France conçoit et réalise des rénovations intérieures exigeantes : cuisine, salle de bain, espaces de vie. Élégance, précision, savoir-faire.";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1f45" },
  ],
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://alpharenov.fr",
  ),
  title: {
    default: `${siteName} — Rénovation d'exception`,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  keywords: [
    "rénovation",
    "Alpha Renov",
    "rénovation intérieure",
    "cuisine",
    "salle de bain",
    "France",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: siteName,
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName,
    title: siteName,
    description: "Rénovation d'exception, design architectural.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alpha Renov France",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: "Rénovation d'exception, design architectural.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${outfit.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex w-full max-w-[100vw] flex-col overflow-x-clip bg-white text-ink">
        <div className="flex min-h-full w-full max-w-[100vw] flex-1 flex-col overflow-x-clip bg-white">
          <Header />
          <main className="w-full flex-1 overflow-x-clip">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
