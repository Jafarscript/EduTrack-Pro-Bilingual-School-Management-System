import { create } from "zustand"

type Lang = "en" | "ar"

interface LangState {
  lang: Lang
  dir: "ltr" | "rtl"
  toggleLang: () => void
}

export const useLangStore = create<LangState>((set) => ({
  lang: "en",
  dir: "ltr",
  toggleLang: () =>
    set((state) => ({
      lang: state.lang === "en" ? "ar" : "en",
      dir: state.lang === "en" ? "rtl" : "ltr"
    }))
}))
