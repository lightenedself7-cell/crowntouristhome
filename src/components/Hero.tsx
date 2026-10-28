import React, { useState, useEffect } from 'react';
import { Calendar, Users, BedDouble, Phone, MessageCircle, Sparkles, Clock, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { HOTEL_INFO, ROOMS, HERO_SLIDES } from '../data/hotelData';

interface HeroProps {
  onOpenBooking: (roomType?: string, dates?: { checkIn: string; checkOut: string; guests: string; kids?: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const todayStr = new Date().toISOString().split('T')[0];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(todayStr);
  const [checkOut, setCheckOut] = useState(tomorrowStr);
  const [roomChoice, setRoomChoice] = useState(ROOMS[0].id);
  const [guestCount, setGuestCount] = useState('2 Adults');
  const [kidsCount, setKidsCount] = useState('0 Kids');

  // Hero carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handleQuickInquire = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking(roomChoice, {
      checkIn,
      checkOut,
      guests: guestCount,
      kids: kidsCount,
    });
  };

  return (
    <section className="relative pt-6 pb-14 lg:pt-10 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Headline + Editorial Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Location & River Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#7A5835]">
              <span className="text-[#2D4A3E] font-bold">Beside Chalakudy River</span>
              <span aria-hidden="true">·</span>
              <span>Pariyaram, Kerala</span>
              <span aria-hidden="true">·</span>
              <span>Chalakudy - Anamala Road</span>
            </div>

            {/* Editorial Display Headline - Clean, Punchy & Attractive */}
            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold text-[#1B1917] tracking-tight leading-[1.18]">
              Clean, Honest Comfort on the Athirappilly Road
            </h1>

            {/* Concise, candid description - Brief and clear, no bracketed transit clutter */}
            <p className="text-base sm:text-lg text-[#5A534A] leading-relaxed max-w-2xl">
              A clean, budget-friendly tourist home right beside the Chalakudy River. We focus on pure essentials.
            </p>

            {/* Brief, Uncluttered Trust Badges */}
            <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-[#4E483F]">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E]" />
                Clean Bed Sheets & Towels
              </span>
              <span aria-hidden="true" className="text-[#C5BCAD]">·</span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E]" />
                Attached Clean Washrooms
              </span>
              <span aria-hidden="true" className="text-[#C5BCAD]">·</span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E]" />
                Free Wi-Fi
              </span>
              <span aria-hidden="true" className="text-[#C5BCAD]">·</span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E]" />
                Flexible Check-In
              </span>
              <span aria-hidden="true" className="text-[#C5BCAD]">·</span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E]" />
                24/7 CCTV & Parking
              </span>
            </div>

            {/* Action buttons - Mobile friendly stacking with min 44px tap targets */}
            <div className="pt-3 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#2D4A3E] hover:bg-[#233A30] active:scale-[0.98] rounded-xl shadow-md transition-all min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 text-[#7EE787] shrink-0" />
                <span>Book via WhatsApp</span>
              </button>
              <a
                href={`tel:${HOTEL_INFO.phonePrimary.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-[#373129] bg-[#EFE9DD] hover:bg-[#E5DDCF] rounded-xl transition-all min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-[#7A5835] shrink-0" />
                <span>Call Manager: {HOTEL_INFO.phoneDisplay}</span>
              </a>
              <a
                href={HOTEL_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center sm:justify-start gap-1.5 py-1 text-xs font-medium text-[#7A5835] hover:underline"
              >
                View on Google Maps →
              </a>
            </div>
          </div>

          {/* Right Column: Hero 2-Slide Interactive Property Carousel */}
          <div className="lg:col-span-5 relative">
            <div
              className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E4DDD0] bg-[#1F1E1B] aspect-[4/3] lg:aspect-[5/4] group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Slides */}
              {HERO_SLIDES.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === currentSlide ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={slide.url}
                    alt={`${slide.title} - Crown Tourist Home in Pariyaram, Kerala`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover brightness-[1.02] contrast-[1.03]"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/20 pointer-events-none" />
                </div>
              ))}

              {/* Top Controls Bar */}
              <div className="absolute top-3 inset-x-3 z-10 flex items-center justify-between gap-2">
                {/* Property Label Badge */}
                <div className="bg-[#1F1E1B]/85 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7EE787] inline-block" />
                  <span>Crown Tourist Home</span>
                </div>

                {/* Day / Dusk Slide Switcher Tabs */}
                <div className="bg-black/60 backdrop-blur-md p-0.5 rounded-lg border border-white/10 flex items-center gap-0.5 shadow-sm">
                  {HERO_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => setCurrentSlide(idx)}
                      className={`px-2.5 py-0.5 text-[11px] font-medium rounded-md transition-all ${
                        idx === currentSlide
                          ? 'bg-[#2D4A3E] text-white shadow-sm font-semibold'
                          : 'text-white/75 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {idx === 0 ? 'Day Entrance' : 'Dusk View'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Left / Right Carousel Navigation Chevrons */}
              <button
                onClick={handlePrevSlide}
                aria-label="Previous slide"
                className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/45 hover:bg-black/75 text-white/80 hover:text-white flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 focus:outline-none"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextSlide}
                aria-label="Next slide"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/45 hover:bg-black/75 text-white/80 hover:text-white flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 focus:outline-none"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Bottom Caption inside Image Scrim */}
              <div className="absolute bottom-3 left-4 right-4 z-10 text-white">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <p className="text-[11px] tracking-wider uppercase font-semibold text-[#E5DDCF]">
                    {HERO_SLIDES[currentSlide].tag}
                  </p>
                  {/* Indicator Dots */}
                  <div className="flex items-center gap-1.5">
                    {HERO_SLIDES.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`transition-all rounded-full ${
                          idx === currentSlide ? 'w-4 h-1.5 bg-[#7EE787]' : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-sm sm:text-base font-semibold drop-shadow-sm">
                  {HERO_SLIDES[currentSlide].caption}
                </p>

                <div className="mt-1 flex items-center gap-2 text-xs text-white/85">
                  <span>Direct Highway Access</span>
                  <span aria-hidden="true">·</span>
                  <span>Free Front Parking</span>
                  <span aria-hidden="true">·</span>
                  <span>GPay / Cash</span>
                </div>
              </div>
            </div>

            {/* Quick Distance Floating Badge - Mobile safe positioning */}
            <div className="absolute -bottom-3 left-3 sm:-left-5 z-20 bg-white/95 backdrop-blur-md border border-[#E3DBD0] p-2.5 sm:p-3 rounded-xl shadow-lg max-w-[calc(100%-24px)] sm:max-w-[280px]">
              <div className="flex items-center gap-1.5 text-[11px] text-[#2D4A3E] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#2D4A3E] animate-pulse" />
                <span>Beside Chalakudy River</span>
              </div>
              <p className="text-xs font-medium text-[#2E2A25] mt-0.5 leading-snug">
                Pariyaram · 5 min to Dream World · 20 min to Falls
              </p>
            </div>
          </div>
        </div>

        {/* Quick Booking Inquiry Bar (Full width below Hero split, mobile-first responsive) */}
        <div className="mt-12 sm:mt-14 bg-white rounded-2xl border border-[#E5DFD4] shadow-sm p-4 sm:p-6">
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-sm font-semibold text-[#1F1E1B] uppercase tracking-wider">
                Direct Booking Inquiry
              </h2>
              <p className="text-xs text-[#70685E] mt-0.5">
                No third-party app commissions. You speak directly with our manager via WhatsApp or Phone.
              </p>
            </div>
            <div className="text-xs text-[#7A5835] font-medium flex items-center gap-1.5 shrink-0 self-start sm:self-auto bg-[#FAF6F0] sm:bg-transparent px-2.5 py-1 sm:p-0 rounded-lg">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span>Standard Check-in 12 PM / Check-out 12 PM (Flexible)</span>
            </div>
          </div>

          <form onSubmit={handleQuickInquire} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 items-end">
            {/* Check-In */}
            <div>
              <label className="block text-xs font-semibold text-[#574F44] mb-1">
                Check-in Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full min-w-0 max-w-full text-xs font-medium bg-[#FAF8F5] border border-[#DDD5C7] rounded-lg px-3 py-2.5 text-[#242424] focus:outline-none focus:ring-1 focus:ring-[#2D4A3E]"
                />
              </div>
            </div>

            {/* Check-Out */}
            <div>
              <label className="block text-xs font-semibold text-[#574F44] mb-1">
                Check-out Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full min-w-0 max-w-full text-xs font-medium bg-[#FAF8F5] border border-[#DDD5C7] rounded-lg px-3 py-2.5 text-[#242424] focus:outline-none focus:ring-1 focus:ring-[#2D4A3E]"
                />
              </div>
            </div>

            {/* Room Type */}
            <div>
              <label className="block text-xs font-semibold text-[#574F44] mb-1">
                Room Category
              </label>
              <select
                value={roomChoice}
                onChange={(e) => setRoomChoice(e.target.value)}
                className="w-full min-w-0 max-w-full text-xs font-medium bg-[#FAF8F5] border border-[#DDD5C7] rounded-lg px-3 py-2.5 text-[#242424] focus:outline-none focus:ring-1 focus:ring-[#2D4A3E]"
              >
                {ROOMS.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Adults */}
            <div>
              <label className="block text-xs font-semibold text-[#574F44] mb-1">
                Adults
              </label>
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="w-full min-w-0 max-w-full text-xs font-medium bg-[#FAF8F5] border border-[#DDD5C7] rounded-lg px-3 py-2.5 text-[#242424] focus:outline-none focus:ring-1 focus:ring-[#2D4A3E]"
              >
                <option value="1 Adult">1 Adult</option>
                <option value="2 Adults">2 Adults</option>
                <option value="3 Adults">3 Adults</option>
                <option value="4 Adults">4 Adults</option>
                <option value="5+ Adults">5+ Adults</option>
              </select>
            </div>

            {/* Kids */}
            <div>
              <label className="block text-xs font-semibold text-[#574F44] mb-1">
                Kids (Optional)
              </label>
              <select
                value={kidsCount}
                onChange={(e) => setKidsCount(e.target.value)}
                className="w-full min-w-0 max-w-full text-xs font-medium bg-[#FAF8F5] border border-[#DDD5C7] rounded-lg px-3 py-2.5 text-[#242424] focus:outline-none focus:ring-1 focus:ring-[#2D4A3E]"
              >
                <option value="0 Kids">0 Kids</option>
                <option value="1 Kid">1 Kid</option>
                <option value="2 Kids">2 Kids</option>
                <option value="3+ Kids">3+ Kids</option>
              </select>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-white bg-[#2D4A3E] hover:bg-[#233A30] active:scale-[0.98] rounded-lg shadow-sm transition-all min-h-[42px]"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#7EE787] shrink-0" />
                <span>Inquire Availability</span>
              </button>
            </div>
          </form>

          {/* Transparent Payment Notice */}
          <div className="mt-3.5 pt-3 border-t border-[#F0EBE1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-[#786F63]">
            <span>Payment on arrival: <strong>Google Pay (GPay UPI)</strong> or <strong>Cash</strong>.</span>
            <span>Manager Call: <strong>{HOTEL_INFO.phoneDisplay}</strong> · WhatsApp Booking: <strong>{HOTEL_INFO.whatsappDisplay}</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
};
