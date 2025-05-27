"use client";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="ml-4 bg-transparent p-2 transition-colors hover:scale-110 hover:text-yellow-400 focus:outline-none dark:hover:text-yellow-300"
    >
      {theme === "dark" ? (
        <FaSun className="inline text-slate-200 transition-transform duration-200" />
      ) : (
        <FaMoon className="inline text-[#5c7a3a] transition-transform duration-200" />
      )}
    </button>
  );
}
