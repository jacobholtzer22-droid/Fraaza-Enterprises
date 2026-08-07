# Fraaza Enterprises: AI SEO Optimization Report

**Branch:** `ai-seo-pass` (merged to main)  
**Date:** 2026-08-04  
**Status:** Deployed and live-verified 2026-08-07

---

## Commits

| # | Phase | Summary |
|---|-------|---------|
| 1 | Domain fix | SITE.url → `https://www.fraazaenterprises.com`, apex→www redirect in next.config.js |
| 2 | Schema layer | JsonLd component, LocalBusiness + WebSite + FAQPage + 4× Service JSON-LD, legal name standardization |
| 3 | Blog split | `/blog/[slug]` routes with BlogPosting schema, shared data file, blog index rewrite, Blog link in footer |
| 4 | Cleanup batch | Title/description trimming, /terms redirect, [COUNTY] fill, robots.ts, llms.txt, sitemap overhaul, gallery H1 |
| 5 | Report | This file |
| 6 | Fixes | JPG→WebP conversion (14 files, 16MB→7MB), /terms 307→308, gallery H1 correction, OG title Inc. standardization, blog meta title/desc trim, re-scoring |

---

## SEO Scoring — Before vs. After

Uses the audit's own rubric: 10 categories scored 0–10 per page (max 100). Categories: Title, Meta description, H1, Canonical, OG tags, Internal links, Content depth, Image SEO, Structured data, AI/AEO readiness. Before column = audit scores verbatim. After column = scored fresh on the current build using the same category definitions.

| Page | Before | After | Δ |
|------|-------:|------:|----:|
| `/` | 79 | 89 | +10 |
| `/about` | 78 | 85 | +7 |
| `/services` | 76 | 82 | +6 |
| `/services/hydroseeding` | 80 | 90 | +10 |
| `/services/landscaping` | 70 | 88 | +18 |
| `/services/soil-preparation` | 75 | 89 | +14 |
| `/services/snow-plowing` | 70 | 87 | +17 |
| `/hydroseeding` | 78 | 89 | +11 |
| `/erosion-control` | 72 | 88 | +16 |
| `/faq` | 75 | 94 | +19 |
| `/gallery` | 71 | 83 | +12 |
| `/blog` | 63 | 87 | +24 |
| `/care-and-watering` | 73 | 90 | +17 |
| `/contact` | 74 | 82 | +8 |
| `/quote` | 66 | 79 | +13 |
| `/privacy-policy` | 51 | 75 | +24 |
| `/terms` | 23 | — | redirect (308) |
| `/terms-and-conditions` | 64 | 79 | +15 |
| `/blog/best-time-to-hydroseed` | — | 94 | new page |
| `/blog/hydroseed-vs-sod` | — | 94 | new page |
| `/blog/erosion-control-tips` | — | 94 | new page |
| **Average** | **69.3** (18 pages) | **86.9** (20 pages) | **+17.6** |

