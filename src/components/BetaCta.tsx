import { useLocale } from "../i18n/useLocale";

export function BetaCta() {
  const { t, mailtoHref } = useLocale();

  return (
    <section id="beta" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
        <p className="section-kicker">{t.betaCta.kicker}</p>
        <h2 className="section-title mx-auto max-w-3xl">{t.betaCta.title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-anthracite/72">{t.betaCta.description}</p>
        <div className="mt-8">
          <a className="btn-primary" href={mailtoHref}>
            {t.cta.beta}
          </a>
        </div>
      </div>
    </section>
  );
}
