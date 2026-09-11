import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // 🌟 모먼트레스트 새 도메인 주소로 적용
  const baseUrl = 'https://momentrest.netlify.app';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}