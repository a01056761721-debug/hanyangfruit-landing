"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const DEFAULT_INTERVAL_MS = 2600;

type EmpathyImageSlideshowProps = {
  images: readonly string[];
  alt: string;
  sizes?: string;
  intervalMs?: number;
  priority?: boolean;
};

type Listener = (frame: number) => void;

const listenersByInterval = new Map<number, Set<Listener>>();
const timerByInterval = new Map<
  number,
  { timeoutId?: number; intervalId?: number }
>();

const computeFrame = (intervalMs: number) =>
  Math.floor(Date.now() / intervalMs);

function subscribe(intervalMs: number, cb: Listener) {
  let set = listenersByInterval.get(intervalMs);
  if (!set) {
    set = new Set();
    listenersByInterval.set(intervalMs, set);
  }
  set.add(cb);

  if (!timerByInterval.has(intervalMs)) {
    const entry: { timeoutId?: number; intervalId?: number } = {};
    timerByInterval.set(intervalMs, entry);

    const tick = () => {
      const frame = computeFrame(intervalMs);
      listenersByInterval.get(intervalMs)?.forEach((listener) => listener(frame));
    };

    const delayToBoundary = intervalMs - (Date.now() % intervalMs);
    entry.timeoutId = window.setTimeout(() => {
      tick();
      entry.intervalId = window.setInterval(tick, intervalMs);
    }, delayToBoundary);
  }

  return () => {
    const subscribers = listenersByInterval.get(intervalMs);
    if (!subscribers) return;
    subscribers.delete(cb);
    if (subscribers.size === 0) {
      const entry = timerByInterval.get(intervalMs);
      if (entry) {
        if (entry.timeoutId !== undefined) window.clearTimeout(entry.timeoutId);
        if (entry.intervalId !== undefined) window.clearInterval(entry.intervalId);
      }
      timerByInterval.delete(intervalMs);
      listenersByInterval.delete(intervalMs);
    }
  };
}

/**
 * 공감 카드용 이미지 자동 순환 슬라이드.
 * 동일한 `intervalMs`를 사용하는 모든 인스턴스는 모듈 스코프의 단일 타이머를 공유해서
 * 정확히 같은 순간에 같은 인덱스로 전환됩니다.
 */
export default function EmpathyImageSlideshow({
  images,
  alt,
  sizes,
  intervalMs = DEFAULT_INTERVAL_MS,
  priority = false,
}: EmpathyImageSlideshowProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setActive(0);
      return;
    }

    const apply = (frame: number) => {
      setActive(frame % images.length);
    };

    apply(computeFrame(intervalMs));
    return subscribe(intervalMs, apply);
  }, [images.length, intervalMs]);

  if (images.length === 0) return null;

  return (
    <>
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={index === active ? alt : ""}
          fill
          className={`object-cover ${index === active ? "opacity-100" : "opacity-0"}`}
          sizes={sizes}
          priority={priority && index === 0}
          loading="eager"
          aria-hidden={index === active ? undefined : true}
        />
      ))}
    </>
  );
}
