import React from 'react';
import { Wifi, Tv, Car, ShieldCheck, Bath, UserCheck, Clock, CreditCard, Sparkles, CheckCircle2, BedDouble } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const FacilitiesSection: React.FC = () => {
  const facilitiesList = [
    {
      icon: <Wifi className="w-5 h-5 text-[#2D4A3E]" />,
      title: 'Free High-Speed Wi-Fi',
      desc: 'Complimentary wireless internet access available across all guest rooms, corridors, and common spaces.',
      badge: 'Included in all rooms',
    },
    {
      icon: <BedDouble className="w-5 h-5 text-[#7A5835]" />,
      title: '1 Table & 2 Chairs in Every Room',
      desc: 'Dedicated wooden furniture in every room category for comfortable in-room dining, resting, or work.',
      badge: 'Furnished standard',
    },
    {
      icon: <Tv className="w-5 h-5 text-[#2D4A3E]" />,
      title: 'Cable TV in AC Rooms',
      desc: 'Wall-mounted flat-screen TV with set-top box in Deluxe AC Double and Spacious Triple AC rooms (Non-AC rooms do not have TV).',
      badge: 'AC room feature',
    },
    {
      icon: <Bath className="w-5 h-5 text-[#7A5835]" />,
      title: 'Attached Clean Private Washroom',
      desc: 'Every room has its own clean, private tiled washroom with 24/7 continuous water supply and mirror.',
      badge: 'Private & attached',
    },
    {
      icon: <Car className="w-5 h-5 text-[#2D4A3E]" />,
      title: 'Free On-Site Vehicle Parking',
      desc: 'Dedicated open parking area directly in front of Crown Tourist Home for family cars, SUVs, and two-wheelers.',
      badge: 'On-site & free',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#7A5835]" />,
      title: '24/7 CCTV Security Surveillance',
      desc: 'Continuous CCTV camera monitoring over parking spaces, reception corridor, and property grounds for peace of mind.',
      badge: '24/7 monitored',
    },
    {
      icon: <UserCheck className="w-5 h-5 text-[#2D4A3E]" />,
      title: 'On-Site Resident Manager',
      desc: 'Our courteous host resides on the property to provide instant check-in assistance, sightseeing advice, and local bus guidance.',
      badge: 'Always on property',
    },
    {
      icon: <Clock className="w-5 h-5 text-[#7A5835]" />,
      title: 'Flexible Check-In & Check-Out',
      desc: 'Standard timings are 12:00 PM, with easy flexible arrangements upon advance notice for early morning train/bus arrivals.',
      badge: 'Flexible by request',
    },
    {
      icon: <CreditCard className="w-5 h-5 text-[#2D4A3E]" />,
      title: 'Direct Google Pay & Cash Payments',
      desc: 'Straightforward payment on arrival via Google Pay UPI QR code or direct cash. Zero hidden booking fees or platform commissions.',
      badge: 'GPay & Cash accepted',
    },
  ];

  return (
    <section
      id="facilities"
      className="py-12 lg:py-16 bg-[#FAF8F5] border-t border-[#E6E0D4] scroll-mt-16 sm:scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#7A5835] mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#2D4A3E]" />
            <span>Verified Property Amenities · Crown Tourist Home</span>
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1F1E1B] text-balance">
            Facilities for a Comfortable &amp; Restful Stay
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#5C5449] leading-relaxed">
            Essential comforts right beside the Chalakudy River. Everything you need to unwind, freshen up, and rest securely before exploring Athirappilly and local attractions.
          </p>
        </div>

        {/* Facilities Grid: Compact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-4.5">
          {facilitiesList.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl sm:rounded-2xl border border-[#E3DBD0] p-4 sm:p-4.5 shadow-xs flex flex-col justify-between hover:border-[#CFC3B0] transition-colors"
            >
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F6F2EA] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-sm sm:text-[15px] font-semibold text-[#1F1E1B] leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-[#524B41] leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-[#F2ECE3] text-[11px] text-[#2D4A3E] font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2D4A3E] shrink-0" />
                <span>{item.badge}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Mattress & Pure Essentials Strip */}
        <div className="bg-[#FAF4EA] border border-[#E8DFC9] rounded-xl sm:rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#524B41]">
          <div className="space-y-0.5">
            <span className="font-semibold text-xs sm:text-sm text-[#1F1E1B] block">
              Traveling with an extra guest or family member?
            </span>
            <p className="text-xs text-[#5D5549]">
              An extra floor mattress with clean bed sheets is readily available upon request for just <strong>₹200 / night</strong>.
            </p>
          </div>
          <a
            href={`tel:${HOTEL_INFO.phonePrimary.replace(/\s+/g, '')}`}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#1F1E1B] bg-white border border-[#DDD5C7] rounded-xl hover:bg-[#F2ECE1] transition-colors shrink-0 shadow-xs min-h-[38px]"
          >
            <span>Ask Manager: {HOTEL_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
