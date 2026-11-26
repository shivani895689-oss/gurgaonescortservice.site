#!/usr/bin/env node
/**
 * Submit every URL from the live sitemap to IndexNow (Bing, Yandex, Seznam,
 * Naver). No account or API key is needed — the key file is already published
 * at /<key>.txt and verified by the endpoint on first submission.
 *
 *   node scripts/submit-indexnow.mjs
 *   node scripts/submit-indexnow.mjs --base=http://localhost:3000
 */
const KEY = 'b7e3f9a1c2d4e5f6a7b8c9d0e1f2a3b4';
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const base = (process.argv.find((a) => a.startsWith('--base='))?.split('=')[1] || 'https://gurgaonescortservice.site').replace(/\/+$/, '');
const host = new URL(base).host;

console.log('IndexNow submission for ' + base);

const keyRes = await fetch(base + '/' + KEY + '.txt');
if (!keyRes.ok) {
  console.error('Key file ' + base + '/' + KEY + '.txt returned ' + keyRes.status + '. Deploy the site first.');
  process.exit(1);
}

const sitemap = await fetch(base + '/sitemap.xml');
if (!sitemap.ok) {
  console.error('sitemap.xml returned ' + sitemap.status);
  process.exit(1);
}
const urlList = [...(await sitemap.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
console.log('URLs found in sitemap: ' + urlList.length);

if (urlList.length === 0) process.exit(1);

const res = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key: KEY, keyLocation: base + '/' + KEY + '.txt', urlList }),
});

const messages = {
  200: 'accepted',
  202: 'accepted for processing',
  400: 'bad request (invalid format)',
  403: 'key not valid for this host',
  422: 'invalid URLs or URLs do not belong to the host',
  429: 'too many requests, try again later',
};

console.log('IndexNow responded ' + res.status + ': ' + (messages[res.status] || 'unexpected status'));
if (res.status !== 200 && res.status !== 202) process.exit(1);
