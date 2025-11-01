import React, { useMemo, useState } from "react";
import { Pill } from "@/components/Pill";
import {
  ShieldCheck,
  GraphUp,
  Tools,
  DatabaseSearch,
  StatsUpSquare,
  HeadsetHelp,
} from "iconoir-react";

const CONTAINER_CLASS = "container";

const HERO_CONTENT = {
  badge: "Eneris Service",
  title: "주택용 태양광, Eneris가 함께합니다",
  subtitle:
    "지붕 구조 진단부터 시공, 유지보수, 모니터링까지 Eneris가 원스톱으로 책임지는 주택용 태양광 솔루션입니다.",
  note: "Eneris는 한국에너지공단 보급·A/S 책임기업으로 연속 선정된 신뢰 파트너입니다.",
  primaryCta: {
    label: "상담 신청하기",
    href: "/support/contact",
  },
  secondaryCta: {
    label: "브로슈어 다운로드",
    href: "/downloads/eneris-brochure.pdf",
  },
};

const AWARDS = [
  {
    icon: ShieldCheck,
    lines: ["한국에너지공단 보급사업", "참여기업 연속 선정"],
  },
  {
    icon: StatsUpSquare,
    lines: ["한국에너지공단 A/S", "책임기업 연속 선정"],
  },
  {
    icon: GraphUp,
    lines: ["전국 5,000가구 이상", "시공 및 운영 경험"],
  },
];

const HIGHLIGHTS = [
  {
    icon: Tools,
    title: "무상 점검",
    description:
      "정기 점검과 안전 진단으로 설치 이후에도 안정적인 발전 효율을 유지합니다.",
  },
  {
    icon: DatabaseSearch,
    title: "보조금 컨설팅",
    description:
      "지역별 보조금과 세제 혜택을 함께 검토하여 설치 비용 부담을 낮춥니다.",
  },
  {
    icon: ShieldCheck,
    title: "맞춤 설계",
    description:
      "건물 구조와 일사량 데이터를 분석해 최적의 패널 배치와 구조 설계를 제안합니다.",
  },
];

const HIGHLIGHT_NOTE = {
  banner: ["주택용 태양광 설치하고", "관리비와 전기요금 절감하세요"],
  summary: "주택용 태양광(3kW) 설치비 최대 70% 지원",
  footnote: "* 지자체 보조금은 지역과 사업 여건에 따라 지원 내용이 상이할 수 있습니다.",
};

const PROGRESS_SUMMARY = {
  title: "Eneris 고객이 만들어낸 절감 효과",
  householdsLabel: "설치 세대",
  savingsLabel: "연간 절감 금액",
  footnote: "* 실제 절감액은 설비 규모와 계약 조건에 따라 달라질 수 있습니다.",
};

const PROGRESS_STEPS = [
  { households: 43000, savings: 516000 },
  { households: 47000, savings: 564000 },
  { households: 53000, savings: 636000 },
  { households: 60000, savings: 720000 },
  { households: 66000, savings: 792000 },
  { households: 70000, savings: 840000 },
  { households: 72000, savings: 864000 },
  { households: 74000, savings: 888000 },
  { households: 76000, savings: 912000 },
  { households: 78000, savings: 936000 },
  { households: 80000, savings: 960000 },
];

const SUPPORTS = [
  {
    icon: HeadsetHelp,
    title: "현장 맞춤형 점검",
    description: "Eneris 전문 엔지니어가 직접 방문해 구조 안전과 발전 상태를 점검합니다.",
  },
  {
    icon: StatsUpSquare,
    title: "데이터 기반 모니터링",
    description: "24시간 모니터링과 실시간 알림 시스템으로 이상 징후를 즉시 대응합니다.",
  },
];

