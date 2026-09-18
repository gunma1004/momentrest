import Link from 'next/link';

// 상단 카테고리
const categories = [
  { name: '서비스 안내', href: '/services', desc: '스웨디시, 아로마, 로미로미, 림프 등 맞춤 코스' },
  { name: '코스 및 가격', href: '/prices', desc: '지역별 제휴점 투명한 정가 요금 안내' },
  { name: '출장/홈케어', href: '/travel', desc: '집이나 호텔에서 편안하게 받는 1:1 방문 케어' },
  { name: '제휴 샵 안내', href: '/places', desc: '철저한 위생과 실력으로 검증된 프리미엄 제휴점' },
  { name: '이용 후기', href: '/reviews', desc: '실제 방문 고객님들의 솔직한 100% 리얼 후기' },
];

// 서울특별시 공식 25개 구
const seoulDistricts = [
  '강남구', '서초구', '송파구', '강동구', '마포구', '용산구', '성동구', '광진구',
  '영등포구', '동작구', '관악구', '구로구', '금천구', '양천구', '강서구',
  '중구', '종로구', '동대문구', '중랑구', '성북구', '강북구', '도봉구', '노원구',
  '은평구', '서대문구'
];

// 경기도 세부 일반구가 있는 7개 시
const gyeonggiSubCities = [
  { city: '수원시', gus: ['장안구', '권선구', '팔달구', '영통구'] },
  { city: '성남시', gus: ['수정구', '중원구', '분당구'] },
  { city: '고양시', gus: ['덕양구', '일산동구', '일산서구'] },
  { city: '용인시', gus: ['처인구', '기흥구', '수지구'] },
  { city: '부천시', gus: ['원미구', '소사구', '오정구'] },
  { city: '안양시', gus: ['만안구', '동안구'] },
  { city: '안산시', gus: ['상록구', '단원구'] },
];

// 경기도 일반 시·군 (24개)
const gyeonggiSingleCities = [
  '의정부시', '광명시', '평택시', '동두천시', '과천시', '구리시', '남양주시',
  '오산시', '시흥시', '군포시', '의왕시', '하남시', '파주시', '이천시',
  '안성시', '김포시', '화성시', '광주시', '양주시', '포천시', '여주시',
  '연천군', '가평군', '양평군'
];

// 인천광역시
const incheonDistricts = [
  '부평구', '남동구', '연수구', '미추홀구', '계양구', '서해구', '검단구',
  '제물포구', '영종구', '강화군', '옹진군'
];

