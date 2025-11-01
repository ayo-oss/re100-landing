import React from "react";
import rooftop from "./rooftop.json";
import { Link } from "react-router-dom";
import { Pill } from "@/components/Pill";
import { FeatureItem } from "./FeatureItem";
import { Calculator } from "./Calculator";
import SectionCard from "@/components/SectionCard";
import ContactCTA from "@/components/ContactCTA";
import ctaContent from "@/content/ko/cta.json";
import headerImg from "@/assets/about/f0df38c0-c5fb-460f-ac59-10bf4e6db126.png";
import {
  Search,
  DesignPencil,
  ShieldCheck,
  Hammer,
  GraphUp,
  SunLight,
  Check,
} from "iconoir-react";

export default function ServiceRoofLease({ data = rooftop }) {
  const { hero, estimator, features, process, cases } = data;
  const contactCTA = ctaContent.roofLease;

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
  const processIcons = [Search, DesignPencil, ShieldCheck, Hammer, GraphUp];

  return (
    <section className="relative overflow-hidden py-40">
      <div className="absolute inset-0 bg-white">
        {/* <img
          src={headerImg}
          alt=""
          loading="lazy"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/65" /> */}
      </div>
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
                <SunLight className="h-16 w-16" strokeWidth={1.6} />
              </div>
            </div>

            <ul className="mt-8 divide-y divide-emerald-100 rounded-[24px] bg-white text-left text-body text-slate-700">
              {hero.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 px-6 py-4">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-brand-dark">
                    <Check className="h-4 w-4" strokeWidth={1.8} />
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
              const IconComponent = processIcons[index % processIcons.length];
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
                      className={`flex h-14 w-14 items-center justify-center rounded-full border-2 border-slate-100 ${palette.iconBg} ${palette.iconText} shadow-soft`}
                    >
                      <IconComponent className="h-6 w-6" strokeWidth={1.6} />
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
        <ContactCTA
          eyebrow="CTA"
          title={contactCTA.title}
          description={contactCTA.description}
          ctaLabel={contactCTA.cta}
          className="mt-16"
        />
      </div>
    </section>
  );
}
