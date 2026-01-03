"use client"

import { mockSubjects } from "@/lib/mockSubjects"

export default function EditClassModal({
  classData,
  onClose
}: {
  classData: any
  onClose: () => void
}) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-105 rounded p-6">
        <h3 className="font-semibold mb-4">Edit Class</h3>

        {/* Class Names */}
        <div className="space-y-3">
          <input
            defaultValue={classData.nameEn}
            placeholder="Class name (English)"
            className="w-full border p-2 rounded"
          />

          <input
            defaultValue={classData.nameAr}
            placeholder="Class name (Arabic)"
            dir="rtl"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Subjects */}
        <div className="mt-5">
          <p className="text-sm font-medium mb-2">Assign Subjects</p>

          <div className="space-y-2 max-h-40 overflow-auto border rounded p-2">
            {mockSubjects.map((sub) => (
              <label
                key={sub.id}
                className="flex items-center gap-2 text-sm cursor-pointer"
              >
                <input
                  type="checkbox"
                  defaultChecked={classData.subjects.includes(sub.id)}
                />
                <span>
                  {sub.nameEn} /{" "}
                  <span dir="rtl">{sub.nameAr}</span>
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={onClose}
            className="px-3 py-1 border rounded"
          >
            Cancel
          </button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}
