import React, { useState } from 'react';
import { X, Search, Sparkles, BookOpen, CheckCircle2, Code2, Terminal, GraduationCap, ArrowRight } from 'lucide-react';

interface CourseExplorerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CourseExplorerModal: React.FC<CourseExplorerModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'fullstack' | 'datascience' | 'cohort2' | 'mentorship'>('fullstack');
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  if (!isOpen) return null;

  const sampleQueries = [
    "What is the curriculum for 3.0 Job Ready AI Powered Cohort?",
    "Does NukeSchool provide 1-on-1 resume reviews and mock interviews?",
    "What technologies are taught in the Data Science & Gen-AI track?",
    "How does 24/7 mentor doubt clearance work?"
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    setHasSearched(false);

    setTimeout(() => {
      setIsSearching(false);
      setHasSearched(true);
    }, 500);
  };

  const coursesData = [
    {
      title: "3.0 Job Ready AI Powered Cohort",
      category: "Full Stack & AI",
      duration: "7 Months",
      price: "Rs.8,999",
      originalPrice: "Rs.17,998",
      highlights: ["React 19 & Next.js 15", "DSA in C++ & Java", "Gen-AI & LLM Integration", "DevOps & Docker", "10+ Production Projects"],
      mentor: "Lead Engineering Mentors",
      tag: "Most Popular",
      matchScore: "99% Career Match",
      description: "Complete full-stack development, system design, and cutting-edge Gen-AI engineering to prepare you for top-tier software engineering roles."
    },
    {
      title: "Data Science & Analytics with Gen AI",
      category: "Data & AI",
      duration: "5+ Months",
      price: "Rs.6,999",
      originalPrice: "Rs.13,998",
      highlights: ["Python & Pandas Mastery", "SQL & Advanced Analytics", "Machine Learning & Gen-AI", "Tableau & PowerBI", "Real-World Data Pipelines"],
      mentor: "Industry Data Scientists",
      tag: "Trending",
      matchScore: "96% Career Match",
      description: "Gain end-to-end practical mastery in data analysis, visualization, statistical modeling, and LLM-powered data systems."
    },
    {
      title: "2.0 Job Ready AI Powered Cohort",
      category: "Web Development",
      duration: "200+ Hours",
      price: "Rs.5,999",
      originalPrice: "Rs.11,998",
      highlights: ["Core JavaScript & TypeScript", "Node.js & Express API", "MongoDB & PostgreSQL", "DSA Problem Solving", "Full Stack Capstone"],
      mentor: "Senior Software Engineers",
      tag: "Fast-Track",
      matchScore: "94% Career Match",
      description: "Intensive 200+ hours covering full stack web development, backend architecture, and coding interview preparation from scratch."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 font-sans-main">
      <div className="relative w-full max-w-4xl bg-neutral-950 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4.5 border-b border-neutral-800 bg-[#0d0e12]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#ca4616]/15 text-[#ca4616] border border-[#ca4616]/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <span>NukeSchool Course & Career Explorer</span>
              </h3>
              <p className="text-xs text-neutral-400">
                Explore cohorts, syllabus roadmaps, and 1-on-1 mentorship tracks
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-xl hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 border-b border-neutral-800 pb-3 overflow-x-auto">
            {[
              { id: 'fullstack', label: '3.0 Full Stack & AI', icon: Code2 },
              { id: 'datascience', label: 'Data Science & Gen AI', icon: Terminal },
              { id: 'cohort2', label: '2.0 Web Dev Cohort', icon: BookOpen },
              { id: 'mentorship', label: 'Placement & Mentorship', icon: GraduationCap }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-[#ca4616] text-white shadow-lg shadow-[#ca4616]/20'
                    : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-850 hover:text-white border border-neutral-800'
                }`}
              >
                <tab.icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="space-y-3">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-neutral-500" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask NukeSchool (e.g. What is covered in 3.0 Job Ready Cohort?)..."
                className="w-full pl-12 pr-32 py-3.5 bg-neutral-900 border border-neutral-700 focus:border-[#ca4616] rounded-2xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-[#ca4616] transition-all"
              />
              <button
                type="submit"
                disabled={isSearching}
                className="absolute right-2 px-4 py-2 bg-[#ca4616] hover:bg-[#b03a10] text-white font-medium text-xs rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                {isSearching ? (
                  <span>Searching...</span>
                ) : (
                  <>
                    <span>Search</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>

            {/* Quick Sample Prompts */}
            <div className="flex items-center gap-2 flex-wrap text-xs text-neutral-400">
              <span className="text-neutral-500 font-medium">Quick suggestions:</span>
              {sampleQueries.map((prompt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setQuery(prompt);
                    setHasSearched(true);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white transition-colors text-left text-[11px] cursor-pointer"
                >
                  "{prompt.slice(0, 40)}..."
                </button>
              ))}
            </div>
          </form>

          {/* Results / Featured Courses Area */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-neutral-400">
              <span>{hasSearched ? 'Found matching NukeSchool programs' : 'Featured NukeSchool Cohorts & Learning Tracks'}</span>
              <span className="text-[#ca4616] font-semibold">24/7 Live Mentor Assistance</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {coursesData.map((course, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between shadow-lg group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#ca4616]/15 text-[#e25822] border border-[#ca4616]/30 font-mono uppercase">
                        {course.tag}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-emerald-400">
                        <CheckCircle2 className="w-3 h-3" /> Certified
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white group-hover:text-[#e25822] transition-colors leading-snug">
                      {course.title}
                    </h4>
                    
                    <p className="text-[11px] text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="mt-3.5 space-y-1.5">
                      {course.highlights.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-neutral-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#ca4616]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-neutral-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-neutral-500 line-through mr-1.5">{course.originalPrice}</span>
                      <span className="text-sm font-bold text-white">{course.price}</span>
                    </div>
                    <button
                      onClick={onClose}
                      className="text-xs text-[#ca4616] hover:text-[#e25822] font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <span>Enroll Now</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#0d0e12] border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            100% Placement Assistance & Dedicated Mentorship
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer text-xs font-medium"
          >
            Close Explorer
          </button>
        </div>

      </div>
    </div>
  );
};
