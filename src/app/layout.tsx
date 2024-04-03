import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const NotoSansKR = localFont({
  src: [
    { path: "../../public/font/NotoSans_light_sub.woff2", weight: "300", style: "normal" },
    { path: "../../public/font/NotoSans_medium_sub.woff2", weight: "500", style: "normal" },
    { path: "../../public/font/NotoSans_bold_sub.woff2", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "함께 시작해요 - Vegwins",
  description: "편의점, 마트에 있는 비건 제품을 찾아봅시다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={NotoSansKR.className}>
      <body>{children}</body>
    </html>
  );
}
