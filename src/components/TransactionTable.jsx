export default function TransactionTable({ transactions }) {
  const badgeClass = (status) => {
    switch (status) {
      case "Completed":
        return "";
      case "Pending":
        return "";
      case "Failed":
        return "";
      default:
        return "";
    }
  };

  return (
    <div className="p-2 bg-[#F9FBFC] shadow rounded-xl md:p-6">
      <h3
        className="px-2 pt-2 pb-4 text-xl font-semibold text-[#222]"
        style={{ fontFamily: "Inter, Arial, sans-serif", fontWeight: 500 }}
      >
        Recent Transactions
      </h3>
      <div className="overflow-x-auto">
        <table
          className="w-full border-separate border-spacing-0"
          style={{
            fontFamily: "Inter, Arial, sans-serif",
            fontSize: 15,
            fontWeight: 400,
          }}
        >
          <thead>
            <tr
              className="text-left border-b"
              style={{
                color: "#8A94A6",
                fontWeight: 400,
                fontFamily: "Inter, Arial, sans-serif",
                fontSize: 13,
              }}
            >
              <th
                className="px-4 pb-3 font-medium bg-[#F6F8FA]"
                style={{
                  fontWeight: 400,
                  fontFamily: "Inter, Arial, sans-serif",
                  fontSize: 13,
                }}
              >
                Transaction ID
              </th>
              <th
                className="px-4 pb-3 font-medium bg-[#F6F8FA]"
                style={{
                  fontWeight: 400,
                  fontFamily: "Inter, Arial, sans-serif",
                  fontSize: 13,
                }}
              >
                License Plate
              </th>
              <th
                className="px-4 pb-3 font-medium bg-[#F6F8FA]"
                style={{
                  fontWeight: 400,
                  fontFamily: "Inter, Arial, sans-serif",
                  fontSize: 13,
                }}
              >
                Date & Time
              </th>
              <th
                className="px-4 pb-3 font-medium bg-[#F6F8FA]"
                style={{
                  fontWeight: 400,
                  fontFamily: "Inter, Arial, sans-serif",
                  fontSize: 13,
                }}
              >
                Amount
              </th>
              <th
                className="px-4 pb-3 font-medium bg-[#F6F8FA]"
                style={{
                  fontWeight: 400,
                  fontFamily: "Inter, Arial, sans-serif",
                  fontSize: 13,
                }}
              >
                Booth
              </th>
              <th
                className="px-4 pb-3 font-medium bg-[#F6F8FA]"
                style={{
                  fontWeight: 400,
                  fontFamily: "Inter, Arial, sans-serif",
                  fontSize: 13,
                }}
              >
                Status
              </th>
              <th
                className="px-4 pb-3 font-medium bg-[#F6F8FA]"
                style={{
                  fontWeight: 400,
                  fontFamily: "Inter, Arial, sans-serif",
                  fontSize: 13,
                }}
              >
                Payment
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, idx) => (
              <tr
                key={tx.id}
                className={`border-b last:border-b-0 bg-white`}
                style={{
                  fontFamily: "Inter, Arial, sans-serif",
                  color: "#222",
                  fontWeight: 400,
                  fontSize: 13,
                }}
              >
                <td
                  className="py-3 px-4 font-mono text-[15px] flex items-center gap-2"
                  style={{
                    fontWeight: 400,
                    color: "#222",
                    fontFamily: "Menlo, Monaco, Consolas, monospace",
                    fontSize: 13,
                  }}
                >
                  <span className="inline-block w-5 h-5 mr-2 text-xs font-bold text-center bg-[#E9ECEF] rounded">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                      <rect
                        width="18"
                        height="18"
                        x="3"
                        y="3"
                        rx="4"
                        fill="#222"
                      />
                      <text
                        x="12"
                        y="16"
                        textAnchor="middle"
                        fontSize="12"
                        fill="#fff"
                        fontFamily="monospace"
                      >
                        $
                      </text>
                    </svg>
                  </span>
                  {tx.id}
                </td>
                <td
                  className="px-4 py-3 text-base font-semibold"
                  style={{
                    fontWeight: 400,
                    color: "#222",
                    fontFamily: "Inter, Arial, sans-serif",
                    fontSize: 13,
                  }}
                >
                  {tx.plate}
                </td>
                <td
                  className="px-4 py-3"
                  style={{
                    color: "#8A94A6",
                    fontFamily: "Inter, Arial, sans-serif",
                    fontWeight: 300,
                    fontSize: 13,
                  }}
                >
                  {tx.datetime}
                </td>
                <td
                  className="py-3 px-4 font-semibold text-[15px]"
                  style={{
                    fontWeight: 400,
                    color: "#222",
                    fontFamily: "Inter, Arial, sans-serif",
                    fontSize: 13,
                  }}
                >
                  ${tx.amount.toFixed(2)}
                </td>
                <td
                  className="px-4 py-3"
                  style={{
                    color: "#8A94A6",
                    fontFamily: "Inter, Arial, sans-serif",
                    fontWeight: 300,
                    fontSize: 13,
                  }}
                >
                  {tx.booth}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${badgeClass(
                      tx.status
                    )}`}
                    style={
                      tx.status === "Completed"
                        ? {
                            background: "#E6F9ED",
                            color: "#22B573",
                            fontWeight: 400,
                            fontFamily: "Inter, Arial, sans-serif",
                            fontSize: 13,
                          }
                        : tx.status === "Pending"
                        ? {
                            background: "#FFF7E6",
                            color: "#F5A623",
                            fontWeight: 400,
                            fontFamily: "Inter, Arial, sans-serif",
                            fontSize: 13,
                          }
                        : tx.status === "Failed"
                        ? {
                            background: "#FFE6E6",
                            color: "#F5222D",
                            fontWeight: 400,
                            fontFamily: "Inter, Arial, sans-serif",
                            fontSize: 13,
                          }
                        : {
                            background: "#F6F8FA",
                            color: "#8A94A6",
                            fontWeight: 400,
                            fontFamily: "Inter, Arial, sans-serif",
                            fontSize: 13,
                          }
                    }
                  >
                    {tx.status}
                  </span>
                </td>
                <td
                  className="px-4 py-3"
                  style={{
                    color: "#8A94A6",
                    fontFamily: "Inter, Arial, sans-serif",
                    fontWeight: 300,
                    fontSize: 13,
                  }}
                >
                  {tx.payment}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
