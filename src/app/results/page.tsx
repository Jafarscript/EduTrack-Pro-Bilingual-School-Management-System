"use client"

import { useState } from "react"
import { mockClasses } from "@/lib/mockClasses"
import { mockSubjects } from "@/lib/mockSubjects"
import DashboardLayout from "@/components/layouts/DashBoardLayout"
import { mockStudents } from "@/lib/mockStudent"

export default function ResultsPage() {
  const [selectedClassId, setSelectedClassId] = useState<number | null>(null)
  const [term, setTerm] = useState("First Term")

  const selectedClass = mockClasses.find(
    (cls) => cls.id === selectedClassId
  )

  const subjects =
    selectedClass?.subjects.map((id) =>
      mockSubjects.find((s) => s.id === id)
    ) || []

  return (
    <DashboardLayout>
      <h2 className="text-2xl font-semibold mb-6">Results</h2>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select
          className="border px-3 py-2 rounded"
          onChange={(e) => setSelectedClassId(Number(e.target.value))}
        >
          <option value="">Select Class</option>
          {mockClasses.map((cls) => (
            <option key={cls.id} value={cls.id}>
              {cls.nameEn}
            </option>
          ))}
        </select>

        <select
          className="border px-3 py-2 rounded"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        >
          <option>First Term</option>
          <option>Second Term</option>
          <option>Third Term</option>
        </select>
      </div>

      {/* Table */}
      {selectedClass && (
        <div className="bg-white rounded shadow-sm overflow-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-3 text-left">Student</th>
                {subjects.map(
                  (sub) =>
                    sub && (
                      <th key={sub.id} className="p-3 text-center">
                        {sub.nameEn}
                      </th>
                    )
                )}
              </tr>
            </thead>

            <tbody>
              {mockStudents.map((student) => (
                <tr key={student.id} className="border-b">
                  <td className="p-3">
                    <div>{student.nameEn}</div>
                    <div
                      className="text-xs text-gray-500"
                      dir="rtl"
                    >
                      {student.nameAr}
                    </div>
                  </td>

                  {subjects.map(
                    (sub) =>
                      sub && (
                        <td
                          key={sub.id}
                          className="p-3 text-center"
                        >
                          <input
                            type="number"
                            className="w-16 border rounded px-1 text-center"
                          />
                        </td>
                      )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </DashboardLayout>
  )
}
