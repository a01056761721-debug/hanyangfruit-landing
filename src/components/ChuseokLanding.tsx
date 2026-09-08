import Image from "next/image";
import Link from "next/link";
import ChuseokGiftAudience from "@/components/ChuseokGiftAudience";
import ChuseokGiftGallery from "@/components/ChuseokGiftGallery";
import ChuseokOrderInfo from "@/components/ChuseokOrderInfo";
import FloatingNav from "@/components/FloatingNav";
import {
  ChuseokNightBackdrop,
  chuseokGhostButtonClass,
  chuseokGlassCardClass,
  chuseokPrimaryButtonClass,
} from "@/components/ChuseokDecor";
import { CHUSEOK_ORDER_URL, OPEN_CHAT_URL } from "@/lib/site";

function SectionShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`relative z-10 mx-auto w-full max-w-6xl px-3 sm:px-4 lg:px-6 ${className}`}
    >
      {children}
    </section>
  );
}

const HIGHLIGHTS = [
  {
    emoji: "🌕",
    title: "추석맞이 특별 구성",
    body: "명절에 어울리는 과일·정육·공구를 한양과일 기준으로 골라 담았습니다.",
  },
  {
    emoji: "🎁",
    title: "직접 선별 후 포장",
    body: "한양과일이 직접 1차 선별 후, 2차 검수까지 꼼꼼하게 마친 과일만 골라 포장까지 책임지고 준비합니다.",
  },
  {
    emoji: "🤝",
    title: "한양과일 책임보증",
    body: "판매로 끝나는 선물세트가 아닙니다. 받아보신 뒤 맛까지 만족하실 수 있도록, 한양과일이 끝까지 책임지겠습니다.",
  },
] as const;

export default function ChuseokLanding() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-indigo-950">
      <FloatingNav
        variant="chuseok"
        items={[
          {
            id: "order",
            href: CHUSEOK_ORDER_URL,
            label: "주문하기",
            ariaLabel: "추석 선물세트 주문 페이지로 이동",
            icon: "🛒",
            external: true,
          },
          {
            id: "products",
            href: "#gift-products",
            label: "상품보기",
            ariaLabel: "추석 선물세트 상품 섹션으로 이동",
            icon: "🎁",
          },
          {
            id: "inquiry",
            href: OPEN_CHAT_URL,
            label: "문의하기",
            ariaLabel: "한양과일 카카오 채널로 문의",
            icon: "💬",
            external: true,
          },
          {
            id: "main",
            href: "/",
            label: "메인페이지",
            ariaLabel: "한양과일 메인 페이지로 이동",
            icon: "🏠",
          },
        ]}
      />
      <header className="relative isolate w-full overflow-hidden">
        <ChuseokNightBackdrop moonVariant="hero" />

        <div className="pointer-events-none absolute bottom-6 left-6 text-3xl opacity-70 sm:text-4xl">
          🌾
        </div>
        <div className="pointer-events-none absolute bottom-6 right-6 text-3xl opacity-70 sm:text-4xl">
          🍁
        </div>

        <SectionShell className="flex items-center justify-between gap-3 border-b border-amber-400/20 py-3 sm:py-4">
          <Link href="/" className="shrink-0 rounded-lg bg-white/95 px-2 py-1 shadow-md">
            <Image
              src="/logo-hanyang-fruit.png"
              alt="한양과일 홈으로"
              width={180}
              height={70}
              className="h-11 w-auto object-contain sm:h-12"
              priority
            />
          </Link>
          <Link href="/" className={chuseokGhostButtonClass}>
            ← 메인으로
          </Link>
        </SectionShell>

        <SectionShell className="py-14 text-center sm:py-20 lg:py-24">
          <span className="inline-flex items-center rounded-full border border-amber-300/50 bg-amber-400/15 px-4 py-1.5 text-xs font-black tracking-wide text-amber-100 sm:text-sm">
            2026 한가위 🌕
          </span>
          <h1 className="mt-5 text-balance text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            보름달처럼 정성 가득,
            <br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-100 to-yellow-200 bg-clip-text text-transparent">
              한양과일 추석 선물세트
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-amber-100/90 sm:text-base">
            선물은 보기 좋은 것에서 끝나지 않아야 합니다.
            <br />
            받는 순간의 만족은 물론, 드시는 순간의 맛까지 기억에 남도록.
            <br />
            한양과일은{" "}
            <span className="font-bold text-amber-100">&apos;예쁘기만 한 선물세트&apos;</span>가 아닌,{" "}
            <span className="font-bold text-amber-100">&apos;맛까지 제대로 갖춘&apos;</span> 추석 선물세트를 준비했습니다.
          </p>
          <div className="mt-9 flex justify-center">
            <Link href="#gift-products" className={chuseokPrimaryButtonClass}>
              선물세트 보러가기 ↓
            </Link>
          </div>
        </SectionShell>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
      </header>

      <SectionShell className="py-12 sm:py-16">
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
          {HIGHLIGHTS.map((item) => (
            <article key={item.title} className={`${chuseokGlassCardClass} text-center`}>
              <span className="text-4xl">{item.emoji}</span>
              <h2 className="mt-3 text-base font-black text-amber-100 sm:text-lg">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-amber-100/75">{item.body}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <ChuseokGiftAudience />

      <ChuseokOrderInfo />

      <ChuseokGiftGallery />

      <footer className="relative mt-auto overflow-hidden py-12 sm:py-14">
        <ChuseokNightBackdrop moonVariant="footer" showMoon />
        <SectionShell className="text-center">
          <p className="text-sm font-bold text-amber-200/80">한가위를 함께해요</p>
          <h2 className="mt-2 text-lg font-black text-white sm:text-xl">
            한양과일 추석 선물세트
          </h2>
          <div className="mt-6 flex justify-center">
            <Link href="/" className={chuseokGhostButtonClass}>
              메인 페이지
            </Link>
          </div>
          <p className="mt-8 text-xs text-amber-200/50" suppressHydrationWarning>
            © {new Date().getFullYear()} 한양과일. All rights reserved.
          </p>
        </SectionShell>
      </footer>
    </div>
  );
}
