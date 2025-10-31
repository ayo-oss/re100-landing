import React from "react";

export function Field({
  label,
  children,
  full = false,
  required = false,
  error,
}) {
  return (
    <label className={full ? "block sm:col-span-2" : "block"}>
      <span className="flex items-center gap-2 text-body text-[1.125rem] font-semibold text-slate-900">
        {label}
        {required && (
          <>
            <span className="sr-only">Required field</span>
            <span
              aria-hidden
              className="inline-flex h-2 w-2 rounded-full bg-emerald-500"
            />
          </>
        )}
      </span>
      <div className="mt-3">{children}</div>
      {error && (
        <p className="mt-2 text-xs font-medium text-red-500">{error}</p>
      )}
    </label>
  );
}
