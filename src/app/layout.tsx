"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar-menu";
import "@/styles/globals.css";
import RightContent, { ThemeProvider, LanguageProvider } from "./providers/providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

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
