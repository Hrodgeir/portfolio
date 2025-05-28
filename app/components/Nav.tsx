"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();

  const links = [
    { href: "/", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <nav key={resolvedTheme} className="flex flex-col gap-4">
      {links.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className="group flex items-center gap-4"
          >
            <span
              className={`block h-px transition-all duration-200 ${
                isActive
                  ? "w-14 bg-[#35522c] dark:bg-slate-100"
                  : "w-10 bg-[#23401d] group-hover:w-16 group-hover:bg-[#35522c] dark:bg-slate-700 dark:group-hover:bg-slate-100"
              }`}
            />
            <span
              className={`text-sm font-bold tracking-wide uppercase transition-colors duration-200 ${
                isActive
                  ? "text-[#35522c] dark:text-slate-100"
                  : "text-[#35522c99] group-hover:text-[#35522c] dark:text-slate-400 dark:group-hover:text-slate-100"
              }`}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
