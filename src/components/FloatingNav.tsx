"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

type FloatingNavItem = {
  id: string;
  href: string;
  label: string;
  ariaLabel: string;
  icon: ReactNode;
  external?: boolean;
};

type FloatingNavProps = {
  items: FloatingNavItem[];
};

/** 이모지/아이콘 ↔ 글 사이 간격 — 모든 버튼 동일 (4px) */
const ICON_LABEL_GAP = "gap-1";

/**
 * 우측 중앙에 고정되는 빠른 이동 네비.
 * - 모바일(sm 미만): 평소엔 이모지/아이콘만 보이는 원형 버튼. 한 번 탭하면 라벨이 펼쳐지고,
 *   같은 버튼을 다시 탭하면 해당 섹션으로 이동합니다.
 * - PC(sm 이상): 아이콘+글을 좁은 간격으로 붙인 뒤 버튼 안에서 가운데 정렬.
 */
export default function FloatingNav({ items }: FloatingNavProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (expandedId == null) return;
    const handlePointerDown = (event: PointerEvent) => {
      const root = containerRef.current;
      if (!root) return;
      if (event.target instanceof Node && root.contains(event.target)) return;
      setExpandedId(null);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [expandedId]);

  const handleClick =
    (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (typeof window === "undefined") return;
      const isMobile = window.matchMedia("(max-width: 639px)").matches;
      if (isMobile && expandedId !== id) {
        event.preventDefault();
        setExpandedId(id);
      }
    };

  return (
    <div
      ref={containerRef}
      className="fixed right-2.5 top-1/2 z-50 flex -translate-y-1/2 flex-col items-end gap-1.5 sm:right-5 sm:gap-2"
    >
      {items.map((item) => {
        const isExpanded = expandedId === item.id;
        return (
          <Link
            key={item.id}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            aria-label={item.ariaLabel}
            aria-expanded={isExpanded || undefined}
            onClick={handleClick(item.id)}
            className={`inline-flex items-center justify-center overflow-hidden rounded-full bg-red-600 text-xs font-black text-white shadow-xl shadow-red-900/25 ring-2 ring-white transition-all duration-200 hover:scale-105 hover:bg-red-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-200 active:scale-95 active:bg-red-800 sm:h-11 sm:w-36 sm:px-0 sm:text-sm ${
              isExpanded ? "h-9 w-28 px-3" : "h-9 w-9 px-0"
            } [&_svg]:h-4 [&_svg]:w-4 sm:[&_svg]:!h-5 sm:[&_svg]:!w-5`}
          >
            <span
              className={`inline-flex shrink-0 items-center justify-center ${
                isExpanded ? ICON_LABEL_GAP : "gap-0"
              } sm:gap-1`}
            >
              <span
                aria-hidden
                className="flex shrink-0 items-center justify-center text-sm leading-none sm:text-base"
              >
                {item.icon}
              </span>
              <span
                className={`shrink-0 overflow-hidden whitespace-nowrap transition-all duration-200 ${
                  isExpanded ? "max-w-[80px] opacity-100" : "max-w-0 opacity-0"
                } sm:max-w-none sm:opacity-100`}
              >
                {item.label}
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export function InstagramIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="shrink-0" fill="none">
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4.5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function YouTubeIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="shrink-0" fill="none">
      <path
        d="M21 8.2c-.2-1.2-.9-2-2.1-2.2C17.2 5.6 12 5.6 12 5.6s-5.2 0-6.9.4C3.9 6.2 3.2 7 3 8.2 2.7 10 2.7 12 2.7 12s0 2 .3 3.8c.2 1.2.9 2 2.1 2.2 1.7.4 6.9.4 6.9.4s5.2 0 6.9-.4c1.2-.2 1.9-1 2.1-2.2.3-1.8.3-3.8.3-3.8s0-2-.3-3.8Z"
        fill="currentColor"
      />
      <path d="M10.1 14.7V9.3l5 2.7-5 2.7Z" fill="#dc2626" />
    </svg>
  );
}
