import type { Metadata } from "next";
import Link from "next/link";
import { ClientTextMixerInline } from "../../page"; // 경로에 맞게 수정 가능

interface PageProps {
  params: Promise<{
    region: string;
    district: string;
    dong: string;
  }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const region = resolvedParams?.region || "";
    const district = resolvedParams?.district ? decodeURIComponent(resolvedParams.district) : "";
    const dong = resolvedParams?.dong ? decodeURIComponent(resolvedParams.dong) : "";
    
    const regionName = region === "seoul" ? "서울" : region === "incheon" ? "인천" : "경기";
    const simpleLocation = `${district} ${dong}`;
    const locationPrefix = `${regionName} ${simpleLocation}`.trim();

    const charSum = (locationPrefix + "momentrest_dong_clean_100").split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const variantIndex = charSum % 50;

    // 타이틀: '출장'과 '마사지'가 절대 붙어있지 않고 분산된 50가지 조합
    const titleVariants = [
      `${locationPrefix} 지역 맞춤형 출장 서비스 타이 마사지 안내 `,
      `${locationPrefix} 전문 출장 방문 가능한 아로마 마사지 제휴점 `,
      `${locationPrefix} 프라이빗 출장 홈케어 릴렉스 케어 마사지 추천 코스`,
      `${locationPrefix} 안심 출장 서비스 스웨디시 프로그램 마사지 1:1 안내`,
      `${locationPrefix} 신속 출장 배차 전신 힐링 테라피 마사지 24시 예약`,
      `${locationPrefix} 최고급 출장 테라피 딥티슈 바디 마사지 피로회복 가이드`,
      `${locationPrefix} 정찰제 출장 방문 홈케어 바디 케어 마사지 정보 `,
      `${locationPrefix} 맞춤형 출장 서비스 릴렉스 프로그램 마사지 안내 `,
      `${locationPrefix} 건식 및 출장 아로마 케어 마사지 제휴샵 총정리`,
      `${locationPrefix} 24시간 출장 방문 프리미엄 감성 테라피 마사지 플랫폼`,
      `${locationPrefix} 힐링 출장 서비스 순환 케어 전문 샵 마사지 가이드`,
      `${locationPrefix} 스트레스 해소 출장 방문 힐링 코스 마사지 추천`,
      `${locationPrefix} 1인 프라이빗 출장 맞춤형 바디 마사지 서비스`,
      `${locationPrefix} 바디 밸런스 출장 홈케어 프로그램 마사지 안내`,
      `${locationPrefix} 후불제 출장 방문 안심 전신 관리 마사지 · 모먼트레스트`,
      `${locationPrefix} 림프 순환 출장 아로마 테라피 마사지 제휴점`,
      `${locationPrefix} 프리미엄 출장 서비스 딥릴렉스 프로그램 마사지 코스`,
      `${locationPrefix} 소프트 힐링 출장 바디 케어 마사지 안내 · 모먼트레스트`,
      `${locationPrefix} 쾌적한 출장 방문 케어 프로그램 마사지 가이드`,
      `${locationPrefix} 명품 출장 감성 스웨디시 힐링 테라피 마사지 정보`,
      `${locationPrefix} 체형 맞춤형 출장 바디 케어 마사지 추천 · 모먼트레스트`,
      `${locationPrefix} 심야 24시 출장 신속 방문 마사지 예약 센터`,
      `${locationPrefix} 전문 테라피스트 출장 방문 케어 마사지 안내`,
      `${locationPrefix} 정통 스트레칭 출장 타이 프로그램 마사지 제휴점`,
      `${locationPrefix} 하이엔드 출장 감성 힐링 프로그램 마사지 플랫폼`,
      `${locationPrefix} VVIP 출장 스페셜 풀케어 바디 마사지 안내`,
      `${locationPrefix} 전신 피로회복 출장 힐링 테라피 마사지 · 모먼트레스트`,
      `${locationPrefix} 안심 출장 방문 릴렉싱 프로그램 마사지 가이드`,
      `${locationPrefix} 천연 에센셜 오일 출장 케어 마사지 정보`,
      `${locationPrefix} 시그니처 출장 웰니스 바디 마사지 추천 코스`,
      `${locationPrefix} 맞춤형 홈케어 방문 출장 스웨디시 마사지 안내 | 모먼트레스트`,
      `${locationPrefix} 1:1 방문 홈케어 출장 타이 마사지 제휴점 정보 · 모먼트레스트`,
      `${locationPrefix} 프라이빗 홈케어 출장 아로마 바디케어 코스 추천`,
      `${locationPrefix} 안심 후불제 방문 홈케어 출장 마사지 가이드`,
      `${locationPrefix} 신속 방문 홈케어 출장 전신 릴렉스 테라피 마사지`,
      `${locationPrefix} 최고급 방문 홈케어 출장 딥티슈 마사지 프로그램`,
      `${locationPrefix} 정찰제 방문 홈케어 출장 감성 힐링 마사지 정보`,
      `${locationPrefix} 전문 방문 홈케어 출장 웰니스 마사지 가이드 · 모먼트레스트`,
      `${locationPrefix} 건식 및 오일 방문 홈케어 출장 마사지샵 총정리`,
      `${locationPrefix} 24시간 방문 홈케어 출장 프리미엄 바디케어 마사지`,
      `${locationPrefix} 힐링 방문 홈케어 출장 순환 테라피 마사지 안내`,
      `${locationPrefix} 지친 일상 해소 방문 홈케어 출장 마사지 추천`,
      `${locationPrefix} 1인 전용 방문 홈케어 출장 맞춤 마사지 서비스`,
      `${locationPrefix} 밸런스 유지 방문 홈케어 출장 릴렉스 케어 마사지`,
      `${locationPrefix} 후불제 안심 방문 홈케어 출장 전신 마사지 정보`,
      `${locationPrefix} 부드러운 순환 방문 홈케어 출장 아로마 마사지`,
      `${locationPrefix} 프리미엄 방문 홈케어 출장 딥릴렉스 마사지 코스`,
      `${locationPrefix} 소프트 케어 방문 홈케어 출장 마사지 안내 · 모먼트레스트`,
      `${locationPrefix} 쾌적한 실내 방문 홈케어 출장 테라피 마사지`,
      `${locationPrefix} 명품 방문 홈케어 출장 스웨디시 프로그램 정보`
    ];

