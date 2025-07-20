import { useState } from "react";
import Layout from "../components/Layout";
import TransactionToolbar from "../components/TransactionToolbar";
import TransactionFilters from "../components/TransactionFilters";
import TransactionTable from "../components/TransactionTable";

const transactionData = [
  {
    id: "TX001",
    plate: "ABC-123",
    datetime: "2024-01-15 10:30:45",
    amount: 5.5,
    booth: "Booth A1",
    status: "Completed",
    payment: "Credit Card",
  },
  {
    id: "TX002",
    plate: "XYZ-789",
    datetime: "2024-01-15 10:28:12",
    amount: 8.0,
    booth: "Booth B2",
    status: "Completed",
    payment: "Cash",
  },
  {
    id: "TX003",
    plate: "DEF-456",
    datetime: "2024-01-15 10:25:33",
    amount: 5.5,
    booth: "Booth A1",
    status: "Failed",
    payment: "Credit Card",
  },
  {
    id: "TX004",
    plate: "GHI-321",
    datetime: "2024-01-15 10:22:18",
    amount: 12.0,
    booth: "Booth C3",
    status: "Completed",
    payment: "Electronic Toll",
  },
  {
    id: "TX005",
    plate: "JKL-654",
    datetime: "2024-01-15 10:20:07",
    amount: 6.75,
    booth: "Booth A2",
    status: "Pending",
    payment: "Credit Card",
  },
];

export default function Transactions() {
  const [transactions] = useState(transactionData);
  const [filtered, setFiltered] = useState(transactionData);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Export CSV
  const handleExport = () => {
    const csvRows = [
      [
        "Transaction ID",
        "License Plate",
        "Date & Time",
        "Amount",
        "Booth",
        "Status",
        "Payment",
      ],
      ...filtered.map((tx) => [
        tx.id,
        tx.plate,
        tx.datetime,
        tx.amount,
        tx.booth,
        tx.status,
        tx.payment,
      ]),
    ];
    const csvContent = csvRows
      .map((row) => row.map(String).join(","))
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  // Filter by date
  const handleFilter = (clear = false) => {
    if (clear) {
      setFiltered(transactions);
      return;
    }
    setFiltered(
      transactions.filter((tx) => {
        const txDate = tx.datetime.split(" ")[0];
        if (startDate && txDate < startDate) return false;
        if (endDate && txDate > endDate) return false;
        return true;
      })
    );
  };

  return (
    <Layout>
      <div className="flex items-center justify-between">
        <div>
          <TransactionToolbar transactions={filtered} />
        </div>
        <button
          className="px-4 py-2 font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
          onClick={handleExport}
        >
          Export Data
        </button>
      </div>
      <TransactionFilters
        startDate={startDate}
        endDate={endDate}
        onStartDate={setStartDate}
        onEndDate={setEndDate}
        onFilter={handleFilter}
      />
      <TransactionTable transactions={filtered} />
    </Layout>
  );
}
