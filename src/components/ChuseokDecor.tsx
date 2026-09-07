export const CHUSEOK_STAR_POSITIONS = [
  { top: "8%", left: "6%", size: "h-1 w-1" },
  { top: "14%", left: "15%", size: "h-0.5 w-0.5" },
  { top: "6%", left: "38%", size: "h-1 w-1" },
  { top: "12%", left: "52%", size: "h-0.5 w-0.5" },
  { top: "10%", left: "68%", size: "h-1 w-1" },
  { top: "18%", left: "82%", size: "h-0.5 w-0.5" },
  { top: "24%", left: "92%", size: "h-1 w-1" },
  { top: "42%", left: "4%", size: "h-0.5 w-0.5" },
  { top: "55%", left: "88%", size: "h-1 w-1" },
] as const;

export function ChuseokCloud({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 48"
      className={className}
      fill="currentColor"
    >
      <path d="M25 36c-11 0-20-8-20-18S14 0 25 0c3 0 6 1 8 2 4-8 14-12 23-8 5 2 8 6 9 11 9 1 16 9 16 19s-7 18-16 18H25z" />
    </svg>
  );
}

type ChuseokNightBackdropProps = {
  /** 큰 보름달 표시 여부 */
  showMoon?: boolean;
  /** 달 크기·위치 프리셋 */
  moonVariant?: "banner" | "hero" | "footer";
  className?: string;
};

export function ChuseokNightBackdrop({
  showMoon = true,
  moonVariant = "banner",
  className = "",
}: ChuseokNightBackdropProps) {
  const moonClass =
    moonVariant === "hero"
      ? "pointer-events-none absolute -right-8 top-8 h-40 w-40 rounded-full bg-gradient-to-br from-amber-100 via-amber-300 to-amber-500 shadow-[0_0_80px_rgba(251,191,36,0.5)] sm:right-8 sm:top-12 sm:h-52 sm:w-52 lg:h-60 lg:w-60"
      : moonVariant === "footer"
        ? "pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-gradient-to-br from-amber-200/80 via-amber-400/60 to-amber-500/40 shadow-[0_0_40px_rgba(251,191,36,0.3)] sm:h-36 sm:w-36"
        : "pointer-events-none absolute left-3 top-1/2 z-0 h-32 w-32 -translate-y-1/2 rounded-full bg-gradient-to-br from-amber-100 via-amber-300 to-amber-500 opacity-95 shadow-[0_0_60px_rgba(251,191,36,0.55)] sm:left-5 sm:h-40 sm:w-40 lg:h-44 lg:w-44";

  const moonGlowClass =
    moonVariant === "banner"
      ? "absolute inset-0 bg-[radial-gradient(ellipse_at_18%_20%,rgba(251,191,36,0.35),transparent_55%)]"
      : "absolute inset-0 bg-[radial-gradient(ellipse_at_80%_15%,rgba(251,191,36,0.32),transparent_55%)]";

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-[#4a1020] to-amber-950" />
      <div className={moonGlowClass} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_12%_88%,rgba(220,38,38,0.22),transparent_50%)]" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fde68a 0, #fde68a 1px, transparent 1px, transparent 12px)",
        }}
      />

      {CHUSEOK_STAR_POSITIONS.map((star, index) => (
        <span
          key={index}
          className={`absolute rounded-full bg-amber-100/75 ${star.size}`}
          style={{ top: star.top, left: star.left }}
        />
      ))}

      {showMoon ? <div className={moonClass} /> : null}

      <ChuseokCloud className="absolute -left-4 bottom-6 h-10 w-24 text-white/10 sm:h-12 sm:w-28" />
      <ChuseokCloud className="absolute bottom-10 left-[26%] h-8 w-20 text-white/12 sm:h-10 sm:w-24" />
      <ChuseokCloud className="absolute right-[18%] top-8 h-9 w-20 text-white/10 sm:h-11 sm:w-24" />
    </div>
  );
}

export const chuseokPrimaryButtonClass =
  "inline-flex items-center justify-center rounded-full border border-amber-200/30 bg-gradient-to-b from-amber-200 to-amber-400 px-6 py-3 text-sm font-extrabold text-red-950 shadow-lg shadow-amber-900/30 transition hover:brightness-110 sm:px-7 sm:py-3.5 sm:text-base";

export const chuseokGhostButtonClass =
  "inline-flex items-center justify-center rounded-full border border-amber-300/35 bg-white/5 px-6 py-3 text-sm font-extrabold text-amber-100 backdrop-blur-sm transition hover:bg-white/10 sm:text-base";

export const chuseokGlassCardClass =
  "rounded-[1.4rem] border border-amber-400/25 bg-white/5 p-5 shadow-lg shadow-indigo-950/20 backdrop-blur-md sm:p-6";
