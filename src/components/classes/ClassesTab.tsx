"use client";

import { Plus, Pencil, Trash2 } from "lucide-react";
import { mockClasses } from "@/lib/mockClasses";
import EditClassModal from "./EditClassModal";
import { useState } from "react";

export default function ClassesTab() {
  const [selectedClass, setSelectedClass] = useState<any>(null);

  return (
    <div className="bg-white rounded shadow-sm">
      {/* Header */}
      <div className="p-4 flex justify-between border-b">
        <input
          placeholder="Search classes..."
          className="border px-3 py-1 rounded w-64 text-sm"
        />

        <button className="flex items-center gap-2 text-sm bg-blue-600 text-white px-3 py-1 rounded">
          <Plus size={14} />
          Add New Class
        </button>
      </div>

      {/* Table */}
      <table className="w-full text-sm">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="p-3 text-left">Class (EN)</th>
            <th className="p-3 text-left">Class (AR)</th>
            <th className="p-3 text-left">Subjects</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {mockClasses.map((cls) => (
            <tr key={cls.id} className="border-b text-left">
              {/* English */}
              <td className="p-3 font-medium">{cls.nameEn}</td>

              {/* Arabic */}
              <td className="p-3" dir="rtl">
                {cls.nameAr}
              </td>

              {/* Subjects */}
              <td className="p-3 flex gap-1 flex-wrap">
                {cls.subjects.length === 0 ? (
                  <span className="text-xs text-gray-400">
                    No subjects assigned
                  </span>
                ) : (
                  cls.subjects.map((sub) => (
                    <span
                      key={sub}
                      className="px-2 py-0.5 text-xs bg-gray-100 rounded"
                    >
                      {sub}
                    </span>
                  ))
                )}
              </td>

              {/* Actions */}

              <td className="p-3">
                <div className="flex gap-3">
                  <button>
                    <Pencil
                      size={16}
                      className="text-blue-600 cursor-pointer"
                      onClick={() => setSelectedClass(cls)}
                    />
                  </button>
                  <button>
                    <Trash2 size={16} className="text-red-600 cursor-pointer" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedClass && (
        <EditClassModal
          classData={selectedClass}
          onClose={() => setSelectedClass(null)}
        />
      )}
    </div>
  );
}
