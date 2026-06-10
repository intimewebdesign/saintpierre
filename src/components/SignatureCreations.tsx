/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye, X, Compass, Wine, Info, RotateCw } from 'lucide-react';
import { Dish } from '../types';

interface SignatureCreationsProps {
  onSelectDish: (shape: 'spheres' | 'torus' | 'particles' | 'crystals', color: string) => void;
}

export default function SignatureCreations({ onSelectDish }: SignatureCreationsProps) {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [activeTab, setActiveTab] = useState<'details' | 'wine'>('details');
  const [infoPopupDishId, setInfoPopupDishId] = useState<string | null>(null);

  const creations: Dish[] = [
    {
      id: 'crabe',
      name: 'KEGANI CRAB',
      description: 'Hairy Crab, Sudachi, Ginger Gelée, Imperial Oscietra Caviar',
      story: 'A tribute to the cold depths of Hokkaido. The sweet, fine meat of the Japanese hairy crab is paired with a acidic sudachi structure, balanced elegantly by the salinity of premium aged caviar and floating bronze ginger droplets.',
      ingredients: ['Hokkaido Hairy Crab', 'Sudachi Juice Citrus', 'Imperial Oscietra Caviar', 'Ginger Broth Gelée', 'Fresh micro shiso'],
      flavors: ['Sweet marine', 'Zesty sudachi citrus', 'Briny caviar pop'],
      winePairing: 'Champagne Krug Clos d\'Ambonnay 2002',
      pairingNotes: 'The absolute depth of pure Pinot Noir cuts through the hairy crab sweetness, carrying hazelnut and vanilla structures that marry with the sudachi zest.',
      price: 'S$ 128',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600',
      threeColor: '#e5a93c',
      threeShape: 'spheres',
    },
    {
      id: 'agneau',
      name: 'L\'AGNEAU DE PYRÉNÉES',
      description: 'Milk-fed Pyrenees Lamb, Eggplant Caviar, Black Garlic Consommé',
      story: 'Sourced from legendary Pyrenees pastures. The ultra-tender milk-fed lamb loin is slow-cooked at 54°C, complemented by sweet black garlic paste and caramelized infant eggplant glazed in roasted red bell pepper essences.',
      ingredients: ['Milk-Fed Pyrenees Lamb Saddle', 'Sweet Aged Black Garlic', 'Heirloom Eggplant Caviar', 'Wild Rosemary oil essence', 'Infant Turnip garnish'],
      flavors: ['Earthy black garlic', 'Rich savory loin', 'Wild herbal aromas'],
      winePairing: 'Château Mouton Rothschild 1996 (Pauillac)',
      pairingNotes: 'A towering Bordeaux classic. Deep graphite, cedar leatherwood, and blackcurrant notes mirror the rosemary-infused lamb juices with flawless structural harmony.',
      price: 'S$ 165',
      image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=600',
      threeColor: '#8c2d19',
      threeShape: 'torus',
    },
    {
      id: 'chocolat',
      name: 'LE CHOCOLAT NOIR',
      description: 'Araguani Chocolate Sphere, Saffron Pistil Crème, Salted Caramel Rain',
      story: 'A complex, multi-textured geometric geometry. A delicate sphere of 72% single-origin Venezuelan chocolate melts under warm salted caramel pouring, revealing an inner core of saffron crème brûlée and gold crumble.',
      ingredients: ['Araguani 72% Single Origin Chocolate', 'Saffron Pistils from Iran', 'Fleur de Sel Salted Caramel', 'Crispy Golden Crumble nuggets', 'Organic Edible 24k Gold Foliage'],
      flavors: ['72% Cocoa Bitterness', 'Warm Salted Caramel', 'Aromatic Saffron Honey'],
      winePairing: 'Taylor\'s Single Harvest Tawny Port 1970',
      pairingNotes: 'Deep amber mahogany wood notes, vintage fig preserve, dried date molasses, and warm spices offer a majestic backdrop that bridges the intense cacao tannins.',
      price: 'S$ 95',
      image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80&w=600',
      threeColor: '#6d4c41',
      threeShape: 'crystals',
    },
    {
      id: 'homard',
      name: 'LE HOMARD SOUFFLÉ',
      description: 'Brittany Lobster, Champagne Beurre Blanc, Sea Grape Bubbles',
      story: 'Brittany blue lobster tailored into a delicate souffléd canvas. Embellished with sparkling sea grapes that burst with oceanic juices, wrapped gently in a velvety, warm champagne beurre blanc reduction.',
      ingredients: ['Brittany Blue Lobster', 'Verve Clicquot Brut Champagne', 'Siberian Sea Grapes', 'Wild Chive blossoms', 'Salted Butter emulsion'],
      flavors: ['Rich buttery emulsion', 'Champagne wine reduction', 'Crisp marine berries'],
      winePairing: 'Domaine de la Romanée-Conti Montrachet 2011',
      pairingNotes: 'The grandest white Chardonnay on Earth. Its intense buttered toast, wet mineral flint, and rich, layered viscosity match the royal lobster meat instantly.',
      price: 'S$ 185',
      threeColor: '#fffff0',
      threeShape: 'particles',
      image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=600',
    }
  ];

  const handleSelect = (dish: Dish) => {
    setSelectedDish(dish);
    setActiveTab('details');
    // Call the 3D modifier event that changes the background Three.js Canvas mesh!
    onSelectDish(dish.threeShape, dish.threeColor);
  };

  return (
    <section
      id="creations-section"
      className="relative min-h-screen flex flex-col justify-center bg-transparent z-20 px-6 md:px-12 py-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#cd7f32]" />
            <span className="text-[10px] font-mono tracking-[0.45em] text-[#cd7f32] uppercase">
              ACTE III: LES EMBLEMES
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#fffff0] tracking-wide font-light">
            Signature Creations
          </h2>
          <p className="text-xs md:text-sm font-mono tracking-widest text-[#fffff0]/40 mt-3 uppercase flex items-center gap-2">
            <RotateCw className="w-3.5 h-3.5 text-[#cd7f32] animate-spin-slow" />
            SELECT A DISH TO MUTATE THE 3D SCENE BACKGROUND
          </p>
        </motion.div>

        {/* 4 columns modern visual bento-like listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {creations.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              onClick={() => handleSelect(dish)}
              className="group-card relative overflow-hidden bg-[#18181a]/40 border border-[#cd7f32]/10 rounded hover:border-[#cd7f32]/40 transition-all duration-500 cursor-pointer p-6 flex flex-col justify-between aspect-[3/4] backdrop-blur-sm group"
            >
              {/* Decorative corner indicators representing luxury frames */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#cd7f32]/20 group-hover:border-[#cd7f32]/60 transition-colors" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#cd7f32]/20 group-hover:border-[#cd7f32]/60 transition-colors" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#cd7f32]/20 group-hover:border-[#cd7f32]/60 transition-colors" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#cd7f32]/20 group-hover:border-[#cd7f32]/60 transition-colors" />

              {/* Number Index and Info Toggle */}
              <div className="flex justify-between items-center w-full z-10">
                <span className="text-[10px] font-mono tracking-widest text-[#cd7f32]/40">
                  NO. 0{index + 1}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setInfoPopupDishId(infoPopupDishId === dish.id ? null : dish.id);
                  }}
                  className="p-1.5 rounded bg-black/50 border border-[#cd7f32]/20 hover:border-[#cd7f32] text-[#cd7f32] hover:bg-[#cd7f32]/10 transition-all cursor-pointer flex items-center justify-center relative"
                  title="Quick ingredients & flavor guide"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span className="absolute -top-1 -right-1 flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cd7f32]/60 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#cd7f32]"></span>
                  </span>
                </button>
              </div>

              {/* Central Title */}
              <div className="my-auto flex flex-col gap-2">
                <h3 className="text-lg font-serif text-[#fffff0] group-hover:text-[#cd7f32] transition-colors leading-snug">
                  {dish.name}
                </h3>
                <p className="text-xs text-white/50 leading-relaxed font-sans line-clamp-3 font-light">
                  {dish.description}
                </p>
              </div>

              {/* Interactive Inspect Prompt */}
              <div className="flex items-center justify-between border-t border-[#cd7f32]/10 pt-4 mt-2">
                <span className="text-xs font-mono text-[#cd7f32]">
                  {dish.price}
                </span>
                <span className="text-[9px] font-mono tracking-widest text-[#fffff0]/40 group-hover:text-[#fffff0] transition-colors flex items-center gap-1.5 uppercase">
                  <Eye className="w-3.5 h-3.5" /> INSPECT DISH
                </span>
              </div>

              {/* Quick Specs Slide-Up Pop-Up Overlay */}
              <AnimatePresence>
                {infoPopupDishId === dish.id && (
                  <motion.div
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '100%', opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                    onClick={(e) => e.stopPropagation()}
                    className="absolute inset-0 bg-[#0c0c0e]/98 p-5 flex flex-col justify-between z-50 border border-[#cd7f32]/30 rounded"
                  >
                    <div>
                      {/* Pop-up header */}
                      <div className="flex items-center justify-between border-b border-[#cd7f32]/20 pb-2 mb-4">
                        <span className="text-[9px] font-mono tracking-widest text-[#cd7f32] uppercase flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-[#cd7f32]/80" /> FLAVOR BLUEPRINT
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setInfoPopupDishId(null);
                          }}
                          className="text-white/40 hover:text-[#cd7f32] transition-colors cursor-pointer p-0.5"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Ingredients */}
                      <div className="mb-4">
                        <span className="text-[8px] font-mono text-white/40 tracking-wider uppercase block mb-1.5">
                          KEY INGREDIENTS
                        </span>
                        <ul className="space-y-1.5">
                          {dish.ingredients.slice(0, 3).map((ing, i) => (
                            <li key={i} className="text-[11px] text-white/80 font-sans font-light flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-[#cd7f32]" />
                              <span className="truncate">{ing}</span>
                            </li>
                          ))}
                          {dish.ingredients.length > 3 && (
                            <li className="text-[9px] text-[#cd7f32]/70 font-mono font-light pl-2.5">
                              + {dish.ingredients.length - 3} more luxury elements
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Flavors */}
                      {dish.flavors && (
                        <div>
                          <span className="text-[8px] font-mono text-white/40 tracking-wider uppercase block mb-1.5">
                            FLAVOR HARMONICS
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {dish.flavors.map((flv, i) => (
                              <span key={i} className="text-[9px] bg-black/60 border border-[#cd7f32]/10 text-[#fffff0]/75 py-0.5 px-2 rounded-sm font-sans font-light tracking-wide">
                                {flv}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Pop-up footer trigger */}
                    <div className="border-t border-[#cd7f32]/10 pt-3 flex items-center justify-between">
                      <span className="text-xs font-mono text-[#cd7f32]">
                        {dish.price}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setInfoPopupDishId(null);
                          handleSelect(dish);
                        }}
                        className="text-[9px] font-mono font-semibold text-white hover:text-[#cd7f32] transition-colors flex items-center gap-1 uppercase cursor-pointer"
                      >
                        <Compass className="w-3.5 h-3.5 text-[#cd7f32]" /> DETAILED HARMONY
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Detailed presentation Drawer (AnimatePresence) */}
        <AnimatePresence>
          {selectedDish && (
            <div className="fixed inset-0 z-500 flex bg-black/80 items-center justify-center p-4">
              
              {/* Dark Overlay backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedDish(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-md"
              />

              {/* Drawer Box container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: 'spring', damping: 25 }}
                className="relative bg-[#18181a]/95 border border-[#cd7f32]/40 max-w-2xl w-full rounded shadow-2xl p-6 md:p-8 overflow-hidden backdrop-blur-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedDish(null)}
                  className="absolute top-4 right-4 p-2 text-white/50 hover:text-[#cd7f32] transition-colors cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Sub title / index */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[9px] font-mono text-[#cd7f32] tracking-wider uppercase">
                    MICHELIN SIGNATURE ARCHITECTURE
                  </span>
                  <span className="text-white/20">•</span>
                  <span className="text-[9px] font-mono text-[#fffff0]/40 uppercase">
                    Shape: {selectedDish.threeShape}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-serif text-[#fffff0] tracking-wide mb-2 leading-none font-light">
                  {selectedDish.name}
                </h3>
                <span className="text-xs font-mono text-[#cd7f32] block mb-6 uppercase tracking-wider">
                  Price: {selectedDish.price} NETT
                </span>

                {/* Tab selections */}
                <div className="flex border-b border-[#cd7f32]/10 mb-6 gap-6">
                  <button
                    onClick={() => setActiveTab('details')}
                    className={`pb-2.5 text-xs font-mono tracking-widest relative cursor-pointer ${
                      activeTab === 'details' ? 'text-[#cd7f32]' : 'text-white/40 hover:text-white'
                    }`}
                  >
                    DISCOVER FLAVORS
                    {activeTab === 'details' && (
                      <motion.span
                        layoutId="activeTabUnderline"
                        className="absolute bottom-0 left-0 w-full h-[1px] bg-[#cd7f32]"
                      />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab('wine')}
                    className={`pb-2.5 text-xs font-mono tracking-widest relative cursor-pointer ${
                      activeTab === 'wine' ? 'text-[#cd7f32]' : 'text-white/40 hover:text-white'
                    }`}
                  >
                    WINE HARMONY
                    {activeTab === 'wine' && (
                      <motion.span
                        layoutId="activeTabUnderline"
                        className="absolute bottom-0 left-0 w-full h-[1px] bg-[#cd7f32]"
                      />
                    )}
                  </button>
                </div>

                {/* Tab Contents */}
                <div className="min-h-[220px]">
                  <AnimatePresence mode="wait">
                    {activeTab === 'details' ? (
                      <motion.div
                        key="details"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div>
                          <span className="text-[10px] font-mono text-[#fffff0]/40 uppercase tracking-widest flex items-center gap-1.5 mb-2">
                            <Compass className="w-3.5 h-3.5 text-[#cd7f32]/60" /> THE INSPIRATION
                          </span>
                          <p className="text-sm text-white/70 leading-relaxed font-sans font-light">
                            {selectedDish.story}
                          </p>
                        </div>

                        <div>
                          <span className="text-[10px] font-mono text-[#fffff0]/40 uppercase tracking-widest flex items-center gap-1.5 mb-2.5">
                            <Sparkles className="w-3.5 h-3.5 text-[#cd7f32]/60" /> INGREDIENTS LISTING
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {selectedDish.ingredients.map((ingredient) => (
                              <span
                                key={ingredient}
                                className="bg-[#121213] border border-[#cd7f32]/10 text-white/60 text-[10px] font-mono px-3 py-1.5 rounded-full"
                              >
                                {ingredient}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="wine"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-5"
                      >
                        <div className="bg-[#121213] p-4 rounded border border-[#cd7f32]/10 flex items-start gap-3">
                          <Wine className="w-5 h-5 text-[#cd7f32] shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[9px] font-mono text-[#cd7f32] tracking-widest uppercase block mb-1">
                              RECOMMENDED SOMMELIER CRU
                            </span>
                            <h4 className="text-base font-serif text-[#fffff0] tracking-wide font-light">
                              {selectedDish.winePairing}
                            </h4>
                          </div>
                        </div>

                        <div>
                          <span className="text-[10px] font-mono text-[#fffff0]/40 uppercase tracking-widest flex items-center gap-1.5 mb-2">
                            <Info className="w-3.5 h-3.5 text-[#cd7f32]" /> PAIRING NOTES
                          </span>
                          <p className="text-sm text-white/70 leading-relaxed font-sans font-light">
                            {selectedDish.pairingNotes}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer close helper */}
                <div className="mt-8 pt-4 border-t border-[#cd7f32]/10 flex justify-end">
                  <button
                    onClick={() => setSelectedDish(null)}
                    className="px-6 py-2.5 bg-[#cd7f32]/10 border border-[#cd7f32]/30 hover:bg-[#cd7f32] hover:text-black hover:border-[#cd7f32] text-[#fffff0] font-mono text-[10px] tracking-widest transition-all duration-300 rounded-sm cursor-pointer"
                  >
                    CLOSE PRESENTATION
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
