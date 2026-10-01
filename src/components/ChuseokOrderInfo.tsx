import { groupBuyCardClass, groupBuyMutedCardClass } from "@/components/GroupBuyDecor";
import groupBuyData from "@/data/group-buy-preorder.json";

export default function ChuseokOrderInfo() {
  const { schedule } = groupBuyData;

  return (
    <section
      id="order-info"
      className="relative z-10 mx-auto w-full max-w-5xl scroll-mt-6 px-4 pt-8 sm:px-6 sm:pt-10"
    >
      <article className={`${groupBuyCardClass} mx-auto max-w-3xl`}>
        <h2 className="text-center text-lg font-black text-red-950 sm:text-xl">
          선주문 · 수령 안내
        </h2>

        <dl className="mt-6 space-y-5 sm:mt-7">
          <div className={`${groupBuyMutedCardClass} border-2 border-red-300 bg-red-50`}>
            <dt className="text-sm font-black text-red-800 sm:text-base">선주문 기간</dt>
            <dd className="mt-1.5 text-base font-black text-red-700 sm:text-lg">
              {schedule.orderPeriod}
            </dd>
          </div>

          <div className={`${groupBuyMutedCardClass} border-2 border-red-600 bg-red-600 text-white`}>
            <dt className="text-sm font-black text-yellow-200 sm:text-base">일괄 수령일</dt>
            <dd className="mt-2 space-y-2 text-sm leading-relaxed sm:text-base">
              <p className="text-lg font-black text-white sm:text-xl">
                선주문 상품은 전부 {schedule.pickupDate} 일괄 수령입니다.
              </p>
              <p className="text-red-100">
                주문 후 바로 배송되지 않으며, 수령일을 따로 지정하기 어렵습니다. 양해 부탁드립니다.
              </p>
            </dd>
          </div>

          <div className={groupBuyMutedCardClass}>
            <dt className="text-sm font-black text-red-800 sm:text-base">합배송 안내</dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-neutral-700 sm:text-base">
              {schedule.pickupDate} 당일 판매하는 과일·야채를 추가 주문하시면 선주문 상품과 함께
              배송받으실 수 있습니다.
            </dd>
          </div>

          <div className={`${groupBuyMutedCardClass} border-2 border-amber-400 bg-amber-50`}>
            <dt className="text-sm font-black text-red-800 sm:text-base">구매 수량 제한</dt>
            <dd className="mt-2 space-y-2 text-sm leading-relaxed text-neutral-800 sm:text-base">
              <ul className="space-y-1.5">
                <li>
                  <strong>채끝</strong> — 1인 최대 4팩 (한정수량)
                </li>
                <li>
                  <strong>안심</strong> — 1인 최대 2팩 (한정수량)
                </li>
                <li>
                  <strong>장어</strong> — 수량 제한 없음
                </li>
              </ul>
              <p className="pt-1 font-bold text-red-900">주문 시 수량 제한을 꼭 확인해 주세요.</p>
            </dd>
          </div>
        </dl>
      </article>
    </section>
  );
}
