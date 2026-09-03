import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../common/FadeIn';
import { ViewProjectButton } from '../common/ViewProjectButton';
import { Activity, Database, CheckCircle2, Terminal, Users, Cpu, FileSpreadsheet, Ticket, Film, CreditCard } from 'lucide-react';


interface Project {
  number: string;
  title: string;
  category: string;
  period: string;
  description: string;
  techTags: string[];
  link: string;
  leftTopVisual: React.ReactNode;
  leftBottomVisual: React.ReactNode;
  rightTallVisual: React.ReactNode;
}

const projects: Project[] = [
  {
    number: '01',
    title: 'AI-Powered Sports Talent Assessment Platform',
    category: 'Personal Project // AI & Web',
    period: '2025 – 2026',
    description:
      'A mobile platform concept using AI-based pose estimation for objective, low-cost athletic performance assessment in underserved regions. Built a functional MVP landing page (HTML5, CSS3, JavaScript) with an animated AI visualization, video-upload demo flow, and simulated analysis pipeline with scorecard output.',
    techTags: ['HTML5', 'CSS3', 'JavaScript', 'AI Pose Estimation', 'Video Analysis'],
    link: 'https://github.com/saravanan-9629',
    leftTopVisual: (
      <div className="w-full h-full p-5 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#141821] border border-cyan-500/30 flex flex-col justify-between text-left">
        <div className="flex items-center justify-between text-cyan-400">
          <Activity className="w-6 h-6 sm:w-8 sm:h-8" />
          <span className="text-[10px] font-mono uppercase bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/30">
            Pose Tracking MVP
          </span>
        </div>
        <div>
          <h4 className="font-syne font-bold text-sm sm:text-base text-white">Video Upload Pipeline</h4>
          <p className="text-[11px] font-mono text-gray-400">33-Point Keypoint Detection</p>
        </div>
      </div>
    ),
    leftBottomVisual: (
      <div className="w-full h-full p-5 sm:p-6 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#090d16] border border-purple-500/30 flex flex-col justify-between text-left">
        <div className="flex items-center justify-between text-purple-400">
          <Cpu className="w-6 h-6 sm:w-8 sm:h-8" />
          <span className="text-[10px] font-mono uppercase bg-purple-500/10 px-2.5 py-0.5 rounded border border-purple-500/30">
            AI Scorecard Output
          </span>
        </div>
        <div className="space-y-2">
          <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" /> Jump Velocity: 4.2m/s (Grade A)
          </div>
          <div className="text-[11px] font-mono text-gray-300">
            Stance Symmetry: 94.2% | Agility Index: High
          </div>
        </div>
      </div>
    ),
    rightTallVisual: (
      <div className="w-full h-full p-6 sm:p-8 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-gradient-to-b from-[#141924] to-[#070a0f] border border-cyan-400/40 flex flex-col justify-between text-left relative overflow-hidden">
        <div className="space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5" /> Biomechanics Simulator
          </div>
          <h3 className="font-syne font-extrabold text-xl sm:text-2xl text-white">
            Democratizing Athletic Assessment
          </h3>
          <p className="text-xs text-gray-400 font-inter leading-relaxed">
            Designed for rural and underserved sports academies where expensive biomechanical labs are inaccessible.
          </p>
        </div>

        <pre className="p-4 rounded-2xl bg-black/80 border border-white/10 font-mono text-[11px] text-cyan-300 overflow-x-auto relative z-10 whitespace-pre">
          {`// Pose Analysis Output
{
  "keypoints": 33,
  "confidence": 0.98,
  "knee_flexion_deg": 118.4,
  "score": "A (High Talent)"
}`}
        </pre>

        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest relative z-10">
          HTML5 • CSS3 • JavaScript • AI Concepts
        </div>
      </div>
    ),
  },
  {
    number: '02',
    title: 'Human Resource Management System',
    category: 'Academic Project // Database & Backend',
    period: '2024 – 2025',
    description:
      'An application to manage core HR functions -- employee records, attendance, and payroll data -- using structured data handling. Implemented full CRUD operations for employee data management, demonstrating practical database design and record-keeping workflows.',
    techTags: ['DBMS', 'SQL', 'CRUD Operations', 'Java/Python Core', 'Relational Schema'],
    link: 'https://github.com/saravanan-9629',
    leftTopVisual: (
      <div className="w-full h-full p-5 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#141821] border border-purple-500/30 flex flex-col justify-between text-left">
        <div className="flex items-center justify-between text-purple-400">
          <Users className="w-6 h-6 sm:w-8 sm:h-8" />
          <span className="text-[10px] font-mono uppercase bg-purple-500/10 px-2.5 py-0.5 rounded border border-purple-500/30">
            HR Records Matrix
          </span>
        </div>
        <div>
          <h4 className="font-syne font-bold text-sm sm:text-base text-white">Employee CRUD Interface</h4>
          <p className="text-[11px] font-mono text-gray-400">Structured Data Handling</p>
        </div>
      </div>
    ),
    leftBottomVisual: (
      <div className="w-full h-full p-5 sm:p-6 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#090d16] border border-emerald-500/30 flex flex-col justify-between text-left">
        <div className="flex items-center justify-between text-emerald-400">
          <FileSpreadsheet className="w-6 h-6 sm:w-8 sm:h-8" />
          <span className="text-[10px] font-mono uppercase bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/30">
            Payroll & Attendance
          </span>
        </div>
        <div className="space-y-2">
          <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" /> Attendance Sync & Net Payable
          </div>
          <div className="text-[11px] font-mono text-gray-300">
            Automated Salary Auditing | Normalized 3NF Tables
          </div>
        </div>
      </div>
    ),
    rightTallVisual: (
      <div className="w-full h-full p-6 sm:p-8 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-gradient-to-b from-[#191424] to-[#0a0712] border border-purple-400/40 flex flex-col justify-between text-left relative overflow-hidden">
        <div className="space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono">
            <Database className="w-3.5 h-3.5" /> Relational DB Engine
          </div>
          <h3 className="font-syne font-extrabold text-xl sm:text-2xl text-white">
            Enterprise Employee Architecture
          </h3>
          <p className="text-xs text-gray-400 font-inter leading-relaxed">
            Eliminates data duplication through 3NF schema normalization and parameterized transaction queries.
          </p>
        </div>

        <pre className="p-4 rounded-2xl bg-black/80 border border-white/10 font-mono text-[11px] text-purple-300 overflow-x-auto relative z-10 whitespace-pre">
          {`-- Employee Registration SQL Query
INSERT INTO Employees 
(emp_id, full_name, department, salary) 
VALUES ('EMP-102', 'Saravanan P', 'IT', 75000);`}
        </pre>

        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest relative z-10">
          DBMS • SQL • CRUD Operations • Database Design
        </div>
      </div>
    ),
  },
  {
    number: '03',
    title: 'Movie Ticket Booking System',
    category: 'Full Stack // Web Application',
    period: '2025',
    description:
      'An interactive web application for browsing movies, selecting showtimes, choosing seats via an interactive layout matrix, and processing ticket reservations with instant booking confirmation.',
    techTags: ['React', 'TypeScript', 'Tailwind CSS', 'DBMS / SQL', 'Seat Matrix', 'State Management'],
    link: 'https://github.com/saravanan-9629',
    leftTopVisual: (
      <div className="w-full h-full p-5 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#141821] border border-amber-500/30 flex flex-col justify-between text-left">
        <div className="flex items-center justify-between text-amber-400">
          <Ticket className="w-6 h-6 sm:w-8 sm:h-8" />
          <span className="text-[10px] font-mono uppercase bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/30">
            Seat Layout Matrix
          </span>
        </div>
        <div>
          <h4 className="font-syne font-bold text-sm sm:text-base text-white">Interactive Seat Selection</h4>
          <p className="text-[11px] font-mono text-gray-400">Real-time Seat Locking & Availability</p>
        </div>
      </div>
    ),
    leftBottomVisual: (
      <div className="w-full h-full p-5 sm:p-6 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#090d16] border border-cyan-500/30 flex flex-col justify-between text-left">
        <div className="flex items-center justify-between text-cyan-400">
          <CreditCard className="w-6 h-6 sm:w-8 sm:h-8" />
          <span className="text-[10px] font-mono uppercase bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/30">
            Checkout & E-Ticket
          </span>
        </div>
        <div className="space-y-2">
          <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" /> Instant E-Ticket & QR Confirmation
          </div>
          <div className="text-[11px] font-mono text-gray-300">
            Automated Pricing | Multi-Showtime Scheduler
          </div>
        </div>
      </div>
    ),
    rightTallVisual: (
      <div className="w-full h-full p-6 sm:p-8 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-gradient-to-b from-[#241914] to-[#120a07] border border-amber-400/40 flex flex-col justify-between text-left relative overflow-hidden">
        <div className="space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
            <Film className="w-3.5 h-3.5" /> Cinema Ticketing Engine
          </div>
          <h3 className="font-syne font-extrabold text-xl sm:text-2xl text-white">
            Seamless Cinema Reservation System
          </h3>
          <p className="text-xs text-gray-400 font-inter leading-relaxed">
            Provides real-time seat status synchronization, dynamic total pricing calculation, category filtering, and booking record persistence.
          </p>
        </div>

        <pre className="p-4 rounded-2xl bg-black/80 border border-white/10 font-mono text-[11px] text-amber-300 overflow-x-auto relative z-10 whitespace-pre">
          {`// Ticket Booking & Seat Locking Controller
interface SeatBooking {
  movieId: "M-402",
  showtime: "07:30 PM",
  seats: ["F12", "F13"],
  totalAmount: 480,
  status: "CONFIRMED"
}`}
        </pre>

        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest relative z-10">
          React • TypeScript • Tailwind CSS • SQL / State Management
        </div>
      </div>
    ),
  },
];

