'use server';

import {cookies} from 'next/headers';

export async function setLocale(locale: string) {
  cookies().set('NEXT_LOCALE', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'lax'
  });
}
