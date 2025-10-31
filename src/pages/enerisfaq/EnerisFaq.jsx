import React, { useState } from "react";
import data from "./data.json";

export default function EnerisFaq() {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState(null);

  const filtered = data.items.filter((item) =>
    (item.category + item.question + JSON.stringify(item.answer))
      .toLowerCase()
      .includes(query.toLowerCase())
  );
  const totalCount = data.items.length;
  const totalLabel = `Total ${totalCount}\uAC74`;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <header>
          <p className="text-sm font-medium text-slate-500">{totalLabel}</p>
          <h1 className="mt-2 text-[2.5rem] font-bold leading-tight text-slate-900">
            {data.title}
          </h1>
        </header>

        <div className="mt-10 flex justify-center">
          <div className="relative w-full max-w-xl">
            <label htmlFor="faq-search" className="sr-only">
              {data.searchPlaceholder}
            </label>
            <input
              id="faq-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={data.searchPlaceholder}
              className="peer w-full border-b border-slate-300 bg-transparent pb-3 text-[1.125rem] font-medium text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none"
            />
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-slate-400 transition-colors peer-focus:text-emerald-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5"
              >
                <circle cx="11" cy="11" r="6" />
                <path d="m20 20-3.35-3.35" strokeLinecap="round" />
              </svg>
            </span>
          </div>
        </div>

        <div className="mt-12 rounded-[10px] border border-slate-200 bg-white shadow-sm">
          {filtered.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`transition-colors py-10 duration-300 ${
                  isOpen ? "bg-emerald-50/40" : "bg-transparent"
                } ${
                  idx !== filtered.length - 1 ? "border-b border-slate-200" : ""
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center gap-6 px-8 py-7 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-bold transition-colors ${
                      isOpen
                        ? "bg-emerald-500 text-white"
                        : "bg-emerald-100 text-emerald-600"
                    }`}
                  >
                    Q.
                  </span>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-emerald-600">
                      {item.category}
                    </div>
                    <h2 className="mt-1 text-[1.6rem] font-semibold leading-tight text-slate-900">
                      {item.question}
                    </h2>
                  </div>
                  <span
                    className={`inline-flex h-6 w-6 items-center justify-center text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-emerald-500 py-10" : ""
                    }`}
                    aria-hidden
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-[max-height] duration-300 ease-out"
                  style={{ maxHeight: isOpen ? "640px" : "0px" }}
                  aria-hidden={!isOpen}
                >
                  <div
                    className="px-8 pb-8 pt-0 text-[1.125rem] leading-7 text-slate-700 transition-opacity duration-200 ease-out"
                    style={{ opacity: isOpen ? 1 : 0 }}
                  >
                    <div className="flex gap-6 border-t border-slate-200 pt-6">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-lg font-bold text-white">
                        A.
                      </span>
                      <div className="flex-1 space-y-4 m-10">
                        {item.answer.map((block, index) => (
                          <AnswerBlock key={index} block={block} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {filtered.length === 0 && (
            <div className="mt-20 px-8 py-50 text-center text-[1.125rem] text-slate-500">
              {data.nonefaq}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function AnswerBlock({ block }) {
  if (block.type === "p")
    return <p className="leading-7 text-slate-700">{block.text}</p>;
  if (block.type === "ol")
    return (
      <ol className="list-decimal space-y-2 pl-8 marker:text-emerald-600">
        {block.items.map((text, index) => (
          <li key={index} className="leading-7 text-slate-700">
            {text}
          </li>
        ))}
      </ol>
    );
  if (block.type === "ul")
    return (
      <ul className="list-disc space-y-2 pl-8 marker:text-emerald-600">
        {block.items.map((text, index) => (
          <li key={index} className="leading-7 text-slate-700">
            {text}
          </li>
        ))}
      </ul>
    );
  return null;
}
