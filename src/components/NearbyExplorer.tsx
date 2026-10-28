import React, { useState } from 'react';
import { Compass, Clock, MapPin, Sparkles, Car, Footprints } from 'lucide-react';
import { NEARBY_ATTRACTIONS, Attraction } from '../data/hotelData';

export const NearbyExplorer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'waterfall' | 'themepark' | 'nature'>('all');

  const filteredAttractions = activeCategory === 'all'
    ? NEARBY_ATTRACTIONS
    : NEARBY_ATTRACTIONS.filter((item) => item.category === activeCategory);

  return (
    <section id="attractions" className="py-16 lg:py-24 bg-[#F5F1E8] border-t border-[#E6E0D4] scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#7A5835] mb-2">
              Athirappilly Sightseeing Guide
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F1E1B] text-balance">
              Explore the river, waterfalls & attractions.
            </h2>
            <p className="mt-3 text-base text-[#5C5449] leading-relaxed">
              Crown Tourist Home is strategically located along the Chalakudy - Athirappilly tourist road, with the scenic Chalakudy River right next door. Convenient access to world-famous waterfalls, hanging bridges, and family theme parks.
            </p>
          </div>

          {/* Interactive Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#ECE5D8] rounded-xl self-start lg:self-end max-w-full">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-white text-[#1F1E1B] shadow-sm font-semibold'
                  : 'text-[#645C51] hover:text-[#1F1E1B]'
              }`}
            >
              All Spots ({NEARBY_ATTRACTIONS.length})
            </button>
            <button
              onClick={() => setActiveCategory('waterfall')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'waterfall'
                  ? 'bg-white text-[#1F1E1B] shadow-sm font-semibold'
                  : 'text-[#645C51] hover:text-[#1F1E1B]'
              }`}
            >
              Waterfalls
            </button>
            <button
              onClick={() => setActiveCategory('nature')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'nature'
                  ? 'bg-white text-[#1F1E1B] shadow-sm font-semibold'
                  : 'text-[#645C51] hover:text-[#1F1E1B]'
              }`}
            >
              River & Nature
            </button>
            <button
              onClick={() => setActiveCategory('themepark')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'themepark'
                  ? 'bg-white text-[#1F1E1B] shadow-sm font-semibold'
                  : 'text-[#645C51] hover:text-[#1F1E1B]'
              }`}
            >
              Theme Parks
            </button>
          </div>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAttractions.map((spot) => (
            <div
              key={spot.id}
              className="bg-white rounded-2xl border border-[#E3DBD0] shadow-sm overflow-hidden flex flex-col justify-between hover:border-[#D0C5B2] transition-colors"
            >
              <div>
                {/* Photo with Overlay Distances */}
                <div className="relative aspect-[16/10] bg-[#EBE5DA] overflow-hidden">
                  <img
                    src={spot.image}
                    alt={`${spot.name} sightseeing near Crown Tourist Home on Athirappilly Road`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-[#1F1E1B]/85 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded">
                    {spot.distance}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm text-[#2D4A3E] text-xs font-medium px-2.5 py-1 rounded shadow-sm flex items-center gap-1.5">
                    {spot.travelTime.includes('walk') ? (
                      <Footprints className="w-3.5 h-3.5" />
                    ) : (
                      <Car className="w-3.5 h-3.5" />
                    )}
                    <span>{spot.travelTime}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#7A5835] mb-1.5">
                    <span className="capitalize">{spot.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{spot.highlight}</span>
                  </div>

                  <h3 className="font-editorial text-2xl font-semibold text-[#1F1E1B]">
                    {spot.name}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-[#50493F] leading-relaxed">
                    {spot.description}
                  </p>
                </div>
              </div>

              {/* Travel Tip Footer */}
              <div className="px-6 pb-6 pt-0">
                <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#EFE8DD] text-xs text-[#5E564B]">
                  <strong className="text-[#3E372F]">Traveler Tip: </strong>
                  {spot.travelTip}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 1-Day Itinerary suggestion */}
        <div className="mt-14 bg-white rounded-2xl border border-[#E3DBD0] p-6 sm:p-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#7A5835] mb-1">
            Suggested Athirappilly Day Plan
          </div>
          <h3 className="font-editorial text-2xl font-semibold text-[#1F1E1B] mb-3">
            How guests spend an ideal day staying at Crown Tourist Home
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs text-[#4E473D]">
            <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#EFE8DD]">
              <div className="font-semibold text-[#7A5835] mb-1">08:00 AM – Morning Start</div>
              Hot pazhampori & meter tea at the local tea stall nearby. Head out for morning views at Athirappilly Falls before the afternoon heat.
            </div>
            <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#EFE8DD]">
              <div className="font-semibold text-[#7A5835] mb-1">12:30 PM – Vasuvettante Kada</div>
              Head back toward Pariyaram for legendary banana leaf noon meals with sizzling fish fry and fish gravy at Vasuvettante Kada.
            </div>
            <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#EFE8DD]">
              <div className="font-semibold text-[#7A5835] mb-1">02:30 PM – Theme Park / River</div>
              Spend the afternoon enjoying water rides at Dream World (5 mins away) or strolling the Thumboormuzhi suspension bridge and butterfly garden.
            </div>
            <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#EFE8DD]">
              <div className="font-semibold text-[#7A5835] mb-1">07:00 PM – Rest & Relax</div>
              Return to Crown Tourist Home for a refreshing shower in your clean attached washroom and a restful sleep in freshly changed sheets.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
