import React from "react";

export function SectionCard({
  title,
  eyebrow,
  description,
  children,
  className,
}) {
  return (
    <section className={`p-8 ${className || ""}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2 className="mt-3 text-content-title font-semibold text-slate-900">
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="mt-2 text-sm text-slate-600">{description}</p>
      ) : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </section>
  );
}
