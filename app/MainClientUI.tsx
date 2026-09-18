import Link from "next/link";

// 1. 상단 카테고리
const categories = [
  { name: "서비스 안내", href: "/services" },
  { name: "코스 및 가격", href: "/prices" },
  { name: "출장/홈케어", href: "/travel" },
  { name: "제휴 샵 안내", href: "/places" },
  { name: "이용 후기", href: "/reviews" },
];

// 2. 추천 제휴 샵 5개
const localShops = [
  { id: 1, slug: "golden-therapy", region: "seoul", district: "강남구", name: "✨ 한국골든테라피", desc: "VIP 골든 릴렉싱 & 딥티슈 피로회복! 1:1 맞춤 테라피", phone: "0507-1280-3361", price: "80,000원부터~", image: "/shop1.jpg" },
  { id: 2, slug: "miin-therapy", region: "seoul", district: "강남구", name: "🌸 한국미인테라피", desc: "최고급 천연 오일 감성 스웨디시 & 아로마 전신 림프 순환", phone: "0507-1280-3303", price: "70,000원부터~", image: "/shop2.jpg" },
  { id: 3, slug: "juju-therapy", region: "seoul", district: "강남구", name: "💎 주주테라피", desc: "재방문율 1위 만족도! 철저한 위생 관리와 프라이빗 바디케어", phone: "0507-1280-3193", price: "60,000원부터~", image: "/shop3.jpg" },
  { id: 4, slug: "queens-home-therapy", region: "seoul", district: "강남구", name: "👑 퀸즈홈테라피", desc: "여왕처럼 누리는 VIP 홈케어! 체형 맞춤형 피로회복", phone: "0507-1280-3334", price: "60,000원부터~", image: "/shop4.jpg" },
  { id: 5, slug: "night-therapy", region: "seoul", district: "강남구", name: "🌙 오늘밤테라피", desc: "편안한 휴식과 안심 힐링! 수도권 전지역 신속한 방문", phone: "0507-1280-3223", price: "60,000원부터~", image: "/shop5.jpg" }
];

// 3. ⭐ 서울특별시 (25개 구 + 주요 세부 동 100% 매핑)
const seoulData = [
  { district: "강남구", dongs: ["역삼동", "논현동", "신사동", "압구정동", "청담동", "삼성동", "대치동", "개포동", "도곡동", "일원동", "수서동", "세곡동"] },
  { district: "서초구", dongs: ["서초동", "잠원동", "반포동", "방배동", "양재동", "내곡동"] },
  { district: "송파구", dongs: ["잠실동", "신천동", "풍납동", "송파동", "석촌동", "삼전동", "가락동", "문정동", "방이동", "오금동"] },
  { district: "강동구", dongs: ["천호동", "암사동", "길동", "명일동", "고덕동", "상일동", "둔촌동", "성내동"] },
  { district: "마포구", dongs: ["서교동", "동교동", "합정동", "상수동", "연남동", "망원동", "공덕동", "아현동", "상암동"] },
  { district: "영등포구", dongs: ["여의도동", "당산동", "영등포동", "문래동", "양평동", "신길동", "대림동"] },
  { district: "용산구", dongs: ["한남동", "이태원동", "보광동", "이촌동", "원효로동", "청파동", "후암동"] },
  { district: "성동구", dongs: ["성수동", "옥수동", "금호동", "왕십리동", "행당동", "마장동"] },
  { district: "광진구", dongs: ["화양동", "자양동", "구의동", "군자동", "중곡동", "광장동"] },
  { district: "동대문구", dongs: ["장안동", "답십리동", "전농동", "용두동", "청량리동", "이문동"] },
  { district: "중랑구", dongs: ["면목동", "상봉동", "중화동", "묵동", "망우동", "신내동"] },
  { district: "성북구", dongs: ["길음동", "종암동", "안암동", "보문동", "정릉동", "돈암동", "장위동"] },
  { district: "강북구", dongs: ["수유동", "미아동", "번동", "우이동"] },
  { district: "도봉구", dongs: ["쌍문동", "방학동", "창동", "도봉동"] },
  { district: "노원구", dongs: ["상계동", "중계동", "하계동", "공릉동", "월계동"] },
  { district: "은평구", dongs: ["응암동", "불광동", "갈현동", "구산동", "대조동", "역촌동", "신사동", "진관동"] },
  { district: "서대문구", dongs: ["신촌동", "창천동", "연희동", "홍제동", "홍은동", "남가좌동", "북가좌동"] },
  { district: "양천구", dongs: ["목동", "신정동", "신월동"] },
  { district: "강서구", dongs: ["마곡동", "화곡동", "발산동", "우장산동", "가양동", "등촌동", "방화동", "염창동"] },
  { district: "구로구", dongs: ["신도림동", "구로동", "고척동", "개봉동", "오류동", "항동"] },
  { district: "금천구", dongs: ["가산동", "독산동", "시흥동"] },
  { district: "동작구", dongs: ["노량진동", "상도동", "흑석동", "사당동", "대방동", "신대방동"] },
  { district: "관악구", dongs: ["신림동", "봉천동", "남현동", "보라매동", "낙성대동", "인헌동"] },
  { district: "종로구", dongs: ["혜화동", "명륜동", "이화동", "종로동", "사직동", "평창동", "삼청동"] },
  { district: "중구", dongs: ["명동", "을지로동", "회현동", "신당동", "다산동", "약수동", "황학동"] }
];

