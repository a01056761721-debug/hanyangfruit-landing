"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { HERO_BG_VIDEO } from "@/lib/site";

type HeroBackgroundVideoProps = {
  posterSrc: string;
  posterAlt: string;
};

/**
 * 히어로 섹션 전체를 덮는 무음 루프 배경 영상(포스터 폴백).
 * iOS Safari 등 모바일에서도 안정적으로 자동재생되도록 명시적으로 muted/play를 호출합니다.
 */
export default function HeroBackgroundVideo({ posterSrc, posterAlt }: HeroBackgroundVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [videoOk, setVideoOk] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || !videoOk) return;

    el.muted = true;
    el.setAttribute("muted", "");
    el.setAttribute("playsinline", "");
    el.setAttribute("webkit-playsinline", "");

    const tryPlay = () => {
      const playPromise = el.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    };

    const respectMotion = () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        el.pause();
        el.removeAttribute("autoplay");
        return;
      }
      tryPlay();
    };

    respectMotion();

    const handleVisibility = () => {
      if (!document.hidden) tryPlay();
    };
    const handleUserGesture = () => tryPlay();

    document.addEventListener("visibilitychange", handleVisibility);
    document.addEventListener("touchstart", handleUserGesture, { once: true, passive: true });
    document.addEventListener("click", handleUserGesture, { once: true });

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    mq.addEventListener("change", respectMotion);
    return () => {
      mq.removeEventListener("change", respectMotion);
      document.removeEventListener("visibilitychange", handleVisibility);
      document.removeEventListener("touchstart", handleUserGesture);
      document.removeEventListener("click", handleUserGesture);
    };
  }, [videoOk]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {!videoOk ? (
        <Image
          src={posterSrc}
          alt={posterAlt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      ) : null}
      {videoOk ? (
        <video
          ref={ref}
          className="absolute inset-0 z-[1] h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          disablePictureInPicture
          preload="auto"
          aria-hidden
          onError={() => setVideoOk(false)}
        >
          <source src={HERO_BG_VIDEO} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
