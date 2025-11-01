import React from "react";
import power from "./power.json";
import { Link } from "react-router-dom";
import { isArray, isObject, asString, formatNumber } from "./utils";
import { Pill } from "@/components/Pill";
import { BulletItem } from "@/components/BulletItem";
import SectionCard from "@/components/SectionCard";
import ContactCTA from "@/components/ContactCTA";
import ctaContent from "@/content/ko/cta.json";

import { Tag } from "./Tag";
import { TariffTable } from "./TariffTable";
import SavingsCalculator from "./SavingsCalculator";
import segmentFactoryImg from "@/assets/PowerService/aa1.jpeg";
import segmentRetailImg from "@/assets/PowerService/aa2.jpeg";
import segmentDataImg from "@/assets/PowerService/aa3.jpeg";
import {
  DatabaseSearch,
  BrainResearch,
  Tools,
  ShieldCheck,
  Wallet,
  StatsUpSquare,
  HeadsetHelp,
} from "iconoir-react";

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
  const contactCTA = ctaContent.roofLease;

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
  const processPalettes = [
    {
      bg: "bg-emerald-500",
      ring: "ring-emerald-200/60",
      iconBg: "bg-emerald-50",
      iconText: "text-emerald-600",
    },
    {
      bg: "bg-sky-500",
      ring: "ring-sky-200/60",
      iconBg: "bg-sky-50",
      iconText: "text-sky-600",
    },
    {
      bg: "bg-blue-500",
      ring: "ring-blue-200/60",
      iconBg: "bg-blue-50",
      iconText: "text-blue-600",
    },
    {
      bg: "bg-purple-500",
      ring: "ring-purple-200/60",
      iconBg: "bg-purple-50",
      iconText: "text-purple-600",
    },
  ];
  const processIcons = [DatabaseSearch, BrainResearch, Tools, ShieldCheck];
  const benefitIconMap = [Wallet, StatsUpSquare, HeadsetHelp];

  const powerUnit = asString(cases?.unit?.power, "kW");
  const moneyUnit = asString(cases?.unit?.money, "KRW");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(209,245,225,0.8)_0%,_rgba(255,255,255,0)_65%)]" />
      <div className="container flex flex-col gap-16">
        <header className="mx-auto max-w-4xl space-y-6 text-center">
          <Pill>{asString(hero.badge)}</Pill>
          <div className="space-y-4">
            <h1 className="text-display font-semibold leading-tight ">
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
                <div className="mt-2 text-title font-semibold ">
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
              <h2 className="text-content-title font-semibold ">
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
          className="text-center"
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {segmentCards.map((card, i) => {
              const imageSrc =
                segmentImageMap[asString(card.img)] || segmentFactoryImg;
              return (
                <div
                  key={i}
                  className="flex h-full flex-col gap-4 text-center rounded-[10px] border border-emerald-100 bg-white/95 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div>
                    <img
                      className="h-full w-full rounded-[10px] object-cover"
                      src={imageSrc}
                      alt={asString(card.name)}
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-title font-semibold ">
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
          className="text-center"
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {caseItems.map((item, i) => (
              <div
                key={i}
                className="rounded-[10px] border border-emerald-100 bg-white/95 p-6 shadow-soft"
              >
                <h3 className="text-title font-semibold ">
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
          className="relative overflow-hidden text-center"
        >
          <div className="relative">
            <header className="mb-12 text-center">
              <h3 className="text-display font-semibold">
                {asString(benefits.title)}
              </h3>
              <p className="mt-3 text-description">
                {asString(benefits.subtitle)}
              </p>
            </header>

            <ul className="grid text-left sm:grid-cols-2 lg:grid-cols-3">
              {benefitBullets.map((b, i) => {
                const BenefitIcon = benefitIconMap[i % benefitIconMap.length] || Wallet;
                return (
                  <li
                    key={i}
                    className="relative flex flex-col items-center gap-8 px-10 py-10 text-center"
                  >
                    <div className="flex h-24 w-24 border items-center justify-center rounded-full bg-white/15">
                      <BenefitIcon className="h-7 w-7" strokeWidth={1.8} />
                    </div>
                    <p className="text-body leading-relaxed">{b}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Process"
          title={asString(process.title)}
          className="text-center"
        >
          <ol className="relative flex flex-col gap-10 mt-20 lg:flex-row lg:items-stretch lg:justify-between">
            {processSteps.map((step, i) => {
              const palette = processPalettes[i % processPalettes.length];
              const IconComponent = processIcons[i % processIcons.length];
              return (
                <li
                  key={i}
                  className="relative flex flex-1 flex-col items-center text-center"
                >
                  <div className="flex flex-col items-center gap-5">
                    <div className="relative flex items-center justify-center">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-full text-title font-semibold text-white ring-4 ${palette.bg} ${palette.ring}`}
                      >
                        {i + 1}
                      </div>
                      {i < processSteps.length - 1 ? (
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
                    <h3 className="text-title font-semibold ">
                      {asString(step.title)}
                    </h3>
                    <p className="text-body text-slate-600">
                      {asString(step.desc)}
                    </p>
                  </div>
                </li>
              );
            })}
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
                  <div className="text-sm font-semibold ">
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
        {/* Bottom CTA */}
        <ContactCTA
          eyebrow="CTA"
          title={contactCTA.title}
          description={contactCTA.description}
          ctaLabel={contactCTA.cta}
          className="mt-16 "
        />
      </div>
    </section>
  );
}
