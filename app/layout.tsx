import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Analytics } from "@vercel/analytics/react";
import Nav from "@/app/components/Nav";
import ThemeToggle from "@/app/components/ThemeToggle";
import Particles from "@/app/components/Particles";
import Aurora from "@/app/components/Aurora";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matt Hodgson",
  description: "Matt Hodgson's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body
        className={`${inter.variable} bg-[#eafbe7] text-[#23401d] dark:bg-slate-950 dark:text-white`}
      >
        <Aurora />
        <div className="relative inset-0 z-50 transition duration-300 lg:absolute">
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
            <div className="min-h-screen lg:flex lg:justify-between lg:gap-4">
              <header className="flex flex-1 flex-col lg:sticky lg:top-0 lg:max-h-screen lg:w-[48%] lg:py-24">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    <span className="bold">Matt Hodgson</span>
                  </h1>
                  <h2 className="mt-3 flex items-center gap-2 text-lg font-medium tracking-tight sm:text-xl">
                    <span className="bold">Frontend Developer</span>
                    <ThemeToggle />
                  </h2>
                  <p className="mt-4 max-w-xs leading-normal text-[#3d5a2a] dark:text-slate-400">
                    I love to write{" "}
                    <span className="font-bold text-[#23401d] dark:text-slate-100">
                      <span className="wave inline-block italic">
                        <span className="bold">c</span>
                      </span>
                      <span
                        className="wave inline-block italic"
                        style={{ animationDelay: "0.2s" }}
                      >
                        <span className="bold">o</span>
                      </span>
                      <span
                        className="wave inline-block italic"
                        style={{ animationDelay: "0.4s" }}
                      >
                        <span className="bold">d</span>
                      </span>
                      <span
                        className="wave inline-block italic"
                        style={{ animationDelay: "0.6s" }}
                      >
                        <span className="bold">e</span>
                      </span>
                    </span>{" "}
                    to build cool things.
                  </p>
                  <p className="mt-4 max-w-xs leading-normal text-[#3d5a2a] dark:text-slate-400">
                    Living in{" "}
                    <span className="font-bold text-[#23401d] dark:text-slate-100">
                      <span className="wave inline-block italic">
                        <span className="bold">n</span>
                      </span>
                      <span
                        className="wave inline-block italic"
                        style={{ animationDelay: "0.2s" }}
                      >
                        <span className="bold">o</span>
                      </span>
                      <span
                        className="wave inline-block italic"
                        style={{ animationDelay: "0.4s" }}
                      >
                        <span className="bold">r</span>
                      </span>
                      <span
                        className="wave inline-block italic"
                        style={{ animationDelay: "0.6s" }}
                      >
                        <span className="bold">t</span>
                      </span>
                      <span
                        className="wave inline-block italic"
                        style={{ animationDelay: "0.8s" }}
                      >
                        <span className="bold">h</span>
                      </span>
                      <span
                        className="wave inline-block italic"
                        style={{ animationDelay: "1.0s" }}
                      >
                        <span className="bold">e</span>
                      </span>
                      <span
                        className="wave inline-block italic"
                        style={{ animationDelay: "1.2s" }}
                      >
                        <span className="bold">r</span>
                      </span>
                      <span
                        className="wave inline-block italic"
                        style={{ animationDelay: "1.4s" }}
                      >
                        <span className="bold">n</span>
                      </span>
                    </span>{" "}
                    British Columbia, Canada
                  </p>
                  <div className="mt-8">
                    <Nav />
                  </div>
                </div>
                <div className="mt-auto flex gap-6 pt-8 text-[#35522cbb] dark:text-slate-500">
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
                </div>
              </header>
              <main className="flex flex-1 py-26">{children}</main>
            </div>
          </div>
        </div>
        <Particles />
      </body>
    </html>
  );
}
