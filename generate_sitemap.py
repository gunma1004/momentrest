import os
import datetime
from urllib.parse import quote

BASE_URL = "https://momentrest.netlify.app"
TODAY = datetime.date.today().isoformat()

# 동 페이지 코드(page.tsx)에 정의된 5대 고정 샵 슬러그
SHOPS = [
    "golden-therapy",
    "miin-therapy",
    "juju-therapy",
    "queens-home-therapy",
    "night-therapy"
]

routes = []

def add_url(path: str, changefreq: str = "daily", priority: str = "0.9"):
    encoded_path = quote(path, safe="/")
    routes.append({
        "loc": f"{BASE_URL}{encoded_path}",
        "changefreq": changefreq,
        "priority": priority
    })

# 1. 메인 및 광역 시/도
add_url("", changefreq="daily", priority="1.0")
add_url("/seoul", changefreq="daily", priority="0.95")
add_url("/gyeonggi", changefreq="daily", priority="0.95")
add_url("/incheon", changefreq="daily", priority="0.95")

# 2. 카테고리
for cat in ['services', 'prices', 'travel', 'places', 'reviews']:
    add_url(f"/{cat}", changefreq="weekly", priority="0.8")

# 3. 서울특별시 25개 구
seoul_gus = [
    "종로구", "중구", "용산구", "성동구", "광진구", "동대문구", "중랑구", "성북구",
    "강북구", "도봉구", "노원구", "은평구", "서대문구", "마포구", "양천구", "강서구",
    "구로구", "금천구", "영등포구", "동작구", "관악구", "서초구", "강남구", "송파구", "강동구"
]
for gu in seoul_gus:
    add_url(f"/seoul/{gu}", changefreq="daily", priority="0.9")

# 4. 경기도 7개 대도시 (시 + 구)
gyeonggi_sub_cities = {
    "수원시": ["장안구", "권선구", "팔달구", "영통구"],
    "성남시": ["수정구", "중원구", "분당구"],
    "고양시": ["덕양구", "일산동구", "일산서구"],
    "용인시": ["처인구", "기흥구", "수지구"],
    "부천시": ["원미구", "소사구", "오정구"],
    "안양시": ["만안구", "동안구"],
    "안산시": ["상록구", "단원구"],
}
for city, gus in gyeonggi_sub_cities.items():
    add_url(f"/gyeonggi/{city}", changefreq="daily", priority="0.9")
    for gu in gus:
        add_url(f"/gyeonggi/{city} {gu}", changefreq="daily", priority="0.85")

# 5. 경기도 일반 시·군 (24개)
gyeonggi_single_cities = [
    "의정부시", "광명시", "평택시", "동두천시", "과천시", "구리시", "남양주시",
    "오산시", "시흥시", "군포시", "의왕시", "하남시", "파주시", "이천시",
    "안성시", "김포시", "화성시", "광주시", "양주시", "포천시", "여주시",
    "연천군", "가평군", "양평군"
]
for city in gyeonggi_single_cities:
    add_url(f"/gyeonggi/{city}", changefreq="daily", priority="0.9")

# 6. 인천광역시 구·군 (11개)
incheon_districts = [
    "부평구", "남동구", "연수구", "미추홀구", "계양구", "서해구", "검단구",
    "제물포구", "영종구", "강화군", "옹진군"
]
for gu in incheon_districts:
    add_url(f"/incheon/{gu}", changefreq="daily", priority="0.9")

