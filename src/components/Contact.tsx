import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playClickSound, playHoverSound } from '../utils/audio';

const GithubIcon = () => (
  <svg className="w-5 h-5 text-cyan-400 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5 text-purple-400 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Internship / Entry-Level Opportunity',
    message: '',
  });

  const emailText = 'saravanan2007p@gmail.com';
  const phoneText = '+91 8072117461';

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    playClickSound();
    navigator.clipboard.writeText(text);

    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00f3ff', '#8a2be2', '#00ff9d'],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClickSound();
    setSubmitted(true);

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#00f3ff', '#8a2be2', '#00ff9d'],
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'Internship / Entry-Level Opportunity', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative w-full bg-cyber-grid overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>06 // Connect & Opportunities</span>
          </div>

          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Let’s Build Something <span className="gradient-text-cyan">Remarkable</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base font-inter">
            Open for Internship & Entry-Level Software Developer / Web Developer roles. Get in touch directly!
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Email Card */}
            <div className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-cyan-500/40 transition-all space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={() => copyToClipboard(emailText, 'email')}
                  onMouseEnter={playHoverSound}
                  className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-cyan-500/20 text-xs font-mono text-cyan-300 border border-white/10 flex items-center gap-1.5 transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
                </button>
              </div>

              <div>
                <span className="text-[11px] font-mono text-gray-400 uppercase tracking-widest">Email Address</span>
                <h3 className="font-syne font-bold text-lg text-white mt-0.5">{emailText}</h3>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-purple-500/40 transition-all space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Phone className="w-6 h-6" />
                </div>
                <button
                  onClick={() => copyToClipboard(phoneText, 'phone')}
                  onMouseEnter={playHoverSound}
                  className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-purple-500/20 text-xs font-mono text-purple-300 border border-white/10 flex items-center gap-1.5 transition-colors"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied!' : 'Copy Phone'}</span>
                </button>
              </div>

              <div>
                <span className="text-[11px] font-mono text-gray-400 uppercase tracking-widest">Phone / WhatsApp</span>
                <h3 className="font-syne font-bold text-lg text-white mt-0.5">{phoneText}</h3>
              </div>
            </div>

            {/* Location & Social Profiles */}
            <div className="p-6 rounded-3xl glass-panel border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                <MapPin className="w-4 h-4 text-purple-400" /> Namakkal, Tamil Nadu, India
              </div>
              
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="https://github.com/saravanan-9629"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                  className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-3 text-white transition-colors"
                >
                  <GithubIcon />
                  <span className="text-xs font-syne font-bold">GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/saravanan-p-22804232a/"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                  className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-3 text-white transition-colors"
                >
                  <LinkedinIcon />
                  <span className="text-xs font-syne font-bold">LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 p-8 rounded-3xl glass-panel-glow border border-cyan-500/30 text-left space-y-6 shadow-[0_0_50px_rgba(0,0,0,0.6)]">
            
            <div className="space-y-1">
              <h3 className="font-syne font-extrabold text-2xl text-white">Send a Direct Message</h3>
              <p className="text-xs text-gray-400">Feel free to ask questions or discuss internship opportunities.</p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-center space-y-3 animate-fadeIn">
                <Sparkles className="w-10 h-10 text-cyan-400 mx-auto" />
                <h4 className="font-syne font-bold text-xl text-white">Message Transmitted!</h4>
                <p className="text-xs text-cyan-300 font-mono">
                  Thank you for reaching out! Saravanan will get back to you promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-gray-300 uppercase">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hiring Manager / Recruiter"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-xs font-inter transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-gray-300 uppercase">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-xs font-inter transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-gray-300 uppercase">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Software Dev Internship / Entry-Level Role"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-xs font-inter transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-gray-300 uppercase">Your Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your message or role details here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-xs font-inter transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  onMouseEnter={playHoverSound}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-syne font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,243,255,0.4)] hover:shadow-[0_0_35px_rgba(0,243,255,0.7)] transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
