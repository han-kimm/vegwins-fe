import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const NotoSansKR = localFont({
  src: [
    { path: '../../public/font/NotoSans_regular_sub.woff2', weight: '400', style: 'normal' },
    { path: '../../public/font/NotoSans_medium_sub.woff2', weight: '500', style: 'normal' },
    { path: '../../public/font/NotoSans_bold_sub.woff2', weight: '700', style: 'normal' },
  ],
});

export const metadata: Metadata = {
  title: '함께 시작해요, 비긴즈',
  description: '편의점, 마트에 있는 비건 제품을 찾아봅시다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={NotoSansKR.className}>{children}</body>
    </html>
  );
}
