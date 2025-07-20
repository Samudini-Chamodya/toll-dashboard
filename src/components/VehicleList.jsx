import { Icon } from "@iconify/react";
export default function VehicleList({ vehicles, onEdit, onView }) {
  return (
    <section>
      <h3 className="mb-4 text-lg font-medium">
        Registered Vehicles ({vehicles.length})
      </h3>

      <div className="space-y-3">
        {vehicles.map((v) => (
          <div
            key={v.plate}
            className="flex items-center justify-between p-4 bg-white border rounded-lg shadow-sm"
          >
            {/* Vehicle Details */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                <Icon
                  icon="mdi:car"
                  className="text-blue-600"
                  width="24"
                  height="24"
                />
              </div>
              <div>
                <div className="text-lg font-semibold">{v.plate}</div>
                <div className="text-sm text-gray-500">
                  {v.type}
                  <span className="mx-1 text-gray-300">•</span>
                  {v.owner}
                </div>
              </div>
            </div>

            {/* Status and Stats */}
            <div className="flex items-center gap-6">
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  v.status === "Flagged"
                    ? "bg-red-100 text-red-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {v.status}
              </span>
              <div className="text-right">
                <div className="text-base font-semibold">
                  ${v.amount.toFixed(2)}
                </div>
                <div className="text-xs text-gray-500">{v.trips} trips</div>
              </div>
              <div className="flex items-center gap-2">
                <Icon
                  icon="mdi:eye-outline"
                  className="text-gray-600 cursor-pointer hover:text-blue-600"
                  width="20"
                  onClick={() => onView && onView(v.plate)}
                  style={{ cursor: "pointer" }}
                />
                <Icon
                  icon="mdi:pencil-outline"
                  className="text-gray-600 cursor-pointer hover:text-blue-600"
                  width="20"
                  onClick={() => onEdit && onEdit(v.plate)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
