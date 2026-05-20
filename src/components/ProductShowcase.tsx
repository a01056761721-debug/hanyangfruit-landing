"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import productsData from "@/data/products.json";

const PRODUCTS_PER_PAGE = 4;
const PRODUCT_INQUIRY_URL =
  "https://accounts.kakao.com/login/?continue=https%3A%2F%2Fpf.kakao.com%2F_xkxadfn%2Fchat#login";
const PRODUCT_STOCK_NOTICE =
  "당일상품이라 가격과 재고가 다를 수 있습니다. 문의 주시면 성실히 답변 해드리겠습니다.";

type Product = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  /** 마우스 올렸을 때 보여줄 상세 사진 (단면·조리 후 등). 없으면 「상세 이미지 준비중...」 */
  hoverImageSrc?: string;
  hoverImageAlt?: string;
  soldCount: string;
  price: string;
  originalPrice?: string;
  discountRate?: string;
  rating?: string;
  reviewCount?: string;
};

type Category = {
  name: string;
  description: string;
  products: Product[];
};

const CATEGORIES: Category[] = (productsData.categories ?? []).filter(
  (c: Category) => c && Array.isArray(c.products) && c.products.length > 0,
);

const FALLBACK_CATEGORY: Category = {
  name: "상품 준비중",
  description: "곧 새로운 상품으로 찾아뵙겠습니다.",
  products: [],
};

const SAFE_CATEGORIES: Category[] =
  CATEGORIES.length > 0 ? CATEGORIES : [FALLBACK_CATEGORY];

function formatRank(index: number) {
  return String(index + 1).padStart(2, "0");
}

const PRODUCT_IMAGE_SIZES = "(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw";