// 추천 제휴업체
const featuredShops = [
  { name: '골든 테라피', slug: 'golden-therapy', region: 'seoul', district: '강남구', tag: '스웨디시 / 아로마', rating: '4.9' },
  { name: '미인 테라피', slug: 'miin-therapy', region: 'seoul', district: '강남구', tag: '프리미엄 림프 케어', rating: '5.0' },
  { name: '주주 테라피', slug: 'juju-therapy', region: 'seoul', district: '강남구', tag: '딥티슈 / 릴랙싱', rating: '4.8' },
  { name: '퀸즈 홈 테라피', slug: 'queens-home-therapy', region: 'seoul', district: '강남구', tag: '1:1 방문 맞춤 케어', rating: '4.9' },
  { name: '나이트 테라피', slug: 'night-therapy', region: 'seoul', district: '강남구', tag: '야간 안심 힐링 테라피', rating: '4.8' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* 1. GNB 헤더 */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black text-indigo-600 tracking-tight">MOMENT REST</span>
            <span className="hidden sm:inline-block text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded font-semibold">모먼트레스트</span>
          </Link>
          <nav className="flex items-center gap-4 sm:gap-7 text-sm font-semibold text-slate-600">
            {categories.map((c) => (
              <Link key={c.href} href={c.href} className="hover:text-indigo-600 transition-colors">
                {c.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* 2. 히어로 배너 & 빠른 지역 바로가기 */}
      <section className="bg-slate-900 text-white py-16 sm:py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-semibold mb-4 border border-indigo-500/30">
            수도권 프리미엄 힐링 & 테라피 정보 가이드
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            지친 일상을 비우는 최고의 휴식,<br />
            <span className="text-indigo-400">모먼트레스트</span>에서 찾아보세요
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            서울, 경기, 인천 전 지역의 검증된 전문 테라피 샵과 홈케어 서비스를 한곳에서 편리하게 확인하실 수 있습니다.
          </p>

          {/* 메인 3대 권역 퀵 버튼 */}
          <div className="flex flex-wrap justify-center gap-3 max-w-md mx-auto">
            <Link href="/seoul" className="flex-1 min-w-[110px] bg-indigo-600 hover:bg-indigo-500 text-white py-3 px-4 rounded-xl font-bold text-sm shadow transition">
              서울특별시
            </Link>
            <Link href="/gyeonggi" className="flex-1 min-w-[110px] bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white py-3 px-4 rounded-xl font-bold text-sm shadow transition">
              경기도
            </Link>
            <Link href="/incheon" className="flex-1 min-w-[110px] bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white py-3 px-4 rounded-xl font-bold text-sm shadow transition">
              인천광역시
            </Link>
          </div>
        </div>
      </section>

      {/* 3. 서비스 카테고리 안내 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-xl font-bold text-slate-900 mb-6">모먼트레스트 핵심 안내</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-indigo-500 hover:shadow-md transition group"
            >
              <h3 className="font-bold text-slate-800 text-base mb-2 group-hover:text-indigo-600 transition">
                {c.name} &rarr;
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. 추천 제휴 샵 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">추천 프리미엄 샵</h2>
            <p className="text-xs text-slate-500 mt-1">이용자 평점과 만족도가 높은 제휴 업체입니다.</p>
          </div>
          <Link href="/places" className="text-xs text-indigo-600 font-bold hover:underline">
            전체 제휴점 보기 &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {featuredShops.map((shop) => (
            <Link
              key={shop.slug}
              href={`/${shop.region}/${encodeURIComponent(shop.district)}/${shop.slug}`}
              className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-indigo-400 hover:shadow-md transition"
            >
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="text-indigo-600 font-bold">{shop.tag}</span>
                <span className="text-amber-500 font-semibold">★ {shop.rating}</span>
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">{shop.name}</h3>
              <p className="text-xs text-slate-400">{shop.district} 중심</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. 서울·경기·인천 세부 행정구역 전체 링크 매핑 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-xl font-bold text-slate-900 mb-6">지역별 힐링 샵 전체 탐색</h2>
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-8">
          
          {/* 서울특별시 (25개 구) */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <Link href="/seoul" className="text-base font-bold text-indigo-700 hover:underline">
                서울특별시 (25개 구 전체) &rarr;
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {seoulDistricts.map((d) => (
                <Link
                  key={d}
                  href={`/seoul/${encodeURIComponent(d)}`}
                  className="text-xs bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 px-3 py-1.5 rounded-lg font-medium transition"
                >
                  {d}
                </Link>
              ))}
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* 경기도 */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <Link href="/gyeonggi" className="text-base font-bold text-indigo-700 hover:underline">
                경기도 (시·군 및 세부 구 전체) &rarr;
              </Link>
            </div>

            {/* 일반구가 포함된 7개 대도시 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              {gyeonggiSubCities.map((item) => (
                <div key={item.city} className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="mb-2">
                    <Link
                      href={`/gyeonggi/${encodeURIComponent(item.city)}`}
                      className="text-xs font-bold text-indigo-600 hover:underline"
                    >
                      {item.city} 전체 &rarr;
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.gus.map((gu) => (
                      <Link
                        key={gu}
                        href={`/gyeonggi/${encodeURIComponent(`${item.city}${gu}`)}`}
                        className="text-[11px] bg-white border border-slate-200 text-slate-600 hover:border-indigo-400 hover:text-indigo-600 px-2 py-1 rounded transition"
                      >
                        {gu}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* 단일 시·군 24개 */}
            <div className="flex flex-wrap gap-2">
              {gyeonggiSingleCities.map((city) => (
                <Link
                  key={city}
                  href={`/gyeonggi/${encodeURIComponent(city)}`}
                  className="text-xs bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 px-3 py-1.5 rounded-lg font-medium transition"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* 인천광역시 */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <Link href="/incheon" className="text-base font-bold text-indigo-700 hover:underline">
                인천광역시 &rarr;
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {incheonDistricts.map((d) => (
                <Link
                  key={d}
                  href={`/incheon/${encodeURIComponent(d)}`}
                  className="text-xs bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 px-3 py-1.5 rounded-lg font-medium transition"
                >
                  {d}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. 푸터 */}
      <footer className="bg-white border-t border-slate-200 mt-16 py-12 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <span className="text-base font-black text-slate-800 tracking-tight">MOMENT REST</span>
            <p className="mt-2 text-slate-500 leading-relaxed">
              모먼트레스트는 서울·경기·인천 지역 테라피 및 홈케어 정보를 한곳에 모아 안내하는 힐링 플랫폼입니다.
            </p>
            <p className="mt-1 text-slate-400 text-[11px]">© Moment Rest. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-slate-600 font-medium">
            {categories.map((c) => (
              <Link key={c.href} href={c.href} className="hover:text-indigo-600 transition">
                {c.name}
              </Link>
            ))}
            <Link href="/seoul" className="hover:text-indigo-600 transition">서울</Link>
            <Link href="/gyeonggi" className="hover:text-indigo-600 transition">경기</Link>
            <Link href="/incheon" className="hover:text-indigo-600 transition">인천</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}