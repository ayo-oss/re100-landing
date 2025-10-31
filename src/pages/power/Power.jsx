import React from "react";
import power from "./power.json";
import { Link } from "react-router-dom";

const isArray = (value) => (Array.isArray(value) ? value : []);
const isObject = (value) =>
  value && typeof value === "object" && !Array.isArray(value);
const asString = (value, fallback = "") =>
  typeof value === "string" ? value : fallback;
const formatNumber = (value) =>
  typeof value === "number" ? value.toLocaleString() : asString(value);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-sm font-semibold text-emerald-600">
    {children}
  </span>
);

const BulletItem = ({ children }) => (
  <li className="flex items-start gap-3 rounded-2xl border border-emerald-100 bg-white px-4 py-3 shadow-soft">
    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
      <svg
        aria-hidden="true"
        className="h-3 w-3"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m3 6 2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
    <span className="text-sm text-slate-700">{children}</span>
  </li>
);

const SectionCard = ({ title, eyebrow, description, children, className }) => (
  <section
    className={`rounded-[28px] border border-emerald-100 bg-white/90 p-8 shadow-soft backdrop-blur ${className || ""}`}
  >
    {eyebrow ? (
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
        {eyebrow}
      </p>
    ) : null}
    {title ? (
      <h2 className="mt-3 text-content-title font-semibold text-slate-900">
        {title}
      </h2>
    ) : null}
    {description ? (
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    ) : null}
    {children ? <div className="mt-6">{children}</div> : null}
  </section>
);

const Tag = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
    {children}
  </span>
);

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
  const tariffRows = isArray(tariff.rows);
  const tariffNotes = isArray(tariff.notes);
  const eligibilityItems = isArray(eligibility.items);
  const partnerDesc = isArray(partner.desc);
  const segmentCards = isArray(segments.cards);
  const caseItems = isArray(cases.items);
  const benefitBullets = isArray(benefits.bullets);
  const processSteps = isArray(process.steps);
  const badgeItems = isArray(badges.items);
  const allianceOrgs = isArray(alliances.orgs);

  const powerUnit = asString(cases?.unit?.power, "kW");
  const moneyUnit = asString(cases?.unit?.money, "KRW");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(209,245,225,0.8)_0%,_rgba(255,255,255,0)_65%)]" />
      <div className="container flex flex-col gap-16">
        <section className="grid gap-12 rounded-[32px] border border-emerald-100 bg-white/90 p-10 shadow-soft lg:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)]">
          <div className="flex flex-col gap-6">
            <div>
              <Pill>{asString(hero.heading, "Power saving consultation")}</Pill>
              <h1 className="mt-4 text-display font-semibold leading-tight text-slate-900">
                {asString(power.title)}
              </h1>
              <p className="mt-3 text-description text-slate-600">
                {asString(power.subtitle)}
              </p>
            </div>

            {heroBullets.length ? (
              <ul className="divide-y divide-emerald-100 rounded-3xl border border-emerald-100 bg-white shadow-soft">
                {heroBullets.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 px-6 py-4 text-sm text-slate-700"
                  >
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <svg
                        aria-hidden="true"
                        className="h-3 w-3"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m3 6 2 2 4-4"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/support/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-button font-semibold text-white shadow-soft transition hover:bg-brand-dark"
              >
                {asString(power?.cta?.primary, "Book a call")}
              </Link>
              <Link
                to="/service/service-1"
                className="inline-flex items-center gap-2 rounded-full border border-brand/40 px-6 py-3 text-button font-semibold text-brand-dark transition hover:bg-emerald-50"
              >
                {asString(power?.cta?.secondary, "View services")}
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-[28px] border border-emerald-100 bg-emerald-50/70 p-8 shadow-inner">
            <h2 className="text-content-title font-semibold text-emerald-800">
              {asString(tariff.title, "Tariff comparison")}
            </h2>
            <div className="overflow-hidden rounded-3xl border border-white/70 bg-white shadow-soft">
              <table className="min-w-full divide-y divide-emerald-100 text-sm">
                <thead className="bg-emerald-50/80 text-xs uppercase tracking-[0.12em] text-emerald-600">
                  <tr>
                    <th className="px-4 py-3 text-left">
                      {asString(tariff.colLabels?.plan, "Plan")}
                    </th>
                    <th className="px-4 py-3 text-left">
                      {asString(tariff.colLabels?.base, "Base fee")}
                    </th>
                    <th className="px-4 py-3 text-left">
                      {asString(tariff.colLabels?.usage, "Usage rate")}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-50 text-slate-700">
                  {tariffRows.map((row, index) => (
                    <tr key={index} className="bg-white/95">
                      <td className="px-4 py-3 font-semibold">
                        {asString(row?.class)}
                      </td>
                      <td className="px-4 py-3">{formatNumber(row?.basic)}</td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-2">
                          {Object.entries(row?.kwh || {}).map(
                            ([label, value]) => (
                              <span
                                key={label}
                                className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs"
                              >
                                <span className="font-medium text-emerald-700">
                                  {label}
                                </span>
                                <span>{formatNumber(value)}</span>
                              </span>
                            )
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {tariffNotes.length ? (
              <ul className="list-disc space-y-2 pl-5 text-sm text-emerald-700">
                {tariffNotes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr),minmax(0,0.8fr)]">
          <SectionCard
            eyebrow="Eligibility"
            title={asString(eligibility.title)}
            description={asString(eligibility.subtitle)}
          >
            <ul className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              {eligibilityItems.map((item, index) => (
                <BulletItem key={index}>{item}</BulletItem>
              ))}
            </ul>
          </SectionCard>
          <SectionCard
            eyebrow="Partner"
            title={asString(partner.title)}
            description={asString(partner.name)}
          >
            <ul className="space-y-3 text-sm text-slate-700">
              {partnerDesc.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>{item}</span>
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
            {segmentCards.map((card, index) => (
              <div
                key={index}
                className="flex h-full flex-col gap-4 rounded-[26px] border border-emerald-100 bg-white/95 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-title font-semibold text-slate-900">
                    {asString(card.name)}
                  </h3>
                  <div className="flex flex-wrap justify-end gap-2">
                    {isArray(card.conditions).map((condition, idx) => (
                      <Tag key={idx}>{condition}</Tag>
                    ))}
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  {isArray(card.methods).map((method, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>{method}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Case Study"
          title={asString(cases.title)}
          description="Real performance results achieved by our customers."
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {caseItems.map((item, index) => (
              <div
                key={index}
                className="rounded-[26px] border border-emerald-100 bg-white/95 p-6 shadow-soft"
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
                  {formatNumber(item.saving)}
                  {moneyUnit} savings
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
            {benefitBullets.map((item, index) => (
              <BulletItem key={index}>{item}</BulletItem>
            ))}
          </ul>
        </SectionCard>

        <SectionCard
          eyebrow="Process"
          title={asString(process.title)}
          description="Transparent step-by-step workflow from assessment to verification."
        >
          <ol className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <li
                key={index}
                className="flex h-full flex-col gap-3 rounded-[26px] border border-emerald-100 bg-white/95 p-5 shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-600">
                    {index + 1}
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
              {badgeItems.map((item, index) => (
                <Tag key={index}>{item}</Tag>
              ))}
            </div>
          </SectionCard>
          <SectionCard
            eyebrow="Alliances"
            title={asString(alliances.title)}
            description="Trusted alliances across the energy and construction ecosystem."
          >
            <div className="space-y-3">
              {allianceOrgs.map((org, index) => (
                <div
                  key={index}
                  className="rounded-[26px] border border-emerald-100 bg-white/95 px-5 py-4 shadow-soft"
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
