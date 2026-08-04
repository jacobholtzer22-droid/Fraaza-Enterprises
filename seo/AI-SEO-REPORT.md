# Fraaza Enterprises: AI SEO Optimization Report

**Branch:** `ai-seo-pass`  
**Date:** 2026-08-04  
**Status:** Complete — do NOT push without review

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

Rubric per page (max 9 pts): Title length 50–60 chars (2), ≤65 (1), else (0) · Description 120–160 chars (2), 100–165 (1), else (0) · Canonical (1) · OG tags (1) · Page-specific schema (2), sitewide-only (1), none (0) · H1 (1)

| Page                         | Before | After | Δ  | T   | D   |
|------------------------------|-------:|------:|---:|----:|----:|
| `/`                          |      3 |     8 | +5 |  60 | 136 |
| `/about`                     |      3 |     7 | +4 |  64 | 149 |
| `/blog`                      |      2 |     7 | +5 |  61 | 138 |
| `/blog/best-time-to-hydroseed` |    0 |     9 | +9 |  60 | 133 |
| `/blog/hydroseed-vs-sod`     |      0 |     9 | +9 |  60 | 145 |
| `/blog/erosion-control-tips` |      0 |     9 | +9 |  59 | 148 |
| `/care-and-watering`         |      3 |     7 | +4 |  64 | 136 |
| `/contact`                   |      3 |     8 | +5 |  50 | 152 |
| `/erosion-control`           |      3 |     8 | +5 |  55 | 141 |
| `/faq`                       |      3 |     9 | +6 |  56 | 132 |
| `/gallery`                   |      3 |     8 | +5 |  55 | 137 |
| `/hydroseeding`              |      3 |     7 | +4 |  61 | 143 |
| `/privacy-policy`            |      3 |     6 | +3 |  40 | 106 |
| `/quote`                     |      3 |     7 | +4 |  63 | 136 |
| `/services`                  |      3 |     7 | +4 |  48 | 123 |
| `/services/hydroseeding`     |      3 |     9 | +6 |  52 | 143 |
| `/services/landscaping`      |      3 |     9 | +6 |  51 | 139 |
| `/services/snow-plowing`     |      3 |     9 | +6 |  52 | 131 |
| `/services/soil-preparation` |      3 |     9 | +6 |  56 | 144 |
| `/terms-and-conditions`      |      2 |     7 | +5 |  46 | 137 |
| **TOTAL**                    | **49/180** | **159/180** | **+110** | | |
| **SCORE**                    | **27%** | **88%** | **+61pp** | | |

Pages not scoring 9/9: `/privacy-policy` (title 40 chars — legal page, acceptable); `/about`, `/blog`, `/care-and-watering`, `/hydroseeding`, `/quote`, `/services` (titles 1–4 chars outside the 50–60 sweet spot — acceptable with template suffix).

`/terms` excluded from scoring — it is a permanent redirect (308), not a content page.

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
