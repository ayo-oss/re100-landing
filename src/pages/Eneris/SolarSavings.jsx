import React, { useMemo, useState } from "react";
import solarAvings from "./solar-savings.json";

const formatKRW = (value) =>
  new Intl.NumberFormat("ko-KR").format(Math.round(value));

const lerp = (x, x1, x2, y1, y2) => {
  if (x <= x1) return y1;
  if (x >= x2) return y2;
  const t = (x - x1) / (x2 - x1);
  return y1 + t * (y2 - y1);
};

export default function SolarSavings() {
  const { hero, slider, calc, notes } = solarAvings;

  const [bill, setBill] = useState(slider.min);

  const monthlySave = useMemo(() => {
    const value = lerp(
      bill,
      slider.min,
      slider.max,
      calc.monthly_saving_at_min_bill,
      calc.monthly_saving_at_max_bill
    );
    return Math.round(value / 1000) * 1000;
  }, [bill, slider, calc]);

  const annualSave = monthlySave * 12;

  const marks = useMemo(() => {
    const res = [];
    for (let v = slider.min; v <= slider.max; v += slider.step) {
      res.push(v);
    }
    if (!res.includes(slider.max)) res.push(slider.max);
    return res;
  }, [slider.min, slider.max, slider.step]);

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-12">
      <div className="text-center">
        <p className="text-button font-semibold uppercase tracking-[0.18em] text-emerald-600">
          {hero.topline}
        </p>
        {hero.topnote ? (
          <p className="mt-2 text-description text-slate-500">{hero.topnote}</p>
        ) : null}
      </div>

      <div className="text-center">
        <h2 className="text-display leading-snug text-slate-900">
          {hero.title_line1}
          <br className="hidden sm:block" />
          {hero.title_line2}
        </h2>
      </div>

      <div className="mx-auto w-full max-w-3xl">
        <label
          htmlFor="eneris-monthly-bill"
          className="mb-4 block text-body font-semibold text-slate-700"
        >
          {slider.aria_label}
        </label>
        <input
          id="eneris-monthly-bill"
          type="range"
          min={slider.min}
          max={slider.max}
          step={slider.step}
          value={bill}
          onChange={(event) => setBill(Number(event.target.value))}
          className="h-2 w-full appearance-none rounded-full bg-slate-200 accent-emerald-600"
          aria-label={slider.aria_label}
        />
        <div className="mt-4 flex justify-between text-description text-slate-500">
          {marks.map((mark) => (
            <span key={mark} className="tabular-nums">
              ₩{formatKRW(mark)}
            </span>
          ))}
        </div>
      </div>

      <div className="text-center">
        <p className="text-body text-slate-600">
          {hero.after_prefix}{" "}
          <span className="font-semibold text-emerald-600">
            ₩{formatKRW(monthlySave)}
          </span>{" "}
          <span className="font-semibold text-slate-900">{hero.after_suffix}</span>
        </p>

        <div className="mx-auto mt-8 max-w-md rounded-[24px] border border-emerald-100 bg-emerald-50/70 p-8 shadow-soft">
          <p className="text-title font-semibold text-slate-900">
            {hero.annual_prefix}
          </p>
          <p className="mt-3 text-display font-semibold text-emerald-700">
            <span className="underline decoration-2 underline-offset-8">
              ₩{formatKRW(annualSave)}
            </span>{" "}
            {hero.annual_suffix}
          </p>
        </div>

        {notes?.disclaimer ? (
          <p className="mt-6 text-description text-slate-500">
            {notes.disclaimer}
          </p>
        ) : null}
      </div>
    </div>
  );
}