const PROCESS_STEPS = [
  {
    icon: DatabaseSearch,
    title: "현장 진단",
    description: "지붕 구조와 전기 설비를 진단해 설치 가능 여부를 확인합니다.",
  },
  {
    icon: Tools,
    title: "설치 계획 수립",
    description: "일정·공정·인허가 준비를 마치고 최적의 시공 계획을 수립합니다.",
  },
  {
    icon: GraphUp,
    title: "인허가 및 자재 확보",
    description: "관계 기관 인허가를 대행하고 검증된 자재를 확보합니다.",
  },
  {
    icon: ShieldCheck,
    title: "설비 시공",
    description: "안전 기준에 따라 구조물과 모듈을 설치하고 전기 공사를 진행합니다.",
  },
  {
    icon: HeadsetHelp,
    title: "운영 · 유지관리",
    description: "모니터링과 정기 점검, A/S 체계로 안정적인 발전을 지원합니다.",
  },
];

const GALLERY_ITEMS = [
  {
    icon: GraphUp,
    title: "설계 컨설팅",
    caption: "주택 구조와 일사량을 분석해 최적의 설계를 제공합니다.",
  },
  {
    icon: Tools,
    title: "시공 현장",
    caption: "전문 시공팀이 안전 기준에 맞춰 설치를 진행합니다.",
  },
  {
    icon: StatsUpSquare,
    title: "운영 모니터링",
    caption: "데이터 기반 모니터링으로 발전량을 꾸준히 관리합니다.",
  },
];

const CONTACT_FIELDS = [
  {
    id: "name",
    label: "이름",
    type: "text",
    placeholder: "이름을 입력하세요",
  },
  {
    id: "phone",
    label: "연락처",
    type: "tel",
    placeholder: "연락처를 입력하세요",
  },
  {
    id: "address",
    label: "설치 주소",
    type: "text",
    placeholder: "설치 예정 주소나 지역을 입력하세요",
  },
];

