import type { Metadata } from "next";
import Link from "next/link";

interface PageProps {
  params: {
    region: string;
    district: string;
  };
}

// 1. 정적 빌드(Static Export) 시 미리 생성할 경로 목록 정의 (Netlify 404 방지)
export async function generateStaticParams() {
  const regionList = [
    // ─── 서울특별시 (25개 구) ───
    { region: 'seoul', district: '종로구' },
    { region: 'seoul', district: '중구' },
    { region: 'seoul', district: '용산구' },
    { region: 'seoul', district: '성동구' },
    { region: 'seoul', district: '광진구' },
    { region: 'seoul', district: '동대문구' },
    { region: 'seoul', district: '중랑구' },
    { region: 'seoul', district: '성북구' },
    { region: 'seoul', district: '강북구' },
    { region: 'seoul', district: '도봉구' },
    { region: 'seoul', district: '노원구' },
    { region: 'seoul', district: '은평구' },
    { region: 'seoul', district: '서대문구' },
    { region: 'seoul', district: '마포구' },
    { region: 'seoul', district: '양천구' },
    { region: 'seoul', district: '강서구' },
    { region: 'seoul', district: '구로구' },
    { region: 'seoul', district: '금천구' },
    { region: 'seoul', district: '영등포구' },
    { region: 'seoul', district: '동작구' },
    { region: 'seoul', district: '관악구' },
    { region: 'seoul', district: '서초구' },
    { region: 'seoul', district: '강남구' },
    { region: 'seoul', district: '송파구' },
    { region: 'seoul', district: '강동구' },

    // ─── 경기도 ───
    { region: 'gyeonggi', district: '수원시 장안구' },
    { region: 'gyeonggi', district: '수원시 권선구' },
    { region: 'gyeonggi', district: '수원시 팔달구' },
    { region: 'gyeonggi', district: '수원시 영통구' },
    { region: 'gyeonggi', district: '성남시 수정구' },
    { region: 'gyeonggi', district: '성남시 중원구' },
    { region: 'gyeonggi', district: '성남시 분당구' },
    { region: 'gyeonggi', district: '의정부시' },
    { region: 'gyeonggi', district: '안양시 만안구' },
    { region: 'gyeonggi', district: '안양시 동안구' },
    { region: 'gyeonggi', district: '부천시 원미구' },
    { region: 'gyeonggi', district: '부천시 소사구' },
    { region: 'gyeonggi', district: '부천시 오정구' },
    { region: 'gyeonggi', district: '광명시' },
    { region: 'gyeonggi', district: '평택시' },
    { region: 'gyeonggi', district: '동두천시' },
    { region: 'gyeonggi', district: '안산시 상록구' },
    { region: 'gyeonggi', district: '안산시 단원구' },
    { region: 'gyeonggi', district: '고양시 덕양구' },
    { region: 'gyeonggi', district: '고양시 일산동구' },
    { region: 'gyeonggi', district: '고양시 일산서구' },
    { region: 'gyeonggi', district: '과천시' },
    { region: 'gyeonggi', district: '구리시' },
    { region: 'gyeonggi', district: '남양주시' },
    { region: 'gyeonggi', district: '오산시' },
    { region: 'gyeonggi', district: '시흥시' },
    { region: 'gyeonggi', district: '군포시' },
    { region: 'gyeonggi', district: '의왕시' },
    { region: 'gyeonggi', district: '하남시' },
    { region: 'gyeonggi', district: '용인시 처인구' },
    { region: 'gyeonggi', district: '용인시 기흥구' },
    { region: 'gyeonggi', district: '용인시 수지구' },
    { region: 'gyeonggi', district: '파주시' },
    { region: 'gyeonggi', district: '이천시' },
    { region: 'gyeonggi', district: '안성시' },
    { region: 'gyeonggi', district: '김포시' },
    { region: 'gyeonggi', district: '화성시' },
    { region: 'gyeonggi', district: '광주시' },
    { region: 'gyeonggi', district: '양주시' },
    { region: 'gyeonggi', district: '포천시' },
    { region: 'gyeonggi', district: '여주시' },
    { region: 'gyeonggi', district: '연천군' },
    { region: 'gyeonggi', district: '가평군' },
    { region: 'gyeonggi', district: '양평군' },

    // ─── 인천광역시 ───
    { region: 'incheon', district: '제물포구' },
    { region: 'incheon', district: '영종구' },
    { region: 'incheon', district: '미추홀구' },
    { region: 'incheon', district: '연수구' },
    { region: 'incheon', district: '남동구' },
    { region: 'incheon', district: '부평구' },
    { region: 'incheon', district: '계양구' },
    { region: 'incheon', district: '서해구' },
    { region: 'incheon', district: '검단동' },
    { region: 'incheon', district: '강화군' },
    { region: 'incheon', district: '옹진군' },
  ];

  return regionList.map((item) => ({
    region: item.region,
    district: item.district,
  }));
}

