/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Landmark, Compass, Award, CircleHelp } from 'lucide-react';

interface NavbarProps {
  currentSection: number;
  onNavigate: (sectionIndex: number) => void;
}

export default function Navbar({ currentSection, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'PHILOSOPHY', index: 1 },
    { label: 'CREATIONS', index: 3 },
    { label: 'TASTING MENU', index: 5 },
  ];

  const handleLinkClick = (index: number) => {
    onNavigate(index);
    setIsOpen(false);
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled ? 'bg-[#121213]/90 backdrop-blur-xl border-b border-[#cd7f32]/10 py-4' : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Left Side: Michelin Stars Emblem & Location */}
        <div className="hidden lg:flex items-center gap-3 text-[10px] font-mono tracking-[0.25em] text-[#fffff0]/60">
          <Landmark className="w-3.5 h-3.5 text-[#cd7f32]" />
          <span>SINGAPORE</span>
        </div>

        {/* Center Logo Monogram */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleLinkClick(0)}
        >
          {/* Custom Royal vector monogram representing Saint Pierre */}
          <div className="relative w-10 h-10 flex items-center justify-center border border-[#cd7f32]/40 rounded-full bg-black/40 group-hover:border-[#cd7f32] transition-all duration-500">
            <span className="text-sm font-serif tracking-widest text-[#cd7f32] group-hover:text-[#fffff0] transition-colors font-semibold">
              SP
            </span>
            <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-[#fffff0]/20 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm md:text-base font-serif tracking-[0.3em] text-[#fffff0] leading-none">
              SAINT PIERRE
            </span>
            <span className="text-[8px] font-mono tracking-[0.45em] text-[#cd7f32] mt-1 uppercase">
              Two Michelin Stars
            </span>
          </div>
        </div>

        {/* Desktop Web Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleLinkClick(item.index)}
              className="relative text-xs font-mono tracking-[0.25em] text-white/70 hover:text-[#fffff0] transition-all duration-300 py-2 cursor-pointer group"
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 h-[1px] bg-[#cd7f32] transition-all duration-500 ${
                  currentSection === item.index ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>
          ))}
        </nav>

        {/* Right Side: Book Table Button (Exclusivity trigger) */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onNavigate(6)}
            className="hidden sm:inline-block relative overflow-hidden border border-[#cd7f32] px-5 py-2.5 bg-[#cd7f32]/5 text-[#fffff0] font-mono text-[10px] tracking-[0.25em] hover:bg-[#cd7f32] hover:text-black transition-all duration-500 rounded-sm cursor-pointer"
          >
            RESERVE A TABLE
          </button>

          {/* Mobile responsive toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#fffff0] hover:text-[#cd7f32] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="fixed top-[73px] left-0 w-full bg-[#121213]/98 border-b border-[#cd7f32]/25 z-40 lg:hidden flex flex-col px-8 py-10 gap-6 backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, idx) => (
                <button
                  key={item.label}
                  onClick={() => handleLinkClick(item.index)}
                  className={`text-left text-xs font-mono tracking-[0.2em] py-2 border-b border-[#cd7f32]/10 ${
                    currentSection === item.index ? 'text-[#cd7f32]' : 'text-white/80'
                  }`}
                >
                  {String(idx + 1).padStart(2, '0')}. {item.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <button
                onClick={() => handleLinkClick(6)}
                className="w-full text-center border border-[#cd7f32] py-3 bg-[#cd7f32]/10 text-[#fffff0] font-mono text-xs tracking-[0.2em] rounded-sm"
              >
                RESERVE A TABLE
              </button>

              <div className="flex justify-around text-[9px] font-mono tracking-widest text-[#fffff0]/40 mt-2">
                <span>TEL: +65 6438 0887</span>
                <span>•</span>
                <span>SINGAPORE</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
