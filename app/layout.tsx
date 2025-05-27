import { ReactNode } from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import ThemeHydrationFix from "@/app/components/ThemeHydration";
import Content from "@/app/components/Content";

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
    <html lang="en" suppressHydrationWarning>
      <Analytics />
      <body
        className={`${inter.variable} bg-[#eafbe7] text-[#23401d] dark:bg-slate-950 dark:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeHydrationFix>
            <Content>{children}</Content>
          </ThemeHydrationFix>
        </ThemeProvider>
      </body>
    </html>
  );
}
