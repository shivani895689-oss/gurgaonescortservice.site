#!/usr/bin/env node
/**
 * Builds src/data/legacy-redirects.json from the previous site's URL
 * inventory (scripts/legacy-urls.json).
 *
 * Why: the redesign changes the URL structure. Every URL that Google or
 * Bing already indexed must 301 to its closest new equivalent instead of
 * returning 404, otherwise accumulated ranking signals are lost.
 *
 * Run: npm run build:redirects
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => readFileSync(path.join(root, file), 'utf8');

if (!existsSync(path.join(root, 'scripts/legacy-urls.json'))) {
  console.error('Missing scripts/legacy-urls.json');
  process.exit(1);
}

const legacyPaths = JSON.parse(read('scripts/legacy-urls.json'));
const aliases = JSON.parse(read('src/data/landingAliases.json'));

/** Root-level category pages that were merged into /categories/* to avoid cannibalisation. */
const CONSOLIDATED_CATEGORY_URLS = {
  '/vip-escorts-gurgaon': '/categories/vip-model-escorts-gurgaon',
  '/independent-escorts-gurgaon': '/categories/independent-escorts-gurgaon',
  '/russian-escorts-gurgaon': '/categories/russian-escorts-gurgaon',
  '/air-hostess-escorts-gurgaon': '/categories/air-hostess-escorts-gurgaon',
  '/high-profile-escorts-gurgaon': '/categories/high-profile-escorts-gurgaon',
  '/hourly-escort-service-gurgaon': '/categories/hourly-escort-service-gurgaon',
  '/full-night-escort-service-gurgaon': '/categories/full-night-escort-service-gurgaon',
};

const landingSlugs = [...read('src/data/landingPages.ts').matchAll(/"slug":\s*"([^"]+)"/g)].map((m) => m[1]);
const landingTypes = [...read('src/data/landingPages.ts').matchAll(/"slug":\s*"([^"]+)"[\s\S]*?"type":\s*"(location|category)"/g)].map((m) => ({ slug: m[1], type: m[2] }));
const quotedSlugs = (file) => [...read(file).matchAll(/^[ \t]*slug:\s*'([^']+)'/gm)].map((m) => m[1]);
const categorySlugs = quotedSlugs('src/data/categories.ts');
const serviceSlugs = quotedSlugs('src/data/services.ts');
const locationSlugs = quotedSlugs('src/data/locations.ts');
const profileSeoSlugs = [...read('src/lib/profiles.ts').matchAll(/seoSlug:s*'([^']+)'/g)].map((m) => m[1]);

const areaSlugs = new Set(landingTypes.filter((p) => p.type === 'location').map((p) => p.slug));
const livePaths = new Set([
  '/',
  '/about', '/booking', '/contact', '/faq', '/categories', '/services', '/locations', '/profiles',
  '/privacy-policy', '/terms-and-conditions', '/disclaimer', '/sitemap.xml',
  ...categorySlugs.map((s) => '/categories/' + s),
  ...serviceSlugs.map((s) => '/services/' + s),
  ...locationSlugs.map((s) => '/locations/' + s),
  ...profileSeoSlugs.map((s) => '/' + s),
  ...landingSlugs.map((s) => '/' + s),
]);

const HOTEL = '/services/hotel-outcall-gurgaon';

/** Named-area -> new area landing page (verified against landingPages below). */
const AREA_PAGES = {
  'dlf-phase-1': '/escort-service-dlf-phase-1-gurgaon',
  'dlf-phase-2': '/escort-service-dlf-phase-2-gurgaon',
  'dlf-phase-3': '/escort-service-dlf-phase-3-gurgaon',
  'dlf-phase-4': '/escort-service-dlf-phase-4-gurgaon',
  'dlf-phase-5': '/escort-service-dlf-phase-5-gurgaon',
  'cyber-city': '/escort-service-cyber-city-gurgaon',
  'dlf-city': '/escort-service-dlf-phase-2-gurgaon',
  'golf-course-road': '/escort-service-golf-course-road-gurgaon',
  'golf-course-extension': '/escort-service-golf-course-extension-road-gurgaon',
  'golf-course-extension-road': '/escort-service-golf-course-extension-road-gurgaon',
  'mg-road': '/escort-service-mg-road-gurgaon',
  'sohna-road': '/escort-service-sohna-road-gurgaon',
  'sushant-lok': '/escort-service-sushant-lok-gurgaon',
  'south-city': '/escort-service-south-city-gurgaon',
  'huda-city-centre': '/escort-service-huda-city-centre-gurgaon',
  'manesar': '/escort-service-manesar-gurgaon',
  'palam-vihar': '/escort-service-palam-vihar-gurgaon',
  'nirvana-country': '/escort-service-nirvana-country-gurgaon',
  'dwarka-expressway': '/escort-service-dwarka-expressway-gurgaon',
  'southern-peripheral-road': '/escort-service-southern-peripheral-road-gurgaon',
  'new-gurgaon': '/escort-service-new-gurgaon',
  'sector-29': '/escort-service-sector-29-gurgaon',
  'udyog-vihar': '/escort-service-udyog-vihar-gurgaon',
  'gurgaon': '/',
};

