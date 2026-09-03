import React from 'react';
import { Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { playHoverSound } from '../utils/audio';

export const Certifications: React.FC = () => {
  const certs = [
    {
      title: 'Python Foundation',
      issuer: 'Infosys Springboard',
      category: 'Programming & Logic',
      color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-300',
      iconColor: 'text-cyan-400',
    },
    {
      title: 'Operating Systems',
      issuer: 'GUVI',
      category: 'Computer Science Core',
      color: 'from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-purple-300',
      iconColor: 'text-purple-400',
    },
    {
      title: 'Generative AI',
      issuer: 'Future Skills Prime',
      category: 'AI Concepts',
      color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-300',
      iconColor: 'text-emerald-400',
    },
    {
      title: 'Internet of Things (IoT)',
      issuer: 'Cisco',
      category: 'Embedded & Networking',
      color: 'from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-300',
      iconColor: 'text-amber-400',
    },
  ];

  return (
    <section id="certifications" className="py-16 relative w-full bg-[#05070e] overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" />
              <span>05 // Verified Certifications</span>
            </div>
            <h2 className="font-syne font-extrabold text-2xl sm:text-3xl text-white">
              Professional Credentials & <span className="gradient-text-cyan">Certificates</span>
            </h2>
          </div>

          <span className="text-xs font-mono text-gray-400">
            Issued by Industry Recognized Platforms
          </span>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((cert) => (
            <div
              key={cert.title}
              onMouseEnter={playHoverSound}
              className={`p-5 rounded-2xl bg-gradient-to-br ${cert.color} glass-panel border transition-all duration-300 hover:-translate-y-1 text-left space-y-3 group shadow-[0_4px_20px_rgba(0,0,0,0.3)]`}
            >
              <div className="flex items-center justify-between">
                <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${cert.iconColor}`}>
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                  Verified
                </span>
              </div>

              <div>
                <h3 className="font-syne font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-gray-300 mt-0.5">{cert.issuer}</p>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle className="w-3 h-3" /> {cert.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
