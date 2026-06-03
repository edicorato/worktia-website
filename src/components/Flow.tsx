import { useLocale } from "../i18n/useLocale";

export function Flow() {
  const { t } = useLocale();

  return (
    <section id="come-funziona" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="section-kicker">{t.flow.kicker}</p>
          <h2 className="section-title">{t.flow.title}</h2>
          <p className="mt-5 text-lg leading-8 text-anthracite/72">{t.flow.description}</p>
        </div>
        <ol className="mt-10 grid gap-4 md:grid-cols-5">
          {t.flow.steps.map((step, index) => (
            <li key={step} className="relative rounded-lg border border-anthracite/10 bg-white p-5 shadow-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold leading-snug">{step}</h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
