import { useLocale } from "../i18n/useLocale";

export function FAQ() {
  const { t } = useLocale();

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <p className="section-kicker">{t.faq.kicker}</p>
        <h2 className="section-title">{t.faq.title}</h2>
        <div className="mt-8 divide-y divide-anthracite/10 rounded-lg border border-anthracite/10 bg-white">
          {t.faq.items.map((faq) => (
            <details key={faq.question} className="group p-5 open:bg-paper/60">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-lg font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-white">
                {faq.question}
                <span className="text-primary transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 leading-7 text-anthracite/72">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
