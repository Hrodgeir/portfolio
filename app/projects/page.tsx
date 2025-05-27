"use client";
import { useEffect, useState } from "react";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
};

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/Hrodgeir/repos?sort=updated&per_page=12",
    )
      .then((res) => res.json())
      .then((data) => {
        setRepos(data.filter((repo: Repo) => !repo.fork && !repo.archived));
        setLoading(false);
      });
  }, []);

  return (
    <div className="text-[#23401d] dark:text-slate-400">
      <h2 className="mb-8 text-left text-4xl font-bold text-[#5c7a3a] dark:text-slate-200">
        <span className="bold">Projects</span>
      </h2>
      {loading ? (
        <div className="grid gap-8 md:grid-cols-2">
          <div className="col-span-2 flex justify-center py-16">
            <span className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-[#35522c] border-t-[#b7c68b] dark:border-slate-700 dark:border-t-slate-300" />
          </div>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2">
          {repos.map((repo, idx) => {
            const isActive = hovered === idx;
            return (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block cursor-pointer rounded-xl border p-6 transition-all duration-300 ${
                  isActive
                    ? "border-[#b7c68b] bg-[#5c7a3a]/90 shadow-lg shadow-[#35522c44] dark:border-slate-100 dark:bg-slate-800/90"
                    : "border-[#35522c] bg-[#35522c]/80 dark:border-slate-800 dark:bg-slate-900/60"
                } hover:border-[#b7c68b] hover:bg-[#5c7a3a]/90 dark:hover:border-slate-100 dark:hover:bg-slate-800/90`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-xs font-semibold tracking-widest text-[#b7c68b] dark:text-slate-500">
                    {repo.language || "Other"}
                  </span>
                  <span className="mt-1 flex items-center gap-1 text-xs text-[#b7c68b] sm:mt-0 sm:text-right dark:text-slate-500">
                    ★ {repo.stargazers_count}
                  </span>
                </div>
                <h3
                  className={`mt-2 text-xl font-bold ${
                    isActive
                      ? "text-white dark:text-slate-100"
                      : "text-[#eafbe7] dark:text-slate-300"
                  }`}
                >
                  {repo.name}
                </h3>
                <p
                  className={`mt-3 mb-2 text-base ${
                    isActive
                      ? "text-white dark:text-slate-200"
                      : "text-[#eafbe7] dark:text-slate-400"
                  }`}
                >
                  {repo.description || "No description"}
                </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