// 4. ⭐ 경기도 7대 대도시 (일반구 + 세부 동 매핑)
const gyeonggiBigCities = [
  {
    city: "수원시",
    subGus: [
      { gu: "장안구", dongs: ["정자동", "조원동", "연무동", "송죽동", "율전동", "천천동", "파장동"] },
      { gu: "권선구", dongs: ["권선동", "곡반정동", "세류동", "호매실동", "금곡동", "구운동", "탑동"] },
      { gu: "팔달구", dongs: ["인계동", "우만동", "화서동", "지동", "매산동", "행궁동"] },
      { gu: "영통구", dongs: ["영통동", "매탄동", "원천동", "이의동", "광교동", "망포동", "하동"] },
    ]
  },
  {
    city: "성남시",
    subGus: [
      { gu: "수정구", dongs: ["신흥동", "태평동", "수진동", "단대동", "산성동", "위례동"] },
      { gu: "중원구", dongs: ["성남동", "금광동", "은행동", "상대원동", "하대원동", "도촌동"] },
      { gu: "분당구", dongs: ["서현동", "정자동", "야탑동", "판교동", "백현동", "삼평동", "구미동", "이매동"] },
    ]
  },
  {
    city: "고양시",
    subGus: [
      { gu: "덕양구", dongs: ["화정동", "행신동", "원흥동", "삼송동", "동산동", "지축동", "향동동"] },
      { gu: "일산동구", dongs: ["장항동", "백석동", "마두동", "식사동", "중산동", "정발산동", "풍동"] },
      { gu: "일산서구", dongs: ["일산동", "주엽동", "탄현동", "대화동", "가좌동", "덕이동"] },
    ]
  },
  {
    city: "용인시",
    subGus: [
      { gu: "처인구", dongs: ["김량장동", "역북동", "삼가동", "유방동", "고림동", "포곡읍", "모현읍"] },
      { gu: "기흥구", dongs: ["구갈동", "신갈동", "보정동", "마북동", "동백동", "상하동", "서천동"] },
      { gu: "수지구", dongs: ["풍덕천동", "상현동", "신봉동", "죽전동", "동천동", "성복동"] },
    ]
  },
  {
    city: "부천시",
    subGus: [
      { gu: "원미구", dongs: ["중동", "상동", "심곡동", "원미동", "역곡동", "춘의동", "도당동"] },
      { gu: "소사구", dongs: ["소사본동", "괴안동", "송내동", "범박동", "옥길동"] },
      { gu: "오정구", dongs: ["오정동", "원종동", "고강동", "삼정동", "여월동", "작동"] },
    ]
  },
  {
    city: "안양시",
    subGus: [
      { gu: "만안구", dongs: ["안양동", "석수동", "박달동"] },
      { gu: "동안구", dongs: ["평촌동", "범계동", "호계동", "비산동", "관양동", "인덕원동"] },
    ]
  },
  {
    city: "안산시",
    subGus: [
      { gu: "상록구", dongs: ["본오동", "사동", "일동", "이동", "월피동", "성포동", "부곡동"] },
      { gu: "단원구", dongs: ["고잔동", "중앙동", "초지동", "원곡동", "선부동", "와동", "대부동"] },
    ]
  },
];

