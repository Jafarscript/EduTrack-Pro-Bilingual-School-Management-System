"use client"

import { useState } from "react"
import { mockSubjects } from "@/lib/mockSubjects"
import { Pencil, Plus, Trash2 } from "lucide-react"
import AddSubjectModal from "./AddSubjectModal"

export default function SubjectsTab() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="bg-white rounded shadow-sm">
        <div className="p-4 flex justify-between border-b">
          <h3 className="font-semibold">Subjects Repository</h3>
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 text-sm bg-blue-600 text-white px-3 py-1 rounded"
          >
            <Plus size={14} />
            Add Subject
          </button>
        </div>

        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-3 text-left">English Name</th>
              <th className="p-3 text-left">Arabic Name</th>
              <th className="p-3 text-left">Code</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {mockSubjects.map((subject) => (
              <tr key={subject.id} className="border-b">
                <td className="p-3">{subject.nameEn}</td>
                <td className="p-3">
                  {subject.nameAr}
                </td>
                <td className="p-3">
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                    {subject.code}
                  </span>
                </td>
                <td className="p-3 flex gap-3">
                <Pencil
                  size={16}
                  className="text-blue-600 cursor-pointer"
                />
                <Trash2
                  size={16}
                  className="text-red-600 cursor-pointer"
                />
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {open && <AddSubjectModal onClose={() => setOpen(false)} />}
    </>
  )
}
