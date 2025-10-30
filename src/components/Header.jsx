const navigation = [
  { label: '회사소개', href: '#about' },
  { label: '서비스', href: '#services' },
  { label: 'RE100 인사이트', href: '#insights' },
  { label: '고객문의', href: '#contact' },
]

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
            CTR
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm uppercase tracking-wide text-brand-dark">
              Eneris
            </span>
            <span className="text-base">CTR에너지</span>
          </div>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              className="transition-colors hover:text-brand-dark"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-brand/20 bg-brand px-4 py-2 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-brand-dark"
        >
          컨설팅 문의
        </a>
      </div>
    </header>
  )
}

export default Header
