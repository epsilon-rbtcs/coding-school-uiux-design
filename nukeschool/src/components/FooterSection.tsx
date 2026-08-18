import React from 'react';
import { motion } from 'motion/react';
import { Star, Play, Youtube, Instagram, Twitter, Github } from 'lucide-react';
import { CommunitySection } from './CommunitySection';
import { FloydLogo } from './FloydLogo';

interface ReviewCardProps {
  name: string;
  role: string;
  avatarUrl?: string;
  letterAvatar?: string;
  letterBg?: string;
  rating: number;
  review: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  role,
  avatarUrl,
  letterAvatar,
  letterBg = 'bg-purple-600',
  rating,
  review,
}) => {
  return (
    <div className="w-[340px] sm:w-[400px] bg-[#0a0a0c] border border-neutral-800/90 rounded-2xl p-5 sm:p-6 shrink-0 shadow-2xl hover:border-neutral-700 transition-colors text-left flex flex-col justify-between">
      <div>
        {/* Header: Avatar + Name + Subtitle */}
        <div className="flex items-center gap-3.5 pb-3.5 border-b border-neutral-800/80">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={name}
              className="w-11 h-11 rounded-full object-cover border border-neutral-700/80"
            />
          ) : (
            <div
              className={`w-11 h-11 rounded-full ${letterBg} text-white font-bold text-lg flex items-center justify-center shadow-md`}
            >
              {letterAvatar || name.charAt(0)}
            </div>
          )}

          <div>
            <h4 className="text-sm font-semibold text-white tracking-tight leading-snug">
              {name}
            </h4>
            <p className="text-xs text-neutral-400 font-normal leading-snug mt-0.5">
              {role}
            </p>
          </div>
        </div>

        {/* Rating and Review Content */}
        <div className="pt-3.5">
          <div className="flex items-center gap-1.5 mb-2.5">
            <span className="text-xs font-semibold text-neutral-300 mr-0.5">
              {rating.toFixed(1)}
            </span>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400"
              />
            ))}
          </div>

          <p className="text-xs sm:text-sm text-neutral-300/90 font-normal leading-relaxed line-clamp-3">
            {review}
          </p>
        </div>
      </div>
    </div>
  );
};

interface VideoCardProps {
  title: string;
  views: string;
  likes: string;
  thumbnailUrl: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  views,
  likes,
  thumbnailUrl,
}) => {
  return (
    <div className="w-[360px] sm:w-[420px] bg-[#0c0d10] border border-neutral-800/90 rounded-2xl p-4 shrink-0 shadow-2xl text-left group/card transition-all duration-500 group-hover/yt:blur-[8px] group-hover/yt:opacity-25 group-hover/yt:brightness-50 hover:!blur-none hover:!opacity-100 hover:!brightness-100 hover:!border-neutral-600 hover:scale-[1.02] hover:z-20 cursor-pointer">
      {/* Thumbnail Container */}
      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-3.5 border border-neutral-800/80 bg-neutral-900">
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/30 group-hover/card:bg-black/10 transition-colors flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover/card:scale-110 transition-transform">
            <Play className="w-5 h-5 text-white fill-white ml-0.5" />
          </div>
        </div>
      </div>

      {/* Video Details */}
      <h4 className="font-semibold text-sm sm:text-base text-white leading-snug line-clamp-1 mb-1.5 group-hover/card:text-[#e25822] transition-colors">
        {title}
      </h4>
      <p className="text-xs text-neutral-400 font-mono">
        {views} Views • {likes} Likes
      </p>
    </div>
  );
};

