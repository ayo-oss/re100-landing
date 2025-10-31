import { useEffect, useMemo, useState } from "react";
import { validateFactory } from "./validators";

const GAS_ENDPOINT =
  import.meta.env.VITE_GAS_ENDPOINT ||
  import.meta.env.NEXT_PUBLIC_GAS_ENDPOINT ||
  "";

const createInitialFormState = () => ({
  name: "",
  phone: "",
  address: "",
  email: "",
  type: "",
  message: "",
  agree: false,
});

export function useCustomerForm(customer) {
  const [form, setForm] = useState(createInitialFormState);
  const [fieldErrors, setFieldErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const inquiryTypes = useMemo(() => customer.inquiryTypes || [], [customer]);
  const expectsOpaqueResponse = GAS_ENDPOINT.includes("script.google");
  const validate = useMemo(() => validateFactory(customer), [customer]);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setDone(false), 5000);
    return () => clearTimeout(t);
  }, [done]);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const { [name]: _removed, ...rest } = prev;
        return rest;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const errors = validate(form);
    if (Object.keys(errors).length) {
      setFieldErrors(errors);
      const firstKey = Object.keys(errors)[0];
      if (firstKey) {
        requestAnimationFrame(() => {
          if (firstKey === "agree") {
            const checkbox = document.getElementById("agree");
            checkbox?.focus();
            checkbox?.scrollIntoView({ block: "center", behavior: "smooth" });
            return;
          }
          const el = document.querySelector(`[data-field='${firstKey}']`);
          if (el && "focus" in el) {
            el.focus();
            el.scrollIntoView({ block: "center", behavior: "smooth" });
          }
        });
      }
      return;
    }

    setFieldErrors({});
    if (!GAS_ENDPOINT) {
      setError("Server endpoint is not configured.");
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
      const fetchOptions = { method: "POST", body: fd };
      if (expectsOpaqueResponse) fetchOptions.mode = "no-cors";

      const res = await fetch(GAS_ENDPOINT, fetchOptions);
      if (expectsOpaqueResponse || res.type === "opaque") {
        setDone(true);
        setForm(createInitialFormState());
        return;
      }
      const isJson = res.headers
        ?.get("content-type")
        ?.includes("application/json");
      const payload = isJson ? await res.json() : null;
      if (!res.ok || (isJson && !payload?.ok)) {
        throw new Error(payload?.message || "Server error");
      }
      setDone(true);
      setForm(createInitialFormState());
    } catch (err) {
      setError(err?.message || "Server error");
    } finally {
      setSubmitting(false);
    }
  };

  return {
    form,
    setForm,
    onChange,
    fieldErrors,
    submitting,
    done,
    setDone,
    error,
    inquiryTypes,
    handleSubmit,
  };
}
