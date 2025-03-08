import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: false,
  variable: "--font-noto-sans-jp",
  display: "swap",
  fallback: ["Hiragino Sans", "Hiragino Kaku Gothic ProN", "sans-serif"],
});

export const metadata: Metadata = {
  title: "tomoyukitakaku.com",
  description: "Personal website of tomoyukitakaku.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} antialiased`}>{children}</body>
    </html>
  );
}
