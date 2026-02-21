"use client";

import React, { useEffect, useRef } from "react";

const StarsCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    interface Star {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      speed: number;
      directionAngle: number;
      dx: number;
      dy: number;
    }

    const stars: Star[] = [];
    const starCount = 250;

    for (let i = 0; i < starCount; i++) {
      const directionAngle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.3 + 0.05;
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        speed,
        directionAngle,
        dx: Math.cos(directionAngle) * speed,
        dy: Math.sin(directionAngle) * speed,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        // Move star slowly
        star.x += star.dx;
        star.y += star.dy;

        // Wrap around edges
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        // Draw star as a bright dot
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(150, 220, 255, ${star.alpha})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
};

export default StarsCanvas;
