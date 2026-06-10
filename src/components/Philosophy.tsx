/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Compass, Sparkles, SlidersHorizontal, Award } from 'lucide-react';

export default function Philosophy() {
  const quote = "Gastronomy is not merely cooking; it is an act of pure emotion, a harmony of nature's finest gifts balanced with surgical French technique.";
  const words = quote.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1], // Luxury cubic bezier
      },
    },
  };

  return (
    <section
      id="philosophy-section"
      className="relative min-h-screen flex items-center justify-center bg-transparent z-20 px-6 md:px-12 py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Elegant Text Reveal & Philosophy Details */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Section Marker */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-[#cd7f32]" />
            <span className="text-[10px] font-mono tracking-[0.45em] text-[#cd7f32] uppercase">
              ACTE I: L'ETILE ET L'AME
            </span>
          </motion.div>

          {/* Word-by-word Elegant Typography Reveal */}
          <motion.h2
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-2xl md:text-4xl lg:text-5xl font-serif text-[#fffff0] leading-[1.3] tracking-wide mb-8 font-light"
          >
            {words.map((word, idx) => (
              <motion.span
                key={idx}
                variants={wordVariants}
                className="inline-block mr-3 select-none"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          {/* Subtext and Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm md:text-base text-white/60 leading-relaxed font-sans max-w-xl space-y-4"
          >
            <p>
              At Saint Pierre, our culinary journey is framed by a dialogue of contrasts. Traditional French techniques form the base architecture, upon which we weave the strict purity, elegance, and seasonality of Japanese produce.
            </p>
            <p>
              Every bite is designed to trigger visual memory, aroma nostalgia, and texture progression, leaving an indelible imprint on the soul.
            </p>
          </motion.div>

          {/* Three Luxury Pillars */}
          <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-[#cd7f32]/10">
            {[
              { icon: Compass, label: 'ORIGIN', value: 'French Purity' },
              { icon: Sparkles, label: 'CRAFT', value: 'Surgical Math' },
              { icon: Award, label: 'SENSE', value: 'Double Michelin' },
            ].map((pillar, idx) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 + idx * 0.15 }}
                className="flex flex-col gap-2"
              >
                <div className="flex items-center gap-2">
                  <pillar.icon className="w-4 h-4 text-[#cd7f32]/60" />
                  <span className="text-[9px] font-mono tracking-widest text-[#fffff0]/40 uppercase">
                    {pillar.label}
                  </span>
                </div>
                <span className="text-[11px] md:text-sm font-serif text-[#fffff0] tracking-wide">
                  {pillar.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Portrait Frame of Atmospheric Dish with Double Layer Silhouette */}
        <div className="lg:col-span-5 relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="relative w-full max-w-[340px] aspect-[4/5] rounded bg-gradient-to-tr from-[#1a1512] to-[#121213] border border-[#cd7f32]/20 overflow-hidden shadow-2xl"
          >
            {/* Elegant Luxury Black Culinary Artwork background */}
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600"
              alt="Culinary masterpiece close up"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40 hover:scale-105 transition-transform duration-[4000ms]"
            />
            
            {/* Elegant glassmorphic border accent */}
            <div className="absolute inset-4 border border-[#fffff0]/10 rounded pointer-events-none" />

            {/* Absolute Luxury Overlay Text inside photo frame */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 z-10 bg-black/40 p-4 backdrop-blur-sm rounded border border-[#cd7f32]/10">
              <span className="text-[9px] font-mono text-[#cd7f32] tracking-widest">
                L'ASSIETTE SIGNATURE
              </span>
              <h4 className="text-sm font-serif text-[#fffff0] tracking-wide">
                “Beauty is simplicity resolved.”
              </h4>
              <span className="text-[9px] font-mono text-white/50">
                — Emmanuel Stroobant
              </span>
            </div>
            
            {/* Floating particle ambient glow inside card */}
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#cd7f32]/10 blur-[80px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
