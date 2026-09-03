import React from 'react';
import { Hero3DCanvas } from './3d/Hero3DCanvas';
import { ArrowRight, Rotate3d, Compass, ShieldCheck, MapPin, ExternalLink, Code } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/audio';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden bg-cyber-grid">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
        
        {/* Left Column: Headline & Intro */}
        <div className="lg:col-span-7 flex flex-col justify-center gap-6 text-left">
          
          {/* Status Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-cyan-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(0,243,255,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="text-xs font-mono tracking-wider text-cyan-300 uppercase">
                Seeking Software & Web Dev Roles
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>Namakkal, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <div className="text-xs sm:text-sm font-mono tracking-widest text-purple-400 uppercase">
              Saravanan P — B.Tech IT Student (3rd Year)
            </div>
            
            <h1 className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white">
              “Your resume tells them what I’ve done.{' '}
              <span className="block mt-2 gradient-text-cyan text-glow-cyan">
                This portfolio shows what I can do.”
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-400 font-inter max-w-2xl leading-relaxed">
              Aspiring Software Developer with a solid foundation in programming, Data Structures, and Web Technologies. 
              Currently building an AI-powered sports assessment platform.
            </p>
          </div>

          {/* Core Technologies Bar */}
          <div className="flex flex-wrap gap-2 pt-1">
            {['Python', 'Java', 'DBMS', 'OOPs', 'HTML5/CSS3', 'DSA', 'React'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/10 text-xs font-mono text-gray-300 flex items-center gap-1.5"
              >
                <Code className="w-3 h-3 text-cyan-400" />
                {tech}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-syne font-bold text-sm tracking-wider uppercase flex items-center gap-2.5 shadow-[0_0_25px_rgba(0,243,255,0.4)] hover:shadow-[0_0_40px_rgba(0,243,255,0.7)] hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/15 text-white font-syne font-semibold text-sm tracking-wide flex items-center gap-2 backdrop-blur-md transition-all duration-200"
            >
              <span>Get In Touch</span>
              <ExternalLink className="w-4 h-4 text-cyan-400" />
            </a>
          </div>

          {/* Key Quick Stats */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg">
            <div>
              <div className="font-syne font-extrabold text-2xl text-cyan-400">7.87</div>
              <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">CGPA (B.Tech IT)</div>
            </div>
            <div>
              <div className="font-syne font-extrabold text-2xl text-purple-400">VSB Eng</div>
              <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">College (2024–28)</div>
            </div>
            <div>
              <div className="font-syne font-extrabold text-2xl text-emerald-400">4+</div>
              <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">Certifications</div>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Canvas Visual Core */}
        <div className="lg:col-span-5 relative h-[420px] sm:h-[500px] lg:h-[550px] w-full flex items-center justify-center">
          
          {/* 360 Rotation Pill */}
          <div className="absolute top-4 z-20 px-3.5 py-1.5 rounded-full bg-[#05070e]/80 border border-cyan-500/40 backdrop-blur-md flex items-center gap-2 shadow-[0_0_15px_rgba(0,243,255,0.2)]">
            <Rotate3d className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
            <span className="text-[11px] font-mono tracking-widest text-cyan-300 uppercase">
              360° Interactive Canvas • Orbit Drag
            </span>
          </div>

          {/* 3D Canvas */}
          <div className="w-full h-full rounded-3xl glass-panel relative overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
            <Hero3DCanvas />

            <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-center text-[10px] font-mono text-gray-400 bg-[#05070e]/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
              <span className="flex items-center gap-1 text-cyan-400">
                <Compass className="w-3 h-3" /> Three.js & WebGL 3D
              </span>
              <span className="flex items-center gap-1 text-emerald-400">
                <ShieldCheck className="w-3 h-3" /> 60 FPS Responsive Motion
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
