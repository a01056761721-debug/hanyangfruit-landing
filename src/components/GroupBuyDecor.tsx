import Image from "next/image";

type GroupBuyBackdropProps = {
  variant?: "banner" | "hero";
  className?: string;
  /** hero 전용: 상단 일러스트 (검은 배경 PNG/JPG) */
  heroIllustrationSrc?: string;
};

/** 선주문 히어로용 가을 단풍 배경. 메인 페이지의 밝은 빨강 그라데이션과는 구분됩니다. */
export function AutumnHeroBackdrop({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#7a2a18] via-[#c45224] to-[#e39a3c]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_12%_0%,rgba(255,220,160,0.42),transparent_48%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_88%_100%,rgba(74,22,12,0.42),transparent_52%)]" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(128deg, #fff3d4 0, #fff3d4 1px, transparent 1px, transparent 18px)",
        }}
      />
    </div>
  );
}

/** 메인 랜딩과 맞춘 공구·선주문용 배경 (추석 야경 테마 대신) */
export function GroupBuyBackdrop({
  variant = "banner",
  className = "",
  heroIllustrationSrc,
}: GroupBuyBackdropProps) {
  const heightClass =
    variant === "hero"
      ? "absolute inset-0"
      : "absolute inset-0 min-h-[inherit]";

  const heroWithArt = variant === "hero" && heroIllustrationSrc;

  return (
    <div aria-hidden className={`pointer-events-none overflow-hidden ${heightClass} ${className}`}>
      {heroWithArt ? (
        <>
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 bg-gradient-to-b from-red-950/85 via-red-900/25 to-black" />
          <div className="absolute inset-x-0 bottom-0 top-[32%] sm:top-[26%] lg:top-[22%]">
            <Image
              src={heroIllustrationSrc}
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-contain object-bottom"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-50 to-transparent sm:h-28" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-600 to-red-800" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(255,255,255,0.18),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_100%,rgba(0,0,0,0.2),transparent_50%)]" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-12deg, #fff 0, #fff 1px, transparent 1px, transparent 14px)",
            }}
          />
        </>
      )}
    </div>
  );
}

export const groupBuyPrimaryButtonClass =
  "inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-3 text-sm font-extrabold text-red-950 shadow-lg shadow-red-900/20 transition hover:scale-[1.02] hover:bg-yellow-300 active:scale-[0.99] sm:px-7 sm:py-3.5 sm:text-base";

export const groupBuyGhostButtonClass =
  "inline-flex items-center justify-center rounded-full border-2 border-white/80 bg-white/10 px-6 py-3 text-sm font-extrabold text-white backdrop-blur-sm transition hover:bg-white/20 sm:text-base";

export const groupBuyOutlineButtonClass =
  "inline-flex items-center justify-center rounded-full border-2 border-red-200 bg-white px-6 py-3 text-sm font-extrabold text-red-800 transition hover:bg-red-50 sm:text-base";

export const groupBuyCardClass =
  "rounded-[1.4rem] border border-red-100 bg-white p-5 shadow-lg shadow-red-950/10 sm:p-6";

export const groupBuyMutedCardClass =
  "rounded-2xl border border-red-100/80 bg-red-50/80 px-4 py-4 sm:px-5 sm:py-5";
