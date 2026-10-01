import Image from "next/image";
import ProductCardImageCarousel from "@/components/ProductCardImageCarousel";

export type ProductPriceLine =
  | string
  | {
      spec: string;
      price: string;
      compareAtPrice?: string;
      discountLabel?: string;
    };

export type ChuseokGiftProduct = {
  code: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  /** 여러 장이면 카드 상단 사진 영역에서 넘겨 보기 */
  imageSrcs?: string[];
  theme?: "silk" | "blossom" | "frame" | "cloud";
  badge?: string;
  priceLines: ProductPriceLine[];
  /** PRE 코드 옆 안내 (예: 실제 작업 사진) */
  photoNote?: string;
  /** 상품명 아래 보조 줄 (예: 구성품 안내) */
  titleSubline?: string;
  purchaseLimit?: string;
  /** @deprecated 단일 가격 표시 — priceLines 사용 */
  specs?: string;
  price?: string;
};

type ChuseokProductCardProps = {
  product: ChuseokGiftProduct;
  index: number;
};

/** 선주문 채끝 2번 사진(871×1024) 기준 비율 */
const CARD_ASPECT_CLASS = "aspect-[871/1024]";

const priceLineClass = "text-sm font-black leading-snug text-red-700 sm:text-base";

function ProductPriceLineItem({ line }: { line: ProductPriceLine }) {
  if (typeof line === "string") {
    return <li className={priceLineClass}>{line}</li>;
  }

  return (
    <li className={priceLineClass}>
      {line.spec} —{" "}
      {line.compareAtPrice ? (
        <span className="mr-1 font-bold text-neutral-500 line-through decoration-red-500/70">
          {line.compareAtPrice}
        </span>
      ) : null}
      <span className="mr-0.5">{line.price}</span>
      {line.discountLabel ? (
        <span className="text-xs font-black text-red-800 sm:text-sm">({line.discountLabel})</span>
      ) : null}
    </li>
  );
}

function priceLineKey(line: ProductPriceLine, index: number) {
  if (typeof line === "string") return line;
  return `${line.spec}-${line.compareAtPrice ?? ""}-${line.price}-${index}`;
}

export default function ChuseokProductCard({ product, index }: ChuseokProductCardProps) {
  const galleryImages =
    product.imageSrcs && product.imageSrcs.length > 0 ? product.imageSrcs : [product.imageSrc];
  const useCarousel = galleryImages.length > 1;

  return (
    <article className="flex h-full w-full flex-col">
      <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-[#f7f2ea] p-2 shadow-[0_12px_40px_rgba(0,0,0,0.12)] ring-1 ring-[#c9b89a]/45 sm:rounded-[1.15rem] sm:p-2.5">
        <div
          className={`relative ${CARD_ASPECT_CLASS} w-full overflow-hidden rounded-[0.85rem] bg-[#f3ece2] sm:rounded-[0.95rem]`}
        >
          {useCarousel ? (
            <ProductCardImageCarousel
              images={galleryImages}
              alt={product.imageAlt}
              priority={index === 0}
              badge={product.badge}
            />
          ) : (
            <>
              {product.badge ? (
                <span className="absolute left-2 top-2 z-10 rounded-full bg-red-600 px-2.5 py-1 text-[10px] font-black text-white sm:text-xs">
                  {product.badge}
                </span>
              ) : null}
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                fill
                unoptimized
                className="object-contain object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 22rem"
                priority={index < 3}
              />
            </>
          )}
        </div>

        <div className="mt-3 flex min-h-0 flex-1 flex-col px-1 pb-2 sm:px-1.5 sm:pb-3">
          <p className="flex flex-wrap items-baseline gap-x-1.5 text-[10px] sm:text-xs">
            <span className="font-bold tracking-wide text-red-700">{product.code}</span>
            {product.photoNote ? (
              <span className="font-bold tracking-wide text-red-700">
                <span aria-hidden className="mr-0.5">
                  *
                </span>
                {product.photoNote}
              </span>
            ) : null}
          </p>
          <div
            className={
              product.titleSubline
                ? "mt-0.5 min-h-[3.5rem] sm:min-h-[3.75rem]"
                : "mt-0.5 line-clamp-2 min-h-[2.75rem] sm:min-h-[3rem]"
            }
          >
            <h3 className="text-base font-black leading-snug text-red-950 sm:text-lg">{product.title}</h3>
            {product.titleSubline ? (
              <p className="mt-1 text-xs font-bold leading-snug text-red-800 sm:text-sm">
                <span aria-hidden className="mr-0.5">
                  *
                </span>
                {product.titleSubline}
              </p>
            ) : null}
          </div>

          <ul className="mt-2 flex min-h-[3.35rem] flex-col justify-start space-y-1 sm:min-h-[3.65rem]">
            {product.priceLines.map((line, lineIndex) => (
              <ProductPriceLineItem key={priceLineKey(line, lineIndex)} line={line} />
            ))}
          </ul>

          {product.purchaseLimit ? (
            <p className="mt-2 flex min-h-[2.5rem] items-center justify-center rounded-xl border border-red-200/90 bg-gradient-to-b from-red-50 to-red-100/95 px-3 py-2 text-center text-xs font-black tracking-wide text-red-900 shadow-sm sm:min-h-[2.65rem] sm:text-sm">
              {product.purchaseLimit}
            </p>
          ) : (
            <div className="mt-2 min-h-[2.5rem] sm:min-h-[2.65rem]" aria-hidden />
          )}

          <p className="mt-2 whitespace-pre-line text-xs leading-snug text-neutral-700 sm:text-sm sm:leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>
    </article>
  );
}
