"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar-menu";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        {/* Top bar */}
        <header className="flex items-center justify-between bg-gray-900 border-b border-gray-800 px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded hover:bg-gray-800"
            >
              {/* Hamburger Icon */}
              <div className="space-y-1">
                <span className="block w-5 h-0.5 bg-white"></span>
                <span className="block w-5 h-0.5 bg-white"></span>
                <span className="block w-5 h-0.5 bg-white"></span>
              </div>
            </button>
            <h1 className="text-xl font-bold">🚀 Task Manager</h1>
          </div>
        </header>

        {/* Layout with collapsible sidebar + content */}
        <div className="flex">
          <Sidebar isCollapsed={isCollapsed} />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
