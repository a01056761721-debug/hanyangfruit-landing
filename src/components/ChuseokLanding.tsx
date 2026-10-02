import Image from "next/image";
import Link from "next/link";
import ChuseokGiftGallery from "@/components/ChuseokGiftGallery";
import ChuseokMobileOrderBar from "@/components/ChuseokMobileOrderBar";
import ChuseokOrderInfo from "@/components/ChuseokOrderInfo";
import FloatingNav from "@/components/FloatingNav";
import {
  AutumnHeroBackdrop,
  groupBuyGhostButtonClass,
  groupBuyPrimaryButtonClass,
} from "@/components/GroupBuyDecor";
import { CHUSEOK_ORDER_URL, OPEN_CHAT_URL } from "@/lib/site";
import groupBuyData from "@/data/group-buy-preorder.json";

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

export default function ChuseokLanding() {
  const { schedule } = groupBuyData;
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#f6f1e7] pb-[calc(5rem+env(safe-area-inset-bottom))] sm:pb-0">
      <FloatingNav
        variant="chuseok"
        items={[
          {
            id: "order",
            href: CHUSEOK_ORDER_URL,
            label: "주문하기",
            ariaLabel: "공구 선주문 주문 페이지로 이동",
            icon: "🛒",
            external: true,
          },
          {
            id: "products",
            href: "#gift-products",
            label: "상품보기",
            ariaLabel: "선주문 상품 섹션으로 이동",
            icon: "📦",
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
        <AutumnHeroBackdrop />

        <SectionShell className="relative z-10 flex items-center justify-between gap-3 border-b border-white/20 py-3 sm:py-4">
          <Link href="/" className="shrink-0 rounded-lg bg-white px-2 py-1 shadow-md">
            <Image
              src="/logo-hanyang-fruit.png"
              alt="한양과일 홈으로"
              width={180}
              height={70}
              className="h-11 w-auto object-contain sm:h-12"
              priority
            />
          </Link>
          <Link href="/" className={groupBuyGhostButtonClass}>
            ← 메인으로
          </Link>
        </SectionShell>

        <SectionShell className="relative z-10 pb-6 pt-10 text-center sm:pb-10 sm:pt-14 lg:pt-16">
          <span className="inline-flex items-center rounded-full border border-white/40 bg-white/15 px-4 py-1.5 text-xs font-black tracking-wide text-white sm:text-sm">
            {groupBuyData.tagline}
          </span>
          <h1 className="mt-5 text-balance text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {groupBuyData.pageTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm font-bold leading-relaxed text-yellow-100 sm:text-base">
            선주문 기간 {schedule.orderPeriod}
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-base font-black leading-relaxed text-white sm:text-lg">
            {schedule.pickupDate} 일괄 수령
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="#gift-products" className={groupBuyPrimaryButtonClass}>
              상품 보기 ↓
            </Link>
            <Link
              href={OPEN_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={groupBuyGhostButtonClass}
            >
              문의하기
            </Link>
          </div>
        </SectionShell>

        <div className="pointer-events-none absolute bottom-1 left-14 z-[1] w-[min(42vw,9.5rem)] sm:left-28 sm:w-64 sm:translate-y-1 lg:left-48 lg:w-72">
          <Image
            src="/preorder/hero-family.png"
            alt=""
            width={1023}
            height={537}
            className="h-auto w-full"
            priority
          />
        </div>

        <div className="pointer-events-none absolute bottom-1 right-14 z-[1] w-[min(42vw,9.5rem)] sm:right-28 sm:w-64 sm:translate-y-1 lg:right-48 lg:w-72">
          <Image
            src="/preorder/hero-delivery.png"
            alt=""
            width={973}
            height={561}
            className="h-auto w-full"
            priority
          />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1 bg-gradient-to-r from-transparent via-yellow-300/70 to-transparent" />
      </header>

      <ChuseokOrderInfo />

      <ChuseokGiftGallery />

      <footer className="relative mt-auto border-t border-amber-200/80 bg-[#f6f1e7] py-12 sm:py-14">
        <SectionShell className="text-center">
          <p className="text-sm font-bold text-red-800 sm:text-base">
            문의는 카카오 채널로 편하게 남겨 주세요
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href={OPEN_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={groupBuyPrimaryButtonClass}
            >
              오픈채팅 문의
            </Link>
          </div>
          <p className="mt-8 text-xs text-neutral-500" suppressHydrationWarning>
            © {new Date().getFullYear()} 한양과일. All rights reserved.
          </p>
        </SectionShell>
      </footer>

      <ChuseokMobileOrderBar />
    </div>
  );
}
