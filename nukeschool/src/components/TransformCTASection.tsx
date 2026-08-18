import React from 'react';
import { motion } from 'motion/react';

interface TransformCTASectionProps {
  onExploreCoursesClick?: () => void;
}

export const TransformCTASection: React.FC<TransformCTASectionProps> = ({
  onExploreCoursesClick,
}) => {
  return (
    <section className="relative w-full bg-black text-white py-28 sm:py-36 px-4 sm:px-6 lg:px-8 font-sans-main overflow-hidden border-t border-neutral-900/90 flex items-center justify-center min-h-[560px]">
      
      {/* Background Floating Blurred Testimonial & Placement Cards */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        
        {/* Floating Card 1 - Top Left */}
        <div className="absolute -top-10 left-[8%] w-44 sm:w-56 aspect-[3/4] rounded-2xl bg-neutral-900/60 border border-neutral-800/60 p-3 shadow-2xl blur-[2.5px] opacity-25 -rotate-12 transform">
          <div className="w-full h-2/3 bg-neutral-800 rounded-xl overflow-hidden mb-2">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
              alt="Student"
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="h-2 w-3/4 bg-neutral-700 rounded mb-1.5" />
          <div className="h-2 w-1/2 bg-neutral-800 rounded" />
        </div>

        {/* Floating Card 2 - Top Center / Right */}
        <div className="absolute top-4 right-[28%] w-40 sm:w-48 aspect-[3/4] rounded-2xl bg-neutral-900/60 border border-neutral-800/60 p-3 shadow-2xl blur-[2px] opacity-30 rotate-6 transform">
          <div className="w-full h-2/3 bg-neutral-800 rounded-xl overflow-hidden mb-2">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
              alt="Student"
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="h-2 w-2/3 bg-neutral-700 rounded mb-1.5" />
          <div className="h-2 w-1/3 bg-neutral-800 rounded" />
        </div>

        {/* Floating Card 3 - Top Right */}
        <div className="absolute top-2 right-[6%] w-48 sm:w-60 aspect-[3/4] rounded-2xl bg-neutral-900/60 border border-neutral-800/60 p-3 shadow-2xl blur-[3px] opacity-20 rotate-12 transform">
          <div className="w-full h-2/3 bg-neutral-800 rounded-xl overflow-hidden mb-2">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
              alt="Student"
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="h-2 w-4/5 bg-neutral-700 rounded mb-1.5" />
          <div className="h-2 w-1/2 bg-neutral-800 rounded" />
        </div>

        {/* Floating Card 4 - Bottom Left */}
        <div className="absolute bottom-4 left-[6%] w-48 sm:w-60 aspect-[3/4] rounded-2xl bg-neutral-900/60 border border-neutral-800/60 p-3 shadow-2xl blur-[3px] opacity-25 rotate-6 transform">
          <div className="w-full h-2/3 bg-neutral-800 rounded-xl overflow-hidden mb-2">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
              alt="Student"
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="h-2 w-3/4 bg-neutral-700 rounded mb-1.5" />
          <div className="h-2 w-2/5 bg-neutral-800 rounded" />
        </div>

        {/* Floating Card 5 - Bottom Center */}
        <div className="absolute -bottom-8 left-[42%] w-40 sm:w-48 aspect-[3/4] rounded-2xl bg-neutral-900/60 border border-neutral-800/60 p-3 shadow-2xl blur-[2px] opacity-25 -rotate-3 transform">
          <div className="w-full h-2/3 bg-neutral-800 rounded-xl overflow-hidden mb-2">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
              alt="Student"
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="h-2 w-2/3 bg-neutral-700 rounded mb-1.5" />
          <div className="h-2 w-1/2 bg-neutral-800 rounded" />
        </div>

        {/* Floating Card 6 - Bottom Right */}
        <div className="absolute bottom-4 right-[10%] w-44 sm:w-56 aspect-[3/4] rounded-2xl bg-neutral-900/60 border border-neutral-800/60 p-3 shadow-2xl blur-[2.5px] opacity-30 -rotate-6 transform">
          <div className="w-full h-2/3 bg-neutral-800 rounded-xl overflow-hidden mb-2">
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80"
              alt="Student"
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="h-2 w-3/4 bg-neutral-700 rounded mb-1.5" />
          <div className="h-2 w-1/3 bg-neutral-800 rounded" />
        </div>

        {/* Subtle Radial Vignette Gradient over Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black" />
      </div>

      {/* Main Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-tight max-w-4xl mx-auto font-sans-main"
        >
          Transform Your Learning Journey Into A Career Breakthrough With{' '}
          <span className="inline-block relative">
            <span className="border border-neutral-700/80 rounded-xl px-3 sm:px-4 py-0.5 sm:py-1 bg-neutral-950/60 backdrop-blur-sm inline-block my-1 text-neutral-100">
              NukeSchool
            </span>
          </span>
        </motion.h2>

        {/* Explore Courses Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 sm:mt-10"
        >
          <button
            onClick={onExploreCoursesClick}
            className="px-7 sm:px-9 py-3.5 sm:py-4 rounded-2xl bg-[#ca4616] hover:bg-[#b03a10] text-white font-medium text-sm sm:text-base transition-all duration-300 shadow-xl inline-flex items-center gap-2.5 cursor-pointer hover:scale-105"
          >
            <span>Explore Courses</span>
            <span>→</span>
          </button>
        </motion.div>

      </div>

    </section>
  );
};
