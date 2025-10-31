import React from "react";

export function useCalculator(est) {
  const options = React.useMemo(() => {
    if (!Array.isArray(est.areaOptions)) return [];
    return est.areaOptions.map((opt) =>
      typeof opt === "string"
        ? { label: opt, capacity: est.defaultCapacity ?? 0 }
        : opt
    );
  }, [est.areaOptions, est.defaultCapacity]);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    setSelectedIndex(0);
  }, [options.length]);

  const selected = options[selectedIndex] ??
    options[0] ?? { label: "", capacity: 0 };
  const kw = selected.capacity ?? 0;
  const annual = kw * (est.ratePerKw ?? 0);
  const lifetime = annual * (est.lifetimeYears ?? 0);

  return { options, selectedIndex, setSelectedIndex, kw, annual, lifetime };
}
