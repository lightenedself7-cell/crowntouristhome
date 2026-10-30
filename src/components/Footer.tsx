import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation, Shield } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { CrownIcon } from './Navbar';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#1F1E1B] text-[#C5BCB0] pt-16 pb-20 sm:pb-12 border-t border-[#36322C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#36322C]">
          {/* Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="/index.html" className="inline-flex items-center gap-2.5 hover:opacity-90 transition-opacity">
              <CrownIcon className="w-6 h-6 text-[#C58A3C] shrink-0" />
              <h3 className="font-editorial text-2xl text-white font-semibold tracking-wide">
                Crown Tourist Home
              </h3>
            </a>
            <p className="text-xs text-[#A89F93] leading-relaxed max-w-sm">
              Honest, clean, and budget-friendly accommodation on Chalakudy - Anamala Road in Pariyaram, Kerala. Clean rooms, attached private washrooms, clean bed sheets & towels for every guest, free Wi-Fi, and flexible check-in.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold bg-[#22c55e] text-white hover:bg-[#16a34a] rounded-xl transition-colors min-h-[40px] cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-white fill-white" />
                <span>Book via WhatsApp</span>
              </button>
              <a
                href={`tel:${HOTEL_INFO.phonePrimary.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-medium bg-[#2C2925] text-white hover:bg-[#3C3833] rounded-xl transition-colors min-h-[40px]"
                title="Call Reception"
              >
                <Phone className="w-3.5 h-3.5 text-[#D1B48C]" />
                <span>Call Reception</span>
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">
                  Rooms & Tariff Estimates
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">
                  Facilities & Amenities
                </a>
              </li>
              <li>
                <a href="#attractions" className="hover:text-white transition-colors">
                  Athirappilly Sightseeing Guide
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-white transition-colors">
                  Vasuvettante Kada & Local Food
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Location & Map Directions
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Property Location & Contact
            </h4>
            <div className="space-y-2 text-xs text-[#A89F93]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D1B48C] shrink-0 mt-0.5" />
                <span>{HOTEL_INFO.address}</span>
              </p>
              <p className="pl-6 text-[11px] font-mono text-[#D1B48C]">
                Plus Code: {HOTEL_INFO.plusCode}
              </p>
              <p className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-[#D1B48C] shrink-0" />
                <span>Call Reception: <a href={`tel:${HOTEL_INFO.phonePrimary.replace(/\s+/g, '')}`} className="text-white hover:underline font-medium">{HOTEL_INFO.phoneDisplay}</a></span>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#22c55e] shrink-0" />
                <span>Book via WhatsApp: <a href={`https://wa.me/${HOTEL_INFO.whatsappNumber}`} target="_blank" rel="noreferrer" className="text-white hover:underline font-medium">{HOTEL_INFO.whatsappDisplay}</a></span>
              </p>
              <p className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#D1B48C] shrink-0" />
                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:underline"
                >
                  Open in Google Maps Navigation
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Copyright & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8175]">
          <div>
            © {new Date().getFullYear()} Crown Tourist Home. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Payments accepted: Google Pay (UPI) & Cash</span>
            <span aria-hidden="true">·</span>
            <span>Flexible Check-in / Check-out</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
