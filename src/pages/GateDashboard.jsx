import Layout from "../components/Layout";
import GateCard from "../components/GateCard";
import { useEffect, useState } from "react";

export default function GateDashboard({ onLogout }) {
  const initialGates = [
    {
      id: 1,
      plate: "DEF-456",
      type: "Motorcycle",
      confidence: 83,
      status: "pending",
      time: new Date().toLocaleTimeString(),
    },
    {
      id: 2,
      plate: "PQR-147",
      type: "Motorcycle",
      confidence: 70,
      status: "flagged",
      time: new Date().toLocaleTimeString(),
    },
    {
      id: 3,
      plate: "MNO-987",
      type: "Motorcycle",
      confidence: 89,
      status: "verified",
      time: new Date().toLocaleTimeString(),
    },
    { id: 4, time: new Date().toLocaleTimeString() },
    { id: 5, time: new Date().toLocaleTimeString() },
    { id: 6, time: new Date().toLocaleTimeString() },
  ];

  const [gates, setGates] = useState(initialGates);

  useEffect(() => {
    const interval = setInterval(() => {
      setGates((prev) =>
        prev.map((gate) => ({
          ...gate,
          time: new Date().toLocaleTimeString(),
        }))
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const [selectedGate, setSelectedGate] = useState(null);
  const tabGates = [1, 2, 3, 4, 5, 6];
  const visibleGates = selectedGate
    ? gates.filter((g) => g.id === selectedGate)
    : gates;

  return (
    <Layout onLogout={onLogout}>
      <div className="flex items-center justify-between pt-2 pb-2">
        <section>
          <h2 className="text-2xl font-bold text-gray-900">Gate Dashboard</h2>
          <p className="mt-1 text-sm text-gray-500">
            Live number plate identification and monitoring
          </p>
        </section>
        {/* Tab bar */}
        <div className="flex gap-2">
          {tabGates.map((id) => (
            <button
              key={id}
              className={`px-4 py-1 text-sm font-medium rounded transition-colors focus:outline-none ${
                selectedGate === id
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedGate(id)}
            >
              Gate {id}
            </button>
          ))}
          <button
            className={`px-4 py-1 text-sm font-medium rounded transition-colors focus:outline-none ${
              selectedGate === null
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-900 hover:bg-gray-200"
            }`}
            onClick={() => setSelectedGate(null)}
          >
            All Gates
          </button>
        </div>
      </div>
      <div className="pb-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {visibleGates.map((gate) => (
            <GateCard
              key={gate.id}
              gate={gate}
              isLive={gate.plate !== undefined}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
