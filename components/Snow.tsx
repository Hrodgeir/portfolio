"use client";
import React, { useEffect, useState } from "react";

type Snowflake = {
  left: string;
  fontSize: string;
  animationDuration: string;
  animationDelay: string;
};

export default function Snow() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes = Array.from({ length: 160 }).map(() => ({
      left: `${Math.random() * 100}vw`,
      fontSize: `${Math.random() * 1.5 + 0.4}rem`,
      animationDuration: `${Math.random() * 8 + 12}s`,
      animationDelay: `${Math.random() * 16}s`,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-50 h-screen w-screen overflow-hidden">
      {snowflakes.map((flake, i) => (
        <span
          key={i}
          className={`snowflake pointer-events-none absolute select-none`}
          style={{
            left: flake.left,
            fontSize: flake.fontSize,
            animationDuration: flake.animationDuration,
            animationDelay: flake.animationDelay,
          }}
        >
          *
        </span>
      ))}
    </div>
  );
}
