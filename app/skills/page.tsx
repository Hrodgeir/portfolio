import { ReactNode } from "react";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiJest,
  SiGit,
  SiFigma,
  SiVercel,
  SiWebpack,
  SiEslint,
  SiDotnet,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaRegCheckCircle } from "react-icons/fa";

const skillIcons: Record<string, ReactNode> = {
  TypeScript: <SiTypescript className="text-sky-400" />,
  JavaScript: <SiJavascript className="text-yellow-300" />,
  HTML: <SiHtml5 className="text-orange-500" />,
  CSS: <SiCss3 className="text-blue-400" />,
  Python: <SiPython className="text-yellow-400" />,
  React: <SiReact className="text-cyan-400" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  Redux: <SiRedux className="text-purple-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-300" />,
  "Node.js": <SiNodedotjs className="text-green-400" />,
  Jest: <SiJest className="text-rose-400" />,
  Git: <SiGit className="text-orange-400" />,
  Figma: <SiFigma className="text-pink-400" />,
  Vercel: <SiVercel className="text-white" />,
  Webpack: <SiWebpack className="text-blue-300" />,
  ESLint: <SiEslint className="text-indigo-400" />,
  "VS Code": <VscVscode className="text-blue-400" />,
  "C#": <SiDotnet className="text-purple-300" />,
};

export default function Skills() {
  const skills = [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "HTML", "CSS", "C#", "Python"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["React", "Next.js", "Redux", "Tailwind CSS", "Node.js", "Jest"],
    },
    {
      category: "Tools",
      items: ["Git", "VS Code", "Figma", "Vercel", "Webpack", "ESLint"],
    },
    {
      category: "Other",
      items: [
        "REST APIs",
        "Agile",
        "CI/CD",
        "Unit Testing",
        "Responsive Design",
      ],
    },
  ];

  return (
    <div className="text-[#23401d] dark:text-slate-400">
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
