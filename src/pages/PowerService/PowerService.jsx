import React from "react";
import power from "./power.json";
import { Link } from "react-router-dom";
import { isArray, isObject, asString, formatNumber } from "./utils";
import { Pill } from "./Pill";
import { BulletItem } from "./BulletItem";
import { SectionCard } from "./SectionCard";
import { Tag } from "./Tag";
import { TariffTable } from "./TariffTable";
import SavingsCalculator from "./SavingsCalculator";
import segmentFactoryImg from "../../assets/PowerService/aa1.jpeg";
import segmentRetailImg from "../../assets/PowerService/aa2.jpeg";
import segmentDataImg from "../../assets/PowerService/aa3.jpeg";

export default function PowerService() {
  const hero = isObject(power.hero) ? power.hero : {};
  const tariff = isObject(power.tariff) ? power.tariff : {};
  const eligibility = isObject(power.eligibility) ? power.eligibility : {};
  const partner = isObject(power.partner) ? power.partner : {};
  const segments = isObject(power.segments) ? power.segments : {};
  const cases = isObject(power.cases) ? power.cases : {};
  const benefits = isObject(power.benefits) ? power.benefits : {};
  const process = isObject(power.process) ? power.process : {};
  const badges = isObject(power.badges) ? power.badges : {};
  const alliances = isObject(power.alliances) ? power.alliances : {};

  const heroBullets = isArray(hero.bullets);
  const heroMetrics = isArray(hero.metrics);
  const tariffTables = isArray(tariff.tables);
  const eligibilityItems = isArray(eligibility.items);
  const partnerDesc = isArray(partner.desc);
  const segmentCards = isArray(segments.cards);
  const caseItems = isArray(cases.items);
  const benefitBullets = isArray(benefits.bullets);
  const processSteps = isArray(process.steps);
  const badgeItems = isArray(badges.items);
  const allianceOrgs = isArray(alliances.orgs);
  const segmentImageMap = {
    "aa1.jpeg": segmentFactoryImg,
    "aa2.jpeg": segmentRetailImg,
    "aa3.jpeg": segmentDataImg,
  };

  const powerUnit = asString(cases?.unit?.power, "kW");
  const moneyUnit = asString(cases?.unit?.money, "KRW");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(209,245,225,0.8)_0%,_rgba(255,255,255,0)_65%)]" />
      <div className="container flex flex-col gap-16">
        <header className="mx-auto max-w-4xl space-y-6 text-center">
          <Pill>{asString(hero.badge)}</Pill>
          <div className="space-y-4">
            <h1 className="text-display font-semibold leading-tight text-slate-900">
              {asString(hero.title)}
            </h1>
            <p className="text-description text-slate-600">
              {asString(hero.subtitle)}
            </p>
          </div>
        </header>

        {heroBullets.length ? (
          <ul className="grid list-none gap-3 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-3">
            {heroBullets.map((item, i) => (
              <BulletItem key={i}>{item}</BulletItem>
            ))}
          </ul>
        ) : null}

        {heroMetrics.length ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {heroMetrics.map((m, i) => (
              <div
                key={i}
                className="rounded-[10px] border border-emerald-100 bg-white/90 px-6 py-5 text-center shadow-soft"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
                  {asString(m.label)}
                </div>
                <div className="mt-2 text-title font-semibold text-slate-900">
                  {asString(m.value)}
                </div>
              </div>
            ))}
          </div>
        ) : null}

        <div className="flex flex-wrap items-center justify-center">
          <Link
            to="/support/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-button font-semibold text-white shadow-soft transition hover:bg-brand-dark"
          >
            {asString(hero?.cta?.primary, "Request consultation")}
          </Link>
        </div>

        {hero.highlight ? (
          <div className="mx-auto max-w-3xl rounded-[10px] border border-emerald-100 bg-emerald-50/70 px-6 py-4 text-center text-sm text-emerald-700 shadow-soft">
            {hero.highlight}
          </div>
        ) : null}

        {tariffTables.length ? (
          <section className="space-y-8">
            <div className="space-y-3 text-center">
              <h2 className="text-content-title font-semibold text-slate-900">
                {asString(tariff.title)}
              </h2>
              <p className="text-sm text-slate-600">
                {asString(tariff.description)}
              </p>
              {tariff.note ? (
                <p className="text-xl text-slate-500">{tariff.note}</p>
              ) : null}
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {tariffTables.map((t, i) => (
                <TariffTable key={i} table={t} labels={tariff.colLabels} />
              ))}
            </div>
          </section>
        ) : null}

        <SavingsCalculator />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr),minmax(0,0.8fr)]">
          <SectionCard
            eyebrow="Eligibility"
            title={asString(eligibility.title)}
            description={asString(eligibility.subtitle)}
          >
            <ul className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              {eligibilityItems.map((item, i) => (
                <BulletItem key={i}>{item}</BulletItem>
              ))}
            </ul>
          </SectionCard>
          <SectionCard
            eyebrow="Partner"
            title={asString(partner.title)}
            description={asString(partner.name)}
          >
            <ul className="space-y-3 text-sm text-slate-700">
              {partnerDesc.map((d, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>

        <SectionCard
          eyebrow="Segments"
          title={asString(segments.title)}
          description={asString(segments.subtitle)}
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {segmentCards.map((card, i) => {
              const imageSrc =
                segmentImageMap[asString(card.img)] || segmentFactoryImg;
              return (
                <div
                  key={i}
                  className="flex h-full flex-col gap-4 rounded-[14px] border border-emerald-100 bg-white/95 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div>
                    <img
                      className="h-full w-full rounded-[10px] object-cover"
                      src={imageSrc}
                      alt={asString(card.name)}
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-title font-semibold text-slate-900">
                      {asString(card.name)}
                    </h3>
                  </div>
                  <div className="flex flex-wrap justify-end gap-2">
                    {isArray(card.conditions).map((c, idx) => (
                      <Pill key={idx}>{c}</Pill>
                    ))}
                  </div>
                  <ul className="space-y-2 text-lg text-slate-700">
                    {isArray(card.methods).map((m, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Case Study"
          title={asString(cases.title)}
          description="Real performance results achieved by our customers."
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {caseItems.map((item, i) => (
              <div
                key={i}
                className="rounded-[10px] border border-emerald-100 bg-white/95 p-6 shadow-soft"
              >
                <h3 className="text-title font-semibold text-slate-900">
                  {asString(item.name)}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {formatNumber(item.from)}
                  {powerUnit} → {formatNumber(item.to)}
                  {powerUnit}
                </p>
                <p className="mt-1 text-description font-semibold text-emerald-600">
                  {formatNumber(item.saving)} {moneyUnit} savings
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Benefits"
          title={asString(benefits.title)}
          description={asString(benefits.subtitle)}
        >
          <ul className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            {benefitBullets.map((b, i) => (
              <BulletItem key={i}>{b}</BulletItem>
            ))}
          </ul>
        </SectionCard>

        <SectionCard
          eyebrow="Process"
          title={asString(process.title)}
          description="Transparent step-by-step workflow from assessment to verification."
        >
          <ol className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, i) => (
              <li
                key={i}
                className="flex h-full flex-col gap-3 rounded-[10px] border border-emerald-100 bg-white/95 p-5 shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-600">
                    {i + 1}
                  </span>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {asString(step.title)}
                  </h3>
                </div>
                <p className="text-sm text-slate-600">{asString(step.desc)}</p>
              </li>
            ))}
          </ol>
        </SectionCard>

        <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)]">
          <SectionCard
            eyebrow="Special Point"
            title={asString(badges.title)}
            description="Key differentiators that power FLAG's savings program."
          >
            <div className="flex flex-wrap gap-3">
              {badgeItems.map((x, i) => (
                <Tag key={i}>{x}</Tag>
              ))}
            </div>
          </SectionCard>
          <SectionCard
            eyebrow="Alliances"
            title={asString(alliances.title)}
            description="Trusted alliances across the energy and construction ecosystem."
          >
            <div className="space-y-3">
              {allianceOrgs.map((org, i) => (
                <div
                  key={i}
                  className="rounded-[10px] border border-emerald-100 bg-white/95 px-5 py-4 shadow-soft"
                >
                  <div className="text-sm font-semibold text-slate-900">
                    {asString(org.name)}
                  </div>
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    {asString(org.en)}
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </div>
    </section>
  );
}