// 5. ⭐ 경기도 일반 24개 시·군 (세부 동/읍/면 매핑 - 보산동, 죽산면 포함)
const gyeonggiSingles = [
  { district: "동두천시", dongs: ["보산동", "생연동", "중앙동", "불현동", "송내동", "소요동", "지행동"] },
  { district: "안성시", dongs: ["죽산면", "공도읍", "일죽면", "삼죽면", "대덕면", "원곡면", "안성동"] },
  { district: "평택시", dongs: ["비전동", "동삭동", "세교동", "서정동", "이충동", "고덕동", "안중읍", "포승읍"] },
  { district: "화성시", dongs: ["동탄동", "반송동", "능동", "청계동", "영천동", "병점동", "진안동", "향남읍", "봉담읍"] },
  { district: "파주시", dongs: ["야당동", "와동동", "목동동", "문산읍", "금촌동", "운정동"] },
  { district: "김포시", dongs: ["구래동", "마산동", "장기동", "운양동", "풍무동", "사우동", "고촌읍"] },
  { district: "하남시", dongs: ["미사동", "망월동", "풍산동", "신장동", "덕풍동", "감일동", "위례동"] },
  { district: "의정부시", dongs: ["의정부동", "호원동", "신곡동", "송산동", "민락동", "고산동", "가능동"] },
  { district: "남양주시", dongs: ["다산동", "별내동", "와부읍", "진접읍", "화도읍", "오남읍", "평내동", "호평동"] },
  { district: "구리시", dongs: ["갈매동", "인창동", "교문동", "수택동", "토평동"] },
  { district: "시흥시", dongs: ["배곧동", "정왕동", "은행동", "대야동", "신천동", "목감동", "은계동"] },
  { district: "광명시", dongs: ["철산동", "하안동", "소하동", "일직동", "광명동"] },
  { district: "군포시", dongs: ["산본동", "당동", "당정동", "부곡동", "금정동"] },
  { district: "오산시", dongs: ["원동", "궐동", "오산동", "세교동", "수청동"] },
  { district: "이천시", dongs: ["창전동", "중리동", "관고동", "증포동", "부발읍"] },
  { district: "광주시", dongs: ["경안동", "송정동", "광남동", "오포읍", "초월읍", "곤지암읍"] },
  { district: "양주시", dongs: ["옥정동", "삼숭동", "고읍동", "덕정동", "덕계동", "백석읍"] },
  { district: "포천시", dongs: ["소흘읍", "포천동", "선단동", "일동면", "이동면"] },
  { district: "여주시", dongs: ["여흥동", "중앙동", "오학동", "가남읍"] },
  { district: "과천시", dongs: ["중앙동", "별양동", "갈현동", "원문동", "부림동"] },
  { district: "의왕시", dongs: ["포일동", "내손동", "오전동", "고천동", "삼동"] },
  { district: "양평군", dongs: ["양평읍", "양서면", "용문면", "서종면"] },
  { district: "가평군", dongs: ["가평읍", "청평면", "설악면", "조종면"] },
  { district: "연천군", dongs: ["연천읍", "전곡읍", "군남면", "청산면"] },
];

