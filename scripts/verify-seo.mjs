#!/usr/bin/env node
/**
 * Post-deploy SEO smoke test.
 *
 *   node scripts/verify-seo.mjs                     # checks production
 *   node scripts/verify-seo.mjs --base=http://localhost:3000
 *
 * Verifies that robots.txt and sitemap.xml agree, that every indexable URL
 * returns 200 with a canonical tag, a title, an H1 and JSON-LD, and that the
 * legacy redirect map still resolves instead of 404ing.
 */
const args = process.argv.slice(2);
const base = (args.find((a) => a.startsWith('--base='))?.split('=')[1] || 'https://gurgaonescortservice.site').replace(/\/+$/, '');
const sample = Number(args.find((a) => a.startsWith('--sample='))?.split('=')[1] || 24);

const failures = [];
const fail = (message) => {
  failures.push(message);
  console.log('  FAIL ' + message);
};

async function get(path) {
  const res = await fetch(base + path, { redirect: 'manual', headers: { 'user-agent': 'seo-verify/1.0' } });
  const body = await res.text();
  return { status: res.status, body, headers: res.headers };
}

console.log('\nSEO verification for ' + base + '\n');

// 1. robots.txt
const robots = await get('/robots.txt');
console.log('robots.txt -> ' + robots.status);
if (robots.status !== 200) fail('robots.txt did not return 200');
if (!/Sitemap:/i.test(robots.body)) fail('robots.txt has no Sitemap directive');
if (!/llms\.txt/.test(robots.body)) fail('robots.txt does not mention llms.txt');

// 2. sitemap.xml
const sitemap = await get('/sitemap.xml');
console.log('sitemap.xml -> ' + sitemap.status);
if (sitemap.status !== 200) fail('sitemap.xml did not return 200');
const locs = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
console.log('sitemap URLs: ' + locs.length);
if (locs.length < 50) fail('sitemap has suspiciously few URLs');
if (new Set(locs).size !== locs.length) fail('sitemap contains duplicate URLs');

// 3. llms.txt
const llms = await get('/llms.txt');
console.log('llms.txt -> ' + llms.status + ' (' + llms.body.length + ' bytes)');
if (llms.status !== 200) fail('llms.txt did not return 200');
if (!/canonical/i.test(llms.body)) fail('llms.txt has no canonical guidance section');

// 4. page checks (home + evenly spaced sample)
const paths = locs.map((loc) => new URL(loc).pathname);
const step = Math.max(1, Math.floor(paths.length / sample));
const targets = [...new Set(['/', ...paths.filter((_, index) => index % step === 0)])].slice(0, sample + 1);
console.log('\nChecking ' + targets.length + ' pages:');
for (const path of targets) {
  const page = await get(path);
  const canonical = page.body.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const title = page.body.match(/<title>([^<]*)<\/title>/)?.[1];
  const h1 = page.body.match(/<h1[^>]*>/);
  const jsonLd = page.body.includes('application/ld+json');
  const expectedPath = path === '/' ? '/' : path.replace(/\/$/, '');
  const problems = [];
  if (page.status !== 200) problems.push('status ' + page.status);
  if (!canonical) problems.push('no canonical');
  else {
    const canonicalPath = new URL(canonical).pathname.replace(/\/$/, '') || '/';
    if (canonicalPath !== expectedPath) problems.push('canonical path ' + canonicalPath);
  }
  if (!title || title.length < 15) problems.push('weak title');
  if (!h1) problems.push('no h1');
  if (!jsonLd) problems.push('no JSON-LD');
  console.log((problems.length ? '  FAIL ' : '  ok   ') + path + (problems.length ? ' -> ' + problems.join(', ') : ''));
  problems.forEach((problem) => failures.push(path + ': ' + problem));
}

// 5. redirects must not 404
console.log('\nLegacy redirects:');
for (const path of ['/blog', '/rates', '/escorts', '/gallery', '/escort-service-gurgaon', '/category/vip-call-girls']) {
  const res = await get(path);
  const ok = res.status === 301 || res.status === 308;
  console.log((ok ? '  ok   ' : '  FAIL ') + path + ' -> ' + res.status + ' ' + (res.headers.get('location') || ''));
  if (!ok) failures.push('redirect ' + path + ' returned ' + res.status);
}

console.log('\n' + (failures.length ? failures.length + ' problem(s) found' : 'All checks passed'));
process.exit(failures.length ? 1 : 0);
