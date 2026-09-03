import React from 'react';
import { User, Cpu, Award, Terminal, Code, Database, CheckCircle2, GraduationCap } from 'lucide-react';
import { playHoverSound } from '../utils/audio';

export const About: React.FC = () => {
  const engineeringPillars = [
    {
      icon: Cpu,
      title: 'Programming Foundations',
      desc: 'Solid mastery in C, Python, and Java programming with emphasis on algorithmic thinking and clean syntax.',
      tag: 'Core Languages',
      color: 'text-cyan-400',
      border: 'border-cyan-500/30',
    },
    {
      icon: Database,
      title: 'Data Structures & DBMS',
      desc: 'Strong understanding of array/tree data structures, Object-Oriented Programming (OOP), and SQL database design.',
      tag: 'Computer Science',
      color: 'text-purple-400',
      border: 'border-purple-500/30',
    },
    {
      icon: Code,
      title: 'Web & AI Integration',
      desc: 'Hands-on experience developing web applications, mobile landing pages, and AI pose-estimation project concepts.',
      tag: 'Web & AI',
      color: 'text-emerald-400',
      border: 'border-emerald-500/30',
    },
  ];

  return (
    <section id="about" className="py-24 relative w-full bg-[#05070e] overflow-hidden">
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <User className="w-3.5 h-3.5" />
            <span>01 // About Me</span>
          </div>

          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Building software with <span className="gradient-text-cyan">purpose & clarity</span>.
          </h2>

          <p className="text-gray-400 text-base sm:text-lg font-inter leading-relaxed">
            Motivated B.Tech IT student at VSB Engineering College (3rd Year, CGPA 7.87) with hands-on experience spanning 
            full-stack web development, AI pose estimation, and structured database engineering.
          </p>
        </div>

        {/* 3 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engineeringPillars.map((pillar) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={pillar.title}
                onMouseEnter={playHoverSound}
                className={`p-6 rounded-2xl glass-panel border ${pillar.border} hover:border-cyan-400/60 transition-all duration-300 group hover:-translate-y-1 text-left`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-white/[0.04] ${pillar.color}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-gray-400 uppercase px-2.5 py-1 rounded bg-white/5 border border-white/10">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="font-syne font-bold text-xl text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                
                <p className="text-sm text-gray-400 leading-relaxed font-inter">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Detailed Summary & Academic Highlight Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Bio Overview */}
          <div className="lg:col-span-7 p-8 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between space-y-6 text-left">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                <Terminal className="w-4 h-4" /> Personal Summary
              </div>
              
              <h3 className="font-syne font-bold text-2xl text-white">
                "Learning by building—from object-oriented logic & DBMS to AI-driven mobile platforms."
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                Currently in my 3rd year pursuing B.Tech in Information Technology at VSB Engineering College. 
                I have gained hands-on full-stack development experience as an intern at Thiranex, and I am currently 
                developing an AI-powered sports talent assessment mobile platform concept to democratize athletic evaluation in underserved regions.
              </p>
            </div>

            {/* Core Competencies Checklist */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs font-mono text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Python, Java, DBMS & Web
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Data Structures & OOP
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> DBMS & SQL Relational Design
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> AI Pose Estimation Concepts
              </div>
            </div>
          </div>

          {/* Academic Snapshot Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl glass-panel border border-white/10 space-y-6 text-left flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-purple-400 font-mono text-xs uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" /> Academic Snapshot
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="text-xs font-mono text-cyan-400">VSB Engineering College</div>
                <h4 className="font-syne font-bold text-lg text-white">B.Tech Information Technology</h4>
                <div className="flex items-center justify-between text-xs text-gray-400 pt-1">
                  <span>2024 – 2028 (3rd Year)</span>
                  <span className="font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                    CGPA 7.87
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="text-xs font-mono text-purple-400">Higher Secondary Education</div>
                <h4 className="font-syne font-bold text-base text-white">Tamil Nadu State Board</h4>
                <div className="flex items-center justify-between text-xs text-gray-400 pt-1">
                  <span>Completed 2024</span>
                  <span className="font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
                    79% Score
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs font-mono text-gray-400 flex items-center gap-2 border-t border-white/10">
              <Award className="w-4 h-4 text-cyan-400" /> Goal: Internship / Entry-Level Software Developer
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
