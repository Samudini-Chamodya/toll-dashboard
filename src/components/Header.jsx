import { Icon } from "@iconify/react";

export default function Header({
  showOpenSidebarButton,
  onOpenSidebar,
  onLogout,
}) {
  return (
    <header className="flex items-center justify-between px-6 py-4 text-gray-800 bg-white border-b">
      <div className="flex items-center gap-2">
        {showOpenSidebarButton && (
          <button
            className="p-2 rounded hover:bg-gray-100"
            onClick={onOpenSidebar}
            aria-label="Open sidebar"
          >
            <Icon icon="mdi:menu" className="w-6 h-6" />
          </button>
        )}
        <input
          type="text"
          placeholder="Search vehicles, transactions..."
          className="px-4 py-2 text-sm border rounded-lg w-72"
        />
      </div>

      <div className="flex items-center gap-4 text-sm">
        <Icon icon="mdi:bell-outline" className="w-6 h-6 text-gray-700" />

        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full">
            <Icon icon="mdi:account" className="w-6 h-6 text-black" />
          </span>
          <span className="font-medium text-gray-700">Admin User</span>
        </div>

        <button
          onClick={onLogout}
          className="flex items-center gap-1 bg-transparent border-none outline-none group"
          aria-label="Logout"
        >
          <Icon
            icon="mdi:logout"
            className="w-6 h-6 text-gray-700 transition-colors group-hover:text-blue-600"
          />
          <span className="font-medium text-gray-700 transition-colors group-hover:text-blue-600">
            Logout
          </span>
        </button>
      </div>
    </header>
  );
}