interface FooterSectionProps {
  onContactClick?: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onContactClick }) => {
  // Row 1 Reviews (Moves to LEFT)
  const row1Reviews: ReviewCardProps[] = [
    {
      name: 'Mohd Siraj',
      role: 'Web Developer',
      avatarUrl:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: 4.1,
      review:
        'I Had A Great Experience At Coaching. The Teachers Are Highly Supportive And Knowledgeable. They Explain Every Concept In Extreme Detail.',
    },
    {
      name: 'Mukti Prasad Dash',
      role: 'Full Stack Developer',
      avatarUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      rating: 4.3,
      review:
        'Nuke School Is An Excellent Institute For Learning Coding. The Teachers Explain Concepts In A Very Practical Way.',
    },
    {
      name: 'pradum _k',
      role: 'MERN Stack Developer',
      avatarUrl:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      rating: 4.8,
      review:
        'Nuke School Is An Excellent Institute For Learning Coding! The Mentors Are Highly Skilled And Courteous.',
    },
    {
      name: 'Aarav Sharma',
      role: 'Frontend Engineer',
      avatarUrl:
        'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
      rating: 4.9,
      review:
        'The hands-on real world projects helped me transition from a non-CS background directly into software engineering.',
    },
  ];

  // Row 2 Reviews (Moves to RIGHT)
  const row2Reviews: ReviewCardProps[] = [
    {
      name: 'Rohan Kumar',
      role: 'Teaching Mentor',
      avatarUrl:
        'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
      rating: 4.7,
      review:
        'Love Our Teaching Journey With Nuke School. Helping Students Build Future-Ready Coding Skills Every Single Day.',
    },
    {
      name: 'Akash Warade',
      role: 'MERN Stack Student',
      avatarUrl:
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
      rating: 4.9,
      review:
        'I Am A Student Of MERN-15 Batch And I Am Giving These Review After Spending 3 Months Here Currently Learning Full Stack.',
    },
    {
      name: 'Pragati Nayak',
      role: 'Junior Web Developer',
      letterAvatar: 'P',
      letterBg: 'bg-purple-600',
      rating: 4.3,
      review:
        'This School Is Not Just School But A Full Of Memories I Am Gathering Here Full Of Knowledge...... Devendra Bhaiya Harsh Bhaiya Are Great.',
    },
    {
      name: 'Devendra Singh',
      role: 'Lead Mentor',
      avatarUrl:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
      rating: 4.8,
      review:
        'Really Very Amazing Experience Here. Learning Real Life Facts Together And Building World Class Applications.',
    },
  ];

  // YouTube Videos List
  const youtubeVideos: VideoCardProps[] = [
    {
      title: 'How to Get Placed in Tech in 2025 (No Luck, Just Skills)',
      views: '43k',
      likes: '2.8k',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Complete Web Development Roadmap 2025',
      views: '128k',
      likes: '6.2k',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Master JavaScript in 30 Days - Full Course',
      views: '840k',
      likes: '22k',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Responsive Web Design Masterclass 2025',
      views: '210k',
      likes: '15k',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Backend Web Development with Node.js & Express',
      views: '350k',
      likes: '18k',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <footer className="relative z-10 w-full bg-black text-white pt-20 pb-0 overflow-hidden border-t border-neutral-900">
      
      {/* Wrapper for Dark Marquee Sections with Edge Gradient Shadows */}
      <div className="relative w-full">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-20 sm:w-40 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-20 sm:w-40 bg-gradient-to-l from-black via-black/80 to-transparent" />

        {/* SECTION 1: REVIEWS */}
        <div className="max-w-6xl mx-auto text-center px-4 mb-14">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-3.5 py-1 rounded border border-[#e25822]/40 text-[#e25822] text-xs font-mono font-medium tracking-widest uppercase bg-[#e25822]/10">
              HEAR FROM OUR STUDENTS
            </span>
          </motion.div>

          {/* Section Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-tight max-w-4xl mx-auto font-sans-main"
          >
            We Help Learners Become Industry-Ready Developers.
          </motion.h2>
        </div>

        {/* Row 1: Marquee Moving Left */}
        <div className="relative w-full overflow-hidden mb-6 flex">
          <div className="animate-marquee gap-6 py-2">
            {row1Reviews.concat(row1Reviews).map((review, index) => (
              <ReviewCard key={`r1-${index}`} {...review} />
            ))}
          </div>
        </div>

        {/* Row 2: Marquee Moving Right */}
        <div className="relative w-full overflow-hidden flex mb-28">
          <div className="animate-marquee-reverse gap-6 py-2">
            {row2Reviews.concat(row2Reviews).map((review, index) => (
              <ReviewCard key={`r2-${index}`} {...review} />
            ))}
          </div>
        </div>

        {/* SECTION 2: YOUTUBE TUTORIALS */}
        <div className="max-w-6xl mx-auto text-center px-4 mb-14 pt-8">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-3.5 py-1 rounded border border-[#e25822]/40 text-[#e25822] text-xs font-mono font-medium tracking-widest uppercase bg-[#e25822]/10">
              YOUTUBE
            </span>
          </motion.div>

          {/* Section Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-tight max-w-4xl mx-auto font-sans-main"
          >
            200+ Free Coding Tutorials On Nuke School
          </motion.h2>
        </div>

        {/* Row: YouTube Marquee Moving Left */}
        <div className="relative w-full overflow-hidden flex group/yt mb-24">
          <div className="animate-marquee gap-6 py-2">
            {youtubeVideos.concat(youtubeVideos).map((video, index) => (
              <VideoCard key={`yt-${index}`} {...video} />
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 3: COMMUNITY PHOTO & VIDEO BENTO GRID */}
      <CommunitySection onExploreCoursesClick={onContactClick} />

      {/* SECTION 4: BOTTOM FOOTER LINKS & COPYRIGHT */}
      <div className="w-full bg-[#07080a] text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <FloydLogo isDark={true} size="sm" />
            </div>
            <p className="text-xs text-neutral-400 font-mono">
              Empowering 1 Million+ developers with practical tech education.
            </p>
          </div>

          <div className="flex items-center gap-6 text-neutral-400">
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>

        </div>

        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-neutral-900 text-center text-xs text-neutral-500 font-mono">
          © {new Date().getFullYear()} Nuke School. All rights reserved.
        </div>
      </div>

    </footer>
  );
};

