import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';

interface CommunitySectionProps {
  onExploreCoursesClick?: () => void;
}

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  className?: string;
  imgClassName?: string;
  topBadge?: React.ReactNode;
  centerBadge?: React.ReactNode;
  bottomBadge?: React.ReactNode;
}

const CommunityImageCard: React.FC<ImageCardProps> = ({
  src,
  alt,
  title,
  description,
  className = '',
  imgClassName = '',
  topBadge,
  centerBadge,
  bottomBadge,
}) => {
  return (
    <div
      className={`relative rounded-3xl overflow-hidden shadow-lg border border-neutral-300/60 group bg-neutral-900 cursor-pointer ${className}`}
    >
      {/* Background Image (turns grayscale and zooms on hover) */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover group-hover:scale-105 group-hover:grayscale group-hover:contrast-115 transition-all duration-500 ${imgClassName}`}
      />

      {/* Top Right Action Arrow */}
      <div className="absolute top-4 right-4 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
        <ArrowRight className="w-5 h-5" />
      </div>

      {/* Default Overlays (Badges / Play Buttons - fade out on hover) */}
      {(topBadge || centerBadge || bottomBadge) && (
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-4 pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
          <div className="self-start">{topBadge}</div>
          <div className="my-auto self-center">{centerBadge}</div>
          <div className="self-center">{bottomBadge}</div>
        </div>
      )}

      {/* Default subtle bottom dark gradient when not hovered */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />

      {/* Hover Info Overlay with Warm Orange Gradient */}
      <div className="absolute inset-0 z-15 bg-gradient-to-t from-[#e25822] via-[#e25822]/80 via-35% to-transparent opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none flex flex-col justify-end p-5 sm:p-6 text-left">
        <h3 className="text-base sm:text-xl font-bold text-white tracking-tight leading-snug drop-shadow-sm">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-white/95 font-normal leading-relaxed mt-1.5 drop-shadow-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export const CommunitySection: React.FC<CommunitySectionProps> = ({
  onExploreCoursesClick,
}) => {
  return (
    <section className="w-full bg-[#faf3ee] text-[#1a1a1a] py-20 px-4 sm:px-6 lg:px-8 font-sans-main border-t border-neutral-200/80">
      
      {/* 1. Header Area */}
      <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4"
        >
          <span className="px-4 py-1 rounded border border-[#ca5228]/30 bg-[#f3e7df] text-[#b2461d] text-xs font-mono font-medium tracking-widest uppercase">
            COMMUNITY
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-normal text-neutral-900 tracking-tight leading-tight font-sans-main"
        >
          They Came. They Cooked. They Got Placed.
        </motion.h2>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <button
            onClick={onExploreCoursesClick}
            className="px-6 py-3.5 rounded-2xl bg-[#ca4616] hover:bg-[#b03a10] text-white font-medium text-sm sm:text-base transition-colors shadow-md inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Courses</span>
            <span>→</span>
          </button>
        </motion.div>
      </div>

      {/* 2. Bento Grid Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* COLUMN 1 (Left Tall Reel Card) - Spans 3 Cols on LG */}
          <div className="lg:col-span-3 flex flex-col">
            <CommunityImageCard
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
              alt="Placement Reel"
              title="Kodr 2.0 Placement Spotlight"
              description="From fundamentals to advanced system design, securing premier product engineering roles."
              className="w-full h-full min-h-[520px]"
              topBadge={
                <div className="bg-black/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-[11px] font-bold text-white tracking-wide uppercase shadow-lg">
                  ANOTHER <span className="text-[#e25822]">PLACEMENT</span> FROM <span className="text-[#e25822]">KODR 2.0</span>
                </div>
              }
              centerBadge={
                <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md border border-white/60 flex items-center justify-center text-white shadow-2xl">
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </div>
              }
            />
          </div>

          {/* COLUMN 2 & 3 (Middle Section) - Spans 6 Cols on LG */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            
            {/* Top Wide Landscape Card */}
            <CommunityImageCard
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
              alt="Placement champions"
              title="Celebrating Our Placement Champions"
              description="Meet our success stories! 🏅 These bright minds from our institution have secured amazing placements with our guidance and their hard work. ✨"
              className="w-full h-[260px]"
            />

            {/* Middle Row (Split 2 sub-cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Orange Metric Box */}
              <div className="relative rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-[#e25822] via-[#d64e1c] to-[#b83c10] text-white flex flex-col justify-end shadow-lg min-h-[200px] overflow-hidden">
                {/* Background Grid Accent */}
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative z-10 space-y-1">
                  <div className="text-5xl sm:text-6xl font-light font-mono tracking-tight leading-none">
                    01
                  </div>
                  <div className="text-3xl sm:text-4xl font-normal tracking-tight">
                    Million
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 font-mono pt-1">
                    Students Taught
                  </p>
                </div>
              </div>

              {/* Photo Sub-card (2 students with sweets) */}
              <CommunityImageCard
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80"
                alt="Student success"
                title="Peer Learning & Hackathons"
                description="Collaborative live coding, regular problem-solving pods, and peer mock interviews."
                className="min-h-[200px]"
              />

            </div>

            {/* Bottom Wide Landscape Card (7 students standing) */}
            <CommunityImageCard
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
              alt="Group of students"
              title="Batch Celebrations & Placement Day"
              description="Connecting learners with top engineering leaders and celebrating career-defining offers."
              className="w-full h-[220px]"
            />

          </div>

          {/* COLUMN 4 (Right Column) - Spans 3 Cols on LG */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            
            {/* Top Right Photo Card (2 students thumbs up) */}
            <CommunityImageCard
              src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=700&q=80"
              alt="Mentorship success"
              title="1-on-1 Mentor Guidance"
              description="Personalized portfolio reviews, resume tailoring, and direct technical mentorship."
              className="w-full h-[220px]"
            />

            {/* Bottom Right Tall Video Reel Card (Student story) */}
            <CommunityImageCard
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
              alt="Student story"
              title="From Zero to Software Engineer"
              description="Real transformation stories of determination, discipline, and breakthrough job offers."
              className="w-full flex-1 min-h-[320px]"
              centerBadge={
                <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md border border-white/60 flex items-center justify-center text-white shadow-2xl">
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </div>
              }
              bottomBadge={
                <div className="bg-[#b82a1e] text-white px-3.5 py-1 rounded-lg text-xs font-bold tracking-wide shadow-lg mb-2">
                  Maine college
                </div>
              }
            />

          </div>

        </div>
      </div>

    </section>
  );
};
