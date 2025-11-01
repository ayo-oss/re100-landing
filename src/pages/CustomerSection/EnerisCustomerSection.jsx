import React from "react";
import customer from "./customer.json";
import { Field } from "./Field";
import { getInputClass, getButtonClass } from "./ui";
import { useCustomerForm } from "./useCustomerForm";
import { NavArrowDown, Xmark, ShieldCheck } from "iconoir-react";

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
  const { buttons = {}, modal: modalContent = {} } = customer;
  const submitLabel = buttons.submit ?? "Submit";
  const submittingLabel = buttons.submitting ?? "Submitting...";
  const closeLabel = buttons.close ?? "Close";
  const successTitle = modalContent.thanksTitle ?? "Thank you!";
  const successBody = modalContent.thanksBody ?? "";

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <header className="mb-12">
          <h1 className="text-display text-[2.5rem] font-bold leading-tight ">
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
                  <NavArrowDown className="h-4 w-4" strokeWidth={1.5} />
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

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <button
              type="submit"
              className={getButtonClass()}
              disabled={submitting}
            >
              {submitting ? submittingLabel : submitLabel}
            </button>
          </div>
        </form>

        {done ? (
          <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4 shadow-soft">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <ShieldCheck className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <div className="space-y-1">
                  <p className="text-body text-[1.125rem] font-semibold text-emerald-900">
                    {successTitle}
                  </p>
                  {successBody ? (
                    <p className="text-sm text-emerald-700">{successBody}</p>
                  ) : null}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setDone(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-emerald-500 transition hover:bg-emerald-100 hover:text-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                aria-label={closeLabel}
              >
                <Xmark className="h-4 w-4" strokeWidth={1.8} />
              </button>
            </div>
          </div>
        ) : null}

      </div>
    </section>
  );
}
