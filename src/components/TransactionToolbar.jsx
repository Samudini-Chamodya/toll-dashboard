export default function TransactionToolbar({ transactions }) {
  const totalRevenue = transactions.reduce((sum, tx) => sum + tx.amount, 0);
  const pending = transactions.filter((tx) => tx.status === "Pending").length;
  const failed = transactions.filter((tx) => tx.status === "Failed").length;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900">Transaction History</h2>
      <p className="mb-4 text-sm text-gray-500">
        View and manage toll transactions
      </p>

      <div className="grid grid-cols-4 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <p className="text-sm text-gray-500">Total Transactions</p>
          <p className="text-lg font-bold">{transactions.length}</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <p className="text-sm text-gray-500">Total Revenue</p>
          <p className="text-lg font-bold text-green-600">
            ${totalRevenue.toFixed(2)}
          </p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <p className="text-sm text-gray-500">Pending</p>
          <p className="text-lg font-bold text-yellow-500">{pending}</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <p className="text-sm text-gray-500">Failed</p>
          <p className="text-lg font-bold text-red-500">{failed}</p>
        </div>
      </div>
    </div>
  );
}
