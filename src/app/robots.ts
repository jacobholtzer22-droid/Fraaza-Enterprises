import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "Google-Extended", "CCBot", "anthropic-ai", "ClaudeBot", "Claude-Web"],
        disallow: "/",
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
