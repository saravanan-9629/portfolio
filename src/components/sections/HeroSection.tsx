import React from 'react';
import { FadeIn } from '../common/FadeIn';
import { ContactButton } from '../common/ContactButton';
import { Magnet } from '../common/Magnet';
import { Code2, FileText, Download } from 'lucide-react';


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

interface HeroSectionProps {
  onOpenResume?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <section id="hero" className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      
      {/* 1. Navbar Header */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <nav className="w-full flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* 2. Hero Heading */}
      <div className="w-full overflow-hidden z-20 mt-6 sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] text-center select-none">
            Hi, i&apos;m saravanan
          </h1>
        </FadeIn>
      </div>

      {/* 3. Hero Center Portrait Avatar with Magnet Effect */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out" className="w-full">
            <div className="relative w-full aspect-[4/5] rounded-[40px] sm:rounded-[50px] overflow-hidden bg-gradient-to-b from-[#1c222b] to-[#0a0d12] border-2 border-[#BBCCD7]/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group flex flex-col items-center justify-center p-6 text-center">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Developer Avatar Visual Card */}
              <div className="relative z-10 flex flex-col items-center space-y-4">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-cyan-400 via-purple-500 to-[#BBCCD7] p-1 shadow-[0_0_35px_rgba(0,243,255,0.4)]">
                  <div className="w-full h-full bg-[#0C0C0C] rounded-full overflow-hidden flex items-center justify-center">
                    <img
                      src="/saravanan.jpg"
                      alt="Saravanan P"
                      className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-xs sm:text-sm font-mono tracking-widest text-[#BBCCD7] uppercase">
                    Saravanan P
                  </span>
                  <h2 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                    Software Developer
                  </h2>
                  <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                    <Code2 className="w-3.5 h-3.5" /> B.Tech IT Student (3rd Year)
                  </div>
                </div>
              </div>

              {/* Overlay Tech Grid Graphic */}
              <div className="absolute bottom-4 left-6 right-6 flex justify-between text-[10px] font-mono text-[#D7E2EA]/60 uppercase tracking-widest border-t border-white/10 pt-2">
                <span>VSB Eng College</span>
                <span>CGPA 7.87</span>
              </div>
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* 4. Bottom Bar */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex items-end justify-between z-20">
        {/* Left Tagline */}
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[180px] sm:max-w-[240px] md:max-w-[300px] text-[clamp(0.75rem,1.4vw,1.5rem)]">
            I am a software developer & B.Tech IT student driven by building clean and functional software
          </p>
        </FadeIn>

        {/* Right Action Buttons: Resume, GitHub, LinkedIn, Contact */}
        <FadeIn delay={0.5} y={20}>
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap justify-end">
            <button
              onClick={() => (onOpenResume ? onOpenResume() : window.dispatchEvent(new CustomEvent('open-resume')))}
              className="px-4 py-2.5 sm:px-5 sm:py-3.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/25 border border-cyan-500/40 text-cyan-300 font-mono text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(0,243,255,0.25)]"
              title="View Interactive Resume & Downloads"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Resume</span>
              <Download className="w-3.5 h-3.5 opacity-70" />
            </button>
            <a
              href="https://github.com/saravanan-9629"
              target="_blank"
              rel="noreferrer"
              className="p-3 sm:p-3.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-cyan-400 hover:scale-110 transition-all duration-200"
              title="GitHub Profile"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/saravanan-p-22804232a/"
              target="_blank"
              rel="noreferrer"
              className="p-3 sm:p-3.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-purple-400 hover:scale-110 transition-all duration-200"
              title="LinkedIn Profile"
            >
              <LinkedinIcon />
            </a>
            <ContactButton />
          </div>
        </FadeIn>
      </div>

    </section>
  );
};
