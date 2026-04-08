import type { MetadataRoute } from "next";
import { ALL_PAGES, SITE_URL } from "./lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ALL_PAGES.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.path === "/" ? "weekly" : "monthly",
    priority: p.path === "/" ? 1 : 0.7,
  }));
}
