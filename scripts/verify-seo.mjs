#!/usr/bin/env node
/**
 * Post-deploy SEO smoke test.
 *
 *   node scripts/verify-seo.mjs
 *   node scripts/verify-seo.mjs --base=http://localhost:3000 --sample=40
 *
 * Checks robots.txt and sitemap.xml agree, that indexable URLs return 200 with
 * a matching canonical, title, H1 and JSON-LD, that no internal link 404s, and
 * that the legacy redirect map still resolves.
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

const robots = await get('/robots.txt');
console.log('robots.txt -> ' + robots.status);
if (robots.status !== 200) fail('robots.txt did not return 200');
if (!/Sitemap:/i.test(robots.body)) fail('robots.txt has no Sitemap directive');
if (!/llms\.txt/.test(robots.body)) fail('robots.txt does not mention llms.txt');

const sitemap = await get('/sitemap.xml');
console.log('sitemap.xml -> ' + sitemap.status);
if (sitemap.status !== 200) fail('sitemap.xml did not return 200');
const locs = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
console.log('sitemap URLs: ' + locs.length);
if (locs.length < 50) fail('sitemap has suspiciously few URLs');
if (new Set(locs).size !== locs.length) fail('sitemap contains duplicate URLs');

const llms = await get('/llms.txt');
console.log('llms.txt -> ' + llms.status + ' (' + llms.body.length + ' bytes)');
if (llms.status !== 200) fail('llms.txt did not return 200');
if (!/canonical/i.test(llms.body)) fail('llms.txt has no canonical guidance section');

const paths = locs.map((loc) => new URL(loc).pathname);
const step = Math.max(1, Math.floor(paths.length / sample));
const targets = [...new Set(['/', ...paths.filter((_, index) => index % step === 0)])].slice(0, sample + 1);
const parsed = new Map();

console.log('\nChecking ' + targets.length + ' pages:');
for (const path of targets) {
  const page = await get(path);
  parsed.set(path, page.body);
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

const known = new Set(paths);
const linked = new Set();
for (const body of parsed.values()) {
  for (const match of body.matchAll(/href="(\/[^"#?]*)"/g)) {
    const href = match[1].replace(/\/$/, '') || '/';
    if (!href.startsWith('/_next') && !known.has(href)) linked.add(href);
  }
}
console.log('\nInternal links outside the sitemap: ' + linked.size);
let brokenLinks = 0;
for (const href of linked) {
  const res = await get(href);
  if (res.status >= 400) {
    brokenLinks++;
    console.log('  FAIL ' + href + ' -> ' + res.status);
    failures.push('internal link ' + href + ' returned ' + res.status);
  }
}
if (brokenLinks === 0) console.log('  ok   every internal link on the sampled pages resolves');

console.log('\nLegacy redirects:');
for (const path of ['/rates', '/escorts', '/gallery', '/escort-service-gurgaon', '/category/vip-call-girls']) {
  const res = await get(path);
  const ok = res.status === 301 || res.status === 308;
  console.log((ok ? '  ok   ' : '  FAIL ') + path + ' -> ' + res.status + ' ' + (res.headers.get('location') || ''));
  if (!ok) failures.push('redirect ' + path + ' returned ' + res.status);
}

console.log('\n' + (failures.length ? failures.length + ' problem(s) found' : 'All checks passed'));
process.exit(failures.length ? 1 : 0);
