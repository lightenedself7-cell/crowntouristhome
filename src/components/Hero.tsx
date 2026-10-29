import React, { useState, useEffect } from 'react';
import { Calendar, Users, BedDouble, Phone, MessageCircle, Sparkles, Clock, CheckCircle2, ChevronLeft, ChevronRight, AlertCircle, ExternalLink, MapPin } from 'lucide-react';
import { HOTEL_INFO, ROOMS, HERO_SLIDES } from '../data/hotelData';

interface HeroProps {
  onOpenBooking: (roomType?: string, dates?: { checkIn: string; checkOut: string; guests: string; kids?: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(todayStr);
  const [checkOut, setCheckOut] = useState(tomorrowStr);
  const [roomChoice, setRoomChoice] = useState(ROOMS[0].id);
  const [guestCount, setGuestCount] = useState('2 Adults');
  const [kidsCount, setKidsCount] = useState('0 Children');
  const [dateError, setDateError] = useState<string | null>(null);
  const [inquirySent, setInquirySent] = useState(false);

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

  // When checkIn changes, adjust checkOut if needed
  const handleCheckInChange = (newCheckIn: string) => {
    setCheckIn(newCheckIn);
    setDateError(null);
    setInquirySent(false);

    if (newCheckIn) {
      const inDate = new Date(newCheckIn);
      const outDate = new Date(checkOut);
      if (isNaN(outDate.getTime()) || outDate <= inDate) {
        const nextDay = new Date(inDate);
        nextDay.setDate(nextDay.getDate() + 1);
        setCheckOut(nextDay.toISOString().split('T')[0]);
      }
    }
  };

  const handleCheckOutChange = (newCheckOut: string) => {
    setCheckOut(newCheckOut);
    setDateError(null);
    setInquirySent(false);
  };

  const handleQuickInquire = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Validate dates
    if (!checkIn) {
      setDateError('Please select a check-in date.');
      return;
    }
    if (!checkOut) {
      setDateError('Please select a check-out date.');
      return;
    }
    if (checkIn < todayStr) {
      setDateError('Check-in date cannot be in the past.');
      return;
    }
    if (checkOut <= checkIn) {
      setDateError('Check-out date must be after check-in date.');
      return;
    }

    setDateError(null);

    // 2. Find selected room
    const selectedRoom = ROOMS.find((r) => r.id === roomChoice) || ROOMS[0];

    // 3. Compose clean, professional WhatsApp availability enquiry
    const message = `Hello Crown Tourist Home,
I would like to check room availability and get your best rate:

• Room Category: ${selectedRoom.name}
• Check-in Date: ${checkIn} (Flexible)
• Check-out Date: ${checkOut} (Flexible)
• Adults: ${guestCount}
• Children: ${kidsCount}

Location: Beside Chalakudy River, Pariyaram.
Please let me know if this room is available for these dates and confirm the tariff. Thank you!`;

    const whatsappUrl = `https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setInquirySent(true);
  };

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section className="relative pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-8 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Single Wide Horizontal Hero Accommodation Card */}
        <div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#E3DBD0] bg-[#1A1815] aspect-[4/4] sm:aspect-[16/10] md:aspect-[2.2/1] lg:aspect-[2.7/1] min-h-[460px] sm:min-h-[480px] lg:min-h-[520px] group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Background Images Carousel */}
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.url}
                alt={slide.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-[center_35%] sm:object-[center_30%]"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}

          {/* Dark Gradient Overlay for Maximum Legibility */}
          <div className="absolute inset-0 z-15 bg-gradient-to-t from-black/95 via-black/55 via-50% to-black/20 pointer-events-none" />

          {/* Top Bar inside Card: River Location Badge & Slide Dots */}
          <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 z-20 flex items-center justify-between gap-3 pointer-events-auto">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
                <span className="w-2 h-2 rounded-full bg-[#7EE787] animate-pulse" />
                Beside Chalakudy River
              </span>
              <span className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium text-white border border-white/20">
                Pariyaram, Kerala
              </span>
            </div>

            {/* Slide Navigation Dots */}
            <div className="flex items-center gap-1.5 bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
              <span className="text-[11px] font-medium text-white/80 mr-1 hidden sm:inline">
                {HERO_SLIDES[currentSlide].tag}
              </span>
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all rounded-full ${
                    idx === currentSlide ? 'w-5 h-1.5 bg-[#7EE787]' : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Carousel Next / Prev Controls */}
          <button
            type="button"
            onClick={handlePrevSlide}
            aria-label="Previous slide"
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-25 p-2 sm:p-2.5 rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-xs transition-opacity opacity-75 sm:opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNextSlide}
            aria-label="Next slide"
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-25 p-2 sm:p-2.5 rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-xs transition-opacity opacity-75 sm:opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Hero Content Overlay (Bottom-Left) */}
          <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 lg:p-12 z-20 text-white pointer-events-none">
            <div className="max-w-3xl pointer-events-auto">
              {/* Location Eyebrow */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#E5DDCF] mb-2 drop-shadow-sm">
                <span className="text-[#A3E635] font-bold">Beside Chalakudy River</span>
                <span aria-hidden="true" className="text-white/60">·</span>
                <span>Pariyaram, Kerala</span>
                <span aria-hidden="true" className="text-white/60">·</span>
                <span>Chalakudy–Anamala Road</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] font-semibold text-white tracking-tight leading-[1.14] drop-shadow-md text-balance">
                Clean, Comfortable &amp; Affordable Stay on Athirappilly Road
              </h1>

              {/* Short Description */}
              <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base text-white/90 leading-relaxed max-w-2xl drop-shadow-sm font-normal">
                A budget-friendly tourist home in Pariyaram, Kerala, beside the Chalakudy River. Enjoy clean rooms, essential comforts and convenient access to Athirappilly Waterfalls and water theme parks.
              </p>

              {/* Booking Actions */}
              <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenBooking()}
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#2D4A3E] hover:bg-[#233A30] active:scale-[0.98] rounded-xl shadow-lg border border-white/20 transition-all min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4 text-[#7EE787] shrink-0" />
                  <span>Book via WhatsApp</span>
                </button>

                <a
                  href={`tel:${HOTEL_INFO.phonePrimary.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3.5 text-xs sm:text-sm font-medium text-white bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl border border-white/25 transition-all min-h-[44px]"
                >
                  <Phone className="w-4 h-4 text-[#E5DDCF] shrink-0" />
                  <span>Call Manager: {HOTEL_INFO.phoneDisplay}</span>
                </a>

                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-white/90 hover:text-white hover:underline transition-colors"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Facilities & Location Bar Immediately Below the Hero Card */}
        <div className="mt-4 bg-white rounded-2xl border border-[#E3DBD0] p-4 sm:p-5 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-[#4E483F]">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0" />
                Clean Bed Sheets &amp; Towels
              </span>
              <span aria-hidden="true" className="hidden sm:inline text-[#D5CDBC]">·</span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0" />
                Attached Clean Washrooms
              </span>
              <span aria-hidden="true" className="hidden sm:inline text-[#D5CDBC]">·</span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0" />
                Free Wi-Fi
              </span>
              <span aria-hidden="true" className="hidden sm:inline text-[#D5CDBC]">·</span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0" />
                Flexible Check-In
              </span>
              <span aria-hidden="true" className="hidden sm:inline text-[#D5CDBC]">·</span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0" />
                24/7 CCTV &amp; Front Parking
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#F0EBE0]">
              <a
                href={HOTEL_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7A5835] hover:text-[#2D4A3E] hover:underline"
              >
                <MapPin className="w-3.5 h-3.5 text-[#2D4A3E]" />
                <span>Pariyaram · Location Map</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>
            </div>
          </div>
        </div>

        {/* Direct Booking Conversion Box: "Check Availability & Get Our Best Rate" */}
        <div className="mt-12 sm:mt-14 bg-white rounded-2xl border-2 border-[#2D4A3E]/20 shadow-md p-4 sm:p-6 lg:p-7">
          <div className="mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F0EBE0] pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A5835]">
                <Sparkles className="w-3.5 h-3.5 text-[#2D4A3E]" />
                <span>Direct Manager Enquiry · Best Rate Guarantee</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#1F1E1B] mt-1">
                Check Availability & Get Our Best Rate
              </h2>
              <p className="text-xs sm:text-sm text-[#61584C] mt-1">
                Connect directly with our resident manager on WhatsApp. No extra OTA commissions or booking markups.
              </p>
            </div>
            <div className="text-xs text-[#7A5835] font-medium flex items-center gap-1.5 shrink-0 bg-[#FAF6F0] px-3 py-2 rounded-xl border border-[#EFE8DC]">
              <Clock className="w-3.5 h-3.5 text-[#2D4A3E] shrink-0" />
              <span>Standard 12 PM (Flexible Check-in)</span>
            </div>
          </div>

          {/* Inline Validation Alert */}
          {dateError && (
            <div
              role="alert"
              className="mb-4 p-3 bg-[#FDF2F2] border border-[#F5C2C2] rounded-xl flex items-center gap-2 text-xs text-[#9B1C1C]"
            >
              <AlertCircle className="w-4 h-4 text-[#E02424] shrink-0" />
              <span className="font-medium">{dateError}</span>
            </div>
          )}

          {inquirySent && (
            <div
              role="status"
              className="mb-4 p-3 bg-[#EAF2EC] border border-[#CFE2D3] rounded-xl flex items-center justify-between gap-2 text-xs text-[#20402E]"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0" />
                <span>Opening WhatsApp with your selected dates and room choice...</span>
              </div>
              <button
                type="button"
                onClick={() => setInquirySent(false)}
                className="text-[11px] underline text-[#2D4A3E] font-medium"
              >
                Dismiss
              </button>
            </div>
          )}

          <form onSubmit={handleQuickInquire} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
              {/* Check-In */}
              <div>
                <label htmlFor="hero-checkin" className="block text-xs font-semibold text-[#4F463B] mb-1">
                  Check-in Date
                </label>
                <div className="relative">
                  <input
                    id="hero-checkin"
                    type="date"
                    min={todayStr}
                    value={checkIn}
                    onChange={(e) => handleCheckInChange(e.target.value)}
                    className="w-full min-w-0 text-xs font-medium bg-[#FAF8F5] border border-[#DDD5C7] rounded-xl px-3 py-2.5 text-[#242424] focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              {/* Check-Out */}
              <div>
                <label htmlFor="hero-checkout" className="block text-xs font-semibold text-[#4F463B] mb-1">
                  Check-out Date
                </label>
                <div className="relative">
                  <input
                    id="hero-checkout"
                    type="date"
                    min={checkIn || todayStr}
                    value={checkOut}
                    onChange={(e) => handleCheckOutChange(e.target.value)}
                    className="w-full min-w-0 text-xs font-medium bg-[#FAF8F5] border border-[#DDD5C7] rounded-xl px-3 py-2.5 text-[#242424] focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              {/* Room Category */}
              <div>
                <label htmlFor="hero-room" className="block text-xs font-semibold text-[#4F463B] mb-1">
                  Room Category
                </label>
                <select
                  id="hero-room"
                  value={roomChoice}
                  onChange={(e) => setRoomChoice(e.target.value)}
                  className="w-full min-w-0 text-xs font-medium bg-[#FAF8F5] border border-[#DDD5C7] rounded-xl px-3 py-2.5 text-[#242424] focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] focus:border-transparent transition-all"
                >
                  {ROOMS.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name} ({r.priceEstimate})
                    </option>
                  ))}
                </select>
              </div>

              {/* Adults */}
              <div>
                <label htmlFor="hero-adults" className="block text-xs font-semibold text-[#4F463B] mb-1">
                  Number of Adults
                </label>
                <select
                  id="hero-adults"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full min-w-0 text-xs font-medium bg-[#FAF8F5] border border-[#DDD5C7] rounded-xl px-3 py-2.5 text-[#242424] focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] focus:border-transparent transition-all"
                >
                  <option value="1 Adult">1 Adult</option>
                  <option value="2 Adults">2 Adults</option>
                  <option value="3 Adults">3 Adults</option>
                  <option value="4 Adults">4 Adults</option>
                  <option value="5+ Adults">5+ Adults</option>
                </select>
              </div>

              {/* Children */}
              <div>
                <label htmlFor="hero-children" className="block text-xs font-semibold text-[#4F463B] mb-1">
                  Number of Children
                </label>
                <select
                  id="hero-children"
                  value={kidsCount}
                  onChange={(e) => setKidsCount(e.target.value)}
                  className="w-full min-w-0 text-xs font-medium bg-[#FAF8F5] border border-[#DDD5C7] rounded-xl px-3 py-2.5 text-[#242424] focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] focus:border-transparent transition-all"
                >
                  <option value="0 Children">0 Children</option>
                  <option value="1 Child">1 Child</option>
                  <option value="2 Children">2 Children</option>
                  <option value="3+ Children">3+ Children</option>
                </select>
              </div>
            </div>

            {/* Buttons & Clarification Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="text-[11px] text-[#696154] leading-relaxed max-w-xl">
                <span>
                  <strong>Availability Note:</strong> Clicking below sends an availability enquiry to our manager on WhatsApp. Rooms are confirmed directly upon manager verification.
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
                <a
                  href={`tel:${HOTEL_INFO.phonePrimary.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-medium text-[#373129] bg-[#EFE9DD] hover:bg-[#E5DDCF] rounded-xl transition-colors min-h-[44px]"
                  title={`Call Manager (${HOTEL_INFO.phoneDisplay})`}
                >
                  <Phone className="w-3.5 h-3.5 text-[#7A5835]" />
                  <span>Call Manager: {HOTEL_INFO.phoneDisplay}</span>
                </a>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-[#2D4A3E] hover:bg-[#233A30] active:scale-[0.98] rounded-xl shadow-md transition-all min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4 text-[#7EE787] shrink-0" />
                  <span>Check Availability on WhatsApp</span>
                </button>
              </div>
            </div>
          </form>

          {/* Payment & Transparent Policy Footnote */}
          <div className="mt-4 pt-3 border-t border-[#F0EBE1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-[#786F63]">
            <span>Payment on arrival: <strong>Google Pay (GPay UPI)</strong> or <strong>Cash</strong>.</span>
            <span>Manager: <strong>{HOTEL_INFO.phoneDisplay}</strong> · WhatsApp: <strong>{HOTEL_INFO.whatsappDisplay}</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
};
