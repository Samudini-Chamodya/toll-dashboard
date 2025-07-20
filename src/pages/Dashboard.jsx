import Layout from "../components/Layout";
import StatCard from "../components/StatCard";
import RevenueChart from "../components/RevenueChart";
import TrafficChart from "../components/TrafficChart";
import Transactions from "../components/Transactions";
import { useEffect, useState } from "react";

export default function Dashboard({ onLogout }) {
  const [data] = useState({
    todayRevenue: "8",
    vehicleProcessed: "16",
    activeTollBooths: "8",
    avgTransaction: "8",
  });
  useEffect(() => {
    document.title = "Toll Admin Dashboard";
  }, []);

  return (
    <Layout onLogout={onLogout}>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-900">
            Dashboard Overview
          </h2>
          <p className="text-sm text-gray-500">
            Monitor your toll collection performance
          </p>
        </section>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <StatCard
            title="Today's Revenue"
            value={`$${data.todayRevenue}`}
            note="from last month"
            icon="mdi:currency-usd"
          />
          <StatCard
            title="Vehicles Processed"
            value={`$${data.vehicleProcessed}`}
            note="from last month"
            icon="mdi:car"
          />
          <StatCard
            title="Active Toll Booths"
            value={`$${data.activeTollBooths}`}
            note="from last month"
            icon="mdi:gate"
          />
          <StatCard
            title="Average Transaction"
            value={`$${data.avgTransaction}`}
            note="from last month"
            icon="mdi:trending-up"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <RevenueChart />
          <TrafficChart />
        </div>
        <Transactions />
      </div>
    </Layout>
  );
}
