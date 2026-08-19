import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />

      <div className="lg:pl-64">
        <Header />

        <main className="p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}