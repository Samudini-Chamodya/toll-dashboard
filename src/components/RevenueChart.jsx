import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

export default function RevenueChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [12000, 18000, 15000, 21000, 19000, 25000],
        borderColor: "#3B82F6",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="p-4 bg-white border rounded-lg shadow-sm">
      <p className="mb-2 font-semibold">Revenue Trend</p>
      <Line data={data} />
    </div>
  );
}