    // 디스크립션: '출장' 키워드 완전 제외, '마사지' 중심의 50가지 조합
    const descriptionVariants = [
      `${locationPrefix} 지역에서 쾌적하고 편안하게 즐길 수 있는 전문 마사지 제휴업체 정보와 상세한 프로그램 안내를 확인해보세요.`,
      `${locationPrefix} 인근에서 차별화된 힐링 마사지 코스를 찾고 계신다면 모먼트레스트가 엄선한 신뢰도 높은 제휴 요금표를 만나보세요.`,
      `${locationPrefix} 맞춤형 바디케어 안내입니다. 일상의 피로를 말끔히 풀어주는 전문 매장의 릴렉스 마사지 프로그램을 비교해보세요.`,
      `${locationPrefix} 전 지역에서 신속하게 이용 가능한 정찰제 마사지 및 프라이빗 제휴샵 정보를 빠르고 정확하게 안내해 드립니다.`,
      `${locationPrefix} 최고의 휴식을 선사하는 전문 테라피스트들의 맞춤형 마사지 코스. 지금 바로 모먼트레스트에서 제휴 혜택을 확인하세요.`,
      `${locationPrefix}에서 지친 몸과 마음을 정화해 주는 감성 마사지 및 아로마 테라피 프로그램 정보를 한눈에 살펴보세요.`,
      `${locationPrefix} 프리미엄 웰니스 마사지 전문 제휴점 안내입니다. 투명하고 합리적인 가격으로 편안한 힐링을 경험해 보세요.`,
      `${locationPrefix} 지역 주민들을 위한 맞춤형 마사지 코스 총정리. 세심하고 시원한 테라피로 피로를 날려버리세요.`,
      `${locationPrefix}에서 경험하는 품격 있는 스웨디시 및 정통 마사지 서비스 정보. 안심하고 이용할 수 있는 제휴처를 모았습니다.`,
      `${locationPrefix} 인근 마사지 추천 업소 안내. 엄선된 힐러들의 전문적인 바디 케어 프로그램과 이용 요금을 확인해보세요.`,
      `${locationPrefix} 전용 맞춤 마사지 가이드. 집이나 편안한 공간에서 즐기는 힐링 테라피 정보를 지금 바로 비교해 보세요.`,
      `${locationPrefix} 지역의 실시간 인기 마사지 제휴점 안내. 지친 일상에 활력을 불어넣어 줄 프리미엄 코스를 만나보세요.`,
      `${locationPrefix}에서 만나볼 수 있는 1:1 맞춤형 마사지 프로그램. 투명한 후불제 시스템으로 안전하게 이용하실 수 있습니다.`,
      `${locationPrefix} 마사지 전문 제휴 플랫폼 모먼트레스트입니다. 엄선된 힐링 프로그램과 상세한 가격 정보를 확인해 보세요.`,
      `${locationPrefix} 인근에서 가장 만족도 높은 마사지 숍 정보와 체계적인 바디 케어 코스 안내를 제공해 드립니다.`,
      `${locationPrefix} 웰니스 힐링 마사지 안내. 일상의 스트레스를 편안하게 해소해 주는 전문 테라피 서비스를 확인해보세요.`,
      `${locationPrefix} 지역 맞춤형 아로마 마사지 및 스웨디시 프로그램 정보. 품격 있는 휴식을 위한 필수 코스를 만나보세요.`,
      `${locationPrefix} 전문 마사지 제휴점들의 실시간 요금 및 코스 안내. 나에게 알맞은 힐링 프로그램을 선택해 보세요.`,
      `${locationPrefix}에서 편안하게 이용 가능한 마사지 테라피 정보. 철저하게 관리되는 제휴 업소들만 모아두었습니다.`,
      `${locationPrefix} 인근 마사지 숍 추천 안내. 몸과 마음의 피로를 부드럽게 감싸주는 힐링 케어를 지금 경험해 보세요.`,
      `${locationPrefix} 지역의 고품격 마사지 프로그램 안내. 일상 속 피로를 시원하게 날려버릴 전문 테라피를 만나보세요.`,
      `${locationPrefix} 맞춤형 힐링 마사지 가이드. 투명한 정보와 실속 있는 제휴 혜택을 모먼트레스트에서 확인해 보세요.`,
      `${locationPrefix} 인근에서 검증된 마사지 제휴점 정보. 편안한 분위기 속에서 즐기는 프리미엄 바디 케어 안내입니다.`,
      `${locationPrefix} 전용 감성 마사지 코스 소개. 지친 하루의 끝을 포근하게 채워줄 힐링 테라피를 확인해보세요.`,
      `${locationPrefix} 전문 관리사들의 손길로 완성되는 마사지 프로그램 정보. 신뢰할 수 있는 제휴 업소를 비교해 보세요.`,
      `${locationPrefix} 지역 웰니스 마사지 안내. 몸의 밸런스를 되찾아주는 전문 테라피스트들의 코스를 만나보세요.`,
      `${locationPrefix} 인근 마사지 숍 상세 이용 안내. 합리적인 비용으로 즐기는 최고 수준의 힐링 케어 정보를 제공합니다.`,
      `${locationPrefix} 맞춤형 스웨디시 및 아로마 마사지 프로그램 안내. 지친 몸에 깊은 휴식을 선물해 보세요.`,
      `${locationPrefix} 지역에서 손꼽히는 마사지 제휴점 총정리. 편안하고 쾌적한 힐링 테라피 정보를 지금 확인해 보세요.`,
      `${locationPrefix} 프리미엄 마사지 가이드. 일상에 특별한 휴식을 더해줄 전문 테라피 프로그램 코스 안내입니다.`,
      `${locationPrefix} 인근 마사지 추천 제휴점 안내. 피로 해소에 특화된 전문 바디 케어 프로그램을 만나보세요.`,
      `${locationPrefix} 지역 맞춤형 힐링 마사지 정보. 정성 어린 케어로 일상의 활력을 되찾아 드립니다.`,
      `${locationPrefix} 전용 마사지 프로그램 안내. 투명하고 믿을 수 있는 제휴 숍들의 상세 요금을 확인해보세요.`,
      `${locationPrefix} 인근에서 즐기는 품격 있는 마사지 테라피. 몸과 마음을 편안하게 이완시켜 줄 힐링 코스입니다.`,
      `${locationPrefix} 지역 주민을 위한 전문 마사지 제휴 안내. 만족도 높은 바디 케어 프로그램들을 비교해 보세요.`,
      `${locationPrefix} 맞춤형 웰니스 마사지 가이드. 지친 일상에 맑은 활력을 불어넣어 줄 프리미엄 테라피 안내입니다.`,
      `${locationPrefix} 인근 마사지 숍 실시간 정보. 철저한 위생 관리와 편안한 힐링 코스를 모먼트레스트에서 만나보세요.`,
      `${locationPrefix} 지역 전문 마사지 제휴점 안내. 몸의 긴장을 부드럽게 풀어주는 릴렉스 바디 케어 프로그램입니다.`,
      `${locationPrefix} 맞춤형 감성 마사지 코스 소개. 일상 속 힐링을 책임질 전문 테라피스트들의 안내를 확인해 보세요.`,
      `${locationPrefix} 인근 최고급 마사지 프로그램 안내. 나만을 위한 특별한 힐링 테라피를 지금 바로 경험해 보세요.`,
      `${locationPrefix} 지역 맞춤형 마사지 서비스 정보와 쾌적한 힐링 제휴처 안내를 제공합니다.`,
      `${locationPrefix} 인근에서 인기 있는 프리미엄 마사지 코스와 이용 요금을 확인해보세요.`,
      `${locationPrefix} 전문 힐러들의 손길로 채워지는 릴렉스 마사지 프로그램 가이드.`,
      `${locationPrefix} 안심하고 이용할 수 있는 정찰제 마사지 제휴 업소 모음.`,
      `${locationPrefix} 지친 일상의 피로를 비워내는 전문 마사지 테라피 안내.`,
      `${locationPrefix} 1:1 맞춤형 바디 케어 프로그램과 감성 마사지 정보.`,
      `${locationPrefix} 품격 있는 휴식을 선사하는 마사지 제휴점 실시간 안내.`,
      `${locationPrefix} 신속하고 편리하게 확인하는 마사지 코스별 상세 요금표.`,
      `${locationPrefix} 몸과 마음의 안정을 찾아주는 프리미엄 마사지 테라피 가이드.`,
      `${locationPrefix} 모먼트레스트가 엄선한 지역별 전문 마사지 제휴처 정보.`
    ];

