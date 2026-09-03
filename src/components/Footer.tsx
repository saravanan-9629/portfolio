import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock, Code2 } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/audio';

export const Footer: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format as IST / India Time
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setTime(timeStr + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 relative w-full bg-[#030408] border-t border-white/10 text-gray-400 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px]">
            <div className="w-full h-full bg-[#05070e] rounded-[7px] flex items-center justify-center">
              <Code2 className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
          <span className="font-syne font-bold text-sm text-white">
            Saravanan P <span className="text-gray-500 text-xs font-normal">© 2026. All Rights Reserved.</span>
          </span>
        </div>

        {/* Center: Live Time Clock */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-cyan-300">
          <Clock className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>Local Time: {time || 'Calculating...'}</span>
        </div>

        {/* Right: Scroll to top */}
        <button
          onClick={scrollToTop}
          onMouseEnter={playHoverSound}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-cyan-500/20 text-xs font-mono text-gray-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 transition-all"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};
