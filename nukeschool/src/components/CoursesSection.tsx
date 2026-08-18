import React from 'react';
import { motion } from 'motion/react';
import { Clock, Award, PhoneCall, ArrowRight } from 'lucide-react';

interface CoursesSectionProps {
  onCheckCourseClick?: () => void;
  onExploreCoursesClick?: () => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  onCheckCourseClick,
  onExploreCoursesClick,
}) => {
  return (
    <section className="relative z-10 w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#fbf5f0] text-neutral-900 rounded-t-[40px] sm:rounded-t-[50px] shadow-2xl -mt-6">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          <span className="px-4 py-1.5 rounded-md border border-[#ca4616]/40 text-[#ca4616] text-xs font-mono font-medium tracking-widest uppercase bg-[#ca4616]/5">
            COURSES
          </span>
        </motion.div>

        {/* Main Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-normal text-neutral-900 tracking-tight leading-[1.2] max-w-4xl mx-auto font-sans-main"
        >
          Not Sure Which Course Fits You? Don’t Worry, We’re Here To Help.
        </motion.h2>

        {/* Top CTA Button: Explore Courses -> */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-2 pb-8"
        >
          <button
            onClick={onExploreCoursesClick}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#ca4616] hover:bg-[#b83c10] text-white font-semibold text-sm sm:text-base transition-all shadow-md cursor-pointer group"
          >
            <span>Explore Courses</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>

        {/* Stacked Cards Container (Sticky Scroll Stack) */}
        <div className="relative space-y-16 sm:space-y-24 pb-32">

          {/* CARD 1: 3.0 Job Ready AI Powered Cohort (White Card) */}
          <div className="sticky top-20 sm:top-24 z-10 transition-all duration-300">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-[32px] p-6 sm:p-8 md:p-10 shadow-2xl border border-neutral-200/90 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Course Image with Mentor */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-square bg-[#0b1c14] border border-neutral-100 group">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                  alt="Harsh Vandana Sharma Mentor"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 z-10 text-[10px] font-mono text-white/80 uppercase tracking-widest bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-md">
                  BUILD SCALABLE PRODUCTS
                </div>
              </div>

              {/* Right Column: Course Content details */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-neutral-900 tracking-tight leading-[1.25] font-sans-main">
                  3.0 Job Ready AI Powered Cohort: Complete Web Development + DSA + Gen–AI + Aptitude
                </h3>

                <p className="text-sm sm:text-base text-neutral-500 font-normal leading-relaxed max-w-2xl">
                  Build real scalable products used by thousands of users, learn AI engineering, full stack development, DevOps,...
                </p>

                {/* Course Meta Badges */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#fff2eb] text-neutral-800">
                    <div className="w-8 h-8 rounded-lg bg-[#ffe3d6] flex items-center justify-center text-[#ca4616]">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="text-left leading-tight">
                      <span className="block text-xs font-bold text-neutral-900">7</span>
                      <span className="block text-[11px] text-neutral-500 font-medium">Months</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#fff2eb] text-neutral-800">
                    <div className="w-8 h-8 rounded-lg bg-[#ffe3d6] flex items-center justify-center text-[#ca4616]">
                      <Award className="w-4 h-4" />
                    </div>
                    <div className="text-left leading-tight">
                      <span className="block text-xs font-bold text-neutral-900">Yes</span>
                      <span className="block text-[11px] text-neutral-500 font-medium">Certified</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#fff2eb] text-neutral-800">
                    <div className="w-8 h-8 rounded-lg bg-[#ffe3d6] flex items-center justify-center text-[#ca4616]">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div className="text-left leading-tight">
                      <span className="block text-xs font-bold text-neutral-900">24/7</span>
                      <span className="block text-[11px] text-neutral-500 font-medium">Mentor Support</span>
                    </div>
                  </div>
                </div>

                {/* Pricing Section */}
                <div className="pt-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-normal text-neutral-900">Price</span>
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#ca4616]">Rs.8999</span>
                    <span className="text-xs sm:text-sm text-neutral-400 line-through ml-1">Rs.17998 (+GST)</span>
                  </div>
                </div>

                {/* Check Course Button */}
                <div className="pt-2">
                  <button
                    onClick={onCheckCourseClick}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-black hover:bg-neutral-800 text-white font-semibold text-sm sm:text-base transition-colors shadow-lg cursor-pointer"
                  >
                    <span>Check Course</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CARD 2: Data Science & Analytics with Gen AI (Orange Card) */}
          <div className="sticky top-24 sm:top-28 z-20 transition-all duration-300">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7 }}
              className="bg-[#e25822] text-white rounded-[32px] p-6 sm:p-8 md:p-10 shadow-2xl border border-orange-500/30 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Course Details */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.25] font-sans-main">
                  Data Science & Analytics with Gen AI
                </h3>

                <p className="text-sm sm:text-base text-white/90 font-normal leading-relaxed max-w-2xl">
                  Gain hands-on experience in data analysis, visualization, and AI integration.
                </p>

                {/* Badges */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/15 backdrop-blur-md text-white border border-white/20">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="text-left leading-tight">
                      <span className="block text-xs font-bold text-white">5+</span>
                      <span className="block text-[11px] text-white/80 font-medium">Months</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/15 backdrop-blur-md text-white border border-white/20">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white">
                      <Award className="w-4 h-4" />
                    </div>
                    <div className="text-left leading-tight">
                      <span className="block text-xs font-bold text-white">Yes</span>
                      <span className="block text-[11px] text-white/80 font-medium">Certified</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/15 backdrop-blur-md text-white border border-white/20">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div className="text-left leading-tight">
                      <span className="block text-xs font-bold text-white">24/7</span>
                      <span className="block text-[11px] text-white/80 font-medium">Mentor Support</span>
                    </div>
                  </div>
                </div>

                {/* Pricing Section */}
                <div className="pt-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-normal text-white">Price</span>
                    <span className="text-3xl sm:text-4xl font-extrabold text-white">Rs.6999</span>
                    <span className="text-xs sm:text-sm text-white/70 line-through ml-1">Rs.13998 (+GST)</span>
                  </div>
                </div>

                {/* Check Course Button */}
                <div className="pt-2">
                  <button
                    onClick={onCheckCourseClick}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white text-black hover:bg-neutral-100 font-semibold text-sm sm:text-base transition-colors shadow-lg cursor-pointer"
                  >
                    <span>Check Course</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Course Showcase Image */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-square bg-black/40 border border-white/10 group">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80"
                  alt="Data Science Mentor"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* CARD 3: 2.0 Job Ready AI Powered Cohort (Black Card) */}
          <div className="sticky top-28 sm:top-32 z-30 transition-all duration-300">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7 }}
              className="bg-black text-white rounded-[32px] p-6 sm:p-8 md:p-10 shadow-2xl border border-neutral-800 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Image on Laptop Display */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-square bg-neutral-900 border border-neutral-800 group">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
                  alt="2.0 Cohort Showcase"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Badges simulated on laptop screen */}
                <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                  <span className="text-[10px] font-mono text-white bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                    Websites
                  </span>
                  <span className="text-[10px] font-mono text-white bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                    DSA
                  </span>
                </div>
              </div>

              {/* Right Column: Course Content details */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.25] font-sans-main">
                  2.0 Job Ready AI Powered Cohort: Complete Web Development + DSA + Gen–AI + Aptitude
                </h3>

                {/* Course Meta Badges */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-white">
                    <div className="w-8 h-8 rounded-lg bg-[#e25822]/20 flex items-center justify-center text-[#e25822]">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="text-left leading-tight">
                      <span className="block text-xs font-bold text-white">200+</span>
                      <span className="block text-[11px] text-neutral-400 font-medium">Hours</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-white">
                    <div className="w-8 h-8 rounded-lg bg-[#e25822]/20 flex items-center justify-center text-[#e25822]">
                      <Award className="w-4 h-4" />
                    </div>
                    <div className="text-left leading-tight">
                      <span className="block text-xs font-bold text-white">Yes</span>
                      <span className="block text-[11px] text-neutral-400 font-medium">Certified</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-white">
                    <div className="w-8 h-8 rounded-lg bg-[#e25822]/20 flex items-center justify-center text-[#e25822]">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div className="text-left leading-tight">
                      <span className="block text-xs font-bold text-white">24/7</span>
                      <span className="block text-[11px] text-neutral-400 font-medium">Mentor Support</span>
                    </div>
                  </div>
                </div>

                {/* Pricing Section */}
                <div className="pt-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-normal text-white">Price</span>
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#e25822]">Rs.5999</span>
                    <span className="text-xs sm:text-sm text-neutral-400 line-through ml-1">Rs.11998 (+GST)</span>
                  </div>
                </div>

                {/* Check Course Button */}
                <div className="pt-2">
                  <button
                    onClick={onCheckCourseClick}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white hover:bg-neutral-200 text-black font-semibold text-sm sm:text-base transition-colors shadow-lg cursor-pointer"
                  >
                    <span>Check Course</span>
                    <ArrowRight className="w-4 h-4 text-black" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

