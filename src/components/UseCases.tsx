import { useLocale } from "../i18n/useLocale";

export function UseCases() {
  const { t } = useLocale();

  return (
    <section id="per-chi" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="section-kicker">{t.useCases.kicker}</p>
            <h2 className="section-title">{t.useCases.title}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.useCases.cards.map((useCase) => (
              <article key={useCase.title} className="rounded-lg border border-anthracite/10 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold">{useCase.title}</h3>
                <p className="mt-2 text-sm leading-6 text-anthracite/70">{useCase.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
