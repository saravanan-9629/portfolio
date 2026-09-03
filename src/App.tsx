import { useState, useEffect } from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { Footer } from './components/sections/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleOpenResume = () => setIsResumeOpen(true);
    window.addEventListener('open-resume', handleOpenResume);
    
    // Check hash URL
    if (window.location.hash === '#resume') {
      setIsResumeOpen(true);
    }
    
    return () => window.removeEventListener('open-resume', handleOpenResume);
  }, []);

  return (
    <div className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-kanit overflow-x-clip select-none">
      {/* 1. HERO SECTION */}
      <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

      {/* 2. MARQUEE SECTION */}
      <MarqueeSection />

      {/* 3. ABOUT SECTION */}
      <AboutSection onOpenResume={() => setIsResumeOpen(true)} />

      {/* 4. SERVICES / SKILLS SECTION */}
      <SkillsSection />

      {/* 5. PROJECTS SECTION */}
      <ProjectsSection />

      {/* 6. FOOTER / CONTACT */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* 7. INTERACTIVE SINGLE-PAGE RESUME MODAL */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}

export default App;