export default function Eneris0401() {
  return (
    <div className="bg-white text-slate-900">
      <HeroSection />
      <AwardsSection />
      <HighlightSection />
      <ProgressSection />
      <SupportSection />
      <ProcessSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900">
      <div className="absolute -top-32 right-0 h-64 w-64 rounded-full bg-emerald-600/30 blur-3xl" />
      <div className="absolute -bottom-24 left-12 h-48 w-48 rounded-full bg-emerald-400/20 blur-3xl" />

      <div className="relative z-10">
        <div className="container flex flex-col items-center gap-8 py-20 text-white md:py-28">
          <Pill className="border-white/40 bg-white/10 text-white">
            {HERO_CONTENT.badge}
          </Pill>
          <div className="max-w-3xl text-center">
            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
              {HERO_CONTENT.title}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/85 md:text-lg">
              {HERO_CONTENT.subtitle}
            </p>
            <p className="mt-4 text-sm text-white/70 md:text-base">
              {HERO_CONTENT.note}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={HERO_CONTENT.primaryCta.href}
              className="inline-flex items-center rounded-full bg-white px-7 py-3 text-button font-semibold text-emerald-900 shadow-soft transition hover:bg-emerald-100"
            >
              {HERO_CONTENT.primaryCta.label}
            </a>
            <a
              href={HERO_CONTENT.secondaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/40 px-7 py-3 text-button font-semibold text-white transition hover:bg-white/10"
            >
              {HERO_CONTENT.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AwardsSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className={`${CONTAINER_CLASS} grid gap-6 md:grid-cols-3`}>
        {AWARDS.map((award) => {
          const IconComponent = award.icon;
          return (
            <div
              key={award.lines.join("-")}
              className="flex h-full flex-col items-center gap-6 rounded-[32px] border border-emerald-100 bg-emerald-50/70 p-8 text-center shadow-soft"
            >
              <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-soft">
                <IconComponent className="h-10 w-10 text-emerald-700" strokeWidth={1.8} />
              </span>
              <p className="text-base font-semibold leading-relaxed text-emerald-900">
                {award.lines.map((line, index) => (
                  <React.Fragment key={line}>
                    {line}
                    {index === award.lines.length - 1 ? null : <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function HighlightSection() {
  return (
    <section className="bg-slate-50 py-20 md:py-24">
      <div className={CONTAINER_CLASS}>
        <h2 className="text-center text-2xl font-semibold text-slate-900 md:text-3xl">
          {HIGHLIGHT_NOTE.banner.map((line, index) => (
            <React.Fragment key={line}>
              {line}
              {index === HIGHLIGHT_NOTE.banner.length - 1 ? null : <br />}
            </React.Fragment>
          ))}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col overflow-hidden rounded-[28px] border border-emerald-100 bg-white shadow-soft"
              >
                <div className="flex flex-1 flex-col items-center gap-4 px-8 py-10">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                    <IconComponent className="h-10 w-10 text-emerald-700" strokeWidth={1.8} />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 space-y-2 rounded-[28px] border border-emerald-100 bg-white px-8 py-6 text-center shadow-soft md:px-12 md:py-8">
          <p className="text-lg font-semibold text-emerald-700 md:text-xl">
            {HIGHLIGHT_NOTE.summary}
          </p>
          <p className="text-sm leading-relaxed text-slate-500">
            {HIGHLIGHT_NOTE.footnote}
          </p>
        </div>
      </div>
    </section>
  );
}

function ProgressSection() {
  const [activeIndex, setActiveIndex] = useState(2);

  const { households, savings } =
    PROGRESS_STEPS[activeIndex] || PROGRESS_STEPS[0];

  const progressPercent = useMemo(() => {
    if (PROGRESS_STEPS.length <= 1) return 0;
    return (activeIndex / (PROGRESS_STEPS.length - 1)) * 100;
  }, [activeIndex]);

  const formatNumber = (value) =>
    new Intl.NumberFormat("ko-KR").format(Math.round(Number(value) || 0));

  return (
    <section className="bg-white py-20 md:py-24">
      <div
        className={`${CONTAINER_CLASS} grid gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]`}
      >
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
            {PROGRESS_SUMMARY.title}
          </h2>

          <div className="space-y-6 rounded-[28px] border border-emerald-100 bg-emerald-50/70 p-8 shadow-soft">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
                {PROGRESS_SUMMARY.householdsLabel}
              </p>
              <p className="mt-2 text-3xl font-semibold text-emerald-900 md:text-4xl">
                {formatNumber(households)} 세대
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
                {PROGRESS_SUMMARY.savingsLabel}
              </p>
              <p className="mt-2 text-3xl font-semibold text-emerald-900 md:text-4xl">
                {formatNumber(savings)} 원
              </p>
            </div>
            <p className="text-sm leading-relaxed text-emerald-800">
              {PROGRESS_SUMMARY.footnote}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-8 rounded-[28px] border border-emerald-100 bg-white p-8 shadow-soft sm:p-10">
          <div className="h-2 rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-emerald-600 transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="grid grid-cols-3 gap-3 text-center text-xs font-semibold text-slate-500 sm:grid-cols-6 md:grid-cols-11 md:text-sm">
            {PROGRESS_STEPS.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`flex h-12 flex-1 items-center justify-center rounded-full border transition ${
                  index === activeIndex
                    ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                    : "border-slate-200 bg-slate-50 text-slate-500 hover:border-emerald-300 hover:text-emerald-600"
                }`}
              >
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportSection() {
  return (
    <section className="bg-slate-50 py-20 md:py-24">
      <div className={CONTAINER_CLASS}>
        <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
          Eneris 맞춤 지원 서비스
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SUPPORTS.map((support) => {
            const IconComponent = support.icon;
            return (
              <div
                key={support.title}
                className="flex flex-col gap-4 rounded-[28px] border border-emerald-100 bg-white p-8 shadow-soft"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                  <IconComponent className="h-8 w-8 text-emerald-700" strokeWidth={1.8} />
                </span>
                <h3 className="text-xl font-semibold text-slate-900">
                  {support.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {support.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className={CONTAINER_CLASS}>
        <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
          시공 프로세스
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-5">
          {PROCESS_STEPS.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.title}
                className="flex flex-col items-center gap-5 rounded-[28px] border border-emerald-100 bg-white p-6 text-center shadow-soft"
              >
                <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 shadow-soft">
                  <IconComponent className="h-10 w-10 text-emerald-700" strokeWidth={1.8} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
                  Step.{String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="bg-slate-900 py-20 md:py-24">
      <div className={`${CONTAINER_CLASS} text-white`}>
        <h2 className="text-center text-2xl font-semibold md:text-3xl">
          1:1 맞춤 컨설팅과 운영 사례
        </h2>
        <p className="mt-4 text-center text-sm text-white/70 md:text-base">
          Eneris가 직접 구축하고 운영하는 태양광 포트폴리오를 확인해 보세요.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {GALLERY_ITEMS.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="flex h-full flex-col items-center gap-4 rounded-[28px] border border-white/15 bg-white/10 p-8 text-center shadow-soft backdrop-blur"
              >
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                  <IconComponent className="h-10 w-10 text-white" strokeWidth={1.8} />
                </span>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-white/70">{item.caption}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.eneris.kr/example/example.php?cat=1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            포트폴리오 전체 보기
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    address: "",
    comment: "",
    agreeAll: false,
    agreeTerms: false,
    agreePrivacy: false,
  });

  const isSubmitEnabled = formState.agreeTerms && formState.agreePrivacy;

  const handleChange = (event) => {
    const { id, value, type, checked } = event.target;

    if (type === "checkbox") {
      if (id === "agreeAll") {
        setFormState((prev) => ({
          ...prev,
          agreeAll: checked,
          agreeTerms: checked,
          agreePrivacy: checked,
        }));
      } else {
        setFormState((prev) => ({
          ...prev,
          [id]: checked,
          agreeAll: checked && prev.agreeTerms && prev.agreePrivacy,
        }));
      }
      return;
    }

    setFormState((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="bg-slate-100 py-20 md:py-24">
      <div className={CONTAINER_CLASS}>
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft md:p-12">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
            Eneris 상담이 필요하신가요?
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
            보조금, 설치 일정, 유지 관리까지 전문가가 한 번에 답해드립니다. 아래 정보를 남겨주시면 빠르게 연락드리겠습니다.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              {CONTACT_FIELDS.map((field) => (
                <label key={field.id} htmlFor={field.id} className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-slate-700">
                    {field.label}
                  </span>
                  <input
                    id={field.id}
                    type={field.type}
                    value={formState[field.id]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                  />
                </label>
              ))}
            </div>

            <label htmlFor="comment" className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700">문의 내용을 남겨주세요</span>
              <textarea
                id="comment"
                value={formState.comment}
                onChange={handleChange}
                rows={5}
                placeholder="설치 목적, 희망 일정 등 상세 내용을 남겨주시면 보다 정확한 상담이 가능합니다."
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              />
            </label>

            <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 text-sm text-slate-600">
              <label className="flex gap-3">
                <input
                  id="agreeTerms"
                  type="checkbox"
                  checked={formState.agreeTerms}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-200"
                />
                <span>개인정보 수집 및 이용에 동의합니다. (필수)</span>
              </label>
              <label className="flex gap-3">
                <input
                  id="agreePrivacy"
                  type="checkbox"
                  checked={formState.agreePrivacy}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-200"
                />
                <span>
                  <a
                    href="https://www.eneris.kr/privacy.php"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                  >
                    개인정보 처리방침
                  </a>
                  에 동의합니다. (필수)
                </span>
              </label>
              <label className="flex gap-3">
                <input
                  id="agreeAll"
                  type="checkbox"
                  checked={formState.agreeAll}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-200"
                />
                <span>전체 동의</span>
              </label>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={!isSubmitEnabled}
                className="inline-flex min-w-[160px] items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-button font-semibold text-white shadow-soft transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                상담 신청
              </button>
              <p className="text-sm text-slate-500">
                담당자가 확인 후 영업일 기준 1일 내로 연락드립니다.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
