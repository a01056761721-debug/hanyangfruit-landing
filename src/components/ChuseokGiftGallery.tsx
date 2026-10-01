import Link from "next/link";
import ChuseokProductCard, { type ChuseokGiftProduct } from "@/components/ChuseokProductCard";
import { groupBuyPrimaryButtonClass } from "@/components/GroupBuyDecor";
import { CHUSEOK_ORDER_URL } from "@/lib/site";
import groupBuyData from "@/data/group-buy-preorder.json";

export default function ChuseokGiftGallery() {
  const giftProducts = groupBuyData.products as ChuseokGiftProduct[];

  return (
    <section
      id="gift-products"
      className="relative z-10 mx-auto w-full max-w-5xl scroll-mt-6 px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10"
    >
      <div className="mb-8 text-center sm:mb-10">
        <p className="text-xs font-black uppercase tracking-wide text-red-600 sm:text-sm">
          PRE-ORDER
        </p>
        <h2 className="mt-1 text-xl font-black text-red-950 sm:text-2xl">선주문 상품</h2>
      </div>

      <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:max-w-6xl lg:grid-cols-3 lg:gap-8">
        {giftProducts.map((product, index) => (
          <li key={product.code} className="flex min-w-0">
            <ChuseokProductCard product={product} index={index} />
          </li>
        ))}
      </ul>

      <div className="mt-10 flex justify-center sm:mt-12">
        <Link
          href={CHUSEOK_ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={groupBuyPrimaryButtonClass}
        >
          선주문 주문하기
        </Link>
      </div>
    </section>
  );
}
