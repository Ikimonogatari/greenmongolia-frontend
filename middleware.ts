import createMiddleware from 'next-intl/middleware';
import {defaultLocale, localePrefix, locales} from './next-intl.config';
import {NextRequest} from 'next/server';

const intlMiddleware = createMiddleware({
  defaultLocale,
  locales,
  localePrefix
});

export default function middleware(request: NextRequest) {
  // Check for locale cookie and set it in headers for next-intl
  const localeCookie = request.cookies.get('NEXT_LOCALE');
  if (localeCookie && locales.includes(localeCookie.value as any)) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-next-intl-locale', localeCookie.value);
    const modifiedRequest = new NextRequest(request.url, {
      headers: requestHeaders,
      cookies: request.cookies
    });
    return intlMiddleware(modifiedRequest);
  }
  
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
