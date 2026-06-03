import { useLocale } from "../i18n/useLocale";

type LegalPageProps = {
  page: "privacy" | "terms";
};

export function LegalPage({ page }: LegalPageProps) {
  const { locale, t } = useLocale();
  const content = t.legal[page];
  const homeHref = `/${locale}`;

  return (
    <main className="bg-paper">
      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
        <a
          href={homeHref}
          className="text-sm font-bold text-primary transition hover:text-[#A94F16] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
        >
          {t.legal.common.backHome}
        </a>
        <div className="mt-8 border-b border-anthracite/10 pb-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">Worktia</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-normal text-anthracite sm:text-5xl">
            {content.title}
          </h1>
          <p className="mt-4 text-sm font-medium text-anthracite/60">{content.updated}</p>
          <p className="mt-6 text-lg leading-8 text-anthracite/75">{content.intro}</p>
        </div>
        <div className="divide-y divide-anthracite/10">
          {content.sections.map((section) => (
            <section key={section.title} className="py-8">
              <h2 className="text-xl font-bold tracking-normal text-anthracite">{section.title}</h2>
              {section.body ? <p className="mt-4 leading-7 text-anthracite/75">{section.body}</p> : null}
              {section.items ? (
                <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-anthracite/75">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
