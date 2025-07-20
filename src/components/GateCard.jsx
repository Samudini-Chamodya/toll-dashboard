import { Icon } from "@iconify/react";

export default function GateCard({ gate, isLive }) {
  const statusColors = {
    pending: "text-yellow-600",
    flagged: "text-red-600",
    verified: "text-green-600",
  };

  return (
    <div className="flex flex-col gap-3 p-5 bg-white border shadow-sm rounded-xl">
      {/* Top: Gate label and status */}
      <div className="flex items-center justify-between mb-1 text-base font-semibold">
        <span>Gate {gate.id}</span>
        <span
          className={`flex items-center gap-1 ${
            isLive ? "text-green-600" : "text-gray-500"
          }`}
        >
          <span className="w-2 h-2 bg-current rounded-full"></span>
          {isLive ? "Live" : "Offline"}
        </span>
      </div>

      {/* Card image/plate section */}
      <div className="relative flex flex-col items-center justify-center bg-gray-900 rounded-lg h-28">
        <span className="absolute text-xs top-2 left-3 text-white/70">
          {gate.time || "--:--"}
        </span>
        {gate.plate ? (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="px-6 py-2 rounded-lg bg-black/70">
              <p className="text-xl font-bold text-center text-white">
                {gate.plate}
              </p>
              <p className="text-xs text-center text-gray-300">
                {gate.confidence}% Confidence
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <Icon
              icon="mdi:camera-off-outline"
              className="mb-1 text-3xl text-gray-400"
            />
            <span className="text-xs text-gray-400">
              Waiting for vehicle detection...
            </span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 rounded-b-lg" />
      </div>

      {/* Details section */}
      {gate.plate && (
        <div className="grid grid-cols-2 mt-1 gap-y-1 gap-x-2">
          <div className="text-xs text-gray-500">Vehicle Type</div>
          <div className="text-xs font-medium text-gray-900">{gate.type}</div>
          <div className="text-xs text-gray-500">Confidence</div>
          <div className="text-xs font-medium text-gray-900">
            {gate.confidence}%
          </div>
          <div className="text-xs text-gray-500">Detected</div>
          <div className="text-xs font-medium text-gray-900">{gate.time}</div>
          <div className="text-xs text-gray-500">Status</div>
          <div
            className={`flex items-center gap-1 text-xs font-semibold ${
              statusColors[gate.status]
            }`}
          >
            {gate.status === "pending" && <Icon icon="mdi:clock-outline" />}
            {gate.status === "flagged" && (
              <Icon icon="mdi:alert-circle-outline" />
            )}
            {gate.status === "verified" && (
              <Icon icon="mdi:check-circle-outline" />
            )}
            {gate.status}
          </div>
        </div>
      )}
    </div>
  );
}
