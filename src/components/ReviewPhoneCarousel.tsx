"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { REVIEW_CAROUSEL_IMAGES } from "@/lib/reviewCarouselImages";

const GAP_PX = 12;
const AUTO_ADVANCE_MS = 3800;

function SlideImage({ src, shrink = false }: { src: string; shrink?: boolean }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-1 bg-gradient-to-b from-slate-200 to-slate-300 px-3 text-center text-xs font-medium text-slate-500">
        후기 캡처
        <span className="text-[11px] text-slate-400">이미지를 넣으면 여기에 표시됩니다</span>
      </div>
    );
  }
  if (shrink) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-black p-1.5">
        <img
          src={src}
          alt=""
          className="h-full w-full object-contain object-center"
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }
  return (
    <img
      src={src}
      alt=""
      className="h-full w-full object-cover object-top"
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

/**
 * 후기 캡처가 가로로 이동하며 가운데 휴대폰 프레임(베젤) 안에 맞춰지는 캐러셀.
 */
export default function ReviewPhoneCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [viewportW, setViewportW] = useState(0);
  const [slideW, setSlideW] = useState(280);
  const [active, setActive] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  const n = REVIEW_CAROUSEL_IMAGES.length;
  const stride = slideW + GAP_PX;
  const translateX =
    viewportW > 0 && stride > 0 ? viewportW / 2 - active * stride - slideW / 2 : 0;

  const measure = useCallback(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    setViewportW(vp.offsetWidth);
    const first = vp.querySelector<HTMLElement>("[data-carousel-slide]");
    if (first?.offsetWidth) setSlideW(first.offsetWidth);
  }, []);

  useLayoutEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (viewportRef.current) ro.observe(viewportRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduceMotion(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  useEffect(() => {
    if (reduceMotion || n <= 1) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % n);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [n, reduceMotion]);

  const bezel = 10;
  const frameW = slideW + bezel * 2;
  const frameH = slideW * (19.5 / 9) + bezel * 2;

  return (
    <div className="relative mx-auto mt-7 w-full max-w-5xl sm:mt-9">
      <div
        ref={viewportRef}
        className="relative mx-auto w-full overflow-hidden"
        style={{ height: Math.min(frameH + 32, 700) }}
      >
        {/* 좌우 페이드 */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-30 w-10 bg-gradient-to-r from-white to-transparent sm:w-16"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-30 w-10 bg-gradient-to-l from-white to-transparent sm:w-16"
        />

        <div
          className="absolute left-0 top-1/2 flex gap-3 will-change-transform"
          style={{
            transform: `translateX(${translateX}px) translateY(-50%)`,
            transition: reduceMotion ? "none" : "transform 0.75s cubic-bezier(0.25, 0.9, 0.32, 1)",
          }}
        >
          {REVIEW_CAROUSEL_IMAGES.map((src, i) => (
            <button
              key={src}
              type="button"
              data-carousel-slide={i === 0 ? "1" : undefined}
              aria-label={`${i + 1}번째 후기 사진 보기`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => setActive(i)}
              className="w-[min(78vw,280px)] shrink-0 cursor-pointer overflow-hidden rounded-[1.35rem] bg-slate-200 p-0 text-left shadow-lg ring-1 ring-slate-300/60 transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 sm:w-[min(58vw,320px)] sm:rounded-[1.55rem]"
              style={{ aspectRatio: "9 / 19.5" }}
            >
              <SlideImage src={src} shrink={i === 8} />
            </button>
          ))}
        </div>

        {/* 가운데 휴대폰 베젤·노치 (슬라이드 위 레이어) */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
          style={{ width: frameW, height: frameH }}
        >
          <div
            className="absolute inset-0 rounded-[2.25rem] border-[10px] border-slate-900 shadow-[0_18px_44px_-10px_rgba(0,0,0,0.42)] sm:rounded-[2.55rem]"
            style={{ boxSizing: "border-box" }}
          />
          <div className="absolute left-1/2 top-[9px] z-10 h-[20px] w-[84px] -translate-x-1/2 rounded-full bg-slate-900 sm:top-[10px] sm:h-[22px] sm:w-[92px]" />
        </div>
      </div>

      <div className="mx-auto mt-4 flex max-w-sm items-center px-8">
        <input
          type="range"
          min={0}
          max={Math.max(0, n - 1)}
          value={active}
          aria-label="후기 사진 위치 조절"
          onChange={(event) => setActive(Number(event.currentTarget.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-red-100 outline-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-10 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-red-600 [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-10 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-red-600"
        />
      </div>
    </div>
  );
}
