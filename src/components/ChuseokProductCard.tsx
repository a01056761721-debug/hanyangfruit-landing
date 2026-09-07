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

export default function ChuseokProductCard({ product, index }: ChuseokProductCardProps) {
  return (
    <article className="flex h-full flex-col">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-[#f7f2ea] p-2 shadow-[0_12px_40px_rgba(0,0,0,0.22)] ring-1 ring-[#c9b89a]/45 sm:rounded-[1.15rem] sm:p-2.5">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          width={960}
          height={1200}
          className="h-auto w-full rounded-[0.85rem] object-cover sm:rounded-[0.95rem]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 28rem"
          priority={index < 2}
        />
      </div>
    </article>
  );
}
