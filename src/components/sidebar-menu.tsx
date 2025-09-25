"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, CheckSquare, Settings } from "lucide-react";

export default function Sidebar({ isCollapsed }: { isCollapsed: boolean }) {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Tasks", path: "/task", icon: CheckSquare },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <aside
      className={`h-screen bg-black border-r border-gray-800 transition-all duration-300 
        ${isCollapsed ? "w-16" : "w-56"}`}
    >
      <nav className="flex flex-col gap-1 p-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 rounded px-3 py-2 text-sm transition-colors
                ${isActive ? "bg-gray-800" : "hover:bg-gray-700"}
              `}
            >
              <Icon className="h-5 w-5" />
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
