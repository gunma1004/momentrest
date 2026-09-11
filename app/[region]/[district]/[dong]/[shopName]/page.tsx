import type { Metadata } from "next";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    region: string;
    district: string;
    dong?: string;
    shopName: string;
  }>;
}

// 샵 데이터 (식별자를 영문 또는 URL 친화적 ID/슬러그로 관리)
const shopData: Record<string, {
  name: string;
  phone: string;
  location: string;
  badge: string;
  image: string;
  desc: string;
  courses: {
    category: string;
    badge?: string;
    desc: string;
    items: { time: string; price: string; recommend?: boolean }[];
  }[];
  features: string[];
}> = {
  "golden-therapy": {
    name: "한국골든테라피",
    phone: "0507-1280-3361",
    location: "서울 · 경기 · 인천 전지역 25분 내 신속 방문",
    badge: "VIP 골든 힐링 케어",
    image: "/shop1.jpg",
    desc: "골든 품격의 감성 릴렉싱! 전문 한국인 관리사와 프리미엄 힐러진이 선사하는 맞춤형 바디케어.",
    courses: [
      {
        category: "👑 한국인 골든 스웨디시",
        badge: "BEST 시그니처",
        desc: "최고급 천연 오일과 전문 테라피스트의 수준 높은 1:1 감성 림프 순환 케어.",
        items: [
          { time: "60분", price: "140,000원" },
          { time: "90분", price: "190,000원", recommend: true }
        ]
      }
    ],
    features: ["100% 안심 후불제", "25분 내 도착", "24시간 상시 운영", "위생 및 방역 철저"]
  },
  // 다른 제휴샵 데이터들도 슬러그 형식으로 추가...
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { region, district, dong, shopName } = resolvedParams;
  
  const decodedDistrict = decodeURIComponent(district);
  const decodedDong = dong ? decodeURIComponent(dong) : "";
  const decodedShopSlug = decodeURIComponent(shopName);

  const shop = shopData[decodedShopSlug] || { name: "모먼트레스트 제휴점", phone: "0507-1280-3344" };
  
  // 🌟 요청하신 형식: [지역명] 출장 마사지 - [샵이름]
  const locationPrefix = decodedDong ? `${decodedDistrict} ${decodedDong}` : decodedDistrict;
  const pageTitle = `${locationPrefix} 출장 마사지 - ${shop.name}`;
  const pageDescription = `${locationPrefix} 지역 프리미엄 방문 테라피. 선입금 없는 100% 후불제 안전 시스템 ${shop.name} 안내.`;

  const canonicalUrl = `https://momentrest.netlify.app/${region}/${encodeURIComponent(decodedDistrict)}${decodedDong ? `/${encodeURIComponent(decodedDong)}` : ""}/${shopName}`;

  return {
    title: `${pageTitle} | 모먼트레스트`,
    description: pageDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: "모먼트레스트(MomentRest)",
      locale: "ko_KR",
      type: "website",
      images: [{ url: "/og-main.png", width: 1200, height: 630, alt: pageTitle }],
    },
  };
}

export default async function ShopDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { region, district, dong, shopName } = resolvedParams;
  
  const decodedDistrict = decodeURIComponent(district);
  const decodedDong = dong ? decodeURIComponent(dong) : "";
  const decodedShopSlug = decodeURIComponent(shopName);

  const shop = shopData[decodedShopSlug] || shopData["golden-therapy"];
  const locationPrefix = decodedDong ? `${decodedDistrict} ${decodedDong}` : decodedDistrict;

  return (
    <div className="bg-[#fff5f7] text-[#2f3542] min-h-screen flex flex-col font-sans selection:bg-pink-400 selection:text-white pb-28">
      {/* 헤더 및 본문 UI 렌더링 영역 */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-pink-200 px-4 py-3 shadow-sm">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-lg font-black text-pink-600">모먼트레스트</Link>
          <span className="text-xs text-gray-500">📍 현재 위치: {locationPrefix}</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1 space-y-6">
        <h1 className="text-2xl font-black">{locationPrefix} 출장 마사지 - {shop.name}</h1>
        {/* 샵 상세 내용 및 코스 출력 */}
      </main>
    </div>
  );
}