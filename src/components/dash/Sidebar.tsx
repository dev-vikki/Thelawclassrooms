"use client";
import Link from "next/link";

import { useRouter, usePathname } from "next/navigation";
import { CalendarDays, Book, FileText, Layers } from "lucide-react";

const navItems = [
  { label: "Dashboard", path: "/dashboard", icon: CalendarDays },
  { label: "Subject wise test", path: "/dashboard/subjects", icon: Book },
  { label: "Notes", path: "/dashboard/notes", icon: FileText },
  {
    label: "State PYQ'S",
    path: "/dashboard/state-pyqs",
    icon: Layers,
  },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gradient-to-b from-yellow-900 to-black text-white min-h-screen p-6 hidden md:block">
      <Link href="/">
        <h1 className=" font-extrabold mb-10 tracking-wide">
          THE LAW CLASSROOM
        </h1>
      </Link>

      <nav className="flex flex-col gap-2">
        {navItems.map(({ label, path, icon: Icon }) => {
          const isActive = pathname === path;

          return (
            <button
              key={path}
              onClick={() => router.push(path)}
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors duration-200 text-sm font-medium
                ${isActive ? "bg-black text-yellow-400" : "hover:bg-gray-800"}
              `}
            >
              <Icon className="w-5 h-5" />
              {label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