/** Legacy category folder / slug -> new category page. */
const CATEGORY_PAGES = {
  'air-hostess': '/categories/air-hostess-escorts-gurgaon',
  'air-hostess-escorts-in-gurgaon': '/categories/air-hostess-escorts-gurgaon',
  'celebrity-escorts': '/categories/celebrity-escorts-gurgaon',
  'celebrity-escorts-in-gurgaon': '/categories/celebrity-escorts-gurgaon',
  'college-girls': '/categories/college-escorts-gurgaon',
  'college-call-girls-in-gurgaon': '/categories/college-escorts-gurgaon',
  'independent-girls': '/categories/independent-escorts-gurgaon',
  'independent-escorts-in-gurgaon': '/categories/independent-escorts-gurgaon',
  'russian-call-girls': '/categories/russian-escorts-gurgaon',
  'russian-escorts-in-gurgaon': '/categories/russian-escorts-gurgaon',
  'vip-call-girls': '/categories/vip-model-escorts-gurgaon',
  'vip-escorts-in-gurgaon': '/categories/vip-model-escorts-gurgaon',
  'model-escorts': '/categories/vip-model-escorts-gurgaon',
  'model-escorts-in-gurgaon': '/categories/vip-model-escorts-gurgaon',
  'high-profile-girls': '/categories/high-profile-escorts-gurgaon',
  'high-profile-escorts-in-gurgaon': '/categories/high-profile-escorts-gurgaon',
  'premium-escorts': '/categories',
  'housewife-escorts': '/categories',
  'travel-escorts': '/categories',
};

/** Exact legacy slugs that need a deliberate destination. */
const EXACT = {
  '/rates': '/booking',
  '/phone-number': '/contact',
  '/gallery': '/profiles',
  '/shop': '/',
  '/terms': '/terms-and-conditions',
  '/escorts': '/profiles',
  '/escorts-jobs': '/contact',
  '/hotels': HOTEL,
  '/female-escorts-gurgaon': '/categories',
  '/in-out-call-girls-gurgaon': '/services',
  '/full-body-sensual-massage': '/services',
  '/erotic-massage-in-gurgaon': '/services',
  '/girlfriend-experience-in-gurgaon': '/categories',
  '/models-escorts-in-gurgaon': '/categories/vip-model-escorts-gurgaon',
  '/foreigner-call-girls-gurgaon': '/categories/russian-escorts-gurgaon',
  '/vip-call-girls-in-gurgaon': '/categories/vip-model-escorts-gurgaon',
  '/college-call-girls-gurgaon': '/categories/college-escorts-gurgaon',
  '/housewife-escorts-gurgaon': '/categories',
  '/unveiling-the-myths-and-misconceptions-about-escorts': '/categories',
  '/gurgaon-sectors': '/locations',
  '/escort-service-in-gurgaon': '/',
  '/escort-service-for-1-2-3-hours': '/categories/hourly-escort-service-gurgaon',
  '/escort-service-full-night': '/categories/full-night-escort-service-gurgaon',
  '/celebrity-escorts-gurgaon': '/categories/celebrity-escorts-gurgaon',
  '/high-profile-escorts-gurgaon': '/categories/high-profile-escorts-gurgaon',
  '/air-hostess-escorts-gurgaon': '/categories/air-hostess-escorts-gurgaon',
  '/gurgaon-russian-escorts': '/categories/russian-escorts-gurgaon',
  '/aerocity-escort-services': '/locations',
  '/dwarka-escorts-services': '/locations',
  '/mahipalpur-escorts-services': '/locations',
  '/russian-escorts-in-aerocity': '/categories/russian-escorts-gurgaon',
  '/punjabi-call-girls-in-gurgaon': '/categories',
  '/asian-escorts-in-gurgaon': '/categories',
  '/affordable-escorts-in-gurgaon': '/categories',
  '/aunty-escorts-in-gurgaon': '/categories',
  '/busty-escorts-in-gurgaon': '/categories',
  '/mature-escorts-in-gurgaon': '/categories',
  '/slim-call-girls-in-gurgaon': '/categories',
  '/teen-escorts-in-gurgaon': '/categories',
  '/indian-escorts-in-gurgaon': '/categories',
};

const HOTEL_PATTERN = /(?:^\/hotels(\/|$))|(?:^\/escorts?-serv(?:ice|ices)-near-)|(?:^\/escorts-service-near-)/;
const SECTOR_PATTERN = /^(?:\/locations\/sector-(\d+))|(?:^\/call-girls-in-sector-(\d+)-gurgaon)$/;

function sectorTarget(sector) {
  const slug = '/escort-service-sector-' + sector + '-gurgaon';
  return areaSlugs.has(slug.slice(1)) ? slug : '/locations';
}

