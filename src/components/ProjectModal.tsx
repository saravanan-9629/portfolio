import React, { useState } from 'react';
import { X, ExternalLink, Terminal, CheckCircle2, Play, Cpu, Layers } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/audio';

const GithubIcon = () => (
  <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  problem: string;
  solution: string;
  features: string[];
  codeSnippet: string;
  githubUrl: string;
  liveUrl: string;
  gradient: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'simulation'>('overview');
  const [simOutput, setSimOutput] = useState<string>('Sandbox ready. Click "Run Test" to simulate pipeline execution.');

  if (!project) return null;

  const runSimulation = () => {
    playClickSound();
    setSimOutput('Initializing pipeline simulation...');
    setTimeout(() => {
      if (project.id === 'ai-sports') {
        setSimOutput(`[AI Pose Estimation Pipeline] Processing Video Input Stream...
> Extracting 33 Keypoint Coordinates (Body Pose Model v2.4)...
> Keypoint 15 (Wrist Left): [x: 0.42, y: 0.68, confidence: 0.98]
> Keypoint 23 (Hip Right):  [x: 0.51, y: 0.45, confidence: 0.96]
> Calculating Knee Flexion Angle: 118.4° (Optimal Jump Stance)
> Velocity Vector Analysis: Acceleration = 4.2m/s²
[RESULT SCORECARD GENERATED]
- Explosive Power Score: 88/100
- Stance Symmetry Ratio: 94.2%
- Overall Athletic Grade: A (High Potential)`);
      } else {
        setSimOutput(`[HRMS Database System] Initializing CRUD Transaction Matrix...
> Connection Established: EmployeeDB_v1 (SQLite/PostgreSQL)
> INSERT INTO Employee (id, name, department, salary) VALUES ('EMP-402', 'Saravanan P', 'Engineering', 75000);
> Query Status: SUCCESS (Rows Affected: 1, Latency: 1.4ms)
> Executing Payroll Calculation for Department 'Engineering'...
> Gross Salary: $75,000 | Deductions: 12% | Net Payable: $66,000
> Attendance Sync: 22 Days Worked / 0 Unexcused Absences
[SUCCESS] Payroll & Attendance Audit Log Verified.`);
      }
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel-glow border border-cyan-500/40 p-6 sm:p-8 space-y-6 text-left shadow-[0_0_80px_rgba(0,243,255,0.25)]">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-4">
          <div className="space-y-1">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">
              {project.category} Case Study
            </span>
            <h2 className="font-syne font-extrabold text-2xl sm:text-3xl text-white mt-2">
              {project.title}
            </h2>
            <p className="text-sm text-gray-400">{project.subtitle}</p>
          </div>

          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            onMouseEnter={playHoverSound}
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-red-500/20 hover:border-red-500/40 flex items-center justify-center text-gray-400 hover:text-red-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex gap-3 border-b border-white/10 pb-2">
          <button
            onClick={() => {
              playClickSound();
              setActiveTab('overview');
            }}
            className={`px-4 py-1.5 rounded-lg text-xs font-mono tracking-wider uppercase transition-colors ${
              activeTab === 'overview'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Project Breakdown
          </button>
          <button
            onClick={() => {
              playClickSound();
              setActiveTab('simulation');
            }}
            className={`px-4 py-1.5 rounded-lg text-xs font-mono tracking-wider uppercase flex items-center gap-1.5 transition-colors ${
              activeTab === 'simulation'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" /> Interactive Sandbox Demo
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' ? (
          <div className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.metrics.map((m) => (
                <div key={m.label} className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                  <div className="font-syne font-bold text-lg text-cyan-300">{m.value}</div>
                  <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                <h3 className="font-syne font-bold text-sm text-purple-400 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4" /> Problem Statement
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-inter">{project.problem}</p>
              </div>

              <div className="p-5 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 space-y-2">
                <h3 className="font-syne font-bold text-sm text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> Technical Solution
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-inter">{project.solution}</p>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h3 className="font-syne font-bold text-sm text-white uppercase tracking-wider">Key Functional Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-xs text-gray-300 bg-white/[0.02] p-2.5 rounded-lg border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Interactive Simulation Sandbox */
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-[#070b14] border border-cyan-500/30 font-mono text-xs text-gray-300 space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-cyan-400">Simulation Environment // {project.title}</span>
                <button
                  onClick={runSimulation}
                  className="px-3 py-1 rounded bg-cyan-500 text-black font-bold text-[11px] hover:bg-cyan-400 flex items-center gap-1.5 transition-all"
                >
                  <Play className="w-3 h-3 fill-black" /> Run Test Flow
                </button>
              </div>

              <pre className="text-emerald-400 overflow-x-auto p-3 rounded bg-black/60 border border-white/5 font-mono leading-relaxed text-[11px] min-h-[140px] whitespace-pre-wrap">
                {simOutput}
              </pre>

              <div className="text-[10px] text-gray-500">
                Implementation Code Snippet:
              </div>
              <pre className="text-gray-400 overflow-x-auto p-3 rounded bg-black/80 border border-white/5 font-mono text-[10px] whitespace-pre">
                {project.codeSnippet}
              </pre>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex items-center justify-between border-t border-white/10 pt-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-gray-400 border border-white/10">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={playClickSound}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-mono flex items-center gap-2 border border-white/10 transition-colors"
            >
              <GithubIcon /> Code Repository
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={playClickSound}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-syne font-bold tracking-wider uppercase flex items-center gap-2 shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all hover:scale-105"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo Page
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
