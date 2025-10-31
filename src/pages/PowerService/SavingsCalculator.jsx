import React, { useMemo, useState } from "react";
import DATA from "./savings.config.json";

const CATEGORIES = Array.isArray(DATA.categories) ? DATA.categories : [];
const DEFAULT_CATEGORY_ID = CATEGORIES[0]?.id ?? "";
const DEFAULT_USAGE_KW = Number(DATA.defaults?.usage_kw ?? 0);

const STRING_FALLBACKS = {
  title: "",
  subtitle: "",
  categoryLabel: "분야 선택",
  usageLabel: "월 사용량",
  usageHint: "kW 단위로 입력하세요.",
  usageSuffix: "kW",
  rangeTemplate: "월 {min}% ~ {max}% 절감 예상",
  minLabel: "월 최저 절감액",
  maxLabel: "월 최대 절감액",
  annualSuffix: "연 환산",
  note: "",
};

const STRINGS = { ...STRING_FALLBACKS, ...(DATA.strings ?? {}) };

const formatNumber = (value, locale) =>
  new Intl.NumberFormat(locale).format(Math.max(0, Math.round(value)));

const formatCurrency = (value, locale) => `${formatNumber(value, locale)}원`;

const template = (str, vars) =>
  str.replace(/\{(.*?)\}/g, (_, key) => String(vars[key] ?? ""));

const clampNonNegativeNumber = (value, fallback) => {
  if (value === "" || value === null || value === undefined) return 0;
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
};

export default function SavingsCalculator() {
  const [categoryId, setCategoryId] = useState(DEFAULT_CATEGORY_ID);
  const [usageKw, setUsageKw] = useState(DEFAULT_USAGE_KW);

  const selectedCategory = useMemo(
    () => CATEGORIES.find((c) => c.id === categoryId) ?? CATEGORIES[0] ?? null,
    [categoryId]
  );

  const rangeText = selectedCategory
    ? template(STRINGS.rangeTemplate, {
        min: selectedCategory.percent_min,
        max: selectedCategory.percent_max,
      })
    : "";

  const basePerKwMonthly = selectedCategory
    ? selectedCategory.unit_kwh_won * DATA.hours_per_month +
      selectedCategory.demand_kw_month_won
    : 0;

  const monthlyCost = basePerKwMonthly * usageKw;
  const minMonthlySavings = selectedCategory
    ? monthlyCost * (selectedCategory.percent_min / 100)
    : 0;
  const maxMonthlySavings = selectedCategory
    ? monthlyCost * (selectedCategory.percent_max / 100)
    : 0;

  const minAnnualSavings = minMonthlySavings * 12;
  const maxAnnualSavings = maxMonthlySavings * 12;

  const locale = DATA.locale ?? "ko-KR";

  const handleUsageChange = (event) => {
    const next = clampNonNegativeNumber(event.target.value, usageKw);
    setUsageKw(next);
  };

  return (
    <div className="relative mb-20 overflow-hidden p-8 md:p-12">
      <div className="relative z-10">
        <h2 className="text-content-title text-slate-900">{STRINGS.title}</h2>
        {STRINGS.subtitle ? (
          <p className="mt-2 text-body text-slate-600">{STRINGS.subtitle}</p>
        ) : null}

        <div className="mt-8 flex flex-col gap-2 lg:flex-row lg:items-stretch">
          <div className="flex flex-col gap-2 rounded-[10px] border border-emerald-100 bg-emerald-50/60 px-6 py-6 shadow-soft lg:w-[360px] lg:flex-shrink-0">
            <div>
              <label
                htmlFor="power-savings-category"
                className="text-body font-medium text-slate-700"
              >
                {STRINGS.categoryLabel}
              </label>
              <div className="relative mt-4 w-full">
                <select
                  id="power-savings-category"
                  value={categoryId}
                  onChange={(event) => setCategoryId(event.target.value)}
                  className="w-full appearance-none rounded-full bg-emerald-600 px-5 py-4 pr-12 text-left text-title font-semibold text-white shadow-lg transition focus:outline-none focus:ring-4 focus:ring-emerald-300/60"
                >
                  {CATEGORIES.map((category) => (
                    <option
                      key={category.id}
                      value={category.id}
                      className="text-slate-900"
                    >
                      {category.label}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              {rangeText ? (
                <p className="mt-4 text-footer text-slate-600">{rangeText}</p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="power-savings-usage"
                className="text-body font-medium text-slate-700"
              >
                {STRINGS.usageLabel}
              </label>
              <div className="mt-3 flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-5 py-4 shadow-soft focus-within:border-emerald-400">
                <input
                  id="power-savings-usage"
                  type="number"
                  min="0"
                  value={usageKw}
                  onChange={handleUsageChange}
                  className="w-full bg-transparent text-title font-semibold text-slate-900 outline-none"
                />
                <span className="text-title font-semibold text-slate-500">
                  {STRINGS.usageSuffix}
                </span>
              </div>
              <p className="mt-2 text-footer text-slate-500">
                {STRINGS.usageHint}
              </p>
              {STRINGS.note ? (
                <p className="text-xs text-slate-500">{STRINGS.note}</p>
              ) : null}
            </div>
          </div>

          <div className="grid flex-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col justify-center rounded-[10px] border border-emerald-100 bg-white px-6 py-6 text-center shadow-soft">
              <div className="text-body font-medium text-slate-600">
                {STRINGS.usageLabel}
              </div>
              <div className="mt-2 text-display font-semibold text-slate-900">
                {formatNumber(usageKw, locale)}
                <span className="ml-1 text-title font-semibold text-slate-500">
                  {STRINGS.usageSuffix}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-[10px] border border-emerald-100 bg-white px-6 py-6 text-center shadow-soft">
              <div className="text-body font-medium text-slate-600">
                {STRINGS.minLabel}
              </div>
              <div className="mt-2 text-display font-semibold text-slate-900">
                {formatCurrency(minMonthlySavings, locale)}
              </div>
              <div className="mt-1 text-footer text-slate-500">
                {STRINGS.annualSuffix}{" "}
                {formatCurrency(minAnnualSavings, locale)}
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-[10px] border border-emerald-100 bg-white px-6 py-6 text-center shadow-soft">
              <div className="text-body font-medium text-slate-600">
                {STRINGS.maxLabel}
              </div>
              <div className="mt-2 text-display font-semibold text-red-500">
                {formatCurrency(maxMonthlySavings, locale)}
              </div>
              <div className="mt-1 text-footer text-slate-500">
                {STRINGS.annualSuffix}{" "}
                {formatCurrency(maxAnnualSavings, locale)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
