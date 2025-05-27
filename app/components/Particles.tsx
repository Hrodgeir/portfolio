"use client";
import React, { useEffect, useState } from "react";

type Particle = {
  left: string;
  fontSize: string;
  animationDuration: string;
  animationDelay: string;
  rotate?: string;
  color?: string;
};

const snowflakeEmojis = ["❄️"];
const leafEmojis = ["🍃", "🌿"];

export default function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isDark, setIsDark] = useState(
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false,
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isDark) {
      setParticles(
        Array.from({ length: 160 }).map(() => ({
          left: `${Math.random() * 100}vw`,
          fontSize: `${Math.random() * 0.8 + 0.4}rem`,
          animationDuration: `${Math.random() * 8 + 12}s`,
          animationDelay: `${Math.random() * 16}s`,
          rotate: `rotate(${Math.random() * 360}deg)`,
        })),
      );
    } else {
      setParticles(
        Array.from({ length: 60 }).map(() => ({
          left: `${Math.random() * 100}vw`,
          fontSize: `${Math.random() * 1 + 0.8}rem`,
          animationDuration: `${Math.random() * 8 + 12}s`,
          animationDelay: `${Math.random() * 16}s`,
          rotate: `rotate(${Math.random() * 360}deg)`,
        })),
      );
    }
  }, [isDark]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-50 h-screen w-screen overflow-hidden">
      {particles.map((flake, i) =>
        isDark ? (
          <span
            key={i}
            className="snowflake pointer-events-none absolute select-none"
            style={{
              left: flake.left,
              fontSize: flake.fontSize,
              animationDuration: flake.animationDuration,
              animationDelay: flake.animationDelay,
            }}
          >
            {snowflakeEmojis[i % snowflakeEmojis.length]}
          </span>
        ) : (
          <span
            key={i}
            className="leaf pointer-events-none absolute select-none"
            style={{
              left: flake.left,
              fontSize: flake.fontSize,
              animationDuration: flake.animationDuration,
              animationDelay: flake.animationDelay,
              transform: flake.rotate,
              color: flake.color,
            }}
          >
            {leafEmojis[i % leafEmojis.length]}
          </span>
        ),
      )}
    </div>
  );
}
