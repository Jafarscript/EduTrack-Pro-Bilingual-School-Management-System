"use client";

import { useState } from "react";
import StudentsTable from "@/components/tables/StudentsTable";
import DeleteConfirmationModal from "@/components/ui/DeleteConfirmationModal";
import DashboardLayout from "@/components/layouts/DashBoardLayout";
import { mockStudents } from "@/lib/mockStudent";
import StudentFormModal from "@/components/ui/StudentFormModal";

export default function StudentsPage() {
  const [search, setSearch] = useState("");
  
  // Modal States
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
  // Selection State (for Edit/Delete)
  const [selectedStudent, setSelectedStudent] = useState<any | null>(null);

  // Filter Logic
  const filteredStudents = mockStudents.filter((s) =>
    (s.nameAr + s.nameEn).toLowerCase().includes(search.toLowerCase())
  );

  // --- Handlers ---

  const handleAddClick = () => {
    setSelectedStudent(null); // Ensure no data is pre-filled
    setIsFormModalOpen(true);
  };

  const handleEditClick = (student: any) => {
    setSelectedStudent(student);
    setIsFormModalOpen(true);
  };

  const handleDeleteClick = (student: any) => {
    setSelectedStudent(student);
    setIsDeleteModalOpen(true);
  };

  const handleSaveStudent = (data: any) => {
    // Here you would call your API to save/update
    console.log("Saving data:", data);
    // Refresh logic here...
    setIsFormModalOpen(false);
  };

  const handleConfirmDelete = () => {
    // Here you would call your API to delete
    console.log("Deleting ID:", selectedStudent?.id);
    setIsDeleteModalOpen(false);
    setSelectedStudent(null);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4 mb-6">
        
        {/* Header & Add Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Students</h2>
          <button
            onClick={handleAddClick}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-sm transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            Add Student
          </button>
        </div>

        {/* Search Filter */}
        <div className="bg-white dark:bg-[#1a202c] p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="relative max-w-sm">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">
              search
            </span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search students..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-text-secondary-light dark:text-text-secondary-dark"
            />
          </div>
        </div>

      </div>

      {/* Table - Passing filtered data and handlers */}
      <StudentsTable 
        students={filteredStudents} 
        onEdit={handleEditClick}
        onDelete={handleDeleteClick}
      />

      {/* Add/Edit Modal */}
      <StudentFormModal
        isOpen={isFormModalOpen} 
        onClose={() => setIsFormModalOpen(false)}
        initialData={selectedStudent}
        onSave={handleSaveStudent}
      />

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal 
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        studentName={selectedStudent?.nameEnglish}
      />
    </DashboardLayout>
  );
}