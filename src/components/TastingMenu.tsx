/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Utensils, Award, BookOpen, Quote, CircleDot } from 'lucide-react';
import { MenuItem } from '../types';

export default function TastingMenu() {
  const [clickedItem, setClickedItem] = useState<number>(0);

  const courses: MenuItem[] = [
    {
      chapter: 'CHAPTER I',
      courseName: 'KEGANI TARTLET',
      concept: 'L\'AMUSE-BOUCHE (The Whispering Ocean)',
      ingredients: ['Japanese Hairy Crab', 'Finger Lime beads', 'Buckwheat Crisp', 'Oscietra Caviar'],
      pairing: 'Dom Pérignon Plénitude 2 Vintage 2004',
      chefInsight: '“A delicate opening intended to stimulate salivary pathways. The dry mineral effervescence of aged Dom Pérignon acts as a structural frame for the oily sweetness of the crab.”',
    },
    {
      chapter: 'CHAPTER II',
      courseName: 'LE CRABE ET SUDACHI',
      concept: 'L\'ENTRÉE CHAUDE (Acidic Architecture)',
      ingredients: ['Steamed Hairy Crab leg', 'Fresh Sudachi butter', 'Compressed Radish', 'Herb drops'],
      pairing: 'Maison Leroy Puligny-Montrachet 2015',
      chefInsight: '“We steam the crab body naturally. The sudachi citrus glaze cuts right through fat profiles, while Leroy’s pristine buttery wood texture completes the mid-palate balance.”',
    },
    {
      chapter: 'CHAPTER III',
      courseName: 'WILD FRENCH TURBOT',
      concept: 'LE POISSON (Surgical Purity)',
      ingredients: ['Wild French Turbot', 'Shiitake Dashi Emulsion', 'White Asparagus', 'Sea Parsley'],
      pairing: 'Kistler Vineyards McCrea Vineyard Chardonnay 2018',
      chefInsight: '“Turbot cooked on bone at precise 52°C. The dashi butter mirrors Japanese sensibilities, providing deep umami while respecting classical French reduction mechanics.”',
    },
    {
      chapter: 'CHAPTER IV',
      courseName: 'PYRENEES SADDLE',
      concept: 'LE PLAT PRINCIPAL (Timeless Grandeur)',
      ingredients: ['Milk-Fed Lamb Saddle', 'Black Truffle glaze', 'Caramelized shallot', 'Eggplant'],
      pairing: 'Château Margaux 1995 (1er Grand Cru Classé)',
      chefInsight: '“The crowning achievement of the feast. Margaux brings velvety tannins, floral violet aromatics, and dark tobacco notes that elevate the raw gaminess of the Pyrenees lamb.”',
    },
    {
      chapter: 'CHAPTER V',
      courseName: 'GOLD LEAF SPECTRUM',
      concept: 'LE DESSERT (Timeless Horizon)',
      ingredients: ['Araguani Cacao 72%', 'Saffron Crème', 'Honeycomb crumbs', 'Caramelized gold Leaf'],
      pairing: 'Château d\'Yquem 1998 (Sauternes)',
      chefInsight: '“The sweet climax. Sauternes is liquid gold—delivering sweet apricot nectar, honeyed saffron, and orange peel oils that synthesize with dark Venezuelan chocolate tannins.”',
    }
  ];

  return (
    <section
      id="tastings-section"
      className="relative min-h-screen flex flex-col justify-center bg-transparent z-20 px-6 md:px-12 py-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col mb-16 text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#cd7f32]" />
            <span className="text-[10px] font-mono tracking-[0.45em] text-[#cd7f32] uppercase">
              ACTE V: LE MENU DEGUSTATION
            </span>
            <span className="w-8 h-[1px] bg-[#cd7f32]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#fffff0] tracking-wide mb-4 font-light">
            Metamorphosis Menu
          </h2>
          <p className="text-xs md:text-sm text-white/50 leading-relaxed font-sans font-light">
            Our multi-course tasting menu translates standard seasons into high culinary prose. Click intermediate chapters to inspect details.
          </p>
        </motion.div>

        {/* Master Chapter Slider Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Interactive Vertical Chapter Selectors */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-between gap-4"
          >
            {courses.map((course, idx) => (
              <button
                key={course.chapter}
                onClick={() => setClickedItem(idx)}
                className={`w-full text-left p-5 border rounded transition-all duration-500 cursor-pointer flex items-center justify-between group ${
                  clickedItem === idx
                    ? 'bg-[#cd7f32]/10 border-[#cd7f32] shadow-[0_0_20px_rgba(205,127,50,0.15)]'
                    : 'bg-[#18181a]/20 border-[#cd7f32]/10 hover:border-[#cd7f32]/40'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className={`text-[9px] font-mono tracking-widest ${
                      clickedItem === idx ? 'text-[#cd7f32]' : 'text-white/40 group-hover:text-white/60'
                    }`}>
                      {course.chapter}
                    </span>
                    <span className={`text-[15px] font-serif tracking-widest mt-1 ${
                      clickedItem === idx ? 'text-[#fffff0]' : 'text-[#fffff0]/70 group-hover:text-[#fffff0]'
                    }`}>
                      {course.courseName}
                    </span>
                  </div>
                </div>

                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                  clickedItem === idx ? 'border-[#cd7f32] bg-[#cd7f32]/20' : 'border-[#cd7f32]/30'
                }`}>
                  <CircleDot className={`w-2.5 h-2.5 ${clickedItem === idx ? 'text-[#cd7f32]' : 'text-[#cd7f32]/30'}`} />
                </div>
              </button>
            ))}
          </motion.div>

          {/* Right: Immersive Selected Course Chapter Details Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex"
          >
            <div className="w-full bg-[#18181a]/40 border border-[#cd7f32]/15 backdrop-blur-md rounded p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-2 right-2 p-2 opacity-5">
                <BookOpen className="w-56 h-56 text-[#cd7f32]" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={clickedItem}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-[#cd7f32] tracking-widest uppercase">
                      {courses[clickedItem].concept}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif text-[#fffff0] tracking-wide mb-1 leading-none font-light">
                      {courses[clickedItem].courseName}
                    </h3>
                  </div>

                  {/* Components */}
                  <div>
                    <span className="text-[9px] font-mono tracking-widest uppercase text-white/40 block mb-2.5">
                      CONSTITUING COMPONENTS
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {courses[clickedItem].ingredients.map((ing) => (
                        <span
                          key={ing}
                          className="bg-black/40 border border-[#fffff0]/10 text-white/70 text-[10px] font-mono px-3.5 py-1.5 rounded-sm"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Sommelier Recommendations */}
                  <div className="bg-[#121213]/80 border border-[#cd7f32]/10 p-4 rounded flex flex-col gap-1">
                    <span className="text-[8px] font-mono tracking-widest text-[#cd7f32] uppercase">
                      SOMMELIER HARMONY PRE-REQUISITE
                    </span>
                    <span className="text-sm font-serif text-[#fffff0] tracking-wide font-light">
                      {courses[clickedItem].pairing}
                    </span>
                  </div>

                  {/* Chef Quote */}
                  <div>
                    <span className="text-[9px] font-mono tracking-widest uppercase text-[#cd7f32] block mb-2.5 flex items-center gap-1.5">
                      <Quote className="w-3.5 h-3.5" /> ARCHITECT INSIGHT
                    </span>
                    <p className="text-xs md:text-sm text-white/50 leading-relaxed font-sans italic pl-4 border-l border-[#cd7f32]/30 font-light">
                      {courses[clickedItem].chefInsight}
                    </p>
                  </div>

                  {/* Standard Cost estimate */}
                  <div className="flex items-center justify-between pt-6 border-t border-[#cd7f32]/10">
                    <div className="flex items-center gap-1.5 text-xs text-white/40 font-mono">
                      <Award className="w-3.5 h-3.5 text-[#cd7f32]/60" />
                      <span>Degustation Menu Prestige</span>
                    </div>
                    <span className="text-sm md:text-base font-mono text-[#cd7f32]">
                      S$ 328 nett per guest
                    </span>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
