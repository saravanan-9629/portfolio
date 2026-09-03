import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { playHoverSound } from '../utils/audio';

export const ExperienceEducation: React.FC = () => {
  const experiences = [
    {
      type: 'Experience',
      title: 'Full Stack Web Development Intern',
      organization: 'Thiranex',
      period: 'Internship Duration',
      location: 'Remote / Hybrid',
      description: 'Hands-on exposure to full-stack web development practices, modern frontend/backend tools, version control, and team workflows.',
      highlights: [
        'Applied HTML5, CSS3, JavaScript, and database integration workflows',
        'Participated in agile code reviews and software component design',
        'Gained practical experience with Git/GitHub repository management',
      ],
      icon: Briefcase,
      badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    },
  ];

  const education = [
    {
      type: 'Education',
      title: 'B.Tech Information Technology',
      organization: 'VSB Engineering College',
      period: '2024 – 2028 (Currently 3rd Year)',
      location: 'Tamil Nadu, India',
      description: 'Pursuing Bachelor of Technology in IT with focus on Data Structures, Algorithms, OOP, Database Management Systems, and Web Technologies.',
      score: 'CGPA 7.87',
      highlights: [
        'Relevant Coursework: Data Structures & Algorithms, DBMS, Operating Systems, OOP',
        'Active participant in technical symposiums and software projects',
      ],
      icon: GraduationCap,
      badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
    },
    {
      type: 'Education',
      title: 'Higher Secondary Education (12th Grade)',
      organization: 'Tamil Nadu State Board',
      period: 'Completed 2024',
      location: 'Tamil Nadu, India',
      description: 'Completed Higher Secondary schooling with strong foundational emphasis on Mathematics, Physics, and Computer Science.',
      score: '79% Score',
      highlights: [
        'Solid foundation in core science and analytical problem solving',
      ],
      icon: GraduationCap,
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    },
  ];

  return (
    <section id="experience" className="py-24 relative w-full bg-cyber-grid overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5" />
            <span>04 // Experience & Academic Background</span>
          </div>

          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Work Experience & <span className="gradient-text-cyan">Education</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base font-inter">
            A chronicle of practical full-stack internship experience and academic milestones in Information Technology.
          </p>
        </div>

        {/* 2 Column Layout: Internship & Academic Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Column 1: Work Experience */}
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-bold uppercase tracking-wider">
              <Briefcase className="w-4 h-4" /> Work & Internship Experience
            </div>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <div
                  key={exp.title}
                  onMouseEnter={playHoverSound}
                  className="p-7 rounded-3xl glass-panel border border-white/10 hover:border-cyan-500/40 transition-all space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <span className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded border ${exp.badgeColor}`}>
                        {exp.organization}
                      </span>
                      <h3 className="font-syne font-extrabold text-xl text-white mt-1.5">{exp.title}</h3>
                    </div>

                    <div className="text-right text-xs font-mono text-gray-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-300 font-inter leading-relaxed">{exp.description}</p>

                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Key Exposure & Learning</span>
                    {exp.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Education */}
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-2 text-purple-400 font-mono text-sm font-bold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" /> Academic Qualifications
            </div>

            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.title}
                  onMouseEnter={playHoverSound}
                  className="p-7 rounded-3xl glass-panel border border-white/10 hover:border-purple-500/40 transition-all space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <span className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded border ${edu.badgeColor}`}>
                        {edu.organization}
                      </span>
                      <h3 className="font-syne font-extrabold text-lg sm:text-xl text-white mt-1.5">{edu.title}</h3>
                    </div>

                    <div className="text-right">
                      <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/30">
                        {edu.score}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" /> {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-purple-400" /> {edu.location}
                    </span>
                  </div>

                  <p className="text-xs text-gray-300 font-inter leading-relaxed">{edu.description}</p>

                  <div className="space-y-1.5 pt-2 border-t border-white/10">
                    {edu.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
