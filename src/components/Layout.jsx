import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ children, onLogout }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div>
      {sidebarOpen && <Sidebar onClose={() => setSidebarOpen(false)} />}
      <div
        className={`min-h-screen bg-gray-50 transition-all duration-300 flex flex-col ${
          sidebarOpen ? "ml-64" : ""
        }`}
      >
        <div className="sticky top-0 z-50 bg-white border-b">
          <Header
            showOpenSidebarButton={!sidebarOpen}
            onOpenSidebar={() => setSidebarOpen(true)}
            onLogout={onLogout}
          />
        </div>
        <main className="flex-1 p-6 space-y-6">{children}</main>
      </div>
    </div>
  );
}
