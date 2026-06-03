import { useLocale } from "../i18n/useLocale";

export function Difference() {
  const { t } = useLocale();

  return (
    <section className="bg-anthracite py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="section-kicker text-primary">{t.difference.kicker}</p>
          <h2 className="text-3xl font-bold leading-tight tracking-normal sm:text-5xl">{t.difference.title}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">{t.difference.description}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {t.difference.points.map((item) => (
              <li key={item} className="rounded-lg border border-white/12 bg-white/6 px-4 py-3 text-sm font-semibold text-white">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
