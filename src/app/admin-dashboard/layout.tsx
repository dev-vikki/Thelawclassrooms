import AdminSidebar from "@/components/dash/AdminSidebar";
import { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <main className="flex-1 bg-[#292727] p-6 overflow-auto">{children}</main>
    </div>
  );
};

export default AdminLayout;
