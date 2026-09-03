import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowUp, Copy, Check, FileText, Download } from 'lucide-react';
import { ContactButton } from '../common/ContactButton';


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

interface FooterProps {
  onOpenResume?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const emailText = 'saravanan2007p@gmail.com';
  const phoneText = '+91 8072117461';

  const copyText = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0C0C0C] text-[#D7E2EA] pt-20 pb-12 px-5 sm:px-8 md:px-10 border-t border-white/10 w-full relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 text-left">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              Available For Internship & Entry-Level Roles
            </span>
            <h2 className="hero-heading font-black uppercase text-3xl sm:text-4xl md:text-5xl">
              Let&apos;s Connect & Build
            </h2>
          </div>

          <ContactButton />
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* Email */}
          <div className="p-5 rounded-2xl bg-[#141821] border border-white/10 flex flex-col justify-between gap-3">
            <div className="flex items-center justify-between">
              <Mail className="w-5 h-5 text-cyan-400" />
              <button
                onClick={() => copyText(emailText, 'email')}
                className="text-[10px] font-mono text-gray-400 hover:text-cyan-300 flex items-center gap-1"
              >
                {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                {copiedEmail ? 'Copied' : 'Copy'}
              </button>
            </div>
            <div>
              <span className="text-[10px] font-mono text-gray-500 uppercase">Direct Email</span>
              <p className="text-xs font-mono text-white truncate">{emailText}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="p-5 rounded-2xl bg-[#141821] border border-white/10 flex flex-col justify-between gap-3">
            <div className="flex items-center justify-between">
              <Phone className="w-5 h-5 text-purple-400" />
              <button
                onClick={() => copyText(phoneText, 'phone')}
                className="text-[10px] font-mono text-gray-400 hover:text-purple-300 flex items-center gap-1"
              >
                {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                {copiedPhone ? 'Copied' : 'Copy'}
              </button>
            </div>
            <div>
              <span className="text-[10px] font-mono text-gray-500 uppercase">Phone & WhatsApp</span>
              <p className="text-xs font-mono text-white">{phoneText}</p>
            </div>
          </div>

          {/* Location */}
          <div className="p-5 rounded-2xl bg-[#141821] border border-white/10 flex flex-col justify-between gap-3">
            <MapPin className="w-5 h-5 text-emerald-400" />
            <div>
              <span className="text-[10px] font-mono text-gray-500 uppercase">Location</span>
              <p className="text-xs font-mono text-white">Namakkal, Tamil Nadu, India</p>
            </div>
          </div>

          {/* Social Profiles & Resume */}
          <div className="p-5 rounded-2xl bg-[#141821] border border-white/10 flex flex-col justify-between gap-3">
            <span className="text-[10px] font-mono text-gray-500 uppercase">Social & Resume</span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/saravanan-9629"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-cyan-400"
                title="GitHub Profile"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/saravanan-p-22804232a/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-purple-400"
                title="LinkedIn Profile"
              >
                <LinkedinIcon />
              </a>
              <button
                onClick={() => (onOpenResume ? onOpenResume() : window.dispatchEvent(new CustomEvent('open-resume')))}
                className="p-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-mono flex items-center gap-1 transition-colors"
                title="View Interactive Resume"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>View CV</span>
              </button>
              <a
                href="/Saravanan_P_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 text-[10px] font-mono flex items-center gap-1 transition-colors"
                title="View Resume PDF"
              >
                <span>PDF</span>
              </a>
              <a
                href="/Saravanan_P_Resume.docx"
                download
                className="p-2 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] font-mono flex items-center gap-1 transition-colors"
                title="Download Resume Word (.docx)"
              >
                <Download className="w-3.5 h-3.5 text-purple-400" />
                <span>Word</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs font-mono text-[#D7E2EA]/60">
          <span>Saravanan P &copy; 2026. All Rights Reserved.</span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
