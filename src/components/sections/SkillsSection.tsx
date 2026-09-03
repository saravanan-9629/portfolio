import React from 'react';
import { FadeIn } from '../common/FadeIn';

interface SkillCategory {
  number: string;
  title: string;
  description: string;
}

const skillCategories: SkillCategory[] = [
  {
    number: '01',
    title: 'Programming Languages',
    description:
      'Proficient in Python and Java (Core), with strong fundamentals in syntax, logic building, and problem solving across software paradigms.',
  },
  {
    number: '02',
    title: 'Data Structures & OOPs',
    description:
      'Solid grounding in Data Structures, Algorithms, and Object-Oriented Programming (OOPs), applied to writing efficient, modular, and maintainable code.',
  },
  {
    number: '03',
    title: 'Web Development',
    description:
      'Building responsive, functional interfaces with HTML5, CSS3, and JavaScript -- from MVP landing pages to full application flows.',
  },
  {
    number: '04',
    title: 'Database Management System (DBMS)',
    description:
      'Hands-on experience with DBMS & SQL fundamentals, relational database schema modeling, normalization, and structured CRUD application design.',
  },
  {
    number: '05',
    title: 'Tools & Collaboration',
    description:
      'Comfortable working with MySQL, VS Code, Postman, and Linux, with a collaborative, agile-minded approach to software engineering.',
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full relative z-10"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="font-black uppercase tracking-tight leading-none text-[#0C0C0C] text-[clamp(3rem,12vw,160px)] text-center mb-16 sm:mb-20 md:mb-28">
            Skills
          </h2>
        </FadeIn>

        {/* 5 Vertical Skill Categories */}
        <div className="w-full flex flex-col divide-y divide-[#0C0C0C]/15 border-t border-b border-[#0C0C0C]/15">
          {skillCategories.map((cat, idx) => (
            <FadeIn key={cat.number} delay={idx * 0.1} y={30}>
              <div className="py-8 sm:py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 group hover:bg-[#0C0C0C]/[0.02] transition-colors px-2 rounded-2xl">
                
                {/* Left Number */}
                <div className="font-black text-[#0C0C0C] leading-none text-[clamp(3rem,10vw,140px)] select-none shrink-0 opacity-90 group-hover:opacity-100 transition-opacity">
                  {cat.number}
                </div>

                {/* Right Name + Description Stack */}
                <div className="flex flex-col gap-2 max-w-2xl text-left">
                  <h3 className="font-medium uppercase tracking-tight text-[#0C0C0C] text-[clamp(1rem,2.2vw,2.1rem)]">
                    {cat.title}
                  </h3>
                  <p className="font-light text-[#0C0C0C] opacity-60 leading-relaxed text-[clamp(0.85rem,1.6vw,1.25rem)]">
                    {cat.description}
                  </p>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
