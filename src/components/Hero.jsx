import { useEffect, useState } from "react";
import content from "../content/ko/ko.json";

const { hero, today } = content;

const heroImages = [
  new URL("../assets/hero/a1.jpeg", import.meta.url).href,
  new URL("../assets/hero/a2.png", import.meta.url).href,
  new URL("../assets/hero/a3.jpeg", import.meta.url).href,
];

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) {
      return;
    }
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/60 to-white py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        {heroImages.map((src, index) => (
          <img
            key={src}
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
            src={src}
            alt=""
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative container grid min-h-[70vh] gap-12 py-24 lg:grid-cols-[minmax(0,1fr),360px] lg:items-center">
        <div className="flex flex-col gap-6">
          <p className="text-xl font-semibold uppercase tracking-[0.3em] text-white">
            {hero.eyebrow}
          </p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            {hero.title.split("\n").map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <div className="max-w-xl space-y-2 text-xl font-semibold leading-relaxed text-white">
            {hero.summary.split("\n").map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-brand px-6 py-3 text-xl font-semibold text-white shadow-soft transition-colors hover:bg-brand-dark"
            >
              {hero.primaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
