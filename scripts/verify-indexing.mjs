#!/usr/bin/env node
/**
 * Index-readiness gate. Run this against a deployed URL before asking Google or
 * Bing to crawl, and again after every deploy.
 *
 *   node scripts/verify-indexing.mjs
 *   node scripts/verify-indexing.mjs --base=https://preview.vercel.app
 *
 * It checks the whole sitemap, not a sample: every URL must answer 200 (never a
 * redirect), carry a self-referencing canonical, be indexable, and expose a
 * title, meta description, a single H1 and JSON-LD.
 */
const base = (process.argv.find((a) => a.startsWith('--base='))?.split('=')[1] || 'https://gurgaonescortservice.site').replace(/\/+$/, '');
const host = new URL(base).host;
const isLocal = /^(localhost|127\.0\.0\.1|0\.0\.0\.0)(:\d+)?$/.test(host);
// Locally the build still emits production URLs, so the host check compares the
// sitemap against itself rather than against localhost.
let expectHost = host;
const problems = [];
const fail = (message) => {
  problems.push(message);
  console.log('  FAIL ' + message);
};

const UA = { 'user-agent': 'index-readiness/1.0 (+https://' + host + ')' };

console.log('\nIndex readiness for ' + base + '\n');

const robots = await fetch(base + '/robots.txt', { headers: UA, redirect: 'manual' });
const robotsBody = await robots.text();
console.log('robots.txt -> ' + robots.status);
if (robots.status !== 200) fail('robots.txt did not return 200');
if (/Disallow: \/\s*$/m.test(robotsBody) && !/Allow: \//.test(robotsBody)) fail('robots.txt may block the whole site');
if (!/Sitemap:\s*https?:\/\//i.test(robotsBody)) fail('robots.txt has no absolute Sitemap directive');

const llms = await fetch(base + '/llms.txt', { headers: UA, redirect: 'manual' });
console.log('llms.txt -> ' + llms.status);

const sitemap = await fetch(base + '/sitemap.xml', { headers: UA, redirect: 'manual' });
const sitemapBody = await sitemap.text();
console.log('sitemap.xml -> ' + sitemap.status);
if (sitemap.status !== 200) fail('sitemap.xml did not return 200');
const entries = [...sitemapBody.matchAll(/<url>\s*<loc>([^<]+)<\/loc>([\s\S]*?)<\/url>/g)].map((match) => ({
  loc: match[1].trim(),
  lastmod: (match[2].match(/<lastmod>([^<]+)<\/lastmod>/) || [])[1] || '',
}));
const locs = entries.map((entry) => entry.loc);
console.log('sitemap URLs: ' + locs.length);
if (locs.length < 50) fail('sitemap looks too small');
if (new Set(locs).size !== locs.length) fail('sitemap contains duplicate URLs');
if (isLocal && locs.length > 0) {
  expectHost = new URL(locs[0]).host;
  console.log('local run: checking sitemap URLs against production host ' + expectHost);
}
const hostMismatch = locs.filter((loc) => new URL(loc).host !== expectHost);
const insecure = locs.filter((loc) => new URL(loc).protocol !== 'https:');
const trailing = locs.filter((loc) => { const p = new URL(loc).pathname; return p !== '/' && p.endsWith('/'); });
if (hostMismatch.length) fail(hostMismatch.length + ' sitemap URLs use a host other than ' + expectHost);
if (insecure.length) fail(insecure.length + ' sitemap URLs are not https');
if (trailing.length) fail(trailing.length + ' sitemap URLs have a trailing slash, e.g. ' + trailing[0]);
const missingLastmod = entries.filter((entry) => !entry.lastmod).map((entry) => entry.loc);
if (missingLastmod.length) fail(missingLastmod.length + ' sitemap URLs have no lastmod');

const stats = { ok: 0, redirect: 0, notFound: 0, noindex: 0, canonical: 0 };
const BATCH = 8;
for (let index = 0; index < locs.length; index += BATCH) {
  const batch = locs.slice(index, index + BATCH);
  await Promise.all(
    batch.map(async (loc) => {
      const path = new URL(loc).pathname;
      const res = await fetch(base + path, { headers: UA, redirect: 'manual' });
      if (res.status !== 200) {
        stats[res.status >= 300 && res.status < 400 ? 'redirect' : 'notFound'] += 1;
        fail(path + ' -> status ' + res.status + (res.headers.get('location') ? ' (to ' + res.headers.get('location') + ')' : ''));
        return;
      }
      const type = res.headers.get('content-type') || '';
      if (!type.includes('text/html')) {
        fail(path + ' -> content-type ' + type);
        return;
      }
      const html = await res.text();
      if (/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html)) {
        stats.noindex += 1;
        fail(path + ' -> noindex but listed in sitemap');
      }
      const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] || '';
      const canonicalPath = canonical ? new URL(canonical).pathname : '';
      // On a local run the canonical points at production, so compare paths only.
      if (isLocal ? canonicalPath !== new URL(loc).pathname : canonical !== loc) {
        stats.canonical += 1;
        fail(path + ' -> canonical ' + (canonical || 'missing') + ' (expected ' + loc + ')');
      }
      if (!/<title>[^<]{10,}<\/title>/.test(html)) fail(path + ' -> weak or missing title');
      if (!/<meta name="description" content="[^"]{50,}"/.test(html)) fail(path + ' -> short or missing meta description');
      const h1s = (html.match(/<h1[\s>]/g) || []).length;
      if (h1s !== 1) fail(path + ' -> ' + h1s + ' H1 elements');
      if (!/application\/ld\+json/.test(html)) fail(path + ' -> no JSON-LD');
      stats.ok += 1;
    }),
  );
  if (index % 40 === 0) process.stdout.write('  checked ' + Math.min(index + BATCH, locs.length) + '/' + locs.length + '\r');
}

console.log('\nChecked ' + locs.length + ' URLs: ' + stats.ok + ' clean, ' + stats.redirect + ' redirects, ' + stats.notFound + ' errors, ' + stats.noindex + ' noindex, ' + stats.canonical + ' canonical mismatches');

if (problems.length) {
  console.log('\n' + problems.length + ' problem(s) found');
  process.exit(1);
}
console.log('\nEvery sitemap URL is index-ready.');
