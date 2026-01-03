"use client";

import { useLangStore } from "@/store/lang.store";
import { t } from "@/lib/translations";

// Interface for Props
interface StudentsTableProps {
  students: any[]; // Replace 'any' with your Student Interface
  onEdit: (student: any) => void;
  onDelete: (student: any) => void;
}

export default function StudentsTable({ students, onEdit, onDelete }: StudentsTableProps) {
  const { lang } = useLangStore();

  return (
    <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center">
                {t[lang]?.students || "Students"}
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center">
                English Name
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center">
                Class
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center">
                Section
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {students.length > 0 ? (
              students.map((student) => (
                <tr
                  key={student.id}
                  className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white text-center">
                    {student.nameAr}
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white text-center">
                    {student.nameEn}
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white text-center">
                    {student.className}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300">
                      Section {student.section}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-1">
                      <button 
                        onClick={() => onEdit(student)}
                        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-blue-600 transition-colors"
                        title="Edit"
                      >
                        <span className="material-symbols-outlined text-xl">edit</span>
                      </button>
                      <button 
                        onClick={() => onDelete(student)}
                        className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-slate-400 hover:text-red-600 transition-colors"
                        title="Delete"
                      >
                        <span className="material-symbols-outlined text-xl">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-slate-500 dark:text-slate-400">
                  No students found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination (Static for now) */}
      <div className="bg-white dark:bg-[#1a202c] px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
             <span>Rows per page:</span>
             <select className="form-select border-none bg-slate-50 dark:bg-slate-800 rounded text-xs py-1 pl-2 pr-6 focus:ring-0 cursor-pointer">
               <option>10</option>
               <option>20</option>
             </select>
           </div>
           <div className="flex items-center gap-4">
             <span className="text-sm text-slate-500 dark:text-slate-400">
               1-5 of {students.length}
             </span>
             <div className="flex items-center gap-1">
               <button className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 disabled:opacity-50 transition-colors cursor-pointer">
                 <span className="material-symbols-outlined text-[20px]">chevron_left</span>
               </button>
               <button className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer">
                 <span className="material-symbols-outlined text-[20px]">chevron_right</span>
               </button>
             </div>
           </div>
      </div>
    </div>
  );
}