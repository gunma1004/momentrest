import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://momentrest.netlify.app"),
  title: {
    default: "모먼트레스트 - 프리미엄 힐링 & 프라이빗 테라피",
    template: "%s | 모먼트레스트",
  },
  description: "일상 속 지친 피로를 풀어드리는 프리미엄 프라이빗 힐링 테라피, 모먼트레스트입니다.",
  keywords: [
    "모먼트레스트",
    "힐링 테라피",
    "프라이빗 마사지",
    "아로마 테라피",
    "스웨디시",
    "감성 테라피",
    "체형 관리",
    "릴렉싱 스파",
    "건전 마사지",
  ],
  alternates: {
    canonical: "https://momentrest.netlify.app",
  },
  openGraph: {
    title: "모먼트레스트 - 프리미엄 힐링 & 프라이빗 테라피",
    description: "편안한 휴식과 힐링을 제공하는 모먼트레스트 공식 테라피 플랫폼입니다.",
    url: "https://momentrest.netlify.app",
    siteName: "모먼트레스트",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-main.png",
        width: 1200,
        height: 630,
        alt: "모먼트레스트 - 프리미엄 힐링 테라피",
      },
    ],
  },
  other: {
    "naver-site-verification": "88fcbdafe3b38905f47676300442497e64c4663f",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-[#fff5f7] text-[#2f3542] antialiased selection:bg-pink-400 selection:text-white">
        {children}
      </body>
    </html>
  );
}