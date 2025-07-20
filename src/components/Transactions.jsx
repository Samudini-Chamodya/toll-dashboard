import { Icon } from "@iconify/react";

export default function Transactions() {
  const data = [
    {
      plate: "ABC-123",
      booth: "Booth A1",
      time: "10:30 AM",
      amount: "$5.50",
      code: "TX001",
    },
    {
      plate: "XYZ-789",
      booth: "Booth B2",
      time: "10:28 AM",
      amount: "$8.00",
      code: "TX002",
    },
  ];

  return (
    <div className="p-4 bg-white border rounded-lg shadow-sm">
      <p className="mb-4 font-semibold">Recent Transactions</p>
      {data.map((item, i) => (
        <div
          key={i}
          className="flex items-center justify-between px-2 py-2 rounded hover:bg-gray-50"
        >
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gray-100 rounded-full">
              <Icon icon="mdi:car" className="text-blue-600" />
            </div>
            <div>
              <p className="font-medium">{item.plate}</p>
              <p className="text-xs text-gray-500">
                {item.booth} • {item.time}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-medium">{item.amount}</p>
            <p className="text-xs text-gray-400">{item.code}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
