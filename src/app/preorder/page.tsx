import type { Metadata } from "next";
import { redirect } from "next/navigation";
import ChuseokLanding from "@/components/ChuseokLanding";
import { isChuseokCampaignEnabled } from "@/lib/site";

export const metadata: Metadata = {
  title: "한우 채끝 · 안심 · 자포니카 장어 선주문 | 한양과일",
  description:
    "1+ 암소 한우 채끝·안심, 프리미엄 자포니카 장어 선주문. 10월 8일(목) 일괄 수령.",
  openGraph: {
    title: "한우 채끝 · 안심 · 자포니카 장어 선주문 | 한양과일",
    description:
      "1+ 암소 한우 채끝·안심, 프리미엄 자포니카 장어 선주문. 10월 8일(목) 일괄 수령.",
    url: "/preorder",
  },
};

export default function PreorderPage() {
  if (!isChuseokCampaignEnabled) {
    redirect("/");
  }

  return <ChuseokLanding />;
}
