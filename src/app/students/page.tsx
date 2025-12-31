"use client"

import { useState } from "react"
import StudentsTable from "@/components/tables/StudentsTable"
import AddStudentModal from "@/components/ui/AddStudentModal"
import DashboardLayout from "@/components/layouts/DashBoardLayout"

export default function StudentsPage() {
  const [open, setOpen] = useState(false)

  return (
    <DashboardLayout>
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-semibold">Students</h2>
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add Student
        </button>
      </div>

      <StudentsTable />

      {open && <AddStudentModal onClose={() => setOpen(false)} />}
    </DashboardLayout>
  )
}
