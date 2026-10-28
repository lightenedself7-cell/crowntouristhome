import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface FloatingActionBarProps {
  onOpenBooking: () => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Quick booking and call actions"
      className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 max-w-[calc(100vw-24px)]"
    >
      {/* Call Button */}
      <a
        href={`tel:${HOTEL_INFO.phonePrimary.replace(/\s+/g, '')}`}
        className="flex items-center justify-center gap-2 px-3 sm:px-3.5 py-2.5 text-xs font-semibold text-[#1F1E1B] bg-white hover:bg-[#FAF8F5] border border-[#DDD5C7] rounded-full shadow-lg transition-transform active:scale-95 min-h-[42px] sm:min-h-[44px]"
        title={`Call Manager (${HOTEL_INFO.phoneDisplay})`}
      >
        <Phone className="w-4 h-4 text-[#7A5835] shrink-0" />
        <span className="hidden sm:inline">Call Manager</span>
      </a>

      {/* WhatsApp Action */}
      <button
        onClick={onOpenBooking}
        className="flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 text-xs font-semibold text-white bg-[#2D4A3E] hover:bg-[#223930] rounded-full shadow-lg transition-transform active:scale-95 min-h-[42px] sm:min-h-[44px]"
      >
        <MessageCircle className="w-4 h-4 text-[#7EE787] shrink-0" />
        <span>Book on WhatsApp</span>
      </button>
    </aside>
  );
};
