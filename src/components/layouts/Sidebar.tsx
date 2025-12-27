"use client"

import Link from "next/link"
import { useLangStore } from "@/store/lang.store"
import { t } from "@/lib/translations";
import { usePathname } from "next/navigation";



const links = [
  { href: "/dashboard", key: "dashboard", material: "grid_view" },
  { href: "/students", key: "students", material: "school" },
  { href: "/classes", key: "classes" , material: "menu_book" },
  { href: "/results", key: "results", material: "description" }
]

export default function Sidebar() {
  const { lang } = useLangStore();
    const pathname = usePathname();

  return (
    <aside className="w-64 flex-col border-r border-gray-200 dark:border-gray-800 bg-surface-light dark:bg-surface-dark hidden md:flex">
      <div className="flex items-center gap-3 px-6 py-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
            <span className="material-symbols-outlined text-2xl">school</span>
        </div>
        <div className="flex flex-col">
            <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-900 dark:text-white">EduTrack Pro</h1>
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400">School Admin</p>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-2 px-3 py-4">
        {links.map(({ href, key, material }) => (
          <Link
            key={key}
            href={href}
            className={`group flex items-center gap-3 rounded-lg px-3 py-2.5  transition-colors${pathname === href ? " bg-primary/10 text-primary " : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
          >
            <span className="material-symbols-outlined">{material}</span>
            <span>{t[lang][key as keyof typeof t[typeof lang]]}</span>
          </Link>
        ))}
      </nav>

      <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-800">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors">
        <span className="material-symbols-outlined">logout</span> Logout
        </Link>
        <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 EduTrack Pro</p>
      </div>
    </aside>
  )
}
