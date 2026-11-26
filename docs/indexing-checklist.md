# Getting every page indexed on Google and Bing

This is the operational checklist for `gurgaonescortservice.site`. Run it after every deploy, in order. Steps 1 and 2 are automated; steps 3 and 4 are one-time account setup.

## 1. Pre-flight (local, before deploying)

```bash
npm run typecheck
npm run lint
npm run build
npm run start -- -p 3131          # in a second terminal
npm run seo:index -- --base=http://localhost:3131
npm run seo:verify -- --base=http://localhost:3131 --sample=150
```

`seo:index` is the strict gate: it walks **every** URL in the sitemap and fails if any returns a redirect or an error, carries a `noindex`, has a canonical that differs from the sitemap URL, or is missing a title, description, single H1 or JSON-LD. Do not submit to Google or Bing while it reports a problem.

## 2. Deploy

The site must answer **200** on the real domain before any submission is worth making. A Vercel `DEPLOYMENT_NOT_FOUND` page is worse than an unsubmitted sitemap: Google records the 404s and slows down recrawling.

```bash
curl -I https://gurgaonescortservice.site/
curl -s https://gurgaonescortservice.site/sitemap.xml | head
```

Both must return `200`. Then confirm the production build is index-ready:

```bash
npm run seo:index
```

Two things are easy to forget when deploying from GitHub:

- `public/img/` must be committed, otherwise every profile photo and area image 404s on the live site.
- The removed files `app/locations/[slug]/page.tsx` and `src/data/profiles.ts` must actually be deleted in the commit, or the old routes come back.

## 3. Google Search Console

1. Add a **Domain property** for `gurgaonescortservice.site` (DNS TXT record). The HTML-tag verification in `app/layout.tsx` covers the URL-prefix property as a backup.
2. **Sitemaps** → submit `https://gurgaonescortservice.site/sitemap.xml`. Next.js also advertises it in `robots.txt`, but a manual submission is the only way to see the parsed-URL count.
3. **URL Inspection** → check these five first, each should be *URL is on Google* or *Discovered*:
   - `/`
   - `/call-girls-in-golf-course-road-gurgaon`
   - `/escort-service-sector-57-gurgaon`
   - `/profiles`
   - `/blog/independent-escorts-in-gurgaon`
4. **Request indexing** only for pages that are not yet discovered. The quota is roughly 10-12 URLs per day per property, so spend it on the money pages (area pages, category pages, the home page), never on profiles.
5. Re-check **Pages → Why pages aren't indexed** after 72 hours. *Crawled - currently not indexed* on a 4,000-word page usually means the content still looks templated; *Discovered - currently not indexed* only means the queue is busy.

Google does not accept sitemap pings any more. The sitemap submission plus internal links is the whole mechanism: every page on this site is at most two clicks from the home page, which is the strongest signal available.

## 4. Bing Webmaster Tools

1. Sign in at `bing.com/webmasters`, choose **Import from Google Search Console** if the GSC property is already verified — it copies sites, sitemaps and verification in one step.
2. Otherwise verify with the meta tag: set `NEXT_PUBLIC_BING_SITE_VERIFICATION` in the Vercel project (the layout already renders `msvalidate.01` when the variable exists), redeploy, then click Verify.
3. **Sitemaps** → submit `https://gurgaonescortservice.site/sitemap.xml`.
4. **URL Submission** → paste the same five URLs from step 3.3. Bing's quota is 10,000 per day, so this is not the bottleneck.
5. Bing is where IndexNow pays off:

```bash
npm run seo:indexnow
```

   This reads the live sitemap, fetches the key file at `/<key>.txt`, and pushes all 187 URLs to `api.indexnow.org`, which fans out to Bing, Yandex, Seznam and Naver. Run it once after every deploy that changes URLs or titles.

## 5. What to watch, and when

| When | Where | What |
| --- | --- | --- |
| +24 h | Bing WMT → Site Explorer | URLs discovered vs indexed |
| +72 h | GSC → Pages | Indexed count, *not indexed* reasons |
| +7 d | GSC → Performance | Impressions per area page; pages with 0 impressions need internal links, not new copy |
| +14 d | GSC → Sitemaps | *Success* status and discovered-URL count |

Indexing is a queue, not a switch: 187 pages on a domain with no history normally take two to six weeks to be fully crawled, and profile pages take longest because they look similar to each other. The fixes that actually move the queue are unique copy per page, internal links from the hubs, and a stable canonical.

## 6. Signals already in place

- `robots.txt`: allow-all for search and AI crawlers, sitemap declared, `/api` and `/_next/image` disallowed.
- `sitemap.xml`: 187 URLs, no trailing slashes, real `lastmod` (blog posts use their edit date), priorities per group.
- Canonicals: absolute, self-referencing, no trailing slash, matching the sitemap exactly.
- Metadata: unique title (<=62 characters) and description on every page, single H1, JSON-LD on every route.
- Internal links: every indexable page is one or two clicks from the home page.
- `llms.txt`: a plain-language site summary for AI answer engines.
