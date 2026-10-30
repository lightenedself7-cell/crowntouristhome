// Crown Tourist Home - Vanilla Interactive Script

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Mobile Menu Drawer ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenuDrawer = document.getElementById('mobileMenuDrawer');
  const closeMobileMenuBtn = document.getElementById('closeMobileMenuBtn');
  const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    if (mobileMenuDrawer) {
      mobileMenuDrawer.classList.remove('translate-x-full');
      mobileMenuDrawer.classList.add('translate-x-0');
    }
    if (mobileMenuBackdrop) {
      mobileMenuBackdrop.classList.remove('hidden');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (mobileMenuDrawer) {
      mobileMenuDrawer.classList.remove('translate-x-0');
      mobileMenuDrawer.classList.add('translate-x-full');
    }
    if (mobileMenuBackdrop) {
      mobileMenuBackdrop.classList.add('hidden');
    }
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
  if (closeMobileMenuBtn) closeMobileMenuBtn.addEventListener('click', closeMobileMenu);
  if (mobileMenuBackdrop) mobileMenuBackdrop.addEventListener('click', closeMobileMenu);
  mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

  // --- 2. Desktop "More" Dropdown ---
  const moreDropdownBtn = document.getElementById('moreDropdownBtn');
  const moreDropdownMenu = document.getElementById('moreDropdownMenu');
  const moreDropdownChevron = document.getElementById('moreDropdownChevron');

  function toggleMoreDropdown() {
    if (!moreDropdownMenu) return;
    const isHidden = moreDropdownMenu.classList.contains('hidden');
    if (isHidden) {
      moreDropdownMenu.classList.remove('hidden');
      if (moreDropdownChevron) moreDropdownChevron.classList.add('rotate-180');
    } else {
      moreDropdownMenu.classList.add('hidden');
      if (moreDropdownChevron) moreDropdownChevron.classList.remove('rotate-180');
    }
  }

  function closeMoreDropdown() {
    if (moreDropdownMenu && !moreDropdownMenu.classList.contains('hidden')) {
      moreDropdownMenu.classList.add('hidden');
      if (moreDropdownChevron) moreDropdownChevron.classList.remove('rotate-180');
    }
  }

  if (moreDropdownBtn) {
    moreDropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMoreDropdown();
    });
  }

  document.addEventListener('click', (e) => {
    if (moreDropdownMenu && !moreDropdownMenu.contains(e.target) && e.target !== moreDropdownBtn) {
      closeMoreDropdown();
    }
  });

  // --- 3. Hero Date Picker & WhatsApp Generator ---
  const checkInInput = document.getElementById('checkInInput');
  const checkOutInput = document.getElementById('checkOutInput');
  const roomChoiceSelect = document.getElementById('roomChoiceSelect');
  const guestsSelect = document.getElementById('guestsSelect');
  const heroEnquiryBtn = document.getElementById('heroEnquiryBtn');

  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  if (checkInInput && checkOutInput) {
    checkInInput.min = todayStr;
    checkInInput.value = todayStr;
    checkOutInput.min = tomorrowStr;
    checkOutInput.value = tomorrowStr;

    checkInInput.addEventListener('change', () => {
      if (checkInInput.value) {
        const nextDay = new Date(checkInInput.value);
        nextDay.setDate(nextDay.getDate() + 1);
        const nextDayStr = nextDay.toISOString().split('T')[0];
        checkOutInput.min = nextDayStr;
        if (checkOutInput.value <= checkInInput.value) {
          checkOutInput.value = nextDayStr;
        }
      }
    });
  }

  if (heroEnquiryBtn) {
    heroEnquiryBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const checkInVal = checkInInput ? checkInInput.value : todayStr;
      const checkOutVal = checkOutInput ? checkOutInput.value : tomorrowStr;
      const roomVal = roomChoiceSelect ? roomChoiceSelect.value : 'Any Available Room';
      const guestsVal = guestsSelect ? guestsSelect.value : '2 Adults';

      const message = `Hello Crown Tourist Home,
I would like to check room availability and get your best tariff:

• Room Type: ${roomVal}
• Check-in Date: ${checkInVal}
• Check-out Date: ${checkOutVal}
• Guests: ${guestsVal}

Location: Beside Chalakudy River, Pariyaram (Athirappilly Road).
Please let me know if this is available. Thank you!`;

      const whatsappUrl = `https://wa.me/918129646522?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  // --- 4. Interactive Photo Gallery & Lightbox ---
  const galleryItems = [
    {
      url: 'images/dusk.jpg',
      title: 'Crown Tourist Home at Dusk',
      tag: 'Chalakudy–Anamala Highway Frontage',
      desc: 'Evening view of Crown Tourist Home on Chalakudy–Anamala Road in Pariyaram with warm ambient lighting, secure parking, and clear roadside signage.'
    },
    {
      url: 'images/entrance.jpg',
      title: 'Main Entrance & Front Parking',
      tag: 'Direct Highway Access · On-Site Parking',
      desc: 'Daytime entrance along the scenic route to Athirappilly Waterfalls with direct road-level access and dedicated parking.'
    },
    {
      url: 'images/triple_room.jpg',
      title: 'Spacious Triple AC Room',
      tag: 'AC + TV · ₹1,500–₹1,600 / night',
      desc: 'Generously sized air-conditioned family room featuring wooden beds, fresh linens, wall-mounted television, and attached clean washroom.'
    },
    {
      url: 'images/deluxe_room.jpg',
      title: 'Deluxe AC Double Room',
      tag: 'AC + TV · ₹1,300 / night',
      desc: 'Comfortable air-conditioned double room with quality foam mattress, dedicated work desk, cable television, and private attached washroom.'
    },
    {
      url: 'images/standard_room.jpg',
      title: 'Standard Room (Non-AC)',
      tag: 'Ceiling Fan · ₹900–₹1,000 / night',
      desc: 'Affordable, well-ventilated budget room with comfortable bed, high-speed ceiling fan, and private attached washroom.'
    },
    {
      url: 'images/hallway.jpg',
      title: 'Symmetrical Hallway to the Exit',
      tag: 'Clean Tiled Floors · 24/7 Security',
      desc: 'Bright, spotless interior hallway with gleaming tile floors, room entrances, natural daylight, potted plants, and clear exit access.'
    }
  ];

  let currentGalleryIndex = 0;

  const galleryMainImg = document.getElementById('galleryMainImg');
  const galleryTitle = document.getElementById('galleryTitle');
  const galleryTag = document.getElementById('galleryTag');
  const galleryDesc = document.getElementById('galleryDesc');
  const galleryIndexIndicator = document.getElementById('galleryIndexIndicator');
  const galleryPrevBtn = document.getElementById('galleryPrevBtn');
  const galleryNextBtn = document.getElementById('galleryNextBtn');
  const galleryThumbsContainer = document.getElementById('galleryThumbsContainer');

  // Lightbox elements
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');
  const closeLightboxBtn = document.getElementById('closeLightboxBtn');
  const openLightboxBtn = document.getElementById('openLightboxBtn');

  function updateGallery(index) {
    if (index < 0) index = galleryItems.length - 1;
    if (index >= galleryItems.length) index = 0;
    currentGalleryIndex = index;
    const item = galleryItems[currentGalleryIndex];

    if (galleryMainImg) galleryMainImg.src = item.url;
    if (galleryTitle) galleryTitle.textContent = item.title;
    if (galleryTag) galleryTag.textContent = item.tag;
    if (galleryDesc) galleryDesc.textContent = item.desc;
    if (galleryIndexIndicator) galleryIndexIndicator.textContent = `${currentGalleryIndex + 1} / ${galleryItems.length}`;

    // Update thumbnail borders
    const thumbs = document.querySelectorAll('.gallery-thumb-btn');
    thumbs.forEach((thumb, i) => {
      if (i === currentGalleryIndex) {
        thumb.classList.add('ring-2', 'ring-[#7A5835]', 'border-transparent');
        thumb.classList.remove('opacity-60');
      } else {
        thumb.classList.remove('ring-2', 'ring-[#7A5835]', 'border-transparent');
        thumb.classList.add('opacity-60');
      }
    });

    // Update Lightbox if open
    if (lightboxModal && !lightboxModal.classList.contains('hidden')) {
      updateLightbox();
    }
  }

  function updateLightbox() {
    const item = galleryItems[currentGalleryIndex];
    if (lightboxImg) lightboxImg.src = item.url;
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxDesc) lightboxDesc.textContent = item.desc;
    if (lightboxCounter) lightboxCounter.textContent = `${currentGalleryIndex + 1} of ${galleryItems.length}`;
  }

  function openLightbox() {
    if (!lightboxModal) return;
    updateLightbox();
    lightboxModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (galleryPrevBtn) galleryPrevBtn.addEventListener('click', () => updateGallery(currentGalleryIndex - 1));
  if (galleryNextBtn) galleryNextBtn.addEventListener('click', () => updateGallery(currentGalleryIndex + 1));

  if (openLightboxBtn) openLightboxBtn.addEventListener('click', openLightbox);
  if (galleryMainImg) galleryMainImg.addEventListener('click', openLightbox);

  if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', () => {
    updateGallery(currentGalleryIndex - 1);
  });
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', () => {
    updateGallery(currentGalleryIndex + 1);
  });

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // Generate thumbnail elements
  if (galleryThumbsContainer) {
    galleryThumbsContainer.innerHTML = '';
    galleryItems.forEach((item, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `gallery-thumb-btn relative rounded-lg overflow-hidden shrink-0 w-16 h-12 sm:w-20 sm:h-14 border border-[#E3DBD0] transition-all cursor-pointer ${
        idx === 0 ? 'ring-2 ring-[#7A5835]' : 'opacity-60 hover:opacity-100'
      }`;
      btn.innerHTML = `<img src="${item.url}" alt="${item.title}" class="w-full h-full object-cover" loading="lazy" />`;
      btn.addEventListener('click', () => updateGallery(idx));
      galleryThumbsContainer.appendChild(btn);
    });
  }

  // Keyboard navigation for gallery & lightbox
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeMoreDropdown();
      closeMobileMenu();
    } else if (e.key === 'ArrowLeft') {
      updateGallery(currentGalleryIndex - 1);
    } else if (e.key === 'ArrowRight') {
      updateGallery(currentGalleryIndex + 1);
    }
  });

  // --- 5. FAQ Accordion ---
  const faqButtons = document.querySelectorAll('.faq-toggle-btn');
  faqButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const chevron = btn.querySelector('.faq-chevron');
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      // Close all other FAQs
      faqButtons.forEach((otherBtn) => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          const otherAnswer = otherBtn.nextElementSibling;
          const otherChevron = otherBtn.querySelector('.faq-chevron');
          if (otherAnswer) otherAnswer.classList.add('hidden');
          if (otherChevron) otherChevron.classList.remove('rotate-180');
        }
      });

      if (isExpanded) {
        btn.setAttribute('aria-expanded', 'false');
        if (answer) answer.classList.add('hidden');
        if (chevron) chevron.classList.remove('rotate-180');
      } else {
        btn.setAttribute('aria-expanded', 'true');
        if (answer) answer.classList.remove('hidden');
        if (chevron) chevron.classList.add('rotate-180');
      }
    });
  });
});