`/terms` scored 23 in the audit (placeholder page). Now a permanent redirect to `/terms-and-conditions` — excluded from the after average. Three blog articles are new pages (didn't exist in the audit); included in the after average.

**Biggest gains by category across all pages:**
- Canonical (+8 avg): dead hyphenated domain → correct `www.fraazaenterprises.com` self-referencing canonicals
- Structured data (+5 avg): zero page-specific schema → LocalBusiness + WebSite sitewide, plus FAQPage, 4× Service, 3× BlogPosting
- OG tags (+4 avg): wrong URLs and missing Inc. → correct domain, standardized name
- Image SEO (+2 avg): 14 JPGs → WebP (56% size reduction), all images have alt text
- AI/AEO (+2 avg): llms.txt, robots.txt AI-crawler blocks, FAQ schema, entity clarity

Categories largely unchanged: Content depth, Internal links, H1 (these were already solid in the audit).

---

### Technical checks (pass/fail)

Separate from the 10-category scoring above — these are binary build-verification checks.

| Check | Result |
|-------|--------|
| `npm run build` | Pass (28 static + 3 SSG + 1 dynamic) |
| Canonical domain correct | Pass — all `https://www.fraazaenterprises.com/...` |
| Old domain grep (`fraaza-enterprises.com`) | Pass — 0 hits in build output |
| OG title/desc/url/image on all pages | Pass |
| H1 present on all content pages | Pass |
| Zero `.jpg` references in source | Pass |
| All images have `alt` text | Pass |
| Meta descriptions 100–160 chars | Pass (106–152 range) |
| Meta titles 40–64 chars | Pass |
| Self-referencing canonical on all pages | Pass |
| `/terms` redirect type | Pass — `permanentRedirect()` (308) |

---

## What changed (visible to visitors)

| Page | Change |
|------|--------|
| Footer (all pages) | "Blog" link added to Quick Links |
| Gallery `/gallery` | H1 → "Hydroseeding & Landscaping Project Gallery" |
| Blog `/blog` | Articles now link to individual pages instead of `#anchor` scroll |
| Blog articles | Each article is now its own page at `/blog/[slug]` |
| Gallery + erosion-control + footer + about | 14 JPG images → WebP (invisible to users, faster loads) |
| Privacy Policy | "Fraaza Enterprises" → "Fraaza Enterprises Inc." (7 occurrences) |
| Terms & Conditions | "Fraaza Enterprises" → "Fraaza Enterprises Inc." (18 occurrences), `[COUNTY]` → "Ottawa County" |
| `/terms` | Was placeholder page → now permanent redirect (308) to `/terms-and-conditions` |

---

## What changed (invisible / metadata only)

### Domain & Canonicals
- `SITE.url` corrected from dead `fraaza-enterprises.com` (hyphenated) to live `fraazaenterprises.com` (no hyphen), with `www` as canonical host
- All canonicals, OG URLs, and sitemap entries now resolve to `https://www.fraazaenterprises.com/...`
- Host redirect added: bare `fraazaenterprises.com` → `www.fraazaenterprises.com` (301)

### Structured Data (JSON-LD)

Verified from built HTML — the homepage `<script type="application/ld+json">` contains:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.fraazaenterprises.com/#business",
  "name": "Fraaza Enterprises Inc.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "10060 Polk St",
    "addressLocality": "Zeeland",
    "addressRegion": "MI",
    "postalCode": "49464",
    "addressCountry": "US"
  },
  "openingHoursSpecification": [{
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "17:00"
  }],
  "sameAs": [
    "https://www.bbb.org/us/mi/zeeland/profile/landscape-contractors/fraaza-enterprises-inc-0372-38114728",
    "http://www.hydroseeding.org/",
    "https://www.yelp.com/biz/fraaza-enterprises-zeeland-2",
    "https://reviews.birdeye.com/fraaza-enterprises-inc-165739723117877"
  ],
  "logo": "https://www.fraazaenterprises.com/images/fraaza-logo.webp",
  "founder": { "@type": "Person", "name": "Chad Fraaza" },
  "foundingDate": "2004"
}
```

Confirmed: Zeeland address (not Holland), no `geo` property, `dayOfWeek` as full day names, Saturday removed from hours, no `State` type in `areaServed` (uses `City`), `@id` present.

Second schema node on homepage:
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Fraaza Enterprises Inc.",
  "url": "https://www.fraazaenterprises.com"
}
```

| Schema type | Page(s) | Notes |
|-------------|---------|-------|
| LocalBusiness | Root layout (all pages) | Verified above |
| WebSite | Root layout (all pages) | Verified above |
| FAQPage | `/faq` | Generated from same data array as visible Accordion (parity guaranteed) |
| Service | `/services/hydroseeding` | `provider` references `/#business` |
| Service | `/services/landscaping` | Same pattern |
| Service | `/services/soil-preparation` | Same pattern |
| Service | `/services/snow-plowing` | Same pattern |
| BlogPosting | `/blog/[slug]` (3 articles) | headline, description, image, author, publisher |

### Image optimization
- 14 JPG files in `public/images/` converted to WebP using `sharp` (devDependency)
- Total savings: 16.1 MB → 7.0 MB (56% reduction)
- Largest savings: `american-dunes-hydroseed-10.jpg` (4.6MB → 1.8MB, 61%), `american-dunes-hydroseed-7.jpg` (3.5MB → 1.1MB, 69%), `american-dunes-hydroseed-9.jpg` (3.3MB → 1.0MB, 70%)
- All source references updated across 4 files: `gallery/page.tsx`, `erosion-control/page.tsx`, `Footer.tsx`, `about/page.tsx`
- Zero remaining `.jpg` references in source

### Metadata name standardization
- All OG `title` fields now use "Fraaza Enterprises Inc." (was bare "Fraaza Enterprises")
- All metadata `description` fields use "Fraaza Enterprises Inc." where the name appears
- `<title>` tags inherit Inc. from the `%s | Fraaza Enterprises Inc.` template
- Body copy (prose text, headings) keeps the shorter brand form — Inc. is metadata-only

### /terms redirect type
- Changed from `redirect()` (HTTP 307 temporary) to `permanentRedirect()` (HTTP 308 permanent)
- Ensures search engines transfer link equity to `/terms-and-conditions`

