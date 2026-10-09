import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#030817] text-white">
      <Sidebar />

      <main className="min-h-screen lg:ml-64">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;