import { groupBuyCardClass, groupBuyMutedCardClass } from "@/components/GroupBuyDecor";

const FIT_ITEMS = [
  "공구 가격·품질을 한양과일 기준으로 받고 싶은 분",
  "입고 전에 미리 예약해 두고 싶은 분",
  "장어·한우 등 인기 품목을 놓치고 싶지 않은 분",
  "주문·배송 문의를 빠르게 해결받고 싶은 분",
] as const;

export default function ChuseokGiftAudience() {
  return (
    <section
      id="gift-audience"
      className="relative z-10 mx-auto w-full max-w-5xl scroll-mt-6 px-4 pt-4 sm:px-6 sm:pt-6"
    >
      <article className={`${groupBuyCardClass} mx-auto max-w-3xl`}>
        <h2 className="text-center text-base font-black leading-snug text-red-950 sm:text-lg">
          <span aria-hidden className="mr-1.5">
            📦
          </span>
          이런 분들께 잘 맞는 공구 선주문입니다
        </h2>

        <ul className="mt-6 space-y-3 sm:mt-7">
          {FIT_ITEMS.map((item) => (
            <li
              key={item}
              className={`flex gap-2.5 text-sm leading-relaxed text-neutral-700 sm:text-base ${groupBuyMutedCardClass}`}
            >
              <span aria-hidden className="shrink-0 font-black text-red-600">
                ✔
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center text-sm font-bold leading-relaxed text-red-900 sm:mt-7 sm:text-base">
          선주문은 수량 마감 시 조기 종료될 수 있습니다.
          <br />
          궁금한 점은 카카오 채널로 편하게 문의해 주세요.
        </p>
      </article>
    </section>
  );
}
