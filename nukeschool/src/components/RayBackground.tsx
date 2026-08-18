import React, { useEffect, useRef } from 'react';

export const RayBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Center point of the rays (slightly upper center behind text)
    const centerX = width * 0.5;
    const centerY = height * 0.48;

    // Pre-generate ray properties for consistent look matching image
    const numRays = 72;
    const rays: {
      angle: number;
      widthAngle: number;
      color: string;
      speed: number;
    }[] = [];

    // Colors sampled/matched from image: warm amber, dark brown, cyan-blue undertone, deep gold, smoky grey
    const colorPalette = [
      'rgba(180, 110, 50, 0.22)',  // Warm amber/brown
      'rgba(210, 140, 60, 0.18)',  // Golden warm light
      'rgba(120, 80, 40, 0.25)',   // Deep copper shadow
      'rgba(50, 80, 100, 0.12)',   // Teal cyan contrast ray
      'rgba(140, 100, 70, 0.15)',  // Earthy tan
      'rgba(20, 25, 30, 0.40)',    // Dark beam gap
      'rgba(220, 160, 80, 0.20)',  // Bright beam highlight
      'rgba(15, 20, 25, 0.50)',    // Deep dark gap
    ];

    for (let i = 0; i < numRays; i++) {
      const angle = (i / numRays) * Math.PI * 2;
      const widthAngle = (Math.PI * 2 / numRays) * (0.6 + Math.random() * 0.8);
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      const speed = (Math.random() - 0.5) * 0.0002;
      rays.push({ angle, widthAngle, color, speed });
    }

    let time = 0;

    const render = () => {
      time += 0.005;
      ctx.clearRect(0, 0, width, height);

      // 1. Deep dark background base
      ctx.fillStyle = '#050507';
      ctx.fillRect(0, 0, width, height);

      const maxRadius = Math.max(width, height) * 1.5;

      // 2. Draw light rays
      rays.forEach((ray) => {
        ray.angle += ray.speed;
        const currentAngle = ray.angle;
        
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);

        const a1 = currentAngle - ray.widthAngle / 2;
        const a2 = currentAngle + ray.widthAngle / 2;

        const x1 = centerX + Math.cos(a1) * maxRadius;
        const y1 = centerY + Math.sin(a1) * maxRadius;
        const x2 = centerX + Math.cos(a2) * maxRadius;
        const y2 = centerY + Math.sin(a2) * maxRadius;

        ctx.lineTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.closePath();

        // Radial fade along each ray
        const rayGrad = ctx.createRadialGradient(
          centerX, centerY, 10,
          centerX, centerY, maxRadius * 0.85
        );
        rayGrad.addColorStop(0, 'rgba(255, 220, 180, 0.25)');
        rayGrad.addColorStop(0.2, ray.color);
        rayGrad.addColorStop(0.7, ray.color.replace(/[\d\.]+\)$/, '0.08)'));
        rayGrad.addColorStop(1, 'rgba(0, 0, 0, 0.95)');

        ctx.fillStyle = rayGrad;
        ctx.fill();
        ctx.restore();
      });

      // 3. Central luminous halo glow
      const centerGlow = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, Math.min(width, height) * 0.4
      );
      centerGlow.addColorStop(0, 'rgba(235, 180, 120, 0.18)');
      centerGlow.addColorStop(0.4, 'rgba(140, 80, 30, 0.08)');
      centerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, width, height);

      // 4. Outer vignette to match screenshot's dark edges
      const vignette = ctx.createRadialGradient(
        width / 2, height / 2, Math.min(width, height) * 0.25,
        width / 2, height / 2, Math.max(width, height) * 0.75
      );
      vignette.addColorStop(0, 'rgba(0,0,0,0)');
      vignette.addColorStop(0.65, 'rgba(0,0,0,0.5)');
      vignette.addColorStop(1, 'rgba(2, 2, 3, 0.96)');

      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      // 5. Subtle noise texture layer for organic grain depth
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Subtle CSS grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' h='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
};
