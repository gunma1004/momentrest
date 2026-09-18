import type { Metadata } from "next";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    region: string;
    district: string;
    dong: string;
    shopName: string;
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { district, dong, shopName } = resolvedParams;
  
  const decodedDistrict = decodeURIComponent(district);
  const decodedDong = decodeURIComponent(dong);
  const decodedShopSlug = decodeURIComponent(shopName);

  const shop = shopData[decodedShopSlug] || { name: "모먼트레스트 제휴점", phone: "0507-1280-3344" };
  const locationPrefix = `${decodedDistrict} ${decodedDong}`;
  
  const charSum = (locationPrefix + shop.name + "momentrest_bypass_mix").split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const variantIndex = charSum % 30;

  const titleVariants = [
    // 1. 활력 / 피로 회복 / 통증 릴리프 테마
    `${locationPrefix} 출장 일대일 전신 컨디션 조절 마사지 · ${shop.name}`,
    `${locationPrefix} 출장 만성 피로 회복 전문 마사지 | ${shop.name}`,
    `${locationPrefix} 출장 현대인 맞춤 체형 밸런스 마사지 - ${shop.name}`,
    `${locationPrefix} 출장 뭉친 어깨와 목 집중 마사지 · ${shop.name}`,
    `${locationPrefix} 출장 심부 근육 이완 전신 마사지 | ${shop.name}`,

    // 2. 프리미엄 스킨 / 림프 / 에스테틱 테마
    `${locationPrefix} 출장 무자극 천연 오일 전신 마사지 - ${shop.name}`,
    `${locationPrefix} 출장 감성 림프 순환 케어 마사지 · ${shop.name}`,
    `${locationPrefix} 출장 에스테틱 정통 스웨덴식 마사지 | ${shop.name}`,
    `${locationPrefix} 출장 고품격 호텔식 프라이빗 마사지 - ${shop.name}`,
    `${locationPrefix} 출장 아로마테라피 블렌딩 힐링 마사지 · ${shop.name}`,

    // 3. 홈케어 / 편리성 / 빠른 매칭 테마
    `${locationPrefix} 출장 즉시 배정 안심 방문 마사지 | ${shop.name}`,
    `${locationPrefix} 출장 내 집에서 누리는 스파 마사지 - ${shop.name}`,
    `${locationPrefix} 출장 야간 및 주말 예약 가능 마사지 · ${shop.name}`,
    `${locationPrefix} 출장 원스톱 프리미엄 찾아가는 마사지 | ${shop.name}`,
    `${locationPrefix} 출장 프라이빗 룸 딜리버리 케어 마사지 - ${shop.name}`,

    // 4. 감성 힐링 / 웰니스 / 심신 안정 테마
    `${locationPrefix} 출장 따뜻한 온기 가득 힐링 마사지 · ${shop.name}`,
    `${locationPrefix} 출장 스트레스 완화 멘탈 릴렉스 마사지 | ${shop.name}`,
    `${locationPrefix} 출장 림프 드레나쥐 바디 밸런싱 마사지 - ${shop.name}`,
    `${locationPrefix} 출장 품격 높은 1인 힐러 맞춤 마사지 · ${shop.name}`,
    `${locationPrefix} 출장 오감 만족 감성 충전 바디 마사지 | ${shop.name}`,

    // 5. 검증된 실력 / 전문 관리사 테마
    `${locationPrefix} 출장 베테랑 관리사의 정통 바디 마사지 - ${shop.name}`,
    `${locationPrefix} 출장 체계적인 교육을 이수한 전문가 마사지 · ${shop.name}`,
    `${locationPrefix} 출장 프라이빗 예약제 프리미엄 웰빙 마사지 | ${shop.name}`,
    `${locationPrefix} 출장 부드러운 압조절 맞춤 케어 마사지 - ${shop.name}`,
    `${locationPrefix} 출장 철저한 위생 관리 안심 힐링 마사지 · ${shop.name}`,

    // 6. 실속형 / 후불제 / 맞춤 코스 테마
    `${locationPrefix} 출장 가격 거품 뺀 가성비 웰빙 마사지 | ${shop.name}`,
    `${locationPrefix} 출장 안심 결제 시스템 프리미엄 마사지 - ${shop.name}`,
    `${locationPrefix} 출장 나만을 위해 설계된 특별 코스 마사지 · ${shop.name}`,
    `${locationPrefix} 출장 하루 힐링 마무리 감성 바디 마사지 | ${shop.name}`,
    `${locationPrefix} 출장 쾌적하고 조용한 휴식 지원 마사지 · ${shop.name}`
  ];

  const descriptionVariants = [
    // 신뢰·시스템·안전 결제 강조형 (5개)
    `${locationPrefix} 출장 기반의 편리한 시스템과 투명한 안내를 자랑하는 바디 마사지 전문 ${shop.name}. 예약금 요구 없는 정직한 현장 결제로 신뢰를 드립니다.`,
    `${locationPrefix} 출장 진행 시 철저한 위생 수칙과 정갈한 비품을 지참하는 안심 전신 마사지 제휴처 ${shop.name}에서 걱정 없는 휴식을 누리세요.`,
    `${locationPrefix} 출장 형태로 운영되어 외부 노출 걱정 없이 프라이빗하게 받는 일대일 마사지. ${shop.name}의 투명한 운영 체계를 만나보세요.`,
    `${locationPrefix} 출장 등록 제휴점 중 높은 재이용률을 기록 중인 웰니스 마사지 ${shop.name}. 복잡한 절차 없이 간편 예약으로 찾아갑니다.`,
    `${locationPrefix} 출장 스케줄을 고객의 시간표에 맞춰 유연하게 조율하는 전문 전신 마사지. ${shop.name}에서 믿음직한 힐러를 매칭해 드립니다.`,

    // 코스 전문성·관리 기법 강조형 (7개)
    `${locationPrefix} 출장 방문으로 부드럽게 전신의 순환을 도와주는 스웨디시 림프 마사지. ${shop.name}의 세심한 손길로 무거운 붓기를 덜어내 보세요.`,
    `${locationPrefix} 출장 테라피를 통해 깊은 속근육의 긴장감까지 섬세하게 다스리는 딥티슈 마사지. ${shop.name}에서 개운한 활력을 선사합니다.`,
    `${locationPrefix} 출장 현장에서 직접 블렌딩한 천연 에센셜 오일로 심신을 감싸주는 아로마 마사지. ${shop.name}에서 감미로운 휴식을 경험하세요.`,
    `${locationPrefix} 출장 관리를 전문으로 하는 숙련된 관리사의 정교한 압조절 마사지 안내. ${shop.name}에서 내 몸에 꼭 맞는 강도를 찾아드립니다.`,
    `${locationPrefix} 출장 환경에서도 전문 샵 수준의 장비와 정성을 제공하는 럭셔리 전신 마사지. ${shop.name}의 차별화된 바디 테크닉을 확인하세요.`,
    `${locationPrefix} 출장 코스 중 가장 선호도 높은 전신 밸런싱 집중 마사지 프로그램. ${shop.name}에서 틀어진 일상의 리듬을 정돈해 드립니다.`,
    `${locationPrefix} 출장 트리트먼트로 림프 라인을 정리하고 생기를 북돋아 주는 에스테틱 마사지. ${shop.name}의 프리미엄 관리를 추천합니다.`,

    // 공간 편의성·프라이빗 휴식 강조형 (6개)
    `${locationPrefix} 출장 이동 시간이나 교통 체증 고민 없이 머무는 방에서 완성되는 웰빙 마사지. ${shop.name}가 안락한 쉼터를 만들어 드립니다.`,
    `${locationPrefix} 출장 요청 즉시 주변 담당 테라피스트를 우선 배정하는 스피드 매칭 마사지. ${shop.name}에서 지체 없는 케어를 시작하세요.`,
    `${locationPrefix} 출장 서비스를 이용해 자택뿐 아니라 출장지 숙소에서도 간편히 즐기는 휴식 마사지. ${shop.name}가 최상의 편안함을 지원합니다.`,
    `${locationPrefix} 출장 전용 홈케어로 남들의 시선에서 벗어나 온전히 나에게만 집중하는 힐링 마사지. ${shop.name}에서 고요한 쉼을 만끽하세요.`,
    `${locationPrefix} 출장 케어 진행 시 조용하고 차분한 분위기를 조성해 드리는 감성 전신 마사지 제휴처 ${shop.name}의 특별함을 느껴보세요.`,
    `${locationPrefix} 출장 힐링으로 퇴근 후 바로 누워서 편안하게 하루의 피로를 정리하는 나이트 마사지. ${shop.name}가 숙면을 도와드립니다.`,

    // 감성 카피·컨디션 케어 강조형 (6개)
    `${locationPrefix} 출장 케어를 통해 복잡했던 머릿속과 지친 육체를 가볍게 정돈해 주는 릴렉싱 마사지. ${shop.name}가 따뜻한 안식을 전합니다.`,
    `${locationPrefix} 출장 전문 프로그램으로 건조하고 거칠어진 피부결과 뭉친 바디를 동시에 보듬는 스파 마사지. ${shop.name}를 지금 확인해 보세요.`,
    `${locationPrefix} 출장 바디 테라피로 누적된 일상의 긴장과 스트레스를 부드럽게 씻어내는 전신 마사지. ${shop.name}에서 감동을 경험하세요.`,
    `${locationPrefix} 출장 서비스를 통해 전해지는 베테랑 테라피스트의 진심 어린 케어 마사지. ${shop.name}에서 활력 넘치는 내일을 준비하세요.`,
    `${locationPrefix} 출장 맞춤 힐링으로 내 몸의 균형을 되찾아주는 특별한 감성 테라피 마사지 제휴샵 ${shop.name}에서 완벽한 하루를 맺어보세요.`,
    `${locationPrefix} 출장 프로그램 하나로 온몸의 찌뿌둥함을 말끔히 씻어내는 고품격 전신 마사지. ${shop.name}에서 차원이 다른 이완을 만납니다.`,

    // 맞춤 코스·가성비·만족도 강조형 (6개)
    `${locationPrefix} 출장 서비스의 새로운 기준을 제시하는 고객 지향형 1:1 맞춤 전신 마사지 제휴처 ${shop.name}에서 높은 만족감을 누려보세요.`,
    `${locationPrefix} 출장 이용 고객들의 솔직하고 긍정적인 평가가 증명하는 검증된 명품 마사지. ${shop.name}에서 차분한 휴식을 선물합니다.`,
    `${locationPrefix} 출장 일정에 맞춘 부위별 집중 관리 프로그램으로 실속을 더한 바디 마사지. ${shop.name}의 투명한 가격제를 확인해 보세요.`,
    `${locationPrefix} 출장 전신 케어로 일상의 무거운 짐을 잠시 내려놓고 편안한 호흡을 되찾는 웰빙 마사지. ${shop.name}가 함께합니다.`,
    `${locationPrefix} 출장 홈케어 솔루션 중에서도 꼼꼼한 응대와 품격 있는 매너를 갖춘 프리미엄 마사지 제휴점 ${shop.name}을 추천합니다.`,
    `${locationPrefix} 출장 바디 솔루션으로 지친 일상 속에서 가장 손쉽게 만나는 나만의 휴식 마사지. ${shop.name}에서 특별한 에너지를 충전하세요.`
  ];

  const pageTitle = titleVariants[variantIndex];
  const pageDescription = descriptionVariants[variantIndex];

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      `${locationPrefix} 출장 전문 마사지`,
      `${locationPrefix} 출장 맞춤 마사지`,
      `${locationPrefix} 출장 프라이빗 마사지`,
      `${locationPrefix} 출장 힐링 마사지`,
      `${locationPrefix} 출장 바디 마사지`,
      "모먼트레스트"
    ],
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      siteName: "모먼트레스트(MomentRest)",
      locale: "ko_KR",
      type: "website",
    },
  };
}

