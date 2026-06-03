import { useLocale } from "../i18n/useLocale";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  const { t, mailtoHref } = useLocale();

  return (
    <section id="top" className="overflow-hidden border-b border-anthracite/10">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-primary/25 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">
            {t.hero.badge}
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.04] tracking-normal text-anthracite sm:text-6xl lg:text-7xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-anthracite/75 sm:text-xl">
            {t.hero.subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href={mailtoHref}>
              {t.cta.beta}
            </a>
            <a className="btn-secondary" href="#come-funziona">
              {t.cta.flow}
            </a>
          </div>
        </div>
        <PhoneMockup />
      </div>
    </section>
  );
}
