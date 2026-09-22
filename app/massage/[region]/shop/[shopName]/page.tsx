import type { Metadata } from "next";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    region: string;
    district: string;
    dong?: string;
    shopName: string;
  }>;
  searchParams: Promise<{
    dong?: string;
  }>;
}

// 5개 제휴샵 전체 데이터
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
    desc: "골든 품격의 감성 릴렉싱! 전문 관리사와 프리미엄 힐러진이 선사하는 맞춤형 바디케어.",
    courses: [
      {
        category: "✨ 스웨디시 코스",
        badge: "BEST",
        desc: "부드럽고 감성적인 터치로 심신을 포근하게 녹여주는 프리미엄 힐링 코스.",
        items: [
          { time: "60분", price: "140,000원" },
          { time: "90분", price: "190,000원", recommend: true }
        ]
      },
      {
        category: "👑 프리미엄 코스",
        badge: "RECOMMEND",
        desc: "지친 피로를 효율적으로 풀어주는 실속 만점 맞춤형 바디케어.",
        items: [
          { time: "60분", price: "110,000원" },
          { time: "90분", price: "130,000원" },
          { time: "120분", price: "150,000원", recommend: true }
        ]
      }
    ],
    features: ["100% 안심 후불제", "25분 내 도착", "24시간 상시 운영", "위생 및 방역 철저"]
  },
  "miin-therapy": {
    name: "한국미인테라피",
    phone: "0507-1280-3303",
    location: "서울 · 경기 · 인천 전지역 25분 내 신속 방문",
    badge: "힐링 추천 제휴",
    image: "/shop2.jpg",
    desc: "천연 오일과 전문 테라피스트의 섬세한 터치로 지친 일상의 피로를 말끔히 풀어드립니다.",
    courses: [
      {
        category: "🌸 아로디시",
        desc: "심신을 편안하게 이완시켜 주는 향긋한 아로마 테라피 코스.",
        items: [
          { time: "90분", price: "100,000원" },
          { time: "120분", price: "130,000원", recommend: true }
        ]
      },
      {
        category: "💎 VIP 스웨디시",
        badge: "BEST",
        desc: "최고급 감성 림프 순환 케어로 극상의 휴식을 선사합니다.",
        items: [
          { time: "60분", price: "110,000원" },
          { time: "90분", price: "130,000원", recommend: true },
          { time: "120분", price: "150,000원" }
        ]
      },
      {
        category: "👑 한국인 스웨디시",
        badge: "POPULAR",
        desc: "실력파 한국인 관리사의 디테일하고 품격 있는 맞춤 케어.",
        items: [
          { time: "60분", price: "140,000원" },
          { time: "90분", price: "180,000원", recommend: true }
        ]
      }
    ],
    features: ["정직한 정찰제", "맞춤형 힐러 배차", "친절한 고객 응대", "후불 결제 시스템"]
  },
  "juju-therapy": {
    name: "주주테라피",
    phone: "0507-1280-3193",
    location: "서울 · 경기 · 인천 전지역 신속 방문",
    badge: "재방문율 1위",
    image: "/shop3.jpg",
    desc: "철저한 위생 관리와 프라이빗 힐링 바디케어 서비스로 높은 만족도를 선사합니다.",
    courses: [
      {
        category: "🍌 타이코스",
        desc: "시원한 스트레칭과 전신 근육 이완 케어.",
        items: [
          { time: "60분", price: "60,000원" },
          { time: "90분", price: "80,000원" },
          { time: "120분", price: "100,000원" }
        ]
      },
      {
        category: "🍌 전신아로마",
        desc: "부드러운 오일링으로 림프 순환을 돕는 힐링 코스.",
        items: [
          { time: "60분", price: "70,000원" },
          { time: "90분", price: "90,000원" },
          { time: "120분", price: "110,000원" }
        ]
      },
      {
        category: "🍌 VIP 감성힐링코스",
        badge: "★추천",
        desc: "지친 일상에 활력을 불어넣어 주는 감성 충만 릴렉싱.",
        items: [
          { time: "60분", price: "90,000원" },
          { time: "90분", price: "110,000원", recommend: true },
          { time: "120분", price: "130,000원" }
        ]
      },
      {
        category: "🍌 VIP 스페셜코스",
        badge: "★추천",
        desc: "더 깊은 휴식과 프리미엄 만족감을 주는 스페셜 케어.",
        items: [
          { time: "60분", price: "100,000원" },
          { time: "90분", price: "120,000원", recommend: true },
          { time: "120분", price: "140,000원" }
        ]
      },
      {
        category: "🍌 VIP 프리미엄 코스",
        badge: "SPECIAL",
        desc: "타이 & 아로마 & 풋코스가 모두 포함된 종합 힐링 패키지.",
        items: [
          { time: "150분", price: "160,000원", recommend: true }
        ]
      },
      {
        category: "🍌 한국인 스웨디시",
        badge: "BEST",
        desc: "한국인 전문 테라피스트의 명품 스웨디시 관리.",
        items: [
          { time: "60분", price: "140,000원" },
          { time: "90분", price: "180,000원", recommend: true }
        ]
      }
    ],
    features: ["철저한 위생 방역", "프라이빗 케어", "신속한 방문", "전화 예약 환영"]
  },
  "queens-home-therapy": {
    name: "퀸즈홈테라피",
    phone: "0507-1280-3334",
    location: "수도권 전지역 방문 서비스",
    badge: "VIP 홈케어",
    image: "/shop4.jpg",
    desc: "여왕처럼 누리는 VIP 홈케어! 전문 힐러들의 체형 맞춤형 피로회복 프로그램.",
    courses: [
      {
        category: "🌿 건식 힐링 코스",
        desc: "뭉친 근육을 시원하게 풀어주는 정통 건식 바디케어.",
        items: [
          { time: "60분", price: "60,000원" },
          { time: "90분", price: "80,000원" },
          { time: "120분", price: "100,000원" }
        ]
      },
      {
        category: "🌸 아로마 힐링 코스",
        desc: "향기로운 오일과 함께하는 부드러운 전신 순환 케어.",
        items: [
          { time: "60분", price: "70,000원" },
          { time: "90분", price: "80,000원" },
          { time: "120분", price: "100,000원" }
        ]
      },
      {
        category: "💎 힐링스웨디시 코스",
        badge: "POPULAR",
        desc: "섬세하고 부드러운 감성 테라피로 피로 해소.",
        items: [
          { time: "60분", price: "80,000원" },
          { time: "90분", price: "100,000원", recommend: true },
          { time: "120분", price: "120,000원" }
        ]
      },
      {
        category: "👑 VIP 스페셜코스",
        badge: "RECOMMEND",
        desc: "최상급 퀄리티로 누리는 특별한 프리미엄 힐링.",
        items: [
          { time: "60분", price: "100,000원" },
          { time: "90분", price: "120,000원" },
          { time: "120분", price: "150,000원", recommend: true }
        ]
      },
      {
        category: "✨ 한국 관리사 코스",
        badge: "BEST",
        desc: "실력파 한국인 관리사의 완벽한 1:1 맞춤 케어.",
        items: [
          { time: "60분", price: "150,000원" },
          { time: "90분", price: "180,000원", recommend: true }
        ]
      }
    ],
    features: ["방문 맞춤 서비스", "전문 힐러 상주", "편안한 휴식", "상시 상담 가능"]
  },
  "night-therapy": {
    name: "오늘밤테라피",
    phone: "0507-1280-3223",
    location: "수도권 전지역 심야 및 상시 방문",
    badge: "안심 릴렉스",
    image: "/shop5.jpg",
    desc: "편안한 휴식과 안심 힐링! 수도권 전지역 신속한 방문으로 지친 일상의 피로 회복.",
    courses: [
      {
        category: "📌 팬클럽 건식테라피",
        desc: "지친 몸의 긴장을 풀어주는 기본에 충실한 건식 케어.",
        items: [
          { time: "60분", price: "60,000원" },
          { time: "90분", price: "80,000원" },
          { time: "120분", price: "90,000원" }
        ]
      },
      {
        category: "📌 열혈팬 센슈얼스웨디시",
        badge: "POPULAR",
        desc: "감미롭고 부드러운 터치의 센슈얼 스웨디시 코스.",
        items: [
          { time: "60분", price: "90,000원" },
          { time: "90분", price: "110,000원", recommend: true },
          { time: "120분", price: "130,000원" }
        ]
      },
      {
        category: "📌 회장님 전신혼합VVIP",
        badge: "BEST",
        desc: "건식과 아로마의 장점을 결합한 최고급 혼합 VVIP 프로그램.",
        items: [
          { time: "60분", price: "100,000원" },
          { time: "90분", price: "120,000원" },
          { time: "120분", price: "140,000원", recommend: true },
          { time: "150분", price: "180,000원" }
        ]
      },
      {
        category: "📌 한국인 센슈얼스웨디시",
        badge: "RECOMMEND",
        desc: "한국인 관리사의 전문적이고 세심한 하이엔드 테라피.",
        items: [
          { time: "60분", price: "140,000원" },
          { time: "90분", price: "180,000원", recommend: true }
        ]
      }
    ],
    features: ["심야 신속 방문", "안심 후불제", "친절 상담", "피로 회복 특화"]
  }
};

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  const { region, district, dong, shopName } = resolvedParams;
  const searchDong = resolvedSearchParams.dong;
  
  const decodedDistrict = decodeURIComponent(district);
  const decodedDong = dong ? decodeURIComponent(dong) : searchDong ? decodeURIComponent(searchDong) : "";
  const decodedShopSlug = decodeURIComponent(shopName);

  const shop = shopData[decodedShopSlug] || { name: "모먼트레스트 제휴점", phone: "0507-1280-3344" };
  const locationPrefix = decodedDong ? `${decodedDistrict} ${decodedDong}` : decodedDistrict;
  
  const charSum = (locationPrefix + shop.name + "momentrest_shop_clean_100").split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const variantIndex = charSum % 50;

  // 타이틀: '출장'과 '마사지'가 절대 붙어있지 않고 분산된 50가지 조합
  const titleVariants = [
    `${locationPrefix} 지역 맞춤형 출장 서비스 타이 마사지 안내 - ${shop.name} | 모먼트레스트`,
    `${locationPrefix} 전문 출장 방문 가능한 아로마 마사지 제휴점 · ${shop.name}`,
    `${locationPrefix} 프라이빗 출장 홈케어 릴렉스 케어 마사지 추천 코스 | ${shop.name}`,
    `${locationPrefix} 안심 출장 서비스 스웨디시 프로그램 마사지 1:1 안내 - ${shop.name}`,
    `${locationPrefix} 신속 출장 배차 전신 힐링 테라피 마사지 24시 예약 · ${shop.name}`,
    `${locationPrefix} 최고급 출장 테라피 딥티슈 바디 마사지 피로회복 가이드 | ${shop.name}`,
    `${locationPrefix} 정찰제 출장 방문 홈케어 바디 케어 마사지 정보 - ${shop.name}`,
    `${locationPrefix} 맞춤형 출장 서비스 릴렉스 프로그램 마사지 안내 · ${shop.name}`,
    `${locationPrefix} 건식 및 출장 아로마 케어 마사지 제휴샵 총정리 | ${shop.name}`,
    `${locationPrefix} 24시간 출장 방문 프리미엄 감성 테라피 마사지 플랫폼 - ${shop.name}`,
    `${locationPrefix} 힐링 출장 서비스 순환 케어 전문 샵 마사지 가이드 · ${shop.name}`,
    `${locationPrefix} 스트레스 해소 출장 방문 힐링 코스 마사지 추천 | ${shop.name}`,
    `${locationPrefix} 1인 프라이빗 출장 맞춤형 바디 마사지 서비스 - ${shop.name}`,
    `${locationPrefix} 바디 밸런스 출장 홈케어 프로그램 마사지 안내 · ${shop.name}`,
    `${locationPrefix} 후불제 출장 방문 안심 전신 관리 마사지 | ${shop.name}`,
    `${locationPrefix} 림프 순환 출장 아로마 테라피 마사지 제휴점 - ${shop.name}`,
    `${locationPrefix} 프리미엄 출장 서비스 딥릴렉스 프로그램 마사지 코스 · ${shop.name}`,
    `${locationPrefix} 소프트 힐링 출장 바디 케어 마사지 안내 | ${shop.name}`,
    `${locationPrefix} 쾌적한 출장 방문 케어 프로그램 마사지 가이드 - ${shop.name}`,
    `${locationPrefix} 명품 출장 감성 스웨디시 힐링 테라피 마사지 정보 · ${shop.name}`,
    `${locationPrefix} 체형 맞춤형 출장 바디 케어 마사지 추천 - ${shop.name} | 모먼트레스트`,
    `${locationPrefix} 심야 24시 출장 신속 방문 마사지 예약 센터 · ${shop.name}`,
    `${locationPrefix} 전문 테라피스트 출장 방문 케어 마사지 안내 | ${shop.name}`,
    `${locationPrefix} 정통 스트레칭 출장 타이 프로그램 마사지 제휴점 - ${shop.name}`,
    `${locationPrefix} 하이엔드 출장 감성 힐링 프로그램 마사지 플랫폼 · ${shop.name}`,
    `${locationPrefix} VVIP 출장 스페셜 풀케어 바디 마사지 안내 | ${shop.name}`,
    `${locationPrefix} 전신 피로회복 출장 힐링 테라피 마사지 - ${shop.name}`,
    `${locationPrefix} 안심 출장 방문 릴렉싱 프로그램 마사지 가이드 · ${shop.name}`,
    `${locationPrefix} 천연 에센셜 오일 출장 케어 마사지 정보 | ${shop.name}`,
    `${locationPrefix} 시그니처 출장 웰니스 바디 마사지 추천 코스 - ${shop.name}`,
    `${locationPrefix} 맞춤형 홈케어 방문 출장 스웨디시 마사지 안내 | ${shop.name}`,
    `${locationPrefix} 1:1 방문 홈케어 출장 타이 마사지 제휴점 정보 · ${shop.name}`,
    `${locationPrefix} 프라이빗 홈케어 출장 아로마 바디케어 코스 추천 | ${shop.name}`,
    `${locationPrefix} 안심 후불제 방문 홈케어 출장 마사지 가이드 - ${shop.name}`,
    `${locationPrefix} 신속 방문 홈케어 출장 전신 릴렉스 테라피 마사지 · ${shop.name}`,
    `${locationPrefix} 최고급 방문 홈케어 출장 딥티슈 마사지 프로그램 | ${shop.name}`,
    `${locationPrefix} 정찰제 방문 홈케어 출장 감성 힐링 마사지 정보 - ${shop.name}`,
    `${locationPrefix} 전문 방문 홈케어 출장 웰니스 마사지 가이드 · ${shop.name}`,
    `${locationPrefix} 건식 및 오일 방문 홈케어 출장 마사지샵 총정리 | ${shop.name}`,
    `${locationPrefix} 24시간 방문 홈케어 출장 프리미엄 바디케어 마사지 - ${shop.name}`,
    `${locationPrefix} 힐링 방문 홈케어 출장 순환 테라피 마사지 안내 · ${shop.name}`,
    `${locationPrefix} 지친 일상 해소 방문 홈케어 출장 마사지 추천 | ${shop.name}`,
    `${locationPrefix} 1인 전용 방문 홈케어 출장 맞춤 마사지 서비스 - ${shop.name}`,
    `${locationPrefix} 밸런스 유지 방문 홈케어 출장 릴렉스 케어 마사지 · ${shop.name}`,
    `${locationPrefix} 후불제 안심 방문 홈케어 출장 전신 마사지 정보 | ${shop.name}`,
    `${locationPrefix} 부드러운 순환 방문 홈케어 출장 아로마 마사지 - ${shop.name}`,
    `${locationPrefix} 프리미엄 방문 홈케어 출장 딥릴렉스 마사지 코스 · ${shop.name}`,
    `${locationPrefix} 소프트 케어 방문 홈케어 출장 마사지 안내 - ${shop.name}`,
    `${locationPrefix} 쾌적한 실내 방문 홈케어 출장 테라피 마사지 · ${shop.name}`,
    `${locationPrefix} 명품 방문 홈케어 출장 스웨디시 프로그램 정보 | ${shop.name}`
  ];

  // 디스크립션: '출장' 키워드 완전 제외, '마사지' 중심의 50가지 조합
  const descriptionVariants = [
    `${locationPrefix} 지역에서 쾌적하고 편안하게 즐길 수 있는 전문 마사지 제휴업체 ${shop.name}의 상세한 프로그램과 요금을 확인해보세요.`,
    `${locationPrefix} 인근에서 차별화된 힐링 마사지 코스를 찾고 계신다면 ${shop.name}의 신뢰도 높은 제휴 요금표를 만나보세요.`,
    `${locationPrefix} 맞춤형 바디케어 안내. 일상의 피로를 말끔히 풀어주는 전문 매장의 릴렉스 마사지 프로그램을 ${shop.name}에서 비교해보세요.`,
    `${locationPrefix} 전 지역에서 신속하게 이용 가능한 정찰제 마사지 및 프라이빗 제휴샵 ${shop.name} 정보를 빠르고 정확하게 안내해 드립니다.`,
    `${locationPrefix} 최고의 휴식을 선사하는 전문 테라피스트들의 맞춤형 마사지 코스. 지금 바로 ${shop.name} 제휴 혜택을 확인하세요.`,
    `${locationPrefix}에서 지친 몸과 마음을 정화해 주는 감성 마사지 및 아로마 테라피 프로그램 정보를 ${shop.name}에서 살펴보세요.`,
    `${locationPrefix} 프리미엄 웰니스 마사지 전문 제휴점 ${shop.name} 안내. 투명하고 합리적인 가격으로 편안한 힐링을 경험해 보세요.`,
    `${locationPrefix} 지역 주민들을 위한 맞춤형 마사지 코스 총정리. ${shop.name}의 세심하고 시원한 테라피로 피로를 날려버리세요.`,
    `${locationPrefix}에서 경험하는 품격 있는 스웨디시 및 정통 마사지 서비스. 안심하고 이용할 수 있는 ${shop.name} 제휴처를 모았습니다.`,
    `${locationPrefix} 인근 마사지 추천 업소 ${shop.name}. 엄선된 힐러들의 전문적인 바디 케어 프로그램과 이용 요금을 확인해보세요.`,
    `${locationPrefix} 전용 맞춤 마사지 가이드. 편안한 공간에서 즐기는 ${shop.name}의 힐링 테라피 정보를 지금 바로 비교해 보세요.`,
    `${locationPrefix} 지역의 실시간 인기 마사지 제휴점 ${shop.name} 안내. 지친 일상에 활력을 불어넣어 줄 프리미엄 코스를 만나보세요.`,
    `${locationPrefix}에서 만나볼 수 있는 1:1 맞춤형 마사지 프로그램. 투명한 후불제 시스템으로 안전하게 ${shop.name}를 이용하실 수 있습니다.`,
    `${locationPrefix} 마사지 전문 제휴 플랫폼 모먼트레스트와 함께하는 ${shop.name}. 엄선된 힐링 프로그램과 가격 정보를 확인해 보세요.`,
    `${locationPrefix} 인근에서 가장 만족도 높은 마사지 숍 ${shop.name} 정보와 체계적인 바디 케어 코스 안내를 제공해 드립니다.`,
    `${locationPrefix} 웰니스 힐링 마사지 안내. 일상의 스트레스를 편안하게 해소해 주는 ${shop.name}의 전문 테라피 서비스를 확인해보세요.`,
    `${locationPrefix} 지역 맞춤형 아로마 마사지 및 스웨디시 프로그램 정보. ${shop.name}과 함께 품격 있는 휴식을 위한 필수 코스를 만나보세요.`,
    `${locationPrefix} 전문 마사지 제휴점 ${shop.name}의 실시간 요금 및 코스 안내. 나에게 알맞은 힐링 프로그램을 선택해 보세요.`,
    `${locationPrefix}에서 편안하게 이용 가능한 마사지 테라피 정보. 철저하게 관리되는 제휴 업소 ${shop.name}를 만나보세요.`,
    `${locationPrefix} 인근 마사지 숍 추천 안내. 몸과 마음의 피로를 부드럽게 감싸주는 ${shop.name}의 힐링 케어를 지금 경험해 보세요.`,
    `${locationPrefix} 지역의 고품격 마사지 프로그램 안내. 일상 속 피로를 시원하게 날려버릴 ${shop.name}의 전문 테라피를 만나보세요.`,
    `${locationPrefix} 맞춤형 힐링 마사지 가이드. 투명한 정보와 실속 있는 제휴 혜택을 ${shop.name}에서 확인해 보세요.`,
    `${locationPrefix} 인근에서 검증된 마사지 제휴점 ${shop.name} 정보. 편안한 분위기 속에서 즐기는 프리미엄 바디 케어 안내입니다.`,
    `${locationPrefix} 전용 감성 마사지 코스 소개. 지친 하루의 끝을 포근하게 채워줄 ${shop.name}의 힐링 테라피를 확인해보세요.`,
    `${locationPrefix} 전문 관리사들의 손길로 완성되는 ${shop.name} 마사지 프로그램 정보. 신뢰할 수 있는 제휴 업소를 비교해 보세요.`,
    `${locationPrefix} 지역 웰니스 마사지 안내. 몸의 밸런스를 되찾아주는 ${shop.name} 전문 테라피스트들의 코스를 만나보세요.`,
    `${locationPrefix} 인근 마사지 숍 ${shop.name} 상세 이용 안내. 합리적인 비용으로 즐기는 최고 수준의 힐링 케어 정보를 제공합니다.`,
    `${locationPrefix} 맞춤형 스웨디시 및 아로마 마사지 프로그램 안내. ${shop.name}와 함께 지친 몸에 깊은 휴식을 선물해 보세요.`,
    `${locationPrefix} 지역에서 손꼽히는 마사지 제휴점 ${shop.name} 총정리. 편안하고 쾌적한 힐링 테라피 정보를 지금 확인해 보세요.`,
    `${locationPrefix} 프리미엄 마사지 가이드. 일상에 특별한 휴식을 더해줄 ${shop.name} 전문 테라피 프로그램 코스 안내입니다.`,
    `${locationPrefix} 인근 마사지 추천 제휴점 ${shop.name} 안내. 피로 해소에 특화된 전문 바디 케어 프로그램을 만나보세요.`,
    `${locationPrefix} 지역 맞춤형 힐링 마사지 정보. ${shop.name}의 정성 어린 케어로 일상의 활력을 되찾아 드립니다.`,
    `${locationPrefix} 전용 마사지 프로그램 안내. 투명하고 믿을 수 있는 제휴 숍 ${shop.name}의 상세 요금을 확인해보세요.`,
    `${locationPrefix} 인근에서 즐기는 품격 있는 마사지 테라피. 몸과 마음을 편안하게 이완시켜 줄 ${shop.name} 힐링 코스입니다.`,
    `${locationPrefix} 지역 주민을 위한 전문 마사지 제휴 안내. ${shop.name}의 만족도 높은 바디 케어 프로그램들을 비교해 보세요.`,
    `${locationPrefix} 맞춤형 웰니스 마사지 가이드. 지친 일상에 맑은 활력을 불어넣어 줄 ${shop.name} 프리미엄 테라피 안내입니다.`,
    `${locationPrefix} 인근 마사지 숍 ${shop.name} 실시간 정보. 철저한 위생 관리와 편안한 힐링 코스를 모먼트레스트에서 만나보세요.`,
    `${locationPrefix} 지역 전문 마사지 제휴점 ${shop.name} 안내. 몸의 긴장을 부드럽게 풀어주는 릴렉스 바디 케어 프로그램입니다.`,
    `${locationPrefix} 맞춤형 감성 마사지 코스 소개. 일상 속 힐링을 책임질 ${shop.name} 전문 테라피스트들의 안내를 확인해 보세요.`,
    `${locationPrefix} 인근 최고급 마사지 프로그램 안내. ${shop.name}에서 나만을 위한 특별한 힐링 테라피를 지금 바로 경험해 보세요.`,
    `${locationPrefix} 지역 맞춤형 마사지 서비스 정보와 ${shop.name}의 쾌적한 힐링 제휴처 안내를 제공합니다.`,
    `${locationPrefix} 인근에서 인기 있는 ${shop.name} 프리미엄 마사지 코스와 이용 요금을 확인해보세요.`,
    `${locationPrefix} 전문 힐러들의 손길로 채워지는 ${shop.name} 릴렉스 마사지 프로그램 가이드.`,
    `${locationPrefix} 안심하고 이용할 수 있는 정찰제 마사지 제휴 업소 ${shop.name} 모음.`,
    `${locationPrefix} 지친 일상의 피로를 비워내는 ${shop.name} 전문 마사지 테라피 안내.`,
    `${locationPrefix} 1:1 맞춤형 바디 케어 프로그램과 감성 마사지 정보 제휴점 ${shop.name}.`,
    `${locationPrefix} 품격 있는 휴식을 선사하는 마사지 제휴점 ${shop.name} 실시간 안내.`,
    `${locationPrefix} 신속하고 편리하게 확인하는 ${shop.name} 마사지 코스별 상세 요금표.`,
    `${locationPrefix} 몸과 마음의 안정을 찾아주는 프리미엄 마사지 테라피 가이드 ${shop.name}.`,
    `${locationPrefix} 모먼트레스트가 엄선한 지역별 전문 마사지 제휴처 ${shop.name} 정보.`
  ];

  const pageTitle = titleVariants[variantIndex];
  const pageDescription = descriptionVariants[variantIndex];

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `https://momentrest.netlify.app/massage/${region}/${encodeURIComponent(district)}${dong ? `/${encodeURIComponent(dong)}` : ""}/shop/${shopName}`,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      siteName: "모먼트레스트(MomentRest)",
      locale: "ko_KR",
      type: "website",
    },
  };
}

