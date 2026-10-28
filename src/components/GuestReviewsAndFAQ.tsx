import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Phone, Star } from 'lucide-react';
import { FAQS, HOTEL_INFO } from '../data/hotelData';

interface FAQSectionProps {
  onOpenBooking: () => void;
}

export const GuestReviewsAndFAQ: React.FC<FAQSectionProps> = ({ onOpenBooking }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-[#FAF8F5] border-t border-[#E6E0D4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#7A5835] mb-2">
            Clear Answers for Travelers
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F1E1B]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C5449] max-w-2xl mx-auto">
            Everything you need to know about room configurations, pricing, verified facilities, and nearby attractions at Crown Tourist Home.
          </p>
        </div>

        {/* 11 Verified FAQs Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E3DBD0] overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#FAF8F5] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#1F1E1B]">
                    {faq.q}
                  </span>
                  <span className="text-[#7A5835] shrink-0 p-1 rounded-md hover:bg-[#F0ECE1]">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#524B41] leading-relaxed border-t border-[#F5F0E8] bg-[#FDFBF7]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Google Maps Review & Direct Contact Notice */}
        <div className="mt-12 p-6 sm:p-8 bg-[#2D4A3E] rounded-3xl text-white space-y-4 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#A3E3B6] font-semibold">
                Official Google Maps Profile
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-semibold mt-1">
                Have a question or looking to confirm today?
              </h3>
              <p className="text-xs sm:text-sm text-white/85 mt-1 max-w-xl">
                Contact our manager directly via WhatsApp or telephone for immediate room availability and tariff confirmation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold bg-white text-[#2D4A3E] hover:bg-[#FAF8F5] rounded-xl shadow-sm transition-colors min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 text-[#2D4A3E]" />
                <span>Message on WhatsApp</span>
              </button>
              <a
                href={HOTEL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-medium text-white/90 hover:text-white border border-white/20 hover:border-white/40 rounded-xl transition-colors min-h-[44px]"
              >
                <span>View Google Maps Listing →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
