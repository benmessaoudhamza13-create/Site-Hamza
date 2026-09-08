"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";

export type Lang = "fr" | "en";
export type L<T = string> = { fr: T; en: T };

/* Petit magasin externe (localStorage) pour la langue. */
const listeners = new Set<() => void>();

function readLang(): Lang {
  try {
    return localStorage.getItem("lang") === "en" ? "en" : "fr";
  } catch {
    return "fr";
  }
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

function writeLang(l: Lang) {
  try {
    localStorage.setItem("lang", l);
  } catch {}
  listeners.forEach((cb) => cb());
}

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ lang: "fr", setLang: () => {} });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, readLang, () => "fr" as Lang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang: writeLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

/** Retourne une fonction `t` qui choisit la bonne langue dans un objet {fr, en}. */
export function useT() {
  const { lang } = useLang();
  return function t<T>(value: L<T>): T {
    return value[lang];
  };
}
