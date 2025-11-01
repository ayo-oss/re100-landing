import React from "react";
import eneris from "./eneris.json";
import SectionCard from "@/components/SectionCard";
import { Pill } from "@/components/Pill";
import { BulletItem } from "@/components/BulletItem";
import SolarSavings from "./SolarSavings";
import { DatabaseSearch, Tools, ShieldCheck, GraphUp } from "iconoir-react";

const ICON_MAP = {
  DatabaseSearch,
  Tools,
  ShieldCheck,
  GraphUp,
};

const DEFAULT_ICON = ShieldCheck;

const IconCircle = ({ icon }) => {
  const IconComponent = ICON_MAP[icon] || DEFAULT_ICON;
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
      <IconComponent className="h-6 w-6" strokeWidth={1.6} />
    </span>
  );
};

export default function Eneris0401() {
  const { hero = {}, bullets = [], metrics = [], sections = [], cta = {} } = eneris;
  const bulletItems = Array.isArray(bullets) ? bullets : [];
  const metricItems = Array.isArray(metrics) ? metrics : [];
  const sectionItems = Array.isArray(sections) ? sections : [];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/40 via-white to-white py-24">
      <div className="container flex flex-col gap-20 px-4 md:px-8">
        <header className="mx-auto max-w-4xl text-center">
          {hero.badge ? <Pill>{hero.badge}</Pill> : null}
          {hero.title ? (
            <h1 className="mt-6 text-display font-semibold leading-tight text-slate-900">
              {hero.title}
            </h1>
          ) : null}
          {hero.subtitle ? (
            <p className="mt-4 text-description text-slate-600">
              {hero.subtitle}
            </p>
          ) : null}
          {hero.note ? (
            <p className="mt-4 text-body text-slate-500">{hero.note}</p>
          ) : null}
        </header>

        {bulletItems.length ? (
          <ul className="grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
            {bulletItems.map((text, index) => (
              <BulletItem key={index}>{text}</BulletItem>
            ))}
          </ul>
        ) : null}

        {metricItems.length ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {metricItems.map(({ label, value, desc }, index) => (
              <div
                key={index}
                className="rounded-[24px] border border-emerald-100 bg-white/95 px-6 py-6 text-center shadow-soft"
              >
                <p className="text-button font-semibold uppercase tracking-[0.18em] text-emerald-600">
                  {label}
                </p>
                <p className="mt-3 text-title font-semibold text-slate-900">
                  {value}
                </p>
                {desc ? (
                  <p className="mt-2 text-description text-slate-500">{desc}</p>
                ) : null}
              </div>
            ))}
          </div>
        ) : null}

        {sectionItems.map((section, index) => (
          <Section key={index} section={section} />
        ))}

        <SectionCard
          eyebrow="Simulation"
          title="태양광 연계 요금 절감 시뮬레이터"
          description="현재 전기요금을 입력하면 Eneris 솔루션 도입 시 예상 절감 금액을 확인할 수 있습니다."
          className="rounded-[28px] border border-emerald-100 bg-white/90 shadow-soft"
        >
          <SolarSavings />
        </SectionCard>

        {(cta.title || cta.subtitle || cta.actions?.length) && (
          <div className="rounded-[28px] border border-emerald-100 bg-emerald-50/70 p-10 text-center shadow-soft">
            {cta.title ? (
              <h3 className="text-content-title font-semibold text-slate-900">
                {cta.title}
              </h3>
            ) : null}
            {cta.subtitle ? (
              <p className="mt-3 text-description text-slate-600">
                {cta.subtitle}
              </p>
            ) : null}
            {cta.actions?.length ? (
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                {cta.actions.map((action, index) => (
                  <a
                    key={index}
                    href={action.href || "#"}
                    target={action.external ? "_blank" : undefined}
                    rel={action.external ? "noreferrer" : undefined}
                    className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-button font-semibold shadow-soft transition ${
                      action.primary
                        ? "bg-brand text-white hover:bg-brand-dark"
                        : "border border-brand/50 text-brand-dark hover:bg-emerald-50"
                    }`}
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}

function Section({ section }) {
  const { type = "cards", header = {}, items = [], columns = [], rows = [] } =
    section || {};

  const cardClassName = "rounded-[28px] border border-emerald-100 bg-white/95 shadow-soft";

  if (type === "cards") {
    return (
      <SectionCard
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.desc}
        className={cardClassName}
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex h-full flex-col gap-4 rounded-[20px] border border-emerald-50 bg-white/80 p-6 shadow-soft"
            >
              <IconCircle icon={item.icon} />
              {item.eyebrow ? (
                <p className="text-button font-semibold uppercase tracking-[0.18em] text-emerald-600">
                  {item.eyebrow}
                </p>
              ) : null}
              {item.title ? (
                <h3 className="text-title font-semibold text-slate-900">
                  {item.title}
                </h3>
              ) : null}
              {item.desc ? (
                <p className="text-body text-slate-600">{item.desc}</p>
              ) : null}
              {item.badges?.length ? (
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.badges.map((badge, badgeIndex) => (
                    <span
                      key={badgeIndex}
                      className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-button font-semibold text-emerald-700"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </SectionCard>
    );
  }

  if (type === "list") {
    return (
      <SectionCard
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.desc}
        className={cardClassName}
      >
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((text, index) => (
            <BulletItem key={index}>{text}</BulletItem>
          ))}
        </ul>
      </SectionCard>
    );
  }

  if (type === "steps") {
    return (
      <SectionCard
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.desc}
        className={cardClassName}
      >
        <ol className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((step, index) => (
            <li
              key={index}
              className="flex h-full flex-col gap-4 rounded-[20px] border border-emerald-50 bg-white/80 p-6 shadow-soft"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-button font-semibold text-emerald-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <IconCircle icon={step.icon} />
              </div>
              {step.title ? (
                <h3 className="text-body font-semibold text-slate-900">
                  {step.title}
                </h3>
              ) : null}
              {step.desc ? (
                <p className="text-description text-slate-600">{step.desc}</p>
              ) : null}
            </li>
          ))}
        </ol>
      </SectionCard>
    );
  }

  if (type === "table") {
    return (
      <SectionCard
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.desc}
        className={cardClassName}
      >
        <div className="overflow-x-auto rounded-[24px] border border-emerald-50 bg-white shadow-soft">
          <table className="w-full border-collapse text-left">
            {columns.length ? (
              <thead className="bg-emerald-50/80 text-button uppercase tracking-[0.18em] text-emerald-700">
                <tr>
                  {columns.map((column, index) => (
                    <th key={index} className="px-5 py-4">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
            ) : null}
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-t border-emerald-50 text-body text-slate-700">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-5 py-4">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    );
  }

  return null;
}