export default async function ShopDetailPage({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const { region, district, dong, shopName } = resolvedParams;
  const searchDong = resolvedSearchParams.dong;
  
  const decodedDistrict = decodeURIComponent(district);
  const decodedDong = dong ? decodeURIComponent(dong) : searchDong ? decodeURIComponent(searchDong) : "";
  const decodedShopSlug = decodeURIComponent(shopName);

  const shop = shopData[decodedShopSlug] || shopData["golden-therapy"];
  const locationPrefix = decodedDong ? `${decodedDistrict} ${decodedDong}` : decodedDistrict;

  return (
    <div className="bg-[#fff5f7] text-[#2f3542] min-h-screen flex flex-col font-sans selection:bg-pink-400 selection:text-white pb-28">
      
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-pink-200 px-4 py-3 shadow-sm">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-base font-black text-pink-600">모먼트레스트</Link>
          <span className="text-xs text-gray-500 font-semibold">📍 위치: {locationPrefix}</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1 space-y-8">
        
        <section className="bg-white border border-pink-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img 
              src={shop.image} 
              alt={shop.name} 
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border border-pink-100 shadow-md"
            />
            <div className="flex-1 space-y-2 text-center md:text-left">
              <span className="inline-block bg-pink-100 text-pink-600 text-[11px] font-black px-2.5 py-1 rounded-full">
                {shop.badge}
              </span>
              <h1 className="text-2xl md:text-3xl font-black text-gray-900">
                {locationPrefix} 마사지 제휴 - {shop.name}
              </h1>
              <p className="text-xs text-gray-500 leading-relaxed">
                {locationPrefix} 지역에서 만나보는 맞춤 마사지 제휴 서비스입니다. {shop.desc}
              </p>
              <div className="pt-2 flex flex-wrap gap-2 justify-center md:justify-start">
                {shop.features.map((feat, idx) => (
                  <span key={idx} className="text-[11px] bg-pink-50 text-pink-600 font-bold px-2.5 py-1 rounded-lg border border-pink-200">
                    ✓ {feat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-black text-gray-900 px-1">💰 프로그램 및 코스 요금표</h2>
          <div className="space-y-4">
            {shop.courses.map((course, idx) => (
              <div key={idx} className="bg-white border border-pink-200 rounded-3xl p-6 shadow-sm space-y-4">
                <div className="flex justify-between items-center border-b border-pink-100 pb-3">
                  <h3 className="font-extrabold text-base text-gray-900">{course.category}</h3>
                  {course.badge && (
                    <span className="text-[10px] bg-pink-500 text-white font-black px-2 py-0.5 rounded">
                      {course.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500">{course.desc}</p>
                <div className="space-y-2 pt-2">
                  {course.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex justify-between items-center bg-pink-50/50 p-3.5 rounded-2xl border border-pink-100">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-gray-800">{item.time}</span>
                        {item.recommend && (
                          <span className="text-[10px] bg-rose-500 text-white font-bold px-1.5 py-0.5 rounded">인기</span>
                        )}
                      </div>
                      <span className="font-black text-pink-600 text-sm">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-pink-200 p-4 shadow-lg z-50">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-gray-500 font-semibold">100% 후불제 안심 예약</p>
              <p className="text-base font-black text-pink-600">{shop.phone}</p>
            </div>
            <a 
              href={`tel:${shop.phone}`}
              className="flex-1 max-w-xs bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-black text-sm py-3.5 rounded-2xl shadow-md text-center transition-all active:scale-95"
            >
              📞 전화예약 연결하기
            </a>
          </div>
        </div>

        <div className="text-center pt-4 pb-12">
          <Link href={`/massage/${region}/${encodeURIComponent(district)}${decodedDong ? `/${encodeURIComponent(decodedDong)}` : ""}`} className="text-xs text-gray-500 hover:text-pink-600 font-semibold transition-colors">
            ← 이전 지역 목록으로 돌아가기
          </Link>
        </div>

      </main>
    </div>
  );
}