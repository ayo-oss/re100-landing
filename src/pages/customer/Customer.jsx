// =============================================
// File: EnerisCustomerSection.jsx
// Description: Eneris 고객문의 섹션 (이미지 첨부 제거 버전)
// =============================================

import React, { useMemo, useState } from "react";
import customer from "./customer.json";

const GAS_ENDPOINT = import.meta.env.VITE_GAS_ENDPOINT;

const phoneRegex = /^(01[0-9]|0[2-9])[0-9\-]{7,11}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function EnerisCustomerSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    type: "",
    message: "",
    agree: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const inquiryTypes = useMemo(() => customer.inquiryTypes, []);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") setForm((s) => ({ ...s, [name]: checked }));
    else setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return customer.errors.name;
    if (!form.phone.trim() || !phoneRegex.test(form.phone))
      return customer.errors.phone;
    if (!form.address.trim()) return customer.errors.address;
    if (!form.email.trim() || !emailRegex.test(form.email))
      return customer.errors.email;
    if (!form.type) return customer.errors.type;
    if (!form.message.trim()) return customer.errors.message;
    if (!form.agree) return customer.errors.agree;
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    if (!GAS_ENDPOINT) {
      setError("서버 설정(GAS_ENDPOINT)이 필요합니다.");
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
      const res = await fetch(GAS_ENDPOINT, {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      if (!res.ok || !data?.ok) throw new Error(data?.message || "서버 오류");
      setDone(true);
      setForm({
        name: "",
        phone: "",
        address: "",
        email: "",
        type: "",
        message: "",
        agree: false,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden py-40">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-12 text-center">
          <h1 className="text-display font-bold leading-tight">
            {customer.title}
          </h1>
          <p className="mt-3 text-description text-gray-600">
            {customer.subtitle}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <aside className="lg:col-span-1">
            <div className="rounded-2xl border p-6 shadow-sm bg-white/70 backdrop-blur">
              <h2 className="text-content-title font-semibold mb-4">
                {customer.contact.title}
              </h2>
              <div className="space-y-4 text-body">
                <div>
                  <div className="text-gray-500">
                    {customer.contact.labelPhone}
                  </div>
                  <div className="text-title font-bold">
                    {customer.contact.phone}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500">
                    {customer.contact.labelHours}
                  </div>
                  <div className="text-body">{customer.contact.hours}</div>
                </div>
                <div className="pt-2 text-xs text-gray-400">
                  {customer.contact.note}
                </div>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border p-6 shadow-sm bg-white/70 backdrop-blur"
            >
              <p className="text-body mb-6">
                <span className="text-red-600">{customer.requiredMark}</span>{" "}
                {customer.requiredNotice}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label={customer.fields.name} required>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    className="input"
                    placeholder={customer.placeholders.name}
                  />
                </Field>

                <Field label={customer.fields.phone} required>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    className="input"
                    placeholder={customer.placeholders.phone}
                  />
                </Field>

                <Field label={customer.fields.address} required full>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={onChange}
                    className="input"
                    placeholder={customer.placeholders.address}
                  />
                </Field>

                <Field label={customer.fields.email}>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    className="input"
                    placeholder={customer.placeholders.email}
                  />
                </Field>

                <Field label={customer.fields.type} required>
                  <select
                    name="type"
                    value={form.type}
                    onChange={onChange}
                    className="input"
                  >
                    <option value="">{customer.placeholders.type}</option>
                    {inquiryTypes.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label={customer.fields.message} required full>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    className="input min-h-[160px]"
                    placeholder={customer.placeholders.message}
                  />
                </Field>
              </div>

              <div className="mt-4 flex items-start gap-3">
                <input
                  id="agree"
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={onChange}
                  className="mt-1 h-5 w-5 rounded border-gray-300"
                />
                <label htmlFor="agree" className="text-body text-gray-700">
                  {customer.privacy.prefix}
                  <a
                    href={customer.privacy.link}
                    target="_blank"
                    rel="noreferrer"
                    className="underline mx-1"
                  >
                    {customer.privacy.anchor}
                  </a>
                  {customer.privacy.suffix}
                </label>
              </div>

              {error && (
                <div className="mt-4 rounded-lg bg-red-50 border border-red-200 p-3 text-red-700 text-sm">
                  {error}
                </div>
              )}

              <div className="mt-6 flex gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary"
                >
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
          </div>
        </div>

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

function Field({ label, children, full = false, required = false }) {
  return (
    <label className={full ? "block sm:col-span-2" : "block"}>
      <span className="text-body font-medium text-gray-800">
        {label}
        {required && <span className="text-red-600"> *</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
