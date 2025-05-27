import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Analytics } from "@vercel/analytics/react";
import Aurora from "@/components/Aurora";
import Nav from "@/components/Nav";

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
      <body className={`${inter.variable} antialiased`}>
        <Aurora />
        <div className="relative inset-0 z-50 transition duration-300 lg:absolute">
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
            <div className="min-h-screen lg:flex lg:justify-between lg:gap-4">
              <header className="flex flex-1 flex-col lg:sticky lg:top-0 lg:max-h-screen lg:w-[48%] lg:py-24">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight text-slate-300 sm:text-5xl">
                    <span className="frosty">Matt Hodgson</span>
                  </h1>
                  <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-300 sm:text-xl">
                    <span className="frosty">Frontend Developer</span>
                  </h2>
                  <p className="mt-4 max-w-xs leading-normal text-slate-500">
                    I love to write{" "}
                    <span className="font-bold text-slate-100">
                      <span className="wave inline-block italic">
                        <span className="frosty">c</span>
                      </span>
                      <span
                        className="wave inline-block italic"
                        style={{ animationDelay: "0.2s" }}
                      >
                        <span className="frosty">o</span>
                      </span>
                      <span
                        className="wave inline-block italic"
                        style={{ animationDelay: "0.4s" }}
                      >
                        <span className="frosty">d</span>
                      </span>
                      <span
                        className="wave inline-block italic"
                        style={{ animationDelay: "0.6s" }}
                      >
                        <span className="frosty">e</span>
                      </span>
                    </span>{" "}
                    to build cool things.
                  </p>
                  <p className="mt-4 max-w-xs leading-normal text-slate-500">
                    Living in{" "}
                    <span className="font-bold text-slate-100">
                      <span className="wave inline-block italic">
                        <span className="frosty">n</span>
                      </span>
                      <span
                        className="wave inline-block italic"
                        style={{ animationDelay: "0.2s" }}
                      >
                        <span className="frosty">o</span>
                      </span>
                      <span
                        className="wave inline-block italic"
                        style={{ animationDelay: "0.4s" }}
                      >
                        <span className="frosty">r</span>
                      </span>
                      <span
                        className="wave inline-block italic"
                        style={{ animationDelay: "0.6s" }}
                      >
                        <span className="frosty">t</span>
                      </span>
                      <span
                        className="wave inline-block italic"
                        style={{ animationDelay: "0.8s" }}
                      >
                        <span className="frosty">h</span>
                      </span>
                      <span
                        className="wave inline-block italic"
                        style={{ animationDelay: "1.0s" }}
                      >
                        <span className="frosty">e</span>
                      </span>
                      <span
                        className="wave inline-block italic"
                        style={{ animationDelay: "1.2s" }}
                      >
                        <span className="frosty">r</span>
                      </span>
                      <span
                        className="wave inline-block italic"
                        style={{ animationDelay: "1.4s" }}
                      >
                        <span className="frosty">n</span>
                      </span>
                    </span>{" "}
                    British Columbia, Canada
                  </p>
                  <div className="mt-8">
                    <Nav />
                  </div>
                </div>
                <div className="mt-auto flex gap-6 pt-8 text-slate-500">
                  <a
                    href="https://github.com/Hrodgeir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-slate-100"
                    aria-label="GitHub"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/matt-hodgson-ba06b7b7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-slate-100"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </header>
              <main className="flex flex-1 py-26">{children}</main>
            </div>
          </div>
        </div>
        <div className="pointer-events-none fixed inset-0 -z-50 h-screen w-screen overflow-hidden">
          {[...Array(80)].map((_, i) => (
            <span
              key={i}
              className="snowflake pointer-events-none absolute select-none"
              style={{
                left: `${Math.random() * 100}vw`,
                fontSize: `${Math.random() * 1.5 + 0.4}rem`,
                animationDuration: `${Math.random() * 8 + 12}s`,
                animationDelay: `${Math.random() * 16}s`,
              }}
            >
              *
            </span>
          ))}
        </div>
      </body>
    </html>
  );
}
