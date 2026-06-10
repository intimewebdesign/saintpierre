/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import {
  Compass,
  Award,
  BookOpen,
  ChevronDown,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Volume2,
  VolumeX,
} from 'lucide-react';
import ThreeCanvas from './components/ThreeCanvas';
import Navbar from './components/Navbar';
import Philosophy from './components/Philosophy';
import ChefSection from './components/ChefSection';
import SignatureCreations from './components/SignatureCreations';
import InteriorExperience from './components/InteriorExperience';
import TastingMenu from './components/TastingMenu';
import ReservationForm from './components/ReservationForm';

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [activeDishShape, setActiveDishShape] = useState<'spheres' | 'torus' | 'particles' | 'crystals'>('spheres');
  const [activeDishColor, setActiveDishColor] = useState('#d9a05b');
  const [scrollPct, setScrollPct] = useState(0);

  // Track standard window scroll percentage for procedural float dynamics
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollPct(window.scrollY / totalHeight);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use dynamic IntersectionObserver to update ThreeCanvas camera targets instantly
  useEffect(() => {
    const sections = [
      'hero',
      'philosophy',
      'chef',
      'creations',
      'experience',
      'tastings',
      'reservation'
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Center-based trigger
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const index = sections.indexOf(id.replace('-section', ''));
          if (index !== -1) {
            setCurrentSection(index);
          }
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(`${id}-section`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (index: number) => {
    const sections = [
      'hero',
      'philosophy',
      'chef',
      'creations',
      'experience',
      'tastings',
      'reservation'
    ];
    const targetElement = document.getElementById(`${sections[index]}-section`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(index);
    }
  };

  const handleSelectDish = (shape: 'spheres' | 'torus' | 'particles' | 'crystals', color: string) => {
    setActiveDishShape(shape);
    setActiveDishColor(color);
  };

  return (
    <div className="relative min-h-screen bg-[#121213] text-white flex flex-col font-sans overflow-x-hidden selection:bg-[#cd7f32] selection:text-black">
      
      {/* 3D Immersive WebGL Background Rendering Layer */}
      <ThreeCanvas
        currentSection={currentSection}
        activeDishShape={activeDishShape}
        activeDishColor={activeDishColor}
        scrollProgress={scrollPct}
      />

      {/* Immersive UI Atmospheric Gold/Bronze Light Nodes */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        <div className="absolute top-1/4 left-[-10%] w-[50%] h-[50%] bg-[#cd7f32]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-[-10%] w-[50%] h-[50%] bg-[#d4af37]/3 blur-[100px] rounded-full" />
      </div>

      {/* Modern Top Progress Indicator Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-white/5 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-[#cd7f32] to-[#fffff0]"
          style={{ width: `${scrollPct * 100}%` }}
        />
      </div>

      {/* Floating Header Navigation Component */}
      <Navbar currentSection={currentSection} onNavigate={handleNavigate} />

      {/* --- SECTION 0: HERO SHOWROOM --- */}
      <section
        id="hero-section"
        className="relative min-h-screen flex flex-col justify-between items-center bg-transparent z-20 px-6 pt-32 pb-16 overflow-hidden"
      >
        {/* Floating Luxury Callout Labels around 3D centerpiece (design layout style) */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block select-none">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 1.2 }}
            className="absolute top-[40%] right-[15%] text-right"
          >
            <div className="text-[10px] font-mono tracking-[0.3em] text-[#cd7f32] mb-1">SIGNATURE CREATION</div>
            <div className="text-xs font-serif text-[#fffff0]/70 italic">Blue Lobster, Caviar & Smoked Eel</div>
            <div className="h-[1px] w-16 bg-[#cd7f32]/25 mt-2 ml-auto"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8, duration: 1.2 }}
            className="absolute bottom-[35%] left-[15%] text-left"
          >
            <div className="text-[10px] font-mono tracking-[0.3em] text-[#cd7f32] mb-1">SOMMELIER RECOMMENDATION</div>
            <div className="text-xs font-serif text-[#fffff0]/70 italic">Meursault-Perrières 1er Cru, 2018</div>
            <div className="h-[1px] w-16 bg-[#cd7f32]/25 mt-2"></div>
          </motion.div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center mt-12">
          
          {/* Michelin Stars Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-1.5 bg-black/40 border border-[#cd7f32]/30 px-3.5 py-1.5 rounded-full mb-6 relative overflow-hidden group"
          >
            <Award className="w-3.5 h-3.5 text-[#cd7f32] animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#fffff0] uppercase">
              TWO MICHELIN STARS SINGAPORE
            </span>
          </motion.div>

          {/* Majestic Hero Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#fffff0] tracking-widest leading-none font-extralight"
          >
            SAINT PIERRE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.5 }}
            className="text-xs sm:text-sm font-mono tracking-[0.4em] text-[#cd7f32] mt-5 uppercase max-w-xl leading-relaxed"
          >
            Atmospheric Contemporary Gastronomy & Celestial Geometry
          </motion.p>

          
        </div>

        {/* Scroll hint Indicator */}
        <motion.div
          onClick={() => handleNavigate(1)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 1.2 }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
        >
          <span className="text-[9px] font-mono tracking-[0.3em] text-[#fffff0]/40 group-hover:text-white transition-colors uppercase">
            SCROLL TO COMMENCE JOURNEY
          </span>
          <ChevronDown className="w-4 h-4 text-[#cd7f32] animate-bounce" />
        </motion.div>
      </section>

      {/* --- SECTION 1: THE PHILOSOPHY --- */}
      <Philosophy />

      {/* --- SECTION 2: THE CHEF --- */}
      <ChefSection />

      {/* --- SECTION 3: SIGNATURE CREATIONS --- */}
      <SignatureCreations onSelectDish={handleSelectDish} />

      {/* --- SECTION 4: THE EXPERIENCE --- */}
      <InteriorExperience />

      {/* --- SECTION 5: TASTING MENU --- */}
      <TastingMenu />

      {/* --- SECTION 6: RESERVATION EXPERIENCE --- */}
      <ReservationForm />

      {/* --- FOOTER EXPERIENCE --- */}
      <footer className="bg-[#0e0e0f] border-t border-[#cd7f32]/10 py-16 px-6 md:px-12 z-20 text-white/60 text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Col 1: Crest & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 flex items-center justify-center border border-[#cd7f32]/40 rounded-full font-serif text-[#cd7f32] font-bold text-xs">
                SP
              </div>
              <span className="font-serif tracking-[0.3em] text-sm text-[#fffff0]">SAINT PIERRE</span>
            </div>
            <p className="text-white/40 leading-relaxed font-sans max-w-xs">
              Exceptional French Haute Cuisine with Japanese Zen seasonality. Double crowned Michelin guides.
            </p>
          </div>

          {/* Col 2: Operating Hours */}
          <div className="space-y-4 font-sans">
            <h4 className="font-mono text-[10px] tracking-[0.25em] text-[#cd7f32] uppercase">
              OPERATING HOURS
            </h4>
            <ul className="space-y-2.5 text-white/50">
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#cd7f32]/60" />
                <span>LUNCH: Mon - Sat | 11:30 - 15:00</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#cd7f32]/60" />
                <span>DINNER: Mon - Sat | 18:30 - 23:00</span>
              </li>
              <li className="text-white/30 text-[10px]">
                * Sunday & Public Holidays: Standard bookings closed
              </li>
            </ul>
          </div>

          {/* Col 3: Coordinates */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] tracking-[0.25em] text-[#cd7f32] uppercase">
              THE COORDINATES
            </h4>
            <ul className="space-y-2 text-white/50">
              <li className="flex items-start gap-2 max-w-xs">
                <MapPin className="w-3.5 h-3.5 text-[#cd7f32]/60 shrink-0 mt-0.5" />
                <span>One Fullerton, #02-02B, Singapore 049213</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#cd7f32]/60" />
                <span>+65 6438 0887</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#cd7f32]/60" />
                <span>reservations@saintpierre.com.sg</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Exclusive Social channels & legalities */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] tracking-[0.25em] text-[#cd7f32] uppercase">
              RESERVE CHANNELS
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="#copy"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-full border border-white/10 hover:border-[#cd7f32] flex items-center justify-center text-white/60 hover:text-[#cd7f32] transition-all"
                aria-label="Instagram link"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#copy"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-full border border-white/10 hover:border-[#cd7f32] flex items-center justify-center text-white/60 hover:text-[#cd7f32] transition-colors"
                aria-label="Facebook link"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[10px] text-white/30">
              © 2026 Saint Pierre Gastro Group Pte Ltd. Immediacy guaranteed. All rights strictly reserved.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
