import { NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/adminAuth';
import { INDEXNOW_KEY, INDEXNOW_KEY_LOCATION } from '@/lib/indexnow';

export async function GET() {
  try {
    const authed = await isAdminAuthenticated();
    if (!authed) {
      return NextResponse.json({ ok: false, message: 'Unauthorized.' }, { status: 401 });
    }

    const res = await fetch(INDEXNOW_KEY_LOCATION, { cache: 'no-store' });
    const text = (await res.text()).trim();
    const match = text === INDEXNOW_KEY;
    return NextResponse.json({
      ok: res.ok && match,
      status: res.status,
      keyLocation: INDEXNOW_KEY_LOCATION,
      match,
      message: res.ok && match
        ? 'Key file is reachable and matches.'
        : res.ok
          ? 'Key file is reachable but content does not match.'
          : `Key file not reachable (status ${res.status}).`,
    });
  } catch (err) {
    return NextResponse.json({
      ok: false,
      status: 0,
      keyLocation: INDEXNOW_KEY_LOCATION,
      match: false,
      message: err instanceof Error ? err.message : 'Key check failed.',
    });
  }
}
