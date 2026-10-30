import React, { useEffect, useRef } from 'react';

const PortalCanvas = ({ originX, originY, onPortalComplete }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const startX = originX || canvas.width / 2;
    const startY = originY || canvas.height / 2;
    const targetX = canvas.width / 2;
    const targetY = canvas.height / 2;

    // Create 160 Marvel-style portal particles
    const particleCount = 160;
    const particles = [];
    const colors = ['#e26d7c', '#ff3b56', '#ffd166', '#ffffff', '#c84b5b', '#f29ca7'];

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 12 + 4;
      particles.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: Math.random() * 3.5 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        angle: angle,
        orbitRadius: Math.random() * 180 + 80,
        swirlSpeed: (Math.random() * 0.08 + 0.04) * (Math.random() > 0.5 ? 1 : -1),
      });
    }

    let animationFrameId;
    let startTime = performance.now();

    const render = (now) => {
      const elapsed = now - startTime;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (elapsed < 400) {
        // Phase 1: EXPLOSION - Particles burst outward
        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.94;
          p.vy *= 0.94;

          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 15;
          ctx.shadowColor = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });
      } else if (elapsed < 900) {
        // Phase 2: PORTAL VORTEX - Particles swirl into spinning Marvel portal ring at screen center
        const progress = (elapsed - 400) / 500;
        particles.forEach((p) => {
          p.angle += p.swirlSpeed;
          p.orbitRadius = p.orbitRadius * (1 - progress * 0.3);

          const currentCenterX = startX + (targetX - startX) * progress;
          const currentCenterY = startY + (targetY - startY) * progress;

          p.x = currentCenterX + Math.cos(p.angle) * p.orbitRadius;
          p.y = currentCenterY + Math.sin(p.angle) * p.orbitRadius;

          ctx.save();
          ctx.globalAlpha = Math.min(1, progress * 1.5);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 20;
          ctx.shadowColor = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * (1 + progress * 0.5), 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });

        // Draw Marvel Portal Ring Center
        ctx.save();
        ctx.strokeStyle = '#ffd166';
        ctx.lineWidth = 4;
        ctx.shadowBlur = 30;
        ctx.shadowColor = '#e26d7c';
        ctx.beginPath();
        ctx.arc(targetX, targetY, 100 * progress, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      } else if (elapsed < 1300) {
        // Phase 3: PORTAL EXPAND - Expand portal ring rapidly to reveal new screen
        const progress = (elapsed - 900) / 400;
        const maxRadius = Math.max(canvas.width, canvas.height) * 1.2;
        const currentRadius = 100 + (maxRadius - 100) * (progress * progress);

        ctx.save();
        ctx.fillStyle = `rgba(226, 109, 124, ${1 - progress * 0.7})`;
        ctx.beginPath();
        ctx.arc(targetX, targetY, currentRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 8;
        ctx.shadowBlur = 40;
        ctx.shadowColor = '#ff3b56';
        ctx.beginPath();
        ctx.arc(targetX, targetY, currentRadius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      } else {
        // Complete transition!
        if (onPortalComplete) onPortalComplete();
        return;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [originX, originY, onPortalComplete]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[100000] pointer-events-none"
    />
  );
};

export default PortalCanvas;
