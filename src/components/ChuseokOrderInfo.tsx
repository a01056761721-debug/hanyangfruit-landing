import { chuseokGlassCardClass } from "@/components/ChuseokDecor";

export default function ChuseokOrderInfo() {
  return (
    <section
      id="order-info"
      className="relative z-10 mx-auto w-full max-w-5xl scroll-mt-6 px-4 pt-6 sm:px-6 sm:pt-8"
    >
      <article className={`${chuseokGlassCardClass} mx-auto max-w-3xl`}>
        <h2 className="text-center text-lg font-black text-white sm:text-xl">
          추석 선물세트 주문 안내
        </h2>

        <dl className="mt-6 space-y-5 sm:mt-7">
          <div className="rounded-2xl border border-amber-400/20 bg-amber-950/20 px-4 py-4 sm:px-5 sm:py-5">
            <dt className="text-sm font-black text-amber-200 sm:text-base">주문 기간</dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-amber-100/90 sm:text-base">
              9월 8일(화) ~ 9월 16일(수)
            </dd>
          </div>

          <div className="rounded-2xl border border-amber-400/20 bg-amber-950/20 px-4 py-4 sm:px-5 sm:py-5">
            <dt className="text-sm font-black text-amber-200 sm:text-base">
              🚨 주문서 작성 방법
            </dt>
            <dd className="mt-3 space-y-4 text-sm leading-relaxed text-amber-100/90 sm:text-base">
              <p>
                추석 선물세트 택배 주문 시
                <br />
                주문서에 아래 정보를 정확하게 작성해주세요.
              </p>

              <div className="space-y-3">
                <div className="rounded-xl border border-amber-400/15 bg-amber-400/5 px-3.5 py-3.5 sm:px-4 sm:py-4">
                  <p className="font-black text-amber-100">① 기본 주소 칸에</p>
                  <p className="mt-1.5">보내시는 분의 정보(성함,주소,번호)를 입력해주세요.</p>
                </div>

                <div className="rounded-xl border border-amber-400/15 bg-amber-400/5 px-3.5 py-3.5 sm:px-4 sm:py-4">
                  <p className="font-black text-amber-100">② 요청사항 칸에</p>
                  <p className="mt-1.5">택배 받으실 분의 정보(성함,주소,번호)를 입력해주세요.</p>
                </div>
              </div>

              <div className="rounded-xl border border-amber-300/30 bg-amber-300/10 px-3.5 py-3.5 sm:px-4 sm:py-4">
                <p className="font-black text-amber-100">📌 꼭 기억해주세요!</p>
                <p className="mt-2">
                  기본 주소 = 보내는 분 정보
                  <br />
                  요청사항 = 받는 분 정보
                </p>
              </div>

              <p>
                ⚠️ 받으시는 분의 성함 / 주소 / 전화번호가 누락되거나 잘못 입력될 경우 배송에 문제가
                생길 수 있습니다.
              </p>
              <p>
                추석 기간에는 택배 주문량이 많은 만큼
                <br />
                주문 완료 전 입력하신 정보를 한 번 더 꼭 확인 부탁드립니다. 🙏
              </p>
            </dd>
          </div>

          <div className="rounded-2xl border border-amber-400/20 bg-amber-950/20 px-4 py-4 sm:px-5 sm:py-5">
            <dt className="text-sm font-black text-amber-200 sm:text-base">택배 발송</dt>
            <dd className="mt-1.5 space-y-2 text-sm leading-relaxed text-amber-100/90 sm:text-base">
              <p>9월 15일부터 순차 발송됩니다.</p>
              <p>
                좋은 상품이 입고되는 즉시 발송하는 방식으로 진행되어 배송일 지정은 어렵습니다.
              </p>
              <p>
                품절 시에는 다시 좋은 상품을 선별해 준비하며, 예약해주신 선물세트는 추석 전까지 꼭
                받아보실 수 있도록 책임지고 발송하겠습니다.
              </p>
            </dd>
          </div>
        </dl>
      </article>
    </section>
  );
}