function mapPath(legacyPath) {
  if (legacyPath === '/') return null;
  if (livePaths.has(legacyPath)) return null;
  if (legacyPath.endsWith('.xml')) return '/sitemap.xml';

  const segments = legacyPath.split('/').filter(Boolean);
  const [first, second, third] = segments;

  if (first === 'locations') {
    if (!second) return '/locations';
    if (AREA_PAGES[second]) {
      const target = AREA_PAGES[second];
      if (target === '/') return '/';
      return areaSlugs.has(target.slice(1)) ? target : '/locations';
    }
    const sector = second.match(/^sector-(\d+)$/);
    if (sector) return sectorTarget(sector[1]);
    const noidaSector = second.match(/^noida-sector-(\d+)$/);
    if (noidaSector) return '/locations';
    return '/locations';
  }

  if (first === 'escorts') {
    if (!second) return '/profiles';
    if (CATEGORY_PAGES[second]) return CATEGORY_PAGES[second];
    if (third) {
      const key = second.replace(/-in-gurgaon$/, '');
      if (CATEGORY_PAGES[second] || CATEGORY_PAGES[key]) return CATEGORY_PAGES[second] ?? CATEGORY_PAGES[key];
      if (/russian/.test(second)) return '/categories/russian-escorts-gurgaon';
      if (/independent/.test(second)) return '/categories/independent-escorts-gurgaon';
      if (/airhostess|air-hostess/.test(second)) return '/categories/air-hostess-escorts-gurgaon';
      if (/celebrity/.test(second)) return '/categories/celebrity-escorts-gurgaon';
      if (/college/.test(second)) return '/categories/college-escorts-gurgaon';
      if (/high-profile/.test(second)) return '/categories/high-profile-escorts-gurgaon';
      if (/model|vip/.test(second)) return '/categories/vip-model-escorts-gurgaon';
      return '/profiles';
    }
    return '/profiles';
  }

  if (first === 'category') return CATEGORY_PAGES[second] ?? '/categories';
  if (first === 'hotels') return HOTEL;
  if (first === 'blog') return '/';
  if (first === 'sitemap-index.xml') return '/sitemap.xml';

  const sectorMatch = legacyPath.match(SECTOR_PATTERN);
  if (sectorMatch) return sectorTarget(sectorMatch[1] ?? sectorMatch[2]);

  if (HOTEL_PATTERN.test(legacyPath)) return HOTEL;

  const areaFromCallGirls = legacyPath.match(/^\/call-girls-in-(.+?)(?:-gurgaon)?$/);
  if (areaFromCallGirls) {
    const area = areaFromCallGirls[1];
    if (AREA_PAGES[area]) {
      const target = AREA_PAGES[area];
      return areaSlugs.has(target.slice(1)) ? target : '/locations';
    }
    return '/locations';
  }

  const areaFromEscortsIn = legacyPath.match(/^\/escorts-in-(.+?)(?:-gurgaon)?$/);
  if (areaFromEscortsIn) {
    const area = areaFromEscortsIn[1];
    if (AREA_PAGES[area]) {
      const target = AREA_PAGES[area];
      return areaSlugs.has(target.slice(1)) ? target : '/locations';
    }
    return '/locations';
  }

  if (EXACT[legacyPath]) return EXACT[legacyPath];

  return '/';
}

const redirects = [];
const unresolved = [];
for (const legacyPath of legacyPaths) {
  if (!legacyPath || legacyPath === '/') continue;
  const destination = mapPath(legacyPath);
  if (!destination) continue;
  if (destination === legacyPath) continue;
  if (!destination) continue;
  if (!livePaths.has(destination)) {
    unresolved.push({ legacyPath, destination });
    continue;
  }
  redirects.push({ source: legacyPath, destination, permanent: true });
}

const knownSources = new Set(redirects.map((r) => r.source));
for (const [rawSource, destination] of Object.entries({ ...aliases, ...CONSOLIDATED_CATEGORY_URLS })) {
  const source = rawSource.startsWith('/') ? rawSource : `/${rawSource}`;
  if (!source || source === '/') continue;
  if (knownSources.has(source)) continue;
  if (livePaths.has(source)) continue;
  if (!livePaths.has(destination)) {
    unresolved.push({ legacyPath: source, destination });
    continue;
  }
  knownSources.add(source);
  redirects.push({ source, destination, permanent: true });
}

redirects.sort((a, b) => (a.source === b.source ? 0 : a.source < b.source ? -1 : 1));

const output = {
  generatedAt: new Date().toISOString(),
  count: redirects.length,
  redirects,
};

writeFileSync(path.join(root, 'src/data/legacy-redirects.json'), JSON.stringify(redirects, null, 2) + '\n');
writeFileSync(path.join(root, 'src/data/legacy-redirects.meta.json'), JSON.stringify({ generatedAt: output.generatedAt, count: redirects.length, unresolved }, null, 2) + '\n');

console.log('Legacy URLs:', legacyPaths.length);
console.log('Redirects generated:', redirects.length);
console.log('Unresolved destinations:', unresolved.length);
if (unresolved.length) console.log(unresolved.slice(0, 15));
