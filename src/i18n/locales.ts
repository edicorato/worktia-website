export const supportedLocales = ["it", "en", "es", "fr", "de"] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  it: "IT",
  en: "EN",
  es: "ES",
  fr: "FR",
  de: "DE",
};

export const ogLocales: Record<Locale, string> = {
  it: "it_IT",
  en: "en_US",
  es: "es_ES",
  fr: "fr_FR",
  de: "de_DE",
};

export function isLocale(value: string | undefined): value is Locale {
  return supportedLocales.includes(value as Locale);
}
