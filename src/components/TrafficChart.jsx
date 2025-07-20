import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function TrafficChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Traffic",
        data: [1200, 1900, 1400, 2100, 1800, 2500],
        backgroundColor: "#3B82F6",
      },
    ],
  };

  return (
    <div className="p-4 bg-white border rounded-lg shadow-sm">
      <p className="mb-2 font-semibold">Vehicle Traffic</p>
      <Bar data={data} />
    </div>
  );
}
