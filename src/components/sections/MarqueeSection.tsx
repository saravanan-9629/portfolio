import React, { useEffect, useState, useRef } from 'react';
import { Terminal, Code, Cpu, Database, Flame, FileCode, Layers, TerminalSquare, Shield, Globe } from 'lucide-react';


interface TechCardProps {
  title: string;
  category: string;
  icon: React.ReactNode;
  color: string;
}

const techStack: TechCardProps[] = [
  { title: 'OOPs Principles', category: 'Object-Oriented Design', icon: <Cpu className="w-12 h-12" />, color: 'text-cyan-400' },
  { title: 'Python', category: 'AI & Data Processing', icon: <Terminal className="w-12 h-12" />, color: 'text-amber-400' },
  { title: 'Java Core', category: 'Object-Oriented Architecture', icon: <Code className="w-12 h-12" />, color: 'text-red-400' },
  { title: 'HTML5', category: 'Semantic Web Structure', icon: <Globe className="w-12 h-12" />, color: 'text-orange-400' },
  { title: 'CSS3', category: 'Responsive Styling & Layouts', icon: <Layers className="w-12 h-12" />, color: 'text-blue-400' },
  { title: 'JavaScript', category: 'Dynamic Interactivity', icon: <Flame className="w-12 h-12" />, color: 'text-yellow-400' },
  { title: 'MySQL', category: 'Relational Database System', icon: <Database className="w-12 h-12" />, color: 'text-blue-400' },
  { title: 'GitHub', category: 'Code Repositories & CI/CD', icon: <TerminalSquare className="w-12 h-12" />, color: 'text-purple-400' },
  { title: 'VS Code', category: 'IDE & Environment', icon: <FileCode className="w-12 h-12" />, color: 'text-cyan-300' },
  { title: 'Postman', category: 'API Testing & Inspection', icon: <Flame className="w-12 h-12" />, color: 'text-orange-500' },
  { title: 'Linux / Ubuntu', category: 'OS & CLI Tooling', icon: <Shield className="w-12 h-12" />, color: 'text-emerald-400' },
  { title: 'DBMS / SQL', category: 'Relational Database Design', icon: <Database className="w-12 h-12" />, color: 'text-purple-300' },
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Split tech stack into Row 1 & Row 2
  const row1 = techStack.slice(0, 6);
  const row2 = techStack.slice(6);

  // Triple rows for seamless scrolling
  const tripledRow1 = [...row1, ...row1, ...row1];
  const tripledRow2 = [...row2, ...row2, ...row2];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1: Moves RIGHT on scroll */}
        <div
          className="flex gap-3 w-max"
          style={{
            transform: `translateX(${scrollOffset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {tripledRow1.map((item, idx) => (
            <div
              key={`r1-${idx}`}
              className="w-[320px] sm:w-[380px] md:w-[420px] h-[200px] sm:h-[240px] md:h-[270px] rounded-2xl bg-[#141821] border border-white/10 p-6 flex flex-col justify-between shrink-0 hover:border-cyan-400/40 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#D7E2EA]/60 uppercase tracking-widest">
                  {item.category}
                </span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f3ff]" />
              </div>

              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-white/[0.04] ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-syne font-bold text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-gray-400 uppercase">Core Technology</span>
                </div>
              </div>

              <div className="text-[11px] font-mono text-[#D7E2EA]/40 uppercase tracking-wider border-t border-white/5 pt-2">
                Saravanan P Tech Stack
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div
          className="flex gap-3 w-max"
          style={{
            transform: `translateX(${-(scrollOffset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {tripledRow2.map((item, idx) => (
            <div
              key={`r2-${idx}`}
              className="w-[320px] sm:w-[380px] md:w-[420px] h-[200px] sm:h-[240px] md:h-[270px] rounded-2xl bg-[#141821] border border-white/10 p-6 flex flex-col justify-between shrink-0 hover:border-purple-400/40 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#D7E2EA]/60 uppercase tracking-widest">
                  {item.category}
                </span>
                <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#8a2be2]" />
              </div>

              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-white/[0.04] ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-syne font-bold text-xl sm:text-2xl text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-gray-400 uppercase">Developer Tooling</span>
                </div>
              </div>

              <div className="text-[11px] font-mono text-[#D7E2EA]/40 uppercase tracking-wider border-t border-white/5 pt-2">
                VSB Engineering College
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
