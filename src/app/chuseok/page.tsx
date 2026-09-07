import type { Metadata } from "next";
import ChuseokLanding from "@/components/ChuseokLanding";

export const metadata: Metadata = {
  title: "추석 선물세트 | 한양과일",
  description:
    "2026 추석 한정, 한양과일 추석 선물세트. 새벽 경매에서 직접 고른 백화점급 상품을 정성껏 담았습니다.",
  openGraph: {
    title: "추석 선물세트 | 한양과일",
    description:
      "2026 추석 한정, 한양과일 추석 선물세트. 새벽 경매에서 직접 고른 백화점급 상품을 정성껏 담았습니다.",
    url: "/chuseok",
  },
};

export default function ChuseokPage() {
  return <ChuseokLanding />;
}
