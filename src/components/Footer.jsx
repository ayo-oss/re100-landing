const footerLinks = [
  {
    title: '회사소개',
    items: ['CTR에너지', '미션과 비전', '연혁'],
  },
  {
    title: '사업분야',
    items: ['지붕임대 사업', '태양광 발전', '금융 솔루션', 'RE100 컨설팅'],
  },
  {
    title: '고객센터',
    items: ['공지사항', '고객문의', '자료실'],
  },
]

function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 lg:flex-row lg:justify-between">
        <div className="max-w-sm space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-dark">
            CTR Energy
          </p>
          <p className="text-lg font-semibold text-slate-900">
            신뢰할 수 있는 RE100 파트너와 에너지 전환을 시작하세요.
          </p>
          <p className="text-sm text-slate-600">
            본사: 경상남도 창원시 의창구 중앙대로 28번길 6 (중동 CTR빌딩)
            <br />
            고객센터: 1600-8439 (평일 08:30 ~ 17:30)
          </p>
        </div>
        <div className="grid flex-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {footerLinks.map((block) => (
            <div key={block.title} className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-dark">
                {block.title}
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 border-t border-slate-100 pt-6">
        <p className="text-center text-xs text-slate-400">
          © {new Date().getFullYear()} CTR Energy. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
