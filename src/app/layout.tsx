import type { Metadata } from "next";
import { Noto_Sans, Dela_Gothic_One } from "next/font/google";
import "../style/globals.css";

const notoSans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
});
const dela = Dela_Gothic_One({
  subsets: ['latin'],
  display: 'swap',
  weight: "400"
});

export const metadata: Metadata = {
  title: "京都湯上がりクラフトビール祭",
  openGraph: {
    title: '京都湯上がりクラフトビール祭',
    url: 'https://kyoto-afterbathcraftbeer2025.vercel.app/',
    images: [
      {
        url: '/img/main_event.png',
        width: 800,
        height: 600,
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
        className={`${notoSans.className || dela.className} `}
      >
        {children}
      </body>
    </html>
  );
}
