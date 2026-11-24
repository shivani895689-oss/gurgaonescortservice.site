import { NextResponse } from 'next/server';
import { getAdminCookie, isValidPassword } from '@/lib/adminAuth';

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const password = typeof body?.password === 'string' ? body.password : '';

    if (!isValidPassword(password)) {
      return NextResponse.json({ ok: false, message: 'Invalid password.' }, { status: 401 });
    }

    const cookie = getAdminCookie();
    const res = NextResponse.json({ ok: true, message: 'Logged in.' });
    res.cookies.set(cookie.name, cookie.value, cookie.options);
    return res;
  } catch {
    return NextResponse.json({ ok: false, message: 'Login failed.' }, { status: 500 });
  }
}
