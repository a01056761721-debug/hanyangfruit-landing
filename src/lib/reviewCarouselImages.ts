import reviewsData from "@/data/reviews.json";

/**
 * 후기 캐러셀 이미지 목록.
 *
 * 운영 시 사장님이 직접 관리하는 부분:
 *   - `public/reviews/` 폴더에 사진 파일만 추가/삭제하시면 됩니다.
 *   - 사이트가 빌드될 때 (또는 `npm run dev` 시작 시) 폴더를 스캔해서 자동으로 목록을 만듭니다.
 *   - 정렬 순서는 파일명 오름차순(자연 정렬)입니다.
 *     예) review-01.png, review-02.png, … 또는 2026-05-19-카톡캡쳐.png 같은 자유 형식도 가능.
 */
export const REVIEW_CAROUSEL_IMAGES: readonly string[] = reviewsData.reviewImages;
