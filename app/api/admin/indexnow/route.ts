import { NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/adminAuth';
import { getAllSiteUrls, submitToIndexNow } from '@/lib/indexnow';
import { siteConfig } from '@/data/siteConfig';

function normalizeUrl(input: string): string | null {
  const raw = input.trim();
  if (!raw) return null;
  try {
    const base = siteConfig.url.replace(/\/+$/, '');
    const u = raw.startsWith('http://') || raw.startsWith('https://')
      ? new URL(raw)
      : new URL(raw.startsWith('/') ? raw : `/${raw}`, base);
    const host = new URL(siteConfig.url).host;
    if (u.host !== host) return null;
    if (u.protocol !== 'https:' && u.protocol !== 'http:') return null;
    u.hash = '';
    return u.toString();
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  try {
    const authed = await isAdminAuthenticated();
    if (!authed) {
      return NextResponse.json({ ok: false, message: 'Unauthorized.' }, { status: 401 });
    }

    const body = await request.json().catch(() => ({}));
    const submitAll = body?.all === true;
    const rawUrls: unknown[] = Array.isArray(body?.urls) ? body.urls : [];

    const normalized: string[] = [];
    const invalid: string[] = [];

    if (submitAll) {
      normalized.push(...getAllSiteUrls());
    } else {
      for (const entry of rawUrls) {
        if (typeof entry !== 'string') continue;
        const n = normalizeUrl(entry);
        if (n) normalized.push(n);
        else if (entry.trim()) invalid.push(entry.trim());
      }
    }

    const urls = Array.from(new Set(normalized));

    if (urls.length === 0) {
      return NextResponse.json({
        ok: false,
        message: invalid.length > 0 ? 'No valid URLs to submit. Check the URL format/host.' : 'No valid URLs to submit.',
        invalid,
      }, { status: 400 });
    }

    const chunkSize = 10000;
    const results = [];
    for (let i = 0; i < urls.length; i += chunkSize) {
      const chunk = urls.slice(i, i + chunkSize);
      const r = await submitToIndexNow(chunk);
      results.push(r);
    }

    const ok = results.every((r) => r.ok);
    return NextResponse.json({
      ok,
      submitted: urls.length,
      urls,
      invalid,
      results,
      message: ok
        ? `Successfully submitted ${urls.length} URL(s) to IndexNow.`
        : `Submitted ${urls.length} URL(s) with some errors. Check results.`,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Submission failed.';
    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}
