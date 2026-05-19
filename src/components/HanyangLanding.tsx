import Image from "next/image";
import Link from "next/link";
import DeliveryMapArrowsBackdrop from "@/components/DeliveryMapArrowsBackdrop";
import EmpathyImageSlideshow from "@/components/EmpathyImageSlideshow";
import HeroBackgroundVideo from "@/components/HeroBackgroundVideo";
import OrderStepsCarousel from "@/components/OrderStepsCarousel";
import ProductShowcase from "@/components/ProductShowcase";
import ReviewPhoneCarousel from "@/components/ReviewPhoneCarousel";
import ScrollRevealController from "@/components/ScrollRevealController";
import { DIFFERENCE_VIDEO, FOUNDER_IMAGE, OPEN_CHAT_URL } from "@/lib/site";

function CtaButton({
  children,
  variant = "yellow",
  href = OPEN_CHAT_URL,
  className = "",
}: {
  children: React.ReactNode;
  variant?: "yellow" | "white";
  href?: string;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-extrabold shadow-lg transition hover:scale-[1.02] active:scale-[0.99] sm:px-7 sm:py-3.5 sm:text-base";
  const styles =
    variant === "yellow"
      ? "bg-[#ffe24a] text-slate-900 shadow-amber-200/40 hover:brightness-105"
      : "bg-white text-red-700 shadow-slate-900/10 hover:bg-red-50";
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`.trim()}
    >
      {children}
    </Link>
  );
}

function SectionShell({
  children,
  className = "",
  reveal = false,
}: {
  children: React.ReactNode;
  className?: string;
  reveal?: boolean;
}) {
  return (
    <section
      data-scroll-reveal={reveal ? "" : undefined}
      className={`mx-auto w-full max-w-6xl px-0 sm:px-1 lg:px-1.5 ${className}`}
    >
      {children}
    </section>
  );
}

function DongGrid({ dongs }: { dongs: readonly string[] }) {
  return (
    <div className="mt-2 grid grid-cols-3 gap-x-2 gap-y-1 text-base leading-relaxed text-slate-600 sm:text-lg">
      {dongs.map((dong) => (
        <span key={dong}>{dong}</span>
      ))}
    </div>
  );
}

const GANGNAM_SEOCHO_OPEN_CHAT_URL = "https://open.kakao.com/o/gW8k0Hih";
const YONGSAN_YEOUIDO_OPEN_CHAT_URL = "https://open.kakao.com/o/gHCAkteh";
const INSTAGRAM_URL = "https://www.instagram.com/hanyangfruit/";
const YOUTUBE_URL = "https://www.youtube.com/@%EA%B3%BC%EC%9D%BC%EB%89%B4%EC%8A%A4-u5j";

const FLOATING_NAV_BUTTON_CLASS =
  "inline-flex h-9 w-28 items-center justify-center gap-1.5 rounded-full bg-red-600 px-2 text-xs font-black text-white shadow-xl shadow-red-900/25 ring-2 ring-white transition hover:scale-105 hover:bg-red-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-200 active:scale-95 active:bg-red-800 sm:h-11 sm:w-36 sm:gap-2 sm:px-3 sm:text-sm";

function InstagramIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
      fill="none"
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4.5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-6 w-6 shrink-0 sm:h-7 sm:w-7"
      fill="none"
    >
      <path
        d="M21 8.2c-.2-1.2-.9-2-2.1-2.2C17.2 5.6 12 5.6 12 5.6s-5.2 0-6.9.4C3.9 6.2 3.2 7 3 8.2 2.7 10 2.7 12 2.7 12s0 2 .3 3.8c.2 1.2.9 2 2.1 2.2 1.7.4 6.9.4 6.9.4s5.2 0 6.9-.4c1.2-.2 1.9-1 2.1-2.2.3-1.8.3-3.8.3-3.8s0-2-.3-3.8Z"
        fill="currentColor"
      />
      <path d="M10.1 14.7V9.3l5 2.7-5 2.7Z" fill="#dc2626" />
    </svg>
  );
}

function AreaChatButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-auto flex w-fit items-center justify-center rounded-full bg-[#ffe24a]/95 px-4 py-2 text-xs font-black text-slate-900 shadow-md shadow-amber-200/45 transition hover:scale-[1.02] hover:brightness-105 active:scale-[0.99] sm:px-5 sm:text-sm"
    >
      채팅방 입장하기
    </Link>
  );
}

const heroImage = "/products/fruit-02.png";
type FruitDecorItem = {
  emoji: string;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  size: string;
  rotate?: string;
  opacity?: string;
};

function FloatingFruits({
  items,
  className = "",
}: {
  items: readonly FruitDecorItem[];
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
    >
      {items.map((f, i) => (
        <span
          key={i}
          className={`absolute drop-shadow-md ${f.size} ${f.rotate ?? ""} ${f.opacity ?? "opacity-90"}`}
          style={{
            left: f.left,
            right: f.right,
            top: f.top,
            bottom: f.bottom,
          }}
        >
          {f.emoji}
        </span>
      ))}
    </div>
  );
}

const ORDER_FRUIT_DECOR: readonly FruitDecorItem[] = [
  { emoji: "🍎", left: "2%", top: "20%", size: "text-xl", rotate: "-rotate-12", opacity: "opacity-70" },
  { emoji: "🍊", right: "3%", top: "30%", size: "text-xl", rotate: "rotate-12", opacity: "opacity-70" },
  { emoji: "🍇", left: "6%", bottom: "12%", size: "text-lg", rotate: "rotate-6", opacity: "opacity-65" },
  { emoji: "🍉", right: "8%", bottom: "18%", size: "text-xl", rotate: "-rotate-6", opacity: "opacity-65" },
];

/** 공감 카드 이미지 — `imageSrcs`에 한 장 또는 여러 장을 넣으면 자동으로 순환 슬라이드됩니다. */
const EMPATHY_PAIN_POINTS: readonly {
  text: string;
  imageSrcs: readonly string[];
  imageAlt: string;
}[] = [
  {
    text: "비싼데 맛없는 과일",
    imageSrcs: ["/empathy/pain-1-a.png", "/empathy/pain-1-b.png"],
    imageAlt: "비싼데 맛없는 과일",
  },
  {
    text: "겉은 괜찮아 보여도 속 상태가 별로인 과일",
    imageSrcs: ["/empathy/pain-2-a.png", "/empathy/pain-2-b.png"],
    imageAlt: "겉과 속 상태가 다른 과일",
  },
  {
    text: "제대로 검수하지 않은 과일",
    imageSrcs: ["/empathy/pain-3-a.png", "/empathy/pain-3-b.png"],
    imageAlt: "제대로 검수하지 않은 과일",
  },
];

export default function HanyangLanding() {
  return (
    <div className="relative isolate flex min-h-screen flex-col overflow-x-hidden bg-white">
      <ScrollRevealController />
      <div className="fixed right-2.5 top-1/2 z-50 flex -translate-y-1/2 flex-col items-end gap-1.5 sm:right-5 sm:gap-2">
        <Link
          href="#products"
          aria-label="상품소개 섹션으로 이동"
          className={FLOATING_NAV_BUTTON_CLASS}
        >
          <span aria-hidden className="text-sm leading-none sm:text-base">🧺</span>
          <span>상품보기</span>
        </Link>
        <Link
          href="#order-method"
          aria-label="주문방법 섹션으로 이동"
          className={FLOATING_NAV_BUTTON_CLASS}
        >
          <span aria-hidden className="text-sm leading-none sm:text-base">📝</span>
          <span>주문방법</span>
        </Link>
        <Link
          href="#delivery-areas"
          aria-label="배송지역 섹션으로 이동"
          className={FLOATING_NAV_BUTTON_CLASS}
        >
          <span aria-hidden className="text-sm leading-none sm:text-base">🚚</span>
          <span>배송지역</span>
        </Link>
        <Link
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="한양과일 인스타그램으로 이동"
          className={`${FLOATING_NAV_BUTTON_CLASS} [&_svg]:h-4 [&_svg]:w-4 sm:[&_svg]:h-5 sm:[&_svg]:w-5`}
        >
          <InstagramIcon />
          <span>Instagram</span>
        </Link>
        <Link
          href={YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="한양과일 유튜브 채널로 이동"
          className={`${FLOATING_NAV_BUTTON_CLASS} [&_svg]:h-4 [&_svg]:w-4 sm:[&_svg]:h-6 sm:[&_svg]:w-6`}
        >
          <YouTubeIcon />
          <span>YouTube</span>
        </Link>
      </div>
      <div className="relative z-10 flex flex-col flex-1 bg-white">
      {/* 로고 + 히어로 — 전면 배경 영상 + 어두운 오버레이(레퍼런스형) */}
      <header className="relative isolate w-full overflow-hidden">
        <div className="relative min-h-[min(115svh,920px)]">
          <HeroBackgroundVideo posterSrc={heroImage} posterAlt="신선한 과일" />
          <div
            aria-hidden
            className="absolute inset-0 z-[1] bg-gradient-to-b from-black/80 via-black/55 to-black/72"
          />

          <div className="relative z-10 flex min-h-[min(115svh,920px)] flex-col">
            <div className="relative z-20 flex w-full justify-center border-b border-slate-200/90 bg-white px-0 py-0 sm:px-0.5 sm:py-0">
              <div className="flex h-[5.25rem] w-full max-w-6xl items-center justify-center sm:h-36 md:h-40 lg:h-44">
                <Image
                  src="/logo-hanyang-fruit.png"
                  alt="한양과일"
                  width={720}
                  height={280}
                  className="h-full w-auto max-w-full object-contain object-center"
                  priority
                />
              </div>
            </div>

            <SectionShell className="flex flex-1 flex-col justify-center !px-0 py-9 sm:!px-0 sm:py-12 lg:!px-0.5 lg:py-16">
              <div className="mx-auto w-full max-w-full text-center lg:mx-0 lg:text-left">
                <h1 className="font-black tracking-tight text-white">
                  <span className="block text-[clamp(1.1rem,3.2vw,2.1rem)] leading-[1.2] sm:text-[clamp(1.35rem,2.9vw,2.3rem)] lg:text-[clamp(1.7rem,2.75vw,2.55rem)] lg:leading-[1.16]">
                    <span className="block text-balance text-center md:whitespace-nowrap lg:text-left">
                      <span className="text-red-600">한양과일</span>을 처음 들으셨다구요?
                    </span>
                    <span className="mt-1 block leading-[1.22] text-white sm:mt-1.5">
                      그럼 아직{" "}
                      <span className="text-red-600">&apos;진짜 과일&apos;</span>을 만나보지 못하신 겁니다.
                    </span>
                  </span>
                </h1>
                <p className="mx-auto mt-7 max-w-full text-pretty text-sm font-normal leading-snug text-white sm:mt-9 sm:max-w-[min(100%,40rem)] sm:text-base lg:mx-0">
                  복불복 과일에 지치셨다면 한양과일로 정착하세요.
                </p>
                <p className="mx-auto mt-1.5 max-w-full text-pretty text-sm font-normal leading-snug text-white/90 sm:max-w-[min(100%,40rem)] sm:mt-2 sm:text-base lg:mx-0">
                  당일 검수부터 직접 배송까지. 한양과일이 매일의 과일을 책임집니다.
                </p>

                {/* 히어로 칩: 칸 비율·크기 고정 유지 — `ul` max-w·`li` 높이 변경 시 네 칸 비율 함께 조정 */}
                <ul className="mx-auto mt-7 grid w-full max-w-[21rem] grid-cols-2 gap-x-1.5 gap-y-1.5 sm:mt-9 sm:max-w-[26rem] sm:gap-x-2 sm:gap-y-2 lg:mx-0">
                  {[
                    { icon: "🍎", text: "새벽 경매 직접 참여" },
                    { icon: "💎", text: "백화점급의 상품성" },
                    { icon: "🚚", text: "당일 검수 직접 배송" },
                    { icon: "🔁", text: "문제 시 100% 처리" },
                  ].map((item) => (
                    <li
                      key={item.text}
                      className="flex h-[3.8rem] w-full min-w-0 shrink-0 flex-row items-center justify-center gap-1 rounded-lg border border-white/25 bg-white/10 px-1.5 py-0 text-[13px] font-bold leading-snug text-white shadow-sm backdrop-blur-sm sm:h-[4.25rem] sm:gap-1.5 sm:px-2 sm:text-base"
                    >
                      <span
                        className={`shrink-0 text-lg leading-none sm:text-xl ${
                          item.icon === "💎" ? "inline-block -translate-y-[0.1em]" : ""
                        }`}
                      >
                        {item.icon}
                      </span>
                      <span className="min-w-0 max-w-full grow-0 break-keep text-center leading-tight">{item.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex justify-center sm:mt-12 lg:justify-start">
                  <CtaButton className="sm:px-8 sm:py-4 sm:text-lg">배송 문의하기</CtaButton>
                </div>
              </div>
            </SectionShell>
          </div>
        </div>
      </header>

      {/* 2. 공감 */}
      <SectionShell reveal className="relative z-10 mt-32 rounded-[1.75rem] bg-gradient-to-b from-red-600 to-red-700 py-14 shadow-lg shadow-red-950/30 sm:mt-40 sm:py-16 lg:mt-48">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-xl font-black text-white drop-shadow-sm sm:text-2xl">
            과일 시켜서 먹을 때 이런 적 없으셨나요?
          </h2>
          <ul className="mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-4 lg:gap-6">
            {EMPATHY_PAIN_POINTS.map((item) => (
              <li
                key={item.text}
                className="flex flex-col overflow-hidden rounded-xl ring-1 ring-white/20"
              >
                <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden bg-white/10">
                  <EmpathyImageSlideshow
                    images={item.imageSrcs}
                    alt={item.imageAlt}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 320px"
                  />
                </div>
                <p className="shrink-0 px-2 pb-2.5 pt-2 text-center text-xs font-semibold leading-snug text-white sm:px-2.5 sm:pb-3 sm:pt-2.5 sm:text-sm sm:font-bold">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-9 text-xl font-bold leading-snug text-white sm:mt-10 sm:text-2xl lg:text-3xl">
            한 번쯤 경험하셨다면 <span className="font-extrabold text-white">잘 오셨습니다.</span>
          </p>
        </div>
      </SectionShell>

      {/* 공감 ↔ 소개 사이 (훅 + 섹션 제목) */}
      <SectionShell reveal className="pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-28 lg:pb-14">
        <div className="mx-auto max-w-5xl px-2 text-center sm:px-4">
          <p className="text-balance text-[clamp(1.75rem,6.5vw,3.5rem)] font-black leading-[1.08] tracking-tight text-slate-900 sm:text-4xl sm:leading-[1.12] lg:text-5xl xl:text-6xl">
            왜 이렇게 자신 있냐고요?
          </p>
          <h2 className="mt-16 text-balance text-2xl font-black leading-snug text-slate-900 sm:mt-20 sm:text-3xl lg:mt-28 lg:text-4xl xl:mt-36 xl:text-5xl">
            한양과일은
            <br />
            시작부터 다릅니다
          </h2>
        </div>
      </SectionShell>

      {/* 3. 소개 — 공감과 동일 빨간 프레임 안: 좌 사진 / 우 글 */}
      <SectionShell reveal className="py-10 sm:py-14 lg:py-16">
        <div className="rounded-[1.75rem] bg-gradient-to-b from-red-600 to-red-700 px-4 py-12 shadow-lg shadow-red-950/30 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="mx-auto grid max-w-5xl items-stretch gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          <div className="relative min-h-[220px] w-full overflow-hidden rounded-xl ring-1 ring-white/20 sm:min-h-[280px] lg:min-h-[320px]">
            <video
              src={DIFFERENCE_VIDEO}
              className="h-full min-h-[220px] w-full object-cover sm:min-h-[280px] lg:min-h-[320px]"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="한양과일 상품 선별 과정 영상"
              suppressHydrationWarning
            />
          </div>
          <div className="flex flex-col justify-center px-0.5 sm:px-1 lg:pl-2">
            <div className="space-y-4 text-sm leading-relaxed text-white/95 sm:space-y-5 sm:text-base [&_p]:break-keep">
              <h3 className="text-balance text-lg font-black leading-snug text-white drop-shadow-sm sm:text-xl">
                뭐가 다를까요?
              </h3>
              <p className="text-pretty">
                대부분의 과일 매장은 시장에서 이미 선별된 물건을 받아 판매합니다.
                <br />
                하지만 한양과일은 매일 새벽, 사장님이 직접 경매에 참여해 그날 들어온 과일의 상태와 품질을 직접 먹어보고 확인합니다.
              </p>
              <p className="text-pretty">
                좋은 상품만 직접 낙찰받아 매장에 가져온 뒤에도 검수 한 번으로 끝나지 않습니다. 입고 검수부터 배송 전 최종 검수까지 여러 번 꼼꼼하게 확인한 후 고객님께 보내드립니다.
              </p>
              <p className="text-pretty text-base font-black leading-snug text-white drop-shadow-sm sm:text-lg sm:leading-snug">
                당일 들어온 과일을 가장 신선한 상태로 보내드리는 것, 그것이 한양과일만의 차이점이자 핵심입니다.
              </p>
            </div>
          </div>
        </div>
        </div>
      </SectionShell>

      {/* 3b. 왜 직접 새벽 경매까지 — 위 소개 블록과 동일 빨간 프레임 */}
      <SectionShell reveal className="py-6 sm:py-8 lg:py-10">
        <div className="overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-red-600 to-red-700 px-4 py-10 shadow-lg shadow-red-950/30 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-5xl text-left text-white">
            <h2 className="text-balance text-xl font-black leading-snug drop-shadow-sm sm:text-2xl lg:text-3xl">
              왜 직접 새벽 경매까지 갈까?
            </h2>
            <div className="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-white/95 sm:mt-5 sm:space-y-3.5 sm:text-base lg:mt-6 [&_p]:break-keep">
              <p className="text-pretty">좋은 과일은 직접 보고 먹어봐야 안다고 생각합니다.</p>
              <p className="text-pretty">
                눈으로 상태를 확인하고 직접 고른 과일만 판매하는 것. 그게 한양과일이 가장 중요하게 생각하는 기준입니다.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* 4. 차별점 그리드 */}
      <SectionShell reveal className="pb-14 pt-3 sm:pb-20 sm:pt-5">
        <h2 className="mb-9 text-center text-xl font-black text-red-600 sm:mb-10 sm:text-2xl">
          핵심 차별점
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {[
            {
              n: "01",
              bg: "bg-red-100",
              title: "직접 경매",
              body: "새벽 경매 현장에서 직접 상품을 먹어보고 고릅니다",
              emoji: "🍉",
            },
            {
              n: "02",
              bg: "bg-orange-100",
              title: "백화점급 품질",
              body: "좋은 과일은 비싸야 한다는 공식을 바꾸고 싶었습니다",
              emoji: "💎",
            },
            {
              n: "03",
              bg: "bg-amber-100",
              title: "직접 배송",
              body: "검수한 상품을 직접 배송하며 마지막까지 상태를 신경 씁니다",
              emoji: "🚚",
            },
            {
              n: "04",
              bg: "bg-rose-100",
              title: "빠른 CS 처리",
              body: "과일 상태에 문제가 있을 경우 빠르게 확인 후 100% 처리 도와드립니다",
              emoji: "🔁",
            },
          ].map((card) => (
            <article
              key={card.n}
              className="overflow-hidden rounded-[1.4rem] border border-white/70 bg-white/88 shadow-md shadow-slate-300/40 backdrop-blur-md"
            >
              <div
                className={`relative flex min-h-[118px] items-center justify-center ${card.bg} px-4 py-6`}
              >
                <span className="absolute left-3 top-2.5 text-xs font-black text-slate-400/80">
                  #{card.n}
                </span>
                <span
                  className={`text-5xl drop-shadow-sm ${
                    card.emoji === "💎" ? "inline-block -translate-y-1" : ""
                  }`}
                >
                  {card.emoji}
                </span>
              </div>
              <div className="relative px-4 pb-6 pt-4 text-center">
                <h3 className="text-base font-black text-red-600 sm:text-lg">{card.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <ProductShowcase />

      {/* 6. 주문 방식 */}
      <div
        data-scroll-reveal
        id="order-method"
        className="relative scroll-mt-6 bg-gradient-to-b from-red-600/90 to-red-700/92 pb-10 pt-7 text-white shadow-inner shadow-black/5 backdrop-blur-[2px] sm:pb-14 sm:pt-10"
      >
        <FloatingFruits items={ORDER_FRUIT_DECOR} />
        <SectionShell className="relative z-10">
          <h2 className="text-center text-2xl font-black drop-shadow-sm sm:text-3xl">
            주문방법
          </h2>
          <OrderStepsCarousel />
          <p className="mx-auto mt-5 max-w-xl text-center text-xs font-medium text-white/90 sm:mt-6 sm:text-sm">
            쇼핑몰보다 빠르고 더 가까운 방식으로 운영합니다
          </p>
        </SectionShell>
      </div>

      {/* 7. 배송 지역 */}
      <SectionShell
        reveal
        className="!max-w-7xl scroll-mt-6 pb-14 pt-14 sm:pb-20 sm:pt-20"
      >
        <span id="delivery-areas" className="block scroll-mt-6" />
        <div className="overflow-hidden rounded-[1.65rem] border-4 border-[#ffe24a]/95 bg-red-600/88 p-1 shadow-xl shadow-red-300/45 backdrop-blur-sm">
          <div className="relative overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-white/88 via-white/78 to-red-50/35 px-5 py-9 backdrop-blur-[2px] sm:px-9 sm:py-12">
            <DeliveryMapArrowsBackdrop />
            <div className="relative z-10">
            <h2 className="text-center text-xl font-black text-red-700 sm:text-2xl">
              현재 직접 배송 가능 지역
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-sm font-extrabold text-slate-800 sm:mt-6 sm:text-base">
              현재는 직접 배송 퀄리티 유지를 위해 일부 지역 중심으로 운영하고 있습니다.
            </p>
            <div className="mx-auto mt-7 grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
              <div className="flex h-full flex-col">
                <div className="min-h-[10rem] rounded-xl bg-red-50/75 p-4 backdrop-blur-[1px] sm:min-h-[10.75rem] sm:p-5">
                  <p className="text-lg font-black text-red-700 sm:text-xl">강남구</p>
                  <DongGrid dongs={["일원동", "개포동", "대치동", "논현동", "역삼동", "삼성동", "도곡동", "청담동"]} />
                </div>
                <div className="mt-2">
                  <AreaChatButton href={GANGNAM_SEOCHO_OPEN_CHAT_URL} />
                </div>
              </div>
              <div className="flex h-full flex-col">
                <div className="min-h-[10rem] rounded-xl bg-red-50/75 p-4 backdrop-blur-[1px] sm:min-h-[10.75rem] sm:p-5">
                  <p className="text-lg font-black text-red-700 sm:text-xl">서초구</p>
                  <DongGrid dongs={["서초동", "방배동", "잠원동", "반포동"]} />
                </div>
                <div className="mt-2">
                  <AreaChatButton href={GANGNAM_SEOCHO_OPEN_CHAT_URL} />
                </div>
              </div>
              <div className="flex h-full flex-col">
                <div className="min-h-[10rem] rounded-xl bg-red-50/75 p-4 backdrop-blur-[1px] sm:min-h-[10.75rem] sm:p-5">
                  <p className="text-lg font-black text-red-700 sm:text-xl">용산구</p>
                  <DongGrid dongs={["서빙고동", "동빙고동", "한강로동", "산천동", "효창동", "이촌동", "신계동", "문배동"]} />
                </div>
                <div className="mt-2">
                  <AreaChatButton href={YONGSAN_YEOUIDO_OPEN_CHAT_URL} />
                </div>
              </div>
              <div className="flex h-full flex-col">
                <div className="min-h-[10rem] rounded-xl bg-red-50/75 p-4 backdrop-blur-[1px] sm:min-h-[10.75rem] sm:p-5">
                  <p className="text-lg font-black text-red-700 sm:text-xl">여의도</p>
                  <p className="mt-2 text-base leading-relaxed text-slate-600 sm:text-lg">
                    여의도동 전체
                  </p>
                </div>
                <div className="mt-2">
                  <AreaChatButton href={YONGSAN_YEOUIDO_OPEN_CHAT_URL} />
                </div>
              </div>
            </div>
            <p className="mt-7 text-center text-sm font-extrabold text-slate-800 sm:mt-9 sm:text-base">
              배송 가능 지역은 점점 확대 중입니다.
              <br />
              그 외 지역도 편하게 문의 주세요 😊
            </p>
            <div className="mt-7 flex justify-center sm:mt-9">
              <CtaButton>배송 가능 지역 문의하기</CtaButton>
            </div>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* 8. 오픈채팅 후기 — 레퍼런스형 2×2 그리드 (이미지는 이후 교체) */}
      <section data-scroll-reveal className="relative z-10 overflow-hidden bg-white pt-14 pb-8 sm:pt-20 sm:pb-12">

        <SectionShell className="relative">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xl font-black tracking-tight text-red-600 sm:text-2xl">실제 주민들의 솔직 후기!</p>
            <h2 className="mx-auto mt-3 max-w-5xl text-balance text-xl font-black leading-[1.35] text-slate-900 sm:mt-4 sm:text-2xl sm:leading-[1.38] lg:text-[1.75rem] lg:leading-[1.4]">
              <span className="block">맛있는 과일은 당연하다고 생각합니다.</span>
              <span className="block lg:whitespace-nowrap">한양과일의 가장 큰 자랑은 매일 쌓여가는 고객분들의 후기입니다.</span>
            </h2>
          </div>

          <div className="mt-9 sm:mt-12">
            <ReviewPhoneCarousel />
          </div>

        </SectionShell>
      </section>

      {/* 8. 철학 */}
      <SectionShell reveal className="pb-14 pt-3 sm:pb-20 sm:pt-5">
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-5 px-1 py-6 sm:px-2 sm:py-8 lg:flex-row lg:items-end lg:gap-7">
          <div className="relative z-10 order-2 aspect-[4/5] w-[min(85vw,20rem)] shrink-0 overflow-hidden lg:order-1 lg:w-[22rem]">
            <Image
              src={FOUNDER_IMAGE}
              alt="한양과일 대표"
              fill
              sizes="(max-width: 1024px) 85vw, 22rem"
              className="object-cover object-top mix-blend-multiply"
            />
          </div>
          <div className="relative order-1 w-full sm:w-fit sm:max-w-full lg:order-2 lg:-translate-y-10">
            <div className="relative w-full rounded-[1.6rem] bg-red-600 px-5 py-7 text-lg font-medium leading-relaxed text-white shadow-xl shadow-red-950/20 sm:w-fit sm:max-w-full sm:rounded-[2rem] sm:px-8 sm:py-9 sm:text-xl lg:px-10 lg:py-10 lg:text-2xl">
              <div
                aria-hidden
                className="absolute bottom-2 left-1/2 h-7 w-7 -translate-x-1/2 rotate-45 rounded-[0.35rem] bg-red-600 lg:bottom-auto lg:left-0 lg:top-[26%] lg:-translate-x-2 lg:-translate-y-1/2"
              />
              <div className="relative leading-[1.75] tracking-tight [word-break:keep-all] sm:whitespace-nowrap">
                <p className="break-keep">
                  한양과일은 단순히 맛있는 과일이 아니라,
                  <br />
                  언제 주문해도 믿고 받을 수 있는 과일을 전하고 싶습니다.
                  <br />
                  그래서 저희는 단순히 상품을 판매하는 것이 중요한 게 아니라
                  <br />
                  <span className="text-[1.04em] font-black text-white">고객과의 신뢰를 먼저 생각합니다.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* 9. 마지막 CTA */}
      <footer className="mt-auto bg-gradient-to-b from-red-600/92 to-red-900/94 py-14 text-center text-white shadow-inner shadow-black/10 backdrop-blur-[2px] sm:py-20">
        <SectionShell>
          <h2 className="mx-auto max-w-lg text-balance text-xl font-black leading-tight sm:text-3xl">
            오늘 가장 좋은 과일을
            <br />
            가장 신선할 때 받아보세요
          </h2>
          <div className="mt-9 flex justify-center sm:mt-10">
            <CtaButton variant="white">🔥 배송 문의하기</CtaButton>
          </div>
          <p className="mt-9 text-[0.65rem] text-white/70 sm:mt-10 sm:text-xs" suppressHydrationWarning>© {new Date().getFullYear()} 한양과일. All rights reserved.</p>
        </SectionShell>
      </footer>
      </div>
    </div>
  );
}
