import React from "react";
import {
  SunLight,
  DollarCircle,
  Settings,
  HomeSimple,
  StatsUpSquare,
} from "iconoir-react";

const iconMap = {
  solar: SunLight,
  dollar: DollarCircle,
  gear: Settings,
  roof: HomeSimple,
  chart: StatsUpSquare,
};

export function FeatureItem({ item }) {
  const IconComponent = iconMap[item.icon] || SunLight;
  return (
    <div className="group relative mx-auto flex aspect-square w-full max-w-[18rem] flex-col items-center justify-center gap-6 rounded-full border border-emerald-100 bg-white/90 px-8 text-center shadow-soft transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl sm:max-w-[20rem]">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100/70 text-emerald-600 transition group-hover:bg-emerald-100">
        <IconComponent className="h-12 w-12" strokeWidth={1.8} />
      </div>
      <div className="space-y-2 px-2 leading-snug">
        <div className="text-title font-semibold text-brand-dark">
          {item.desc}
        </div>
        <div className="text-body font-medium text-slate-600">{item.title}</div>
      </div>
    </div>
  );
}
