"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

type ProductCardImageCarouselProps = {
  images: string[];
  alt: string;
  priority?: boolean;
  badge?: string;
};

export default function ProductCardImageCarousel({
  images,
  alt,
  priority = false,
  badge,
}: ProductCardImageCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback(
    (index: number) => {
      const scroller = scrollerRef.current;
      if (!scroller) return;
      const next = Math.min(Math.max(index, 0), images.length - 1);
      const width = scroller.clientWidth;
      scroller.scrollTo({ left: width * next, behavior: "smooth" });
      setActiveIndex(next);
    },
    [images.length],
  );

  const syncIndex = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller || images.length <= 1) return;

    const width = scroller.clientWidth;
    if (width <= 0) return;
    const index = Math.round(scroller.scrollLeft / width);
    setActiveIndex(Math.min(Math.max(index, 0), images.length - 1));
  }, [images.length]);

  const showControls = images.length > 1;

  return (
    <div className="relative h-full w-full">
      {badge ? (
        <span className="absolute left-2 top-2 z-20 rounded-full bg-red-600 px-2.5 py-1 text-[10px] font-black text-white sm:text-xs">
          {badge}
        </span>
      ) : null}

      <div
        ref={scrollerRef}
        onScroll={syncIndex}
        className="flex h-full w-full touch-pan-x snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label={`${alt} 사진 ${images.length}장`}
      >
        {images.map((src, index) => (
          <div
            key={src}
            className="relative h-full min-w-full flex-[0_0_100%] snap-center snap-always"
          >
            <Image
              src={src}
              alt={`${alt} ${index + 1}`}
              fill
              unoptimized
              draggable={false}
              className="pointer-events-none object-contain object-center select-none"
              sizes="(max-width: 640px) 100vw, 22rem"
              priority={priority && index === 0}
            />
          </div>
        ))}
      </div>

      {showControls ? (
        <>
          <button
            type="button"
            aria-label="이전 사진"
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="absolute left-1.5 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-lg font-bold text-white backdrop-blur-sm transition hover:bg-black/60 disabled:pointer-events-none disabled:opacity-30"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="다음 사진"
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={activeIndex === images.length - 1}
            className="absolute right-1.5 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-lg font-bold text-white backdrop-blur-sm transition hover:bg-black/60 disabled:pointer-events-none disabled:opacity-30"
          >
            ›
          </button>

          <div className="pointer-events-none absolute inset-x-0 bottom-2 z-10 flex justify-center gap-1.5">
            {images.map((src, index) => (
              <button
                key={src}
                type="button"
                aria-label={`${index + 1}번째 사진`}
                onClick={() => scrollToIndex(index)}
                className={`pointer-events-auto h-1.5 rounded-full transition-all ${
                  activeIndex === index ? "w-4 bg-white" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
