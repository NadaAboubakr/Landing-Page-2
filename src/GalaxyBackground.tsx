import React, { useEffect, useRef, FC } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  dx: number;
  dy: number;
  color: string;
  alphaChange: number;
}

interface ShootingStar {
  x: number;
  y: number;
  dx: number;
  dy: number;
  length: number;
  opacity: number;
  fading: boolean;
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
      "#FFFFFF", "#FFD700", "#00FFFF", "#FF69B4",
      "#ADFF2F", "#FFA500", "#9370DB", "#00BFFF"
    ];

    const stars: Star[] = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      alpha: Math.random(),
      dx: Math.random() * 0.2 - 0.1,
      dy: Math.random() * 0.2 - 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
      alphaChange: Math.random() * 0.005 + 0.002,
    }));

    let shootingStars: ShootingStar[] = [];

    const spawnShootingStar = () => {
      if (Math.random() < 0.005 && shootingStars.length < 2){
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          dx: 4 + Math.random() * 2,
          dy: 2 + Math.random() * 1,
          length: 100 + Math.random() * 50,
          opacity: 1,
          fading: false,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.alpha += star.alphaChange;
        if (star.alpha >= 1 || star.alpha <= 0.2) star.alphaChange *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = hexToRGBA(star.color, star.alpha);
        ctx.fill();

        star.x += star.dx;
        star.y += star.dy;

        if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
      });

      spawnShootingStar();

      shootingStars.forEach((star, index) => {
        ctx.strokeStyle = `rgba(255,255,255,${star.opacity})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - star.length, star.y - star.length * (star.dy / star.dx));
        ctx.stroke();

        star.x += star.dx;
        star.y += star.dy;

        if (!star.fading && (star.x > canvas.width || star.y > canvas.height)) {
          star.fading = true;
        }

        if (star.fading) {
          star.opacity -= 0.05;
          if (star.opacity <= 0) {
            shootingStars.splice(index, 1);
          }
        }
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

function hexToRGBA(hex: string, alpha: number): string {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default GalaxyBackground;
