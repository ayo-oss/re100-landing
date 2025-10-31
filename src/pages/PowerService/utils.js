export const isArray = (v) => (Array.isArray(v) ? v : []);
export const isObject = (v) => v && typeof v === "object" && !Array.isArray(v);
export const asString = (v, fallback = "") =>
  typeof v === "string" ? v : fallback;
export const formatNumber = (v) =>
  typeof v === "number" ? v.toLocaleString() : asString(v);
