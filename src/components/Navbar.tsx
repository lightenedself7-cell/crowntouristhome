import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface NavbarProps {
  onOpenBooking: (roomType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-4 lg:gap-6 h-16 sm:h-20">
          {/* Zone 1: Brand wordmark - full name, no truncation */}
          <a
            href="/index.html"
            className="font-editorial text-lg xs:text-xl sm:text-2xl font-bold tracking-tight text-[#1F1E1B] hover:text-[#7A5835] transition-colors whitespace-nowrap shrink-0"
          >
            Crown Tourist Home
          </a>

          {/* Zone 2: Desktop Nav links */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 text-[13px] xl:text-sm font-medium text-[#5A534A] shrink">
            <a
              href="#rooms"
              className="hover:text-[#1F1E1B] transition-colors whitespace-nowrap shrink-0"
            >
              Rooms & Rates
            </a>
            <a
              href="#facilities"
              className="hover:text-[#1F1E1B] transition-colors whitespace-nowrap shrink-0"
            >
              Facilities
            </a>
            <a
              href="#housekeeping"
              className="hover:text-[#1F1E1B] transition-colors whitespace-nowrap shrink-0"
            >
              Housekeeping
            </a>
            <a
              href="#attractions"
              className="hover:text-[#1F1E1B] transition-colors whitespace-nowrap shrink-0"
            >
              Attractions
            </a>
            <a
              href="#dining"
              className="hover:text-[#1F1E1B] transition-colors whitespace-nowrap shrink-0"
            >
              Nearby Dining
            </a>
            <a
              href="#location"
              className="hover:text-[#1F1E1B] transition-colors whitespace-nowrap shrink-0"
            >
              Location & Map
            </a>
            <a
              href="#faq"
              className="hover:text-[#1F1E1B] transition-colors whitespace-nowrap shrink-0"
            >
              FAQs
            </a>
          </nav>

          {/* Zone 3: Desktop CTA actions */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0">
            <a
              href={`tel:${HOTEL_INFO.phonePrimary.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#4A4339] bg-[#EFE9DD] hover:bg-[#E5DDCF] rounded-lg transition-colors whitespace-nowrap shrink-0"
              title={`Call Manager (${HOTEL_INFO.phoneDisplay})`}
            >
              <Phone className="w-3.5 h-3.5 text-[#7A5835]" />
              <span className="hidden xl:inline">Call Manager</span>
              <span className="xl:hidden">Call</span>
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-1.5 xl:gap-2 px-3 xl:px-4 py-2 text-xs font-semibold text-white bg-[#2D4A3E] hover:bg-[#233A30] active:scale-[0.98] rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#7EE787]" />
              <span>Enquire via WhatsApp</span>
            </button>
          </div>

          {/* Mobile actions: Book CTA + Hamburger toggle */}
          <div className="flex sm:hidden items-center gap-1.5 shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-white bg-[#2D4A3E] hover:bg-[#233A30] active:scale-[0.98] rounded-lg shadow-sm transition-all shrink-0 min-h-[36px]"
              aria-label="Enquire via WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#7EE787]" />
              <span>Enquire</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#4A4339] hover:text-[#1F1E1B] hover:bg-[#F2ECE1] rounded-lg transition-colors focus:outline-none shrink-0 min-w-[36px] min-h-[36px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with verified navigation targets */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8E2D8] bg-[#FAF8F5] px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-1 text-sm font-medium text-[#4A4339]">
            <a
              href="#rooms"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-[#F0ECE1] transition-colors flex items-center justify-between min-h-[44px]"
            >
              <span>Rooms & Rates</span>
              <span className="text-xs text-[#2D4A3E] font-semibold">From ₹900 / night</span>
            </a>
            <a
              href="#facilities"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-[#F0ECE1] transition-colors min-h-[44px] flex items-center"
            >
              Facilities & Amenities
            </a>
            <a
              href="#housekeeping"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-[#F0ECE1] transition-colors min-h-[44px] flex items-center"
            >
              Housekeeping & Cleanliness
            </a>
            <a
              href="#attractions"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-[#F0ECE1] transition-colors min-h-[44px] flex items-center"
            >
              Nearby Attractions
            </a>
            <a
              href="#dining"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-[#F0ECE1] transition-colors min-h-[44px] flex items-center"
            >
              Nearby Dining (Vasuvettante Kada)
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-[#F0ECE1] transition-colors min-h-[44px] flex items-center"
            >
              Location, Transit & Map
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-[#F0ECE1] transition-colors min-h-[44px] flex items-center"
            >
              Frequently Asked Questions
            </a>
          </nav>
          <div className="pt-3 border-t border-[#E8E2D8] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-[#2D4A3E] hover:bg-[#233A30] rounded-xl shadow-sm transition-colors min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 text-[#7EE787]" />
              <span>Enquire via WhatsApp ({HOTEL_INFO.whatsappDisplay})</span>
            </button>
            <a
              href={`tel:${HOTEL_INFO.phonePrimary.replace(/\s+/g, '')}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold bg-[#EFE9DD] hover:bg-[#E5DDCF] text-[#3F3930] rounded-xl transition-colors min-h-[44px]"
            >
              <Phone className="w-3.5 h-3.5 text-[#7A5835]" />
              <span>Call Manager: {HOTEL_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
