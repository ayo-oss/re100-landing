import { Link } from "react-router-dom";
import content from "../content/ko/ko.json";

const { footer } = content;

const isExternal = (href = "") => /^https?:\/\//i.test(href);

function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-16">
      <div className="container grid gap-12 lg:grid-cols-[minmax(0,2fr),minmax(0,3fr)]">
        <div className="space-y-4">
          <p className="text-body font-semibold text-slate-900">
            {footer.tagline}
          </p>
          <ul className="space-y-2 text-footer text-slate-600">
            {footer.infoLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <div className="space-y-2 text-footer text-slate-600">
            <p className="font-semibold text-brand-dark">
              {footer.hotline.title}
            </p>
            <p className="text-content-title font-bold text-brand-dark">
              {footer.hotline.phone}
            </p>
            <ul className="space-y-1 text-footer text-slate-500">
              {footer.hotline.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {footer.menus.map((menu) => (
            <div key={menu.title} className="space-y-3">
              <h3 className="text-footer font-semibold uppercase tracking-wide text-brand-dark">
                {menu.title}
              </h3>
              <ul className="space-y-2 text-footer text-slate-600">
                {menu.items.map((item) => (
                  <li key={item.label}>
                    <FooterLink item={item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="space-y-3">
            <h3 className="text-footer font-semibold uppercase tracking-wide text-brand-dark">
              Quick Links
            </h3>
            <ul className="space-y-2 text-footer text-slate-600">
              {footer.quickLinks.map((item) => (
                <li key={item.label}>
                  <FooterLink item={item} />
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              <h4 className="text-footer font-semibold uppercase tracking-wide text-brand-dark">
                Social
              </h4>
              <ul className="space-y-2 text-footer text-slate-600">
                {footer.socials.map((item) => (
                  <li key={item.label}>
                    <FooterLink item={item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-12 border-t border-slate-100 pt-6">
        <p className="text-center text-footer text-slate-400">
          {new Date().getFullYear()} ©FLAG. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterLink({ item }) {
  if (!item?.href) {
    return <span>{item?.label ?? ""}</span>;
  }

  if (isExternal(item.href)) {
    return (
      <a
        className="transition-colors hover:text-brand-dark"
        href={item.href}
        rel="noreferrer"
        target="_blank"
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link className="transition-colors hover:text-brand-dark" to={item.href}>
      {item.label}
    </Link>
  );
}

export default Footer;
