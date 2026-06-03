import { useLocale } from "../i18n/useLocale";

export function Footer() {
  const { locale, t, mailtoHref } = useLocale();
  const links = [
    { label: t.footer.links.privacy, href: `/${locale}/privacy` },
    { label: t.footer.links.terms, href: `/${locale}/terms` },
    { label: t.footer.links.contacts, href: mailtoHref },
  ];

  return (
    <footer className="border-t border-anthracite/10 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-lg font-bold">{t.brand}</p>
          <p className="mt-1 text-sm text-anthracite/65">{t.footer.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-anthracite/70 transition hover:text-anthracite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
