import React, { useState } from 'react';
import { RayBackground } from './components/RayBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBento } from './components/StatsBento';
import { LogoMarquee } from './components/LogoMarquee';
import { ImpactSection } from './components/ImpactSection';
import { CoursesSection } from './components/CoursesSection';
import { FAQSection } from './components/FAQSection';
import { TransformCTASection } from './components/TransformCTASection';
import { FooterSection } from './components/FooterSection';
import { CourseExplorerModal } from './components/CourseExplorerModal';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [isCoursesModalOpen, setIsCoursesModalOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans-main overflow-x-clip selection:bg-[#e25822] selection:text-white flex flex-col justify-between">
      {/* 1. Dynamic Ray Background */}
      <RayBackground />

      {/* 2. Top Header Navigation */}
      <Navbar
        onOpenCourses={() => setIsCoursesModalOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* 3. Main Content: Hero + Stats Bento Grid + Logo Marquee + Impact Section + Stacking Courses + FAQs + CTA + Footer */}
      <main className="flex-1 flex flex-col items-center justify-center pt-20 w-full">
        <Hero onStartJourneyClick={() => setIsCoursesModalOpen(true)} />
        <StatsBento onGetInTouchClick={() => setIsContactOpen(true)} />
        <LogoMarquee />
        <ImpactSection />
        <CoursesSection
          onCheckCourseClick={() => setIsCoursesModalOpen(true)}
          onExploreCoursesClick={() => setIsCoursesModalOpen(true)}
        />
        <FAQSection />
        <TransformCTASection
          onExploreCoursesClick={() => setIsCoursesModalOpen(true)}
        />
        <FooterSection onContactClick={() => setIsContactOpen(true)} />
      </main>

      {/* 4. Interactive Modals */}
      <CourseExplorerModal
        isOpen={isCoursesModalOpen}
        onClose={() => setIsCoursesModalOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}




