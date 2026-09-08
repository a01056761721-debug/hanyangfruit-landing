import { chuseokGlassCardClass } from "@/components/ChuseokDecor";

const FIT_ITEMS = [
  "화려한 장식보다 먹었을 때 정말 맛있는 선물을 하고 싶은 분",
  "받는 분께 “과일 진짜 맛있다”는 이야기를 듣고 싶은 분",
  "가격보다 당도와 품질이 확실한 과일을 원하시는 분",
  "선물 후 문제까지 확실하게 책임지는 곳을 원하시는 분",
] as const;

const PROMISES = [
  "“선물세트 과일이 이렇게 맛있는 건 처음이다”라는 말을 들으실 수 있도록 준비하겠습니다.",
  "파손·품질·당도 문제가 생기면 받는 분이 바로 한양과일로 연락하실 수 있도록 C/S 안내카드를 동봉하고, 끝까지 책임지고 처리하겠습니다.",
] as const;

export default function ChuseokGiftAudience() {
  return (
    <section
      id="gift-audience"
      className="relative z-10 mx-auto w-full max-w-5xl scroll-mt-6 px-4 pt-10 sm:px-6 sm:pt-14"
    >
      <article className={`${chuseokGlassCardClass} mx-auto max-w-3xl`}>
        <h2 className="text-center text-base font-black leading-snug text-white sm:text-lg">
          <span aria-hidden className="mr-1.5">
            🎁
          </span>
          [ 한양과일 선물세트는 이런 분들께 잘 맞습니다 ]
        </h2>

        <ul className="mt-6 space-y-3 sm:mt-7">
          {FIT_ITEMS.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 rounded-2xl border border-amber-400/20 bg-amber-950/20 px-4 py-3.5 text-sm leading-relaxed text-amber-100/90 sm:px-5 sm:text-base"
            >
              <span aria-hidden className="shrink-0 font-black text-amber-300">
                ✔
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 space-y-4 text-sm leading-relaxed text-amber-100/85 sm:mt-7 sm:text-base">
          <p>
            한양과일은 비싼 장식보다 과일 원물 자체에 더 많은 비용을 쓰겠습니다. 선물세트 박스와
            보자기 포장은 깔끔하고 정성스럽게 준비하되, 가장 중요한 건 결국 받는 분이 드셨을 때의
            맛이라고 생각합니다.
          </p>
          <p>
            조금 더 비쌀 수는 있습니다.
            <br />
            하지만 저렴함보다 당도와 품질에 대한 신뢰를 우선하겠습니다.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-amber-400/25 bg-amber-400/10 px-4 py-5 sm:mt-7 sm:px-5 sm:py-6">
          <p className="text-sm font-black text-amber-100 sm:text-base">그리고 두 가지를 약속드립니다.</p>
          <ol className="mt-4 space-y-3">
            {PROMISES.map((promise, index) => (
              <li
                key={promise}
                className="flex gap-3 text-sm leading-relaxed text-amber-100/90 sm:text-base"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-300/20 text-xs font-black text-amber-200 sm:h-7 sm:w-7 sm:text-sm">
                  {index + 1}
                </span>
                <span className={`pt-0.5 ${index === 0 ? "whitespace-nowrap" : ""}`}>{promise}</span>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-6 text-center text-sm font-bold leading-relaxed text-amber-100 sm:mt-7 sm:text-base">
          선물은 보내는 것으로 끝나지 않습니다.
          <br />
          받으신 뒤까지 한양과일이 책임지겠습니다.
        </p>
      </article>
    </section>
  );
}
