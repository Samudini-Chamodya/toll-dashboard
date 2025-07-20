export default function VehicleToolbar({ onAdd }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Vehicle Management</h2>
        <p className="text-sm text-gray-500">
          Track and manage registered vehicles
        </p>
      </div>
      <button
        className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        onClick={onAdd}
      >
        Add Vehicle
      </button>
    </div>
  );
}
