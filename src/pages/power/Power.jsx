// SavePower.jsx
import React from "react";
import power from "./power.json";

const H2 = ({ children }) => (
  <h2 className="text-xl font-semibold text-gray-900">{children}</h2>
);
const P = ({ children }) => (
  <p className="text-sm leading-6 text-gray-700">{children}</p>
);

export default function SavePower() {
  return (
    <section className="relative overflow-hidden py-40">
      <div className="container mx-auto px-6 space-y-14">
        {/* Hero */}
        <header>
          <h1 className="text-3xl font-bold tracking-tight">{power.title}</h1>
          <P>{power.subtitle}</P>
          <div className="mt-4 grid gap-2 text-sm text-gray-800">
            {power.hero.bullets.map((t, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-900"></span>{" "}
                {t}
              </div>
            ))}
          </div>
        </header>

        {/* Tariff */}
        <section>
          <H2>{power.tariff.title}</H2>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-left text-sm border-separate border-spacing-y-1">
              <thead className="text-gray-500">
                <tr>
                  <th className="py-2 pr-4">구분</th>
                  <th className="py-2 pr-4">기본요금(원/kW)</th>
                  <th className="py-2 pr-4">단가(원/kWh)</th>
                </tr>
              </thead>
              <tbody>
                {power.tariff.rows.map((r, i) => (
                  <tr key={i} className="bg-white shadow-sm">
                    <td className="py-3 px-4 font-medium">{r.class}</td>
                    <td className="py-3 px-4">{r.basic.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      {Object.entries(r.kwh).map(([k, v]) => (
                        <span key={k} className="mr-3 inline-block">
                          <b className="text-gray-900">{k}</b> {v}
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="mt-2 list-disc pl-6 text-sm text-gray-600">
            {power.tariff.notes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </section>

        {/* Eligibility */}
        <section>
          <H2>{power.eligibility.title}</H2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2 list-disc pl-6 text-sm text-gray-700">
            {power.eligibility.items.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </section>

        {/* Partner */}
        <section>
          <H2>{power.partner.title}</H2>
          <P className="mt-1">
            <b>{power.partner.name}</b>
          </P>
          <ul className="mt-2 list-disc pl-6 text-sm text-gray-700">
            {power.partner.desc.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </section>

        {/* Segments */}
        <section>
          <H2>{power.segments.title}</H2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {power.segments.cards.map((c, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="font-medium text-gray-900">{c.name}</div>
                <div className="mt-2 text-xs text-gray-500">
                  {c.conditions.join(" · ")}
                </div>
                <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
                  {c.methods.map((m, j) => (
                    <li key={j}>{m}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Cases */}
        <section>
          <H2>{power.cases.title}</H2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {power.cases.items.map((c, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="font-medium text-gray-900">{c.name}</div>
                <div className="mt-2 text-sm text-gray-700">
                  {c.from}
                  {power.cases.unit.power} → {c.to}
                  {power.cases.unit.power}
                </div>
                <div className="mt-1 text-sm text-gray-700">
                  절감액 {c.saving.toLocaleString()}
                  {power.cases.unit.money}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section>
          <H2>{power.benefits.title}</H2>
          <ul className="mt-3 list-disc pl-6 text-sm text-gray-700">
            {power.benefits.bullets.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </section>

        {/* Process */}
        <section>
          <H2>{power.process.title}</H2>
          <ol className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 list-decimal pl-6 text-sm text-gray-700">
            {power.process.steps.map((s, i) => (
              <li
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <div className="font-medium text-gray-900">
                  {i + 1}. {s.title}
                </div>
                <P>{s.desc}</P>
              </li>
            ))}
          </ol>
        </section>

        {/* Badges */}
        <section>
          <H2>{power.badges.title}</H2>
          <div className="mt-3 flex flex-wrap gap-2">
            {power.badges.items.map((b, i) => (
              <span
                key={i}
                className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs shadow-sm"
              >
                {b}
              </span>
            ))}
          </div>
        </section>

        {/* Alliances */}
        <section>
          <H2>{power.alliances.title}</H2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-sm text-gray-700">
            {power.alliances.orgs.map((o, i) => (
              <li
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <div className="font-medium text-gray-900">{o.name}</div>
                <div className="text-xs text-gray-500">{o.en}</div>
              </li>
            ))}
          </ul>
        </section>

        {/* Metrics */}
        <section>
          <H2>{power.metrics.title}</H2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {power.metrics.stats.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="text-3xl font-bold text-gray-900">
                  {s.value}
                  {s.suffix}
                </div>
                <div className="mt-1 text-sm text-gray-700">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <H2>{power.cta.title}</H2>
          <P>{power.cta.desc}</P>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {power.cta.formFields.map((f, i) => (
              <input
                key={i}
                placeholder={f}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:ring-2 focus:ring-gray-200"
              />
            ))}
          </div>
          <Link
            to="/support/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] border text-button font-semibold text-slate-800 hover:bg-slate-100"
          >
            {contact.cta}
          </Link>
        </section>
      </div>
    </section>
  );
}
