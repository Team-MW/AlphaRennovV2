import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const routes = [
    "",
    "/approche",
    "/realisations",
    "/rendez-vous",
    "/contact",
    "/mentions-legales",
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${base}${route || "/"}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/mentions-legales" ? 0.3 : 0.8,
  }));
}
