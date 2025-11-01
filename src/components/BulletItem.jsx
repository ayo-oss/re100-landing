import React from "react";
import { Check } from "iconoir-react";

export function BulletItem({
  children,
  className = "",
  textClassName = "text-body text-slate-700",
}) {
  return (
    <li
      className={`flex items-start gap-3 rounded-2xl border border-emerald-100 bg-white px-4 py-3 shadow-soft ${className}`.trim()}
    >
      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
        <Check className="h-3 w-3" strokeWidth={1.8} />
      </span>
      <span className={textClassName}>{children}</span>
    </li>
  );
}
