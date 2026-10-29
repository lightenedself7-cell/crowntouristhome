import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  MessageCircle,
  Phone,
  Sparkles,
} from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  url: string;
  alt: string;
  roomId?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'dusk-exterior',
    title: 'Crown Tourist Home at Dusk',
    category: 'Exterior & Access',
    tag: 'Chalakudy–Anamala Highway Frontage',
    description:
      'Evening view of Crown Tourist Home on the Chalakudy–Anamala Road in Pariyaram with warm ambient lighting, secure front vehicle parking, and clear roadside signage.',
    url: '/assets/aistudio/Crown_Tourist_Home_at_Dusk_77e290a6.png',
    alt: 'Crown Tourist Home building at dusk with decorative lighting, parking area, and road sign in Pariyaram',
  },
  {
    id: 'entrance-day',
    title: 'Main Entrance & Front Parking',
    category: 'Exterior & Access',
    tag: 'Direct Highway Access · On-Site Parking',
    description:
      'Daytime entrance along the scenic route to Athirappilly Waterfalls, offering direct road-level access and dedicated vehicle parking spaces for cars and two-wheelers.',
    url: '/assets/aistudio/Crown_Tourist_Home_Entrance_725f6b0e.png',
    alt: 'Main entrance and front parking area of Crown Tourist Home on Chalakudy-Anamala Road',
  },
  {
    id: 'triple-ac-room',
    title: 'Spacious Triple AC Room',
    category: 'Air Conditioned · TV',
    tag: 'AC + TV · ₹1,500–₹1,600 / night',
    description:
      'Generously sized air-conditioned family room featuring wooden beds, fresh linens, dining table & chairs, wall-mounted television, and attached clean washroom.',
    url: '/assets/aistudio/Bright_Budget_Hotel_Room_Interior_b005eefe.png',
    alt: 'Spacious Triple AC Room with wooden beds, blue-striped linen, desk, TV, and attached clean washroom',
    roomId: 'spacious-family-triple-ac',
  },
  {
    id: 'deluxe-ac-room',
    title: 'Deluxe AC Double Room',
    category: 'Air Conditioned · TV',
    tag: 'AC + TV · ₹1,300 / night',
    description:
      'Comfortable air-conditioned double room with quality foam mattress, dedicated work/dining desk, cable television, and private attached washroom with 24/7 water supply.',
    url: '/assets/aistudio/Tidy_Bedroom_with_En-Suite_Bathroom_c60cb533.png',
    alt: 'Deluxe AC Double Room with wooden double bed, TV, work desk, and open door to private en-suite bathroom',
    roomId: 'deluxe-double-ac',
  },
  {
    id: 'standard-non-ac-room',
    title: 'Standard Room (Non-AC)',
    category: 'Budget Non-AC (No TV)',
    tag: 'Ceiling Fan · ₹900–₹1,000 / night',
    description:
      'Affordable, well-ventilated budget room with comfortable bed, high-speed ceiling fan, table with seating, and private attached washroom. Ideal for budget-conscious travellers.',
    url: '/assets/aistudio/Compact_Blue-Striped_Guest_Room_c4f76418.png',
    alt: 'Standard Non-AC room with double bed, blue striped linen, ceiling fan, and private attached washroom',
    roomId: 'standard-double-non-ac',
  },
  {
    id: 'symmetrical-hallway',
    title: 'Symmetrical Hallway to the Exit',
    category: 'Interior & Corridors',
    tag: 'Clean Tiled Floors · 24/7 Security',
    description:
      'Bright, spotless interior hallway with gleaming tile floors, room entrances, natural daylight, potted plants, and clear exit access for guest safety and comfort.',
    url: '/assets/aistudio/Symmetrical_Hallway_to_the_Exit__1__de651276.png',
    alt: 'Bright interior hallway corridor at Crown Tourist Home with tiled flooring, room 103 door, and exit doors',
  },
];

