import React from "react";
import customer from "./customer.json";
import { Field } from "./Field";
import { getInputClass, getButtonClass } from "./ui";
import { useCustomerForm } from "./useCustomerForm";

export default function EnerisCustomerSection() {
  const {
    form,
    onChange,
    fieldErrors,
    submitting,
    done,
    setDone,
    error,
    inquiryTypes,
    handleSubmit,
  } = useCustomerForm(customer);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <header className="mb-12">
          <h1 className="text-display text-[2.5rem] font-bold leading-tight text-slate-900">
            {customer.title}
          </h1>
          <p className="text-description mt-4 text-[1.222rem] leading-7 text-slate-600">
            {customer.subtitle}
          </p>
          <p className="text-body mt-3 flex items-center text-[1.125rem] text-slate-500">
            <span
              aria-hidden
              className="mr-2 inline-flex h-2 w-2 rounded-full bg-emerald-500"
            />
            <span className="sr-only">{customer.requiredMark}</span>
            {customer.requiredNotice}
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
            <Field
              label={customer.fields.name}
              required
              error={fieldErrors.name}
            >
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                data-field="name"
                autoComplete="name"
                className={getInputClass(Boolean(fieldErrors.name))}
                placeholder={customer.placeholders.name}
              />
            </Field>

            <Field
              label={customer.fields.phone}
              required
              error={fieldErrors.phone}
            >
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={onChange}
                data-field="phone"
                autoComplete="tel"
                className={getInputClass(Boolean(fieldErrors.phone))}
                placeholder={customer.placeholders.phone}
              />
            </Field>

            <Field
              label={customer.fields.address}
              required
              full
              error={fieldErrors.address}
            >
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={onChange}
                data-field="address"
                autoComplete="street-address"
                className={getInputClass(Boolean(fieldErrors.address))}
                placeholder={customer.placeholders.address}
              />
            </Field>

            <Field
              label={customer.fields.email}
              required
              error={fieldErrors.email}
            >
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                data-field="email"
                autoComplete="email"
                className={getInputClass(Boolean(fieldErrors.email))}
                placeholder={customer.placeholders.email}
              />
            </Field>

            <Field
              label={customer.fields.type}
              required
              error={fieldErrors.type}
            >
              <div className="relative">
                <select
                  name="type"
                  value={form.type}
                  onChange={onChange}
                  data-field="type"
                  className={`${getInputClass(
                    Boolean(fieldErrors.type)
                  )} appearance-none pr-8`}
                >
                  <option value="">{customer.placeholders.type}</option>
                  {inquiryTypes.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-slate-400"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 6.5 8 10.5 12 6.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Field>

            <Field
              label={customer.fields.message}
              required
              full
              error={fieldErrors.message}
            >
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                data-field="message"
                className={`${getInputClass(
                  Boolean(fieldErrors.message),
                  "area"
                )} min-h-[200px] resize-none`}
                placeholder={customer.placeholders.message}
              />
            </Field>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-start gap-3">
              <input
                id="agree"
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={onChange}
                className={`mt-1 h-5 w-5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 ${
                  fieldErrors.agree ? "border-red-400" : ""
                }`}
                data-field="agree"
              />
              <label
                htmlFor="agree"
                className="text-body text-[1.125rem] text-slate-600"
              >
                {customer.privacy.prefix}
                <a
                  href={customer.privacy.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mx-1 underline"
                >
                  {customer.privacy.anchor}
                </a>
                {customer.privacy.suffix}
              </label>
            </div>
            {fieldErrors.agree && (
              <p className="text-sm font-medium text-red-500">
                {fieldErrors.agree}
              </p>
            )}
          </div>

          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
            <button
              type="submit"
              disabled={submitting}
              className={getButtonClass("primary")}
            >
              {submitting
                ? customer.buttons.submitting
                : customer.buttons.submit}
            </button>
          </div>
        </form>

        {done && (
          <div className="pointer-events-none fixed inset-x-0 top-6 z-50 flex justify-center px-4">
            <div className="pointer-events-auto flex w-full max-w-xl items-start gap-4 rounded-2xl border border-emerald-200 bg-white px-6 py-5 shadow-xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M5 10.5 8.5 14 15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-emerald-700">
                  성공
                </div>
                <p className="mt-1 text-body text-slate-700">
                  타당성 검토 문의가 성공적으로 완료하였습니다.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setDone(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                aria-label="알림 닫기"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="m5 5 8 8M13 5l-8 8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
      </section>
  );
}
