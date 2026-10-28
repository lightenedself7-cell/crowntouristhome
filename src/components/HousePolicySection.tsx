import React from 'react';
import { ShieldCheck, Sparkles, Clock, UtensilsCrossed, CreditCard, UserCheck, CheckCircle2 } from 'lucide-react';
import { HOUSE_POLICIES, HOTEL_INFO } from '../data/hotelData';

export const HousePolicySection: React.FC = () => {
  return (
    <section id="policies" className="py-16 lg:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#7A5835] mb-2">
            Clear & Honest Standards
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F1E1B] text-balance">
            Simple rules, genuine cleanliness & zero surprises.
          </h2>
          <p className="mt-3 text-base text-[#5C5449] leading-relaxed">
            We believe in honest hospitality. Crown Tourist Home is designed for budget-conscious travelers seeking a clean, secure place to sleep and freshen up on their way to Athirappilly.
          </p>
        </div>

        {/* 6 Clean Policy Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1. Cleanliness */}
          <div className="bg-white rounded-2xl border border-[#E3DBD0] p-6 shadow-sm flex flex-col justify-between hover:border-[#D0C5B2] transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EAF2EC] flex items-center justify-center text-[#2D4A3E] mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#1F1E1B] mb-2">
                Clean Rooms, Bed Sheets & Towels
              </h3>
              <p className="text-xs sm:text-sm text-[#50493F] leading-relaxed">
                Clean bed sheets, towels, and pillow covers are provided for every single guest before check-in. Tiled floors and attached washrooms are washed clean.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#F2ECE3] text-[11px] text-[#2D4A3E] font-medium flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Cleaned & prepared for every guest</span>
            </div>
          </div>

          {/* 2. Flexible Timing */}
          <div className="bg-white rounded-2xl border border-[#E3DBD0] p-6 shadow-sm flex flex-col justify-between hover:border-[#D0C5B2] transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F6EFE5] flex items-center justify-center text-[#7A5835] mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#1F1E1B] mb-2">
                Flexible Check-In / Check-Out
              </h3>
              <p className="text-xs sm:text-sm text-[#50493F] leading-relaxed">
                Standard check-in is 12:00 PM and check-out is 12:00 PM. Arriving on an early morning train or bus? Just inform our manager in advance.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#F2ECE3] text-[11px] text-[#7A5835] font-medium flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Easy coordination on arrival</span>
            </div>
          </div>

          {/* 3. Bed & Washroom Only (No Food) */}
          <div className="bg-white rounded-2xl border border-[#E3DBD0] p-6 shadow-sm flex flex-col justify-between hover:border-[#D0C5B2] transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#FDF0ED] flex items-center justify-center text-[#A24835] mb-4">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#1F1E1B] mb-2">
                Rooms & Attached Bath Only
              </h3>
              <p className="text-xs sm:text-sm text-[#50493F] leading-relaxed">
                We focus on clean, comfortable tourist home lodging with attached washrooms. No in-house kitchen, but famous local dining (Vasuvettante Kada, bakeries, and tea stalls) is just a short walk away.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#F2ECE3] text-[11px] text-[#A24835] font-medium flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Famous local food & bakeries nearby</span>
            </div>
          </div>

          {/* 4. Safety & CCTV */}
          <div className="bg-white rounded-2xl border border-[#E3DBD0] p-6 shadow-sm flex flex-col justify-between hover:border-[#D0C5B2] transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EBF0F8] flex items-center justify-center text-[#2A5288] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#1F1E1B] mb-2">
                24/7 CCTV & On-Site Manager
              </h3>
              <p className="text-xs sm:text-sm text-[#50493F] leading-relaxed">
                Corridors and vehicle parking are monitored by 24/7 CCTV. Our on-site manager is always present to help with guidance and safety.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#F2ECE3] text-[11px] text-[#2A5288] font-medium flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Safe for families & solo travelers</span>
            </div>
          </div>

          {/* 5. Direct WhatsApp & Call Booking */}
          <div className="bg-white rounded-2xl border border-[#E3DBD0] p-6 shadow-sm flex flex-col justify-between hover:border-[#D0C5B2] transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32] mb-4">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#1F1E1B] mb-2">
                Direct WhatsApp or Phone Booking
              </h3>
              <p className="text-xs sm:text-sm text-[#50493F] leading-relaxed">
                No third-party middleman fees or hidden commissions. Message or call our manager directly for instant booking and best rates.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#F2ECE3] text-[11px] text-[#2E7D32] font-medium flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Zero booking commission fees</span>
            </div>
          </div>

          {/* 6. Payment Modes */}
          <div className="bg-white rounded-2xl border border-[#E3DBD0] p-6 shadow-sm flex flex-col justify-between hover:border-[#D0C5B2] transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F4EFFB] flex items-center justify-center text-[#693994] mb-4">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#1F1E1B] mb-2">
                Google Pay (GPay) or Cash
              </h3>
              <p className="text-xs sm:text-sm text-[#50493F] leading-relaxed">
                Simple payment on arrival via Google Pay UPI QR or direct cash. Transparent, straightforward, and zero surcharges.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#F2ECE3] text-[11px] text-[#693994] font-medium flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>GPay UPI & Cash accepted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
