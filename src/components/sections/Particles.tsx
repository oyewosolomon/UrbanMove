// components/Particles.tsx
import React, { useEffect, useCallback } from 'react';

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
}

const Particles = ({
  className = '',
  quantity = 100,
  staticity = 50,
  ease = 50,
}: ParticlesProps) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const handleInit = useCallback(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;

    const particles = Array.from({ length: quantity }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3 + 1,
      baseX: Math.random() * width,
      baseY: Math.random() * height,
      density: Math.random() * 30 + 1,
    }));

    let mouseX: number | null = null;
    let mouseY: number | null = null;

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();

        // Mouse movement effect
        if (mouseX && mouseY) {
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const maxDistance = 100;
          const force = (maxDistance - distance) / maxDistance;
          const directionX = forceDirectionX * force * particle.density;
          const directionY = forceDirectionY * force * particle.density;

          if (distance < maxDistance) {
            particle.x -= directionX;
            particle.y -= directionY;
          } else {
            if (particle.x !== particle.baseX) {
              particle.x -= (particle.baseX - particle.x) / ease;
            }
            if (particle.y !== particle.baseY) {
              particle.y -= (particle.baseY - particle.y) / ease;
            }
          }
        } else {
          if (particle.x !== particle.baseX) {
            particle.x -= (particle.baseX - particle.x) / ease;
          }
          if (particle.y !== particle.baseY) {
            particle.y -= (particle.baseY - particle.y) / ease;
          }
        }
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      mouseX = event.clientX - rect.left;
      mouseY = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = null;
      mouseY = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [quantity, staticity, ease]);

  useEffect(() => {
    handleInit();
  }, [handleInit]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
};

export default Particles;