import React from "react";
import { isArray, isObject, asString, formatNumber } from "./utils";
import { palettes } from "./palettes";

export function TariffTable({ table }) {
  if (!isObject(table)) return null;
  const palette = palettes[table.tone] || palettes.emerald;
  const columns = isObject(table.columns) ? table.columns : {};
  const seasons = isArray(columns.seasons);
  const rows = isArray(table.rows);
  if (!rows.length) return null;

  const showOption = Boolean(columns.option) || rows.some((r) => !!r.option);
  const showDetail =
    Boolean(columns.detail) || rows.some((r) => isArray(r.details).length);

  return (
    <div
      className={`overflow-hidden rounded-[24px] border ${palette.border} bg-white shadow-soft`}
    >
      <div
        className={`border-b ${palette.border} ${palette.headerBg} px-6 py-4 text-left`}
      >
        <h3 className="text-title font-semibold text-slate-900">
          {asString(table.title)}
        </h3>
        {table.note ? (
          <p className="mt-1 text-xs text-slate-500">{table.note}</p>
        ) : null}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead
            className={`${palette.headerBg} text-xs uppercase tracking-[0.12em] text-slate-600`}
          >
            <tr>
              <th className="px-4 py-3 text-left">
                {asString(columns.group, "Group")}
              </th>
              {showOption ? (
                <th className="px-4 py-3 text-left">
                  {asString(columns.option, "Option")}
                </th>
              ) : null}
              <th className="px-4 py-3 text-left">
                {asString(columns.base, "Base fee")}
              </th>
              {showDetail ? (
                <th className="px-4 py-3 text-left">
                  {asString(columns.detail, "Detail")}
                </th>
              ) : null}
              {seasons.map((s, i) => (
                <th key={i} className="px-4 py-3 text-left">
                  {s}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => {
              const detailList = isArray(row.details);
              const valueList = isArray(row.values);

              if (detailList.length) {
                return detailList.map((detail, detailIndex) => (
                  <tr
                    key={`${rowIndex}-${detailIndex}`}
                    className={`border-t ${palette.bodyBorder} text-slate-700`}
                  >
                    {detailIndex === 0 ? (
                      <td
                        className="px-4 py-3 font-semibold text-slate-900"
                        rowSpan={detailList.length}
                      >
                        {asString(row.group)}
                      </td>
                    ) : null}
                    {showOption && detailIndex === 0 ? (
                      <td
                        className="px-4 py-3 text-slate-600"
                        rowSpan={detailList.length}
                      >
                        {asString(row.option)}
                      </td>
                    ) : null}
                    {detailIndex === 0 ? (
                      <td
                        className="px-4 py-3 font-medium text-emerald-700"
                        rowSpan={detailList.length}
                      >
                        {formatNumber(row.base)}
                      </td>
                    ) : null}
                    {showDetail ? (
                      <td className="px-4 py-3 text-slate-600">
                        {asString(detail.label)}
                      </td>
                    ) : null}
                    {seasons.map((_, seasonIndex) => (
                      <td
                        key={seasonIndex}
                        className="px-4 py-3 text-right text-slate-700"
                      >
                        {formatNumber(detail.values?.[seasonIndex])}
                      </td>
                    ))}
                  </tr>
                ));
              }

              return (
                <tr
                  key={rowIndex}
                  className={`border-t ${palette.bodyBorder} text-slate-700`}
                >
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    {asString(row.group)}
                  </td>
                  {showOption ? (
                    <td className="px-4 py-3 text-slate-600">
                      {asString(row.option)}
                    </td>
                  ) : null}
                  <td className="px-4 py-3 font-medium text-emerald-700">
                    {formatNumber(row.base)}
                  </td>
                  {showDetail ? (
                    <td className="px-4 py-3 text-slate-600">
                      {asString(row.detail)}
                    </td>
                  ) : null}
                  {seasons.map((_, seasonIndex) => (
                    <td
                      key={seasonIndex}
                      className="px-4 py-3 text-right text-slate-700"
                    >
                      {formatNumber(valueList[seasonIndex])}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
