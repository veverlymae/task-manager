/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Theme = "light" | "dark";
type Language = "en" | "ceb" | "tl";

const ThemeContext = createContext<any>(null);
const LanguageContext = createContext<any>(null);

// ✅ Theme Provider
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    document.documentElement.classList.toggle("dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ✅ Language Provider
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const changeLanguage = (lang: Language) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}


export default function RightContent({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme(); // e.g. "dark" | "light" | "blue"

  return (
    <main
      className={`flex-1 p-6 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-950 text-white"
          : theme === "light"
          ? "bg-white text-black"
          : "bg-blue-900 text-white"
      }`}
    >
      {children}
    </main>
  );
}

// ✅ Hooks for easy access
export const useTheme = () => useContext(ThemeContext);
export const useLanguage = () => useContext(LanguageContext);
