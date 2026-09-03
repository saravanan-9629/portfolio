import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Code2, Sparkles, Send, Menu, X, FileText } from 'lucide-react';
import { setSoundEnabled, playClickSound, playHoverSound } from '../utils/audio';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [soundOn, setSoundOn] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    playClickSound();
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#05070e]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onMouseEnter={playHoverSound}
          onClick={playClickSound}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px] shadow-[0_0_15px_rgba(0,243,255,0.4)]">
            <div className="w-full h-full bg-[#070b14] rounded-[11px] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
              <Code2 className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors" />
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-syne font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Saravanan P
            </span>
            <span className="text-[10px] font-mono tracking-widest text-cyan-400/80 uppercase">
              B.Tech IT • Software Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 shadow-[0_0_12px_rgba(0,243,255,0.2)]'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            onMouseEnter={playHoverSound}
            aria-label="Toggle Sound Effects"
            className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.04] hover:bg-cyan-500/10 hover:border-cyan-500/40 flex items-center justify-center text-gray-400 hover:text-cyan-300 transition-all duration-200"
            title={soundOn ? 'Sound On' : 'Sound Muted'}
          >
            {soundOn ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4 text-gray-500" />}
          </button>

          {/* Resume Button */}
          <button
            onMouseEnter={playHoverSound}
            onClick={() => {
              playClickSound();
              window.dispatchEvent(new CustomEvent('open-resume'));
            }}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono transition-all duration-200"
            title="View Interactive Resume"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume</span>
          </button>

          {/* CTA Get In Touch */}
          <a
            href="#contact"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-syne font-semibold text-xs tracking-wider shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Contact Me</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 mx-4 p-4 rounded-2xl bg-[#090d19]/95 border border-cyan-500/30 backdrop-blur-2xl flex flex-col gap-2 shadow-2xl text-left">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                playClickSound();
                setMobileMenuOpen(false);
              }}
              className="px-4 py-2 rounded-xl text-sm font-medium text-gray-300 hover:text-cyan-300 hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => {
              playClickSound();
              setMobileMenuOpen(false);
            }}
            className="mt-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-syne font-bold text-xs uppercase tracking-widest"
          >
            <Send className="w-4 h-4" />
            <span>Get In Touch</span>
          </a>
        </div>
      )}
    </header>
  );
};
