import React from "react";
import data from "./privacyData.json";

function Block({ block }) {
  if (block.type === "p")
    return <p className="leading-relaxed">{block.text}</p>;
  if (block.type === "ul")
    return (
      <ul className="list-disc pl-6 space-y-1">
        {block.items?.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    );
  if (block.type === "ol")
    return (
      <ol className="list-decimal pl-6 space-y-1">
        {block.items?.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ol>
    );
  return null;
}

export default function EnerisPrivacy() {
  return (
    <section className="relative overflow-hidden py-40">
      <div className="container mx-auto px-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">{data.title}</h1>
          {data.effectiveDate && (
            <p className="mt-1 text-sm text-gray-500">
              시행일: {data.effectiveDate}
            </p>
          )}
        </header>

        <div className="space-y-8">
          {data.sections.map((s) => (
            <section key={s.id}>
              <h2 className="text-lg font-semibold text-gray-900">
                {s.heading}
              </h2>
              <div className="mt-3 space-y-3 text-sm text-gray-700">
                {s.blocks.map((b, i) => (
                  <Block key={i} block={b} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold">회사 정보</h3>
          <div className="mt-2 text-sm text-gray-700">
            <p>
              {data.company.name} · 대표이사: {data.company.ceo}
            </p>
            <p>본사: {data.company.hq}</p>
            <p>공장: {data.company.factory}</p>
            <p>지사: {data.company.branch}</p>
            <p>사업자등록번호: {data.company.bizNo}</p>
            <p className="mt-2">
              고객문의: {data.company.customerCenter.phone} (
              {data.company.customerCenter.hours})
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
