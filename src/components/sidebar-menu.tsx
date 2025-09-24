"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListTodo, Settings, User } from "lucide-react";

type Props = {
  isCollapsed: boolean;
};

export default function Sidebar({ isCollapsed }: Props) {
  const pathname = usePathname();
  const menus = [
    { name: "Tasks", path: "/task", icon: <ListTodo size={18} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={18} /> },
    { name: "Profile", path: "/profile", icon: <User size={18} /> },
  ];

  return (
    <aside
      className={`${
        isCollapsed ? "w-20" : "w-52"
      } bg-black min-h-screen p-4 border-r border-gray-800 transition-all duration-300`}
    >
      <ul className="space-y-2">
        {menus.map((menu) => (
          <li key={menu.path}>
            <Link
              href={menu.path}
              className={`flex items-center gap-3 px-3 py-2 rounded text-white transition-colors ${
                pathname === menu.path
                  ? "bg-gray-800"
                  : "hover:bg-gray-700"
              }`}
            >
              {menu.icon}
              {!isCollapsed && <span>{menu.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