// 6. ⭐ 인천광역시 (11개 구·군 + 세부 동 매핑 - 주안6동 포함)
const incheonData = [
  { district: "미추홀구", dongs: ["주안동", "주안1동", "주안6동", "도화동", "용현동", "숭의동", "학익동", "관교동"] },
  { district: "부평구", dongs: ["부평동", "부평1동", "부평5동", "산곡동", "청천동", "갈산동", "삼산동", "부개동"] },
  { district: "남동구", dongs: ["구월동", "간석동", "만수동", "논현동", "서창동"] },
  { district: "연수구", dongs: ["송도동", "연수동", "청학동", "동춘동", "옥련동"] },
  { district: "계양구", dongs: ["계산동", "작전동", "효성동", "임학동", "용종동"] },
  { district: "서해구", dongs: ["청라동", "가정동", "석남동", "가좌동", "연희동"] },
  { district: "검단구", dongs: ["검단동", "당하동", "원당동", "마전동", "불로동", "오류왕길동"] },
  { district: "제물포구", dongs: ["신포동", "신흥동", "동인천동", "송현동", "송림동"] },
  { district: "영종구", dongs: ["영종동", "운서동", "중산동", "운남동", "을왕동"] },
  { district: "강화군", dongs: ["강화읍", "선원면", "길상면", "화도면"] },
  { district: "옹진군", dongs: ["백령면", "연평면", "영흥면", "대청면"] }
];

