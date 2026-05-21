import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

const siteUrl = "https://www.hanyangfruit.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  title: "한양과일 | 백화점급 이상의 품질, 거품 없는 가격",
  description:
    "복불복 과일에 지치셨다면 한양과일로 정착하세요. 당일 검수부터 직접 배송까지.",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "한양과일",
    title: "한양과일 | 백화점급 이상의 품질, 거품 없는 가격",
    description:
      "복불복 과일에 지치셨다면 한양과일로 정착하세요. 당일 검수부터 직접 배송까지.",
    images: [
      {
        url: "/og-share.png",
        width: 1021,
        height: 1024,
        alt: "한양과일",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "한양과일 | 백화점급 이상의 품질, 거품 없는 가격",
    description:
      "복불복 과일에 지치셨다면 한양과일로 정착하세요. 당일 검수부터 직접 배송까지.",
    images: ["/og-share.png"],
  },
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
