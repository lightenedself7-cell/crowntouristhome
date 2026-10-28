import React from 'react';
import { Bed, Users, Bath, Check, MessageCircle, Phone, Sparkles, Wind } from 'lucide-react';
import { ROOMS, HOTEL_INFO, RoomType } from '../data/hotelData';

interface RoomsSectionProps {
  onOpenBooking: (roomType?: string) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="rooms" className="py-16 lg:py-24 bg-[#F5F1E8] border-y border-[#E6E0D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#7A5835] mb-2">
            Affordable Accommodation · Athirappilly Highway
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F1E1B] text-balance">
            Clean rooms, clean bed sheets, towels & honest rates.
          </h2>
          <p className="mt-3 text-base text-[#5C5449] leading-relaxed">
            Honest rates with zero hidden markups. Every room features a clean attached washroom, 1 table, 2 chairs, free Wi-Fi, and clean bed sheets and towels for every guest.
          </p>
        </div>

        {/* Room Standards & Amenities Strip */}
        <div className="mb-10 bg-white/80 border border-[#E4DDD0] rounded-2xl p-4 sm:p-5 shadow-sm grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs text-[#3E382F]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2D4A3E]"></span>
            <span><strong>Free Wi-Fi</strong> in all rooms</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2D4A3E]"></span>
            <span><strong>1 Table & 2 Chairs</strong> in every room</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2D4A3E]"></span>
            <span><strong>TV in AC rooms</strong> (No TV in Non-AC)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2D4A3E]"></span>
            <span><strong>Extra Mattress</strong>: ₹200</span>
          </div>
          <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
            <span className="w-2 h-2 rounded-full bg-[#2D4A3E]"></span>
            <span><strong>Clean Bed Sheets & Towels</strong> for every guest</span>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl border border-[#E4DDD0] shadow-sm overflow-hidden flex flex-col hover:border-[#D0C5B2] transition-colors"
            >
              {/* Room Image */}
              <div className="relative aspect-[4/3] bg-[#EBE5D9] overflow-hidden">
                <img
                  src={room.image}
                  alt={`${room.name} with clean bed sheets and attached bathroom at Crown Tourist Home, Pariyaram`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {room.badge && (
                  <div className="absolute top-3 left-3 bg-[#1F1E1B]/85 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                    <span>{room.badge}</span>
                  </div>
                )}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-[#2D4A3E] text-xs font-semibold px-2.5 py-1 rounded shadow-sm">
                  {room.priceEstimate}
                </div>
              </div>

              {/* Room Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-editorial text-2xl font-semibold text-[#1F1E1B]">
                    {room.name}
                  </h3>
                  <p className="mt-1 text-xs text-[#7A5835] font-medium">
                    {room.tagline}
                  </p>

                  {/* Unboxed Metadata Strip */}
                  <div className="mt-3 flex items-center gap-2 text-xs text-[#6B6358] border-b border-[#F0EBE0] pb-3">
                    <span className="flex items-center gap-1">
                      <Bed className="w-3.5 h-3.5 text-[#7A5835]" />
                      {room.bedType.split('(')[0]}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#7A5835]" />
                      {room.capacity.split('(')[0]}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Bath className="w-3.5 h-3.5 text-[#7A5835]" />
                      Attached Bath
                    </span>
                  </div>

                  {/* Clean Feature List - Brief scannable points */}
                  <div className="mt-4 space-y-2">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#484238]">
                        <Check className="w-3.5 h-3.5 text-[#2D4A3E] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions - Touch friendly with 44px target */}
                <div className="mt-6 pt-4 border-t border-[#F0EBE0] space-y-2">
                  <button
                    onClick={() => onOpenBooking(room.id)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-[#2D4A3E] hover:bg-[#233A30] active:scale-[0.98] rounded-xl transition-all shadow-sm min-h-[44px]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#7EE787] shrink-0" />
                    <span>Inquire via WhatsApp</span>
                  </button>

                  <a
                    href={`tel:${HOTEL_INFO.phonePrimary.replace(/\s+/g, '')}`}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-medium text-[#4D453B] bg-[#F4EFE6] hover:bg-[#ECE5D8] rounded-xl transition-colors min-h-[42px]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#7A5835] shrink-0" />
                    <span>Call Manager for Immediate Confirmation</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Note on Amenities & Dining */}
        <div className="mt-12 bg-white/70 border border-[#E3DBD0] rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-xs text-[#524B41] space-y-1">
            <p className="font-semibold text-[#1F1E1B]">
              Transparent Tourist Home Policy:
            </p>
            <p>
              Crown Tourist Home is focused on clean, private sleeping quarters with attached washrooms, free Wi-Fi, 1 table & 2 chairs in every room, and ₹200 extra mattress option. We do not provide food inside, but famous Kerala eateries (including Vasuettans Kada and bakeries) are located within a short walking distance.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3 text-xs font-medium text-[#7A5835]">
            <span>Payments: <strong>GPay UPI & Cash</strong></span>
            <span aria-hidden="true">·</span>
            <span>Flexible Check-in</span>
          </div>
        </div>
      </div>
    </section>
  );
};
