import { Link } from "react-router-dom";
import { ArrowRight } from "iconoir-react";
import content from "../content/ko/ko.json";

const { services } = content;

const cardVisuals = [
  {
    accent: "bg-brand text-white",
    image: new URL("../assets/hero/a1.jpeg", import.meta.url).href,
    overlay: "rgba(221, 244, 236, 0.9)",
    tint: "rgba(221, 244, 236, 0.6)",
    fallback: "#d7f2e6",
  },
  {
    accent: "bg-[#f97316] text-white",
    image: new URL("../assets/hero/a2.png", import.meta.url).href,
    overlay: "rgba(252, 232, 211, 0.9)",
    tint: "rgba(252, 232, 211, 0.6)",
    fallback: "#fbe3cc",
  },
  {
    accent: "bg-[#2563eb] text-white",
    image: new URL("../assets/hero/a3.jpeg", import.meta.url).href,
    overlay: "rgba(231, 235, 251, 0.92)",
    tint: "rgba(231, 235, 251, 0.55)",
    fallback: "#e3e9fb",
  },
];

const isExternal = (href) => /^https?:\/\//i.test(href);

function FeatureGrid() {
  const cards = services.items;

  return (
    <section id="services" className="bg-white py-24">
      <div className="container relative">
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
          <h2 className="text-title font-bold text-slate-900">
            {services.heading}
          </h2>
          <p className="text-body text-slate-600">{services.description}</p>
          <span className="pointer-events-none absolute inset-y-6 -z-10 hidden text-[11rem] font-black uppercase tracking-[0.4em] text-slate-100/40 sm:block">
            CTR ENERGY
          </span>
        </div>
        <div className="mt-16 grid gap-4 text-body md:grid-cols-2 lg:grid-cols-3">
          {cards.map((item, index) => {
            const visual = cardVisuals[index % cardVisuals.length];
            const backgroundStyle = {
              backgroundImage: `linear-gradient(140deg, ${visual.overlay} 0%, ${visual.tint} 65%, rgba(255,255,255,0.92) 100%)`,
              backgroundColor: visual.fallback,
            };

            return (
              <CardWrapper
                key={item.title}
                href={item.href}
                image={visual.image}
                style={backgroundStyle}
              >
                <div className="flex h-full flex-col justify-between rounded-[36px] p-12 pb-[62%] text-slate-900 transition-colors duration-300">
                  <div className="space-y-4">
                    <h3 className="text-content-title font-bold">{item.title}</h3>
                    <p className="text-description leading-relaxed text-slate-700">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-10 flex items-center justify-between text-button font-semibold">
                    <span className="flex items-center gap-2">
                      view more
                      <span
                        className={`inline-flex h-6 items-center rounded-full px-3 text-footer font-semibold uppercase tracking-[0.2em] transition-transform duration-300 group-hover:translate-x-1 ${visual.accent}`}
                      >
                        ctr
                      </span>
                    </span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/70 text-slate-600 transition-colors duration-300 group-hover:border-brand/40 group-hover:bg-brand group-hover:text-white">
                      <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CardWrapper({ href, children, style, image }) {
  const external = isExternal(href);
  const commonClasses =
    "group relative block h-full overflow-hidden rounded-[13px] border border-white/70 shadow-[0_20px_50px_-35px_rgba(15,84,54,0.45)] transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_28px_60px_-40px_rgba(15,84,54,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand/60";
  const cardStyle = { minHeight: "540px", ...style };

  const content = (
    <>
      <div className="relative z-10 h-full">{children}</div>
      {image && (
        <div className="pointer-events-none absolute inset-x-0 left-0 bottom-0 h-[70%] rounded-b-[13px] overflow-hidden">
          <img
            alt=""
            className="h-full w-full rounded-b-[13px] object-cover object-center"
            src={image}
          />
        </div>
      )}
    </>
  );

  if (external) {
    return (
      <a
        className={commonClasses}
        href={href}
        rel="noreferrer"
        style={cardStyle}
        target="_blank"
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={commonClasses} style={cardStyle} to={href}>
      {content}
    </Link>
  );
}

export default FeatureGrid;
