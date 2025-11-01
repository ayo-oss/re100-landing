import React from "react";
import data from "./service05.json";
import { Pill } from "@/components/Pill";
import { BulletItem } from "@/components/BulletItem";
import {
  DatabaseSearch,
  GraphUp,
  ShieldCheck,
  StatsUpSquare,
  Tools,
  HeadsetHelp,
} from "iconoir-react";

const CONTAINER_CLASS = "container";

const SOLUTION_ICONS = [GraphUp, StatsUpSquare, ShieldCheck, Tools, DatabaseSearch];
const PROCESS_ICONS = [DatabaseSearch, Tools, StatsUpSquare, ShieldCheck, HeadsetHelp];

const toArray = (value) => (Array.isArray(value) ? value : []);

export default function Er100Service({ content = data }) {
  const hero = content?.hero ?? {};
  const intro = content?.intro ?? {};
  const solutions = content?.solutions ?? {};
  const process = content?.process ?? {};
  const cta = content?.cta ?? {};

  return (
    <div className="bg-white text-slate-900">
      <HeroSection hero={hero} />
      <IntroSection intro={intro} />
      <SolutionsSection solutions={solutions} />
      <ProcessSection process={process} />
      <CTASection cta={cta} />
    </div>
  );
}

function HeroSection({ hero }) {
  const bullets = toArray(hero.bullets);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900">
      <div className="absolute -top-24 right-16 h-56 w-56 rounded-full bg-emerald-500/30 blur-3xl" />
      <div className="absolute bottom-[-120px] left-12 h-64 w-64 rounded-full bg-emerald-400/25 blur-3xl" />

      <div className="relative z-10">
        <div className="container flex flex-col gap-10 py-20 text-white md:py-28">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            {hero.badge ? (
              <Pill className="border-white/40 bg-white/10 text-white">{hero.badge}</Pill>
            ) : null}
            {hero.title ? (
              <h1 className="text-3xl font-semibold leading-tight md:text-5xl">{hero.title}</h1>
            ) : null}
            {hero.highlight ? (
              <p className="text-base leading-relaxed text-white/85 md:text-lg">
                {hero.highlight}
              </p>
            ) : null}
          </div>

          {bullets.length ? (
            <div className="mx-auto w-full max-w-4xl rounded-[28px] border border-white/15 bg-white/10 p-10 backdrop-blur">
              <ul className="grid gap-3 text-left text-white/90 sm:grid-cols-2">
                {bullets.map((value, index) => (
                  <BulletItem
                    key={index}
                    className="border-white/20 bg-white/10"
                    textClassName="text-sm md:text-base text-white"
                  >
                    {value}
                  </BulletItem>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mx-auto flex flex-wrap items-center justify-center gap-4">
            <a
              href="/support/contact"
              className="inline-flex items-center rounded-full bg-white px-7 py-3 text-button font-semibold text-emerald-900 shadow-soft transition hover:bg-emerald-50"
            >
              {hero.ctaText || "컨설팅 문의"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroSection({ intro }) {
  const left = intro?.left ?? {};
  const right = intro?.right ?? {};
  const benefits = toArray(intro?.benefits);

  return (
    <section className="bg-white py-20 md:py-24">
      <div className={`${CONTAINER_CLASS} grid gap-10 md:grid-cols-2`}>
        <IntroCard heading={left.heading} description={left.desc} />
        <IntroCard heading={right.heading} description={right.desc} />
      </div>
      {benefits.length ? (
        <div className={`${CONTAINER_CLASS} mt-12 flex flex-wrap justify-center gap-3`}>
          {benefits.map((benefit) => (
            <span
              key={benefit}
              className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-700"
            >
              {benefit}
            </span>
          ))}
        </div>
      ) : null}
    </section>
  );
}

function IntroCard({ heading, description }) {
  if (!heading && !description) return null;

  return (
    <div className="space-y-4 rounded-[28px] border border-emerald-100 bg-emerald-50/60 p-8 shadow-soft">
      {heading ? <h2 className="text-xl font-semibold text-emerald-900">{heading}</h2> : null}
      {description ? (
        <p className="text-sm leading-relaxed text-emerald-800">{description}</p>
      ) : null}
    </div>
  );
}

function SolutionsSection({ solutions }) {
  const items = toArray(solutions?.items);

  if (!items.length) return null;

  return (
    <section className="bg-slate-50 py-20 md:py-24">
      <div className={CONTAINER_CLASS}>
        {solutions?.title ? (
          <h2 className="text-center text-2xl font-semibold text-slate-900 md:text-3xl">
            {solutions.title}
          </h2>
        ) : null}
        <div className="mt-12 grid gap-6 md:grid-cols-3 xl:grid-cols-5">
          {items.map((item, index) => {
            const IconComponent = SOLUTION_ICONS[index % SOLUTION_ICONS.length];
            return (
              <div
                key={item?.title ?? index}
                className="flex h-full flex-col items-center gap-4 rounded-[28px] border border-emerald-100 bg-white p-6 text-center shadow-soft"
              >
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  <IconComponent className="h-9 w-9" strokeWidth={1.8} />
                </span>
                {item?.title ? (
                  <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                ) : null}
                {item?.desc ? (
                  <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection({ process }) {
  const steps = toArray(process?.steps);

  if (!steps.length) return null;

  return (
    <section className="bg-white py-20 md:py-24">
      <div className={CONTAINER_CLASS}>
        {process?.title ? (
          <h2 className="text-center text-2xl font-semibold text-slate-900 md:text-3xl">
            {process.title}
          </h2>
        ) : null}
        {process?.subtitle ? (
          <p className="mt-3 text-center text-sm text-slate-600 md:text-base">
            {process.subtitle}
          </p>
        ) : null}

        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          {steps.map((step, index) => {
            const IconComponent = PROCESS_ICONS[index % PROCESS_ICONS.length];
            return (
              <div
                key={step?.title ?? index}
                className="flex h-full flex-col items-center gap-5 rounded-[28px] border border-emerald-100 bg-white p-6 text-center shadow-soft"
              >
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  <IconComponent className="h-8 w-8" strokeWidth={1.8} />
                </span>
                {step?.title ? (
                  <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                ) : null}
                {step?.desc ? (
                  <p className="text-sm leading-relaxed text-slate-600">{step.desc}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTASection({ cta }) {
  if (!cta?.title && !cta?.description && !cta?.cta) return null;

  return (
    <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 py-20 text-white md:py-24">
      <div className={`${CONTAINER_CLASS} max-w-4xl`}>
        <div className="rounded-[28px] border border-white/20 bg-white/10 p-10 text-center shadow-soft backdrop-blur">
          {cta?.eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200">
              {cta.eyebrow}
            </p>
          ) : null}
          {cta?.title ? (
            <h3 className="mt-4 text-2xl font-semibold md:text-3xl">{cta.title}</h3>
          ) : null}
          {cta?.description ? (
            <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
              {cta.description}
            </p>
          ) : null}
          {cta?.cta ? (
            <a
              href="/support/contact"
              className="mt-8 inline-flex items-center rounded-full bg-white px-7 py-3 text-button font-semibold text-emerald-900 shadow-soft transition hover:bg-emerald-100"
            >
              {cta.cta}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
