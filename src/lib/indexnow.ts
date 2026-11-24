import { siteConfig } from '@/data/siteConfig';
import { categories } from '@/data/categories';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { landingPages } from '@/data/landingPages';

export const INDEXNOW_KEY = 'b7e3f9a1c2d4e5f6a7b8c9d0e1f2a3b4';
export const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
export const INDEXNOW_KEY_LOCATION = `${siteConfig.url.replace(/\/+$/, '')}/${INDEXNOW_KEY}.txt`;

export function getAllSiteUrls(): string[] {
  const baseUrl = siteConfig.url.replace(/\/+$/, '');
  const urls = [
    baseUrl,
    `${baseUrl}/about`,
    `${baseUrl}/booking`,
    `${baseUrl}/contact`,
    `${baseUrl}/faq`,
    `${baseUrl}/categories`,
    `${baseUrl}/services`,
    `${baseUrl}/locations`,
    `${baseUrl}/privacy-policy`,
    `${baseUrl}/terms-and-conditions`,
    `${baseUrl}/disclaimer`,
    ...categories.map((c) => `${baseUrl}/categories/${c.slug}`),
    ...services.map((s) => `${baseUrl}/services/${s.slug}`),
    ...locations.map((l) => `${baseUrl}/locations/${l.slug}`),
    ...landingPages.map((p) => `${baseUrl}/${p.slug}`),
  ];
  return Array.from(new Set(urls));
}

export type IndexNowResult = {
  ok: boolean;
  status: number;
  submitted: number;
  message: string;
  endpoint: string;
  urlList: string[];
};

export async function submitToIndexNow(urlList: string[]): Promise<IndexNowResult> {
  const host = new URL(siteConfig.url).host;
  const body = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList,
  };

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
    cache: 'no-store',
  });

  const ok = res.status === 200 || res.status === 202;
  let message = ok ? 'URLs submitted successfully to IndexNow.' : `IndexNow returned status ${res.status}.`;
  if (res.status === 200) message = 'URLs submitted and accepted (200).';
  if (res.status === 202) message = 'URLs accepted for processing (202).';
  if (res.status === 400) message = 'Bad request - invalid format (400).';
  if (res.status === 403) message = 'Key not valid - host/key mismatch (403).';
  if (res.status === 422) message = 'Invalid URLs or URLs do not belong to host (422).';
  if (res.status === 429) message = 'Too many requests - possible spam (429).';

  return { ok, status: res.status, submitted: urlList.length, message, endpoint: INDEXNOW_ENDPOINT, urlList };
}
