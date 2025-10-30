import content from "../../content/ko/ko.json";
import greetingHero from "../../assets/about/f0df38c0-c5fb-460f-ac59-10bf4e6db126.png";
import greetingMain from "../../assets/about/greeting-main.jpg";

const copy = content.pages.aboutGreeting;

function AboutGreeting() {
  return (
    <div className="bg-white">
      <Hero />
      <Greeting />
      <CompanyInfo />
      <History />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden py-40">
      <img
        alt={copy.hero.title}
        className="absolute inset-0 h-full w-full object-cover object-center"
        src={greetingHero}
      />
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-[-8rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute bottom-[-6rem] right-[-4rem] h-[24rem] w-[24rem] rounded-full bg-brand-light/40 blur-[140px]" />
      </div>
      <div className="relative container flex min-h-[360px] flex-col justify-center py-24">
        <p className="text-2xl font-semibold uppercase tracking-[0.25em] text-brand-dark">
          {copy.hero.eyebrow}
        </p>
        <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
          {copy.hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base text-slate-600 md:text-2xl">
          {copy.hero.description}
        </p>
      </div>
    </section>
  );
}

function Greeting() {
  return (
    <section className="bg-white py-24">
      <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr),minmax(0,1.15fr)] lg:items-center">
        <div className="rounded-[36px] bg-emerald-50/70 p-4 shadow-[0_25px_60px_-40px_rgba(15,84,54,0.5)]">
          <img
            alt={copy.greeting.title}
            className="h-full w-full rounded-[28px] object-cover"
            src={greetingMain}
          />
        </div>
        <div className="space-y-8 text-slate-800">
          <div className="space-y-4">
            <span className="text-2xl font-semibold uppercase tracking-[0.35em] text-brand-dark">
              {copy.greeting.title}
            </span>
            <h2 className="text-3xl font-bold leading-snug text-slate-900 md:text-4xl">
              {copy.greeting.headline}
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-slate-700">
            {copy.greeting.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CompanyInfo() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      <div className="absolute -right-40 top-8 hidden h-72 w-72 rounded-full bg-brand/10 blur-3xl md:block" />
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">
            {copy.companyInfo.title}
          </h3>
        </div>
        <dl className="mt-12 grid gap-6 rounded-[36px] border border-slate-100 bg-white p-10 shadow-soft md:grid-cols-2">
          {copy.companyInfo.items.map((item) => (
            <div key={item.label} className="space-y-2">
              <dt className="text-2xl font-semibold uppercase tracking-wide text-brand-dark">
                {item.label}
              </dt>
              <dd className="text-base leading-relaxed text-slate-700 whitespace-pre-line">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function History() {
  return (
    <section className="bg-white py-24">
      <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.9fr),minmax(0,1.3fr)]">
        <div className="space-y-6">
          <span className="text-2xl font-semibold uppercase tracking-[0.28em] text-brand-dark">
            {copy.history.title}
          </span>
          <h3 className="text-3xl font-bold text-slate-900 md:text-4xl">
            {copy.history.subtitle.split("\n").map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h3>
        </div>
        <div className="space-y-8">
          {/* {copy.history.years.map((year) => (
            <article
              key={year.year}
              className="rounded-[28px] border border-slate-100 bg-slate-50/50 p-8 shadow-[0_18px_40px_-28px_rgba(15,84,54,0.35)] transition-colors duration-300 hover:border-brand/40 hover:bg-white"
            >
              <h4 className="text-xl font-bold text-brand-dark">{year.year}</h4>
              <ul className="mt-4 space-y-3 text-2xl leading-relaxed text-slate-700">
                {year.events.map((event) => (
                  <li key={event} className="flex gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand-dark" />
                    <span>{event}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))} */}
          준비중입니다.
        </div>
      </div>
    </section>
  );
}

export default AboutGreeting;
