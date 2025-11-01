import React, { useState } from "react";
import { NavArrowDown } from "iconoir-react";
import DATA from "./savings.config.json";

const categories = Array.isArray(DATA.categories) ? DATA.categories : [];
const DEFAULT_CATEGORY_ID = categories[0]?.id ?? "";
const DEFAULT_USAGE_KW = Number(DATA.defaults?.usage_kw ?? 0);

const STRING_FALLBACKS = {
  title: "",
  subtitle: "",
  categoryLabel: "분야 선택",
  usageLabel: "월 사용량",
  usageHint: "kW 단위로 입력해 주세요.",
  usageSuffix: "kW",
  rangeTemplate: "월 {min}% ~ {max}% 절감",
  minLabel: "최소 절감액 (월)",
  maxLabel: "최대 절감액 (월)",
  annualSuffix: "연 환산",
  note: "",
};

const STRINGS = { ...STRING_FALLBACKS, ...(DATA.strings ?? {}) };
const locale = DATA.locale ?? "ko-KR";
const currencyCode = DATA.currency_code ?? "KRW";

const formatNumber = (value) =>
  new Intl.NumberFormat(locale).format(Math.max(0, Math.round(value)));

const formatCurrency = (value) =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(value)));

const template = (str, vars) =>
  str.replace(/\{(.*?)\}/g, (_, key) => String(vars[key] ?? ""));

export default function SavingsCalculator() {
  const [categoryId, setCategoryId] = useState(DEFAULT_CATEGORY_ID);
  const [usageInput, setUsageInput] = useState(
    DEFAULT_USAGE_KW > 0 ? String(DEFAULT_USAGE_KW) : ""
  );

  const selectedCategory =
    categories.find((c) => c.id === categoryId) ?? categories[0] ?? null;

  const parsedUsage = Number(usageInput);
  const usageValue =
    Number.isFinite(parsedUsage) && parsedUsage >= 0 ? parsedUsage : 0;

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

  const monthlyCost = basePerKwMonthly * usageValue;
  const minMonthlySavings = selectedCategory
    ? monthlyCost * (selectedCategory.percent_min / 100)
    : 0;
  const maxMonthlySavings = selectedCategory
    ? monthlyCost * (selectedCategory.percent_max / 100)
    : 0;

  const minAnnualSavings = minMonthlySavings * 12;
  const maxAnnualSavings = maxMonthlySavings * 12;

  const handleUsageChange = (event) => {
    const { value } = event.target;
    if (value === "") {
      setUsageInput("");
      return;
    }
    const parsed = Number(value);
    if (!Number.isFinite(parsed) || parsed < 0) return;
    setUsageInput(value);
  };

  const handleUsageBlur = () => {
    if (usageInput === "") {
      setUsageInput("0");
    }
  };

  if (!categories.length) {
    return null;
  }

  return (
    <div className="relative mb-20 overflow-hidden rounded-[24px] border border-emerald-100 bg-white/80 p-8 shadow-soft md:p-12">
      <div className="relative z-10">
        <h2 className="text-content-title font-semibold text-slate-900">
          {STRINGS.title}
        </h2>
        {STRINGS.subtitle ? (
          <p className="mt-2 text-body text-slate-600">{STRINGS.subtitle}</p>
        ) : null}

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-stretch">
          <div className="flex flex-col gap-6 rounded-[18px] border border-emerald-100 bg-emerald-50/60 px-6 py-6 shadow-soft lg:w-[360px] lg:flex-shrink-0">
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
                  value={selectedCategory?.id ?? ""}
                  onChange={(event) => setCategoryId(event.target.value)}
                  className="w-full appearance-none rounded-full bg-emerald-600 px-5 py-4 pr-12 text-left text-title font-semibold text-white shadow-lg transition focus:outline-none focus:ring-4 focus:ring-emerald-300/60"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.label}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white">
                  <NavArrowDown className="h-5 w-5" strokeWidth={2} />
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
                  value={usageInput}
                  onChange={handleUsageChange}
                  onBlur={handleUsageBlur}
                  className="w-full bg-transparent text-title font-semibold outline-none"
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

          <div className="grid flex-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col justify-center rounded-[18px] border border-emerald-100 bg-white px-6 py-6 text-center shadow-soft">
              <div className="text-body font-medium text-slate-600">
                {STRINGS.usageLabel}
              </div>
              <div className="mt-2 text-display font-semibold text-slate-900">
                {formatNumber(usageValue)}
                <span className="ml-1 text-title font-semibold text-slate-500">
                  {STRINGS.usageSuffix}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-[18px] border border-emerald-100 bg-white px-6 py-6 text-center shadow-soft">
              <div className="text-body font-medium text-slate-600">
                {STRINGS.minLabel}
              </div>
              <div className="mt-2 text-display font-semibold text-emerald-600">
                {formatCurrency(minMonthlySavings)}
              </div>
              <div className="mt-1 text-footer text-slate-500">
                {STRINGS.annualSuffix} {formatCurrency(minAnnualSavings)}
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-[18px] border border-emerald-100 bg-white px-6 py-6 text-center shadow-soft">
              <div className="text-body font-medium text-slate-600">
                {STRINGS.maxLabel}
              </div>
              <div className="mt-2 text-display font-semibold text-rose-500">
                {formatCurrency(maxMonthlySavings)}
              </div>
              <div className="mt-1 text-footer text-slate-500">
                {STRINGS.annualSuffix} {formatCurrency(maxAnnualSavings)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
