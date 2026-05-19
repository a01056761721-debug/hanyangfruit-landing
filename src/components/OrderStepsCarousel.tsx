"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const AUTO_ADVANCE_MS = 3200;

const ORDER_STEPS = [
  {
    step: "01",
    title: "오픈채팅 입장",
    sub: "빠른 소통",
    imageSrc: "/order/order-flow-01.png",
    imageAlt: "한양과일 오픈채팅방 화면",
    aspectRatio: "1 / 1",
  },
  {
    step: "02",
    title: "오늘 들어온 과일 확인",
    sub: "직접 안내",
    imageSrc: "/order/order-flow-02.png",
    imageAlt: "오늘 입고된 과일 안내 사진",
    aspectRatio: "1 / 1",
  },
  {
    step: "03",
    title: "주문",
    sub: "간편하게",
    imageSrc: "/order/order-flow-03.png",
    imageAlt: "주문 내역과 결제 알림 화면",
    aspectRatio: "1 / 1",
  },
  {
    step: "04",
    title: "당일 배송",
    sub: "신선하게",
    imageSrc: "/order/order-flow-04-delivery-door.png",
    imageAlt: "문 앞에 배송 완료된 과일 사진",
    aspectRatio: "1 / 1",
  },
] as const;

export default function OrderStepsCarousel() {
  const [active, setActive] = useState(0);
  const step = ORDER_STEPS[active];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const id = window.setInterval(() => {
      setActive((current) => (current === ORDER_STEPS.length - 1 ? 0 : current + 1));
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(id);
  }, []);

  const getOffset = (index: number) => {
    const raw = index - active;
    if (raw > ORDER_STEPS.length / 2) return raw - ORDER_STEPS.length;
    if (raw < -ORDER_STEPS.length / 2) return raw + ORDER_STEPS.length;
    return raw;
  };

  const goToNext = () =>
    setActive((current) => (current === ORDER_STEPS.length - 1 ? 0 : current + 1));

  return (
    <div className="relative left-1/2 mt-6 w-screen -translate-x-1/2 sm:mt-8">
      <article className="text-center">
        <button
          type="button"
          onClick={goToNext}
          aria-label="다음 주문 단계 보기"
          className="relative block h-[22rem] w-full overflow-hidden sm:h-[32rem]"
        >
          {ORDER_STEPS.map((item, index) => {
            const offset = getOffset(index);
            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 1;

            return (
              <div
                key={item.step}
                className="absolute inset-y-0 left-1/2 flex w-[92vw] max-w-[34rem] items-center justify-center overflow-visible transition-all duration-700 ease-out sm:w-[58vw] sm:max-w-[46rem]"
                style={{
                  opacity: isVisible ? (isActive ? 1 : 0.58) : 0,
                  transform: `translateX(${offset * 78 - 50}%) scale(${isActive ? 1 : 0.82})`,
                  zIndex: isActive ? 10 : 5 - Math.abs(offset),
                }}
              >
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={1200}
                  height={1200}
                  className="h-auto max-h-full w-auto max-w-full object-contain object-center"
                  sizes="(max-width: 768px) 92vw, 58vw"
                  priority={index === 0}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    objectPosition: "center center",
                  }}
                />
              </div>
            );
          })}
        </button>

        <div className="px-4 pb-3.5 pt-3">
          <p className="text-xs font-black text-[#ffe24a] sm:text-sm">{step.step}</p>
          <p className="mt-1.5 text-lg font-black sm:text-xl">{step.title}</p>
          <p className="mt-1 text-xs font-medium text-white/80 sm:text-sm">{step.sub}</p>

          <div className="mt-3 flex justify-center gap-1.5">
            {ORDER_STEPS.map((item, index) => (
              <button
                key={item.step}
                type="button"
                aria-label={`${item.step} ${item.title} 보기`}
                aria-current={index === active ? "step" : undefined}
                onClick={() => setActive(index)}
                className={`h-2 rounded-full transition ${
                  index === active ? "w-6 bg-[#ffe24a]" : "w-2 bg-white/35 hover:bg-white/55"
                }`}
              />
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
