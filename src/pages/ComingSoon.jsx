import { useLocation } from "react-router-dom";

function ComingSoon() {
  const location = useLocation();

  return (
    <section className="border-t border-slate-100 bg-emerald-50/40 py-24">
      <div className="container mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-dark">
          Page In Progress
        </p>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          준비중인 페이지 입니다.
        </h1>
      </div>
    </section>
  );
}

export default ComingSoon;
