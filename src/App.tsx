/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RoomsSection } from './components/RoomsSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { HousekeepingSection } from './components/HousekeepingSection';
import { CSRCheckDamSection } from './components/CSRCheckDamSection';
import { NearbyFoodSection } from './components/NearbyFoodSection';
import { LocationDirections } from './components/LocationDirections';
import { GuestReviewsAndFAQ } from './components/GuestReviewsAndFAQ';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingActionBar } from './components/FloatingActionBar';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>(undefined);
  const [selectedDates, setSelectedDates] = useState<
    { checkIn: string; checkOut: string; guests: string; kids?: string } | undefined
  >(undefined);

  const handleOpenBooking = (
    roomId?: string,
    dates?: { checkIn: string; checkOut: string; guests: string; kids?: string }
  ) => {
    setSelectedRoomId(roomId);
    if (dates) {
      setSelectedDates(dates);
    }
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#242424] overflow-x-hidden w-full">
      {/* 1. Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* 1 & 2. Hero Section with property overview, Chalakudy river location, and primary CTAs */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 3. Room categories and pricing (Non-AC, Standard AC, Spacious AC Triple at ₹1,600) */}
        <RoomsSection onOpenBooking={handleOpenBooking} />

        {/* 4. Verified Facilities & Amenities */}
        <FacilitiesSection />

        {/* 5. Honest Cleanliness & Housekeeping Standards */}
        <HousekeepingSection />

        {/* 6. CSR Check Dam (Charakkudy Check Dam) Attraction with official Google Maps link */}
        <CSRCheckDamSection />

        {/* 7. Nearby Food and Dining Options (Bakeries, tea stalls, multicuisine & highway restaurants) */}
        <NearbyFoodSection />

        {/* 8. Location & Directions (Poovathingal, Chalakudy-Anamala Rd, Railway 8 km, Airport 28 km) */}
        <LocationDirections />

        {/* 9. Frequently Asked Questions (11 verified FAQs from master prompt) */}
        <GuestReviewsAndFAQ onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 10. Contact & Booking Enquiries / Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Floating Action Button for instant WhatsApp / Call */}
      <FloatingActionBar onOpenBooking={() => handleOpenBooking()} />

      {/* Direct Booking Modal with pre-filled WhatsApp link generator */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialRoomId={selectedRoomId}
        initialDates={selectedDates}
      />
    </div>
  );
}
