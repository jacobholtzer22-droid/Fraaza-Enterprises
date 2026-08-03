import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { posts } from "@/lib/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;
  const lastMod = "2026-08-03";

  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/services/hydroseeding", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services/landscaping", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services/soil-preparation", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services/snow-plowing", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/erosion-control", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/hydroseeding", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/gallery", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/care-and-watering", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/quote", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const blogRoutes = posts.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...blogRoutes].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: lastMod,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
