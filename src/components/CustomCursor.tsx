import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging3D, setIsDragging3D] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = target.closest('a, button, [data-interactive="true"], input, textarea, select');
        setIsHovered(!!isInteractive);

        const is3DCanvas = target.closest('canvas, [data-3d-canvas="true"]');
        setIsDragging3D(!!is3DCanvas);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  useEffect(() => {
    let animationFrameId: number;
    const animateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      animationFrameId = requestAnimationFrame(animateTrailing);
    };
    animationFrameId = requestAnimationFrame(animateTrailing);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Central Cursor Dot */}
      <div
        className={`fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-cyan-400 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out shadow-[0_0_10px_#00f3ff] ${
          isHovered ? 'scale-150 bg-cyan-300' : ''
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />

      {/* Trailing Ring Aura */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-cyan-400/40 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
          isHovered
            ? 'w-12 h-12 border-cyan-400 bg-cyan-500/10 scale-125'
            : isDragging3D
            ? 'w-14 h-14 border-purple-500/60 bg-purple-500/10 scale-110'
            : 'w-8 h-8'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {isDragging3D && (
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-widest text-purple-300 uppercase whitespace-nowrap bg-black/60 px-1.5 py-0.5 rounded border border-purple-500/30">
            360° Drag
          </span>
        )}
      </div>
    </div>
  );
};
