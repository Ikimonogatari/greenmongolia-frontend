import createMiddleware from 'next-intl/middleware';
import {defaultLocale, localePrefix, locales} from './next-intl.config';
import {NextRequest} from 'next/server';

const intlMiddleware = createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
  localeDetection: false // Disable automatic detection, we'll handle it manually
});

export default function middleware(request: NextRequest) {
  // Check for locale cookie and set it in headers for next-intl
  const localeCookie = request.cookies.get('NEXT_LOCALE');
  let locale = defaultLocale;
  
  if (localeCookie && locales.includes(localeCookie.value as any)) {
    locale = localeCookie.value;
  }
  
  // Create a new request with the locale in the path or header
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-next-intl-locale', locale);
  
  const modifiedRequest = new NextRequest(request.url, {
    headers: requestHeaders,
    cookies: request.cookies
  });
  
  return intlMiddleware(modifiedRequest);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
