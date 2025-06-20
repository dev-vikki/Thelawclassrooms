"use client";

import Link from "next/link";

const AdminSidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col space-y-4">
        <Link href="/admin-dashboard" className="hover:text-gray-300">
          Dashboard
        </Link>
        <Link href="/admin-dashboard/admin-mcqs" className="hover:text-gray-300">
          MCQS
        </Link>
        <Link href="/admin/users" className="hover:text-gray-300">
          Users
        </Link>
        <Link href="/admin/settings" className="hover:text-gray-300">
          Settings
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
