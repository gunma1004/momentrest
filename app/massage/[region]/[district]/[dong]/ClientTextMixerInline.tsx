"use client";

import { useEffect, useState } from "react";

interface Props {
  locationText: string;
}

export function ClientTextMixerInline({ locationText }: Props) {
  const [headline, setHeadline] = useState(`${locationText} 전문 프리미엄 홈케어 테라피`);
  const [subText, setSubText] = useState("편안하고 안전한 프라이빗 웰니스 서비스");

  useEffect(() => {
    setHeadline(`${locationText} 프라이빗 맞춤 테라피 & 프리미엄 홈케어`);
    setSubText("모먼트레스트 공식 제휴 · 신속하고 편안한 방문 서비스 · 프리미엄 힐링 케어");
  }, [locationText]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-pink-500/10 via-rose-500/5 to-pink-500/10 border border-pink-300 p-4 md:p-5 rounded-2xl text-center shadow-[0_0_20px_rgba(255,107,129,0.08)]">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-pink-300 text-[11px] font-bold text-pink-600 mb-2 shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
        </span>
        실시간 {locationText} 테라피스트 매칭 대기중
      </div>

      <h2 className="text-sm md:text-base font-extrabold text-pink-700 tracking-tight">
        ✨ {headline}
      </h2>

      <p className="text-[11px] md:text-xs text-gray-600 mt-1 font-medium">
        {subText}
      </p>
    </div>
  );
}