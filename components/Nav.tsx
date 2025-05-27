"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <nav className="flex flex-col gap-4">
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
                  ? "w-14 bg-slate-100"
                  : "w-10 bg-slate-600 group-hover:w-16 group-hover:bg-slate-100"
              } `}
            />
            <span
              className={`text-xs font-bold tracking-wide uppercase transition-colors duration-200 ${
                isActive
                  ? "text-slate-100"
                  : "text-slate-400 group-hover:text-slate-100"
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
