import React, { useEffect, useRef, FC } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  dx: number;
  dy: number;
  color: string;
}

const GalaxyBackground: FC = () => {
  const animationRef = useRef<number>();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = document.getElementById("stars") as HTMLCanvasElement | null;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = [
      "#FFFFFF", // white
      "#FFD700", // gold
      "#00FFFF", // cyan
      "#FF69B4", // hot pink
      "#ADFF2F", // green-yellow
      "#FFA500", // orange
      "#9370DB", // medium purple
      "#00BFFF", // deep sky blue
    ];

    const stars: Star[] = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      alpha: Math.random(),
      dx: Math.random() * 0.2 - 0.1,
      dy: Math.random() * 0.2 - 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = hexToRGBA(star.color, star.alpha);
        ctx.fill();

        // Move star
        star.x += star.dx;
        star.y += star.dy;

        // Bounce off edges
        if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="stars"
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    ></canvas>
  );
};

// Helper: convert hex color to rgba string
function hexToRGBA(hex: string, alpha: number): string {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default GalaxyBackground;
