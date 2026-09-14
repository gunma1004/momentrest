import type { Metadata } from "next";
import Link from "next/link";

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
    const simpleLocation = dong ? `${district} ${dong}` : district;

    const title = `${regionName} ${simpleLocation} 프리미엄 힐링 테라피 & 홈케어 - 모먼트레스트`;
    const description = `${regionName} ${simpleLocation} 프라이빗 힐링 테라피 안내. 편안하고 신속한 방문 서비스를 모먼트레스트에서 확인하세요.`;

    return {
      title,
      description,
      alternates: {
        canonical: `https://momentrest.netlify.app/${region}/${encodeURIComponent(district)}/${encodeURIComponent(dong)}`,
      },
      openGraph: {
        title,
        description,
        url: `https://momentrest.netlify.app/${region}/${encodeURIComponent(district)}/${encodeURIComponent(dong)}`,
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
                {/* 🌟 동 단위 페이지에서 동 이름과 SHOP 경로를 거쳐 샵 상세 페이지로 이동 */}
                <Link 
                  href={`/${region}/${encodeURIComponent(district)}/${encodeURIComponent(dong)}/SHOP/${lShop.slug}`} 
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
          <Link href={`/${region}/${encodeURIComponent(district)}`} className="text-xs text-gray-500 hover:text-pink-600 transition-colors font-semibold">
            ← {district} 메인 페이지로 돌아가기
          </Link>
        </div>

      </main>
    </div>
  );
}