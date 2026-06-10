/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, ChevronLeft, ChevronRight, Sparkles, MapPin } from 'lucide-react';
import { ExperienceScene } from '../types';

export default function InteriorExperience() {
  const [activeScene, setActiveScene] = useState(0);

  const scenes: ExperienceScene[] = [
    {
      id: 'marina_view',
      title: 'Marina Bay Waterfront Panoramic',
      subtitle: 'THE MAIN SALON',
      description: 'Elegant architectural framing overlooks the serene marina waters. Perfect soft candlelighting creates an intimate twilight backdrop while you inspect high-concept contemporary gastronomy.',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000',
    },
    {
      id: 'private_room',
      title: 'The Royal Sovereign Salon',
      subtitle: 'PRIVATE DINING',
      description: 'Surgical sound isolation, dedicated master butler attendants, customized chef menus, and custom bronze accents. Seats up to 14 guests looking for ultimate exclusivity.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000',
    },
    {
      id: 'wine_cellar',
      title: 'The 2,000+ Bottle Treasury',
      subtitle: 'THE GRAND CRU CELLAR',
      description: 'Strict temperature, humidity, and light control. Hosting legendary vintages from DRC, Lafite, Pétrus, and ultra-rare Champagne reserve bottles managed directly by our Head Sommelier.',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1000',
    }
  ];

  const handleNext = () => {
    setActiveScene((prev) => (prev + 1) % scenes.length);
  };

  const handlePrev = () => {
    setActiveScene((prev) => (prev - 1 + scenes.length) % scenes.length);
  };

  return (
    <section
      id="experience-section"
      className="relative min-h-screen flex flex-col justify-center bg-transparent z-20 px-6 md:px-12 py-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#cd7f32]" />
              <span className="text-[10px] font-mono tracking-[0.45em] text-[#cd7f32] uppercase">
                ACTE IV: LE CADRE
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-[#fffff0] tracking-wide font-light">
              The Grand Atmosphere
            </h2>
          </div>
          <p className="text-sm text-white/50 max-w-sm leading-relaxed font-sans font-light">
            Experience Michelin hospitality suspended in timeless architectural space. An oasis of calm at One Fullerton, Singapore.
          </p>
        </div>

        {/* Cinematic Tour Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Text Showcase with AnimatePresence */}
          <div className="lg:col-span-4 flex flex-col justify-center order-2 lg:order-1 pt-6 lg:pt-0">
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#cd7f32] uppercase mb-1">
              {scenes[activeScene].subtitle}
            </span>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={scenes[activeScene].id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <h3 className="text-xl md:text-2xl font-serif text-[#fffff0] tracking-wide leading-snug font-light">
                  {scenes[activeScene].title}
                </h3>
                <p className="text-xs md:text-sm text-white/60 leading-relaxed font-sans font-light">
                  {scenes[activeScene].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#cd7f32]/10">
              <button
                onClick={handlePrev}
                className="p-3 border border-[#cd7f32]/20 hover:border-[#cd7f32] text-[#fffff0] hover:text-[#cd7f32] transition-all rounded-sm cursor-pointer"
                aria-label="Previous scene"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-[#fffff0]/60">
                0{activeScene + 1} / 0{scenes.length}
              </span>
              <button
                onClick={handleNext}
                className="p-3 border border-[#cd7f32]/20 hover:border-[#cd7f32] text-[#fffff0] hover:text-[#cd7f32] transition-all rounded-sm cursor-pointer"
                aria-label="Next scene"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Side: Immersive Floating Layered Image Slider */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="relative aspect-[16/10] w-full bg-black/40 border border-[#cd7f32]/10 rounded overflow-hidden shadow-2xl">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={scenes[activeScene].id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={scenes[activeScene].image}
                    alt={scenes[activeScene].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale opacity-45 brightness-[0.8] hover:scale-105 duration-[4000ms] transition-transform"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Decorative Glass Overlay Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-4 border border-[#fffff0]/5 rounded pointer-events-none" />

              {/* Location Badge */}
              <div className="absolute top-4 left-4 bg-[#121213]/80 backdrop-blur-md px-3.5 py-1.5 rounded border border-[#cd7f32]/15 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#cd7f32]" />
                <span className="text-[8px] font-mono tracking-widest text-[#fffff0]/80 uppercase">
                  SAINT PIERRE — SINGAPORE
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
