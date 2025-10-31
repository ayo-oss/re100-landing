export function numberWithCommas(n) {
  try {
    return (typeof n === "number" ? n : Number(n)).toLocaleString();
  } catch {
    return String(n);
  }
}
