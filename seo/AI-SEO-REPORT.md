# Fraaza Enterprises: AI SEO Optimization Report

**Branch:** `ai-seo-pass`  
**Date:** 2026-08-03  
**Status:** Complete — do NOT push without review

---

## Commits (4 total)

| # | Hash | Phase | Summary |
|---|------|-------|---------|
| 1 | `3c9040b` | Domain fix | SITE.url → `https://www.fraazaenterprises.com`, apex→www redirect in next.config.js |
| 2 | `409b790` | Schema layer | JsonLd component, LocalBusiness + WebSite + FAQPage + 4× Service JSON-LD, legal name standardization |
| 3 | `52cb336` | Blog split | `/blog/[slug]` routes with BlogPosting schema, shared data file, blog index rewrite, Blog link in footer |
| 4 | `bf9f646` | Cleanup batch | Title/description trimming, /terms redirect, [COUNTY] fill, robots.ts, llms.txt, sitemap overhaul, gallery H1 |

---

## What changed (visible to visitors)

| Page | Change | Impact |
|------|--------|--------|
| Footer (all pages) | "Blog" link added to Quick Links | New navigation item |
| Gallery `/gallery` | H1 "Work we're proud of" → "Our hydroseeding & landscaping work" | Visible heading change |
| Blog `/blog` | Articles now link to individual pages instead of `#anchor` scroll | Better UX + SEO |
| Blog articles | Each article is now its own page at `/blog/[slug]` | New pages |
| Privacy Policy | "Fraaza Enterprises" → "Fraaza Enterprises Inc." (7 occurrences) | Minor text change |
| Terms & Conditions | "Fraaza Enterprises" → "Fraaza Enterprises Inc." (18 occurrences), `[COUNTY]` → "Ottawa County" | Minor text changes |
| `/terms` | Was placeholder page → now redirects to `/terms-and-conditions` | No visible page anymore |

---

## What changed (invisible / metadata only)

### Domain & Canonicals
- `SITE.url` corrected from dead `fraaza-enterprises.com` (hyphenated) to live `fraazaenterprises.com` (no hyphen), with `www` as canonical host
- All canonicals, OG URLs, and sitemap entries now resolve to `https://www.fraazaenterprises.com/...`
- Host redirect added: bare `fraazaenterprises.com` → `www.fraazaenterprises.com` (301)

### Structured Data (JSON-LD)
| Schema type | Page(s) | Notes |
|-------------|---------|-------|
| LocalBusiness | Root layout (all pages) | `@id` anchor, corrected address (Zeeland not Holland), removed invalid geo, fixed dayOfWeek format, removed Saturday hours, added sameAs/logo/email/founder |
| WebSite | Root layout (all pages) | Basic WebSite node |
| FAQPage | `/faq` | Generated from same data array as visible Accordion (parity guaranteed) |
| Service | `/services/hydroseeding` | `provider` references `/#business` |
| Service | `/services/landscaping` | Same pattern |
| Service | `/services/soil-preparation` | Same pattern |
| Service | `/services/snow-plowing` | Same pattern |
| BlogPosting | `/blog/[slug]` (3 articles) | headline, description, image, author, publisher |

### Meta Titles (trimmed to ≤60 chars rendered)
All page titles trimmed. Redundant "| West Michigan Landscaping" segments removed — the `%s | Fraaza Enterprises Inc.` template suffix provides branding.

### Meta Descriptions (trimmed to 120–160 chars)
All descriptions tightened. Holland, MI and key service terms preserved.

### robots.txt
- Added `/api/` disallow for all crawlers
- Added AI crawler blocks: GPTBot, ChatGPT-User, Google-Extended, CCBot, anthropic-ai, ClaudeBot, Claude-Web

### llms.txt
New `public/llms.txt` — structured business summary for LLM crawlers that respect it.

### Sitemap
- Removed `/terms` (now a redirect)
- Added `/terms-and-conditions`
- Added 3 blog article slugs
- Fixed `lastModified` (was `new Date()` on every build → now static `2026-08-03`)
- Added differentiated priorities and changeFrequencies

