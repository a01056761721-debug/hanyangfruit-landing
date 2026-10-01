type GroupBuyBackdropProps = {
  variant?: "banner" | "hero";
  className?: string;
};

/** 메인 랜딩과 맞춘 공구·선주문용 배경 (추석 야경 테마 대신) */
export function GroupBuyBackdrop({
  variant = "banner",
  className = "",
}: GroupBuyBackdropProps) {
  const heightClass =
    variant === "hero"
      ? "absolute inset-0"
      : "absolute inset-0 min-h-[inherit]";

  return (
    <div aria-hidden className={`pointer-events-none overflow-hidden ${heightClass} ${className}`}>
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
