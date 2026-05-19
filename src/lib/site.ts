import siteConfig from "@/data/site.json";

/** 카카오 채널 채팅 등 기본 링크. `.env`의 `NEXT_PUBLIC_OPEN_CHAT_URL`로 덮어쓸 수 있어요. */
export const OPEN_CHAT_URL =
  process.env.NEXT_PUBLIC_OPEN_CHAT_URL ?? "https://pf.kakao.com/_xkxadfn/chat";

/**
 * 히어로 배경 영상 (public 기준 경로).
 * 운영자가 `src/data/site.json`의 `media.heroVideo`에서 경로를 바꿀 수 있습니다.
 * `.env`에 `NEXT_PUBLIC_HERO_VIDEO_URL`을 두면 그쪽이 최우선으로 사용됩니다.
 */
export const HERO_BG_VIDEO =
  process.env.NEXT_PUBLIC_HERO_VIDEO_URL ?? siteConfig.media.heroVideo;

/** 한양과일 대표 사진 (말풍선 옆). `src/data/site.json` 의 `media.founderImage` 로 관리. */
export const FOUNDER_IMAGE = siteConfig.media.founderImage;

/** "뭐가 다를까요?" 섹션의 소개 영상. `src/data/site.json` 의 `media.differenceVideo` 로 관리. */
export const DIFFERENCE_VIDEO = siteConfig.media.differenceVideo;
