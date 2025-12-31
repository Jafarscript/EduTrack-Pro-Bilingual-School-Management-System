"use client"

export default function AddStudentModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <div className="bg-white w-96 p-6 rounded">
        <h3 className="text-lg font-semibold mb-4">Add Student</h3>

        <form className="space-y-3">
          <input placeholder="Arabic Name" className="w-full border p-2 rounded" />
          <input placeholder="English Name" className="w-full border p-2 rounded" />
          <input placeholder="Class" className="w-full border p-2 rounded" />
          <input placeholder="Section" className="w-full border p-2 rounded" />

          <div className="flex justify-end gap-2 mt-4">
            <button type="button" className="px-3 py-1 border rounded" onClick={onClose}>
              Cancel
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
