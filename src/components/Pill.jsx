import React from "react";

export function Pill({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 bg-white/70 text-button font-semibold text-emerald-900 backdrop-blur ${className}`.trim()}
    >
      {children}
    </span>
  );
}
