import React, { useState } from 'react';
import { Terminal, CheckCircle2, Wrench } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/audio';

interface SkillItem {
  name: string;
  category: 'Languages' | 'Core Concepts' | 'Tools' | 'Soft Skills';
  level: number;
  experience: string;
  icon: string;
  description: string;
  codeSnippet: string;
}

const skillsData: SkillItem[] = [
  // Languages
  {
    name: 'DBMS & SQL',
    category: 'Languages',
    level: 90,
    experience: 'Database Systems & Queries',
    icon: '🗄️',
    description: 'Relational database schema modeling, primary/foreign key normalization (1NF to 3NF), complex joins, and SQL CRUD query optimization.',
    codeSnippet: 'SELECT emp_id, full_name, department\nFROM Employees\nWHERE status = "ACTIVE"\nORDER BY join_date DESC;',
  },
  {
    name: 'Python',
    category: 'Languages',
    level: 86,
    experience: 'Scripting & AI Concepts',
    icon: '🐍',
    description: 'Proficient in Python scripting, data processing, object-oriented concepts, and basic machine learning/pose estimation libraries.',
    codeSnippet: 'class SportsAssessment:\n    def __init__(self, keypoints):\n        self.keypoints = keypoints\n    def evaluate_jump(self):\n        return sum(self.keypoints) / len(self.keypoints)',
  },
  {
    name: 'Java',
    category: 'Languages',
    level: 85,
    experience: 'Object-Oriented Focus',
    icon: '☕',
    description: 'Strong understanding of Java OOP principles (Inheritance, Polymorphism, Encapsulation, Abstraction) and collections.',
    codeSnippet: 'public class EmployeeManager {\n    private List<String> employees = new ArrayList<>();\n    public void addEmployee(String emp) { employees.add(emp); }\n}',
  },
  {
    name: 'HTML5 & CSS3',
    category: 'Languages',
    level: 92,
    experience: 'Web Structure & Styling',
    icon: '🌐',
    description: 'Expertise in semantic HTML5 markup, CSS3 flexbox, grid, glassmorphism UI design, keyframe animations, and mobile-first responsiveness.',
    codeSnippet: '.card-glow {\n    background: rgba(13, 18, 30, 0.75);\n    border: 1px solid rgba(0, 243, 255, 0.3);\n}',
  },

  // Core Concepts
  {
    name: 'Data Structures & Algorithms',
    category: 'Core Concepts',
    level: 88,
    experience: 'Algorithmic Problem Solving',
    icon: '🌳',
    description: 'Arrays, Linked Lists, Stacks, Queues, Binary Search, Sorting algorithms, and Big-O efficiency analysis.',
    codeSnippet: 'public int binarySearch(int[] arr, int target) {\n    int low = 0, high = arr.length - 1;\n    while(low <= high) { ... }\n}',
  },
  {
    name: 'Object-Oriented Programming (OOP)',
    category: 'Core Concepts',
    level: 90,
    experience: 'Software Design Architecture',
    icon: '🏗️',
    description: 'Designing modular, scalable, and reusable code structures using class inheritance, interface contracts, and encapsulation.',
    codeSnippet: 'class Vehicle:\n    def start_engine(self): pass\n\nclass Car(Vehicle):\n    def start_engine(self): print("Vroom")',
  },
  {
    name: 'DBMS & SQL',
    category: 'Core Concepts',
    level: 86,
    experience: 'Relational Database Design',
    icon: '🗄️',
    description: 'Relational database schema modeling, primary/foreign key normalization (1NF to 3NF), and CRUD query optimization.',
    codeSnippet: 'SELECT emp_id, name, department \nFROM Employees \nWHERE performance_score >= 8.5 \nORDER BY join_date DESC;',
  },

  // Tools
  {
    name: 'MySQL',
    category: 'Tools',
    level: 88,
    experience: 'Relational Database System',
    icon: '🐬',
    description: 'Relational database management system, SQL queries, table indexing, data normalization, transaction handling, and schema management.',
    codeSnippet: '-- MySQL Query Example\nSELECT emp_id, full_name, department\nFROM employees\nWHERE status = "ACTIVE"\nORDER BY created_at DESC;',
  },
  {
    name: 'VS Code & Linux/Ubuntu',
    category: 'Tools',
    level: 85,
    experience: 'Development Environment',
    icon: '💻',
    description: 'Custom VS Code workflow setup, command-line terminal navigation in Linux/Ubuntu, package management, and debugging.',
    codeSnippet: '# Linux Terminal Commands\nsudo apt update && sudo apt install git python3-pip\nls -la src/',
  },
  {
    name: 'Postman API Tool',
    category: 'Tools',
    level: 82,
    experience: 'API Testing & Inspection',
    icon: '🚀',
    description: 'Testing RESTful HTTP endpoints, inspecting JSON request/response payloads, authentication headers, and status codes.',
    codeSnippet: '// GET /api/v1/employees\n{\n  "status": 200,\n  "data": [{ "id": 101, "name": "Saravanan P" }]\n}',
  },

  // Soft Skills
  {
    name: 'Problem Solving & Adaptability',
    category: 'Soft Skills',
    level: 92,
    experience: 'Engineering Mindset',
    icon: '🧠',
    description: 'Analytical approach to breaking down complex coding tasks, learning new frameworks quickly, and adapting to technical challenges.',
    codeSnippet: '// Approach: Understand Problem -> Draft Algorithm -> Implement -> Audit & Refine',
  },
  {
    name: 'Team Collaboration & Communication',
    category: 'Soft Skills',
    level: 90,
    experience: 'Project & Team Dynamics',
    icon: '🤝',
    description: 'Active team member in academic and internship projects, clear technical documentation, and collaborative code reviews.',
    codeSnippet: '// Collaborative Sprint: Pair programming, daily check-ins, clear sprint deliverables',
  },
];

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(skillsData[0]);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Languages', 'Core Concepts', 'Tools', 'Soft Skills'];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative w-full bg-[#05070e] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest">
            <Wrench className="w-3.5 h-3.5" />
            <span>03 // Skills & Competencies</span>
          </div>

          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Categorized Technical <span className="gradient-text-gold">Stack</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base font-inter">
            Select any skill card below to view detailed breakdown, proficiency rating, and implementation patterns.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playClickSound();
                setActiveCategory(cat);
              }}
              onMouseEnter={playHoverSound}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,255,157,0.3)]'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid & Live Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Skill Matrix */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill.name === skill.name;
              return (
                <div
                  key={skill.name}
                  onClick={() => {
                    playClickSound();
                    setSelectedSkill(skill);
                  }}
                  onMouseEnter={playHoverSound}
                  className={`p-4 rounded-2xl glass-panel border cursor-pointer transition-all duration-200 text-left space-y-3 ${
                    isSelected
                      ? 'border-cyan-400 bg-cyan-500/10 shadow-[0_0_20px_rgba(0,243,255,0.2)] scale-102'
                      : 'border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-[10px] font-mono text-cyan-300 font-bold px-2 py-0.5 rounded bg-cyan-500/20">
                      {skill.level}%
                    </span>
                  </div>

                  <div>
                    <h3 className="font-syne font-bold text-sm text-white line-clamp-1">{skill.name}</h3>
                    <span className="text-[10px] font-mono text-gray-400">{skill.category}</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Skill Inspector */}
          <div className="lg:col-span-5 p-7 rounded-3xl glass-panel border border-cyan-500/30 text-left space-y-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl p-2 rounded-xl bg-white/5 border border-white/10">{selectedSkill.icon}</span>
                <div>
                  <h3 className="font-syne font-extrabold text-xl text-white">{selectedSkill.name}</h3>
                  <span className="text-xs font-mono text-cyan-400">{selectedSkill.experience}</span>
                </div>
              </div>

              <div className="text-right">
                <div className="font-syne font-bold text-2xl text-emerald-400">{selectedSkill.level}%</div>
                <div className="text-[10px] font-mono text-gray-400 uppercase">Proficiency</div>
              </div>
            </div>

            {/* Overview */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Skill Description</span>
              <p className="text-xs text-gray-300 font-inter leading-relaxed">{selectedSkill.description}</p>
            </div>

            {/* Code Sample / Usage */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" /> Sample Pattern / Usage
              </span>
              <pre className="p-3.5 rounded-xl bg-[#070b14] border border-cyan-500/20 font-mono text-[11px] text-cyan-300 overflow-x-auto whitespace-pre">
                {selectedSkill.codeSnippet}
              </pre>
            </div>

            {/* Verified Badge */}
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 pt-2 border-t border-white/10">
              <CheckCircle2 className="w-4 h-4" /> Academic & Internship Verified
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
