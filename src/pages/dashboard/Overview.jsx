export default function Overview() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white border rounded shadow-sm">
          <p className="text-gray-500">Course Progress</p>
          <h3 className="text-2xl font-bold">75%</h3>
        </div>
        <div className="p-4 bg-white border rounded shadow-sm">
          <p className="text-gray-500">Points Earned</p>
          <h3 className="text-2xl font-bold">1,250</h3>
        </div>
      </div>
    </div>
  );
}