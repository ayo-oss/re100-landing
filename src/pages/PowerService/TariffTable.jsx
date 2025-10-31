import React from "react";
import { isArray, isObject, asString, formatNumber } from "./utils";
import { palettes } from "./palettes";

const splitLabel = (label) => {
  const parts = asString(label).split(/\s+/).filter(Boolean);
  if (!parts.length) return { main: "", sub: "" };
  if (parts.length === 1) return { main: parts[0], sub: "" };
  return { main: parts[0], sub: parts.slice(1).join(" ") };
};

const extractUnit = (text) => {
  if (typeof text !== "string") return "";
  const match = text.match(/\(([^)]+)\)/);
  return match ? match[1] : "";
};

const fallback = (value, alt) => {
  const str = asString(value);
  return str || alt;
};

export function TariffTable({ table, labels = {} }) {
  if (!isObject(table)) return null;

  const paletteKey = table.tone && palettes[table.tone] ? table.tone : "emerald";
  const palette = palettes[paletteKey];

  const columns = isObject(table.columns) ? table.columns : {};
  const seasons = isArray(columns.seasons);
  const rows = isArray(table.rows);
  if (!rows.length) return null;

  const showOption = Boolean(columns.option) || rows.some((r) => !!r.option);
  const showDetail =
    Boolean(columns.detail) || rows.some((r) => isArray(r.details).length);

  const groupLabel = fallback(columns.group, fallback(labels.plan, "구분"));
  const optionLabel = fallback(columns.option, fallback(labels.option, "요금제"));
  const baseLabel = fallback(columns.base, fallback(labels.base, "기본요금"));
  const detailLabel = fallback(columns.detail, fallback(labels.detail, "시간대"));
  const usageHeading = fallback(
    table.usageHeading,
    fallback(labels.usage, "전력량요금(원/kWh)")
  );
  const baseUnit = extractUnit(baseLabel);

  const renderGroupBadge = (text) => {
    const { main, sub } = splitLabel(text);
    return (
      <div
        className={`mx-auto flex h-16 w-16 flex-col items-center justify-center rounded-full border ${palette.badgeBorder} ${palette.badgeBg}`}
      >
        <span className={`text-button font-semibold ${palette.badgeText}`}>
          {main}
        </span>
        {sub ? (
          <span className={`text-footer font-semibold ${palette.badgeSubText}`}>
            {sub}
          </span>
        ) : null}
      </div>
    );
  };

  const renderBaseCell = (value) => (
    <div className="flex flex-col items-start gap-1">
      <span className={`text-title font-semibold ${palette.accentNumber}`}>
        {formatNumber(value)}
      </span>
      {baseUnit ? (
        <span className="text-footer text-slate-500">{baseUnit}</span>
      ) : null}
    </div>
  );

  return (
    <div
      className={`rounded-[28px] border ${palette.cardBorder} bg-white shadow-soft ${palette.cardShadow}`}
    >
      <div className="flex items-start justify-between gap-6 px-8 pt-8">
        <div>
          <h3 className="text-content-title font-semibold text-slate-900">
            {asString(table.title)}
          </h3>
          {table.description ? (
            <p className="mt-1 text-body text-slate-600">
              {asString(table.description)}
            </p>
          ) : null}
        </div>
        {table.note ? (
          <p className="text-footer font-semibold text-slate-500">
            {asString(table.note)}
          </p>
        ) : null}
      </div>

      <div className="px-8 pb-8 pt-4">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <colgroup>
              <col className="w-[15%]" />
              {showOption ? <col className="w-[18%]" /> : null}
              <col className="w-[18%]" />
              {showDetail ? <col className="w-[18%]" /> : null}
              {seasons.map((_, idx) => (
                <col key={idx} />
              ))}
            </colgroup>
            <thead>
              <tr
                className={`${palette.headerMainBg} border-b ${palette.headerDivider} text-button font-semibold uppercase tracking-[0.12em] ${palette.headerText}`}
              >
                <th className="px-5 py-4 align-middle" rowSpan={2}>
                  {groupLabel}
                </th>
                {showOption ? (
                  <th className="px-5 py-4 align-middle" rowSpan={2}>
                    {optionLabel}
                  </th>
                ) : null}
                <th className="px-5 py-4 align-middle" rowSpan={2}>
                  {baseLabel}
                </th>
                {showDetail ? (
                  <th className="px-5 py-4 align-middle" rowSpan={2}>
                    {detailLabel}
                  </th>
                ) : null}
                <th className="px-5 py-4 align-middle" colSpan={seasons.length}>
                  {usageHeading}
                </th>
              </tr>
              <tr
                className={`${palette.headerSubBg} border-b ${palette.headerDivider} text-button font-semibold tracking-[0.08em] text-slate-600`}
              >
                {seasons.map((season, index) => (
                  <th key={index} className="px-5 py-3 align-middle">
                    {asString(season)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => {
                const details = isArray(row.details);
                const values = isArray(row.values);
                const baseClass = `border-t ${palette.rowBorder} text-body text-slate-700 transition ${palette.rowHover}`;

                if (details.length) {
                  return details.map((detail, detailIndex) => (
                    <tr key={`${rowIndex}-${detailIndex}`} className={baseClass}>
                      {detailIndex === 0 ? (
                        <td
                          className="px-5 py-5 align-top"
                          rowSpan={details.length}
                        >
                          {renderGroupBadge(row.group)}
                        </td>
                      ) : null}
                      {showOption && detailIndex === 0 ? (
                        <td
                          className="px-5 py-5 align-top text-description text-slate-500"
                          rowSpan={details.length}
                        >
                          {asString(row.option)}
                        </td>
                      ) : null}
                      {detailIndex === 0 ? (
                        <td className="px-5 py-5 align-top" rowSpan={details.length}>
                          {renderBaseCell(row.base)}
                        </td>
                      ) : null}
                      {showDetail ? (
                        <td className="px-5 py-5 text-body text-slate-600">
                          {asString(detail.label)}
                        </td>
                      ) : null}
                      {seasons.map((_, index) => (
                        <td
                          key={index}
                          className={`px-5 py-5 text-right text-body font-medium ${palette.valueText}`}
                        >
                          {formatNumber(detail.values?.[index])}
                        </td>
                      ))}
                    </tr>
                  ));
                }

                return (
                  <tr key={rowIndex} className={baseClass}>
                    <td className="px-5 py-5 align-top">
                      {renderGroupBadge(row.group)}
                    </td>
                    {showOption ? (
                      <td className="px-5 py-5 align-top text-description text-slate-500">
                        {asString(row.option)}
                      </td>
                    ) : null}
                    <td className="px-5 py-5 align-top">{renderBaseCell(row.base)}</td>
                    {showDetail ? (
                      <td className="px-5 py-5 text-body text-slate-600">
                        {asString(row.detail)}
                      </td>
                    ) : null}
                    {seasons.map((_, index) => (
                      <td
                        key={index}
                        className={`px-5 py-5 text-right text-body font-medium ${palette.valueText}`}
                      >
                        {formatNumber(values[index])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
