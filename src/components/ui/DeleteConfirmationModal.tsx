"use client";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  studentName?: string;
}

export default function DeleteConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  studentName,
}: DeleteConfirmationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-md bg-white dark:bg-[#1a202c] rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 transform transition-all scale-100 opacity-100">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-full">
            <span className="material-symbols-outlined text-red-600 dark:text-red-400 text-3xl">
              warning
            </span>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Delete Student
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Are you sure you want to delete <span className="font-semibold text-slate-700 dark:text-slate-300">{studentName}</span>? 
              This action cannot be undone.
            </p>
          </div>

          <div className="flex gap-3 w-full mt-2">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 px-4 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium shadow-sm transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}