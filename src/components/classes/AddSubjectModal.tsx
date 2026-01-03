"use client"

export default function AddSubjectModal({
  onClose
}: {
  onClose: () => void
}) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-96 p-6 rounded">
        <h3 className="font-semibold mb-4">Add Subject</h3>

        <div className="space-y-3">
          <input
            placeholder="English Name"
            className="w-full border p-2 rounded"
          />
          <input
            placeholder="Arabic Name"
            className="w-full border p-2 rounded"
            dir="rtl"
          />
          <input
            placeholder="Subject Code"
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={onClose}
            className="px-3 py-1 border rounded"
          >
            Cancel
          </button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
