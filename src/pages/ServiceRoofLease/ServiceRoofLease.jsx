import React from "react";
import rooftop from "./rooftop.json";
import { Link } from "react-router-dom";
import { Pill } from "./Pill";
import { FeatureItem } from "./FeatureItem";
import { Calculator } from "./Calculator";
import { SectionCard } from "../PowerService";

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

  const processSteps = React.useMemo(
    () => (Array.isArray(process?.steps) ? process.steps : []),
    [process?.steps]
  );
  const processPalettes = [
    {
      circleBg: "bg-emerald-500",
      ring: "ring-emerald-200/60",
      iconBg: "bg-emerald-50",
      iconText: "text-emerald-600",
    },
    {
      circleBg: "bg-sky-500",
      ring: "ring-sky-200/60",
      iconBg: "bg-sky-50",
      iconText: "text-sky-600",
    },
    {
      circleBg: "bg-blue-500",
      ring: "ring-blue-200/60",
      iconBg: "bg-blue-50",
      iconText: "text-blue-600",
    },
    {
      circleBg: "bg-purple-500",
      ring: "ring-purple-200/60",
      iconBg: "bg-purple-50",
      iconText: "text-purple-600",
    },
    {
      circleBg: "bg-indigo-500",
      ring: "ring-indigo-200/60",
      iconBg: "bg-indigo-50",
      iconText: "text-indigo-600",
    },
  ];
  const processIcons = [
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 4h16v6H4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M4 14h16v6H4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8 4v16M12 8h4M12 18h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>,
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 6h18M3 12h18M3 18h11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M7 6v12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>,
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 4h14v16H5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 8h6M9 12h6M9 16h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>,
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 20h14l-2-11H7l-2 11Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 9V6a3 3 0 0 1 6 0v3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>,
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21a9 9 0 1 0-9-9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 13.5 11 16l5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
  ];

  return (
    <section className="relative overflow-hidden py-40">
      <div className="absolute inset-0 bg-white" />
      <div className="container mx-auto px-4 relative">
        {/* Hero */}
        <div className="mx-auto max-w-4xl text-center">
          <Pill>{hero.badge}</Pill>
          <h1 className="mt-5 text-display  leading-tight tracking-tight">
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
          <SectionCard
            eyebrow="Eligibility"
            title={features.title}
            className="mt-16 text-center"
          >
            <div className="space-y-6 mt-20 ">
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
          </SectionCard>
        </div>

        {/* Process */}
        <SectionCard
          eyebrow="Process"
          title={process.title}
          description={process.subtitle}
          className="mt-16 text-center"
        >
          <ol className="relative flex flex-col gap-10 mt-20  lg:flex-row lg:items-stretch lg:justify-between">
            {processSteps.map((step, index) => {
              const palette = processPalettes[index % processPalettes.length];
              const icon = processIcons[index % processIcons.length];
              return (
                <li
                  key={index}
                  className="relative flex flex-1 flex-col items-center text-center"
                >
                  <div className="flex flex-col items-center gap-5">
                    <div className="relative flex items-center justify-center">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-full text-title font-semibold text-white ring-4 ${palette.circleBg} ${palette.ring}`}
                      >
                        {index + 1}
                      </div>
                      {index < processSteps.length - 1 ? (
                        <span className="hidden lg:block absolute left-full top-1/2 ml-4 h-[2px] w-40 -translate-y-1/2 bg-slate-200" />
                      ) : null}
                    </div>
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-full border-2 border-slate-100 ${palette.iconBg} shadow-soft ${palette.iconText}`}
                    >
                      <span className={palette.iconText}>{icon}</span>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <h3 className="text-title font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-body text-slate-600">{step.desc}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </SectionCard>

        {/* Cases */}
        {/* <div className="mt-16">
          <h2 className="text-content-title ">{cases.title}</h2>
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
                  <div className="text-content-title ">
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
        <SectionCard
          eyebrow="CTA"
          title={contact.title}
          description={contact.disclaimer}
          className="mt-16 text-center"
        >
          <Link
            to="/support/contact"
            className="inline-flex items-center gap-2 rounded-full border border-brand px-6 py-3 text-button font-semibold text-brand transition hover:bg-brand/10"
          >
            {contact.cta}
          </Link>
        </SectionCard>
      </div>
    </section>
  );
}
