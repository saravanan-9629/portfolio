import React from 'react';
import { X, Download, FileText, Printer, Mail, Phone, MapPin, ExternalLink, GraduationCap, Briefcase, Award, Code, CheckCircle2 } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/audio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    playClickSound();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto animate-fadeIn">
      
      {/* Container Box */}
      <div className="relative w-full max-w-4xl bg-[#090d16] border border-cyan-500/30 rounded-3xl shadow-[0_0_80px_rgba(0,243,255,0.2)] text-[#D7E2EA] font-inter overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0d1322] border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-cyan-400" />
            <span className="font-syne font-bold text-sm sm:text-base text-white">
              Saravanan P — Professional Resume
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/Saravanan_P_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={playClickSound}
              onMouseEnter={playHoverSound}
              className="px-3.5 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono flex items-center gap-1.5 transition-colors"
              title="View/Download PDF"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>PDF</span>
            </a>

            <a
              href="/Saravanan_P_Resume.docx"
              download
              onClick={playClickSound}
              onMouseEnter={playHoverSound}
              className="px-3.5 py-1.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono flex items-center gap-1.5 transition-colors"
              title="Download Word Document"
            >
              <Download className="w-3.5 h-3.5 text-purple-400" />
              <span>Word (.docx)</span>
            </a>

            <button
              onClick={handlePrint}
              onMouseEnter={playHoverSound}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors hidden sm:flex"
              title="Print Document"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                playClickSound();
                onClose();
              }}
              onMouseEnter={playHoverSound}
              className="p-2 rounded-xl bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 border border-white/10 transition-colors"
              title="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-left bg-gradient-to-b from-[#090d16] to-[#05070e]">
          
          {/* Header Block */}
          <div className="border-b border-white/10 pb-6 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="font-syne font-black text-3xl sm:text-4xl text-white tracking-tight uppercase">
                  SARAVANAN P
                </h1>
                <p className="text-sm font-mono text-cyan-400 mt-1">
                  B.Tech Information Technology Student | Aspiring Software Developer
                </p>
              </div>

              {/* Quick Contact Info */}
              <div className="flex flex-wrap gap-2 text-xs font-mono text-gray-300">
                <a
                  href="tel:+918072117461"
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-purple-400" />
                  <span>+91 8072117461</span>
                </a>
                <a
                  href="mailto:saravanan2007p@gmail.com"
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>saravanan2007p@gmail.com</span>
                </a>
                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Namakkal, Tamil Nadu</span>
                </span>
                <a
                  href="https://github.com/saravanan-9629"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/saravanan-p-22804232a/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-1.5 hover:text-purple-300 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 border-b border-cyan-500/20 pb-1 flex items-center gap-2">
              <FileText className="w-4 h-4" /> Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-inter">
              Motivated <strong>B.Tech Information Technology student (3rd Year, CGPA 7.87)</strong> at VSB Engineering College with a solid foundation in programming, data structures, and web technologies. Proficient in Python, Java, HTML/CSS, with hands-on project experience spanning application development, machine learning, and mobile-first design. Recently developed an AI-powered mobile platform for democratizing sports talent assessment using pose estimation. Seeking an internship or entry-level role as a <strong>Software Developer, Web Developer, or Junior Programmer</strong> to apply technical skills and grow within a collaborative, Agile team.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 border-b border-purple-500/20 pb-1 flex items-center gap-2">
              <Code className="w-4 h-4" /> Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                <span className="text-cyan-400 font-bold">Languages:</span>
                <p className="text-gray-300">Python, Java (Core), HTML5 & CSS3</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                <span className="text-purple-400 font-bold">Core Concepts:</span>
                <p className="text-gray-300">Data Structures & Algorithms, Object-Oriented Programming (OOP), DBMS / SQL</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                <span className="text-emerald-400 font-bold">Tools & Platforms:</span>
                <p className="text-gray-300">MySQL, VS Code, Postman, Linux / Ubuntu, MS Office & Google Workspace</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                <span className="text-amber-400 font-bold">Soft Skills:</span>
                <p className="text-gray-300">Problem Solving, Team Collaboration, Communication, Time Management, Adaptability, Critical Thinking</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 border-b border-emerald-500/20 pb-1 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Education
            </h2>
            <div className="space-y-3 text-xs">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-syne font-bold text-sm text-white">B.Tech - Information Technology (CGPA: 7.87)</h3>
                  <p className="text-gray-400 font-mono">VSB Engineering College, Tamil Nadu | Currently: 3rd Year (Sem 5)</p>
                </div>
                <span className="font-mono text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 shrink-0">
                  2024 - 2028 (Expected)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                  <div className="flex justify-between font-mono text-gray-300">
                    <span className="font-bold text-white">Higher Secondary (12th) - 79%</span>
                    <span className="text-gray-500">2024</span>
                  </div>
                  <p className="text-gray-400 text-[11px]">Physics, Chemistry & Mathematics | Tamil Nadu State Board</p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                  <div className="flex justify-between font-mono text-gray-300">
                    <span className="font-bold text-white">Secondary School (10th) - 78%</span>
                    <span className="text-gray-500">2022</span>
                  </div>
                  <p className="text-gray-400 text-[11px]">Tamil Nadu State Board</p>
                </div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 border-b border-amber-500/20 pb-1 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Featured Projects
            </h2>
            
            <div className="space-y-4 text-xs">
              {/* Project 1 */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-white/10 pb-2">
                  <h3 className="font-syne font-bold text-sm text-white">
                    AI-Powered Mobile Platform for Democratizing Sports Talent Assessment
                  </h3>
                  <span className="font-mono text-amber-400 text-[11px]">2025 - 2026</span>
                </div>
                <ul className="space-y-1.5 text-gray-300 list-disc list-inside leading-relaxed font-inter">
                  <li>Designed a mobile platform concept that uses AI-based pose estimation to deliver objective, low-cost athletic performance assessment in underserved regions.</li>
                  <li>Built a functional MVP landing page (HTML5, CSS3, JavaScript) featuring an animated AI visualization, a video-upload demo flow, and a simulated analysis pipeline with scorecard output.</li>
                  <li>Authored a complete academic project report covering problem statement, system architecture, and feasibility, following standard engineering documentation conventions.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-white/10 pb-2">
                  <h3 className="font-syne font-bold text-sm text-white">
                    Human Resource Management System
                  </h3>
                  <span className="font-mono text-purple-400 text-[11px]">2024 - 2025</span>
                </div>
                <ul className="space-y-1.5 text-gray-300 list-disc list-inside leading-relaxed font-inter">
                  <li>Designed and developed an application to manage core HR functions including employee records, attendance, and payroll data using structured data handling techniques.</li>
                  <li>Implemented CRUD operations for employee data management, demonstrating practical knowledge of database design and record-keeping workflows.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-white/10 pb-2">
                  <h3 className="font-syne font-bold text-sm text-white">
                    Movie Ticket Booking System
                  </h3>
                  <span className="font-mono text-cyan-400 text-[11px]">2025</span>
                </div>
                <ul className="space-y-1.5 text-gray-300 list-disc list-inside leading-relaxed font-inter">
                  <li>Engineered an interactive web application for browsing movies, selecting showtimes, choosing seats via an interactive layout matrix, and processing ticket reservations with instant booking confirmation.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Internship Experience & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Internship */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 border-b border-cyan-500/20 pb-1 flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> Internship Experience
              </h2>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1 text-xs">
                <div className="flex justify-between items-center">
                  <h3 className="font-syne font-bold text-white">Full Stack Web Development Intern</h3>
                  <span className="font-mono text-cyan-400 text-[11px]">Thiranex</span>
                </div>
                <p className="text-gray-300 text-[11px] leading-relaxed">
                  Gained hands-on exposure to full stack web development practices, tools, and workflows as part of an industry-oriented internship program.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 border-b border-purple-500/20 pb-1 flex items-center gap-2">
                <Award className="w-4 h-4" /> Certifications & Courses
              </h2>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs font-mono text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Python Foundation — Infosys Springboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Operating Systems — GUVI</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Generative AI — Future Skills Prime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Internet of Things — Cisco</span>
                </div>
              </div>
            </div>

          </div>

          {/* Areas of Interest */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 border-b border-white/10 pb-1">
              Areas of Interest
            </h2>
            <p className="text-xs font-mono text-cyan-300 leading-relaxed">
              Software Development • Web Development • Full Stack Development • Object-Oriented Programming • Data Structures & Algorithms • Database Management • REST APIs • Cloud Computing (Awareness) • Machine Learning & AI (Applied Interest)
            </p>
          </div>

          {/* Declaration */}
          <div className="pt-4 border-t border-white/10 text-xs font-mono text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="italic">"I declare that the information provided above is true and correct to the best of my knowledge."</p>
            <span className="font-bold text-white font-syne">— SARAVANAN P</span>
          </div>

        </div>

      </div>
    </div>
  );
};
