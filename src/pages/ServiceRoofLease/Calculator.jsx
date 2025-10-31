import React from "react";
import { useCalculator } from "./useCalculator";
import { numberWithCommas } from "./utils";

export function Calculator({ est }) {
  const { options, selectedIndex, setSelectedIndex, kw, annual, lifetime } =
    useCalculator(est);

  return (
    <div className="relative overflow-hidden p-8 mb-20">
      <div className="relative z-10">
        <h2 className="text-content-title ">{est.title}</h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-[260px,minmax(0,1fr)] lg:items-center">
          <div>
            <label
              htmlFor="areaSelect"
              className="text-body font-medium text-slate-700"
            >
              {est.areaLabel}
            </label>
            <div className="relative mt-4">
              <select
                id="areaSelect"
                value={selectedIndex}
                onChange={(e) => setSelectedIndex(Number(e.target.value))}
                className="w-full appearance-none rounded-full bg-emerald-600 px-5 py-4 pr-12 text-left text-title font-semibold text-white shadow-lg transition focus:outline-none focus:ring-4 focus:ring-emerald-300/60"
              >
                {options.map((option, index) => (
                  <option
                    key={option.label ?? index}
                    value={index}
                    className=""
                  >
                    {option.label}
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
            <p className="mt-4 text-footer text-slate-600">{est.note}</p>
          </div>

          <dl className="grid gap-6 text-center sm:grid-cols-3">
            <div className="px-6 py-6">
              <dt className="text-body font-medium text-slate-600">
                {est.capacityLabel}
              </dt>
              <dd className="mt-2 text-display font-semibold ">
                {numberWithCommas(kw)}
                <span className="ml-1 text-title font-semibold text-slate-500">
                  kW
                </span>
              </dd>
            </div>
            <div className="px-6 py-6">
              <dt className="text-body font-medium text-slate-600">
                {est.annualIncomeLabel}
              </dt>
              <dd className="mt-2 text-display font-semibold ">
                {numberWithCommas(annual)}
                <span className="ml-1 text-title font-semibold text-slate-500">
                  {est.currencySuffix}
                </span>
              </dd>
            </div>
            <div className="px-6 py-6">
              <dt className="text-body font-medium text-slate-600">
                {est.lifetimePrefix}
              </dt>
              <dd className="mt-2 text-display font-semibold text-red-500">
                {numberWithCommas(lifetime)}
                <span className="ml-1 text-title font-semibold text-slate-500">
                  {est.currencySuffix}
                </span>
              </dd>
              <div className="mt-1 text-footer text-slate-600">
                {est.lifetimeSuffix}
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
