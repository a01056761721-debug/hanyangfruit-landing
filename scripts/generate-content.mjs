// 빌드/개발 서버 실행 전에 호출되어 동적 컨텐츠를 정적 데이터 파일로 만들어줍니다.
// 현재는 후기 이미지 목록 자동 스캔만 담당합니다.
//
// 사용법: package.json 의 `predev`, `prebuild` 에 등록되어 있으므로 직접 실행할 필요는 없습니다.
// 수동 실행하려면 `node scripts/generate-content.mjs`.

import { mkdirSync, readdirSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");

const reviewsDir = join(projectRoot, "public", "reviews");
const outputDir = join(projectRoot, "src", "data");
const outputFile = join(outputDir, "reviews.json");

const ACCEPTED_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".avif",
  ".gif",
]);

function naturalSort(a, b) {
  return a.localeCompare(b, "ko", { numeric: true, sensitivity: "base" });
}

function scanReviewImages() {
  if (!existsSync(reviewsDir)) {
    return [];
  }
  return readdirSync(reviewsDir, { withFileTypes: true })
    .filter((entry) => {
      if (!entry.isFile()) return false;
      const dot = entry.name.lastIndexOf(".");
      if (dot < 0) return false;
      return ACCEPTED_EXTENSIONS.has(entry.name.slice(dot).toLowerCase());
    })
    .map((entry) => entry.name)
    .sort(naturalSort)
    .map((name) => `/reviews/${name}`);
}

function main() {
  const reviewImages = scanReviewImages();
  mkdirSync(outputDir, { recursive: true });
  const payload = {
    generatedAt: new Date().toISOString(),
    reviewImages,
  };
  writeFileSync(outputFile, JSON.stringify(payload, null, 2) + "\n", "utf8");
  console.log(
    `[generate-content] ${reviewImages.length}개의 후기 이미지를 ${outputFile} 에 기록했습니다.`,
  );
}

main();
