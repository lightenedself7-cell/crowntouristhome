import React, { useState, useEffect, useRef } from 'react';
import { Phone, MessageCircle, Menu, X, ChevronDown } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

// Golden Crown SVG symbol matching the exact brand icon in reference screenshot (image_2db99aca.png)
export const CrownIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6 text-[#C58A3C]' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M2.5 5.5l1.6 9.5h15.8l1.6-9.5-4.8 5-4.7-7.5-4.7 7.5-4.8-5z" />
    <rect x="4.2" y="17.2" width="15.6" height="2.4" rx="0.4" />
  </svg>
);

interface NavbarProps {
  onOpenBooking: (roomType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const moreDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMoreDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-4 lg:gap-6 h-16 sm:h-20">
          {/* Zone 1: Crown icon + Brand Name + Location Subtitle */}
          <a
            href="/index.html"
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0 py-1"
          >
            <CrownIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#C58A3C] shrink-0 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-editorial text-lg xs:text-xl sm:text-2xl font-bold tracking-tight text-[#0E4D40] group-hover:text-[#0A382F] transition-colors whitespace-nowrap leading-tight">
                Crown Tourist Home
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-[#C58A3C] tracking-wide leading-none mt-0.5">
                Pariyaram, Athirappilly Road
              </span>
            </div>
          </a>

          {/* Zone 2: Desktop Nav links (Visible on desktop: Rooms, Facilities, Attractions, Location + More dropdown) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium text-[#5A534A] shrink"
          >
            <a
              href="#rooms"
              className="hover:text-[#1F1E1B] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Rooms
            </a>
            <a
              href="#facilities"
              className="hover:text-[#1F1E1B] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Facilities
            </a>
            <a
              href="#attractions"
              className="hover:text-[#1F1E1B] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Attractions
            </a>
            <a
              href="#location"
              className="hover:text-[#1F1E1B] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Location
            </a>

            {/* "More" Dropdown containing Nearby Dining, FAQs */}
            <div className="relative" ref={moreDropdownRef}>
              <button
                type="button"
                onClick={() => setMoreDropdownOpen((prev) => !prev)}
                aria-expanded={moreDropdownOpen}
                aria-haspopup="true"
                className="inline-flex items-center gap-1.5 hover:text-[#1F1E1B] transition-colors whitespace-nowrap py-1 focus:outline-none cursor-pointer"
              >
                <span>More</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#7A5835] transition-transform duration-200 ${
                    moreDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {moreDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] shadow-lg py-1.5 z-50 text-sm font-medium text-[#4A4339] animate-in fade-in-50 duration-150"
                  role="menu"
                >
                  <a
                    href="#dining"
                    role="menuitem"
                    onClick={() => setMoreDropdownOpen(false)}
                    className="block px-4 py-2.5 hover:bg-[#F0ECE1] hover:text-[#1F1E1B] transition-colors"
                  >
                    Nearby Dining
                  </a>
                  <a
                    href="#faq"
                    role="menuitem"
                    onClick={() => setMoreDropdownOpen(false)}
                    className="block px-4 py-2.5 hover:bg-[#F0ECE1] hover:text-[#1F1E1B] transition-colors"
                  >
                    FAQs
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Zone 3: Right Action Buttons (Call Reception + WhatsApp) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Call Reception (Outline button with phone icon) */}
            <a
              href={`tel:${HOTEL_INFO.phonePrimary.replace(/\s+/g, '')}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-medium text-[#2E2820] bg-white hover:bg-[#F7F5F0] border border-[#D5CDC1] rounded-xl shadow-xs transition-colors whitespace-nowrap shrink-0"
              title={`Call Reception (${HOTEL_INFO.phoneDisplay})`}
            >
              <Phone className="w-3.5 h-3.5 text-[#7A5835]" />
              <span>Call Reception</span>
            </a>

            {/* WhatsApp Button (Green rounded button) */}
            <button
              onClick={() => onOpenBooking()}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20BD5A] active:scale-[0.98] rounded-xl shadow-sm transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-white fill-white" />
              <span>WhatsApp</span>
            </button>

            {/* Mobile-only compact WhatsApp CTA button */}
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20BD5A] active:scale-[0.98] rounded-xl shadow-sm transition-all shrink-0 min-h-[36px]"
              aria-label="Enquire via WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-white fill-white" />
              <span>WhatsApp</span>
            </button>

            {/* Hamburger toggle button (Visible on mobile and smaller tablet screens: lg:hidden) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#4A4339] hover:text-[#1F1E1B] hover:bg-[#F2ECE1] rounded-lg transition-colors focus:outline-none shrink-0 min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer border border-[#E8E2D8]/60"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer containing all seven destinations */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8E2D8] bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav
            aria-label="Mobile and Tablet Navigation"
            className="flex flex-col space-y-1 text-sm font-medium text-[#4A4339]"
          >
            {/* 1. Rooms */}
            <a
              href="#rooms"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg hover:bg-[#F0ECE1] transition-colors flex items-center justify-between min-h-[44px]"
            >
              <span className="font-semibold text-[#1F1E1B]">Rooms</span>
              <span className="text-xs text-[#2D4A3E] font-medium bg-[#EAE4D7] px-2 py-0.5 rounded-md">
                From ₹900 / night
              </span>
            </a>

            {/* 2. Facilities */}
            <a
              href="#facilities"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg hover:bg-[#F0ECE1] transition-colors min-h-[44px] flex items-center"
            >
              Facilities
            </a>

            {/* 3. Attractions */}
            <a
              href="#attractions"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg hover:bg-[#F0ECE1] transition-colors min-h-[44px] flex items-center"
            >
              Attractions
            </a>

            {/* 4. Location */}
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg hover:bg-[#F0ECE1] transition-colors min-h-[44px] flex items-center"
            >
              Location
            </a>

            {/* 5. Nearby Dining */}
            <a
              href="#dining"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg hover:bg-[#F0ECE1] transition-colors min-h-[44px] flex items-center"
            >
              Nearby Dining
            </a>

            {/* 7. FAQs */}
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg hover:bg-[#F0ECE1] transition-colors min-h-[44px] flex items-center"
            >
              FAQs
            </a>
          </nav>

          {/* Quick Contact Actions inside mobile drawer */}
          <div className="pt-3 border-t border-[#E8E2D8] flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20BD5A] rounded-xl shadow-sm transition-colors min-h-[44px] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-white fill-white" />
              <span>WhatsApp</span>
            </button>
            <a
              href={`tel:${HOTEL_INFO.phonePrimary.replace(/\s+/g, '')}`}
              className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold bg-white hover:bg-[#F2ECE1] text-[#3F3930] border border-[#D5CDC1] rounded-xl transition-colors min-h-[44px]"
            >
              <Phone className="w-3.5 h-3.5 text-[#0E4D40]" />
              <span>Call Reception</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
