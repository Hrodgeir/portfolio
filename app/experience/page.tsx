"use client";
import { useState } from "react";

export default function Experience() {
  const [hovered, setHovered] = useState<number | null>(null);

  const experiences = [
    {
      company: "Everbridge - xMatters Product Development",
      role: "Sr. Software Engineer I",
      period: "April 2022 - Present",
      location: "Remote",
      description: [
        "Handled frontend library upgrades and refactored large scale, shared React components.",
        "Created flowcharts for the team to manage owned services such as delivery pipelines.",
        "Performed code reviews for peers, assisting with development questions and feedback.",
      ],
      skills: ["React", "JavaScript", "SCSS", "GCP"],
    },
    {
      company: "Everbridge - xMatters Product Development",
      role: "Software Engineer II",
      period: "March 2021 - April 2022",
      location: "Victoria, BC",
      description: [
        "Developed various features for the xMatters web application that allows customers to perform digital operations centered around alert notifications and incident management.",
        "Fostered expertise with React, JavaScript, and SCSS to create modern UI features.",
        "Presented new features to stakeholders on a weekly basis.",
      ],
      skills: ["React", "JavaScript", "SCSS"],
    },
    {
      company: "VertiGIS (Latitude Geographics) - Professional Services",
      role: "Software Developer",
      period: "April 2018 - March 2021",
      location: "Victoria, BC",
      description: [
        "Developed more than 20 custom web mapping applications for clients that involved requirements analysis, design, iterative development, product demonstrations, documentation, and software delivery.",
        "Lead 4 projects as the technical lead to ensure successful, in-budget deliveries.",
        "Delivered 4 client-specific cross-platform mobile mapping applications for Windows, Android, and iOS using the Xamarin framework and ArcGIS .NET Runtime.",
        "Created more than 50 detailed quotes for clients based on technical knowledge and experience, each having an average of 95% success rate for staying within budget.",
      ],
      skills: ["JavaScript", "C#", "React", "ArcGIS", "Xamarin"],
    },
    {
      company: "UVIC Continuing Studies & ISM Canada",
      role: "Various Software Developer Co-ops",
      period: "January 2015 - April 2018",
      location: "Victoria, BC",
      description: [
        "Developed Windows Presentation Foundation applications for ISM Canada's IT Support staff that involved XAML, VB.NET, SQL, and C# in an AGILE development environment.",
        "Developed ASP.NET web applications for UVIC's Division of Continuing Studies student registration system that involved HTML, CSS, Angular, Razor MVC, and C# in an AGILE development environment.",
      ],
      skills: ["C#", "VB.NET", "SQL", "HTML", "CSS", "Angular", "Razor MVC"],
    },
  ];

  return (
    <div className="text-[#23401d] dark:text-slate-400">
      <h2 className="mb-8 text-4xl font-bold text-[#5c7a3a] dark:text-slate-200">
        <span className="bold">Experience</span>
      </h2>
      <div className="flex flex-col gap-8">
        {experiences.map((exp, idx) => {
          const isActive = hovered === idx;
          return (
            <div
              key={exp.company + exp.role + exp.period}
              className={`cursor-pointer rounded-xl border p-6 transition-all duration-300 ${
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
              <ul className="mt-3 space-y-2 text-base">
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
