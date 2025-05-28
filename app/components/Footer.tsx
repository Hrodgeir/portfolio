"use client";
import { useTheme } from "next-themes";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const { resolvedTheme } = useTheme();

  return (
    <div
      key={resolvedTheme}
      className="mt-auto flex gap-6 pt-8 text-[#35522cbb] dark:text-slate-500"
    >
      <a
        href="https://github.com/Hrodgeir"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-[#23401d] dark:hover:text-slate-200"
        aria-label="GitHub"
      >
        <FaGithub size={36} />
      </a>
      <a
        href="https://www.linkedin.com/in/matt-hodgson-ba06b7b7/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-[#23401d] dark:hover:text-slate-200"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={36} />
      </a>
      <a
        href="mailto:matt.james.hodgson@gmail.com"
        className="transition-colors hover:text-[#23401d] dark:hover:text-slate-200"
        aria-label="Email"
      >
        <MdEmail size={36} />
      </a>
    </div>
  );
}
