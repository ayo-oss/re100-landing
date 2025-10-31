// =============================================
// File: EnerisCustomerSection.jsx
// Description: Eneris 怨좉컼臾몄쓽 ?뱀뀡 (?대?吏 泥⑤? ?쒓굅 踰꾩쟾)
// =============================================

import React, { useMemo, useState } from "react";
import customer from "./customer.json";

const GAS_ENDPOINT =
  import.meta.env.VITE_GAS_ENDPOINT ||
  import.meta.env.NEXT_PUBLIC_GAS_ENDPOINT ||
  "";

const phoneRegex = /^(01[0-9]|0[2-9])[0-9\-]{7,11}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const underlineInputClass =
  "block w-full border-b border-gray-300 bg-transparent px-0 pb-3 text-body font-medium text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-0 focus:border-emerald-500";
const underlineErrorClass =
  "border-red-400 text-red-600 placeholder:text-red-400 focus:border-red-500";
const areaInputClass =
  "block w-full rounded-md border border-gray-300 bg-transparent px-4 py-4 text-body font-medium text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-0 focus:border-emerald-500";
const areaErrorClass =
  "border-red-400 text-red-600 placeholder:text-red-400 focus:border-red-500";
const getInputClass = (hasError, variant = "underline") =>
  variant === "area"
    ? `${areaInputClass}${hasError ? ` ${areaErrorClass}` : ""}`
    : `${underlineInputClass}${hasError ? ` ${underlineErrorClass}` : ""}`;
const createInitialFormState = () => ({
  name: "",
  phone: "",
  address: "",
  email: "",
  type: "",
  message: "",
  agree: false,
});

export default function EnerisCustomerSection() {
  const [form, setForm] = useState(createInitialFormState);

  const [fieldErrors, setFieldErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const inquiryTypes = useMemo(() => customer.inquiryTypes, []);
  const expectsOpaqueResponse = GAS_ENDPOINT.includes("script.google");

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({
      ...s,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const { [name]: _removed, ...rest } = prev;
        return rest;
      });
    }
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = customer.errors.name;
    if (!form.phone.trim() || !phoneRegex.test(form.phone))
      nextErrors.phone = customer.errors.phone;
    if (!form.address.trim()) nextErrors.address = customer.errors.address;
    if (!form.email.trim() || !emailRegex.test(form.email))
      nextErrors.email = customer.errors.email;
    if (!form.type) nextErrors.type = customer.errors.type;
    if (!form.message.trim()) nextErrors.message = customer.errors.message;
    if (!form.agree) nextErrors.agree = customer.errors.agree;
    return nextErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setFieldErrors(validationErrors);
      const firstKey = Object.keys(validationErrors)[0];
      if (firstKey) {
        requestAnimationFrame(() => {
          const field = document.querySelector(`[data-field='${firstKey}']`);
          if (field && "focus" in field) {
            field.focus();
          }
        });
      }
      return;
    }
    setFieldErrors({});
    if (!GAS_ENDPOINT) {
      setError("?섍꼍 蹂??GAS_ENDPOINT)媛 ?ㅼ젙?섏? ?딆븯?듬땲??");
      return;
    }

    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("phone", form.phone);
    fd.append("address", form.address);
    fd.append("email", form.email);
    fd.append("type", form.type);
    fd.append("message", form.message);
    fd.append("agree", String(form.agree));

    try {
      setSubmitting(true);
      const fetchOptions = {
        method: "POST",
        body: fd,
      };
      if (expectsOpaqueResponse) {
        fetchOptions.mode = "no-cors";
      }
      const res = await fetch(GAS_ENDPOINT, fetchOptions);
      if (expectsOpaqueResponse || res.type === "opaque") {
        setDone(true);
        setForm(createInitialFormState());
        return;
      }
      const isJsonResponse =
        res.headers?.get("content-type")?.includes("application/json");
      const data = isJsonResponse ? await res.json() : null;
      if (!res.ok || (isJsonResponse && !data?.ok)) {
        throw new Error(data?.message || "Server error");
      }
      setDone(true);
      setForm(createInitialFormState());
    } catch (err) {
      setError(err?.message || "Server error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <header className="mb-12">
          <h1 className="text-2xl font-semibold leading-tight text-slate-900">
            {customer.title}
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            {customer.subtitle}
          </p>
          <p className="mt-3 flex items-center text-sm text-slate-500">
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
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
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

          <div className="flex items-start gap-3">
            <input
              id="agree"
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={onChange}
              className="mt-1 h-5 w-5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
            />
            <label htmlFor="agree" className="text-sm text-slate-600">
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

          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            <button type="submit" disabled={submitting} className="btn-primary">
              {submitting
                ? customer.buttons.submitting
                : customer.buttons.submit}
            </button>
            <button
              type="button"
              onClick={() =>
                setForm({
                  name: "",
                  phone: "",
                  address: "",
                  email: "",
                  type: "",
                  message: "",
                  agree: false,
                })
              }
              className="btn-secondary"
            >
              {customer.buttons.reset}
            </button>
          </div>
        </form>

        {done && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6"
            role="dialog"
            aria-modal
          >
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
              <div className="text-title font-semibold mb-2">
                {customer.modal.thanksTitle}
              </div>
              <p className="text-body text-gray-600">
                {customer.modal.thanksBody}
              </p>
              <div className="mt-6 text-right">
                <button onClick={() => setDone(false)} className="btn-primary">
                  {customer.buttons.close}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Field({ label, children, full = false, required = false, error }) {
  return (
    <label className={full ? "block sm:col-span-2" : "block"}>
      <span className="flex items-center gap-2 text-base font-semibold text-slate-900">
        {label}
        {required && (
          <>
            <span className="sr-only">Required field</span>
            <span
              aria-hidden
              className="inline-flex h-2 w-2 rounded-full bg-emerald-500"
            />
          </>
        )}
      </span>
      <div className="mt-3">{children}</div>
      {error && (
        <p className="mt-2 text-xs font-medium text-red-500">{error}</p>
      )}
    </label>
  );
}