// 2. 동적 메타데이터 생성 (SEO 최적화)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const decodedDistrict = decodeURIComponent(params.district);
  const regionName = params.region === 'seoul' ? '서울' : params.region === 'gyeonggi' ? '경기' : '인천';

  return {
    title: `${decodedDistrict} 프리미엄 힐링 테라피 & 홈케어 | 모먼트레스트`,
    description: `${regionName} ${decodedDistrict} 지역 신속 방문 및 편안한 휴식을 제공하는 모먼트레스트 제휴점 정보입니다.`,
    alternates: {
      canonical: `https://momentrest.netlify.app/${params.region}/${params.district}`,
    },
  };
}

// 3. 페이지 컴포넌트 렌더링
export default function DistrictPage({ params }: PageProps) {
  const decodedDistrict = decodeURIComponent(params.district);
  const regionName = params.region === 'seoul' ? '서울특별시' : params.region === 'gyeonggi' ? '경기도' : '인천광역시';

  return (
    <div className="bg-[#fff5f7] text-[#2f3542] min-h-screen py-10 px-4 font-sans selection:bg-pink-400 selection:text-white pb-24">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* 헤더 섹션 */}
        <section className="text-center space-y-3 bg-white/85 backdrop-blur-md border border-pink-200 p-8 rounded-3xl shadow-sm">
          <span className="inline-block px-3.5 py-1 rounded-full bg-pink-100 border border-pink-300 text-pink-600 text-xs font-black tracking-widest uppercase">
            {regionName} · {decodedDistrict} INTEGRATED CARE
          </span>
          <h1 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight">
            {decodedDistrict} 프리미엄 힐링 테라피 안내
          </h1>
          <p className="text-xs md:text-sm text-gray-600 max-w-lg mx-auto leading-relaxed">
            {regionName} {decodedDistrict} 전지역에서 편안하고 안전하게 누리는 1:1 맞춤형 웰니스 바디케어 제휴점 리스트입니다.
          </p>
        </section>

        {/* 제휴 안내 카드 그리드 (예시 데이터) */}
        <section className="space-y-4">
          <h2 className="text-lg font-black text-gray-800 px-1">📍 {decodedDistrict} 입점 검증 제휴점</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-pink-200 hover:border-pink-400 rounded-2xl p-5 space-y-3 shadow-sm">
              <span className="text-[10px] bg-pink-500 text-white font-black px-2 py-0.5 rounded">BEST PARTNER</span>
              <h3 className="font-extrabold text-base text-gray-900">✨ 한국골든테라피 ({decodedDistrict} 맞춤형)</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {decodedDistrict} 전지역 신속한 방문과 정직한 정찰제로 편안한 휴식을 제공하는 프리미엄 제휴점입니다.
              </p>
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-black text-pink-600 bg-pink-50 px-2.5 py-1 rounded border border-pink-200">
                  80,000원부터~
                </span>
                <a 
                  href="tel:0507-1280-3361" 
                  className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-black text-xs px-4 py-2 rounded-xl shadow"
                >
                  전화예약 📞
                </a>
              </div>
            </div>

            <div className="bg-white border border-pink-200 hover:border-pink-400 rounded-2xl p-5 space-y-3 shadow-sm">
              <span className="text-[10px] bg-pink-500 text-white font-black px-2 py-0.5 rounded">RECOMMEND</span>
              <h3 className="font-extrabold text-base text-gray-900">🌸 한국미인테라피 ({decodedDistrict} 맞춤형)</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                천연 오일과 전문 테라피스트의 섬세한 터치로 지친 일상의 피로를 말끔히 풀어드립니다.
              </p>
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-black text-pink-600 bg-pink-50 px-2.5 py-1 rounded border border-pink-200">
                  70,000원부터~
                </span>
                <a 
                  href="tel:0507-1280-3303" 
                  className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-black text-xs px-4 py-2 rounded-xl shadow"
                >
                  전화예약 📞
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 안심 보증 배너 */}
        <section className="bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600 text-white p-6 rounded-3xl text-center space-y-3 shadow-lg">
          <h3 className="text-base md:text-lg font-black">
            🛡️ {decodedDistrict} 전지역 편안하고 안전한 웰니스 케어
          </h3>
          <p className="text-xs text-pink-100 max-w-md mx-auto leading-relaxed">
            모먼트레스트는 투명한 정찰제로 운영되며, 숙련된 전문 테라피스트가 고객님 계신 곳으로 안전하게 방문합니다.
          </p>
          <div>
            <a 
              href="tel:0507-1280-3344"
              className="inline-block bg-white text-pink-600 font-black text-xs px-6 py-3 rounded-xl shadow-md"
            >
              📞 통합 실시간 예약 및 문의
            </a>
          </div>
        </section>

        {/* 홈으로 이동 */}
        <div className="text-center pt-2">
          <Link href={`/${params.region}`} className="text-xs text-gray-500 hover:text-pink-600 transition-colors font-semibold">
            ← {regionName} 메인 페이지로 돌아가기
          </Link>
        </div>

      </div>
    </div>
  );
}