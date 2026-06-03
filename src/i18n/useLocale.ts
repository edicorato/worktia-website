import { createContext, createElement, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { defaultLocale, isLocale, ogLocales, type Locale } from "./locales";
import { translations, type Translation } from "./translations";

const storageKey = "worktia-locale";

function getPathLocale(pathname: string): Locale | undefined {
  const segment = pathname.split("/").filter(Boolean)[0];
  return isLocale(segment) ? segment : undefined;
}

function getStoredLocale(): Locale | undefined {
  try {
    const stored = window.localStorage.getItem(storageKey);
    const candidate = stored ?? undefined;
    return isLocale(candidate) ? candidate : undefined;
  } catch {
    return undefined;
  }
}

function getNavigatorLocale(): Locale | undefined {
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];

  for (const language of languages) {
    const base = language.toLowerCase().split("-")[0];
    if (isLocale(base)) {
      return base;
    }
  }

  return undefined;
}

function resolveLocale(): Locale {
  return getPathLocale(window.location.pathname) ?? getStoredLocale() ?? getNavigatorLocale() ?? defaultLocale;
}

function buildLocalizedPath(locale: Locale, pathname = window.location.pathname): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length > 0 && isLocale(parts[0])) {
    parts[0] = locale;
  } else {
    parts.unshift(locale);
  }

  return `/${parts.join("/")}`;
}

function updateMeta(name: string, content: string) {
  let meta = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = name;
    document.head.append(meta);
  }
  meta.content = content;
}

function updateProperty(property: string, content: string) {
  let meta = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.append(meta);
  }
  meta.content = content;
}

type LocaleContextValue = {
  locale: Locale;
  t: Translation;
  changeLocale: (locale: Locale) => void;
  mailtoHref: string;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

function useLocaleState(): LocaleContextValue {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return defaultLocale;
    }
    return resolveLocale();
  });

  const t = translations[locale];

  useEffect(() => {
    const pathLocale = getPathLocale(window.location.pathname);

    if (!pathLocale) {
      const target = `${buildLocalizedPath(locale)}${window.location.search}${window.location.hash}`;
      window.history.replaceState(null, "", target);
    }
  }, [locale]);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = t.seo.title;
    updateMeta("description", t.seo.description);
    updateProperty("og:title", t.seo.title);
    updateProperty("og:description", t.seo.description);
    updateProperty("og:locale", ogLocales[locale]);
  }, [locale, t]);

  useEffect(() => {
    const onPopState = () => {
      setLocale(resolveLocale());
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const changeLocale = useCallback((nextLocale: Locale) => {
    setLocale(nextLocale);

    try {
      window.localStorage.setItem(storageKey, nextLocale);
    } catch {
      // Ignore storage errors so language switching still works.
    }

    const target = `${buildLocalizedPath(nextLocale)}${window.location.search}${window.location.hash}`;
    if (target !== `${window.location.pathname}${window.location.search}${window.location.hash}`) {
      window.history.pushState(null, "", target);
    }
  }, []);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(t.mailtoSubject);
    return `mailto:beta@worktia.com?subject=${subject}`;
  }, [t.mailtoSubject]);

  return {
    locale,
    t,
    changeLocale,
    mailtoHref,
  };
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const value = useLocaleState();
  return createElement(LocaleContext.Provider, { value }, children);
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used inside LocaleProvider");
  }

  return context;
}
