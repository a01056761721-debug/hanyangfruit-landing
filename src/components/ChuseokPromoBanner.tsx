import Link from "next/link";
import {
  ChuseokNightBackdrop,
  chuseokPrimaryButtonClass,
} from "@/components/ChuseokDecor";

export default function ChuseokPromoBanner() {
  return (
    <Link
      href="/chuseok"
      className="group relative block min-h-[11.5rem] overflow-hidden rounded-[1.75rem] shadow-xl shadow-indigo-950/25 ring-2 ring-amber-400/40 transition hover:scale-[1.01] hover:shadow-2xl hover:ring-amber-300/60 sm:min-h-[12.5rem] lg:min-h-[13.5rem]"
    >
      <ChuseokNightBackdrop moonVariant="banner" />

      <div className="pointer-events-none absolute bottom-3 right-5 text-2xl opacity-75 sm:bottom-4 sm:right-7 sm:text-3xl">
        🌾
      </div>

      <div className="relative z-10 flex min-h-[inherit] flex-col justify-center gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8 sm:py-11 lg:px-10 lg:py-12">
        <div className="min-w-0 flex-1">
          <p className="text-balance text-xl font-black leading-relaxed text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] sm:text-2xl sm:leading-snug lg:text-[1.75rem] lg:leading-snug">
            이쁘기만한 선물세트에 실망하셨다면
            <br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-100 to-yellow-200 bg-clip-text text-transparent drop-shadow-none">
              추석 선물세트도 한양과일에서 찾아 보세요.
            </span>
          </p>
        </div>

        <span
          className={`${chuseokPrimaryButtonClass} w-full shrink-0 sm:w-auto group-hover:brightness-110`}
        >
          선물세트 보러가기 →
        </span>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1 bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />
    </Link>
  );
}
