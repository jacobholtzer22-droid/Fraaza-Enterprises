import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;

  const routes = [
    "",
    "/about",
    "/blog",
    "/care-and-watering",
    "/contact",
    "/erosion-control",
    "/faq",
    "/gallery",
    "/hydroseeding",
    "/privacy-policy",
    "/quote",
    "/services",
    "/services/hydroseeding",
    "/services/landscaping",
    "/services/soil-preparation",
    "/services/snow-plowing",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/services" ? 0.9 : 0.7,
  }));
}
