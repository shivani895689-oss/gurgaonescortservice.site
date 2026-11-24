# Removal Report - Scratch Redesign Prep

Date: 2026-06-04
Branch: main
Project: `gurgaonescortservice.site`
Scope: Removed existing content/features/routes/data for a full scratch redesign. Upcoming redesign will be rebuilt with SEO/AEO/GEO/local-search/near-me/keyword-focused content and URL strategy (to be defined by user).

## User-Requested Removals (Completed)

- Blogs - removed
- Services - removed
- Locations - removed
- Categories - removed
- Escort profiles - removed
- All remaining content/pages - removed
- Content/data/assets tied to removed sections - removed

## Detailed Inventory of Removed Items

### 1. App Routes / Pages / API
Removed content and feature routes under `app/`, including:
- `app/[slug]/page.tsx`
- `app/about/page.tsx`, `app/about-us/page.tsx`
- `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, `app/blog/not-found.tsx`
- `app/categories/page.tsx`
- `app/category/[slug]/page.tsx`, `app/category/not-found.tsx`
- `app/contact/page.tsx`, `app/contact-us/page.tsx`
- `app/disclaimer/page.tsx`
- `app/erotic-massage-in-gurgaon/page.tsx`
- `app/escort-service-for-1-2-3-hours/page.tsx`
- `app/escort-service-full-night/page.tsx`
- `app/escort-service-in-gurgaon/page.tsx`
- `app/escorts/page.tsx`, `app/escorts/[slug]/page.tsx`, `app/escorts/[slug]/[profile]/page.tsx`, `app/escorts/layout.tsx`
- `app/escorts-categories/page.tsx`
- `app/faq/page.tsx`, `app/faq/layout.tsx`, `app/faqs/page.tsx`, `app/faqs/layout.tsx`
- `app/full-body-sensual-massage/page.tsx`, `app/full-body-sensual-massage/layout.tsx`
- `app/gallery/page.tsx`
- `app/girlfriend-experience-in-gurgaon/page.tsx`
- `app/gurgaon-escorts-phone-number/page.tsx`, `app/gurgaon-escorts-phone-number/layout.tsx`
- `app/gurgaon-escorts-rates/page.tsx`
- `app/hotels/page.tsx`, `app/hotels/[slug]/page.tsx`
- `app/in-out-call-girls-gurgaon/page.tsx`
- `app/locations/page.tsx`, `app/locations/[slug]/page.tsx`, `app/locations/not-found.tsx`
- `app/phone-number/page.tsx`, `app/phone-number/layout.tsx`
- `app/privacy-policy/page.tsx`
- `app/rates/page.tsx`
- `app/services/page.tsx`, `app/services/[slug]/page.tsx`
- `app/shop/page.tsx`
- `app/terms/page.tsx`
- `app/api/revalidate/route.ts` and `app/api/`

### 2. Data / Content Sources (`src/data`)
- `src/data/blogs.ts` (357 lines before removal)
- `src/data/categories.ts` (518 lines before removal)
- `src/data/content.ts` (98 lines before removal)
- `src/data/models.ts` (330 lines before removal) - escort/profile data
- `src/data/locations.ts`
- `src/data/locations/` - all location files (delhi-localities, delhi-ncr-hub, gurgaon-corridors, gurgaon-hub, gurgaon-sectors-golf-spr, gurgaon-sectors-inner, gurgaon-sectors-new-expressway, index, noida-sectors, types)
- `src/data/locationManifest.ts`, `src/data/locationSummary.ts`
- `src/data/local_posts.json` (406 lines before removal)
- `src/data/catalog_pages.json`, `src/data/catalog_posts.json`, `src/data/catalog_products.json`
- `src/data/exact_manifest.json`, `src/data/final_location_manifest.json`
- `src/data/siteConfig.ts` - stripped to minimal placeholder config

### 3. Components (`src/components`)
- `src/components/blog/ArticleContentRenderer.tsx`
- `src/components/BlogFilter.tsx`
- `src/components/home/*` - all home sections (Hero, TrustBanner, FeaturedProfiles, CategoriesGrid, ServicesOffered, TrustStandards, BookingProcess, Testimonials, LocationGrid, EditorialGuide, HomeFaq, HomeBlog)
- `src/components/Breadcrumb.tsx`
- `src/components/CTASection.tsx`
- `src/components/ContactForm.tsx`
- `src/components/LegalPages.tsx`
- `src/components/LocationBookingForm.tsx`
- `src/components/LocationsDirectory.tsx`
- `src/components/NewsletterForm.tsx`
- `src/components/ShareButton.tsx`
- `src/components/TestimonialsSection.tsx`
- `src/components/Header.tsx`, `Footer.tsx`, `WhatsAppButton.tsx`
- `src/components/` directory removed after cleanup

### 4. Libs / Hooks tied to removed content
- `src/lib/supabaseBlog.ts`
- `src/lib/ai/contentFormatter.ts` and `src/lib/ai/`
- `src/lib/formSubmission.ts`
- `src/lib/assets.ts`
- `src/hooks/useScrollReveal.ts` and `src/hooks/`

### 5. Public / SEO / Static content artifacts
- `public/sitemap-all.xml`
- `public/sitemap-blogs.xml`
- `public/sitemap-categories.xml`
- `public/sitemap-escorts.xml`
- `public/sitemap-index.xml`
- `public/sitemap-locations.xml`
- `public/sitemap-pages.xml`
- `public/llm.txt`, `public/llms.txt`, `public/llms-full.txt`
- `public/humans.txt`
- `public/og-image.jpg`
- `public/_redirects`
- `public/images/` directory
- `public/manifest.json` - reset to minimal placeholder

### 6. Config / Build Cleanup
- `next.config.js` - removed legacy content redirects; removed deleted `local_posts.json` tracing include
- `package.json` scripts - removed `prebuild` and `sitemap` scripts; simplified `build` to `next build`
- `scripts/generate-sitemaps.js` and `scripts/` - removed
- `app/sitemap.ts` - simplified to minimal root-only sitemap
- `app/robots.ts` - simplified to minimal robots allowing crawl with sitemap reference
- `app/layout.tsx` - stripped to minimal shell layout
- `app/page.tsx` - replaced with minimal placeholder page
- `app/not-found.tsx` - simplified

## What Remains (Minimal Scaffold)

- Framework/config: `package.json`, `package-lock.json`, `tsconfig.json`, `next.config.js`, `postcss.config.js`, `tailwind.config.js`, `eslint.config.js`, `.gitignore`
- App shell: `app/layout.tsx`, `app/globals.css`, `app/page.tsx`, `app/not-found.tsx`, `app/error.tsx`, `app/robots.ts`, `app/sitemap.ts`
- Minimal data: `src/data/siteConfig.ts` (placeholder)
- Generic infra kept: `src/lib/imagekitLoader.ts`, `src/lib/slugify.ts`
- Public base assets kept: `public/favicon.svg`, `public/apple-touch-icon.png`, `public/manifest.json`, `public/browserconfig.xml`

## Verification

- `npm run typecheck` - **PASS**
- `npm run build` - **PASS** (Next.js 16.4.6 / Turbopack)

Build output routes:
- `/` (static)
- `/_not-found` (static)
- `/robots.txt` (static)
- `/sitemap.xml` (static)

## Notes for Redesign

Site is now a clean scratch scaffold. Before rebuilding, define:
1. New information architecture and SEO-friendly URL structure
2. Content model for services, locations, categories, profiles, blogs (as needed)
3. Keyword map: primary, local, near-me, transactional, informational
4. AEO/GEO strategy: FAQ/schema blocks, concise answer-first content, entity coverage
5. Local SEO strategy: city/area/service landing pages, NAP consistency, schema, internal linking
6. Technical SEO: canonical rules, sitemap strategy, robots, metadata templates, structured data, performance
7. Content governance: what content is allowed, compliance, and publishing workflow

No redesign/recreation has been started yet, per user instruction.