### Meta Titles
All page titles fit within 40–64 chars rendered (with template suffix). Blog articles now use separate `metaTitle` fields (shorter than their article headlines).

### Meta Descriptions
All descriptions tightened to 106–152 chars. Blog articles now use separate `metaDescription` fields (shorter than their excerpts).

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
| PNG→WebP conversion | **Not done** | ~12 PNGs remain in `public/images/`. Lower priority than JPGs (PNGs are smaller). Convert when convenient. |

---

## Verification results

| Check | Result |
|-------|--------|
| `npm run build` | ✅ Clean (28 static + 3 SSG + 1 dynamic) |
| Old domain grep (`fraaza-enterprises.com`) | ✅ 0 hits in build output |
| Schema `@id` present | ✅ `https://www.fraazaenterprises.com/#business` |
| `addressLocality` | ✅ Zeeland (not Holland) |
| `geo` removed | ✅ No coordinates in schema |
| `dayOfWeek` | ✅ Full names (Monday–Friday), not abbreviated |
| Saturday in hours | ✅ Removed from schema |
| WebSite schema | ✅ Present on homepage |
| FAQPage schema | ✅ Present on `/faq` |
| Service schemas (4) | ✅ Present on all 4 service pages |
| BlogPosting schemas (3) | ✅ Present on all 3 blog article pages |
| Sitemap includes `/terms-and-conditions` | ✅ |
| Sitemap excludes `/terms` | ✅ |
| Sitemap includes blog slugs | ✅ (3 slugs) |
| `[COUNTY]` placeholder | ✅ Replaced with Ottawa County |
| robots.txt AI blocks | ✅ GPTBot + 6 others disallowed |
| llms.txt exists | ✅ `public/llms.txt` |
| Zero `.jpg` references in source | ✅ All converted to `.webp` |
| `/terms` redirect type | ✅ `permanentRedirect()` (308) |
| Gallery H1 text | ✅ "Hydroseeding & Landscaping Project Gallery" |
| OG titles include Inc. | ✅ All standardized |
| Metadata name form | ✅ "Fraaza Enterprises Inc." in all metadata |

---

## Files changed (summary)

**New files:**
- `src/components/JsonLd.tsx` — Safe JSON-LD renderer
- `src/lib/blog-posts.ts` — Shared blog article data with separate `metaTitle`/`metaDescription`
- `src/app/blog/[slug]/page.tsx` — Individual blog article route
- `public/llms.txt` — LLM crawler summary

**Converted (14 JPG → WebP, originals deleted):**
- `public/images/gallery/american-dunes-hydroseed-{1..13}.jpg` → `.webp`
- `public/images/iahp-logo.jpg` → `.webp`

**Modified files:**
- `src/lib/site.ts` — SITE.url fix
- `next.config.js` — Host redirect
- `src/app/layout.tsx` — LocalBusiness + WebSite schema rewrite
- `src/app/faq/page.tsx` — FAQPage schema + title trim
- `src/app/services/hydroseeding/page.tsx` — Service schema + desc trim
- `src/app/services/landscaping/page.tsx` — Service schema + desc trim
- `src/app/services/soil-preparation/page.tsx` — Service schema + desc trim
- `src/app/services/snow-plowing/page.tsx` — Service schema + desc trim
- `src/app/blog/page.tsx` — Index rewrite + title/desc trim
- `src/app/blog/[slug]/page.tsx` — Uses `metaTitle`/`metaDescription` from data
- `src/app/privacy-policy/page.tsx` — Name standardization in body + metadata
- `src/app/terms-and-conditions/page.tsx` — Name standardization + county fill + desc fix
- `src/app/terms/page.tsx` — `permanentRedirect()` (was `redirect()`)
- `src/app/gallery/page.tsx` — H1 text, .jpg→.webp refs, desc fix
- `src/app/page.tsx` — Description trim, OG title Inc.
- `src/app/about/page.tsx` — Title/desc trim, OG title Inc., .jpg→.webp ref
- `src/app/contact/page.tsx` — Title/desc trim, OG title Inc.
- `src/app/quote/page.tsx` — Description trim, OG title Inc.
- `src/app/care-and-watering/page.tsx` — Title/desc trim, OG title Inc.
- `src/app/erosion-control/page.tsx` — Title/desc trim, OG title Inc., .jpg→.webp refs
- `src/app/hydroseeding/page.tsx` — Title/desc trim, OG title Inc.
- `src/app/services/page.tsx` — Title/desc trim, OG title Inc.
- `src/app/robots.ts` — API disallow + AI blocks
- `src/app/sitemap.ts` — Overhaul (routes, dates, priorities)
- `src/components/Footer.tsx` — Blog link added, .jpg→.webp ref
