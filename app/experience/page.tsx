"use client";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Experience() {
  const { resolvedTheme } = useTheme();
  const [hovered, setHovered] = useState<number | null>(null);

  const experiences = [
    {
      company: "Everbridge - xMatters Product Development",
      role: "Sr. Software Engineer I",
      period: "April 2022 - Present",
      location: "Remote",
      description: [
        "Led modernization of application authentication infrastructure to enhance product security and long-term framework maintainability.",
        "Facilitated bi-weekly frontend engineering meetings focused on component architecture, styling standards, shared tooling, and UI consistency.",
        "Refactored shared React component libraries and frontend infrastructure while developing Jenkins CI/CD pipelines for containerized GCP environments.",
        "Collaborated within agile teams to integrate React front-ends with backend architectures, utilizing MVC design patterns to cleanly separate client UI layers from data models.",
      ],
      skills: ["React", "TypeScript", "JavaScript", "Node.js", "Jenkins", "GCP", "Docker", "MVC Architecture"],
    },
    {
      company: "Everbridge - xMatters Product Development",
      role: "Software Engineer II",
      period: "March 2021 - April 2022",
      location: "Remote",
      description: [
        "Developed key features for the xMatters web application used for enterprise digital operations, alerting frameworks, and incident management workflows.",
        "Built modern, highly responsive UI components using React, JavaScript, Git version control, and SCSS frameworks.",
        "Presented weekly live feature demonstrations to cross-functional stakeholders to secure alignment and fast iteration loops.",
      ],
      skills: ["React", "JavaScript", "Git", "SCSS"],
    },
    {
      company: "VertiGIS (Latitude Geographics) - Professional Services",
      role: "Software Developer",
      period: "April 2018 - March 2021",
      location: "Victoria, BC",
      description: [
        "Delivered 20+ custom enterprise web mapping applications using Git through full project lifecycles, spanning design, iterative development, and final software deployment.",
        "Served as technical lead on 4 client-facing software initiatives, ensuring on-time and within-budget completions.",
        "Built 4 cross-platform mobile mapping applications for Windows, Android, and iOS using the Xamarin framework and ArcGIS .NET Runtime.",
        "Produced 50+ detailed technical architecture quotes for enterprise accounts to support project scope analysis and engineering estimations.",
      ],
      skills: ["JavaScript", "C#", "React", "Git", "ArcGIS", "Xamarin"],
    },
    {
      company: "UVIC Continuing Studies & ISM Canada",
      role: "Various Software Developer Co-ops",
      period: "January 2015 - April 2018",
      location: "Victoria, BC",
      description: [
        "Developed desktop applications for IT support operations at ISM Canada utilizing XAML, VB.NET, SQL database services, and C# in an agile setting.",
        "Developed web interfaces for UVic's student registration systems featuring HTML, CSS, Angular components, and C# within Razor MVC architectures.",
      ],
      skills: ["C#", "VB.NET", "SQL", "HTML", "CSS", "Angular", "Razor MVC"],
    },
  ];

  return (
    <div key={resolvedTheme} className="text-[#23401d] dark:text-slate-400">
      <h2 className="mb-8 text-4xl font-bold text-[#5c7a3a] dark:text-slate-200">
        <span className="bold">Experience</span>
      </h2>
      <div className="flex flex-col gap-8">
        {experiences.map((exp, idx) => {
          const isActive = hovered === idx;
          return (
            <div
              key={exp.company + exp.role + exp.period}
              className={`rounded-xl border p-6 transition-all duration-300 ${
                isActive
                  ? "border-[#b7c68b] bg-[#5c7a3a]/90 shadow-lg shadow-[#35522c44] dark:border-slate-100 dark:bg-slate-800/90"
                  : "border-[#35522c] bg-[#35522c]/80 dark:border-slate-800 dark:bg-slate-900/60"
              } `}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <span className="text-xs font-semibold tracking-widest text-[#b7c68b] uppercase dark:text-slate-500">
                  {exp.period}
                </span>
                <span className="mt-1 text-xs text-[#b7c68b] sm:mt-0 sm:text-right dark:text-slate-500">
                  {exp.location}
                </span>
              </div>
              <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3
                    className={`text-lg font-bold ${
                      isActive
                        ? "text-white dark:text-slate-100"
                        : "text-[#eafbe7] dark:text-slate-300"
                    }`}
                  >
                    {exp.role}
                    <span className="font-normal text-[#b7c68b] dark:text-slate-400">
                      {" "}
                      · {exp.company}
                    </span>
                  </h3>
                </div>
              </div>
              <ul className="mt-3 space-y-2 text-base list-disc pl-5">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className={
                      isActive
                        ? "text-white dark:text-slate-200"
                        : "text-[#eafbe7] dark:text-slate-400"
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
              {exp.skills && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        isActive
                          ? "bg-[#b7c68b] text-[#23401d] dark:bg-slate-700 dark:text-slate-100"
                          : "bg-[#eafbe7] text-[#35522c] dark:bg-slate-800 dark:text-slate-400"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}