# 7. ⭐ 수도권 세부 행정동 및 읍/면 목록 (여기에 동을 적으면 하위 5개 샵까지 자동 풀세트 생성)
dongs_data = [
    # 인천 미추홀구 (주안6동 포함)
    ("incheon", "미추홀구", ["주안동", "주안1동", "주안2동", "주안3동", "주안4동", "주안5동", "주안6동", "주안7동", "주안8동", "도화동", "용현동", "숭의동", "학익동", "관교동", "문학동"]),
    
    # 인천 부평구/남동구/연수구 주요 동
    ("incheon", "부평구", ["부평동", "부평1동", "부평2동", "부평3동", "부평4동", "부평5동", "산곡동", "청천동", "갈산동", "삼산동"]),
    ("incheon", "남동구", ["구월동", "구월1동", "구월2동", "간석동", "만수동", "논현동", "서창동"]),
    ("incheon", "연수구", ["송도동", "송도1동", "송도2동", "연수동", "청학동", "동춘동", "옥련동"]),

    # 경기도 안성시 (죽산면 포함)
    ("gyeonggi", "안성시", ["죽산면", "공도읍", "일죽면", "삼죽면", "미양면", "대덕면", "양성면", "원곡면", "보개면", "금광면", "서운면", "고삼면", "안성동"]),

    # 경기도 주요 시/동
    ("gyeonggi", "수원시 영통구", ["영통동", "매탄동", "원천동", "이의동", "광교동", "하동"]),
    ("gyeonggi", "성남시 분당구", ["서현동", "정자동", "야탑동", "판교동", "백현동", "삼평동", "구미동", "금곡동", "이매동"]),
    ("gyeonggi", "고양시 일산동구", ["장항동", "백석동", "마두동", "식사동", "중산동", "정발산동"]),
    ("gyeonggi", "화성시", ["동탄동", "반송동", "능동", "청계동", "영천동", "오산동", "병점동", "진안동", "향남읍", "봉담읍"]),
    ("gyeonggi", "평택시", ["비전동", "동삭동", "서정동", "이충동", "고덕동", "안중읍", "포승읍"]),

    # 서울 주요 구/동
    ("seoul", "강남구", ["역삼동", "논현동", "신사동", "압구정동", "청담동", "삼성동", "대치동", "개포동", "도곡동", "일원동", "수서동", "세곡동"]),
    ("seoul", "서초구", ["서초동", "잠원동", "반포동", "방배동", "양재동"]),
    ("seoul", "송파구", ["잠실동", "신천동", "풍납동", "송파동", "석촌동", "삼전동", "가락동", "문정동", "장지동", "방이동", "오금동"]),
    ("seoul", "마포구", ["서교동", "동교동", "합정동", "상수동", "연남동", "망원동", "공덕동", "아현동", "도화동", "상암동"]),
    ("seoul", "영등포구", ["여의도동", "당산동", "영등포동", "문래동", "양평동", "신길동", "대림동"])
]

# 8. 동 페이지 및 하위 5대 샵 상세 페이지 자동 결합 생성
for region, district, dong_list in dongs_data:
    for dong in dong_list:
        # 1) 동 페이지: /{region}/{district}/{dong} (예: /incheon/미추홀구/주안6동)
        add_url(f"/{region}/{district}/{dong}", changefreq="daily", priority="0.85")
        
        # 2) 동 하위 샵 5개: /{region}/{district}/{dong}/SHOP/{shopName}
        for shop in SHOPS:
            add_url(f"/{region}/{district}/{dong}/SHOP/{shop}", changefreq="weekly", priority="0.8")

# 9. XML 파일 저장
def build_sitemap():
    output_dir = "public" if os.path.exists("public") else "."
    output_path = os.path.join(output_dir, "sitemap.xml")

    xml = ['<?xml version="1.0" encoding="UTF-8"?>']
    xml.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
    for r in routes:
        xml.append("  <url>")
        xml.append(f"    <loc>{r['loc']}</loc>")
        xml.append(f"    <lastmod>{TODAY}</lastmod>")
        xml.append(f"    <changefreq>{r['changefreq']}</changefreq>")
        xml.append(f"    <priority>{r['priority']}</priority>")
        xml.append("  </url>")
    xml.append("</urlset>")

    with open(output_path, "w", encoding="utf-8") as f:
        f.write("\n".join(xml))

    print(f"✅ sitemap.xml 생성 완료: 총 {len(routes)}개의 URL 등록됨")

if __name__ == "__main__":
    build_sitemap()