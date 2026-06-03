import { useLocale } from "../i18n/useLocale";

export function Features() {
  const { t } = useLocale();

  return (
    <section id="funzioni" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="section-kicker">{t.features.kicker}</p>
          <h2 className="section-title">{t.features.title}</h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.cards.map((feature) => (
            <article key={feature.title} className="rounded-lg border border-anthracite/10 bg-paper p-5 transition hover:border-primary/35 hover:bg-white">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md border border-primary/20 bg-white">
                <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[10px_0_0_rgba(194,92,26,0.24),0_10px_0_rgba(194,92,26,0.24),10px_10px_0_rgba(194,92,26,0.14)]" />
              </div>
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                {feature.badge ? (
                  <span className="shrink-0 rounded-full border border-primary/20 bg-primary/10 px-2 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-primary">
                    {feature.badge}
                  </span>
                ) : null}
              </div>
              <p className="mt-3 text-sm leading-6 text-anthracite/70">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
