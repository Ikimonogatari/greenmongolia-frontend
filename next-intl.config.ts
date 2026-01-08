const config = {
  locales: ['en', 'mn'] as const,
  defaultLocale: 'en' as const,
  // Keep routes clean; rely on cookie/header for locale.
  localePrefix: 'never' as const
};

export default config;
export const {locales, defaultLocale, localePrefix} = config;
