import React, { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { FloydLogo } from './FloydLogo';

interface NavbarProps {
  onOpenCourses?: () => void;
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCourses,
  onOpenContact,
}) => {
  const [activeTab, setActiveTab] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'Courses', 'Bootcamp', 'Request Callback'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-8 bg-black/60 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Floyd School Brand Logo */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-3 group">
            <FloydLogo isDark={true} size="md" />
          </a>
        </div>

        {/* Center: Rounded Pill Navigation Container (Exactly like screenshot) */}
        <nav className="hidden md:flex items-center bg-neutral-950/80 border border-neutral-800/90 rounded-2xl px-5 py-2.5 shadow-xl shadow-black/40">
          <div className="flex items-center space-x-6 lg:space-x-8 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = activeTab === item;
              return (
                <button
                  key={item}
                  onClick={() => {
                    setActiveTab(item);
                    if (item === 'Request Callback' && onOpenContact) {
                      onOpenContact();
                    } else if (item === 'Courses' || item === 'Bootcamp') {
                      if (onOpenCourses) onOpenCourses();
                    }
                  }}
                  className={`transition-colors cursor-pointer text-sm font-medium ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Right: Sign In Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenContact}
            className="text-neutral-200 hover:text-white text-sm font-medium transition-colors cursor-pointer py-2 px-3"
          >
            Sign In
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white rounded-lg hover:bg-neutral-800/60"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 bg-neutral-950 border border-neutral-800 rounded-2xl space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-2">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveTab(item);
                setMobileMenuOpen(false);
                if (item === 'Request Callback' && onOpenContact) {
                  onOpenContact();
                } else if ((item === 'Courses' || item === 'Bootcamp') && onOpenCourses) {
                  onOpenCourses();
                }
              }}
              className={`block w-full text-left py-2 px-3 rounded-lg text-sm font-medium ${
                activeTab === item ? 'bg-neutral-800 text-white' : 'text-neutral-300 hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}
          <div className="pt-2 border-t border-neutral-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenContact) onOpenContact();
              }}
              className="w-full text-center py-2 bg-[#e25822] text-white font-semibold text-sm rounded-xl"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
