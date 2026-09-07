import Image from "next/image";

export type ChuseokGiftProduct = {
  code: string;
  title: string;
  specs: string;
  price: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  theme?: "silk" | "blossom" | "frame" | "cloud";
};

type ChuseokProductCardProps = {
  product: ChuseokGiftProduct;
  index: number;
};

/** 추석 선물세트 카드 공통 비율 (세로형 포스터) */
const CARD_ASPECT_CLASS = "aspect-[3/4]";

export default function ChuseokProductCard({ product, index }: ChuseokProductCardProps) {
  return (
    <article className="flex h-full w-full flex-col">
      <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-[#f7f2ea] p-2 shadow-[0_12px_40px_rgba(0,0,0,0.22)] ring-1 ring-[#c9b89a]/45 sm:rounded-[1.15rem] sm:p-2.5">
        <div
          className={`relative ${CARD_ASPECT_CLASS} w-full overflow-hidden rounded-[0.85rem] bg-[#f3ece2] sm:rounded-[0.95rem]`}
        >
          <Image
            src={product.imageSrc}
            alt={product.imageAlt}
            fill
            className="object-contain object-center"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 22rem"
            priority={index < 2}
          />
        </div>
      </div>
    </article>
  );
}
