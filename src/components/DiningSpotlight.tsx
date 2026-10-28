import React, { useState } from 'react';
import { Utensils, Clock, Footprints, Car, ExternalLink, Navigation, Star, Flame, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';
import { DINING_HIGHLIGHTS } from '../data/hotelData';

export const DiningSpotlight: React.FC = () => {
  const vasuettan = DINING_HIGHLIGHTS[0];
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="dining" className="py-16 lg:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#7A5835] mb-2">
            Local Food Landmark · Authentic Kerala Non-Veg & Meals
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F1E1B] text-balance">
            We don’t cook inside. You eat legendary meals outside.
          </h2>
          <p className="mt-3 text-base text-[#5C5449] leading-relaxed">
            Crown Tourist Home provides clean, honest sleeping accommodation with attached washrooms. Instead of inflated hotel buffet charges, you get quick access to Kerala’s most renowned rustic eatery: <strong>Vasuvettante Kada</strong>.
          </p>
        </div>

        {/* Featured Showcase: Vasuvettante Kada */}
        <div className="bg-white rounded-3xl border border-[#E3DBD0] shadow-sm overflow-hidden mb-12">
          {/* Top Bar with Verified Google Stats */}
          <div className="px-6 py-4 bg-[#F8F4EC] border-b border-[#E8E1D3] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-[#C48729]">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-bold text-xs text-[#2A241E]">4.5</span>
              </div>
              <span aria-hidden="true" className="text-[#C8BEAE]">·</span>
              <span className="text-xs font-medium text-[#5A5247]">
                Over <strong>6,616 Google Reviews</strong>
              </span>
              <span aria-hidden="true" className="text-[#C8BEAE]">·</span>
              <span className="text-xs font-semibold text-[#2D4A3E]">
                Budget-Friendly Culinary Icon
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-[#7A5835] font-medium flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5" />
                <span>{vasuettan.distance}</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Image Column */}
            <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto min-h-[340px] bg-[#EBE5DA]">
              <img
                src={vasuettan.image}
                alt="Authentic Kerala banana leaf noon meal at Vasuvettans Kada with beef fry, prawns, and fish fry"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Image Label */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-[11px] uppercase tracking-wider text-white/80 font-medium">Traditional Banana Leaf Feast</p>
                <p className="text-lg font-semibold drop-shadow-sm">Vasuvettan’s Kada</p>
                <p className="text-xs text-white/90 mt-0.5">
                  Famous for Nadan Beef Fry, Prawns, Fish & Oonu
                </p>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-9 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#7A5835]">
                    Must-Visit Gastronomic Pitstop
                  </div>
                  <div className="text-xs font-medium text-[#2D4A3E] bg-[#EAF2EC] px-2.5 py-0.5 rounded-full">
                    Open 11:30 AM – 5:00 PM
                  </div>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#1F1E1B]">
                  {vasuettan.name}
                </h3>

                {/* Unboxed Metadata Timing & Distance */}
                <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#6B6358] border-b border-[#F0EBE0] pb-3">
                  <span className="flex items-center gap-1 font-medium text-[#2B2620]">
                    <Clock className="w-3.5 h-3.5 text-[#7A5835]" />
                    {vasuettan.timing}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Car className="w-3.5 h-3.5 text-[#7A5835]" />
                    {vasuettan.distance}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#2D4A3E] font-medium">
                    Pocket-Friendly Pricing
                  </span>
                </div>

                <p className="mt-3.5 text-xs sm:text-sm text-[#4E473D] leading-relaxed">
                  {vasuettan.description}
                </p>

                {/* Best Time to Visit Callout */}
                <div className="mt-4 p-3.5 rounded-xl bg-[#FAF6EE] border border-[#EBE1CF] text-xs text-[#5C5142] flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#7A5835] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#342D24]">Best Time to Visit: </strong>
                    {vasuettan.bestTimeToVisit}
                  </div>
                </div>

                {/* What to Ask For - Structured Tabs */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#7A5835] flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-[#C45E29]" />
                      <span>What to Ask For (Based on 6,616+ Reviews)</span>
                    </h4>
                  </div>

                  {/* Category Pills/Tabs */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {vasuettan.dishGroups?.map((group, gIdx) => (
                      <button
                        key={gIdx}
                        onClick={() => setActiveTab(gIdx)}
                        className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                          activeTab === gIdx
                            ? 'bg-[#2D4A3E] text-white shadow-sm font-semibold'
                            : 'bg-[#F0ECE1] text-[#554D42] hover:bg-[#E5DEC7]'
                        }`}
                      >
                        {group.category.split('(')[0]}
                      </button>
                    ))}
                  </div>

                  {/* Active Category Dish List */}
                  {vasuettan.dishGroups && vasuettan.dishGroups[activeTab] && (
                    <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#ECE4D8] space-y-2">
                      <div className="text-xs font-semibold text-[#1F1E1B] mb-2">
                        {vasuettan.dishGroups[activeTab].category}
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {vasuettan.dishGroups[activeTab].items.map((item, iIdx) => (
                          <div key={iIdx} className="flex items-start gap-2 text-xs text-[#443D34]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#2D4A3E] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Action: Google Maps Button & Directions */}
              <div className="mt-6 pt-4 border-t border-[#F0EBE0] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="text-xs text-[#6C6356]">
                  <strong>Directions from Hotel:</strong> Take Chalakudy - Anamala Rd west toward town (2.8 km, ~5 mins).
                </div>
                {vasuettan.mapsUrl && (
                  <a
                    href={vasuettan.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#7A5835] hover:bg-[#644627] active:scale-[0.98] rounded-xl transition-all shadow-sm shrink-0"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Google Maps (6,616+ Reviews)</span>
                    <ExternalLink className="w-3 h-3 opacity-80" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Other Walkable & Nearby Eateries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DINING_HIGHLIGHTS.slice(1).map((spot, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E3DBD0] p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#7A5835] font-semibold mb-2">
                  <span>{spot.type}</span>
                  <span className="text-[#2D4A3E] font-medium">{spot.distance}</span>
                </div>
                <h4 className="text-lg font-semibold text-[#1F1E1B]">
                  {spot.name}
                </h4>
                {spot.timing && (
                  <div className="mt-1 flex items-center gap-2 text-xs text-[#70685E]">
                    <Clock className="w-3 h-3" />
                    <span>{spot.timing}</span>
                  </div>
                )}
                <p className="mt-3 text-xs sm:text-sm text-[#50493F] leading-relaxed">
                  {spot.description}
                </p>

                <div className="mt-4 pt-3 border-t border-[#F0ECE3]">
                  <div className="text-[11px] font-semibold text-[#7A5835] uppercase mb-1.5">
                    Popular Items
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {spot.recommendedDishes.map((item, dIdx) => (
                      <span
                        key={dIdx}
                        className="text-xs text-[#3E3830] bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#E9E2D6]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
