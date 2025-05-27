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
    <div className="text-slate-400">
      <h2 className="mb-8 text-left text-4xl font-bold text-slate-200">
        Projects
      </h2>
      {loading ? (
        <div className="grid gap-8 md:grid-cols-2">
          <div className="col-span-2 flex justify-center py-16">
            <span className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-slate-700 border-t-slate-300" />
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
                className={`rounded-xl border border-slate-800 bg-gradient-to-br ${
                  isActive
                    ? "border-slate-700 bg-slate-800/80 from-slate-800/80 to-slate-900/60 shadow-lg shadow-slate-900/40"
                    : "from-transparent to-transparent"
                } block cursor-pointer p-6 transition-all duration-300 hover:border-slate-700 hover:bg-slate-800/80`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-xs font-semibold tracking-widest text-slate-500">
                    {repo.language || "Other"}
                  </span>
                  <span className="mt-1 flex items-center gap-1 text-xs text-slate-500 sm:mt-0 sm:text-right">
                    ★ {repo.stargazers_count}
                  </span>
                </div>
                <h3
                  className={`mt-2 text-xl font-bold ${isActive ? "text-slate-100" : "text-slate-300"}`}
                >
                  {repo.name}
                </h3>
                <p
                  className={`mt-3 mb-2 text-base ${isActive ? "text-slate-200" : "text-slate-400"}`}
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
