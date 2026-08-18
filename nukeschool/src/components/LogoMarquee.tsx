import React from 'react';
import { motion } from 'motion/react';

export const LogoMarquee: React.FC = () => {
  const techItems = [
    {
      name: 'NODE.JS',
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2.5 7.5v9L12 22l9.5-5.5v-9L12 2z" fill="#339933" />
          <path d="M12 4.5l7 4v7l-7 4-7-4v-7l7-4z" fill="#fff" opacity="0.25" />
          <path d="M11 8h2v8h-2z" fill="#fff" />
          <path d="M8 11.5a1.5 1.5 0 011.5-1.5h5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-5A1.5 1.5 0 018 12.5v-1z" fill="#339933" />
        </svg>
      ),
    },
    {
      name: 'EXPRESS',
      icon: (
        <span className="font-sans font-light text-3xl sm:text-4xl text-neutral-300 tracking-tighter">ex</span>
      ),
    },
    {
      name: 'PYTHON',
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14" viewBox="0 0 24 24" fill="none">
          <path d="M11.87 2c-4.32 0-4.04 1.87-4.04 1.87v1.94h4.12v.58H6.18S2 5.86 2 10.22c0 4.35 3.65 4.2 3.65 4.2h1.22v-1.72s-.07-2.06 2.02-2.06h3.48s1.95.03 1.95-1.88V4.86S14.83 2 11.87 2zm-1.18 1.25a.72.72 0 1 1 0 1.44.72.72 0 0 1 0-1.44z" fill="#3776AB" />
          <path d="M12.13 22c4.32 0 4.04-1.87 4.04-1.87v-1.94h-4.12v-.58h5.77S22 18.14 22 13.78c0-4.35-3.65-4.2-3.65-4.2h-1.22v1.72s.07 2.06-2.02 2.06h-3.48s-1.95-.03-1.95 1.88v3.89S9.17 22 12.13 22zm1.18-1.25a.72.72 0 1 1 0-1.44.72.72 0 0 1 0 1.44z" fill="#FFD43B" />
        </svg>
      ),
    },
    {
      name: 'GIT',
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14" viewBox="0 0 24 24" fill="#F05032">
          <path d="M21.6 10.9L13.1 2.4c-.8-.8-2.1-.8-2.9 0L8.8 3.8l3.7 3.7c.6-.2 1.3 0 1.7.5.5.5.6 1.3.3 1.9l3.5 3.5c.6-.3 1.4-.2 1.9.3.7.7.7 1.8 0 2.5s-1.8.7-2.5 0c-.5-.5-.6-1.3-.3-1.9l-3.3-3.3v4.6c.3.2.5.5.5.9 0 .7-.6 1.3-1.3 1.3s-1.3-.6-1.3-1.3c0-.4.2-.7.5-.9V8.6c-.3-.2-.5-.5-.5-.9 0-.4.2-.7.5-.9L8.1 3.1 2.4 8.8c-.8.8-.8 2.1 0 2.9l8.5 8.5c.8.8 2.1.8 2.9 0l7.8-7.8c.8-.8.8-2.1 0-2.9z" />
        </svg>
      ),
    },
    {
      name: 'MONGODB',
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14" viewBox="0 0 24 24" fill="#47A248">
          <path d="M12 1.5c-.3 0-.5.2-.6.4C10.2 5.1 6 10.4 6 14.5c0 3.3 2.7 6 6 6s6-2.7 6-6c0-4.1-4.2-9.4-5.4-12.6-.1-.2-.3-.4-.6-.4zm.8 17.4v-8.2c.8.4 1.4 1.3 1.4 2.3 0 1.4-1.1 2.5-2.5 2.5h-.1v3.4c2.2-.3 3.9-2.2 3.9-4.5 0-3.1-3.2-7.5-4.3-10.1-.1.2-.2.5-.3.7v13.9c.6 0 1.3-.3 1.9-.8z" />
        </svg>
      ),
    },
    {
      name: 'POSTGRESQL',
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14" viewBox="0 0 24 24" fill="none" stroke="#336791" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3c-4.97 0-9 3.13-9 7 0 2.38 1.52 4.49 3.88 5.75-.12.87-.56 2.13-1.88 3.25 1.88 0 3.38-.88 4.25-1.5A10.8 10.8 0 0 0 12 17c4.97 0 9-3.13 9-7s-4.03-7-9-7z" />
          <circle cx="9" cy="9" r="1" fill="#336791" />
          <path d="M14 12c.5 1 1.5 2 3 2" />
        </svg>
      ),
    },
    {
      name: 'NEXT.JS',
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#222" />
          <path d="M14.5 9v6M9.5 9v6l5-6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: 'TYPESCRIPT',
      icon: (
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-neutral-700/80 rounded-lg flex items-center justify-center border border-neutral-600/50">
          <span className="text-neutral-200 font-black text-lg sm:text-xl tracking-tighter">TS</span>
        </div>
      ),
    },
    {
      name: 'MACHINE LEARNING',
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14" viewBox="0 0 24 24" fill="#FF6F00">
          <path d="M12 2L3 7v10l4.5 2.5V12L12 9.5l4.5 2.5v7.5L21 17V7l-9-5zm0 3.3L18 8.5v1.2l-6-3.3-6 3.3V8.5l6-3.2z" />
        </svg>
      ),
    },
    {
      name: 'AI',
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
          <path d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z" />
        </svg>
      ),
    },
    {
      name: 'ROBOTICS',
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
          <path d="M12 12l9-5M12 12v10M12 12L3 7" />
        </svg>
      ),
    },
    {
      name: 'IOT',
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14" viewBox="0 0 24 24" fill="#ECA017">
          <path d="M12 2C8.5 2 7 5 7 8c0 2.5 1 4.5 2 6v3c0 .5.5 1 1 1h4c.5 0 1-.5 1-1v-3c1-1.5 2-3.5 2-6 0-3-1.5-6-5-6zm-1 18h2v2h-2v-2z" />
        </svg>
      ),
    },
    {
      name: 'HTML',
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14" viewBox="0 0 24 24" fill="#E34F26">
          <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2zm16.7 5.1H6l.3 3.4h11.4l-.5 5.7-5.2 1.4-5.2-1.4-.3-3.4H3.1l.6 6.8 8.3 2.3 8.3-2.3z" />
        </svg>
      ),
    },
    {
      name: 'JAVASCRIPT',
      icon: (
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-neutral-700/80 rounded-lg flex items-center justify-center border border-neutral-600/50">
          <span className="text-neutral-200 font-black text-base sm:text-lg tracking-tight">JS</span>
        </div>
      ),
    },
    {
      name: 'REACT',
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
        </svg>
      ),
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative w-full overflow-hidden bg-black py-10 my-4 border-y border-neutral-900/60"
    >
      {/* Left/Right Gradient Mask for smooth fade-in/fade-out */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-20 sm:w-40 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-20 sm:w-40 bg-gradient-to-l from-black to-transparent" />

      {/* Marquee Track */}
      <div className="animate-marquee flex items-center gap-12 sm:gap-16">
        {[...techItems, ...techItems].map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex flex-col items-center justify-center shrink-0 group cursor-pointer"
          >
            {/* Directly displayed larger grey icon without white background card */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
              {item.icon}
            </div>
            {/* Grey label below */}
            <span className="text-[11px] sm:text-xs font-bold tracking-wider text-neutral-400 mt-2 uppercase font-mono text-center whitespace-nowrap group-hover:text-neutral-200 transition-colors">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

