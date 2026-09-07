import Link from "next/link";
import ChuseokProductCard, { type ChuseokGiftProduct } from "@/components/ChuseokProductCard";
import { chuseokPrimaryButtonClass } from "@/components/ChuseokDecor";
import { OPEN_CHAT_URL } from "@/lib/site";
import chuseokGiftsData from "@/data/chuseok-gifts.json";

export default function ChuseokGiftGallery() {
  const { products } = chuseokGiftsData;
  const giftProducts = products as ChuseokGiftProduct[];

  return (
    <section
      id="gift-products"
      className="relative z-10 mx-auto w-full max-w-5xl scroll-mt-6 px-4 pb-16 pt-2 sm:px-6 sm:pb-20 sm:pt-4"
    >
      <div className="mb-8 text-center sm:mb-10">
        <h2 className="text-xl font-black text-white sm:text-2xl">추석 선물세트 라인업</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-amber-100/75 sm:text-base">
          기업·가족 선물에 어울리는 과일 세트를 준비했습니다.
        </p>
      </div>

      <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:max-w-5xl lg:gap-8">
        {giftProducts.map((product, index) => (
          <li key={product.code} className="flex min-w-0">
            <ChuseokProductCard product={product} index={index} />
          </li>
        ))}
      </ul>

      <div className="mt-10 flex justify-center sm:mt-12">
        <Link
          href={OPEN_CHAT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={chuseokPrimaryButtonClass}
        >
          주문하기
        </Link>
      </div>
    </section>
  );
}
