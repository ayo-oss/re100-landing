import React from "react";
import rooftop from "./rooftop.json";

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border bg-white/70 text-button font-semibold text-emerald-900 backdrop-blur">
      {children}
    </span>
  );
}

function FeatureItem({ item }) {
  return (
    <div className="flex items-start gap-4">
      <img src={item.icon} alt="" className="w-10 h-10 shrink-0" />
      <div>
        <div className="text-content-title text-slate-900">{item.title}</div>
        <div className="mt-1 text-body text-slate-600">{item.desc}</div>
      </div>
    </div>
  );
}

function Step({ step }) {
  return (
    <div className="text-center">
      <img src={step.icon} alt="" className="mx-auto w-12 h-12" />
      <div className="mt-3 text-body font-medium text-slate-700">{`Step.${step.step} ${step.label}`}</div>
    </div>
  );
}

function numberWithCommas(n) {
  try {
    return n.toLocaleString();
  } catch {
    return String(n);
  }
}

function Calculator({ est }) {
  const [kw, setKw] = React.useState(100);
  const annual = kw * est.ratePerKw;
  const lifetime = annual * est.lifetimeYears;
  return (
    <div className="rounded-2xl p-6 border bg-white/70">
      <h2 className="text-content-title text-slate-900">{est.title}</h2>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <div className="text-body font-medium text-slate-600">{est.areaLabel}</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {est.areaOptions.map((opt) => (
              <span
                key={opt}
                className="px-3 py-1.5 rounded-xl border text-body bg-white/70 text-slate-700"
              >
                {opt}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="text-body font-medium text-slate-600">{est.capacityLabel}</div>
          <div className="mt-2 flex items-center gap-3">
            <input
              id="kwInput"
              type="number"
              min={0}
              step={1}
              value={kw}
              onChange={(e) =>
                setKw(Math.max(0, parseInt(e.target.value || "0", 10)))
              }
              placeholder={est.capacityPlaceholder}
              className="w-40 px-3 py-2 rounded-xl border bg-white/80 text-body text-slate-800"
            />
            <input
              type="range"
              min={0}
              max={3000}
              step={10}
              value={kw}
              onChange={(e) => setKw(parseInt(e.target.value, 10))}
              className="flex-1"
            />
          </div>
        </div>
        <div>
          <div className="text-body font-medium text-slate-600">{est.annualIncomeLabel}</div>
          <div className="mt-2 text-content-title text-emerald-700">
            {numberWithCommas(annual)} ??
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <div className="text-body font-medium text-slate-600">{est.lifetimePrefix}</div>
          <div className="mt-1 text-content-title text-emerald-700">
            {numberWithCommas(lifetime)} ??
          </div>
          <div className="text-footer text-slate-600">{est.lifetimeSuffix}</div>
        </div>
      </div>
      <p className="mt-4 text-footer text-slate-500">{est.note}</p>
    </div>
  );
}

export default function ServiceRoofLease({ data = rooftop, onCta }) {
  const { hero, estimator, features, process, cases, contact } = data;
  return (
    <section className="relative overflow-hidden py-40">
      <div className="absolute inset-0 bg-white" />
      <div className="container mx-auto px-4 relative">
        {/* Hero */}
        <div className="max-w-3xl">
          <Pill>{hero.badge}</Pill>
          <h1 className="mt-5 text-title text-slate-900 leading-tight tracking-tight">
            {hero.title}
          </h1>
          <p className="mt-6 text-content-title text-brand-dark">{hero.highlight}</p>
          <div className="mt-3 text-body text-slate-700">{hero.rentPerKw}</div>
          <ul className="mt-4 space-y-2 text-body text-slate-700">
            {hero.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-[6px] block h-1.5 w-1.5 rounded-full bg-emerald-600" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7">
            <button
              type="button"
              onClick={onCta}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 text-white text-button font-semibold hover:opacity-90"
            >
              {hero.ctaText}
            </button>
          </div>
        </div>

        {/* Estimator + Features (two-column like source) */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <Calculator est={estimator} />
          <div className="rounded-2xl p-6 border bg-white/70">
          <h2 className="text-content-title text-slate-900">{features.title}</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              {features.items.map((item) => (
                <FeatureItem key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mt-16 rounded-2xl p-6 border bg-white/70">
          <h2 className="text-content-title text-slate-900">{process.title}</h2>
          <p className="mt-2 text-body text-slate-600">{process.subtitle}</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-6">
            {process.steps.map((s) => (
              <Step key={s.step} step={s} />
            ))}
          </div>
        </div>

        {/* Cases */}
        <div className="mt-16">
          <h2 className="text-content-title text-slate-900">{cases.title}</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.items.map((c, idx) => (
              <figure
                key={idx}
                className="rounded-2xl overflow-hidden border bg-white/70"
              >
                <img
                  src={c.image}
                  alt=""
                  className="w-full h-48 object-cover"
                />
                <figcaption className="p-4">
                  <div className="text-content-title text-slate-900">{c.capacity}</div>
                  <div className="mt-1 text-body text-slate-600">{c.location}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex items-center justify-between rounded-2xl p-6 border bg-white/70">
          <div>
            <h3 className="text-content-title text-slate-900">{contact.title}</h3>
            <p className="text-body text-slate-600 mt-2">{contact.disclaimer}</p>
          </div>
          <button
            type="button"
            onClick={onCta}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border text-button font-semibold text-slate-800 hover:bg-slate-100"
          >
            {contact.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
