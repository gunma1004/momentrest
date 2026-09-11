import type { Metadata } from "next";
import MainClientUI from "./MainClientUI";

export const metadata: Metadata = {
  title: "모먼트레스트 | 서울·경기·인천 프리미엄 힐링 테라피 플랫폼",
  description: "서울·경기·인천 전지역 신속한 방문 및 편안한 휴식을 제공하는 모먼트레스트 프리미엄 힐링 테라피 플랫폼입니다.",
  keywords: [
    "모먼트레스트",
    "MomentRest",
    "힐링테라피",
    "스웨디시",
    "아로마테라피",
    "서울테라피",
    "경기테라피",
    "인천방문케어"
  ],
  alternates: {
    canonical: "https://momentrest.netlify.app",
  },
  openGraph: {
    title: "모먼트레스트 - 수도권 프리미엄 힐링 테라피",
    description: "내 주변 검증된 프라이빗 힐링 테라피 샵 총집합! 아로마, 스웨디시 맞춤 휴식을 만나보세요.",
    url: "https://momentrest.netlify.app",
    siteName: "모먼트레스트(MomentRest)",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-main.png",
        width: 1200,
        height: 630,
        alt: "모먼트레스트 - 프리미엄 힐링 & 프라이빗 플랫폼",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "서울·경기·인천 프리미엄 힐링 | 모먼트레스트",
    description: "서울·경기·인천 검증된 프라이빗 테라피 제휴 정보 및 프리미엄 힐링 가이드",
    images: ["/og-main.png"],
  },
};

export default function Page() {
  return <MainClientUI />;
}