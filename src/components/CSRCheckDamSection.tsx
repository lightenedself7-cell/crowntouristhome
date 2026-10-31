import React from 'react';
import { Compass, Navigation } from 'lucide-react';
import { NEARBY_ATTRACTIONS } from '../data/hotelData';

export const CSRCheckDamSection: React.FC = () => {
  return (
    <section id="attractions" className="py-16 lg:py-24 bg-[#F5F1E8] border-t border-[#E6E0D4] scroll-mt-16 sm:scroll-mt-20">
      {/* Anchor for both #check-dam and #attractions */}
      <span id="check-dam" className="scroll-mt-16 sm:scroll-mt-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#7A5835] mb-2">
            <Compass className="w-4 h-4 text-[#2D4A3E]" />
            <span>Nearby Sightseeing & Nature Spots</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F1E1B] text-balance">
            Explore Athirappilly & Scenic Surroundings
          </h2>
          <p className="mt-3 text-base text-[#5C5449] leading-relaxed">
            Crown Tourist Home in Pariyaram is ideally located on the Chalakudy–Anamala Highway, placing you minutes away from serene river check dams, lush amusement theme parks, and Kerala’s world-renowned waterfalls.
          </p>
        </div>

        {/* Grid of All Nearby Attractions including CSR Check Dam & Chalakudy River */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEARBY_ATTRACTIONS.map((attraction) => (
            <div
              key={attraction.id}
              className="bg-white rounded-2xl border border-[#E3DBD0] overflow-hidden shadow-sm flex flex-col justify-between hover:border-[#CFBFA8] transition-all group"
            >
              <div>
                {/* Photo Container */}
                <div className="relative aspect-[16/10] bg-[#E8E1D5] overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={`${attraction.name} near Crown Tourist Home`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="375"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Tag badge */}
                  <div className="absolute top-3 left-3 bg-[#1F1E1B]/85 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-md shadow-sm">
                    {attraction.highlight || attraction.category}
                  </div>

                  {/* Distance / Drive badge */}
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-[#1F1E1B] text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1">
                    <Navigation className="w-3 h-3 text-[#2D4A3E]" />
                    <span>{attraction.distance} · {attraction.travelTime}</span>
                  </div>
                </div>

                {/* Body Text */}
                <div className="p-5 sm:p-6 space-y-2.5">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7A5835]">
                      {attraction.category}
                    </span>
                    <h4 className="font-editorial text-xl sm:text-2xl font-semibold text-[#1F1E1B] mt-0.5">
                      {attraction.name}
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-[#50493F] leading-relaxed">
                    {attraction.description}
                  </p>
                </div>
              </div>

              {/* Traveler Tip Footer */}
              {attraction.travelTip && (
                <div className="p-4 mx-5 mb-5 rounded-xl bg-[#FAF8F5] border border-[#EFE8DC] text-xs text-[#5D5549] leading-snug">
                  <strong className="text-[#7A5835]">Traveler Tip:</strong> {attraction.travelTip}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
