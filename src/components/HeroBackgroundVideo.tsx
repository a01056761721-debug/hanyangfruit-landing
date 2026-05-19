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
 */
export default function HeroBackgroundVideo({ posterSrc, posterAlt }: HeroBackgroundVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);
  const [videoOk, setVideoOk] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!mounted || !el || !videoOk) return;

    const respectMotion = () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        el.pause();
        el.removeAttribute("autoplay");
        return;
      }
      el.play().catch(() => {});
    };

    respectMotion();
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    mq.addEventListener("change", respectMotion);
    return () => mq.removeEventListener("change", respectMotion);
  }, [mounted, videoOk]);

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
      {mounted && videoOk ? (
        <video
          ref={ref}
          className="absolute inset-0 z-[1] h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
          onError={() => setVideoOk(false)}
        >
          <source src={HERO_BG_VIDEO} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