export default function HomePage() {
  return (
    <div className="bg-[#fff5f7] text-[#2f3542] min-h-screen flex flex-col font-sans selection:bg-pink-400 selection:text-white">
      {/* 상단 네비게이션 */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-200">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-black text-pink-600 tracking-tight">
            MOMENT REST <span className="text-xs font-medium text-gray-500">모먼트레스트</span>
          </Link>
          <nav className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm font-bold text-gray-600">
            {categories.map((c) => (
              <Link key={c.href} href={c.href} className="hover:text-pink-600 transition-colors">
                {c.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1 space-y-12">
        {/* 히어로 배너 */}
        <section className="relative rounded-3xl overflow-hidden border border-pink-300 shadow-[0_10px_40px_rgba(255,107,129,0.15)] bg-gradient-to-b from-white to-[#fff0f3]">
          <img
            src="/banner.jpg"
            alt="수도권 프리미엄 힐링 테라피 및 홈케어 안내"
            className="w-full h-64 md:h-80 object-cover filter brightness-[0.85] opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-transparent flex flex-col justify-end p-6 md:p-8 text-center sm:text-left">
            <span className="text-pink-600 text-xs font-black tracking-widest uppercase mb-1">
              PREMIUM HEALING GUIDE
            </span>
            <h1 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight drop-shadow-sm leading-tight">
              지친 일상을 비우는 최고의 휴식,<br />
              <span className="text-pink-600">모먼트레스트</span>
            </h1>
            <p className="text-xs md:text-sm text-gray-600 mt-2 max-w-xl leading-relaxed">
              서울, 경기, 인천 전지역 시·구·동 세부 네트워크를 통해 신속하고 편안한 방문 홈케어 테라피를 안내합니다.
            </p>
            <div className="flex gap-2 mt-4 justify-center sm:justify-start">
              <Link href="/seoul" className="bg-pink-500 hover:bg-pink-600 text-white text-xs font-bold px-4 py-2 rounded-xl shadow transition">
                서울특별시
              </Link>
              <Link href="/gyeonggi" className="bg-white hover:bg-pink-50 text-pink-600 border border-pink-300 text-xs font-bold px-4 py-2 rounded-xl shadow-sm transition">
                경기도
              </Link>
              <Link href="/incheon" className="bg-white hover:bg-pink-50 text-pink-600 border border-pink-300 text-xs font-bold px-4 py-2 rounded-xl shadow-sm transition">
                인천광역시
              </Link>
            </div>
          </div>
        </section>

        {/* 실시간 매칭 배너 */}
        <div className="relative overflow-hidden bg-gradient-to-r from-pink-500/10 via-rose-500/5 to-pink-500/10 border border-pink-300 p-4 md:p-5 rounded-2xl text-center shadow-[0_0_20px_rgba(255,107,129,0.08)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-pink-300 text-[11px] font-bold text-pink-600 mb-2 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
            </span>
            실시간 수도권 전지역 시·구·동 테라피스트 매칭 대기중
          </div>
          <h2 className="text-sm md:text-base font-extrabold text-pink-700 tracking-tight">
            ✨ 서울 · 경기 · 인천 전지역 시·군·구·동 완벽 커버
          </h2>
          <p className="text-[11px] md:text-xs text-gray-600 mt-1 font-medium">
            100% 후불제 안심 시스템 & 철저한 위생 관리 서비스
          </p>
        </div>

        {/* 추천 제휴업체 5곳 */}
        <section className="space-y-6">
          <div className="text-center">
            <p className="text-xs text-pink-600 font-bold tracking-widest uppercase">RECOMMENDED PARTNERS</p>
            <h2 className="text-xl md:text-2xl font-black text-gray-900 mt-1">
              모먼트레스트 추천 제휴업체 (총 5곳)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {localShops.map((lShop) => (
              <div
                key={lShop.id}
                className="bg-white border border-pink-200 hover:border-pink-400 rounded-2xl p-4 flex gap-4 items-center shadow-md transition-all group relative"
              >
                <Link
                  href={`/${lShop.region}/${encodeURIComponent(lShop.district)}/SHOP/${lShop.slug}`}
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
                    <span className="text-xs font-black text-pink-600 bg-pink-50 px-2 py-0.5 rounded border border-pink-200">
                      {lShop.price}
                    </span>
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

        {/* ⭐⭐⭐ 7. 수도권 시·구·동 전체 내부 링크 허브 (SEO 크롤링 완벽 수집용) ⭐⭐⭐ */}
        <section className="bg-white p-6 md:p-8 rounded-3xl border border-pink-200 shadow-sm space-y-10">
          <div className="text-center sm:text-left">
            <p className="text-xs text-pink-600 font-bold tracking-widest uppercase">ALL REGIONAL NETWORKS</p>
            <h2 className="text-xl md:text-2xl font-black text-gray-900 mt-1">수도권 시·구·동 전체 탐색</h2>
            <p className="text-xs text-gray-500 mt-1">원하시는 시/구 및 세부 행정동을 선택하시면 즉시 이동합니다.</p>
          </div>

          {/* 1) 서울특별시 (25개 구 + 하위 동) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-pink-500"></span>
              <Link href="/seoul" className="text-base font-black text-gray-900 hover:text-pink-600 transition">
                서울특별시 (25개 구 전체 및 행정동) &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {seoulData.map((item) => (
                <div key={item.district} className="bg-[#fff9fa] p-3 rounded-2xl border border-pink-100">
                  <div className="mb-2">
                    <Link
                      href={`/seoul/${encodeURIComponent(item.district)}`}
                      className="text-xs font-black text-pink-700 hover:underline"
                    >
                      {item.district} 전체 &rarr;
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {item.dongs.map((dong) => (
                      <Link
                        key={dong}
                        href={`/seoul/${encodeURIComponent(item.district)}/${encodeURIComponent(dong)}`}
                        className="text-[11px] bg-white border border-pink-200 text-gray-600 hover:border-pink-400 hover:text-pink-600 px-2 py-0.5 rounded transition"
                      >
                        {dong}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-pink-100" />

          {/* 2) 경기도 (7개 대도시 일반구 + 하위 동) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-pink-500"></span>
              <Link href="/gyeonggi" className="text-base font-black text-gray-900 hover:text-pink-600 transition">
                경기도 주요 7개 시 (구 및 세부 행정동) &rarr;
              </Link>
            </div>
            <div className="space-y-4">
              {gyeonggiBigCities.map((big) => (
                <div key={big.city} className="bg-[#fff9fa] p-3.5 rounded-2xl border border-pink-100 space-y-2">
                  <div className="flex items-center justify-between">
                    <Link href={`/gyeonggi/${encodeURIComponent(big.city)}`} className="text-xs font-black text-pink-700 hover:underline">
                      {big.city} 전체 바로가기 &rarr;
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {big.subGus.map((sg) => (
                      <div key={sg.gu} className="bg-white p-2.5 rounded-xl border border-pink-100">
                        <div className="mb-1.5">
                          <Link
                            href={`/gyeonggi/${encodeURIComponent(`${big.city}${sg.gu}`)}`}
                            className="text-[11px] font-bold text-gray-800 hover:text-pink-600"
                          >
                            {sg.gu} &rarr;
                          </Link>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {sg.dongs.map((d) => (
                            <Link
                              key={d}
                              href={`/gyeonggi/${encodeURIComponent(`${big.city}${sg.gu}`)}/${encodeURIComponent(d)}`}
                              className="text-[10px] bg-pink-50/50 border border-pink-100 text-gray-600 hover:border-pink-400 hover:text-pink-600 px-1.5 py-0.5 rounded transition"
                            >
                              {d}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-pink-100" />

          {/* 3) 경기도 일반 24개 시·군 (보산동, 죽산면 등 하위 동/읍/면 완벽 연결) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-pink-500"></span>
              <span className="text-sm font-black text-gray-900">경기도 일반 시·군 (동/읍/면 세부 탐색)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {gyeonggiSingles.map((item) => (
                <div key={item.district} className="bg-[#fff9fa] p-3 rounded-2xl border border-pink-100">
                  <div className="mb-2">
                    <Link
                      href={`/gyeonggi/${encodeURIComponent(item.district)}`}
                      className="text-xs font-black text-pink-700 hover:underline"
                    >
                      {item.district} 전체 &rarr;
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {item.dongs.map((dong) => (
                      <Link
                        key={dong}
                        href={`/gyeonggi/${encodeURIComponent(item.district)}/${encodeURIComponent(dong)}`}
                        className="text-[11px] bg-white border border-pink-200 text-gray-600 hover:border-pink-400 hover:text-pink-600 px-2 py-0.5 rounded transition"
                      >
                        {dong}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-pink-100" />

          {/* 4) 인천광역시 (11개 구·군 + 주안6동 등 하위 동 완벽 연결) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-pink-500"></span>
              <Link href="/incheon" className="text-base font-black text-gray-900 hover:text-pink-600 transition">
                인천광역시 (11개 구·군 및 행정동) &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {incheonData.map((item) => (
                <div key={item.district} className="bg-[#fff9fa] p-3 rounded-2xl border border-pink-100">
                  <div className="mb-2">
                    <Link
                      href={`/incheon/${encodeURIComponent(item.district)}`}
                      className="text-xs font-black text-pink-700 hover:underline"
                    >
                      {item.district} 전체 &rarr;
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {item.dongs.map((dong) => (
                      <Link
                        key={dong}
                        href={`/incheon/${encodeURIComponent(item.district)}/${encodeURIComponent(dong)}`}
                        className="text-[11px] bg-white border border-pink-200 text-gray-600 hover:border-pink-400 hover:text-pink-600 px-2 py-0.5 rounded transition"
                      >
                        {dong}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 건강 가이드 섹션 */}
        <section className="bg-white p-6 md:p-8 rounded-3xl border border-pink-200 space-y-4 shadow-sm">
          <h3 className="text-base md:text-lg font-bold text-pink-600 flex items-center gap-2">
            <span>🌿</span> 모먼트레스트 일상 힐링 & 스트레칭 건강 가이드
          </h3>
          <div className="text-xs text-gray-600 space-y-3 leading-relaxed">
            <p>
              현대 직장인들이 오랫동안 앉아서 일하거나 스마트폰을 지속적으로 사용할 경우, 승모근과 목 주변의 근육이 경직되어 만성 두통이나 피로감을 유발하기 쉽습니다. 주기적인 스트레칭과 맞춤형 전신 바디케어는 체내 순환을 돕고 일상의 활력을 되찾는 데 큰 도움이 됩니다.
            </p>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="bg-white border-t border-pink-200 mt-12 py-8 text-gray-500 text-xs">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row justify-between gap-4">
          <div>
            <span className="font-black text-gray-800 text-sm tracking-tight">MOMENT REST</span>
            <p className="mt-1 text-gray-500">서울·경기·인천 힐링 테라피 & 프리미엄 홈케어 안내 가이드</p>
            <p className="mt-0.5 text-gray-400 text-[11px]">© Moment Rest. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-3 text-gray-600 font-semibold items-center">
            {categories.map((c) => (
              <Link key={c.href} href={c.href} className="hover:text-pink-600 transition">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}