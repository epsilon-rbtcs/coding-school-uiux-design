import React from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  onStartJourneyClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartJourneyClick }) => {
  // Avatar URLs for student social proof
  const studentAvatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80',
  ];

  return (
    <section className="relative z-10 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="max-w-5xl mx-auto space-y-8"
      >
        
        {/* Top Tagline Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-block"
        >
          <span className="text-[#e25822] text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase font-sans-main">
            Tomorrow's careers will demand NEW SKILLS.

          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-1 sm:space-y-3"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.15] font-sans-main">
            Become The Software Engineer
          </h1>
          <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.15] font-sans-main flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span>That</span>
            
            {/* Boxed 'Companies' word exactly as shown in screenshot */}
            <span className="relative inline-block border-2 border-[#e25822] bg-[#e25822]/15 px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg text-white font-normal shadow-[0_0_20px_rgba(226,88,34,0.2)] transform hover:scale-[1.02] transition-transform">
              Companies
            </span>

            <span>Want To Hire!</span>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-neutral-300 text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-3xl mx-auto leading-relaxed px-2"
        >
          Join a growing community of students preparing for real-world tech careers at Nuke School.
        </motion.p>

        {/* Student Social Proof Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
        >
          <div className="flex -space-x-2.5 overflow-hidden p-0.5">
            {studentAvatars.map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt={`Student ${idx + 1}`}
                className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-neutral-900 object-cover shadow-md"
              />
            ))}
          </div>

          <div className="text-xs sm:text-sm text-neutral-300 font-normal">
            <span className="text-[#e25822] font-bold mr-1">1 Million+</span>
            <span>Students learning in our mastery programs</span>
          </div>
        </motion.div>

        {/* Primary CTA Button: Start Journey -> */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-2 flex items-center justify-center"
        >
          <button
            onClick={onStartJourneyClick}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#d85220] via-[#ca4616] to-[#af3409] text-white font-semibold text-sm sm:text-base hover:brightness-110 active:scale-[0.98] transition-all duration-200 shadow-xl shadow-[#d85220]/25 cursor-pointer group gap-2"
          >
            <span>Start Journey</span>
            <span className="group-hover:translate-x-1 transition-transform font-bold">→</span>
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
};

