"use client";

import { useLangStore } from "@/store/lang.store";
import { t } from "@/lib/translations";
import { Pencil, Trash2 } from "lucide-react";
import { mockStudents } from "@/lib/mockStudent";

export default function StudentsTable() {
  const { lang } = useLangStore();

  return (
    <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-slate-50 dark:bg-slate-800/50  border-b border-slate-200 dark:border-slate-800">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {t[lang].students}
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                English Name
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Class
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Section
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {mockStudents.map((student) => (
              <tr
                key={student.id}
                className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                  {student.nameArabic}
                </td>
                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                  {student.nameEnglish}
                </td>
                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                  {student.className}
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300">
                    Section {student.section}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-xl">
                        edit
                      </span>
                    </button>
                    <button className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/2 text-slate-400 hover:text-red-600  transition-colors">
                      <span className="material-symbols-outlined text-xl">
                        delete
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="bg-white dark:bg-[#1a202c] px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <span>Rows per page:</span>
          <select className="form-select border-none bg-slate-50 dark:bg-slate-800 rounded text-xs py-1 pl-2 pr-6 focus:ring-0 cursor-pointer">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-500 dark:text-slate-400">
            <span className="font-medium text-slate-900 dark:text-white">
              1-5
            </span>{" "}
            of{" "}
            <span className="font-medium text-slate-900 dark:text-white">
              120
            </span>
          </span>
          <div className="flex items-center gap-1">
            <button
              className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 disabled:opacity-50 transition-colors"
              disabled={false}
            >
              <span className="material-symbols-outlined text-[20px]">
                chevron_left
              </span>
            </button>
            <button className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
