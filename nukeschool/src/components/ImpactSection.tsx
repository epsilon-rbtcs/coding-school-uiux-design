import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, ArrowUpRight } from 'lucide-react';

interface ImpactCard {
  id: number;
  imageUrl: string;
  hasCrown?: boolean;
  tag: string;
  title: string;
  hoverHeading: string;
  hoverDescription: string;
}

export const ImpactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Bind scroll position of this section to horizontal translation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Map vertical scroll progress (0 to 1) to horizontal movement
  const xTransform = useTransform(scrollYProgress, [0, 1], ['10%', '-50%']);

  const impactCards: ImpactCard[] = [
    {
      id: 1,
      tag: 'Featured',
      title: 'Classroom Mentorship',
      hoverHeading: 'Coming To Your Campus',
      hoverDescription: 'This Time The Feature Was At IIIT Bhopal, Where We Talked About How To Stay Ahead Of The Crowd.',
      imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
      hasCrown: true,
    },
    {
      id: 2,
      tag: 'Live Workshop',
      title: 'Interactive Workshops',
      hoverHeading: 'Building Modern Tech Culture',
      hoverDescription: 'Hands-on practical coding sessions with 500+ enthusiastic student developers.',
      imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      tag: 'Community',
      title: 'Peer Learning & Culture',
      hoverHeading: 'Empowering Next Gen Coders',
      hoverDescription: 'Creating high-impact developer networks and collaborative peer learning environments.',
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      tag: 'Mentorship',
      title: '1-on-1 Guidance',
      hoverHeading: 'Personal Career Roadmap',
      hoverDescription: 'Tailored resume reviews, mock interviews, and direct guidance from industry mentors.',
      imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      tag: 'Hackathon',
      title: 'Hackathons & Projects',
      hoverHeading: 'Hackathons & Live Demos',
      hoverDescription: 'Over 48 hours of non-stop building, innovative project showcases, and career opportunities.',
      imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section ref={sectionRef} className="relative z-10 w-full py-20 bg-black overflow-hidden">
      
      {/* Header Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center px-4 mb-12"
      >
        {/* Eyebrow Badge */}
        <div className="inline-block mb-4">
          <span className="text-xs font-mono tracking-widest text-[#e25822] uppercase px-3 py-1 rounded border border-[#e25822]/30 bg-[#e25822]/10">
            IMPACT
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-tight font-sans-main">
          How We Are Doing It Faster And Better Than Others!
        </h2>
      </motion.div>

      {/* Horizontal Scroll Track Container */}
      <div className="relative w-full overflow-hidden py-4">
        <motion.div
          style={{ x: xTransform }}
          className="flex items-center gap-6 sm:gap-8 px-8 sm:px-16 w-max cursor-grab active:cursor-grabbing"
        >
          {impactCards.map((card) => (
            <div
              key={card.id}
              className="relative w-[300px] sm:w-[380px] h-[460px] sm:h-[540px] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800/80 shrink-0 shadow-2xl group transition-all duration-500 cursor-pointer"
            >
              {/* Photo Image - Turns Black & White (Grayscale) on hover */}
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-full object-cover object-center transition-all duration-500 group-hover:grayscale group-hover:contrast-110 group-hover:scale-105"
              />

              {/* Normal State Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />

              {/* Hover State Orange Gradient Overlay (Matches image exactly) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#e25822] via-[#e25822]/85 to-transparent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Top-Left Featured Badge on Hover */}
              <div className="absolute top-5 left-5 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ff5722] text-white text-xs sm:text-sm font-semibold shadow-lg">
                  <Sparkles className="w-4 h-4 fill-white stroke-white" />
                  <span>{card.tag}</span>
                </div>
              </div>

              {/* Crown Doodle Overlay if featured */}
              {card.hasCrown && (
                <div className="absolute top-[28%] left-[45%] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <svg className="w-24 h-20 text-white group-hover:text-white transition-colors drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 50 L20 15 L45 35 L70 10 L85 50 Z" />
                    <circle cx="20" cy="12" r="3" fill="currentColor" />
                    <circle cx="45" cy="30" r="3" fill="currentColor" />
                    <circle cx="70" cy="8" r="3" fill="currentColor" />
                  </svg>
                </div>
              )}

              {/* Top-Right Circle Arrow Button */}
              <div className="absolute top-5 right-5 z-20">
                {/* Normal State Button */}
                <div className="w-11 h-11 rounded-full bg-black/80 text-white flex items-center justify-center border border-white/20 backdrop-blur-md group-hover:hidden transition-all shadow-lg">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
                {/* Hover State Button (Solid Black with Horizontal Arrow) */}
                <div className="hidden group-hover:flex w-12 h-12 rounded-full bg-black text-white items-center justify-center shadow-2xl border border-black transform group-hover:scale-105 transition-all">
                  <ArrowRight className="w-6 h-6 stroke-[2.5]" />
                </div>
              </div>

              {/* Bottom Text Overlay - Normal State */}
              <div className="absolute bottom-6 left-6 right-6 z-20 text-left group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                  Nuke School Impact
                </span>
                <h3 className="text-xl font-medium text-white tracking-tight">
                  {card.title}
                </h3>
              </div>

              {/* Bottom Text Overlay - Hover State (Matches exact styling and wording from image) */}
              <div className="absolute bottom-6 left-6 right-6 z-20 text-left opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
                <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-tight font-sans-main">
                  {card.hoverHeading}
                </h3>
                <p className="text-xs sm:text-sm text-white/95 font-normal leading-snug mt-2 font-sans-main">
                  {card.hoverDescription}
                </p>
              </div>

            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

