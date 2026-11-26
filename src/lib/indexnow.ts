import { siteConfig } from '@/data/siteConfig';
import { getIndexableRoutes } from '@/lib/siteRoutes';

export const INDEXNOW_KEY = 'b7e3f9a1c2d4e5f6a7b8c9d0e1f2a3b4';
export const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
export const INDEXNOW_KEY_LOCATION = `${siteConfig.url.replace(/\/+$/, '')}/${INDEXNOW_KEY}.txt`;

/**
 * Every URL that should be indexed. Mirrors sitemap.xml exactly so IndexNow
 * submissions never advertise a page that the sitemap omits (or vice versa).
 */
export function getAllSiteUrls(): string[] {
  const baseUrl = siteConfig.url.replace(/\/+$/, '');
  return getIndexableRoutes().map((route) => (route.path === '/' ? baseUrl : baseUrl + route.path));
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
