import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface FloatingActionBarProps {
  onOpenBooking: () => void;
  isModalOpen?: boolean;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({ onOpenBooking, isModalOpen }) => {
  // Hide when modal is open to prevent overlapping form controls or buttons
  if (isModalOpen) return null;

  return (
    <aside
      aria-label="Quick booking and call actions"
      className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-30 flex items-center gap-2 max-w-[calc(100vw-24px)]"
    >
      {/* Call Button */}
      <a
        href={`tel:${HOTEL_INFO.phonePrimary.replace(/\s+/g, '')}`}
        className="flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2.5 text-xs font-semibold text-[#0E4D40] bg-white hover:bg-[#FAF8F5] border border-[#DDD5C7] rounded-full shadow-lg transition-transform active:scale-95 min-h-[42px] sm:min-h-[44px] shrink-0"
        title="Call Reception"
      >
        <Phone className="w-4 h-4 text-[#0E4D40] shrink-0" />
        <span>Call Reception</span>
      </a>

      {/* WhatsApp Action */}
      <button
        onClick={onOpenBooking}
        className="flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 text-xs font-semibold text-white bg-[#22c55e] hover:bg-[#16a34a] rounded-full shadow-lg transition-transform active:scale-95 min-h-[42px] sm:min-h-[44px] shrink-0 cursor-pointer"
        aria-label="Book via WhatsApp"
      >
        <MessageCircle className="w-4 h-4 text-white fill-white shrink-0" />
        <span>Book via WhatsApp</span>
      </button>
    </aside>
  );
};
