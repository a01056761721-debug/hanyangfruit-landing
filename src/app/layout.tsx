import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const metadata: Metadata = {
  title: "한양과일 | 백화점급 이상의 품질, 거품 없는 가격",
  description:
    "복불복 과일에 지치셨다면 한양과일로 정착하세요. 당일 검수부터 직접 배송까지.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} h-full bg-white antialiased`} suppressHydrationWarning>
      <body className={`${notoSansKr.className} min-h-full bg-white text-slate-900`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
