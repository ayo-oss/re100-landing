import React from "react";
import rooftop from "./rooftop.json";
import { Link } from "react-router-dom";
import { Pill } from "./Pill";
import { FeatureItem } from "./FeatureItem";
import { Step } from "./Step";
import { Calculator } from "./Calculator";

export default function ServiceRoofLease({ data = rooftop }) {
  const { hero, estimator, features, process, cases, contact } = data;

  const featureItems = React.useMemo(
    () => (Array.isArray(features?.items) ? features.items : []),
    [features?.items]
  );
  const featureFirstRow = React.useMemo(
    () => featureItems.slice(0, 3),
    [featureItems]
  );
  const featureRemaining = React.useMemo(
    () => featureItems.slice(3),
    [featureItems]
  );

  const featureSecondRowClass = React.useMemo(() => {
    const base = "grid place-items-center gap-6";
    const count = featureRemaining.length;
    if (count === 1)
      return `${base} sm:grid-cols-1 lg:grid-cols-1 lg:max-w-[22rem] lg:mx-auto`;
    if (count === 2)
      return `${base} sm:grid-cols-2 lg:grid-cols-2 lg:max-w-[44rem] lg:mx-auto`;
    return `${base} sm:grid-cols-2 lg:grid-cols-3`;
  }, [featureRemaining.length]);

  return (
    <section className="relative overflow-hidden py-40">
      <div className="absolute inset-0 bg-white" />
      <div className="container mx-auto px-4 relative">
        {/* Hero */}
        <div className="mx-auto max-w-4xl text-center">
          <Pill>{hero.badge}</Pill>
          <h1 className="mt-5 text-display text-slate-900 leading-tight tracking-tight">
            {hero.title}
          </h1>
          <p className="mt-6 text-title text-brand-dark">{hero.highlight}</p>

          <div className="mt-12 rounded-[10px] border border-brand/60 bg-white px-8 py-10 shadow-soft sm:px-12">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr),200px] lg:items-center">
              <div className="text-left lg:pl-4">
                <p className="text-button font-semibold text-brand-dark">
                  {hero.badge}
                </p>
                <p className="mt-2 text-display text-brand-dark">
                  {hero.rentPerKw}
                </p>
              </div>
              <div className="mx-auto hidden h-28 w-28 items-center justify-center rounded-full bg-emerald-50 text-brand-dark lg:flex">
                <svg
                  aria-hidden="true"
                  className="h-16 w-16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 48 48"
                >
                  <path d="M24 6v6M37.5 10.5l-4.2 4.2M42 24h-6M37.5 37.5l-4.2-4.2M24 36v6M14.7 14.7l-4.2-4.2M12 24H6M14.7 33.3l-4.2 4.2" />
                  <path d="M24 18a9 9 0 1 1-9 9" />
                  <path d="M6 42h36" strokeLinecap="round" />
                  <path d="M11 42l6-10h14l6 10" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <ul className="mt-8 divide-y divide-emerald-100 rounded-[24px] bg-white text-left text-body text-slate-700">
              {hero.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 px-6 py-4">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-brand-dark">
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="text-description text-slate-600">
                {hero.highlight}
              </p>
              <Link
                to="/support/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-button font-semibold text-white shadow-soft transition-colors hover:bg-brand-dark"
              >
                {hero.ctaText}
              </Link>
            </div>
          </div>
        </div>

        {/* Estimator + Features */}
        <div className="mt-16 grid md:grid-cols-1">
          <Calculator est={estimator} />
          <div className="rounded-[10px] p-6 bg-white/70">
            <h2 className="text-content-title text-slate-900 mb-20">
              {features.title}
            </h2>
            <div className="mt-6 space-y-6">
              <div className="grid place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featureFirstRow.map((item) => (
                  <FeatureItem key={item.title} item={item} />
                ))}
              </div>
              {featureRemaining.length > 0 && (
                <div className={featureSecondRowClass}>
                  {featureRemaining.map((item) => (
                    <FeatureItem key={item.title} item={item} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mt-16 rounded-[10px] p-6">
          <h2 className="text-content-title text-slate-900">{process.title}</h2>
          <p className="mt-2 text-body text-slate-600">{process.subtitle}</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-5 gap-6">
            {process.steps.map((s) => (
              <Step key={s.step} step={s} />
            ))}
          </div>
        </div>

        {/* Cases */}
        {/* <div className="mt-16">
          <h2 className="text-content-title text-slate-900">{cases.title}</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.items.map((c, idx) => (
              <figure
                key={idx}
                className="rounded-[10px] overflow-hidden border bg-white/70"
              >
                <img
                  src={c.image}
                  alt=""
                  className="w-full h-48 object-cover"
                />
                <figcaption className="p-4">
                  <div className="text-content-title text-slate-900">
                    {c.capacity}
                  </div>
                  <div className="mt-1 text-body text-slate-600">
                    {c.location}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div> */}

        {/* Bottom CTA */}
        <div className="mt-16 flex items-center justify-between rounded-[10px] p-6">
          <div>
            <h3 className="text-content-title text-slate-900">
              {contact.title}
            </h3>
            <p className="text-body text-slate-600 mt-2">
              {contact.disclaimer}
            </p>
          </div>
          <Link
            to="/support/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] border text-button font-semibold text-slate-800 hover:bg-slate-100"
          >
            {contact.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