function ProductCardImage({
  imageSrc,
  imageAlt,
  hoverImageSrc,
  hoverImageAlt,
}: {
  imageSrc: string;
  imageAlt: string;
  hoverImageSrc?: string;
  hoverImageAlt?: string;
}) {
  const hoverSrc = hoverImageSrc?.trim();
  const hasHoverImage = Boolean(hoverSrc);

  return (
    <div className="group relative aspect-[1.03/1] overflow-hidden rounded-lg bg-slate-100 shadow-sm">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover transition duration-500 [@media(hover:hover)]:group-hover:scale-[1.02]"
        sizes={PRODUCT_IMAGE_SIZES}
      />
      <div
        className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 [@media(hover:hover)]:group-hover:opacity-100"
        aria-hidden={!hasHoverImage}
      >
        {hasHoverImage ? (
          <Image
            src={hoverSrc!}
            alt={hoverImageAlt?.trim() || `${imageAlt} 상세`}
            fill
            className="object-cover"
            sizes={PRODUCT_IMAGE_SIZES}
          />
        ) : (
          <p className="px-3 text-center text-sm font-black leading-snug text-white sm:text-base">
            상세 이미지 준비중...
          </p>
        )}
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [page, setPage] = useState(0);

  const activeCategory =
    SAFE_CATEGORIES[activeIndex] ?? SAFE_CATEGORIES[0] ?? FALLBACK_CATEGORY;
  const products = activeCategory.products;
  const totalPages = Math.max(1, Math.ceil(products.length / PRODUCTS_PER_PAGE));
  const safePage = Math.min(page, totalPages - 1);
  const visibleProducts = products.slice(
    safePage * PRODUCTS_PER_PAGE,
    safePage * PRODUCTS_PER_PAGE + PRODUCTS_PER_PAGE,
  );
  const goToPreviousPage = () => setPage((current) => Math.max(0, current - 1));
  const goToNextPage = () =>
    setPage((current) => Math.min(totalPages - 1, current + 1));

  return (
    <section
      data-scroll-reveal
      id="products"
      className="mx-auto w-full max-w-7xl scroll-mt-6 px-0 pb-14 pt-2 sm:px-1 sm:pb-20 sm:pt-5 lg:px-1.5"
    >
      <div className="rounded-[1.75rem] bg-white px-1 py-4 sm:px-4 sm:py-6 lg:px-6">
        <div className="mb-7 flex flex-col gap-5 sm:mb-9 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-black text-red-600 sm:text-sm">오늘의 추천 상품</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              한양과일 상품리스트 🧺
            </h2>
            <p className="mt-2 text-sm font-bold text-slate-500 sm:text-base">
              {activeCategory.description}
            </p>
            <p className="mt-1.5 text-sm font-bold text-slate-500 sm:text-base">
              {PRODUCT_STOCK_NOTICE}
            </p>
          </div>
          <Link
            href={PRODUCT_INQUIRY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center justify-center rounded-full bg-[#ffe24a] px-7 py-3.5 text-base font-extrabold text-slate-900 shadow-lg shadow-amber-200/40 transition hover:scale-[1.02] hover:brightness-105 active:scale-[0.99] lg:inline-flex"
          >
            오늘 상품 문의하기
          </Link>
        </div>

        <div className="mb-7 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mb-8">
          {SAFE_CATEGORIES.map((category, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={`${category.name}-${index}`}
                type="button"
                aria-pressed={isActive}
                onClick={() => {
                  setActiveIndex(index);
                  setPage(0);
                }}
                className={`shrink-0 rounded-full px-5 py-3 text-sm font-black transition ${
                  isActive
                    ? "bg-red-600 text-white shadow-md shadow-red-200/70"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:gap-x-4 lg:grid-cols-4 lg:gap-x-5">
          {visibleProducts.map((product, indexInPage) => {
            const absoluteIndex = safePage * PRODUCTS_PER_PAGE + indexInPage;
            return (
              <article
                key={`${activeCategory.name}-${absoluteIndex}-${product.title}`}
                className="min-w-0"
              >
                <p className="mb-2 text-base font-black text-red-600 sm:text-lg">
                  {formatRank(absoluteIndex)}
                </p>
                <ProductCardImage
                  imageSrc={product.imageSrc}
                  imageAlt={product.imageAlt}
                  hoverImageSrc={product.hoverImageSrc}
                  hoverImageAlt={product.hoverImageAlt}
                />
                <div className="mt-2 rounded bg-red-600 px-2 py-2 text-center text-[0.72rem] font-black text-white sm:text-sm">
                  🔥 누적판매 <span className="text-white">{product.soldCount}</span>개
                </div>
                <h3 className="mt-2 line-clamp-2 min-h-[2.8rem] text-[0.82rem] font-bold leading-snug text-slate-800 sm:text-base">
                  {product.title}
                </h3>
                {product.originalPrice ? (
                  <p className="mt-1 text-sm font-medium text-slate-300 line-through sm:text-base">
                    {product.originalPrice}
                  </p>
                ) : null}
                <div className="mt-1 flex flex-wrap items-baseline gap-x-1">
                  {product.discountRate ? (
                    <span className="text-base font-black text-red-500 sm:text-lg">
                      {product.discountRate}
                    </span>
                  ) : null}
                  <span className="text-lg font-black text-slate-950 sm:text-xl">
                    {product.price}
                  </span>
                </div>
                {product.rating && product.reviewCount ? (
                  <p className="mt-1 text-xs font-extrabold text-slate-600 sm:text-sm">
                    <span className="text-orange-400">★</span> {product.rating} ({product.reviewCount})
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>

        <div className="mt-9 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={goToPreviousPage}
            disabled={safePage === 0}
            className="rounded-full border border-red-200 px-4 py-2 text-sm font-black text-red-700 shadow-sm transition hover:bg-red-50 disabled:cursor-not-allowed disabled:border-slate-200 disabled:text-slate-400 disabled:opacity-35"
          >
            &lt; 이전
          </button>
          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`${index + 1}페이지 보기`}
                aria-current={index === safePage ? "page" : undefined}
                onClick={() => setPage(index)}
                className={`h-2.5 rounded-full transition ${
                  index === safePage ? "w-7 bg-red-600" : "w-2.5 bg-red-100 hover:bg-red-200"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={goToNextPage}
            disabled={safePage === totalPages - 1}
            className="rounded-full border border-red-200 px-4 py-2 text-sm font-black text-red-700 shadow-sm transition hover:bg-red-50 disabled:cursor-not-allowed disabled:border-slate-200 disabled:text-slate-400 disabled:opacity-35"
          >
            다음 &gt;
          </button>
        </div>

        <div className="mt-9 flex justify-center lg:hidden">
          <Link
            href={PRODUCT_INQUIRY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#ffe24a] px-6 py-3 text-sm font-extrabold text-slate-900 shadow-lg shadow-amber-200/40 transition hover:scale-[1.02] hover:brightness-105 active:scale-[0.99] sm:px-7 sm:py-3.5 sm:text-base"
          >
            오늘 상품 문의하기
          </Link>
        </div>
      </div>
    </section>
  );
}
