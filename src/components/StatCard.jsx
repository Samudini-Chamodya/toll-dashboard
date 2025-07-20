import { Icon } from "@iconify/react";

export default function StatCard({ title, value, note, icon }) {
  return (
    <div className="flex flex-col gap-1 p-4 bg-white border rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{title}</p>
        <Icon icon={icon} className="text-gray-600" />
      </div>
      <p className="text-xl font-semibold">{value}</p>
      <p className="text-xs text-gray-400">{note}</p>
    </div>
  );
}
