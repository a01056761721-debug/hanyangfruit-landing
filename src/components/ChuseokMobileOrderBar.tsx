import Link from "next/link";
import { groupBuyPrimaryButtonClass } from "@/components/GroupBuyDecor";
import { CHUSEOK_ORDER_URL } from "@/lib/site";
import groupBuyData from "@/data/group-buy-preorder.json";

export default function ChuseokMobileOrderBar() {
  const { schedule } = groupBuyData;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-red-200 bg-white/95 px-4 py-3 backdrop-blur-md sm:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <p className="mb-2 text-center text-[11px] font-black text-red-800">
        {schedule.orderDeadline} 마감 · {schedule.pickupDate} 수령
      </p>
      <Link
        href={CHUSEOK_ORDER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${groupBuyPrimaryButtonClass} w-full py-3.5 text-base`}
      >
        선주문하기
      </Link>
    </div>
  );
}
