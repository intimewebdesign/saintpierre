/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Users, Clock, Mail, Phone, User, Star, Landmark, Sparkles, CheckCircle } from 'lucide-react';
import { ReservationData } from '../types';

export default function ReservationForm() {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    guests: 2,
    date: '',
    time: '19:30',
    specialRequests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successCode, setSuccessCode] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.date) {
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury API booking response
    setTimeout(() => {
      const complexCode = 'SP-' + Math.floor(100000 + Math.random() * 900000);
      setIsSubmitting(false);
      setSuccessCode(complexCode);
    }, 1500);
  };

  const timeOptions = [
    '12:00 (Lunch)', '12:30 (Lunch)', '13:00 (Lunch)',
    '18:30 (Dinner)', '19:00 (Dinner)', '19:30 (Dinner)', '20:00 (Dinner)'
  ];

  const handleReset = () => {
    setSuccessCode(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      guests: 2,
      date: '',
      time: '19:30',
      specialRequests: ''
    });
  };

  return (
    <section
      id="reservation-section"
      className="relative min-h-screen flex items-center justify-center bg-transparent z-20 px-6 md:px-12 py-24 overflow-hidden"
    >
      {/* Absolute decorative ambient light rings behind registration card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#cd7f32]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl w-full">
        
        <AnimatePresence mode="wait">
          {!successCode ? (
            <motion.div
              key="form-container"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="relative bg-black/40 border border-[#cd7f32]/25 backdrop-blur-2xl px-6 py-10 md:p-12 rounded shadow-2xl overflow-hidden"
            >
              {/* Gold Framing Lines */}
              <div className="absolute inset-2 border border-[#fffff0]/5 pointer-events-none rounded" />

              {/* Title Header */}
              <div className="flex flex-col items-center text-center mb-10 relative">
                <Landmark className="w-6 h-6 text-[#cd7f32] mb-4" />
                <span className="text-[10px] font-mono tracking-[0.4em] text-[#cd7f32] uppercase mb-1">
                  SECURE AN EXCLUSIVE SLOT
                </span>
                <h2 className="text-2xl md:text-4xl font-serif text-[#fffff0] tracking-wide font-light">
                  The Reservation Table
                </h2>
                <p className="text-xs text-white/40 max-w-md mt-2 font-sans font-light">
                  Private suites, counter reservations, or waterfront tables are limited. Kindly complete the form below to initiate registration.
                </p>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleSubmit} className="space-y-6 relative">
                
                {/* 3 columns input on top (Name, Email, Phone) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-mono tracking-widest text-[#fffff0]/60 flex items-center gap-1.5 uppercase">
                      <User className="w-3 h-3 text-[#cd7f32]/70" /> FULL NAME
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Lord Sterling"
                      className="w-full bg-[#121213]/80 border border-[#cd7f32]/20 px-4 py-3 text-sm text-[#fffff0] placeholder-white/20 focus:outline-none focus:border-[#cd7f32] rounded transition-all font-sans font-light"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-mono tracking-widest text-[#fffff0]/60 flex items-center gap-1.5 uppercase">
                      <Mail className="w-3 h-3 text-[#cd7f32]/70" /> EMAIL ADDRESS
                    </label>
                    <input
                      type="type"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sterling@aman.com"
                      className="w-full bg-[#121213]/80 border border-[#cd7f32]/20 px-4 py-3 text-sm text-[#fffff0] placeholder-white/20 focus:outline-none focus:border-[#cd7f32] rounded transition-all font-sans font-light"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-mono tracking-widest text-[#fffff0]/60 flex items-center gap-1.5 uppercase">
                      <Phone className="w-3 h-3 text-[#cd7f32]/70" /> DIRECT TELEPHONE
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g., +65 9123 4567"
                      className="w-full bg-[#121213]/80 border border-[#cd7f32]/20 px-4 py-3 text-sm text-[#fffff0] placeholder-white/20 focus:outline-none focus:border-[#cd7f32] rounded transition-all font-sans font-light"
                    />
                  </div>

                </div>

                {/* 3 columns bottom (Guests, Date, Time) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Guest selector */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-mono tracking-widest text-[#fffff0]/60 flex items-center gap-1.5 uppercase">
                      <Users className="w-3 h-3 text-[#cd7f32]/70" /> GUEST COUNT
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                      className="w-full bg-[#121213]/80 border border-[#cd7f32]/20 px-4 py-3 text-sm text-[#fffff0] focus:outline-none focus:border-[#cd7f32] rounded transition-all font-sans"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num} className="bg-[#121213] text-white">
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date Picker */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-mono tracking-widest text-[#fffff0]/60 flex items-center gap-1.5 uppercase">
                      <Calendar className="w-3 h-3 text-[#cd7f32]/70" /> CHOSEN DATE
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#121213]/80 border border-[#cd7f32]/20 px-4 py-3 text-sm text-[#fffff0] focus:outline-none focus:border-[#cd7f32] rounded transition-all font-sans"
                    />
                  </div>

                  {/* Time slots */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-mono tracking-widest text-[#fffff0]/60 flex items-center gap-1.5 uppercase">
                      <Clock className="w-3 h-3 text-[#cd7f32]/70" /> SPECIFIC TIME
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-[#121213]/80 border border-[#cd7f32]/20 px-4 py-3 text-sm text-[#fffff0] focus:outline-none focus:border-[#cd7f32] rounded transition-all font-sans"
                    >
                      {timeOptions.map((time) => (
                        <option key={time} value={time} className="bg-[#121213] text-white">
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>

                </div>

                {/* Rich text area for special culinary instructions */}
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-mono tracking-widest text-[#fffff0]/60 uppercase">
                    SPECIAL DIETARY REQUESTS & OCCASIONS (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    placeholder="Describe allergy protocols, truffle desires, birthdays, or private sovereign room preference..."
                    className="w-full bg-[#121213]/80 border border-[#cd7f32]/20 px-4 py-3 text-sm text-[#fffff0] placeholder-white/20 focus:outline-none focus:border-[#cd7f32] rounded transition-all font-sans resize-none font-light"
                  />
                </div>

                {/* Regulatory / Exclusivity reminder */}
                <p className="text-[10px] text-white/35 font-sans leading-relaxed text-center font-light">
                  * Note: Saint Pierre imposes an elegant smart casual dress code. Tailored shorts, slippers, and casual athletics trousers are politely restricted inside the main dining hall.
                </p>

                {/* Submit Trigger */}
                <div className="pt-4 flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative overflow-hidden cursor-pointer group flex items-center gap-3 border border-[#cd7f32] bg-[#cd7f32]/10 hover:bg-[#cd7f32] hover:text-black hover:border-white text-[#fffff0] font-mono text-[11px] tracking-[0.25em] px-10 py-4 transition-all duration-500 rounded-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-t-transparent border-[#fffff0] animate-spin rounded-full" />
                        <span>PROCESSING PROTOCOL...</span>
                      </>
                    ) : (
                      <>
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>BOOK PRIVATE SEAT</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            </motion.div>
          ) : (
            // Breathtaking confirmation success view card
            <motion.div
              key="success-container"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="bg-[#121213]/90 border border-[#cd7f32] p-8 md:p-12 text-center rounded shadow-2xl relative overflow-hidden flex flex-col items-center"
            >
              {/* Success decorative frame */}
              <div className="absolute inset-2 border border-[#fffff0]/10 pointer-events-none rounded" />
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#cd7f32]/5 rounded-full blur-2xl pointer-events-none" />

              <CheckCircle className="w-12 h-12 text-[#cd7f32] mb-6" />

              <span className="text-[10px] font-mono text-[#cd7f32] tracking-[0.3em] uppercase block mb-2">
                RESERVATION CONFIRMED
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-[#fffff0] tracking-wide mb-6 font-light">
                Bienvenue au Saint Pierre
              </h3>

              {/* Master verification ticket summary */}
              <div className="bg-black/40 border border-[#cd7f32]/15 p-6 rounded max-w-md w-full mb-8 flex flex-col gap-3 font-mono text-left text-xs text-white/70">
                <div className="flex justify-between items-center pb-2.5 border-b border-[#cd7f32]/10 text-[#cd7f32]">
                  <span>BOOKING TICKET CODE:</span>
                  <span className="font-semibold tracking-wider font-sans text-white">{successCode}</span>
                </div>
                <div className="flex justify-between">
                  <span>NAME:</span>
                  <span className="text-white font-sans">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>GUEST COUNT:</span>
                  <span className="text-white font-sans">{formData.guests} Guests</span>
                </div>
                <div className="flex justify-between">
                  <span>DATE & TIME:</span>
                  <span className="text-white font-sans">
                    {formData.date} @ {formData.time}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>METADATA STATUS:</span>
                  <span className="text-[#81c784] font-semibold flex items-center gap-1">
                    ACTIVE <Sparkles className="w-2.5 h-2.5 animate-pulse" />
                  </span>
                </div>
              </div>

              <p className="text-xs text-white/50 leading-relaxed font-sans max-w-md mb-8 font-light">
                A formal michelin verification invitation, location coordinate links, and sommelier dietary logs have been dispatched to your digital mail: <strong className="text-white">{formData.email}</strong>.
              </p>

              <button
                onClick={handleReset}
                className="border border-[#cd7f32]/40 px-6 py-2 bg-[#cd7f32]/5 text-[#fffff0] hover:bg-[#cd7f32] hover:text-black transition-all duration-300 font-mono text-[10px] tracking-widest cursor-pointer"
              >
                BOOK ANOTHER TABLE
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
