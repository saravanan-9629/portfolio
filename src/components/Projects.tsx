import React, { useState } from 'react';
import { Briefcase, ArrowUpRight, Sparkles } from 'lucide-react';
import { ProjectModal, type ProjectData } from './ProjectModal';
import { playClickSound, playHoverSound } from '../utils/audio';

export const projectsList: ProjectData[] = [
  {
    id: 'ai-sports',
    title: 'AI-Powered Sports Talent Assessment Platform',
    subtitle: 'Mobile platform concept leveraging AI pose estimation for objective athletic evaluation in underserved regions.',
    category: 'AI & Mobile Web',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'AI Pose Estimation', 'Video Analysis', 'Mobile UI'],
    metrics: [
      { label: 'Evaluation Cost', value: '-90%' },
      { label: 'Keypoints Analyzed', value: '33 Body Poses' },
      { label: 'Pipeline Speed', value: 'Real-time' },
      { label: 'Target Audience', value: 'Underserved Regions' },
    ],
    problem: 'Athletes in remote or underfunded regions lack access to expensive sports biomechanics labs and scouts, resulting in undiscovered athletic talent.',
    solution: 'Designed and built a functional MVP landing page with animated AI biomechanics visualization, video upload demo flow, and simulated pose analysis output generating objective athletic scorecards.',
    features: [
      'Interactive MVP web interface showcasing video upload and AI pose tracking',
      'Simulated 33-point body keypoint pose analysis pipeline',
      'Automated athletic scorecard generation (jump velocity, agility, stance symmetry)',
      'Mobile-first responsive layout optimized for low-bandwidth environments',
    ],
    codeSnippet: `// Pose Analysis Video Upload Simulator
function processSportsVideo(videoFile) {
  const poseEstimator = new AIModel('pose_detection_v2');
  return poseEstimator.detectKeypoints(videoFile)
    .then(keypoints => calculateScorecard(keypoints));
}`,
    githubUrl: 'https://github.com/saravanan-9629',
    liveUrl: '#',
    gradient: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
  },
  {
    id: 'hrms-app',
    title: 'Human Resource Management System',
    subtitle: 'Structured application managing core HR operations: employee data, attendance, and payroll processing.',
    category: 'Web & Database Systems',
    tags: ['DBMS', 'SQL', 'CRUD Operations', 'Java/Python Backend', 'Database Architecture'],
    metrics: [
      { label: 'CRUD Latency', value: '1.4ms' },
      { label: 'Data Integrity', value: '100% ACID' },
      { label: 'Modules Built', value: '3 (HR, Payroll, Attendance)' },
      { label: 'Schema Quality', value: 'Normalized (3NF)' },
    ],
    problem: 'Manual employee record tracking leads to data duplication, payroll calculation errors, and inefficient attendance auditing.',
    solution: 'Engineered an HRMS application with structured relational database tables, implementing complete Create-Read-Update-Delete (CRUD) data handling for streamlined HR management.',
    features: [
      'Comprehensive CRUD interface for employee registration, updates, and records',
      'Automated monthly salary calculation module considering attendance and deductions',
      'Normalized relational database schema (3NF) ensuring data integrity',
      'Search and filter capabilities by department, employee ID, and job title',
    ],
    codeSnippet: `// SQL Employee Registration & Database CRUD
INSERT INTO Employees (emp_id, full_name, department, base_salary)
VALUES (?, ?, ?, ?);

-- Attendance Sync Query
SELECT e.emp_id, COUNT(a.status) as days_worked
FROM Employees e JOIN Attendance a ON e.emp_id = a.emp_id
WHERE a.status = 'PRESENT' GROUP BY e.emp_id;`,
    githubUrl: 'https://github.com/saravanan-9629',
    liveUrl: '#',
    gradient: 'from-purple-500/20 via-purple-500/5 to-transparent',
  },
  {
    id: 'movie-booking',
    title: 'Movie Ticket Booking System',
    subtitle: 'Interactive web application for browsing movies, choosing showtimes, selecting seats, and booking tickets online.',
    category: 'Full Stack & Web Application',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'DBMS', 'SQL', 'Seat Selection', 'State Management'],
    metrics: [
      { label: 'Booking Speed', value: '< 2 seconds' },
      { label: 'Seat Selection', value: 'Interactive Grid' },
      { label: 'Confirmation', value: 'Instant E-Ticket' },
      { label: 'User Flow', value: '3-Step Checkout' },
    ],
    problem: 'Traditional cinema ticketing systems can have confusing interfaces, delayed seat availability updates, and cumbersome checkout steps.',
    solution: 'Engineered a modern web-based Movie Ticket Booking System featuring an intuitive movie catalog, dynamic showtime selection, real-time seat matrix grid, automated price calculator, and instant booking summary output.',
    features: [
      'Interactive visual seat selection grid with real-time seat locking (Available, Selected, Booked)',
      'Movie catalog with genre filter, trailer preview modals, and multi-theater showtime slots',
      'Dynamic ticket pricing calculator including convenience fees and discount voucher inputs',
      'Instant digital ticket generation with unique Booking Reference ID and QR Code visual',
    ],
    codeSnippet: `// Movie Seat Reservation Controller
function reserveMovieSeats(movieId, showtimeId, seatArray) {
  return db.transaction(async (trx) => {
    const isAvailable = await checkSeatsAvailable(trx, showtimeId, seatArray);
    if (!isAvailable) throw new Error('Selected seats no longer available');
    
    const booking = await createBooking(trx, { movieId, showtimeId, seatArray });
    return generateETicket(booking);
  });
}`,
    githubUrl: 'https://github.com/saravanan-9629',
    liveUrl: '#',
    gradient: 'from-amber-500/20 via-amber-500/5 to-transparent',
  },
];

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" className="py-24 relative w-full bg-cyber-grid overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-widest">
              <Briefcase className="w-3.5 h-3.5" />
              <span>02 // Practical Projects & Case Studies</span>
            </div>

            <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Featured Case <span className="gradient-text-cyan">Studies</span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base font-inter max-w-xl">
              Hands-on projects demonstrating AI pose estimation concepts, mobile UI development, and database CRUD engineering.
            </p>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsList.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                playClickSound();
                setSelectedProject(project);
              }}
              onMouseEnter={playHoverSound}
              className="group relative rounded-3xl glass-panel border border-white/10 hover:border-cyan-400/50 p-7 space-y-6 cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.4)] overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              {/* Badges */}
              <div className="flex items-center justify-between relative z-10">
                <span className="text-[11px] font-mono tracking-widest text-cyan-300 uppercase px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                  {project.category}
                </span>

                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-cyan-300 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-syne font-extrabold text-2xl text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 font-inter leading-relaxed line-clamp-2">
                  {project.subtitle}
                </p>
              </div>

              {/* Metrics Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-2 relative z-10">
                {project.metrics.slice(0, 2).map((m) => (
                  <div key={m.label} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-left">
                    <div className="font-syne font-bold text-base text-cyan-300">{m.value}</div>
                    <div className="text-[10px] font-mono text-gray-400 uppercase">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 relative z-10">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-gray-300 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer Click Hint */}
              <div className="pt-2 flex items-center justify-between text-xs font-mono text-cyan-400 group-hover:text-cyan-300 relative z-10 border-t border-white/5">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> View Case Breakdown & Sandbox Demo
                </span>
                <span className="underline uppercase tracking-wider text-[10px]">Read Case Study →</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
