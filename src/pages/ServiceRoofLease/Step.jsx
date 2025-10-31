import React from "react";

export function Step({ step }) {
  return (
    <div className="text-center">
      <img src={step.icon} alt="" className="mx-auto w-12 h-12" />
      <div className="mt-3 text-body font-medium text-slate-700">{`Step.${step.step} ${step.label}`}</div>
    </div>
  );
}
