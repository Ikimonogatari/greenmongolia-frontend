import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css/bundle';
import 'react-toastify/dist/ReactToastify.css';
import 'react-modal-video/css/modal-video.css';
import 'react-circular-progressbar/dist/styles.css';
import 'react-photo-view/dist/react-photo-view.css';
import 'react-circular-progressbar/dist/styles.css';
import 'animate.css';

import '@/assets/css/animate.css';
import '@/assets/css/font-awesome.css';
import '@/assets/css/flaticon-set.css';

import '@/assets/css/validnavs.css';
import '@/assets/css/helper.css';
import '@/assets/css/unit-test.css';
import '@/assets/css/shop.css';
import '@/assets/css/style.css';
import './globals.css';

import Dependency from '@/components/utilities/Dependency';
import ReduxWrapper from '@/components/utilities/ReduxWrapper';
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: "Agrica - Organic Farm Agriculture React NextJs Template"
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
