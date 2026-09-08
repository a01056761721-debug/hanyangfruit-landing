import Link from "next/link";
import { chuseokPrimaryButtonClass } from "@/components/ChuseokDecor";
import { CHUSEOK_ORDER_URL } from "@/lib/site";

export default function ChuseokMobileOrderBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-amber-400/25 bg-indigo-950/95 px-4 py-3 backdrop-blur-md sm:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <Link
        href={CHUSEOK_ORDER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${chuseokPrimaryButtonClass} w-full py-3.5 text-base`}
      >
        주문하기
      </Link>
    </div>
  );
}
