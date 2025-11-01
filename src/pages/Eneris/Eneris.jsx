import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { Pill } from "@/components/Pill";
import eneris from "./eneris.json";

const CONTAINER_CLASS = "container";

const AWARDS = [
  {
    image: "https://www.eneris.kr/images/service/img_service04_0101.png",
    lines: ["한국에너지공단 보급사업", "참여기업 연속 선정"],
  },
  {
    image: "https://www.eneris.kr/images/service/img_service04_0101.png",
    lines: ["한국에너지공단 A/S", "책임기업 연속 선정"],
  },
  {
    image: "https://www.eneris.kr/images/service/img_service04_0101.png",
    lines: ["전국 5,000가구 이상", "시공 및 관리경험"],
  },
];

const HIGHLIGHTS = [
  {
    image: "https://www.eneris.kr/images/service/img_service04_0201.png",
    title: "무상 점검",
    description:
      "주기적인 설비 진단과 안전 점검으로 안정적인 발전 효율을 유지합니다.",
  },
  {
    image: "https://www.eneris.kr/images/service/img_service04_0202.png",
    title: "지자체 보조금",
    description:
      "지역별 보조금 제도까지 함께 검토하여 설치 비용 부담을 낮춥니다.",
  },
  {
    image: "https://www.eneris.kr/images/service/img_service04_0203.png",
    title: "태양광 부지 설계",
    description:
      "주택 구조와 일사량을 분석해 최적의 패널 배치와 구조 설계를 제공합니다.",
  },
];

const HIGHLIGHT_NOTE = {
  banner: "주택용 태양광 설치하고\n관리비와 전기요금 절감하세요",
  summary: "주택용 태양광(3kW) 설치비 최대 70% 지원",
  footnote:
    "* 지자체 보조금은 지역과 사업 여건에 따라 지원 내용이 달라질 수 있습니다.",
};

const PROGRESS_SUMMARY = {
  title: "주택용 태양광 설치하면, 관리비와 전기요금 절감해보세요!",
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
    image: "https://www.eneris.kr/images/service/img_service04_0401.png",
    title: "기존 설비 개보수",
    description:
      "노후 설비도 Eneris가 책임지고 리모델링하여 발전량을 회복시킵니다.",
  },
  {
    image: "https://www.eneris.kr/images/service/img_service04_0402.png",
    title: "공동주택 통합 관리",
    description: "모니터링과 유지보수를 통합 제공해 입주자 만족도를 높입니다.",
  },
];

const PROCESS_STEPS = [
  {
    image: "https://www.eneris.kr/images/service/img_service04_0301.png",
    title: "계약 체결",
    description: "현장 실사와 조건 협의를 통해 합리적인 계약을 진행합니다.",
  },
  {
    image: "https://www.eneris.kr/images/service/img_service04_0302.png",
    title: "설치 일정 확정",
    description: "공정 계획과 인허가 준비를 마친 뒤 일정과 인력을 확정합니다.",
  },
  {
    image: "https://www.eneris.kr/images/service/img_service04_0303.png",
    title: "자재 입고 및 검수",
    description:
      "품질 검수와 자재 관리 시스템으로 시공 불량을 사전에 차단합니다.",
  },
  {
    image: "https://www.eneris.kr/images/service/img_service04_0304.png",
    title: "설비 시공",
    description: "전문 시공팀이 안전 기준에 맞춰 구조물과 모듈을 설치합니다.",
  },
  {
    image: "https://www.eneris.kr/images/service/img_service04_0305.png",
    title: "유지 보수",
    description: "설치 후 24시간 모니터링 및 AS 체계로 안심 운영을 지원합니다.",
  },
];

const GALLERY_IMAGES = [
  {
    image: "https://www.eneris.kr/images/service/img_service0401_01.jpg",
    title: "설계 컨설팅",
  },
  {
    image: "https://www.eneris.kr/images/service/img_service0401_02.jpg",
    title: "시공 현장",
  },
  {
    image: "https://www.eneris.kr/images/service/img_service0401_03.jpg",
    title: "운영 모니터링",
  },
];

const FORM_FIELDS = [
  { id: "name", label: "이름", type: "text", placeholder: "이름을 입력하세요" },
  {
    id: "phone",
    label: "연락처",
    type: "tel",
    placeholder: "연락처를 입력하세요",
  },
  {
    id: "address",
    label: "주소",
    type: "text",
    placeholder: "설치 주소를 입력하세요",
  },
];

