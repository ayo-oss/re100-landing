import { useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import content from "../content/ko/ko.json";
import logo from "../assets/logo-g.png";

const {
  navigation: { brand, primary, secondary, labels },
} = content;

const isExternalLink = (href) => /^https?:\/\//i.test(href);
const getSectionRoot = (href = "") => {
  if (!href.startsWith("/")) return "/";
  const parts = href.split("/").filter(Boolean);
  if (parts.length === 0) return "/";
  return `/${parts[0]}`;
};

function Header() {
  const [activeLabel, setActiveLabel] = useState(null);
  const { pathname } = useLocation();

  const activeItem = useMemo(() => {
    const target = primary.find((item) => item.label === activeLabel);
    return target && target.children ? target : null;
  }, [activeLabel]);

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setActiveLabel(null);
    }
  };

  return (
    <header
      className="sticky top-0 z-30 py-10 border-b border-slate-100 bg-white/95 backdrop-blur transition-colors"
      onMouseLeave={() => setActiveLabel(null)}
      onKeyDown={handleKeyDown}
    >
      <div className="relative">
        <div className="container flex h-20 items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <img
              className="flex items-center justify-center"
              src={logo}
              alt={brand.name}
            />
            <div className="flex flex-col leading-tight" />
          </Link>
          <nav className="hidden items-center gap-20 text-lg font-semibold text-slate-800 lg:flex">
            {primary.map((item) => {
              const isOpen = activeLabel === item.label;
              const sectionRoot = getSectionRoot(item.href);
              const isSectionActive =
                !isExternalLink(item.href) &&
                (pathname === sectionRoot ||
                  pathname.startsWith(`${sectionRoot}/`));
              const baseClasses = [
                "relative py-2 transition-colors",
                isOpen || isSectionActive
                  ? "text-brand-dark"
                  : "text-slate-700 hover:text-brand-dark",
              ].join(" ");

              if (isExternalLink(item.href)) {
                return (
                  <a
                    key={item.label}
                    aria-expanded={isOpen}
                    aria-haspopup={!!item.children?.length}
                    className={baseClasses}
                    href={item.href}
                    onFocus={() => setActiveLabel(item.label)}
                    onMouseEnter={() => setActiveLabel(item.label)}
                    onClick={() => setActiveLabel(null)}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <NavLink
                  key={item.label}
                  aria-expanded={isOpen}
                  aria-haspopup={!!item.children?.length}
                  className={({ isActive }) =>
                    [
                      "relative py-2 transition-colors",
                      isActive || isOpen || isSectionActive
                        ? "text-brand-dark"
                        : "text-slate-700 hover:text-brand-dark",
                    ].join(" ")
                  }
                  onFocus={() => setActiveLabel(item.label)}
                  onMouseEnter={() => setActiveLabel(item.label)}
                  onClick={() => setActiveLabel(null)}
                  to={item.href}
                >
                  {item.label}
                </NavLink>
              );
            })}
            <span className="h-4 w-px bg-brand" aria-hidden="true" />
            <div className="flex items-center gap-10 text-lg font-medium text-slate-500">
              {secondary.map((item) => (
                <a
                  key={item.label}
                  className="transition-colors hover:text-brand-dark"
                  href={item.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
          <button
            className="inline-flex h-11 items-center rounded-full border border-brand/30 px-5 text-sm font-semibold text-brand-dark transition-colors hover:border-brand-dark hover:bg-brand hover:text-white lg:hidden"
            type="button"
          >
            {labels?.menuOpen ?? "메뉴 열기"}
          </button>
        </div>
        {activeItem && (
          <div className="absolute left-0 right-0 top-28 border-t border-slate-100 bg-white/100 shadow-[0_24px_45px_-30px_rgba(15,84,54,0.35)]">
            <div className="container grid gap-6 py-10 md:grid-cols-3 lg:grid-cols-4">
              {activeItem.children.map((child) => {
                const childContent = (
                  <>
                    <span className="text-base font-semibold text-slate-900">
                      {child.label}
                    </span>
                    {child.description && (
                      <p className="text-sm text-slate-500">
                        {child.description}
                      </p>
                    )}
                  </>
                );

                if (isExternalLink(child.href)) {
                  return (
                    <a
                      key={child.label}
                      className="flex flex-col gap-2 rounded-2xl border border-transparent p-5 transition-colors hover:border-brand/30 hover:bg-emerald-50/60"
                      href={child.href}
                      onClick={() => setActiveLabel(null)}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {childContent}
                    </a>
                  );
                }

                return (
                  <NavLink
                    key={child.label}
                    className={({ isActive }) =>
                      [
                        "flex flex-col gap-2 rounded-2xl border border-transparent p-5 transition-colors",
                        isActive
                          ? "border-brand/40 bg-emerald-50/70 text-brand-dark"
                          : "hover:border-brand/30 hover:bg-emerald-50/60",
                      ].join(" ")
                    }
                    onFocus={() => setActiveLabel(activeItem.label)}
                    onClick={() => setActiveLabel(null)}
                    to={child.href}
                  >
                    {childContent}
                  </NavLink>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
