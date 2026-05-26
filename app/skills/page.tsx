"use client";
import { ReactNode } from "react";
import { useTheme } from "next-themes";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiJenkins,
  SiGooglecloud,
  SiDocker,
  SiGit,
  SiDotnet,
} from "react-icons/si";
import { FaJava, FaRegCheckCircle } from "react-icons/fa";

const skillIcons: Record<string, ReactNode> = {
  TypeScript: <SiTypescript className="text-sky-400" />,
  JavaScript: <SiJavascript className="text-yellow-300" />,
  Java: <FaJava className="text-orange-400" />,
  "C#": <SiDotnet className="text-purple-300" />,
  Python: <SiPython className="text-yellow-400" />,
  React: <SiReact className="text-cyan-400" />,
  "Node.js": <SiNodedotjs className="text-green-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-300" />,
  Git: <SiGit className="text-orange-400" />,
  Jenkins: <SiJenkins className="text-amber-500" />,
  GCP: <SiGooglecloud className="text-blue-400" />,
  Docker: <SiDocker className="text-sky-500" />,
};

export default function Skills() {
  const { resolvedTheme } = useTheme();
  
  const skills = [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Java", "C#", "Python"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["React", "Node.js", "React Native", "AG Grid", "TanStack", "GWT", "Xamarin", "Tailwind CSS"],
    },
    {
      category: "Tools & Infrastructure",
      items: ["Git", "Jenkins", "GCP", "Docker", "Codex", "SCSS", "ArcGIS"],
    },
    {
      category: "Core Strengths",
      items: [
        "Frontend Architecture",
        "MVC Design Patterns",
        "Technical Leadership",
        "Mentorship",
        "Agile Development",
      ],
    },
  ];

return (
    <div key={resolvedTheme} className="text-[#23401d] dark:text-slate-400">
      <h2 className="mb-6 text-4xl font-bold text-[#3d5a2a] dark:text-slate-200">
        <span className="bold">Skills</span>
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {skills.map(({ category, items }) => (
          <div key={category}>
            <h3 className="mb-3 text-lg font-semibold tracking-wide text-[#5c7a3a] dark:text-slate-100">
              <span className="bold">{category}</span>
            </h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 rounded border border-[#b7c68b] bg-[#35522c] px-3 py-1 text-sm font-medium text-white shadow transition-colors hover:bg-[#4e6a2c] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                >
                  {skillIcons[skill] || (
                    <FaRegCheckCircle className="text-[#b7c68b] dark:text-slate-400" />
                  )}
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}