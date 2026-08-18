import React from 'react';
import { Youtube, Star, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface StatsBentoProps {
  onGetInTouchClick?: () => void;
}

export const StatsBento: React.FC<StatsBentoProps> = ({ onGetInTouchClick }) => {
  const studentAvatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80',
  ];

  return (
    <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Outer Bento Container Card with motion entrance */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="p-4 sm:p-6 md:p-8 rounded-3xl bg-[#0d0e11]/90 border border-neutral-800/80 shadow-2xl backdrop-blur-xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Left Column (Occupies 6 or 7 cols on desktop) */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-5">
            
            {/* Top Row: Two Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Card 1: 726k YouTube Subscriber */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#121316] border border-neutral-800/90 flex flex-col justify-between h-52 hover:border-neutral-700 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2.5">
                    {/* YouTube Red Icon */}
                    <div className="w-8 h-6 bg-red-600 rounded-lg flex items-center justify-center shadow-md">
                      <div className="w-0 h-0 border-y-4 border-y-transparent border-l-8 border-l-white ml-0.5" />
                    </div>
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#d85220] tracking-tight font-sans-main">
                      726k
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 font-medium mt-2">
                    Nuke School Subscriber
                  </p>
                </div>

                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Be part of a vibrant learning ecosystem.
                </p>
              </motion.div>

              {/* Card 2: 01 Million Career-Driven Learners */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#121316] border border-neutral-800/90 flex flex-col justify-between h-52 hover:border-neutral-700 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2.5">
                    {/* Gold Star Icon */}
                    <div className="w-7 h-7 text-amber-400 flex items-center justify-center">
                      <Star className="w-6 h-6 fill-amber-400 stroke-amber-400" />
                    </div>
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#d85220] tracking-tight font-sans-main">
                      01 Million
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 font-medium mt-2">
                    Career-Driven Learners
                  </p>
                </div>

                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Join a large and growing community of coders.
                </p>
              </motion.div>

            </div>

            {/* Bottom Card: UNLOCK YOUR FIRST JOB AND INTERNSHIP WITH US! */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#121316] border border-neutral-800/90 flex flex-col justify-between hover:border-neutral-700 transition-colors min-h-[220px]"
            >
              <div>
                {/* UNLOCK [avatars] YOUR */}
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight font-sans-main uppercase">
                    UNLOCK
                  </span>

                  {/* Avatars */}
                  <div className="flex -space-x-2 overflow-hidden my-1">
                    {studentAvatars.map((url, idx) => (
                      <img
                        key={idx}
                        src={url}
                        alt="Student"
                        className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-neutral-900 object-cover"
                      />
                    ))}
                  </div>

                  <span className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight font-sans-main uppercase">
                    YOUR
                  </span>
                </div>

                {/* Arrow Pill Indicator */}
                <div className="my-3">
                  <div className="inline-flex items-center justify-center px-6 py-1.5 rounded-full border border-[#d85220] bg-[#d85220]/10 text-[#d85220]">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Main Headline text */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white tracking-tight uppercase font-sans-main leading-tight mt-2">
                  FIRST JOB AND INTERNSHIP WITH US!
                </h3>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Start Learning Classroom Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-6"
          >
            <div className="relative h-full min-h-[420px] lg:min-h-[480px] rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden flex flex-col justify-between p-6 sm:p-8 group">
              
              {/* Background Classroom Image with Subtle Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80")`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/70" />

              {/* Watermark/Subtle Header Text in Background */}
              <div className="relative z-10">
                <h3 className="text-4xl sm:text-5xl font-normal text-white tracking-tight font-sans-main">
                  Start
                </h3>
                <h3 className="text-4xl sm:text-5xl font-normal text-white tracking-tight font-sans-main">
                  Learning
                </h3>
                <p className="text-neutral-400/80 font-mono text-xs tracking-widest uppercase mt-2">
                  COOLEST CODING SCHOOL
                </p>
              </div>

              {/* Center Screen Highlight Effect */}
              <div className="relative z-10 my-auto text-center py-8">
                {/* Classroom projector simulation frame */}
                <div className="inline-block p-1 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                  <div className="px-6 py-3 bg-black/60 rounded-lg text-xs font-mono text-neutral-300">
                    Live Classroom & Interactive Mentorship
                  </div>
                </div>
              </div>

              {/* Bottom Action Button: Get in touch -> */}
              <div className="relative z-10 pt-4">
                <button
                  onClick={onGetInTouchClick}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900/80 hover:bg-neutral-800/90 border border-neutral-600/60 text-neutral-200 text-xs sm:text-sm font-medium transition-all backdrop-blur-md cursor-pointer hover:border-white"
                >
                  <span>Get in touch</span>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};
