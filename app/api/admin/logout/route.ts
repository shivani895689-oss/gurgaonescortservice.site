import { NextResponse } from 'next/server';
import { getAdminCookie } from '@/lib/adminAuth';

export async function POST() {
  const cookie = getAdminCookie();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(cookie.name, '', { ...cookie.options, maxAge: 0 });
  return res;
}
