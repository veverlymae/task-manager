"use client";

import { useTheme, useLanguage } from "../providers/providers";

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">⚙️ Settings</h1>

      {/* Theme */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Appearance</h2>
        <button
          onClick={toggleTheme}
          className="w-full p-3 rounded bg-gray-800 hover:bg-gray-700 text-left"
        >
          Theme: {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </section>

      {/* Language */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Language</h2>
        <select
          value={language}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(e) => changeLanguage(e.target.value as any)}
          className="w-full p-3 rounded bg-gray-800 text-white"
        >
          <option value="en">🇺🇸 English</option>
          <option value="ceb">🇵🇭 Cebuano</option>
          <option value="tl">🇵🇭 Tagalog</option>
        </select>
      </section>

      {/* About */}
      <section>
        <h2 className="text-lg font-semibold mb-2">About</h2>
        <div className="space-y-2">
          <p className="bg-gray-800 p-3 rounded">App Version 1.0.0</p>
          <p className="bg-gray-800 p-3 rounded">Privacy Policy</p>
        </div>
      </section>
    </div>
  );
}
