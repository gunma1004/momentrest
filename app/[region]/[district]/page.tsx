import type { Metadata } from "next";
import Link from "next/link";
import { ClientTextMixerInline } from "./ClientTextMixerInline";

interface PageProps {
  params: Promise<{
    region: string;
    district: string;
  }>;
  searchParams: Promise<{
    dong?: string;
  }>;
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  const { region, district } = resolvedParams;
  const dongName = resolvedSearchParams.dong ? decodeURIComponent(resolvedSearchParams.dong) : "";
  const districtName = decodeURIComponent(district);
  const regionName = region === "seoul" ? "서울" : region === "incheon" ? "인천" : "경기";

  const simpleLocation = dongName ? `${districtName} ${dongName}` : districtName;

  // -------------------------------------------------------------
  // 🎯 고유 해시 연산 (50가지 분산 회피 패턴 분기 - 스팸성 완전 제거)
  // -------------------------------------------------------------
  const charSum = (regionName + simpleLocation + "momentrest_clean_mix").split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const variantIndex = charSum % 50;

  // 🌟 [전수 포함 50종 타이틀] 깔끔한 프리미엄 힐링 테라피 중심 구성
  const titleVariants = [
    /* 0 */ `${regionName} ${simpleLocation} 프리미엄 힐링 테라피 안내 - 모먼트레스트`,
    /* 1 */ `${simpleLocation} 맞춤형 웰니스 테라피 (${regionName}) 프라이빗 케어`,
    /* 2 */ `${regionName} ${simpleLocation} 프라이빗 아로마 & 스웨디시 가이드`,
    /* 3 */ `${simpleLocation} 프리미엄 홈케어 테라피 · 모먼트레스트`,
    /* 4 */ `프리미엄 힐링 ${regionName} ${simpleLocation} 맞춤 테라피`,
    /* 5 */ `모먼트레스트 | ${simpleLocation} 안심 릴렉싱 바디케어 (${regionName})`,
    /* 6 */ `${regionName} ${simpleLocation} 프라이빗 힐링 서비스 예약`,
    /* 7 */ `${simpleLocation} 감성 릴렉스 테라피 (${regionName})`,
    /* 8 */ `${regionName} ${simpleLocation} 스웨디시 1:1 맞춤 케어`,
    /* 9 */ `[모먼트레스트] ${simpleLocation} 프리미엄 테라피 (${regionName})`,
    /* 10 */ `${regionName} ${simpleLocation} 전신 오일 릴렉싱 테라피`,
    /* 11 */ `${simpleLocation} 신속한 방문 힐링 테라피 (${regionName})`,
    /* 12 */ `단독 힐링 ${regionName} ${simpleLocation} 아로마 테라피`,
    /* 13 */ `${simpleLocation} 웰니스 바디케어 프로그램 (${regionName})`,
    /* 14 */ `${regionName} ${simpleLocation} 베테랑 테라피스트 추천`,
    /* 15 */ `${simpleLocation} 릴렉스 케어 실시간 가이드 (${regionName})`,
    /* 16 */ `[모먼트레스트] ${regionName} ${simpleLocation} 1:1 맞춤 프로그램`,
    /* 17 */ `${simpleLocation} 전신 피로해소 정통 테라피 (${regionName})`,
    /* 18 */ `${regionName} ${simpleLocation} 프리미엄 스웨디시 테라피`,
    /* 19 */ `${simpleLocation} 정직하고 편안한 프라이빗 힐링 (${regionName})`,
    /* 20 */ `${regionName} ${simpleLocation} 프리미엄 홈케어 서비스`,
    /* 21 */ `${simpleLocation} 아로마 오일 바디케어 전문 (${regionName})`,
    /* 22 */ `[모먼트레스트 추천] ${regionName} ${simpleLocation} 고품격 힐링`,
    /* 23 */ `${simpleLocation} 신속한 매칭 감성 테라피 (${regionName})`,
    /* 24 */ `${regionName} ${simpleLocation} VIP 프리미엄 스웨디시`,
    /* 25 */ `모먼트레스트 | ${simpleLocation} 맞춤 힐링 테라피 (${regionName})`,
    /* 26 */ `${regionName} ${simpleLocation} 홈케어 & 천연 오일 테라피`,
    /* 27 */ `${simpleLocation} 프라이빗 바디케어 실시간 예약 (${regionName})`,
    /* 28 */ `${regionName} ${simpleLocation} 친절한 방문 바디케어`,
    /* 29 */ `[신속 안내] ${dongName || districtName} 프리미엄 테라피 (${regionName})`,
    /* 30 */ `${regionName} ${simpleLocation} VIP 힐링 테라피 제휴`,
    /* 31 */ `내 주변 ${simpleLocation} 감성 테라피 빠른 매칭 (${regionName})`,
    /* 32 */ `${regionName} ${simpleLocation} 전문 아로마 가이드`,
    /* 33 */ `${simpleLocation} 안전한 1:1 홈케어 힐링 (${regionName})`,
    /* 34 */ `[모먼트레스트] ${regionName} ${simpleLocation} 스웨디시 모음`,
    /* 35 */ `${simpleLocation} 힐링 테라피 코스 및 가격표 (${regionName})`,
    /* 36 */ `${regionName} ${simpleLocation} 편안한 프라이빗 테라피`,
    /* 37 */ `${dongName || districtName} 전문 관리사 감성 테라피 (${regionName})`,
    /* 38 */ `${regionName} ${simpleLocation} 나만의 공간 힐링 테라피`,
    /* 39 */ `[힐링 가이드] ${simpleLocation} 홈케어 오일 테라피 (${regionName})`,
    /* 40 */ `${regionName} ${simpleLocation} 스웨디시 & 아로마 샵`,
    /* 41 */ `${simpleLocation} 건전 힐링 맞춤 테라피 - 모먼트레스트 (${regionName})`,
    /* 42 */ `${regionName} ${simpleLocation} 피로 풀리는 1:1 케어`,
    /* 43 */ `모먼트레스트 | ${simpleLocation} 신속한 맞춤 매칭 (${regionName})`,
    /* 44 */ `${regionName} ${simpleLocation} 홈케어 제휴 목록`,
    /* 45 */ `${simpleLocation} 맞춤형 스웨디시 (${regionName})`,
    /* 46 */ `${regionName} ${simpleLocation} 집에서 받는 편안한 감성 케어`,
    /* 47 */ `[안심 케어] ${simpleLocation} 정통 테라피 (${regionName})`,
    /* 48 */ `${regionName} ${simpleLocation} 최고급 오일 아로마 케어`,
    /* 49 */ `${simpleLocation} 프라이빗 테라피 후기 - 모먼트레스트 (${regionName})`
  ];

