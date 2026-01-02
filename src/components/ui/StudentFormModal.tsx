"use client";

import { useState, useEffect } from "react";

// Define interface based on your mock data structure
interface StudentData {
  id?: string;
  nameEnglish: string;
  nameArabic: string;
  className: string;
  section: string;
  admissionNumber?: string;
}

interface StudentFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: StudentData) => void;
  initialData?: StudentData | null; // If present, we are editing
}

export default function StudentFormModal({
  isOpen,
  onClose,
  initialData,
  onSave,
}: StudentFormModalProps) {
  // Form State
  const [formData, setFormData] = useState<StudentData>({
    nameEnglish: "",
    nameArabic: "",
    className: "",
    section: "",
    admissionNumber: "",
  });

  // Load initial data if editing
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      // Reset if adding new
      setFormData({
        nameEnglish: "",
        nameArabic: "",
        className: "",
        section: "",
        admissionNumber: "",
      });
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity" onClick={onClose}></div>

      <div className="relative w-full max-w-3xl bg-white dark:bg-[#1a202c] rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1a202c]">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {initialData ? "Edit Student" : "Add New Student"}
            </h2>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-0.5">
              {initialData ? "Update the student's details below." : "Enter the student's personal and academic information."}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-background-light dark:hover:bg-background-dark/50 text-text-secondary-light dark:text-text-secondary-dark transition-colors cursor-pointer flex items-center justify-center"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Scrollable Form Area */}
        <div className="overflow-y-auto p-6 md:p-8">
          <form id="student-form" onSubmit={handleSubmit} className="flex flex-col gap-8">
            
            {/* Personal Info */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 pb-2 border-b border-border-light dark:border-border-dark/50">
                <span className="material-symbols-outlined text-blue-600 text-[20px]">person</span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark">Personal Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-main-light dark:text-gray-300">English Name <span className="text-red-500">*</span></label>
                  <input
                    value={formData.nameEnglish}
                    onChange={(e) => setFormData({...formData, nameEnglish: e.target.value})}
                    className="w-full h-11 px-4 rounded-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-text-main-light dark:text-white placeholder:text-text-secondary-light/70 text-base"
                    placeholder="e.g. John Doe"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                        className="text-sm font-medium text-text-main-light dark:text-gray-300 flex justify-end"
                        htmlFor="arabic-name"
                        >الاسم بالعربية
                        <span className="text-red-500 mr-1">*</span></label>
                  <input
                    value={formData.nameArabic}
                    onChange={(e) => setFormData({...formData, nameArabic: e.target.value})}
                    dir="rtl"
                    className="w-full h-11 px-4 rounded-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-text-main-light dark:text-white placeholder:text-text-secondary-light/70 text-base"
                    placeholder="مثال: محمد علي"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Academic Info */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 pb-2 border-b border-border-light dark:border-border-dark/50">
                <span className="material-symbols-outlined text-blue-600 text-[20px]">school</span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark">Academic Details</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-main-light dark:text-gray-300">Admission Number</label>
                  <div className="relative group">
                    <span
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark group-focus-within:text-primary transition-colors material-symbols-outlined text-[20px]">badge</span>
                  <input
                    value={formData.admissionNumber || ''}
                    onChange={(e) => setFormData({...formData, admissionNumber: e.target.value})}
                    className="w-full h-11 pl-10 pr-4 rounded-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-text-main-light dark:text-white placeholder:text-text-secondary-light/70 text-base font-mono"
                    placeholder="2024-0001"
                  />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-main-light dark:text-gray-300">Class <span className="text-red-500">*</span></label>
                  <div className="relative">
                  <select
                    value={formData.className}
                    onChange={(e) => setFormData({...formData, className: e.target.value})}
                    className="w-full h-11 px-4 pr-10 rounded-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-text-main-light dark:text-white text-base appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select Class</option>
                    <option value="Grade 1">Grade 1</option>
                    <option value="Grade 2">Grade 2</option>
                    <option value="Grade 3">Grade 3</option>
                    <option value="Grade 4">Grade 4</option>
                    <option value="Grade 5">Grade 5</option>
                    <option value="Grade 6">Grade 6</option>
                  </select>
                  <span
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark pointer-events-none material-symbols-outlined"
                          >expand_more</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-main-light dark:text-gray-300">Section <span className="text-red-500">*</span></label>
                  <div className="relative">
                  <select
                    value={formData.section}
                    onChange={(e) => setFormData({...formData, section: e.target.value})}
                    className="w-full h-11 px-4 pr-10 rounded-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-text-main-light dark:text-white text-base appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select Section</option>
                    <option value="A">Section A</option>
                    <option value="B">Section B</option>
                    <option value="C">Section C</option>
                    <option value="D">Section D</option>
                  </select>

                  <span
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark pointer-events-none material-symbols-outlined"
                          >expand_more</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-background-light dark:bg-background-dark/50 border-t border-border-light dark:border-border-dark flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            type="button"
            className="px-5 py-2.5 rounded-lg border border-border-light dark:border-border-dark text-text-main-light dark:text-white bg-surface-light dark:bg-surface-dark hover:bg-background-light dark:hover:bg-background-dark/50 font-medium transition-colors focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="student-form"
            className="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-white font-medium shadow-md hover:shadow-lg transition-all focus:ring-2 focus:ring-primary/40 flex items-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">save</span>
            {initialData ? "Update Student" : "Save Student"}
          </button>
        </div>
      </div>
    </div>
  );
}