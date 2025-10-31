import React from "react";
import { Link } from "react-router-dom";
import SectionCard from "@/components/SectionCard";

function ContactCTA({
  eyebrow = "CTA",
  title,
  description,
  ctaLabel,
  to = "/support/contact",
  className,
}) {
  return (
    <SectionCard
      eyebrow={eyebrow}
      title={title}
      description={description}
      className={`text-center ${className || ""}`}
    >
      <div className="flex justify-center">
        <Link
          to={to}
          className="inline-flex items-center gap-2 rounded-full border border-brand px-6 py-3 text-button font-semibold text-brand transition hover:bg-brand/10"
        >
          {ctaLabel}
        </Link>
      </div>
    </SectionCard>
  );
}

export default ContactCTA;