  const descriptionVariants = [
    /* 0 */ `${regionName} ${simpleLocation} 프리미엄 힐링 테라피 안내. 편안하고 신속한 방문 서비스를 모먼트레스트에서 확인하세요.`,
    /* 1 */ `프라이빗 힐링! ${simpleLocation} 감성 테라피 (${regionName}) 안내 가이드. 전문 관리사의 맞춤형 서비스를 연결해 드립니다.`,
    /* 2 */ `${regionName} ${simpleLocation} 스웨디시 테라피 예약 안내. 편안하고 정직한 서비스를 공식 사이트에서 제공합니다.`,
    /* 3 */ `${simpleLocation} 프리미엄 홈케어 테라피 (${regionName}) 안심 방문. 스웨디시, 아로마 릴렉싱 프로그램으로 편안한 휴식을 누려보세요.`,
    /* 4 */ `${regionName} ${simpleLocation} 힐링 테라피 찾으시나요? 안심하고 이용하는 품격 있는 바디케어 가이드입니다.`,
    /* 5 */ `지친 피로를 풀어줄 ${simpleLocation} 아로마 테라피 (${regionName}). 신속한 방문과 숙련된 테라피스트의 품격 있는 서비스.`,
    /* 6 */ `${regionName} ${simpleLocation} 어디든 신속한 방문! 편안하게 누리는 홈케어 테라피와 힐링 코스를 엄선했습니다.`,
    /* 7 */ `${simpleLocation} 프라이빗 테라피 (${regionName}) 전문 제휴처. 익숙한 공간에서 편안하게 누리는 최고급 감성 케어.`,
    /* 8 */ `${regionName} ${simpleLocation} 믿을 수 있는 스웨디시 가이드. 스트레칭, 아로마 전신 오일 테라피 가격 비교.`,
    /* 9 */ `모먼트레스트가 보장하는 ${simpleLocation} 테라피 (${regionName}) 안심 서비스! 투명하고 안전한 운영 시스템.`,
    /* 10 */ `${regionName} ${simpleLocation} 오일 테라피 완벽 안내. 뭉친 근육과 묵은 피로를 상쾌하게 비워내 드립니다.`,
    /* 11 */ `${simpleLocation} 힐링 테라피 (${regionName}) 코스별 요금 안내. 친절한 상담과 신속한 매칭 서비스.`,
    /* 12 */ `${regionName} ${simpleLocation} 아로마 테라피 릴렉싱 프로그램. 프라이빗 맞춤 테라피로 지친 심신에 휴식 선사.`,
    /* 13 */ `${simpleLocation} 맞춤 테라피 (${regionName}) 예약 가이드. 투명한 제휴 정보 제공.`,
    /* 14 */ `${regionName} ${simpleLocation} 어디서나 신속하게 찾아가는 홈케어. 내 몸에 꼭 맞는 힐링 프로그램을 추천합니다.`,
    /* 15 */ `${simpleLocation} 프라이빗 테라피 (${regionName}) 안심 안내! 정직한 운영 시스템.`,
    /* 16 */ `${regionName} ${simpleLocation} 전문 테라피스트의 손길로 만나는 감성 테라피. 투명한 코스별 가격 정보를 안내합니다.`,
    /* 17 */ `${simpleLocation} 정통 테라피 (${regionName}) 서비스. 하루 종일 쌓인 스트레스와 굳은 어깨 근육 이완.`,
    /* 18 */ `${regionName} ${simpleLocation} 엄선 제휴점 안내. 검증된 1:1 맞춤 테라피 프로그램.`,
    /* 19 */ `${simpleLocation} 힐링 테라피 (${regionName}) 인근 신속 도착! 친절한 상담과 쾌적한 매칭 서비스.`,
    /* 20 */ `${regionName} ${simpleLocation} 고객 만족 1위 홈케어 테라피. 전신 아로마, 감성 스웨디시 코스.`,
    /* 21 */ `${simpleLocation} 아로마 오일 테라피 (${regionName}) 연중무휴 운영! 안심 예약 서비스.`,
    /* 22 */ `모먼트레스트 공식 ${regionName} ${simpleLocation} 고품격 테라피 안내. 차별화된 프리미엄 힐링 서비스.`,
    /* 23 */ `${simpleLocation} 맞춤 테라피 (${regionName}) 안내. 1:1 맞춤 피로회복 솔루션으로 쾌적한 휴식 시간.`,
    /* 24 */ `${regionName} ${simpleLocation} 전지역 신속 예약! 안심하고 즐기는 럭셔리 스웨디시.`,
    /* 25 */ `지친 몸에 활력을 주는 ${simpleLocation} 힐링 테라피 (${regionName}). 검증된 전문 테라피스트.`,
    /* 26 */ `${regionName} ${simpleLocation} 홈케어 테라피 요금 안내. 원하는 시간대에 맞춰 찾아가는 서비스.`,
    /* 27 */ `${simpleLocation} 프라이빗 테라피 (${regionName}) 안심 서비스! 안전한 방문을 약속드립니다.`,
    /* 28 */ `${regionName} ${simpleLocation} 신속한 배차 바디 테라피. 뭉친 승모근과 하체 피로를 개운하게.`,
    /* 29 */ `${simpleLocation} 테라피 (${regionName}) 제휴 안내. 정직한 서비스와 요금 정보 확인.`,
    /* 30 */ `${regionName} ${simpleLocation} 힐링 테라피 맞춤 케어! 이동 없이 누리는 프라이빗 스파 테라피.`,
    /* 31 */ `${simpleLocation} 감성 테라피 (${regionName}). 빠른 매칭과 친절한 서비스.`,
    /* 32 */ `${regionName} ${simpleLocation} 아로마 테라피 프로그램 모음. 빠르게 이용하는 안심 가이드.`,
    /* 33 */ `${simpleLocation} 홈케어 테라피 (${regionName}) 제휴 샵 안내. 신속한 매칭과 전신 근육 이완.`,
    /* 34 */ `${regionName} ${simpleLocation} 안심 스웨디시 테라피. 안전한 진행 보장.`,
    /* 35 */ `${simpleLocation} 맞춤 테라피 (${regionName}) 관리사 빠른 배치. 최고급 아로마 및 힐링 코스.`,
    /* 36 */ `${regionName} ${simpleLocation} 프라이빗 테라피 신속 방문. 안전한 시스템.`,
    /* 37 */ `${simpleLocation} 감성 테라피 (${regionName}) 안내. 지친 일상 속 온전한 휴식과 릴렉싱 제휴 정보.`,
    /* 38 */ `${regionName} ${simpleLocation} 신속한 힐링 테라피! 전신 긴장 완화 및 심신 안정 서비스.`,
    /* 39 */ `모먼트레스트 ${simpleLocation} 홈케어 테라피 (${regionName}). 정직한 서비스 정보와 가격표.`,
    /* 40 */ `${regionName} ${simpleLocation} 스웨디시 테라피 & 오일 정보. 편안한 프리미엄 매장.`,
    /* 41 */ `${simpleLocation} 맞춤 테라피 (${regionName}) 실시간 예약 지원. 나만의 아늑한 공간에서 피로 해소.`,
    /* 42 */ `${regionName} ${simpleLocation} 1:1 테라피 가이드. 정직한 가격표와 베테랑 테라피스트의 바디케어.`,
    /* 43 */ `${simpleLocation} 전지역 힐링 테라피 (${regionName}). 최고급 오일 테라피로 쉼을 선물합니다.`,
    /* 44 */ `${regionName} ${simpleLocation} 홈케어 테라피 실시간 가이드. 프리미엄 구성.`,
    /* 45 */ `${simpleLocation} 스웨디시 테라피 (${regionName}) 예약 안내. 24시간 1:1 맞춤 피로해소.`,
    /* 46 */ `${regionName} ${simpleLocation} 집에서 편안한 감성 테라피! 프리미엄 바디케어.`,
    /* 47 */ `${simpleLocation} 맞춤 테라피 (${regionName}) 신속 배차. 전문 테라피스트가 직접 찾아가는 힐링.`,
    /* 48 */ `${regionName} ${simpleLocation} 오일 테라피 정보. 코스별 정찰 요금 및 빠른 예약 연결.`,
    /* 49 */ `${simpleLocation} 프라이빗 테라피 (${regionName}) 안심 이용 가이드. 정직한 업체 정보.`
  ];

