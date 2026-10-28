import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, Bus, Train, Plane, Car, ExternalLink, Phone, Waves } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const LocationDirections: React.FC = () => {
  const [copiedPlusCode, setCopiedPlusCode] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyPlusCode = () => {
    navigator.clipboard.writeText(HOTEL_INFO.plusCode);
    setCopiedPlusCode(true);
    setTimeout(() => setCopiedPlusCode(false), 2500);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(HOTEL_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <section id="location" className="py-16 lg:py-24 bg-[#F5F1E8] border-t border-[#E6E0D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#7A5835] mb-2">
            Location & Transit · Athirappilly Highway
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F1E1B] text-balance">
            Right by the highway, easy to find & reach.
          </h2>
          <p className="mt-3 text-base text-[#5C5449] leading-relaxed">
            Crown Tourist Home sits directly on Chalakudy - Anamala Road in Poovathingal, Pariyaram. It is an effortless stopover whether you are driving, riding a motorbike, or taking public transit.
          </p>
        </div>

        {/* Location Grid: Interactive Map + Address & Transit Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Address, Plus Code & Transit Guides (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-2xl border border-[#E3DBD0] p-6 sm:p-7 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#7A5835]">
                    Official Address
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#1F1E1B]">
                    Crown Tourist Home
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4E473D] leading-relaxed">
                    {HOTEL_INFO.address}
                  </p>
                </div>
                <button
                  onClick={handleCopyAddress}
                  className="shrink-0 p-2 text-xs font-medium text-[#50483E] hover:text-[#1F1E1B] bg-[#FAF8F5] border border-[#DDD5C7] rounded-lg transition-colors flex items-center gap-1.5"
                  title="Copy full address"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#2D4A3E]" />
                      <span className="text-[#2D4A3E]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Plus Code Bar */}
              <div className="mt-5 pt-4 border-t border-[#F0ECE3] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#FAF8F5] p-3.5 rounded-xl border border-[#EBE3D7]">
                <div>
                  <div className="text-[11px] font-semibold uppercase text-[#7A5835]">
                    Google Maps Plus Code
                  </div>
                  <div className="text-xs sm:text-sm font-mono font-medium text-[#242424] mt-0.5">
                    {HOTEL_INFO.plusCode}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={handleCopyPlusCode}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium bg-white text-[#383127] border border-[#DCD3C5] rounded-lg hover:bg-[#F2ECE1] transition-colors min-h-[38px]"
                  >
                    {copiedPlusCode ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#2D4A3E]" />
                        <span className="text-[#2D4A3E]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Plus Code</span>
                      </>
                    )}
                  </button>
                  <a
                    href={HOTEL_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#2D4A3E] hover:bg-[#233A30] rounded-lg transition-colors min-h-[38px]"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Chalakudy Riverfront Feature Highlight */}
            <div className="bg-gradient-to-br from-[#EDF5F1] to-[#E3EFE9] rounded-2xl border border-[#CFE1D7] p-5 sm:p-6 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-[#2D4A3E] text-white">
                  <Waves className="w-4 h-4" />
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2D4A3E]">
                    Natural Setting · Steps from Hotel
                  </span>
                  <h4 className="text-base font-semibold text-[#1F1E1B]">
                    Chalakudy River & Scenic Views Right Next Door
                  </h4>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#3C4A42] leading-relaxed">
                The pristine Chalakudy River flows directly adjacent to Crown Tourist Home. Guests can step out to enjoy tranquil water views, catch the gentle cool breeze off the river, and take peaceful morning or evening walks surrounded by Kerala’s lush greenery.
              </p>
            </div>

            {/* How to Reach: Transit Modes */}
            <div className="bg-white rounded-2xl border border-[#E3DBD0] p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#7A5835]">
                  How to Reach Us
                </h4>
                <span className="text-xs text-[#70685E]">
                  Railway 8 km · Airport 28 km
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* By Bus */}
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EFE8DD] space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#1F1E1B]">
                    <Bus className="w-4 h-4 text-[#7A5835]" />
                    <span>By Bus (Walkable Stage)</span>
                  </div>
                  <p className="text-xs text-[#524B41] leading-relaxed">
                    Get down at <strong>Poovathingal / Pariyaram bus stage</strong> on the Chalakudy - Athirappilly highway. The tourist home is just a 2-minute stroll (150m) from the stop. Frequent KSRTC and private buses run between Chalakudy and Athirappilly/Valparai.
                  </p>
                </div>

                {/* By Train */}
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EFE8DD] space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#1F1E1B]">
                    <Train className="w-4 h-4 text-[#7A5835]" />
                    <span>By Train (Chalakudy Station - 8 km)</span>
                  </div>
                  <p className="text-xs text-[#524B41] leading-relaxed">
                    <strong>Chalakudy Railway Station (CKI)</strong> is just <strong>8 km</strong> away (approx. 12-15 mins drive). Take a quick auto-rickshaw or taxi, or hop onto any direct bus toward Athirappilly from the nearby stand.
                  </p>
                </div>

                {/* By Car / Motorbike */}
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EFE8DD] space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#1F1E1B]">
                    <Car className="w-4 h-4 text-[#7A5835]" />
                    <span>By Car or Motorbike</span>
                  </div>
                  <p className="text-xs text-[#524B41] leading-relaxed">
                    Take NH 544 to Chalakudy, then turn onto Chalakudy - Anamala Road toward Athirappilly. We are situated right on the roadside in Poovathingal with convenient free front parking.
                  </p>
                </div>

                {/* By Flight */}
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EFE8DD] space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#1F1E1B]">
                    <Plane className="w-4 h-4 text-[#7A5835]" />
                    <span>From Cochin Airport (COK - 28 km)</span>
                  </div>
                  <p className="text-xs text-[#524B41] leading-relaxed">
                    Cochin International Airport (Nedumbassery) is only <strong>28 km</strong> away (approx. 35-40 min drive via NH 544). Easy prepaid taxi or Uber/Ola straight to our gate.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Frame & Manager Contact (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-[#E3DBD0] overflow-hidden shadow-sm">
              <div className="p-4 border-b border-[#F0ECE3] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-medium text-[#242424]">
                  <MapPin className="w-4 h-4 text-[#7A5835]" />
                  <span>Interactive Map Preview</span>
                </div>
                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-medium text-[#7A5835] hover:underline flex items-center gap-1"
                >
                  <span>Full Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="aspect-[4/3] w-full bg-[#E8E2D6] relative">
                <iframe
                  title="Crown Tourist Home Google Maps Location"
                  src="https://maps.google.com/maps?q=10.3190184,76.3743172&hl=en&z=15&output=embed"
                  width="100%"
                  height="100%"
                  className="border-0 w-full h-full"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-4 bg-[#FAF8F5] text-xs text-[#5F574E] space-y-2">
                <p>
                  <strong>GPS Landmark:</strong> Located on Chalakudy - Anamala Road in Pariyaram, just beside Chalakudy River and 3.5 km before Dream World Water Theme Park.
                </p>
                <div className="pt-3 border-t border-[#EDE5DA] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=10.3190184,76.3743172"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-3.5 text-xs font-semibold text-white bg-[#2D4A3E] hover:bg-[#233A30] active:scale-[0.98] rounded-xl transition-all shadow-sm min-h-[44px]"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Google Maps Directions</span>
                  </a>
                  <a
                    href={`tel:${HOTEL_INFO.phonePrimary.replace(/\s+/g, '')}`}
                    className="inline-flex items-center justify-center gap-1.5 py-3 px-3.5 text-xs font-medium text-[#443D34] bg-white border border-[#DDD5C7] hover:bg-[#F7F3EB] rounded-xl transition-colors shrink-0 min-h-[44px]"
                    title={`Call Manager (${HOTEL_INFO.phoneDisplay})`}
                  >
                    <Phone className="w-3.5 h-3.5 text-[#7A5835]" />
                    <span>Call Manager</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
