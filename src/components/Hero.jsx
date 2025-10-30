function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/60 to-white"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-1/4 top-0 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-brand-light/40 blur-3xl" />
      </div>
      <div className="relative mx-auto grid min-h-[70vh] w-full max-w-6xl gap-10 px-4 py-24 lg:grid-cols-[1fr,340px] lg:items-center">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-dark">
            Renewable Energy Partner
          </p>
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            기업 맞춤 RE100 컨설팅으로{' '}
            <span className="text-brand-dark">탄소중립 여정</span>을 시작하세요.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-slate-600">
            지붕형 태양광부터 PPA, 금융 조달까지 CTR에너지가 RE100 실현을 위한
            토털 솔루션을 설계합니다.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-brand-dark"
            >
              컨설팅 문의하기
            </a>
            <a
              href="#services"
              className="rounded-full border border-brand/30 px-6 py-3 text-sm font-semibold text-brand-dark transition-colors hover:border-brand-dark hover:text-brand"
            >
              서비스 살펴보기
            </a>
          </div>
        </div>
        <div className="relative rounded-3xl border border-brand/10 bg-white p-6 shadow-soft">
          <div className="space-y-4 text-sm text-slate-600">
            <div className="rounded-2xl border border-brand/10 bg-emerald-50/70 p-4 text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-dark">
                Real-time Snapshot
              </p>
              <p className="mt-2 text-lg font-bold text-brand-dark">SMP · REC</p>
              <p className="text-xs text-slate-500">
                실시간 연동 전용 카드 영역입니다. 공공데이터 API 연결로 최신
                값을 노출하세요.
              </p>
            </div>
            <ul className="space-y-2">
              {[
                'REC 가중치 0.8',
                'REC 가중치 1.0',
                'REC 가중치 1.2',
                'REC 가중치 1.5',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white/70 px-4 py-3"
                >
                  <span>{item}</span>
                  <span className="text-xs font-semibold text-brand-dark">
                    Placeholder
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
