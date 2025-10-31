// EnerisFaq.jsx
import React, { useState } from "react";
import enerisfaq from "./enerisfaq.json";

export default function EnerisFaq() {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState(null);

  const filtered = enerisfaq.items.filter((i) =>
    (i.category + i.question + JSON.stringify(i.answer))
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <section className="relative overflow-hidden py-40">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold">{enerisfaq.title}</h2>
            <p className="text-sm text-gray-500">
              {enerisfaq.totalLabel} {enerisfaq.totalCount}건
            </p>
          </div>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={enerisfaq.searchPlaceholder}
            className="w-full sm:w-80 rounded-2xl border border-gray-200 px-4 py-3 text-sm shadow-sm"
          />
        </div>

        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white shadow-sm">
          {filtered.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50"
              >
                <div>
                  <div className="text-xs font-semibold text-gray-500">
                    {item.category}
                  </div>
                  <h3 className="mt-1 text-base font-medium text-gray-900">
                    {item.question}
                  </h3>
                </div>
                <span
                  className={`transition-transform ${
                    openId === item.id ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openId === item.id && (
                <div className="p-6 pt-0 text-sm text-gray-700 space-y-3">
                  {item.answer.map((block, i) => (
                    <AnswerBlock key={i} block={block} />
                  ))}
                </div>
              )}
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="p-6 text-center text-sm text-gray-500">
              검색 결과가 없습니다.
            </div>
          )}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://pf.kakao.com/_xfJxaG/chat"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-medium hover:bg-gray-50"
          >
            추가 문의하기 →
          </a>
        </div>
      </div>
    </section>
  );
}

function AnswerBlock({ block }) {
  if (block.type === "p") return <p>{block.text}</p>;
  if (block.type === "ol")
    return (
      <ol className="list-decimal pl-5 space-y-1">
        {block.items.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ol>
    );
  if (block.type === "ul")
    return (
      <ul className="list-disc pl-5 space-y-1">
        {block.items.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    );
  return null;
}
