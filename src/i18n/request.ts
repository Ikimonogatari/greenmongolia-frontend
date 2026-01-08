import {getRequestConfig} from 'next-intl/server';
import {cookies} from 'next/headers';
import {defaultLocale, locales} from '../../next-intl.config';

export default getRequestConfig(async ({requestLocale}) => {
  // Try to get locale from cookie first
  const cookieLocale = cookies().get('NEXT_LOCALE')?.value;
  let locale = requestLocale || cookieLocale || defaultLocale;
  
  // Validate locale
  if (!locales.includes(locale as any)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
