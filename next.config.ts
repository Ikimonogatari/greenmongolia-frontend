import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  /* config options here */
    reactCompiler: true,
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: '**',
          pathname: '/assets/**',
        },
        {
          protocol: 'https',
          hostname: '**',
          pathname: '/assets/**',
        },
      ],
      unoptimized: false,
    },
};

export default withNextIntl(nextConfig);
