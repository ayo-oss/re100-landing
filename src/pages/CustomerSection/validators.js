const phoneRegex = /^(01[0-9]|0[2-9])[0-9\-]{7,11}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateFactory(customer) {
  return (form) => {
    const e = {};
    if (!form.name.trim()) e.name = customer.errors.name;
    if (!form.phone.trim() || !phoneRegex.test(form.phone))
      e.phone = customer.errors.phone;
    if (!form.address.trim()) e.address = customer.errors.address;
    if (!form.email.trim() || !emailRegex.test(form.email))
      e.email = customer.errors.email;
    if (!form.type) e.type = customer.errors.type;
    if (!form.message.trim()) e.message = customer.errors.message;
    if (!form.agree) e.agree = customer.errors.agree;
    return e;
  };
}
