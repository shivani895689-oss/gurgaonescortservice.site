import { createHash, timingSafeEqual } from 'crypto';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'admin_session';
const SALT = 'gurgaon-escort-admin-v1';

export function getAdminPassword() {
  const env = process.env.ADMIN_PASSWORD?.trim();
  return env && env.length > 0 ? env : 'alinavipseo';
}

export function getSessionToken(password: string) {
  return createHash('sha256').update(`${SALT}:${password}`).digest('hex');
}

export function isValidPassword(password: string) {
  const expected = getAdminPassword();
  const a = Buffer.from(password);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;
  const expected = getSessionToken(getAdminPassword());
  const a = Buffer.from(token);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function getAdminCookie() {
  return {
    name: COOKIE_NAME,
    value: getSessionToken(getAdminPassword()),
    options: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax' as const,
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    },
  };
}
