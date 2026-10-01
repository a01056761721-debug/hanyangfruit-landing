import type { ReactNode } from "react";
import Link from "next/link";
import { groupBuyPrimaryButtonClass } from "@/components/GroupBuyDecor";
import { CHUSEOK_ORDER_URL } from "@/lib/site";

type Schedule = {
  orderPeriod: string;
  orderDeadline: string;
  pickupDate: string;
};

type GroupBuyPreorderNoticesProps = {
  schedule: Schedule;
  /** 주문 페이지 상단용 — 주문 버튼·마감 강조 */
  variant?: "page" | "orderStrip";
};

const HERO_BANNER_CLASS =
  "flex min-h-[13.5rem] flex-col justify-center rounded-2xl border-2 border-teal-800 bg-gradient-to-br from-teal-900 via-emerald-950 to-teal-950 px-4 py-5 text-center shadow-xl shadow-teal-950/30 sm:min-h-[15.5rem] sm:px-8 sm:py-7";

function PreorderHeroBanner({
  eyebrow,
  titleLine,
  titleHighlight,
  titleSuffix,
  body,
}: {
  eyebrow: string;
  titleLine: string;
  titleHighlight: string;
  titleSuffix?: string;
  body: ReactNode;
}) {
  return (
    <div className={HERO_BANNER_CLASS}>
      <p className="text-sm font-black text-yellow-200 sm:text-base">{eyebrow}</p>
      <p className="mt-2 text-balance text-xl font-black leading-snug text-white sm:text-2xl lg:text-3xl">
        {titleLine}
        <br />
        <span className="text-yellow-300">
          {titleHighlight}
          {titleSuffix ?? ""}
        </span>
      </p>
      <div className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-teal-100/95 sm:text-base">
        {body}
      </div>
    </div>
  );
}

export default function GroupBuyPreorderNotices({
  schedule,
  variant = "page",
}: GroupBuyPreorderNoticesProps) {
  if (variant === "orderStrip") {
    return (
      <div className="rounded-2xl border-2 border-teal-800 bg-gradient-to-br from-teal-900 to-emerald-950 px-4 py-4 text-center shadow-lg sm:px-6 sm:py-5">
        <p className="text-xs font-black uppercase tracking-wider text-yellow-200 sm:text-sm">
          선주문 마감
        </p>
        <p className="mt-1 text-xl font-black text-white sm:text-2xl">
          {schedule.orderDeadline}까지
        </p>
        <p className="mt-2 text-sm font-bold text-yellow-100">
          선주문 상품은 전부 {schedule.pickupDate} 일괄 수령 · 수령일 지정 불가
        </p>
        <Link
          href={CHUSEOK_ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${groupBuyPrimaryButtonClass} mt-4 w-full sm:mt-5 sm:w-auto`}
        >
          선주문 주문하기 →
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-5">
      <PreorderHeroBanner
        eyebrow="꼭 확인해 주세요"
        titleLine="선주문 상품은 전부"
        titleHighlight={`${schedule.pickupDate} 일괄 수령`}
        titleSuffix="입니다"
        body={
          <>
            주문 후 바로 배송되는 상품이 아닙니다. 선주문으로 모은 상품을{" "}
            <strong className="text-white">{schedule.pickupDate} 목요일</strong>에 받아보시는
            방식이며, 수령일은 따로 지정하기 어렵습니다. 양해 부탁드립니다.
          </>
        }
      />

      <PreorderHeroBanner
        eyebrow="꼭 확인해 주세요"
        titleLine="선주문 접수 기간"
        titleHighlight={schedule.orderPeriod}
        body={
          <>
            마감은 <strong className="text-white">{schedule.orderDeadline}</strong>
            입니다. 위 시간 이후 주문은 접수되지 않으니 헷갈리지 않게 확인해 주세요.
          </>
        }
      />

      <PreorderHeroBanner
        eyebrow="꼭 확인해 주세요"
        titleLine={`${schedule.pickupDate} 과일·야채`}
        titleHighlight="합배송 가능"
        body={
          <>
            {schedule.pickupDate} 당일 판매하는 과일·야채를 추가 주문하시면, 선주문 상품과 함께
            배송받으실 수 있습니다.
          </>
        }
      />

      <article className="rounded-2xl border border-teal-200 bg-teal-50/90 px-4 py-4 sm:px-6 sm:py-5">
        <h3 className="text-center text-base font-black text-teal-950 sm:text-lg">
          한정수량 상품입니다
        </h3>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm leading-relaxed text-neutral-700 sm:text-base">
          채끝·안심은 소 한 마리에서 많이 나오는 부위가 아니어서 준비된 수량이 많지 않습니다.
          주문 시 구매 수량 제한을 꼭 확인해 주세요.
        </p>
        <ul className="mx-auto mt-4 flex max-w-md flex-col gap-2 text-sm font-bold text-teal-900 sm:text-base">
          <li className="rounded-xl bg-white px-4 py-3 text-center ring-1 ring-teal-100">
            채끝 — 1인 최대 4팩 (한정수량)
          </li>
          <li className="rounded-xl bg-white px-4 py-3 text-center ring-1 ring-teal-100">
            안심 — 1인 최대 2팩 (한정수량)
          </li>
          <li className="rounded-xl bg-white px-4 py-3 text-center ring-1 ring-teal-100">
            장어 — 수량 제한 없음
          </li>
        </ul>
        <p className="mx-auto mt-3 max-w-md text-center text-sm font-bold text-teal-950">
          주문 시 수량 제한을 꼭 확인해 주세요.
        </p>
      </article>
    </div>
  );
}
