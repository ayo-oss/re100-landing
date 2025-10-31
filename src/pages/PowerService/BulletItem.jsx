import React from "react";

export function BulletItem({ children }) {
  return (
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
}
