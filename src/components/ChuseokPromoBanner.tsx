import Link from "next/link";
import { GroupBuyBackdrop, groupBuyPrimaryButtonClass } from "@/components/GroupBuyDecor";
import groupBuyData from "@/data/group-buy-preorder.json";

export default function ChuseokPromoBanner() {
  const { schedule } = groupBuyData;

  return (
    <Link
      href="/chuseok"
      className="group relative block min-h-[11.5rem] overflow-hidden rounded-[1.75rem] shadow-xl shadow-red-900/25 ring-2 ring-white/30 transition hover:scale-[1.01] hover:shadow-2xl hover:ring-white/50 sm:min-h-[12.5rem] lg:min-h-[14rem]"
    >
      <GroupBuyBackdrop variant="banner" />

      <div className="relative z-10 flex min-h-[inherit] flex-col justify-center gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8 sm:py-10 lg:px-10">
        <div className="min-w-0 flex-1">
          <p className="text-xs font-black uppercase tracking-wider text-yellow-200/95 sm:text-sm">
            {groupBuyData.tagline}
          </p>
          <p className="mt-2 text-balance text-xl font-black leading-relaxed text-white sm:text-2xl lg:text-[1.65rem]">
            {groupBuyData.pageTitle}
            <br />
            <span className="text-yellow-300">{schedule.orderDeadline} 마감</span>
          </p>
          <p className="mt-2 text-sm font-bold text-white/90">
            {schedule.pickupDate} 일괄 수령 · 과일·야채 합배송 가능
          </p>
        </div>

        <span
          className={`${groupBuyPrimaryButtonClass} w-full shrink-0 sm:w-auto group-hover:brightness-105`}
        >
          선주문 보러가기 →
        </span>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1 bg-gradient-to-r from-transparent via-yellow-300/80 to-transparent" />
    </Link>
  );
}
