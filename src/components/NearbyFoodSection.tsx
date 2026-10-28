import React from 'react';
import { Utensils, Coffee, Store, Car, Users, CheckCircle2, Star, Sparkles, MapPin, ExternalLink } from 'lucide-react';
import { NEARBY_FOOD_INFO } from '../data/hotelData';

export const NearbyFoodSection: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Store className="w-5 h-5 text-[#7A5835]" />;
      case 1:
        return <Coffee className="w-5 h-5 text-[#2D4A3E]" />;
      case 2:
        return <Users className="w-5 h-5 text-[#2D4A3E]" />;
      default:
        return <Car className="w-5 h-5 text-[#7A5835]" />;
    }
  };

  const vasuettan = NEARBY_FOOD_INFO.vasuettansRestaurant;

  return (
    <section id="dining" className="py-16 lg:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#7A5835] mb-2">
            <Utensils className="w-4 h-4 text-[#2D4A3E]" />
            <span>Food & Local Culinary Experience</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F1E1B]">
            {NEARBY_FOOD_INFO.title}
          </h2>
          <p className="mt-3 text-base text-[#5C5449] leading-relaxed">
            {NEARBY_FOOD_INFO.body}
          </p>
        </div>

        {/* 1. FEATURED DINING SPOTLIGHT: Vasuvettante Kada */}
        {vasuettan && (
          <div className="bg-white rounded-3xl border-2 border-[#7A5835]/25 shadow-md overflow-hidden">
            <div className="px-6 py-3.5 bg-[#F7F2E8] border-b border-[#E8DFC9] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded-md bg-[#7A5835] text-white">
                  <Sparkles className="w-3.5 h-3.5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#7A5835]">
                  Local Dining Landmark · Athirappilly Highway
                </span>
              </div>
              <span className="text-xs text-[#5D5549] font-medium">
                Must-Visit for Authentic Kerala Taste
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              {/* Photo */}
              <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto min-h-[300px] bg-[#EBE5DA] overflow-hidden">
                <img
                  src={vasuettan.image}
                  alt={`${vasuettan.name} on Athirappilly Highway`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#FFD180]">
                    Authentic Highway Dining
                  </span>
                  <p className="text-xl font-bold drop-shadow-sm">
                    {vasuettan.name}
                  </p>
                  <p className="text-xs text-white/90 mt-0.5">
                    Traditional Kerala meals on fresh plantain banana leaves
                  </p>
                </div>
              </div>

              {/* Details & Specialties */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-5">
                <div className="space-y-3.5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#7A5835]">
                        {vasuettan.tagline}
                      </span>
                      {vasuettan.rating && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#FAF4E8] text-[#7A5835] text-xs font-semibold border border-[#E9DFCF]">
                          <Star className="w-3 h-3 fill-[#C48729] text-[#C48729]" />
                          <span>{vasuettan.rating}</span>
                        </span>
                      )}
                      {vasuettan.reviewCount && (
                        <span className="text-xs text-[#635A4E] font-medium">
                          ({vasuettan.reviewCount})
                        </span>
                      )}
                    </div>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#1F1E1B] mt-0.5">
                      {vasuettan.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4E473D] leading-relaxed">
                    {vasuettan.description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#7A5835] mb-2.5">
                      House Specialties:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#3E382E]">
                      {vasuettan.specialties.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F0EBE0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#635A4E]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#2D4A3E] font-semibold">2.8 km from hotel (~5 min drive)</span>
                    <span className="text-[#A59C90]">·</span>
                    <span>On Chalakudy - Athirappilly Road</span>
                  </div>

                  {vasuettan.mapsUrl && (
                    <a
                      href={vasuettan.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#2D4A3E] hover:bg-[#233A30] active:scale-[0.98] text-white text-xs font-semibold rounded-xl transition-all shadow-sm shrink-0"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#7EE787]" />
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3 h-3 opacity-80" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. CATEGORIES: Bakeries, Tea Stalls, Family Dining, Highway Stops */}
        <div className="space-y-4">
          <h3 className="font-editorial text-2xl font-semibold text-[#1F1E1B]">
            More Dining Options in the Immediate Vicinity
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {NEARBY_FOOD_INFO.categories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E3DBD0] p-5 sm:p-6 shadow-sm flex flex-col justify-between hover:border-[#D0C5B2] transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F6F2EA] flex items-center justify-center mb-3.5">
                    {getCategoryIcon(idx)}
                  </div>
                  <h4 className="text-base font-semibold text-[#1F1E1B] mb-1.5">
                    {cat.title}
                  </h4>
                  <p className="text-xs text-[#50493F] leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F2ECE3] text-[11px] text-[#7A5835] font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2D4A3E] shrink-0" />
                  <span>Available in Pariyaram & along highway</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clear Transparent Note on Lodging */}
        <div className="p-5 bg-[#FAF6EE] border border-[#E7DCBF] rounded-2xl text-xs text-[#524B41]">
          <p className="leading-relaxed">
            <strong>Transparent Hospitality Note:</strong> Crown Tourist Home is dedicated to providing clean, restful lodging with private attached bathrooms, and does not run an in-house restaurant. Guests have immediate access to Vasuvettante Kada, bakeries, tea stalls, and highway diners just steps and minutes away.
          </p>
        </div>
      </div>
    </section>
  );
};