  const fullTitle = dongName 
    ? `${regionName} ${districtName} ${dongName}` 
    : `${regionName} ${districtName}`;

  const finalTitle = titleVariants[variantIndex];
  const finalDescription = descriptionVariants[variantIndex];

  const fullLocationKeyword = `${regionName} ${districtName} ${dongName}`.trim();
  const simpleLocationKeyword = dongName ? `${districtName} ${dongName}` : districtName;

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: [
      `${fullLocationKeyword} 힐링 테라피`,
      `${fullLocationKeyword} 프라이빗 테라피`,
      `${fullLocationKeyword} 홈케어 테라피`,
      `${fullLocationKeyword} 스웨디시 테라피`,
      `${fullLocationKeyword} 아로마 테라피`,
      `${simpleLocationKeyword} 테라피 ${regionName}`,
      `${simpleLocationKeyword} 홈케어 ${regionName}`,
      "프리미엄 힐링 테라피",
      "맞춤 바디케어",
      "모먼트레스트"
    ],
    alternates: {
      canonical: `https://momentrest.netlify.app/${region}/${encodeURIComponent(districtName)}${dongName ? `?dong=${encodeURIComponent(dongName)}` : ""}`,
    },
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: `https://momentrest.netlify.app/${region}/${encodeURIComponent(districtName)}${dongName ? `?dong=${encodeURIComponent(dongName)}` : ""}`,
      siteName: "모먼트레스트(MomentRest)",
      locale: "ko_KR",
      type: "website",
      images: [
        {
          url: "/og-main.png",
          width: 1200,
          height: 630,
          alt: `${fullLocationKeyword} 힐링 테라피 - 모먼트레스트`,
        },
      ],
    },
  };
}

