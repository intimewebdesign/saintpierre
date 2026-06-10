/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Star, History, Sparkles } from 'lucide-react';

interface Milestone {
  year: string;
  title: string;
  desc: string;
  michelinStatus?: string;
}

export default function ChefSection() {
  const [activeMilestone, setActiveMilestone] = useState(0);

  const milestones: Milestone[] = [
    {
      year: '1992',
      title: 'L\'apprentissage Classique',
      desc: 'Trained under classic French masters in Templeuve, Belgium, mastering the core rules of standard sauces, stocks, and timing.',
    },
    {
      year: '2000',
      title: 'Arrival in Southeast Asia',
      desc: 'Relocated to Singapore, introducing contemporary, elegant setups that challenge local assumptions about European fine dining.',
    },
    {
      year: '2016',
      title: 'The Evolution at One Fullerton',
      desc: 'Relocated Saint Pierre to its ultimate scenic location overlooking Marina Bay, crafting the conceptual fusion of French base math and Japanese seasonal master ingredients.',
    },
    {
      year: '2019',
      title: 'Two Michelin Stars Achieved',
      desc: 'Official coronation. Awarded 2 Michelin Stars by the prestigious Michelin Guide, representing culinary craftsmanship worth a detour.',
      michelinStatus: '⭐⭐'
    },
    {
      year: '2026',
      title: 'Philosophical Mastery',
      desc: 'Deep integration of yoga discipline, Zen breathing rhythm, and molecular gastronomy science right into daily kitchen services.',
      michelinStatus: '⭐⭐'
    }
  ];

  return (
    <section
      id="chef-section"
      className="relative min-h-screen flex items-center justify-center bg-transparent z-20 px-6 md:px-12 py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Chef Portrait & Floating Awards Cards */}
        <div className="lg:col-span-5 order-2 lg:order-1 relative flex justify-center">
          <div className="relative w-full max-w-[340px] aspect-[3/4]">
            
            {/* Chef Portrait Frame */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
              className="w-full h-full rounded border border-[#cd7f32]/20 overflow-hidden relative shadow-2xl bg-black"
            >
              {/* Elegant illustration/photo mapping of chef figure */}
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=600"
                alt="Chef Emmanuel Stroobant"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 transition-all duration-[3000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121213] via-transparent to-transparent opacity-80" />
              
              {/* Gold/Copper framing overlay */}
              <div className="absolute inset-3 border border-[#fffff0]/10 rounded" />
            </motion.div>

            {/* Float Badge 1 (Two Michelin Stars) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -top-6 -right-6 md:-right-10 bg-[#121213]/90 border border-[#cd7f32] px-4 py-3 rounded shadow-xl backdrop-blur-md flex items-center gap-2 z-10"
            >
              <div className="flex flex-col">
                <span className="text-[7px] font-mono tracking-widest text-[#fffff0]/40 uppercase">
                  MICHELIN GUIDE
                </span>
                <span className="text-[10px] font-serif tracking-[0.1em] text-[#cd7f32] font-semibold flex items-center gap-1">
                  TWO STARS <Star className="w-2.5 h-2.5 fill-[#cd7f32] text-[#cd7f32]" />
                </span>
              </div>
            </motion.div>

            {/* Float Badge 2 (Philosopher detail) */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute -bottom-6 -left-6 md:-left-10 bg-[#1a1512]/90 border border-[#fffff0]/15 p-4 rounded shadow-xl backdrop-blur-md flex flex-col gap-1 z-10"
            >
              <span className="text-[8px] font-mono tracking-widest text-[#cd7f32]">
                KITCHEN DOCTRINE
              </span>
              <span className="text-xs font-serif text-[#fffff0]">
                “Discipline, Focus, Devotion.”
              </span>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Narrative, Title, and Interactive Timeline */}
        <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
          
          {/* Section Marker */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-[#cd7f32]" />
            <span className="text-[10px] font-mono tracking-[0.45em] text-[#cd7f32] uppercase">
              ACTE II: LE MAETRE DE CHANT
            </span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-serif text-[#fffff0] tracking-wide mb-3 leading-tight font-light"
          >
            Emmanuel Stroobant
          </motion.h3>
          <span className="text-xs font-mono tracking-[0.3em] text-[#cd7f32] mb-8 uppercase">
            Grand Chef & Visionary Artist
          </span>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm md:text-base text-white/60 leading-relaxed font-sans mb-10 max-w-xl"
          >
            Grand Chef Emmanuel Stroobant brings a philosophical calm to Saint Pierre. Drawing upon decades of ultra-fine French classical gastronomy, he filters each creation through the lens of Japanese ingredient architecture and absolute mathematical precision. Each dish represents a story of focus, geometry, spirit, and balance.
          </motion.p>

          {/* Interactive Timeline Controls */}
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-mono tracking-[0.35em] text-[#fffff0]/40 uppercase flex items-center gap-2">
              <History className="w-3.5 h-3.5 text-[#cd7f32]" />
              CHRONOLOGY OF CRAFT
            </span>

            {/* Years Selection Carousel */}
            <div className="flex items-center gap-1.5 md:gap-3 overflow-x-auto pb-4 border-b border-[#cd7f32]/10 scrollbar-none">
              {milestones.map((ms, idx) => (
                <button
                  key={ms.year}
                  onClick={() => setActiveMilestone(idx)}
                  className={`px-4 py-2 text-xs font-mono tracking-widest rounded-sm border transition-all duration-500 cursor-pointer ${
                    activeMilestone === idx
                      ? 'bg-[#cd7f32]/10 text-[#cd7f32] border-[#cd7f32]'
                      : 'text-[#fffff0]/50 border-white/5 hover:border-[#cd7f32]/30'
                  }`}
                >
                  {ms.year}
                </button>
              ))}
            </div>

            {/* Timeline Content Detail (Smooth AnimatePresence) */}
            <div className="min-h-[140px] relative pt-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMilestone}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-center gap-3">
                    <h4 className="text-lg font-serif text-[#fffff0] tracking-wide">
                      {milestones[activeMilestone].title}
                    </h4>
                    {milestones[activeMilestone].michelinStatus && (
                      <span className="bg-[#cd7f32]/10 text-[#cd7f32] text-[10px] font-mono px-2 py-0.5 rounded tracking-widest">
                        {milestones[activeMilestone].michelinStatus}
                      </span>
                    )}
                  </div>
                  <p className="text-xs md:text-sm text-white/50 leading-relaxed font-sans max-w-xl">
                    {milestones[activeMilestone].desc}
                  </p>
                  
                  <div className="flex items-center gap-2 text-[9px] font-mono text-[#cd7f32] mt-3">
                    <Sparkles className="w-3 h-3" />
                    <span>EXPONENT OF FINE CONTEMPORARY GASTRONOMY</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
