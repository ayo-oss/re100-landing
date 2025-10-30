import { useLocation } from 'react-router-dom'

function ComingSoon() {
  const location = useLocation()

  return (
    <section className="border-t border-slate-100 bg-emerald-50/40 py-24">
      <div className="container mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-dark">
          Page In Progress
        </p>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          준비 중인 페이지입니다.
        </h1>
        <p className="text-base text-slate-600">
          {location.pathname} 페이지는 지금 콘텐츠를 구성 중이에요. 빠른 시일 내에 업데이트할게요.
        </p>
      </div>
    </section>
  )
}

export default ComingSoon
