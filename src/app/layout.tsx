import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Toaster } from 'react-hot-toast';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={NotoSansKR.className}>
        {children}
        <div id="modal" />
        <Toaster toastOptions={toasterOptions} />
      </body>
    </html>
  );
}

const NotoSansKR = localFont({
  src: [
    { path: '../../public/font/NotoSans_regular_sub.woff2', weight: '400', style: 'normal' },
    { path: '../../public/font/NotoSans_medium_sub.woff2', weight: '500', style: 'normal' },
    { path: '../../public/font/NotoSans_bold_sub.woff2', weight: '700', style: 'normal' },
  ],
});

const toasterOptions = {
  className: 'text-16 font-medium',
};

const APP_NAME = '비긴즈';
const APP_DEFAULT_TITLE = '함께 나아가는 비긴즈, vegwins';
const APP_TITLE_TEMPLATE = '%s - 비긴즈';
const APP_DESCRIPTION = '함께 나아가는 비긴즈, vegwins';

const AppleIconSizes = [57, 60, 72, 76];
const IconSizes = [16, 32, 96, 128, 196];

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  icons: [
    ...IconSizes.map((size) => ({ rel: 'icon', url: `/favicon/favicon-${size}x${size}.png`, sizes: `${size}x${size}` })),
    ...AppleIconSizes.map((size) => ({ rel: 'apple-touch-icon', url: `/favicon/apple-touch-icon-${size}x${size}.png`, sizes: `${size}x${size}` })),
  ],
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: '#3b3838',
};
