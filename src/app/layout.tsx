"use client";

import { useEffect, useRef, useState } from "react";
import Sidebar from "@/components/sidebar-menu";
import "@/styles/globals.css";
import RightContent, {
  ThemeProvider,
  LanguageProvider,
} from "./providers/providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <html lang="en" className="dark">
      <body className="text-white">
        <ThemeProvider>
          <LanguageProvider>
            {/* Top bar */}
            <header className="flex items-center justify-between bg-gray-900 border-b border-gray-800 px-4 py-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="p-2 rounded hover:bg-gray-800"
                >
                  {/* Hamburger Icon */}
                  <div className="space-y-1">
                    <span className="block h-0.5 w-5 bg-white"></span>
                    <span className="block h-0.5 w-5 bg-white"></span>
                    <span className="block h-0.5 w-5 bg-white"></span>
                  </div>
                </button>
                <h1 className="text-xl font-bold">🚀 Task Manager</h1>
              </div>
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setOpen(!open)}
                  className="flex items-center gap-2 rounded px-3 py-2 hover:bg-gray-800"
                >
                  <img
                    src="https://i.pravatar.cc/40"
                    alt="User avatar"
                    className="h-8 w-8 rounded-full"
                  />
                  <span className="text-sm font-medium">John Doe</span>
                </button>

                {open && (
                  <div className="absolute right-0 mt-2 w-40 rounded bg-gray-900 shadow-lg border border-gray-700">
                    <a
                      href="/profile"
                      className="block px-4 py-2 text-sm hover:bg-gray-800"
                    >
                      Profile
                    </a>
                    <a
                      href="/settings"
                      className="block px-4 py-2 text-sm hover:bg-gray-800"
                    >
                      Settings
                    </a>
                    <button
                      onClick={() => alert("Logging out…")}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </header>

            {/* Layout: sidebar + content */}
            <div className="flex">
              <Sidebar isCollapsed={isCollapsed} />
              <RightContent>{children}</RightContent>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
