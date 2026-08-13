import { useEffect, useState, useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export default function BackgroundGrid() {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Initialize background particles only on client-side
  useEffect(() => {
    const freshParticles: Particle[] = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.05,
      speedY: (Math.random() - 0.5) * 0.05,
      opacity: Math.random() * 0.5 + 0.2,
    }));
    setParticles(freshParticles);

    // Subtle drift animation
    let animationFrameId: number;
    const updateParticles = () => {
      setParticles((prev) =>
        prev.map((p) => {
          let nextX = p.x + p.speedX;
          let nextY = p.y + p.speedY;

          // Wrap around edges
          if (nextX < 0) nextX = 100;
          if (nextX > 100) nextX = 0;
          if (nextY < 0) nextY = 100;
          if (nextY > 100) nextY = 0;

          return { ...p, x: nextX, y: nextY };
        })
      );
      animationFrameId = requestAnimationFrame(updateParticles);
    };

    animationFrameId = requestAnimationFrame(updateParticles);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden select-none">
      {/* Precision Bento Grid Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07] pointer-events-none transition-opacity duration-300"
        style={{
          backgroundImage: "linear-gradient(#111111 1px, transparent 1px), linear-gradient(90deg, #111111 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      {/* Dynamic Geometric SVG Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02] dark:opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" className="text-stone-400 dark:text-stone-300" />
          </pattern>
        </defs>
        
        {/* Main Grid Floor */}
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Diagonal Tech Network Path Lines */}
        <g stroke="currentColor" strokeWidth="1.5" className="text-stone-400 dark:text-stone-300" strokeDasharray="4 4" fill="none">
          <path d="M-100,100 L300,500" />
          <path d="M500,0 L1200,700" />
          <path d="M200,800 L1100,1700" />
          <path d="M800,-100 L200,500" />
          <path d="M1400,200 L900,1000" />
        </g>

        {/* Abstract Tech Connective Nodes */}
        <g fill="currentColor" className="text-brand-accent/50">
          <circle cx="300" cy="500" r="4" />
          <circle cx="1200" cy="700" r="5" />
          <circle cx="800" cy="-100" r="4" />
          <circle cx="200" cy="500" r="3" />
          <circle cx="900" cy="1000" r="4" />
          <circle cx="500" cy="0" r="5" />
        </g>
      </svg>

      {/* Glowing Ambient Spotlights */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-accent/5 dark:bg-brand-accent/10 blur-[120px]" />
      <div className="absolute bottom-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-orange-400/5 dark:bg-orange-500/10 blur-[130px]" />
      <div className="absolute top-[40%] left-[60%] w-[35%] h-[35%] rounded-full bg-teal-500/5 dark:bg-teal-500/5 blur-[100px]" />

      {/* Floating Sparkles/Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-brand-accent"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            transition: "opacity 0.5s ease",
          }}
        />
      ))}
    </div>
  );
}
