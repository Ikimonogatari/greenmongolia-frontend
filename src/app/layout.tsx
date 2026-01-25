import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-circular-progressbar/dist/styles.css';
import 'react-modal-video/css/modal-video.css';
import 'react-photo-view/dist/react-photo-view.css';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css/bundle';

import '@/assets/css/animate.css';
import '@/assets/css/flaticon-set.css';
import '@/assets/css/font-awesome.css';

import '@/assets/css/helper.css';
import '@/assets/css/shop.css';
import '@/assets/css/style.css';
import '@/assets/css/unit-test.css';
import '@/assets/css/validnavs.css';
import './globals.css';

import Dependency from '@/components/utilities/Dependency';
import ReduxWrapper from '@/components/utilities/ReduxWrapper';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

export const metadata: Metadata = {
  title: "Green Mongolia Hub NGO | UNCCD"
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ReduxWrapper>
            <Dependency />
            {children}
          </ReduxWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
