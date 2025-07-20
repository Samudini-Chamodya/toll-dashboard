import { Icon } from "@iconify/react";
import Logo from "./Logo";

import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar({ onClose }) {
  const location = useLocation();
  const navigate = useNavigate();
  const menu = [
    { icon: "mdi:home-outline", label: "Overview", path: "/" },
    { icon: "mdi:car", label: "Vehicles", path: "/vehicles" },
    { icon: "mdi:cash-multiple", label: "Transactions", path: "/transactions" },
    {
      icon: "mdi:office-building-outline",
      label: "Toll Booths",
      path: "/toll-booths",
    },
    { icon: "mdi:camera-outline", label: "Gates", path: "/gates" },
    { icon: "mdi:chart-bar", label: "Analytics", path: "/analytics" },
    { icon: "mdi:cog-outline", label: "Settings", path: "/settings" },
  ];

  return (
    <aside className="flex flex-col w-64 min-h-screen bg-white border-r z-50 fixed top-0 left-0 h-full">
      <div className="flex items-center justify-between px-4 py-4 border-b">
        <Logo />
        <button
          className="p-2 rounded hover:bg-gray-100"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <Icon icon="mdi:close" width="22" />
        </button>
      </div>

      <nav className="flex-1 px-2 mt-2 space-y-1">
        {menu.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <div
              key={item.label}
              className={`flex items-center gap-3 p-2 rounded cursor-pointer transition-colors
                ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              onClick={() => navigate(item.path)}
            >
              <Icon icon={item.icon} width="22" />
              <span className="font-medium">{item.label}</span>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
