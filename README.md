# 한양과일 랜딩 페이지

한양과일 공식 랜딩 페이지입니다. Next.js + Tailwind CSS 로 제작되었습니다.

## 운영 가이드 (사장님용)

- **상품 / 후기 / 영상 등 수정 방법**: [docs/CONTENT-GUIDE.md](docs/CONTENT-GUIDE.md)
- **배포 방법 (깃허브 + Vercel)**: [docs/DEPLOYMENT-GUIDE.md](docs/DEPLOYMENT-GUIDE.md)

## 폴더 구조 요약

```
landing-page/
├─ public/              ← 모든 사진/영상 파일 (사장님이 자주 만지는 곳)
│  ├─ products/         ← 상품 사진
│  ├─ reviews/          ← 후기 사진 (그냥 넣기만 하면 자동 인식)
│  ├─ videos/           ← 히어로 영상, 소개 영상
│  ├─ people/           ← 대표 사진
│  ├─ order/            ← 주문방법 4단계 사진
│  └─ empathy/          ← 공감 카드 사진
├─ src/
│  ├─ data/             ← 텍스트 데이터 (상품, 사이트 설정)
│  │  ├─ products.json  ← 상품 정보 (이름/가격 등)
│  │  ├─ site.json      ← 히어로 영상, 대표 사진 등 경로
│  │  └─ reviews.json   ← 자동 생성됨 (직접 수정 X)
│  ├─ components/       ← 화면을 구성하는 코드 (디자인 변경 시)
│  └─ lib/              ← 설정 모음
├─ docs/                ← 운영 가이드 문서
└─ scripts/             ← 빌드 시 자동 실행되는 스크립트
```

## 개발자를 위한 메모

### 필수 환경

- Node.js 20+
- npm

### 로컬에서 실행 (미리보기)

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 으로 열어보세요.

### 빌드 (배포 전 검증)

```bash
npm run build
```

`predev` / `prebuild` 단계에서 `scripts/generate-content.mjs` 가 자동 실행되며,
`public/reviews/` 폴더를 스캔해 `src/data/reviews.json` 파일을 갱신합니다.

### 주요 의존성

- Next.js 16 (Turbopack)
- React 19
- Tailwind CSS 4
- TypeScript 5
