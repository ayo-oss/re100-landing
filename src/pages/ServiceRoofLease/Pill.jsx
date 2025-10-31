import React from "react";

export function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border bg-white/70 text-button font-semibold text-emerald-900 backdrop-blur">
      {children}
    </span>
  );
}