export default async function RegionalDetailPage({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const { region, district } = resolvedParams;
  const dongName = resolvedSearchParams.dong ? decodeURIComponent(resolvedSearchParams.dong) : "";
  const districtName = decodeURIComponent(district);
  const regionName = region === "seoul" ? "서울" : region === "incheon" ? "인천" : "경기";
  
  const fullTitle = dongName 
    ? `${regionName} ${districtName} ${dongName}` 
    : `${regionName} ${districtName}`;

  const localShops = [
    {
      id: 1,
      name: `✨ ${fullTitle} 한국골든테라피`,
      desc: "VIP 골든 릴렉싱 & 딥티슈 피로회복! 베테랑 테라피스트의 품격 있는 1:1 맞춤 테라피 케어",
      phone: "0507-1280-3361",
      price: "80,000원부터~",
      image: "/shop1.jpg"
    },
    {
      id: 2,
      name: `🌸 ${fullTitle} 한국미인테라피`,
      desc: "최고급 천연 오일을 활용한 감성 스웨디시 & 아로마 전신 림프 순환 맞춤 프로그램",
      phone: "0507-1280-3303",
      price: "70,000원부터~",
      image: "/shop2.jpg"
    },
    {
      id: 3,
      name: `💎 ${fullTitle} 주주테라피`,
      desc: "재방문율 1위 만족도! 철저한 위생 관리와 프라이빗 힐링 바디케어 서비스",
      phone: "0507-1280-3193",
      price: "60,000원부터~",
      image: "/shop3.jpg"
    },
    {
      id: 4,
      name: `👑 ${fullTitle} 퀸즈홈테라피`,
      desc: "여왕처럼 누리는 VIP 홈케어! 전문 힐러들의 체형 맞춤형 피로회복 프로그램",
      phone: "0507-1280-3334",
      price: "60,000원부터~",
      image: "/shop4.jpg"
    },
    {
      id: 5,
      name: `🌙 ${fullTitle} 오늘밤테라피`,
      desc: "편안한 휴식과 안심 힐링! 수도권 전지역 신속한 방문으로 지친 일상의 피로 회복",
      phone: "0507-1280-3223",
      price: "60,000원부터~",
      image: "/shop5.jpg"
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${fullTitle} 힐링 테라피 & 홈케어 안내 - 모먼트레스트`,
    "description": `${fullTitle} 지역 프라이빗 테라피 및 힐링 바디케어 제휴업체 정보 제공`,
    "url": `https://momentrest.netlify.app/${region}/${encodeURIComponent(districtName)}`,
    "telephone": "0507-1280-3344",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": districtName,
      "addressRegion": regionName,
      "addressCountry": "KR"
    }
  };

  return (
    <div className="bg-[#fff5f7] text-[#2f3542] min-h-screen flex flex-col font-sans selection:bg-pink-400 selection:text-white">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1 space-y-12">
        
        {/* 상단 지역 대표 배너 */}
        <section className="relative rounded-3xl overflow-hidden border border-pink-300 shadow-[0_10px_40px_rgba(255,107,129,0.15)] bg-gradient-to-b from-white to-[#fff0f3]">
          <img 
            src="/banner.jpg" 
            alt={`${fullTitle} 프라이빗 테라피 및 바디케어 안내`} 
            className="w-full h-56 md:h-72 object-cover filter brightness-[0.85] opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-transparent flex flex-col justify-end p-6 md:p-8">
            <span className="text-pink-600 text-xs font-black tracking-widest uppercase mb-1">
              LOCAL HEALING GUIDE
            </span>
            <h1 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight drop-shadow-sm">
              {fullTitle} 힐링 테라피 안내
            </h1>
            <p className="text-xs md:text-sm text-gray-600 mt-2 max-w-xl leading-relaxed">
              {fullTitle} 고객님을 위한 맞춤형 웰니스 테라피 가이드입니다. 검증된 코스와 편안한 휴식 공간을 확인해 보세요.
            </p>
          </div>
        </section>

        {/* 클라이언트 사이드 키워드 믹서 영역 */}
        <ClientTextMixerInline locationText={fullTitle} />

        {/* 제휴업체 5개 카드리스트 */}
        <section className="space-y-6">
          <div className="text-center">
            <p className="text-xs text-pink-600 font-bold tracking-widest uppercase">RECOMMENDED PARTNERS</p>
            <h2 className="text-xl md:text-2xl font-black text-gray-900 mt-1">
              {fullTitle} 추천 제휴업체 (총 5곳)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {localShops.map((lShop) => (
              <div key={lShop.id} className="bg-white border border-pink-200 hover:border-pink-400 rounded-2xl p-4 flex gap-4 items-center shadow-md transition-all group relative">
                <Link href={`/shop/${lShop.id}`} className="absolute inset-0 z-10" aria-label={`${lShop.name} 상세페이지 보기`} />
                <img 
                  src={lShop.image} 
                  alt={lShop.name} 
                  className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover border border-pink-100 group-hover:scale-105 transition-transform" 
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-extrabold text-sm md:text-base text-gray-900 truncate group-hover:text-pink-600 transition-colors">
                    {lShop.name}
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                    {lShop.desc}
                  </p>
                  <div className="mt-2.5 flex items-center justify-between">
                    <span className="text-xs font-black text-pink-600 bg-pink-50 px-2 py-0.5 rounded border border-pink-200">{lShop.price}</span>
                    <a 
                      href={`tel:${lShop.phone}`} 
                      className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-black text-xs px-3.5 py-1.5 rounded-xl shadow transition-all transform active:scale-95 relative z-20"
                    >
                      전화예약
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 건강 칼럼 섹션 */}
        <section className="bg-white p-6 md:p-8 rounded-3xl border border-pink-200 space-y-4 shadow-sm">
          <h3 className="text-base md:text-lg font-bold text-pink-600 flex items-center gap-2">
            <span>🌿</span> {fullTitle} 바디케어 & 스트레칭 건강 가이드
          </h3>
          <div className="text-xs text-gray-600 space-y-3 leading-relaxed">
            <p>
              현대 직장인들이 오랫동안 앉아서 일하거나 스마트폰을 지속적으로 사용할 경우, 승모근과 목 주변의 근육이 경직되어 만성 두통이나 피로감을 유발하기 쉽습니다. 주기적인 스트레칭과 맞춤형 전신 바디케어는 체내 순환을 돕고 일상의 활력을 되찾는 데 큰 도움이 됩니다.
            </p>
            <div className="bg-pink-50/50 p-4 rounded-2xl border border-pink-100 space-y-2">
              <h4 className="font-bold text-gray-800 text-xs">💡 나에게 맞는 테라피 프로그램 선택 기준</h4>
              <ul className="list-disc list-inside space-y-1.5 text-gray-500">
                <li><strong className="text-gray-700">건식 릴렉싱 케어:</strong> 하체 근육과 견갑골 주위의 굳은 부위를 풀어주어 근육 긴장을 해소합니다.</li>
                <li><strong className="text-gray-700">아로마 & 스웨디시:</strong> 최고급 천연 오일로 부드러운 림프 순환과 심신 안정, 부종 완화에 탁월합니다.</li>
                <li><strong className="text-gray-700">프라이빗 홈케어:</strong> 익숙하고 편안한 개인 공간에서 온전한 휴식을 누립니다.</li>
              </ul>
            </div>
            <p className="text-gray-400 text-[11px]">
              * 본 가이드는 {fullTitle} 주민 여러분의 건강한 피로 회복과 올바른 힐링 정보 제공을 목적으로 작성되었습니다.
            </p>
          </div>
        </section>

        {/* 이용 방법 4단계 */}
        <section className="bg-white p-6 md:p-8 rounded-3xl border border-pink-200 space-y-6 shadow-sm">
          <div className="text-center">
            <span className="text-pink-600 text-xs font-bold tracking-widest uppercase">SERVICE PROCESS</span>
            <h3 className="text-xl font-black text-gray-900 mt-1">{fullTitle} 서비스 이용 순서</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-pink-50/50 p-4 rounded-2xl border border-pink-100 text-center">
              <span className="text-xs text-pink-600 font-bold">STEP 1</span>
              <h4 className="font-bold text-gray-800 mt-1">위치 확인</h4>
              <p className="text-xs text-gray-500 mt-1">{fullTitle} 희망 장소를 확인합니다.</p>
            </div>
            <div className="bg-pink-50/50 p-4 rounded-2xl border border-pink-100 text-center">
              <span className="text-xs text-pink-600 font-bold">STEP 2</span>
              <h4 className="font-bold text-gray-800 mt-1">시간 조율</h4>
              <p className="text-xs text-gray-500 mt-1">원하시는 방문 시간을 조율합니다.</p>
            </div>
            <div className="bg-pink-50/50 p-4 rounded-2xl border border-pink-100 text-center">
              <span className="text-xs text-pink-600 font-bold">STEP 3</span>
              <h4 className="font-bold text-gray-800 mt-1">코스 선택</h4>
              <p className="text-xs text-gray-500 mt-1">컨디션에 맞는 프로그램을 선택합니다.</p>
            </div>
            <div className="bg-pink-50/50 p-4 rounded-2xl border border-pink-100 text-center">
              <span className="text-xs text-pink-600 font-bold">STEP 4</span>
              <h4 className="font-bold text-gray-800 mt-1">케어 진행</h4>
              <p className="text-xs text-gray-500 mt-1">편안한 분위기 속에서 피로를 해소합니다.</p>
            </div>
          </div>
        </section>

        {/* 자주 묻는 질문 (FAQ) */}
        <section className="space-y-4">
          <div className="text-center">
            <span className="text-pink-600 text-xs font-bold tracking-widest uppercase">FAQ & GUIDE</span>
            <h3 className="text-xl font-black text-gray-900 mt-1">{fullTitle} 자주 묻는 질문</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-2xl border border-pink-200 space-y-1.5 shadow-sm">
              <div className="font-bold text-sm text-gray-800 flex items-center gap-2">
                <span className="text-pink-500">Q.</span> {fullTitle} 테라피스트 방문 소요 시간은 얼마나 되나요?
              </div>
              <p className="text-xs text-gray-600 pl-6 leading-relaxed">
                <span className="text-pink-600 font-bold">A.</span> 주요 거점 기준 평균 20분~30분 내외로 원활한 매칭 및 방문 진행이 가능합니다.
              </p>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-pink-200 space-y-1.5 shadow-sm">
              <div className="font-bold text-sm text-gray-800 font-semibold flex items-center gap-2">
                <span className="text-pink-500">Q.</span> 어떤 프로그램들이 준비되어 있나요?
              </div>
              <p className="text-xs text-gray-600 pl-6 leading-relaxed">
                <span className="text-pink-600 font-bold">A.</span> 아로마 테라피, 스웨디시 등 고객님의 컨디션에 맞춘 다양한 프리미엄 힐링 코스가 준비되어 있습니다.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* 푸터 영역 */}
      <footer className="bg-white border-t border-pink-200 py-10 text-center text-gray-500 text-xs mt-auto">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div>
            <a 
              href="tel:0507-1280-3344" 
              className="inline-flex items-center gap-1.5 bg-pink-50 hover:bg-pink-100 text-pink-600 font-bold px-4 py-2 rounded-xl border border-pink-300 transition-all text-xs shadow-sm"
            >
              <span>🤝</span> 모먼트레스트 입점 및 제휴문의 (0507-1280-3344)
            </a>
          </div>
          <p className="text-gray-600 font-bold">모먼트레스트(MomentRest)는 건전하고 안전한 프리미엄 홈케어 & 힐링 테라피 정보 플랫폼입니다.</p>
          <p className="text-[11px] text-gray-400">COPYRIGHT &copy; MomentRest ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}