export default function Eneris0401() {
  const { hero = {} } = eneris;

  return (
    <div className="bg-white text-slate-900">
      <HeroSection hero={hero} />
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

function HeroSection({ hero }) {
  return (
    <section className="relative overflow-hidden py-40">
      <div className="absolute inset-0" />

      <div className="container mx-auto px-4 relative">
        <div className="mx-auto max-w-4xl text-center">
          <Pill>{hero.badge}</Pill>

          <h1 className="mt-5 text-display  leading-tight tracking-tight">
            {hero.title}
          </h1>
          <p className="mt-6 text-title text-brand-dark">{hero.subtitle}</p>
          {hero.note ? (
            <p className="text-sm text-white/70 md:text-base">{hero.note}</p>
          ) : null}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-description text-slate-600">{hero.highlight}</p>
          <Link
            to="/support/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-button font-semibold text-white shadow-soft transition-colors hover:bg-brand-dark"
          >
            {"건물태양광"}
          </Link>
        </div>
      </div>
    </section>
  );
}

function AwardsSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className={`${CONTAINER_CLASS} grid gap-6 md:grid-cols-3`}>
        {AWARDS.map((award, index) => (
          <div
            key={award.lines.join("-") + index}
            className="flex h-full flex-col items-center gap-6 rounded-[32px] border border-emerald-100 bg-emerald-50/70 p-8 text-center shadow-soft"
          >
            <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-soft">
              <img
                src={award.image}
                alt=""
                loading="lazy"
                className="h-14 w-14 object-contain"
              />
            </span>
            <p className="text-base font-semibold leading-relaxed text-emerald-900">
              {award.lines.map((line, lineIndex) => (
                <React.Fragment key={line + lineIndex}>
                  {line}
                  {lineIndex === award.lines.length - 1 ? null : <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HighlightSection() {
  return (
    <section className="bg-slate-50 py-20 md:py-24">
      <div className={CONTAINER_CLASS}>
        <h2 className="text-center text-2xl font-semibold text-slate-900 md:text-3xl">
          {HIGHLIGHT_NOTE.banner.split("\n").map((line, index) => (
            <React.Fragment key={line + index}>
              {line}
              {index === HIGHLIGHT_NOTE.banner.split("\n").length - 1 ? null : (
                <br />
              )}
            </React.Fragment>
          ))}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col overflow-hidden rounded-[28px] border border-emerald-100 bg-white shadow-soft"
            >
              <div className="relative aspect-[4/3] bg-emerald-50">
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 px-8 py-8">
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
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
            {PROGRESS_STEPS.map((step, index) => (
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
          Eneris 맞춤 서비스
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SUPPORTS.map((support) => (
            <div
              key={support.title}
              className="flex flex-col overflow-hidden rounded-[28px] border border-emerald-100 bg-white shadow-soft"
            >
              <div className="relative aspect-[4/3] bg-emerald-50">
                <img
                  src={support.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 px-8 py-8">
                <h3 className="text-xl font-semibold text-slate-900">
                  {support.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {support.description}
                </p>
              </div>
            </div>
          ))}
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
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col items-center gap-5 rounded-[28px] border border-emerald-100 bg-white p-6 text-center shadow-soft"
            >
              <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 shadow-soft">
                <img
                  src={step.image}
                  alt=""
                  loading="lazy"
                  className="h-12 w-12 object-contain"
                />
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
          ))}
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
          Eneris가 구축한 실제 시공 현장을 확인해 보세요.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {GALLERY_IMAGES.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[28px] border border-white/15 bg-white/10 shadow-soft backdrop-blur"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent p-4">
                  <p className="text-center text-sm font-semibold text-white">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.eneris.kr/example/example.php?cat=1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            성공 사례 더 보기
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
    } else {
      setFormState((prev) => ({ ...prev, [id]: value }));
    }
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
            보조금, 설치 일정, 유지관리까지 전문가가 한 번에 답해드립니다. 아래
            정보를 남겨주시면 빠르게 연락드리겠습니다.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              {FORM_FIELDS.map((field) => (
                <label
                  key={field.id}
                  htmlFor={field.id}
                  className="flex flex-col gap-2"
                >
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
              <span className="text-sm font-semibold text-slate-700">
                문의 내용을 남겨주세요
              </span>
              <textarea
                id="comment"
                value={formState.comment}
                onChange={handleChange}
                rows={5}
                placeholder="설치 용도, 희망 일정 등 상세 내용을 남겨주시면 보다 정확한 상담이 가능합니다."
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

            <div className="flex flex-wrap gap-4">
              <button
                type="submit"
                disabled={!isSubmitEnabled}
                className="inline-flex min-w-[160px] items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-300"
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
