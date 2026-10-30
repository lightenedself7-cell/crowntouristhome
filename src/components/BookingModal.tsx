import React, { useState } from 'react';
import { X, MessageCircle, Phone, Calendar, Users, Bed, CreditCard, CheckCircle2, Copy, Check, AlertCircle } from 'lucide-react';
import { HOTEL_INFO, ROOMS } from '../data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomId?: string;
  initialDates?: { checkIn: string; checkOut: string; guests: string; kids?: string };
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialRoomId,
  initialDates,
}) => {
  if (!isOpen) return null;

  const todayStr = new Date().toISOString().split('T')[0];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  const [selectedRoomId, setSelectedRoomId] = useState(initialRoomId || ROOMS[0].id);
  const [bedOption, setBedOption] = useState('1 Double Bed (₹900–₹1,000)');
  const [extraMattress, setExtraMattress] = useState('No extra mattress');
  const [checkIn, setCheckIn] = useState(initialDates?.checkIn || todayStr);
  const [checkOut, setCheckOut] = useState(initialDates?.checkOut || tomorrowStr);
  const [guestCount, setGuestCount] = useState(initialDates?.guests || '2 Adults');
  const [kidsCount, setKidsCount] = useState(initialDates?.kids || '0 Children');
  const [guestName, setGuestName] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [copiedText, setCopiedText] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const selectedRoom = ROOMS.find((r) => r.id === selectedRoomId) || ROOMS[0];

  // Adjust checkOut when checkIn changes
  const handleCheckInChange = (newIn: string) => {
    setCheckIn(newIn);
    setValidationError(null);
    if (newIn) {
      const inD = new Date(newIn);
      const outD = new Date(checkOut);
      if (isNaN(outD.getTime()) || outD <= inD) {
        const nextD = new Date(inD);
        nextD.setDate(nextD.getDate() + 1);
        setCheckOut(nextD.toISOString().split('T')[0]);
      }
    }
  };

  const handleCheckOutChange = (newOut: string) => {
    setCheckOut(newOut);
    setValidationError(null);
  };

  // Compose clean WhatsApp text
  const messageText = `Hello Crown Tourist Home,
I would like to check availability and get your best rate:

• Guest Name: ${guestName.trim() || 'Traveler'}
• Room Category: ${selectedRoom.name}
${selectedRoom.id === 'standard-double-non-ac' ? `• Bed Choice: ${bedOption}\n` : ''}${extraMattress !== 'No extra mattress' ? `• Extra Mattress: ${extraMattress}\n` : ''}• Check-in Date: ${checkIn} (Flexible)
• Check-out Date: ${checkOut} (Flexible)
• Adults: ${guestCount}
${kidsCount && kidsCount !== '0 Children' && kidsCount !== '0 Kids' ? `• Children: ${kidsCount}\n` : ''}${specialRequest ? `• Special Notes: ${specialRequest}\n` : ''}Payment Mode: Google Pay / Cash on arrival.
Please confirm room availability and the best tariff for these dates. Thank you!`;

  const encodedMessage = encodeURIComponent(messageText);
  const whatsappUrl = `https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodedMessage}`;

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (checkIn < todayStr) {
      e.preventDefault();
      setValidationError('Check-in date cannot be in the past.');
      return;
    }
    if (checkOut <= checkIn) {
      e.preventDefault();
      setValidationError('Check-out date must be after check-in date.');
      return;
    }
    setValidationError(null);
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(messageText);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
    >
      <div className="relative bg-[#FAF8F5] w-full max-w-2xl rounded-2xl border border-[#E3DBD0] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-4 sm:px-6 py-4 sm:py-5 bg-white border-b border-[#E8E2D8] flex items-center justify-between gap-3">
          <div className="min-w-0">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7A5835]">
              Direct Contact Enquiry · Crown Tourist Home
            </span>
            <h3 id="booking-modal-title" className="font-editorial text-xl sm:text-2xl font-semibold text-[#1F1E1B] truncate">
              Check Availability & Get Our Best Rate
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#6C645A] hover:text-[#1F1E1B] hover:bg-[#F2ECE1] transition-colors shrink-0"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Form */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 max-h-[78vh] overflow-y-auto">
          {/* Transparent Notice */}
          <div className="p-3.5 bg-[#EAF2EC] rounded-xl border border-[#CFE2D3] text-xs text-[#20402E] flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>Direct Availability Request:</strong> This enquiry is a direct request to check real-time availability with our on-site manager. No advance payment or middleman commission required—pay via Google Pay (GPay) or Cash upon arrival.
            </div>
          </div>

          {/* Validation Alert */}
          {validationError && (
            <div
              role="alert"
              className="p-3 bg-[#FDF2F2] border border-[#F5C2C2] rounded-xl flex items-center gap-2 text-xs text-[#9B1C1C]"
            >
              <AlertCircle className="w-4 h-4 text-[#E02424] shrink-0" />
              <span className="font-medium">{validationError}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Guest Name */}
            <div>
              <label htmlFor="modal-name" className="block text-xs font-semibold text-[#50493F] mb-1">
                Your Name
              </label>
              <input
                id="modal-name"
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full text-xs bg-white border border-[#DDD5C7] rounded-lg px-3 py-2 text-[#242424] focus:outline-none focus:ring-1 focus:ring-[#2D4A3E]"
              />
            </div>

            {/* Room Type */}
            <div>
              <label htmlFor="modal-room" className="block text-xs font-semibold text-[#50493F] mb-1">
                Selected Room
              </label>
              <select
                id="modal-room"
                value={selectedRoomId}
                onChange={(e) => setSelectedRoomId(e.target.value)}
                className="w-full text-xs bg-white border border-[#DDD5C7] rounded-lg px-3 py-2 text-[#242424] focus:outline-none focus:ring-1 focus:ring-[#2D4A3E]"
              >
                {ROOMS.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name} ({r.priceEstimate})
                  </option>
                ))}
              </select>
            </div>

            {/* Bed Option for Standard Room */}
            {selectedRoomId === 'standard-double-non-ac' && (
              <div className="sm:col-span-2 p-3 bg-[#F5EFE6] rounded-xl border border-[#E2D5C3]">
                <label htmlFor="modal-bed-option" className="block text-xs font-semibold text-[#50493F] mb-1">
                  Bed Option for Standard Non-AC Room (Price Varies)
                </label>
                <select
                  id="modal-bed-option"
                  value={bedOption}
                  onChange={(e) => setBedOption(e.target.value)}
                  className="w-full text-xs bg-white border border-[#DDD5C7] rounded-lg px-3 py-2 text-[#242424] focus:outline-none focus:ring-1 focus:ring-[#2D4A3E]"
                >
                  <option value="1 Single Bed (₹900 / night)">1 Single Bed (₹900 / night) - 1 Person</option>
                  <option value="2 Single Beds (₹1,000 / night)">2 Single Beds (₹1,000 / night) - 2 Persons</option>
                  <option value="1 Double Bed (₹900–₹1,000 / night)">1 Double Bed (₹900–₹1,000 / night) - 2 Persons</option>
                </select>
                <span className="text-[11px] text-[#7A5835] mt-1 block">
                  Includes free Wi-Fi, clean bed sheets &amp; towels, attached private clean bath (No TV).
                </span>
              </div>
            )}

            {/* Extra Mattress Option */}
            <div className="sm:col-span-2">
              <label htmlFor="modal-mattress" className="block text-xs font-semibold text-[#50493F] mb-1">
                Extra Mattress (₹200 each)
              </label>
              <select
                id="modal-mattress"
                value={extraMattress}
                onChange={(e) => setExtraMattress(e.target.value)}
                className="w-full text-xs bg-white border border-[#DDD5C7] rounded-lg px-3 py-2 text-[#242424] focus:outline-none focus:ring-1 focus:ring-[#2D4A3E]"
              >
                <option value="No extra mattress">No extra mattress needed</option>
                <option value="1 Extra Mattress (+₹200)">1 Extra Mattress (+₹200)</option>
                <option value="2 Extra Mattresses (+₹400)">2 Extra Mattresses (+₹400)</option>
              </select>
            </div>

            {/* Check-in */}
            <div>
              <label htmlFor="modal-checkin" className="block text-xs font-semibold text-[#50493F] mb-1">
                Check-in Date
              </label>
              <input
                id="modal-checkin"
                type="date"
                min={todayStr}
                value={checkIn}
                onChange={(e) => handleCheckInChange(e.target.value)}
                className="w-full text-xs bg-white border border-[#DDD5C7] rounded-lg px-3 py-2 text-[#242424] focus:outline-none focus:ring-1 focus:ring-[#2D4A3E]"
              />
              <span className="text-[10px] text-[#7A5835] mt-0.5 block">
                Standard 12:00 PM (flexible)
              </span>
            </div>

            {/* Check-out */}
            <div>
              <label htmlFor="modal-checkout" className="block text-xs font-semibold text-[#50493F] mb-1">
                Check-out Date
              </label>
              <input
                id="modal-checkout"
                type="date"
                min={checkIn || todayStr}
                value={checkOut}
                onChange={(e) => handleCheckOutChange(e.target.value)}
                className="w-full text-xs bg-white border border-[#DDD5C7] rounded-lg px-3 py-2 text-[#242424] focus:outline-none focus:ring-1 focus:ring-[#2D4A3E]"
              />
              <span className="text-[10px] text-[#7A5835] mt-0.5 block">
                Standard 12:00 PM (flexible)
              </span>
            </div>

            {/* Adults */}
            <div>
              <label htmlFor="modal-adults" className="block text-xs font-semibold text-[#50493F] mb-1">
                Number of Adults
              </label>
              <select
                id="modal-adults"
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="w-full text-xs bg-white border border-[#DDD5C7] rounded-lg px-3 py-2 text-[#242424] focus:outline-none focus:ring-1 focus:ring-[#2D4A3E]"
              >
                <option value="1 Adult">1 Adult</option>
                <option value="2 Adults">2 Adults</option>
                <option value="3 Adults">3 Adults</option>
                <option value="4 Adults">4 Adults</option>
                <option value="5+ Adults">5+ Adults</option>
              </select>
            </div>

            {/* Children */}
            <div>
              <label htmlFor="modal-children" className="block text-xs font-semibold text-[#50493F] mb-1">
                Number of Children
              </label>
              <select
                id="modal-children"
                value={kidsCount}
                onChange={(e) => setKidsCount(e.target.value)}
                className="w-full text-xs bg-white border border-[#DDD5C7] rounded-lg px-3 py-2 text-[#242424] focus:outline-none focus:ring-1 focus:ring-[#2D4A3E]"
              >
                <option value="0 Children">0 Children</option>
                <option value="1 Child">1 Child</option>
                <option value="2 Children">2 Children</option>
                <option value="3+ Children">3+ Children</option>
              </select>
            </div>
          </div>

          {/* Live Message Preview */}
          <div className="bg-white rounded-xl border border-[#DDD5C7] p-3.5 sm:p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-semibold uppercase text-[#7A5835]">
                WhatsApp Message Preview
              </span>
              <button
                type="button"
                onClick={handleCopyMessage}
                className="text-[11px] text-[#554C42] hover:text-[#1F1E1B] flex items-center gap-1 py-1 px-2 rounded hover:bg-[#F5EFE6] transition-colors"
              >
                {copiedText ? (
                  <>
                    <Check className="w-3 h-3 text-[#2D4A3E]" />
                    <span className="text-[#2D4A3E]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>
            </div>
            <pre className="text-xs text-[#332F2A] font-mono whitespace-pre-wrap break-words max-w-full overflow-x-hidden bg-[#FAF8F5] p-3 rounded-lg border border-[#EDE5D8]">
              {messageText}
            </pre>
          </div>

          {/* Payment info bar */}
          <div className="flex items-center justify-between text-xs text-[#524B41] bg-[#F5EFE6] p-3 rounded-xl">
            <span className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-[#7A5835] shrink-0" />
              <span>Payment modes accepted: <strong>Google Pay (GPay)</strong> or <strong>Cash</strong> on arrival</span>
            </span>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 bg-[#F2EDE4] border-t border-[#E3DBD0] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          <a
            href={`tel:${HOTEL_INFO.phonePrimary.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-[#0E4D40] bg-white border border-[#DDD5C7] hover:bg-[#FAF8F5] rounded-xl transition-colors min-h-[44px]"
            title="Call Reception"
          >
            <Phone className="w-3.5 h-3.5 text-[#0E4D40] shrink-0" />
            <span>Call Reception</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-[#22c55e] hover:bg-[#16a34a] active:scale-[0.98] rounded-xl shadow-md transition-all min-h-[44px]"
          >
            <MessageCircle className="w-4 h-4 text-white fill-white shrink-0" />
            <span>Book via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
