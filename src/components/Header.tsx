import { localeLabels, supportedLocales } from "../i18n/locales";
import { useLocale } from "../i18n/useLocale";

export function Header() {
  const { locale, t, changeLocale, mailtoHref } = useLocale();
  const navItems = [
    { label: t.nav.flow, href: "#come-funziona" },
    { label: t.nav.features, href: "#funzioni" },
    { label: t.nav.useCases, href: "#per-chi" },
    { label: t.nav.beta, href: "#beta" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-anthracite/10 bg-paper/90 backdrop-blur">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 sm:px-6 lg:px-8"
        aria-label={t.nav.ariaLabel}
      >
        <a
          href="#top"
          className="text-xl font-bold tracking-normal text-anthracite outline-none transition focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
        >
          {t.brand}
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-anthracite/75 transition hover:text-anthracite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="flex items-center rounded-md border border-anthracite/10 bg-white px-1 py-1 shadow-sm"
            aria-label={t.languageSelector.ariaLabel}
            role="group"
          >
            {supportedLocales.map((item) => (
              <button
                key={item}
                type="button"
                className={`rounded px-1.5 py-1 text-[11px] font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:px-2 ${
                  locale === item ? "bg-primary text-white" : "text-anthracite/65 hover:text-anthracite"
                }`}
                aria-pressed={locale === item}
                onClick={() => changeLocale(item)}
              >
                {localeLabels[item]}
              </button>
            ))}
          </div>
          <a className="btn-primary hidden whitespace-nowrap xl:inline-flex" href={mailtoHref}>
            {t.cta.beta}
          </a>
        </div>
      </nav>
    </header>
  );
}
