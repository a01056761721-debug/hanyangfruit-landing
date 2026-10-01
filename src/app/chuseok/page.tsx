import { redirect } from "next/navigation";

/** 예전 주소(/chuseok) → 선주문 페이지(/preorder) */
export default function ChuseokLegacyRedirect() {
  redirect("/preorder");
}
