import React from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, Clock, UtensilsCrossed, Waves, Droplets } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const HousekeepingSection: React.FC = () => {
  const standards = [
    {
      icon: <Sparkles className="w-5 h-5 text-[#2D4A3E]" />,
      title: 'Clean Bed Sheets & Towels for Every Guest',
      desc: 'Clean, freshly laundered bed sheets, pillow covers, and fresh bath towels are provided and changed before every single check-in.',
      badge: 'Guaranteed for every arrival',
    },
    {
      icon: <Droplets className="w-5 h-5 text-[#2D4A3E]" />,
      title: 'Thoroughly Washed & Sanitized Washrooms',
      desc: 'Private attached washrooms are swept, washed, and disinfected with clean sanitary fixtures and continuous running water.',
      badge: 'Attached private bathrooms',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#7A5835]" />,
      title: 'Clean Tiled Floors & Dust-Free Rooms',
      desc: 'Guest bedrooms and corridors feature polished tile flooring that is swept, mopped, and dusted prior to every guest check-in.',
      badge: 'Freshly prepared rooms',
    },
    {
      icon: <UtensilsCrossed className="w-5 h-5 text-[#A24835]" />,
      title: 'Bed & Bath Lodging Focus (No In-House Cooking)',
      desc: 'We operate transparently as clean budget lodging without noisy in-house restaurant odors. Authentic dining like Vasuvettante Kada is 5 min away.',
      badge: 'No kitchen odors',
    },
    {
      icon: <Clock className="w-5 h-5 text-[#7A5835]" />,
      title: 'Prompt Waste Disposal & Fresh Water',
      desc: 'Regular room trash removal and daily bin clearance. Clean overhead water tanks ensure reliable water pressure for refreshing showers.',
      badge: '24/7 continuous water',
    },
    {
      icon: <Waves className="w-5 h-5 text-[#2D4A3E]" />,
      title: 'Calm Riverside Environment',
      desc: 'Located directly beside the Chalakudy River in Pariyaram, offering clean riverside air and a peaceful natural ambiance away from town chaos.',
      badge: 'Natural river setting',
    },
  ];

  return (
    <section
      id="housekeeping"
      className="py-16 lg:py-24 bg-[#F5F1E8] border-t border-[#E6E0D4] scroll-mt-16 sm:scroll-mt-20 relative"
    >
      {/* Anchor aliases for #cleanliness and #policies */}
      <span id="cleanliness" className="scroll-mt-16 sm:scroll-mt-20 absolute -top-20" />
      <span id="policies" className="scroll-mt-16 sm:scroll-mt-20 absolute -top-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#7A5835] mb-2">
            <Sparkles className="w-4 h-4 text-[#2D4A3E]" />
            <span>Housekeeping & Cleanliness Standards · Pariyaram</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F1E1B] text-balance">
            Clean Rooms, Clean Bed Sheets & Towels
          </h2>
          <p className="mt-3 text-base text-[#5C5449] leading-relaxed">
            We practice honest, grounded hospitality. We don’t make unrealistic luxury claims—instead, we guarantee what matters most: genuine cleanliness, clean bed sheets and towels for every guest, and private attached washrooms.
          </p>
        </div>

        {/* 6 Cleanliness & Housekeeping Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E3DBD0] p-6 shadow-sm flex flex-col justify-between hover:border-[#CFBFA8] transition-colors"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#1F1E1B] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#50493F] leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#F2ECE3] text-[11px] text-[#2D4A3E] font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2D4A3E] shrink-0" />
                <span>{item.badge}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Cleanliness Guarantee Banner */}
        <div className="bg-white border-2 border-[#2D4A3E]/30 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#524B41]">
          <div className="space-y-1 max-w-2xl">
            <span className="font-semibold text-sm text-[#1F1E1B] block">
              Our Honest Cleanliness Commitment
            </span>
            <p className="text-xs text-[#5A5246] leading-relaxed">
              Every room undergoes a dedicated turnover protocol: bed sheets, pillow covers, and towels are changed and freshly prepared before key handover. If you ever need anything extra, our on-site manager is right on the premises to assist you immediately.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="px-3.5 py-2 rounded-xl bg-[#EAF2EC] text-[#2D4A3E] font-semibold text-xs border border-[#CFE2D3]">
              Inspected Before Check-In
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
