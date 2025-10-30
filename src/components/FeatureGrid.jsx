const features = [
  {
    title: 'RE100 컨설팅',
    description: '기업별 전력 사용 패턴과 목표를 분석해 맞춤형 RE100 로드맵을 설계합니다.',
  },
  {
    title: '지붕형 태양광',
    description: '유휴 지붕 자산을 활용한 발전소 구축으로 임대 수익과 전력 절감을 동시에 제공합니다.',
  },
  {
    title: '금융 · PPA 솔루션',
    description: '금융기관 및 파트너사와 연계해 초기 투자 부담을 낮추는 맞춤형 패키지를 구성합니다.',
  },
  {
    title: '데이터 모니터링',
    description: '발전 효율을 높이는 통합 관제 시스템으로 운영 리스크를 선제적으로 관리합니다.',
  },
]

function FeatureGrid() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-dark">
            Services
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            RE100 목표 달성을 위한 핵심 서비스
          </h2>
          <p className="text-base text-slate-600">
            컨설팅부터 금융, 시공, 운영까지 CTR에너지 한 곳에서 지원 받을 수
            있도록 구성했습니다.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-soft transition-transform duration-200 hover:-translate-y-2 hover:border-brand/40"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand-dark">
                CTR
              </span>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid
