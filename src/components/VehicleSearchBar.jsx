export default function VehicleSearchBar({
  value,
  onChange,
  onFilter,
  onClear,
}) {
  return (
    <div className="flex items-center gap-2 p-3 border border-green-100 rounded bg-green-50">
      <input
        type="text"
        placeholder="Search by license plate or owner name..."
        className="flex-1 px-3 py-2 text-sm border rounded-md"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        className="px-4 py-1 text-sm font-medium bg-gray-200 rounded hover:bg-gray-300"
        onClick={onFilter}
      >
        Filter
      </button>
      <button
        className="px-4 py-1 text-sm font-medium bg-gray-200 rounded hover:bg-gray-300"
        onClick={onClear}
      >
        Clear
      </button>
    </div>
  );
}