    const finalTitle = titleVariants[variantIndex];
    const finalDescription = descriptionVariants[variantIndex];

    return {
      title: finalTitle,
      description: finalDescription,
      alternates: {
        canonical: `https://momentrest.netlify.app/massage/${region}/${encodeURIComponent(district)}/${encodeURIComponent(dong)}`,
      },
      openGraph: {
        title: finalTitle,
        description: finalDescription,
        url: `https://momentrest.netlify.app/massage/${region}/${encodeURIComponent(district)}/${encodeURIComponent(dong)}`,
        siteName: "모먼트레스트(MomentRest)",
        locale: "ko_KR",
        type: "website",
      },
    };
  } catch (e) {
    return {
      title: "모먼트레스트 - 프리미엄 힐링 테라피",
      description: "맞춤형 방문 홈케어 서비스",
    };
  }
}

export async function generateStaticParams() {
  return [];
}

export default async function RegionalDongDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  
  const region = resolvedParams?.region || "seoul";
  const district = resolvedParams?.district ? decodeURIComponent(resolvedParams.district) : "";
  const dong = resolvedParams?.dong ? decodeURIComponent(resolvedParams.dong) : "";
  
  const regionName = region === "seoul" ? "서울" : region === "incheon" ? "인천" : "경기";
  const fullTitle = `${regionName} ${district} ${dong}`;

  const localShops = [
    {
      id: 1,
      slug: "golden-therapy",
      name: `✨ ${fullTitle} 한국골든테라피`,
      desc: "VIP 골든 릴렉싱 & 딥티슈 피로회복! 베테랑 테라피스트의 품격 있는 1:1 맞춤 테라피 케어",
      phone: "0507-1280-3361",
      price: "80,000원부터~",
      image: "/shop1.jpg"
    },
    {
      id: 2,
      slug: "miin-therapy",
      name: `🌸 ${fullTitle} 한국미인테라피`,
      desc: "최고급 천연 오일을 활용한 감성 스웨디시 & 아로마 전신 림프 순환 맞춤 프로그램",
      phone: "0507-1280-3303",
      price: "70,000원부터~",
      image: "/shop2.jpg"
    },
    {
      id: 3,
      slug: "juju-therapy",
      name: `💎 ${fullTitle} 주주테라피`,
      desc: "재방문율 1위 만족도! 철저한 위생 관리와 프라이빗 힐링 바디케어 서비스",
      phone: "0507-1280-3193",
      price: "60,000원부터~",
      image: "/shop3.jpg"
    },
    {
      id: 4,
      slug: "queens-home-therapy",
      name: `👑 ${fullTitle} 퀸즈홈테라피`,
      desc: "여왕처럼 누리는 VIP 홈케어! 전문 힐러들의 체형 맞춤형 피로회복 프로그램",
      phone: "0507-1280-3334",
      price: "60,000원부터~",
      image: "/shop4.jpg"
    },
    {
      id: 5,
      slug: "night-therapy",
      name: `🌙 ${fullTitle} 오늘밤테라피`,
      desc: "편안한 휴식과 안심 힐링! 수도권 전지역 신속한 방문으로 지친 일상의 피로 회복",
      phone: "0507-1280-3223",
      price: "60,000원부터~",
      image: "/shop5.jpg"
    }
  ];

  return (
    <div className="bg-[#fff5f7] text-[#2f3542] min-h-screen flex flex-col font-sans selection:bg-pink-400 selection:text-white pb-24">
      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1 space-y-12">
        <section className="relative rounded-3xl overflow-hidden border border-pink-300 shadow-[0_10px_40px_rgba(255,107,129,0.15)] bg-gradient-to-b from-white to-[#fff0f3]">
          <div className="p-8 text-center space-y-3 bg-white/85 backdrop-blur-md rounded-3xl border border-pink-200">
            <span className="text-pink-600 text-xs font-black tracking-widest uppercase mb-1">
              LOCAL HEALING GUIDE
            </span>
            <h1 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight">
              {fullTitle} 힐링 테라피 안내
            </h1>
            <p className="text-xs md:text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
              {fullTitle} 고객님을 위한 맞춤형 웰니스 테라피 가이드입니다. 검증된 코스와 편안한 휴식 공간을 확인해 보세요.
            </p>
          </div>
        </section>

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
                <Link 
                  href={`/massage/${region}/${encodeURIComponent(district)}/${encodeURIComponent(dong)}/shop/${lShop.slug}`} 
                  className="absolute inset-0 z-10" 
                  aria-label={`${lShop.name} 상세페이지 보기`} 
                />
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

        <div className="text-center pt-2">
          <Link href={`/massage/${region}/${encodeURIComponent(district)}`} className="text-xs text-gray-500 hover:text-pink-600 transition-colors font-semibold">
            ← {district} 메인 페이지로 돌아가기
          </Link>
        </div>
      </main>
    </div>
  );
}