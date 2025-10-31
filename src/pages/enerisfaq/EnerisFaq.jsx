import React, { useState } from "react";
import enerisfaq from "./enerisfaq.json";

export default function EnerisFaq() {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState(null);

  const filtered = enerisfaq.items.filter((item) =>
    (item.category + item.question + JSON.stringify(item.answer))
      .toLowerCase()
      .includes(query.toLowerCase())
  );
  const totalCount = enerisfaq.items.length;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <header>
          <p className="text-sm font-medium text-slate-500">{`Total ${totalCount}건`}</p>
          <h1 className="mt-2 text-[2.5rem] font-bold leading-tight text-slate-900">
            {enerisfaq.title}
          </h1>
        </header>

        <div className="mt-10 flex justify-end">
          <div className="relative w-full max-w-[420px]">
            <label htmlFor="faq-search" className="sr-only">
              {enerisfaq.searchPlaceholder}
            </label>
            <input
              id="faq-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={enerisfaq.searchPlaceholder}
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

        <div className="mt-12 space-y-6">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full px-8 py-7 text-left"
                aria-expanded={openId === item.id}
              >
                <div className="flex items-start gap-6">
                  <span className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-lg font-bold text-emerald-600">
                    Q.
                  </span>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-emerald-600">
                      {item.category}
                    </div>
                    <h2 className="mt-1 text-[1.778rem] font-semibold leading-tight text-slate-900">
                      {item.question}
                    </h2>
                  </div>
                  <span
                    className={`mt-2 inline-flex h-6 w-6 items-center justify-center text-slate-400 transition-transform ${
                      openId === item.id ? "rotate-180 text-emerald-500" : ""
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
                </div>
              </button>
              {openId === item.id && (
                <div className="border-t border-slate-200 px-8 pb-8 pt-6">
                  <div className="flex gap-6">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-lg font-bold text-white">
                      A.
                    </span>
                    <div className="flex-1 space-y-4 text-[1.125rem] leading-7 text-slate-700">
                      {item.answer.map((block, index) => (
                        <AnswerBlock key={index} block={block} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}

          {filtered.length === 0 && (
            <div className="rounded-3xl border border-dashed border-slate-200 bg-white px-8 py-14 text-center text-[1.125rem] text-slate-500">
              寃??寃곌낵媛 ?놁뒿?덈떎.
            </div>
          )}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="https://pf.kakao.com/_xfJxaG/chat"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500 bg-white px-8 py-3 text-[1.111rem] font-semibold text-emerald-600 transition-colors hover:bg-emerald-50"
          >
            異붽? 臾몄쓽?섍린 ??
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
      <ol className="list-decimal space-y-2 pl-6 marker:text-emerald-600">
        {block.items.map((text, index) => (
          <li key={index} className="leading-7">
            {text}
          </li>
        ))}
      </ol>
    );
  if (block.type === "ul")
    return (
      <ul className="list-disc space-y-2 pl-6 marker:text-emerald-600">
        {block.items.map((text, index) => (
          <li key={index} className="leading-7">
            {text}
          </li>
        ))}
      </ul>
    );
  return null;
}
