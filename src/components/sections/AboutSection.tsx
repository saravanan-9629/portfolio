import React from 'react';
import { FadeIn } from '../common/FadeIn';
import { AnimatedText } from '../common/AnimatedText';
import { ContactButton } from '../common/ContactButton';
import { Code, Terminal, Database, Cpu } from 'lucide-react';

interface AboutSectionProps {
  onOpenResume?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  const bioText =
    "I'm a B.Tech Information Technology student at VSB Engineering College, currently in my 3rd year with a CGPA of 7.87. I focus on full stack development, data structures, and building practical software solutions -- from AI-powered platforms to database-driven applications. I enjoy solving real problems and I'm looking to grow within a collaborative, agile team. Let's build something great together!";

  return (
    <section id="about" className="relative min-h-screen w-full flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden">
      
      {/* 4 Decorative Corner Tech Icons */}
      
      {/* Top-Left: Code Bracket Card */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <div className="w-[120px] sm:w-[160px] md:w-[210px] aspect-square rounded-3xl bg-[#141821] border border-cyan-500/30 p-4 flex flex-col items-center justify-center text-cyan-400 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <Code className="w-10 h-10 sm:w-14 sm:h-14 mb-2 opacity-80" />
            <span className="text-[10px] sm:text-xs font-mono text-cyan-300 uppercase tracking-widest text-center">Full Stack Logic</span>
          </div>
        </FadeIn>
      </div>

      {/* Bottom-Left: Terminal Card */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <div className="w-[100px] sm:w-[140px] md:w-[180px] aspect-square rounded-3xl bg-[#141821] border border-purple-500/30 p-4 flex flex-col items-center justify-center text-purple-400 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <Terminal className="w-8 h-8 sm:w-12 sm:h-12 mb-2 opacity-80" />
            <span className="text-[10px] sm:text-xs font-mono text-purple-300 uppercase tracking-widest text-center">CLI & Systems</span>
          </div>
        </FadeIn>
      </div>

      {/* Top-Right: Database Card */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <div className="w-[120px] sm:w-[160px] md:w-[210px] aspect-square rounded-3xl bg-[#141821] border border-emerald-500/30 p-4 flex flex-col items-center justify-center text-emerald-400 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <Database className="w-10 h-10 sm:w-14 sm:h-14 mb-2 opacity-80" />
            <span className="text-[10px] sm:text-xs font-mono text-emerald-300 uppercase tracking-widest text-center">DBMS & SQL</span>
          </div>
        </FadeIn>
      </div>

      {/* Bottom-Right: CPU Processor Card */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <div className="w-[130px] sm:w-[170px] md:w-[220px] aspect-square rounded-3xl bg-[#141821] border border-amber-500/30 p-4 flex flex-col items-center justify-center text-amber-400 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <Cpu className="w-10 h-10 sm:w-14 sm:h-14 mb-2 opacity-80" />
            <span className="text-[10px] sm:text-xs font-mono text-amber-300 uppercase tracking-widest text-center">DSA & Algorithmic</span>
          </div>
        </FadeIn>
      </div>

      {/* Main Content Box */}
      <div className="relative z-20 max-w-4xl w-full flex flex-col items-center text-center gap-10 sm:gap-14 md:gap-16 my-auto">
        
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
            About me
          </h2>
        </FadeIn>

        {/* Profile Image Badge Card */}
        <FadeIn delay={0.1} y={20}>
          <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-3xl p-1.5 bg-gradient-to-tr from-cyan-400 via-purple-500 to-emerald-400 shadow-[0_0_50px_rgba(0,243,255,0.3)] hover:scale-105 transition-transform duration-500">
            <div className="w-full h-full rounded-[22px] overflow-hidden bg-[#0a0d14] relative group">
              <img
                src="/saravanan.jpg"
                alt="Saravanan P"
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
            </div>
          </div>
        </FadeIn>

        {/* Character-by-Character Scroll-Revealed Text */}
        <AnimatedText text={bioText} />

        {/* Action Buttons: Contact & Resume */}
        <div className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-4">
          <FadeIn delay={0.2} y={20}>
            <ContactButton />
          </FadeIn>
          <FadeIn delay={0.25} y={20}>
            <button
              onClick={() => (onOpenResume ? onOpenResume() : window.dispatchEvent(new CustomEvent('open-resume')))}
              className="px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border-2 border-cyan-500/40 text-cyan-300 font-syne font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(0,243,255,0.2)]"
            >
              View Full Resume
            </button>
          </FadeIn>
        </div>

      </div>

    </section>
  );
};
