function Newsletter() {
  return (
    <section id="contact" className="bg-emerald-50/40 py-24">
      <div className="mx-auto w-full max-w-4xl rounded-3xl border border-brand/20 bg-white px-6 py-12 shadow-soft sm:px-10">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-dark">
            Newsletter
          </p>
          <h2 className="text-3xl font-bold text-slate-900">
            CTR에너지 소식과 프로모션을 가장 먼저 받아보세요
          </h2>
          <p className="text-base text-slate-600">
            구독 유형과 이메일만 입력하면 RE100 컨설팅 팁과 현장 소식을 전달해
            드립니다.
          </p>
        </div>
        <form className="mt-10 grid gap-4 sm:grid-cols-[minmax(0,1fr),minmax(0,1fr),140px]">
          <select
            className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-600 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            defaultValue=""
          >
            <option value="" disabled>
              고객 유형 선택
            </option>
            <option value="enterprise">기업 고객</option>
            <option value="partner">협력사</option>
            <option value="residential">개인 고객</option>
          </select>
          <input
            className="rounded-full border border-slate-200 px-5 py-3 text-sm text-slate-600 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            placeholder="이메일 주소"
            type="email"
          />
          <button
            type="submit"
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-brand-dark"
          >
            구독하기
          </button>
        </form>
        <p className="mt-4 text-center text-xs text-slate-500">
          개인정보 처리방침 안내 및 구독 확인 절차는 실제 서비스 환경에서
          연동하세요.
        </p>
      </div>
    </section>
  )
}

export default Newsletter
