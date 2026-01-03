"use client"

import { useState } from "react"
import DashboardLayout from "@/components/layouts/DashBoardLayout"
import SubjectsTab from "@/components/classes/SubjectsTab"
import ClassesTab from "@/components/classes/ClassesTab"

export default function ClassesPage() {
  const [activeTab, setActiveTab] = useState<"classes" | "subjects">("subjects")

  return (
    <DashboardLayout>
      <h2 className="text-2xl font-semibold mb-6">Academic Structure</h2>

      {/* Tabs */}
      <div className="flex gap-4 border-b mb-6">
        <button
          onClick={() => setActiveTab("classes")}
          className={`pb-2 ${
            activeTab === "classes"
              ? "border-b-2 border-blue-600 font-semibold"
              : "text-gray-500"
          }`}
        >
          Classes Management
        </button>

        <button
          onClick={() => setActiveTab("subjects")}
          className={`pb-2 ${
            activeTab === "subjects"
              ? "border-b-2 border-blue-600 font-semibold"
              : "text-gray-500"
          }`}
        >
          Subjects Repository
        </button>
      </div>

      {/* Content */}
      {activeTab === "subjects" && <SubjectsTab />}
      {activeTab === "classes" && <ClassesTab />}
    </DashboardLayout>
  )
}
