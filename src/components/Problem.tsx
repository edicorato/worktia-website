import { useLocale } from "../i18n/useLocale";

export function Problem() {
  const { t } = useLocale();

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="section-kicker">{t.problem.kicker}</p>
          <h2 className="section-title">{t.problem.title}</h2>
          <p className="mt-5 text-lg leading-8 text-anthracite/72">{t.problem.description}</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.problem.cards.map((problem) => (
            <article key={problem.title} className="rounded-lg border border-anthracite/10 bg-paper p-5">
              <div className="mb-4 h-2 w-12 rounded-full bg-primary" />
              <h3 className="text-lg font-semibold">{problem.title}</h3>
              <p className="mt-3 text-sm leading-6 text-anthracite/70">{problem.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
