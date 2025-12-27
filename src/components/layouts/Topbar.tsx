"use client"

import { useLangStore } from "@/store/lang.store"

export default function Topbar() {
  const { lang, toggleLang } = useLangStore()

  return (
    <header className="h-14 bg-white border-b flex items-center justify-between px-6">
      <div />

      <button
        onClick={toggleLang}
        className="text-sm px-3 py-1 border rounded"
      >
        {lang === "en" ? "AR" : "EN"}
      </button>
    </header>
  )
}
