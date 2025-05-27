"use client";
import { useLayoutEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const dark = saved === "dark" || (!saved && prefersDark);
    setIsDark(dark);
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="ml-4 bg-transparent p-2 transition-colors hover:scale-110 hover:text-yellow-400 focus:outline-none dark:hover:text-yellow-300"
    >
      {!mounted ? (
        <FaMoon className="inline opacity-0" />
      ) : isDark ? (
        <FaSun className="inline text-slate-200 transition-transform duration-200" />
      ) : (
        <FaMoon className="inline text-[#5c7a3a] transition-transform duration-200" />
      )}
    </button>
  );
}