---

## TODOs (must not be guessed — need real data)

| Item | Status | Action needed |
|------|--------|---------------|
| Google Business Profile URL | **Missing** | Add to `sameAs` array in root layout once known |
| Geo coordinates for 10060 Polk St, Zeeland | **Omitted** | Add `geo` to LocalBusiness schema once exact coords confirmed (do NOT reuse old Holland coords) |
| Blog article publish dates | **Pre-existing, unverified** | Dates in blog data file (March 15 2025, Feb 28 2025, Jan 20 2025) were already in the source — kept as-is. `datePublished` intentionally omitted from BlogPosting schema until confirmed |
| Ottawa County in T&C Section 13 | **Filled** | Zeeland, MI is in Ottawa County — filled in but **flag for Chad's confirmation** |
| Image optimization (PNG→WebP) | **Not done** | ~12 PNGs and 1 JPG (iahp-logo.jpg) referenced in source. Requires image processing tools — out of scope for this code pass. Convert files in `public/images/` and update src references. |

---

## Verification results

| Check | Result |
|-------|--------|
| `npm run build` | ✅ Clean (28 static + 3 SSG + 1 dynamic) |
| Old domain grep (`fraaza-enterprises.com`) | ✅ 0 hits in build output |
| Schema `@id` present | ✅ `https://www.fraazaenterprises.com/#business` |
| `addressLocality` | ✅ Zeeland (not Holland) |
| `geo` removed | ✅ No coordinates in schema |
| FAQPage schema | ✅ Present on `/faq` |
| Service schemas (4) | ✅ Present on all 4 service pages |
| BlogPosting schemas (3) | ✅ Present on all 3 blog article pages |
| Sitemap includes `/terms-and-conditions` | ✅ |
| Sitemap excludes `/terms` | ✅ |
| Sitemap includes blog slugs | ✅ (3 slugs) |
| `[COUNTY]` placeholder | ✅ Replaced with Ottawa County |
| robots.txt AI blocks | ✅ GPTBot + 6 others disallowed |
| llms.txt exists | ✅ `public/llms.txt` |

---

## Files changed (summary)

**New files:**
- `src/components/JsonLd.tsx` — Safe JSON-LD renderer
- `src/lib/blog-posts.ts` — Shared blog article data
- `src/app/blog/[slug]/page.tsx` — Individual blog article route
- `public/llms.txt` — LLM crawler summary

**Modified files (19):**
- `src/lib/site.ts` — SITE.url fix
- `next.config.js` — Host redirect
- `src/app/layout.tsx` — LocalBusiness + WebSite schema rewrite
- `src/app/faq/page.tsx` — FAQPage schema + title trim
- `src/app/services/hydroseeding/page.tsx` — Service schema + desc trim
- `src/app/services/landscaping/page.tsx` — Service schema + desc trim
- `src/app/services/soil-preparation/page.tsx` — Service schema + desc trim
- `src/app/services/snow-plowing/page.tsx` — Service schema + desc trim
- `src/app/blog/page.tsx` — Index rewrite (links not anchors) + title/desc trim
- `src/app/privacy-policy/page.tsx` — Name standardization
- `src/app/terms-and-conditions/page.tsx` — Name standardization + county fill
- `src/app/terms/page.tsx` — Redirect to /terms-and-conditions
- `src/app/gallery/page.tsx` — H1 text change + title/desc trim
- `src/app/page.tsx` — Description trim
- `src/app/about/page.tsx` — Title/desc trim
- `src/app/contact/page.tsx` — Title/desc trim
- `src/app/quote/page.tsx` — Description trim
- `src/app/care-and-watering/page.tsx` — Title/desc trim
- `src/app/erosion-control/page.tsx` — Title/desc trim
- `src/app/hydroseeding/page.tsx` — Title/desc trim
- `src/app/services/page.tsx` — Title/desc trim
- `src/app/robots.ts` — API disallow + AI blocks
- `src/app/sitemap.ts` — Overhaul (routes, dates, priorities)
- `src/components/Footer.tsx` — Blog link added
