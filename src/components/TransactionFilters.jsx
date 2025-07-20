export default function TransactionFilters({
  startDate,
  endDate,
  onStartDate,
  onEndDate,
  onFilter,
}) {
  return (
    <div className="flex items-center gap-2 p-4 bg-white border rounded">
      <input
        type="date"
        className="p-2 text-sm text-gray-700 border rounded"
        value={startDate}
        onChange={(e) => onStartDate(e.target.value)}
      />
      <input
        type="date"
        className="p-2 text-sm text-gray-700 border rounded"
        value={endDate}
        onChange={(e) => onEndDate(e.target.value)}
      />
      <button
        className="px-4 py-1 text-sm font-medium bg-gray-200 rounded hover:bg-gray-300"
        onClick={() => onFilter(false)}
      >
        Filter
      </button>
      <button
        className="px-4 py-1 text-sm font-medium bg-gray-200 rounded hover:bg-gray-300"
        onClick={() => {
          onStartDate("");
          onEndDate("");
          onFilter(true);
        }}
      >
        Clear
      </button>
      <button className="text-sm font-medium text-gray-600 hover:text-gray-800">
        More Filters
      </button>
    </div>
  );
}
