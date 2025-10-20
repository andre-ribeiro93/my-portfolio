"use client";

import { useState, useEffect } from "react";

export default function MouseEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative overflow-hidden z-30">
      <div
        className="pointer-events-none fixed w-[1000px] h-[1000px] rounded-full transition duration-300"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)", //dive a largura e altura pela metada para o brilho ficar no meio do mouse.
          background: `radial-gradient(circle at center, rgba(38, 55, 243, 0.15) 0%, transparent 80%)`,
          filter: "blur(4rem)",
        }}
      />
    </div>
  );
}