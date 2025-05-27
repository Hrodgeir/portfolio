"use client";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

type Trail = {
  id: number;
  x: number;
  y: number;
  color: string;
  rotate: number;
  scale: number;
};

const auroraColors = [
  "rgba(80,255,200,0.25)",
  "rgba(120,180,255,0.22)",
  "rgba(180,120,255,0.18)",
  "rgba(80,200,255,0.20)",
  "rgba(120,255,180,0.18)",
  "rgba(80,255,120,0.20)",
  "rgba(255,255,200,0.10)",
];

export default function Aurora() {
  const { resolvedTheme } = useTheme();
  const [trails, setTrails] = useState<Trail[]>([]);

  const trailId = useRef(0);
  const prevPos = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (resolvedTheme === "light") return;
    const handleMouseMove = (e: MouseEvent) => {
      if (prevPos.current) {
        const dx = e.clientX - prevPos.current.x;
        const dy = e.clientY - prevPos.current.y;
        if (Math.abs(dx) < 8 || Math.abs(dx) < Math.abs(dy) * 0.2) {
          prevPos.current = { x: e.clientX, y: e.clientY };
          return;
        }
      }
      prevPos.current = { x: e.clientX, y: e.clientY };

      const newTrail: Trail = {
        id: trailId.current++,
        x: e.clientX,
        y: e.clientY,
        color: auroraColors[Math.floor(Math.random() * auroraColors.length)],
        rotate: Math.random() * 40 - 20,
        scale: Math.random() * 0.5 + 0.9,
      };
      setTrails((prev) => [...prev, newTrail]);
      setTimeout(() => {
        setTrails((prev) => prev.filter((t) => t.id !== newTrail.id));
      }, 2400);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (trails.length > 100) {
      setTrails((prev) => prev.slice(prev.length - 100));
    }
  }, [trails]);

  if (resolvedTheme === "light") return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-20">
      {trails.map((trail) => (
        <span
          key={trail.id}
          className="absolute"
          style={{
            left: trail.x - 40,
            top: trail.y - 120,
            width: 40,
            height: 240,
            pointerEvents: "none",
            opacity: 0.5,
            filter: "blur(20px)",
            animation: "aurora-trail 1.2s linear forwards",
            zIndex: -10,
            transform: `rotate(${trail.rotate}deg) scaleX(${trail.scale})`,
          }}
        >
          <svg width="80" height="240">
            <defs>
              <linearGradient
                id={`aurora-${trail.id}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor={trail.color} stopOpacity="1" />
                <stop offset="100%" stopColor={trail.color} stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect
              x="10"
              y="0"
              width="40"
              height="240"
              rx="30"
              fill={`url(#aurora-${trail.id})`}
            />
          </svg>
        </span>
      ))}
    </div>
  );
}
