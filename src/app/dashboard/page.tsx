import DashboardLayout from "@/components/layouts/DashBoardLayout";


export default function DashboardPage() {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>

      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-white p-4 rounded shadow-sm h-24" />
        ))}
      </div>
    </DashboardLayout>
  )
}
