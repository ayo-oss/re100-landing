import content from '../content/ko/ko.json'

const { newsletter } = content

function Newsletter() {
  return (
    <section id="contact" className="bg-emerald-50/40 py-24">
      <div className="container flex justify-center">
        <div className="w-full max-w-4xl rounded-3xl border border-brand/20 bg-white px-6 py-12 shadow-soft sm:px-10">
          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              {newsletter.heading}
            </h2>
            <p className="text-base text-slate-600">{newsletter.description}</p>
          </div>
          <form className="mt-10 grid gap-4 sm:grid-cols-[minmax(0,1fr),minmax(0,1fr),140px]">
            <select
              className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-600 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
              defaultValue=""
            >
              <option value="" disabled>
                {newsletter.categoryPlaceholder}
              </option>
              {newsletter.categoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <input
              className="rounded-full border border-slate-200 px-5 py-3 text-sm text-slate-600 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
              placeholder={newsletter.emailPlaceholder}
              type="email"
            />
            <button
              type="submit"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-brand-dark"
            >
              {newsletter.submitLabel}
            </button>
          </form>
          <label className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
            <input className="size-4 rounded border border-slate-300" type="checkbox" />
            <span>{newsletter.consentLabel}</span>
          </label>
          <p className="mt-4 text-center text-xs text-slate-500">{newsletter.footnote}</p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
