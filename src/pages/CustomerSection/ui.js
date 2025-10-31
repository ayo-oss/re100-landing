const underlineInputClass =
  "block w-full border-b border-gray-300 bg-transparent px-0 pb-3 text-body text-[1.125rem] font-medium text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-0 focus:border-emerald-500";
const underlineErrorClass =
  "border-red-400 text-red-600 placeholder:text-red-400 focus:border-red-500";
const areaInputClass =
  "block w-full rounded-md border border-gray-300 bg-transparent px-4 py-4 text-body text-[1.125rem] font-medium text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-0 focus:border-emerald-500";
const areaErrorClass =
  "border-red-400 text-red-600 placeholder:text-red-400 focus:border-red-500";

export const getInputClass = (hasError, variant = "underline") =>
  variant === "area"
    ? `${areaInputClass}${hasError ? ` ${areaErrorClass}` : ""}`
    : `${underlineInputClass}${hasError ? ` ${underlineErrorClass}` : ""}`;

const buttonBaseClass =
  "inline-flex items-center justify-center rounded-full border font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";
const buttonVariants = {
  primary:
    "bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-500 hover:border-emerald-500 active:bg-emerald-700 focus-visible:ring-emerald-500",
  secondary:
    "bg-white text-emerald-700 border-emerald-500 hover:bg-emerald-50 active:bg-emerald-100 focus-visible:ring-emerald-500",
};
export const getButtonClass = (variant = "primary", fullWidth = true) => {
  const widthClass = fullWidth ? "w-full sm:w-auto" : "w-auto";
  return `${buttonBaseClass} ${widthClass} px-8 py-3 text-button text-[1.111rem] sm:px-12 sm:py-4 ${
    buttonVariants[variant] || buttonVariants.primary
  }`;
};
