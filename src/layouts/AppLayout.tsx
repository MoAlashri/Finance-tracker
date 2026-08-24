import { useState } from "react";
import { Outlet } from "react-router";

import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

export default function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] =
    useState(false);

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
      />

      <div className="lg:pl-64">
        <Header
          onMenuClick={handleOpenSidebar}
        />

        <main className="p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}