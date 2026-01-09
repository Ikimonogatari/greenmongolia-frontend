import {getRequestConfig} from 'next-intl/server';
import {cookies, headers} from 'next/headers';
import {defaultLocale, locales} from '../../next-intl.config';

export default getRequestConfig(async ({requestLocale}) => {
  // Priority: header (from middleware) > cookie > requestLocale > default
  const headersList = await headers();
  const headerLocale = headersList.get('x-next-intl-locale');
  
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;
  
  let locale = headerLocale || cookieLocale || requestLocale || defaultLocale;
  
  // Validate locale
  if (!locale || !locales.includes(locale as any)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
