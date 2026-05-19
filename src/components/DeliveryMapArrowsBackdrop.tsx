"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

/** 허브 → 끝까지 그리는 시간 */
const ROUTE_DRAW_SEC = 3.1;
/** 도착 후 전체 루트·차를 잠깐 유지 */
const ROUTE_HOLD_SEC = 0.45;
const ROUTE_CYCLE_SEC = ROUTE_DRAW_SEC + ROUTE_HOLD_SEC;
/** 빨간 선은 차보다 앞서지 않고 차 위치까지만 따라감 */
const ROUTE_LINE_LEAD_PX = 0;

/** 허브(402,268)에서 뻗는 부드러운 곡선 — 4갈래 */
const routePaths = [
  "M 402 268 Q 506 262 568 292",
  "M 402 268 Q 356 196 312 122",
  "M 402 268 Q 318 252 236 286",
  "M 402 268 Q 480 196 538 170",
] as const;

function getPartialPathD(path: SVGPathElement, dist: number) {
  const start = path.getPointAtLength(0);
  if (dist <= 0) return `M ${start.x} ${start.y}`;

  const steps = Math.max(2, Math.ceil(dist / 2));
  const points = Array.from({ length: steps + 1 }, (_, step) =>
    path.getPointAtLength((dist * step) / steps),
  );

  return points
    .map((point, i) => `${i === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");
}

/**
 * 서울 구 단위 지도 이미지 위 배송 루트 장식.
 * 호장(경로 길이) 기준으로 선·차를 같은 `dist`로 맞춤 — 곡선에서도 선이 차를 따라감.
 */
export default function DeliveryMapArrowsBackdrop() {
  const [pathLens, setPathLens] = useState<number[] | null>(null);
  const lastTruckAnglesRef = useRef<number[]>([]);

  useLayoutEffect(() => {
    const lens = routePaths.map((_, i) => {
      const el = document.getElementById(
        `hf-delivery-route-${i}`,
      ) as SVGPathElement | null;
      return el?.getTotalLength() ?? 0;
    });
    if (lens.some((l) => l <= 0)) return;
    setPathLens(lens);
  }, []);

  useLayoutEffect(() => {
    if (!pathLens || pathLens.length !== routePaths.length) return;
    const routeSpeedPxPerSec = Math.max(...pathLens) / ROUTE_DRAW_SEC;
    let raf = 0;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      const t = (performance.now() / 1000) % ROUTE_CYCLE_SEC;

      for (let i = 0; i < routePaths.length; i++) {
        const len = pathLens[i];
        const motion = document.getElementById(
          `hf-delivery-route-${i}`,
        ) as SVGPathElement | null;
        const line = document.getElementById(
          `hf-delivery-route-line-${i}`,
        ) as SVGPathElement | null;
        const truck = document.getElementById(
          `hf-delivery-truck-${i}`,
        ) as SVGGElement | null;
        if (!motion || !line || !truck || len <= 0) continue;

        const dist =
          t <= ROUTE_DRAW_SEC ? Math.min(len, t * routeSpeedPxPerSec) : len;
        const lineDist =
          dist <= 0 ? 0 : Math.min(len, dist + ROUTE_LINE_LEAD_PX);

        line.setAttribute("d", getPartialPathD(motion, Math.min(lineDist, len)));

        const truckDist = Math.min(Math.max(0, dist), len);
        const eps = Math.max(2, len * 0.015);
        const p = motion.getPointAtLength(truckDist);
        const isMoving = truckDist < len - 0.5;
        let angle = lastTruckAnglesRef.current[i];

        if (isMoving || angle == null) {
          const pA = motion.getPointAtLength(Math.max(0, truckDist - eps));
          const pB =
            truckDist <= eps
              ? motion.getPointAtLength(Math.min(len, truckDist + eps))
              : p;
          angle = (Math.atan2(pB.y - pA.y, pB.x - pA.x) * 180) / Math.PI + 180;
          lastTruckAnglesRef.current[i] = angle;
        }

        truck.setAttribute(
          "transform",
          `translate(${p.x},${p.y}) rotate(${angle})`,
        );
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [pathLens]);

  /** 허브 기준 오른쪽으로 뻗는 두 갈래 — 이모지 상하반전 */
  const flipEmojiVertical = (i: number) => i === 0 || i === 3;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/seoul-gu-map.png"
          alt=""
          fill
          className="object-cover object-center opacity-[0.28]"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/58 via-white/25 to-red-50/45" />

      <svg
        className="hf-delivery-map-svg absolute left-1/2 top-1/2 min-h-full min-w-[118%] -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 800 450"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {routePaths.map((d, i) => (
            <path
              key={`route-def-${i}`}
              id={`hf-delivery-route-${i}`}
              d={d}
              fill="none"
            />
          ))}
          <radialGradient id="hf-delivery-hub" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(220 38 38 / 0.35)" />
            <stop offset="70%" stopColor="rgb(248 113 113 / 0.12)" />
            <stop offset="100%" stopColor="rgb(239 68 68 / 0)" />
          </radialGradient>
        </defs>

        <circle cx="402" cy="268" r="44" fill="url(#hf-delivery-hub)" />

        {routePaths.map((d, i) => {
          const len = pathLens?.[i];
          return (
            <g key={`route-g-${i}`}>
              {len != null ? (
                <path
                  id={`hf-delivery-route-line-${i}`}
                  d="M 402 268"
                  fill="none"
                  className="hf-delivery-route-track stroke-red-600 [filter:none]"
                  strokeLinecap="round"
                />
              ) : null}
              {len != null ? (
                <g id={`hf-delivery-truck-${i}`}>
                  <text
                    className="hf-delivery-emoji-truck select-none"
                    fontSize="22"
                    textAnchor="middle"
                    dominantBaseline="central"
                    transform={flipEmojiVertical(i) ? "scale(1, -1)" : undefined}
                    style={{
                      fontFamily:
                        "system-ui, 'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', sans-serif",
                    }}
                  >
                    🚚
                  </text>
                </g>
              ) : null}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