export default async function DongShopDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { region, district, dong, shopName } = resolvedParams;
  
  const decodedDistrict = decodeURIComponent(district);
  const decodedDong = decodeURIComponent(dong);
  const decodedShopSlug = decodeURIComponent(shopName);

  const shop = shopData[decodedShopSlug] || shopData["golden-therapy"];
  const locationPrefix = `${decodedDistrict} ${decodedDong}`;

  return (
    <div className="bg-[#fff5f7] text-[#2f3542] min-h-screen flex flex-col font-sans selection:bg-pink-400 selection:text-white pb-28">
      
      {/* 상단 네비게이션 */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-pink-200 px-4 py-3 shadow-sm">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-base font-black text-pink-600">모먼트레스트</Link>
          <span className="text-xs text-gray-500 font-semibold">📍 위치: {locationPrefix}</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1 space-y-8">
        
        {/* 샵 타이틀 카드 */}
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
                {locationPrefix} 출장 전문 마사지 - {shop.name}
              </h1>
              <p className="text-xs text-gray-500 leading-relaxed">
                {locationPrefix} 지역에서 만나보는 출장 맞춤 마사지 제휴 서비스입니다. {shop.desc}
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

        {/* 코스 및 가격 안내 */}
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

        {/* 전화 예약 버튼 바 */}
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

        {/* 이전 동 목록으로 돌아가기 */}
        <div className="text-center pt-4 pb-12">
          <Link href={`/${region}/${encodeURIComponent(district)}/${encodeURIComponent(dong)}`} className="text-xs text-gray-500 hover:text-pink-600 font-semibold transition-colors">
            ← 이전 동 목록으로 돌아가기
          </Link>
        </div>

      </main>
    </div>
  );
}