interface PhotoGalleryProps {
  onOpenBooking?: (roomType?: string) => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ onOpenBooking }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const total = GALLERY_ITEMS.length;
  const currentItem = GALLERY_ITEMS[currentIndex];

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  // Keyboard navigation when lightbox or section is active
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLightboxOpen) {
        if (e.key === 'Escape') {
          setIsLightboxOpen(false);
        } else if (e.key === 'ArrowRight') {
          handleNext();
        } else if (e.key === 'ArrowLeft') {
          handlePrev();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, handleNext, handlePrev]);

  // Touch swipe handling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      // Swiped left -> show next
      handleNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> show previous
      handlePrev();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section
      id="gallery"
      className="py-12 lg:py-16 bg-[#FAF8F5] border-t border-[#E6E0D4] scroll-mt-16 sm:scroll-mt-20"
      aria-label="Hotel Photo Gallery"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#7A5835] mb-1.5">
              <Camera className="w-3.5 h-3.5 text-[#2D4A3E]" />
              <span>Take a Look Around</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1F1E1B] tracking-tight">
              Explore Our Rooms &amp; Property
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#5C5449] leading-relaxed">
              Explore photographs of Crown Tourist Home—from our daytime entrance and evening facade to our air-conditioned family rooms and standard budget stays.
            </p>
          </div>

          {/* Quick Counter & Nav helper */}
          <div className="flex items-center gap-2 shrink-0 self-start sm:self-end">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2D4A3E] bg-[#EAE4D7] px-3 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#7A5835]" />
              <span>Photo {currentIndex + 1} of {total}</span>
            </span>
          </div>
        </div>

        {/* Carousel Showcase Card */}
        <div
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative rounded-2xl overflow-hidden border border-[#E3DBD0] bg-[#1A1815] shadow-md group select-none"
        >
          {/* Main Photo Display */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] max-h-[520px] bg-black/60 flex items-center justify-center overflow-hidden">
            <img
              key={currentItem.id}
              src={currentItem.url}
              alt={currentItem.alt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-all duration-500 ease-out animate-in fade-in"
              loading="eager"
            />

            {/* Gradient Overlays for readable text and depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20 pointer-events-none" />

            {/* Top Bar: Category Pill on Left, Action Badges on Right */}
            <div className="absolute top-3.5 sm:top-5 inset-x-3.5 sm:inset-x-5 flex items-center justify-between gap-3 z-10">
              <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-black/65 backdrop-blur-md text-white border border-white/25 shadow-xs">
                {currentItem.category}
              </span>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-black/60 backdrop-blur-md text-white/90 border border-white/20">
                  {currentIndex + 1} / {total}
                </span>

                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  aria-label="View Fullscreen"
                  title="View Fullscreen"
                  className="p-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 transition-all hover:scale-105 cursor-pointer shadow-xs"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* PREVIOUS ARROW BUTTON (<) */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous picture"
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/70 hover:bg-[#2D4A3E] text-white border border-white/30 hover:border-emerald-400 backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-200 active:scale-90 hover:scale-105 cursor-pointer group/btn"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 -ml-0.5 group-hover/btn:-translate-x-0.5 transition-transform" />
            </button>

            {/* NEXT ARROW BUTTON (>) */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next picture"
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/70 hover:bg-[#2D4A3E] text-white border border-white/30 hover:border-emerald-400 backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-200 active:scale-90 hover:scale-105 cursor-pointer group/btn"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 -mr-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 lg:p-7 z-10 text-white">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4">
                <div className="max-w-2xl space-y-1">
                  <span className="text-[11px] sm:text-xs font-semibold text-[#86EFAC] tracking-wider uppercase block">
                    {currentItem.tag}
                  </span>
                  <h3 className="font-editorial text-lg sm:text-2xl font-semibold text-white drop-shadow-sm leading-tight">
                    {currentItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal line-clamp-2 sm:line-clamp-none">
                    {currentItem.description}
                  </p>
                </div>

                {/* Direct Action for this photo */}
                <div className="flex items-center gap-2 shrink-0 pt-1 md:pt-0">
                  {currentItem.roomId ? (
                    <button
                      type="button"
                      onClick={() => onOpenBooking && onOpenBooking(currentItem.roomId)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs font-semibold text-white bg-[#2D4A3E] hover:bg-[#233A30] border border-emerald-400/30 transition-all shadow-sm active:scale-95 cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#86EFAC]" />
                      <span>Book This Room</span>
                    </button>
                  ) : (
                    <a
                      href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(
                        `Hello Crown Tourist Home, I am viewing the "${currentItem.title}" photo on your website and would like to ask about room availability and rates.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs font-semibold text-white bg-[#2D4A3E] hover:bg-[#233A30] border border-emerald-400/30 transition-all shadow-sm active:scale-95 cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#86EFAC]" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Prominent Navigation Controller Bar below photo */}
          <div className="bg-[#24211D] px-4 py-3 sm:px-6 sm:py-3.5 flex items-center justify-between gap-3 text-white border-t border-white/10">
            {/* Previous Button with Arrow Mark */}
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/20 transition-all cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
              <span>Previous</span>
            </button>

            {/* Stepper Dots & Current Photo Indicator */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {GALLERY_ITEMS.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(idx)}
                  aria-label={`Go to slide ${idx + 1}: ${item.title}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    currentIndex === idx
                      ? 'w-6 sm:w-8 h-2.5 bg-[#86EFAC]'
                      : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            {/* NEXT ARROW BUTTON (Highlight with Forest Green & Arrow Mark) */}
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-lg text-xs font-semibold text-white bg-[#2D4A3E] hover:bg-[#385B4D] border border-emerald-400/40 shadow-sm transition-all cursor-pointer active:scale-95"
            >
              <span>Next Picture</span>
              <ChevronRight className="w-4 h-4 text-[#86EFAC]" />
            </button>
          </div>
        </div>

        {/* Thumbnail Preview Strip */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-[#6B6155]">
            <span className="font-medium">All Hotel Pictures ({total})</span>
            <span className="hidden sm:inline text-[11px] text-[#7A5835]">
              Use arrow buttons or click any thumbnail to switch
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
            {GALLERY_ITEMS.map((item, idx) => {
              const isActive = currentIndex === idx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(idx)}
                  className={`group relative rounded-xl overflow-hidden aspect-[4/3] border transition-all text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] ${
                    isActive
                      ? 'border-[#2D4A3E] ring-2 ring-[#2D4A3E] shadow-md scale-[1.02]'
                      : 'border-[#E3DBD0] opacity-70 hover:opacity-100 hover:border-[#7A5835]'
                  }`}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 transition-colors ${
                      isActive ? 'bg-black/10' : 'bg-black/35 group-hover:bg-black/15'
                    }`}
                  />
                  <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-black/70 text-white leading-none">
                    {idx + 1}
                  </div>
                  <div className="absolute bottom-1 inset-x-1">
                    <span className="text-[10px] font-medium text-white drop-shadow truncate block leading-tight px-0.5">
                      {item.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Contact & Enquiry Note */}
        <div className="p-4 rounded-xl bg-white border border-[#E3DBD0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#5C5449]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2D4A3E]" />
            <span>
              Have questions about room availability or rates? Reach out to our on-site team directly.
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0 self-start sm:self-auto">
            <a
              href={`tel:${HOTEL_INFO.phonePrimary.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1 font-semibold text-[#7A5835] hover:text-[#5A4026] hover:underline"
            >
              <Phone className="w-3.5 h-3.5 text-[#7A5835]" />
              <span>Call Manager</span>
            </a>
            <span className="text-[#D3CBC0]">·</span>
            <button
              type="button"
              onClick={() => onOpenBooking && onOpenBooking()}
              className="inline-flex items-center gap-1 font-semibold text-[#2D4A3E] hover:underline cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#2D4A3E]" />
              <span>Enquire on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Fullscreen Lightbox"
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-in fade-in duration-200"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Close Lightbox"
            className="absolute top-4 right-4 z-60 p-2.5 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Lightbox Previous Arrow Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous picture"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-60 w-12 h-12 rounded-full bg-black/60 text-white hover:bg-[#2D4A3E] border border-white/20 hover:border-emerald-400 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-xl active:scale-90"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Lightbox Next Arrow Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next picture"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-60 w-12 h-12 rounded-full bg-black/60 text-white hover:bg-[#2D4A3E] border border-white/20 hover:border-emerald-400 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-xl active:scale-90"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Lightbox Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[92vh] bg-[#1A1815] rounded-2xl overflow-hidden border border-white/20 flex flex-col shadow-2xl"
          >
            {/* Image Box */}
            <div className="relative flex-1 bg-black/60 flex items-center justify-center min-h-[300px] sm:min-h-[460px] max-h-[70vh] overflow-hidden">
              <img
                src={currentItem.url}
                alt={currentItem.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full max-h-[70vh] object-contain"
              />
            </div>

            {/* Lightbox Detail & Action Bar */}
            <div className="p-4 sm:p-5 bg-[#211E1A] border-t border-white/10 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-[#86EFAC] font-semibold">{currentItem.tag}</span>
                  <span className="text-white/40">·</span>
                  <span className="text-white/70">
                    Photo {currentIndex + 1} of {total}
                  </span>
                </div>
                <h4 className="font-editorial text-lg sm:text-xl font-semibold text-white">
                  {currentItem.title}
                </h4>
                <p className="text-xs text-white/80 max-w-2xl leading-relaxed">
                  {currentItem.description}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`tel:${HOTEL_INFO.phonePrimary.replace(/\s+/g, '')}`}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-white/15 hover:bg-white/25 transition-colors"
                >
                  Call Manager
                </a>
                {currentItem.roomId ? (
                  <button
                    type="button"
                    onClick={() => {
                      setIsLightboxOpen(false);
                      onOpenBooking && onOpenBooking(currentItem.roomId);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#2D4A3E] hover:bg-[#233A30] transition-colors shadow-sm cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#86EFAC]" />
                    <span>Book Room</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setIsLightboxOpen(false);
                      onOpenBooking && onOpenBooking();
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#2D4A3E] hover:bg-[#233A30] transition-colors shadow-sm cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#86EFAC]" />
                    <span>WhatsApp Enquiry</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
