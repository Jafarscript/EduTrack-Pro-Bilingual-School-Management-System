"use client"

import { useLangStore } from "@/store/lang.store"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { dir } = useLangStore()

  return (
    <div className="flex h-screen bg-gray-100" dir={dir}>
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}