const ProjectCardItem: React.FC<{
  project: Project;
  index: number;
  totalCards: number;
  progress: any;
}> = ({ project, index, totalCards, progress }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / totalCards, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky top-24 md:top-32 h-[85vh] w-full flex items-center justify-center mb-8"
      style={{ top: `${index * 28 + 96}px` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
      >
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4 sm:pb-6 text-left">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-black text-[#D7E2EA] leading-none text-[clamp(2.5rem,6vw,80px)]">
              {project.number}
            </span>
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                {project.category} • {project.period}
              </span>
              <h3 className="font-syne font-extrabold text-xl sm:text-2xl md:text-3xl text-white">
                {project.title}
              </h3>
            </div>
          </div>

          <ViewProjectButton href={project.link} label="View Project" />
        </div>

        {/* Bottom Row: 2-Column Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 flex-1 mt-4 sm:mt-6 overflow-hidden">
          
          {/* Left Column (40% width): 2 Stacked Visual Blocks */}
          <div className="md:col-span-5 flex flex-col gap-4 h-full">
            <div className="h-[clamp(130px,16vw,230px)] w-full">
              {project.leftTopVisual}
            </div>
            <div className="flex-1 h-[clamp(160px,22vw,340px)] w-full">
              {project.leftBottomVisual}
            </div>
          </div>

          {/* Right Column (60% width): 1 Tall Visual Block */}
          <div className="md:col-span-7 h-full">
            {project.rightTallVisual}
          </div>

        </div>

        {/* Tech Tags Bar */}
        <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10 mt-3 text-left">
          {project.techTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-white/5 text-[11px] font-mono text-gray-300 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 relative z-10 w-full min-h-screen"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)] text-center mb-16 sm:mb-20">
            Projects
          </h2>
        </FadeIn>

        {/* 2 Sticky-Stacking Project Cards */}
        <div className="w-full relative">
          {projects.map((project, idx) => (
            <ProjectCardItem
              key={project.number}
              project={project}
              index={idx}
              totalCards={projects.length}
              progress={scrollYProgress}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
