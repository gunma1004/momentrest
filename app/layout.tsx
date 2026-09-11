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
    "프라이빗 샵",
    "아로마 테라피",
    "스웨디시",
    "홈케어 서비스"
  ],
  alternates: {
    canonical: "https://momentrest.netlify.app",
  },
  openGraph: {
    title: "모먼트레스트 - 프리미엄 힐링 & 프라이빗 테라피",
    description: "편안한 휴식과 힐링을 제공하는 모먼트레스트 공식 홈케어 플랫폼입니다.",
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
  // 🌟 네이버 서치어드바이저 소유권 확인 메타 태그 (필요시 기존 코드 유지)
  other: {
    "naver-site-verification": "54151eda21b1ba8f42df6306d48f226d92068077",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="naver-site-verification" content="88fcbdafe3b38905f47676300442497e64c4663f" />
      </head>
      <body className="bg-[#fff5f7] text-[#2f3542] antialiased selection:bg-pink-400 selection:text-white">
        {children}
      </body>
    </html>
  );
}