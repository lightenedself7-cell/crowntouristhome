export interface HeroSlide {
  id: string;
  url: string;
  title: string;
  caption: string;
  tag: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'entrance-day',
    url: '/assets/images/entrance.webp',
    title: 'Main Entrance & Front Parking',
    caption: 'Poovathingal, Pariyaram · Athirappilly Route',
    tag: 'Day View · Direct Highway Access',
  },
  {
    id: 'entrance-dusk',
    url: '/assets/images/dusk.webp',
    title: 'Exterior View at Dusk & 24/7 Access',
    caption: 'Chalakudy - Anamala Road · Poovathingal',
    tag: 'Dusk View · Well-Lit Parking & 24/7 Security',
  },
];

export interface RoomType {
  id: string;
  name: string;
  category: string;
  tagline: string;
  priceEstimate: string;
  priceDisplay: string;
  specLine: string;
  bedType: string;
  capacity: string;
  bathroom: string;
  features: string[];
  description: string;
  image: string;
  badge?: string;
}

export interface Attraction {
  id: string;
  name: string;
  category: 'waterfall' | 'themepark' | 'nature';
  distance: string;
  travelTime: string;
  description: string;
  image: string;
  travelTip: string;
  highlight: string;
}

export interface DishGroup {
  category: string;
  items: string[];
}

export interface DiningSpot {
  name: string;
  distance: string;
  type: string;
  specialty: string;
  timing?: string;
  bestTimeToVisit?: string;
  rating?: string;
  reviewCount?: string;
  description: string;
  recommendedDishes: string[];
  dishGroups?: DishGroup[];
  isWalkable: boolean;
  image?: string;
  mapsUrl?: string;
}

export const HOTEL_INFO = {
  name: 'Crown Tourist Home',
  website: 'https://crowntouristhome.com',
  domain: 'crowntouristhome.com',
  locationTag: 'Athirappilly Road, Pariyaram, Kerala',
  tagline: 'Simple, Clean & Budget-Friendly Stay on the Scenic Road to Athirappilly',
  address: 'Poovathingal, Chalakudy - Anamala Rd, Pariyaram, Keralam 680721, India',
  plusCode: '899H+JM Pariyaram, Keralam, India',
  managerPhone: '+91 62827 08488',
  managerPhoneRaw: '+916282708488',
  managerPhoneDisplay: '+91 62827 08488',
  phonePrimary: '+91 62827 08488',
  phoneDisplay: '+91 62827 08488',
  whatsappNumber: '918129646522',
  whatsappDisplay: '+91 81296 46522',
  googleMapsUrl: 'https://maps.app.goo.gl/Fsn2SShR5fRS5y9f8',
  heroImage: '/assets/images/entrance.webp',
  heroImageDusk: '/assets/images/dusk.webp',
  heroSlides: HERO_SLIDES,
  entranceImage: '/assets/images/entrance.webp',
  heroCaption: 'Chalakudy - Anamala Road, Poovathingal',
  coordinates: {
    lat: 10.3190184,
    lng: 76.3743172,
  },
  timings: {
    checkInDefault: '12:00 PM',
    checkOutDefault: '12:00 PM',
    flexibilityNote: 'Flexible check-in and check-out upon coordination with reception for early morning arrivals or late departures.',
  },
  payments: ['Google Pay (UPI)', 'Direct Cash'],
  managerName: 'Friendly Host & On-Site Team',
};

export const ROOMS: RoomType[] = [
  {
    id: 'standard-double-non-ac',
    name: 'Standard Room (Non-AC)',
    category: 'Budget Non-AC (No TV)',
    tagline: 'Budget stay with flexible bed options · Non-AC (No TV)',
    priceEstimate: '₹900 – ₹1,000 / night',
    priceDisplay: '₹900 – ₹1,000',
    specLine: 'Single, 2 Singles, or Double Bed · 1–2 Persons · Attached Bath',
    bedType: 'Single, 2 Singles, or Double Bed',
    capacity: '1–2 Persons',
    bathroom: 'Attached Bath',
    features: [
      'Bed Options: Single / Twin / Double Bed (₹900 – ₹1,000)',
      'Non-AC room with high-speed ceiling fan (No TV)',
      '1 Table & 2 Chairs in room',
      'Free high-speed Wi-Fi included',
      'Attached clean washroom with 24/7 water supply',
      'Clean bed sheets and towels for every guest',
      'Extra mattress available for ₹200',
    ],
    description: 'Budget stay with flexible bed options, high-speed ceiling fan, 1 table & 2 chairs, attached clean washroom with 24/7 water supply, and free Wi-Fi.',
    image: '/assets/images/standard_room.webp',
    badge: 'Flexible Bed Options',
  },
  {
    id: 'deluxe-double-ac',
    name: 'Deluxe AC Double Room',
    category: 'Air Conditioned · TV',
    tagline: 'Cool AC comfort with TV, desk & attached washroom',
    priceEstimate: '₹1,300 / night',
    priceDisplay: '₹1,300',
    specLine: '1 Double Bed · 2 Persons · Attached Bath',
    bedType: '1 Double Bed',
    capacity: '2 Persons',
    bathroom: 'Attached Bath',
    features: [
      '1 Double Bed (Comfortable foam mattress)',
      'Efficient Air Conditioning (AC) + High-speed fan',
      'Wall-mounted TV with cable channels',
      '1 Table & 2 Chairs in room',
      'Free high-speed Wi-Fi included',
      'Attached clean washroom with mirror & 24/7 water',
      'Clean bed sheets and towels for every guest',
      'Extra mattress available for ₹200',
    ],
    description: 'Cool AC comfort with TV, desk, 1 table & 2 chairs, attached clean washroom with mirror & 24/7 water, and free Wi-Fi.',
    image: '/assets/images/deluxe_room.webp',
    badge: 'AC + TV',
  },
  {
    id: 'triple-three-bed',
    name: 'Spacious Triple AC Room (3-4 Persons)',
    category: 'Air Conditioned · TV',
    tagline: 'Cool AC room with 2 twin beds, TV, table & chairs',
    priceEstimate: '₹1,500 – ₹1,600 / night',
    priceDisplay: '₹1,500 – ₹1,600',
    specLine: '2 Twin Beds · 3–4 Persons · Attached Bath',
    bedType: '2 Twin Beds',
    capacity: '3–4 Persons',
    bathroom: 'Attached Bath',
    features: [
      '2 Twin Beds (Sleeps up to 4 persons)',
      'Efficient Air Conditioning (AC) + High-speed fan',
      'Wall-mounted TV with set-top box',
      '1 Table & 2 Chairs in room for work or dining',
      'Free high-speed Wi-Fi included',
      'Spacious attached clean washroom with 24/7 water',
      'Clean bed sheets and towels for every guest',
      'Extra mattress available for ₹200',
    ],
    description: 'Cool AC room with 2 twin beds (sleeps up to 4), TV, table & chairs for work or dining, spacious attached washroom, and free Wi-Fi.',
    image: '/assets/images/triple_room.webp',
    badge: 'AC Room · TV',
  },
];

export const NEARBY_ATTRACTIONS: Attraction[] = [
  {
    id: 'chalakudy-river',
    name: 'Chalakudy River & Scenic View',
    category: 'nature',
    distance: 'Right next to hotel (50 m)',
    travelTime: '1 min walk',
    description:
      'The beautiful Chalakudy River flows right beside Crown Tourist Home. Guests can enjoy soothing water views, refreshing river breezes, and a peaceful natural setting just steps from the hotel rooms.',
    image: '/assets/images/chalakudy_river.webp',
    travelTip: 'Perfect for morning walks, quiet sunset views, and soaking in the tranquil river ambiance right next door.',
    highlight: 'Flows right next to hotel · Scenic river view',
  },
  {
    id: 'csr-checkdam',
    name: 'CSR Check Dam (Kombanpara)',
    category: 'nature',
    distance: '1.2 km',
    travelTime: '3 min drive / 15 min walk',
    description:
      'A scenic river check-dam and weir across the Chalakudy River in Pariyaram (Kombanpara Thadayana). Fresh river water flows over the smooth weir edge into cascading ripples. A peaceful 4.5-star rated local spot to unwind, enjoy cool river breezes, and relax in the evening.',
    image: '/assets/images/csr_check_dam.webp',
    travelTip: '4.5 ★ on Google (408+ reviews). Open 24 hours; late afternoon and golden hour are ideal for tranquil river relaxation.',
    highlight: '4.5 ★ rating (408 reviews) · Scenic river cascades',
  },
  {
    id: 'athirappilly-falls',
    name: 'Athirappilly Waterfalls',
    category: 'waterfall',
    distance: '17 km',
    travelTime: '25 min drive',
    description:
      'Kerala’s most celebrated natural landmark, known as the "Niagara of India". An 80-foot majestic cascade framed by lush Western Ghats rainforest.',
    image: '/assets/images/athirappilly_falls.webp',
    travelTip: 'Visit early morning (8:30 AM to 11:00 AM) or after 3:30 PM for lesser crowds and cooler forest breezes.',
    highlight: 'Iconic 80-foot waterfall cascade',
  },
  {
    id: 'thumboormuzhi-bridge',
    name: 'Thumboormuzhi Dam & Hanging Bridge',
    category: 'nature',
    distance: '8.5 km',
    travelTime: '12 min drive',
    description:
      'A picturesque check-dam with an iconic pedestrian suspension hanging bridge across the Chalakudy River, accompanied by a vibrant butterfly garden and river park.',
    image: '/assets/images/thumboormuzhi.webp',
    travelTip: 'Walk across the bridge to reach Ezhattumugham Nature Village on the opposite riverbank.',
    highlight: 'Scenic suspension bridge & river views',
  },
  {
    id: 'dream-world',
    name: 'Dream World Water Theme Park',
    category: 'themepark',
    distance: '3.5 km',
    travelTime: '5 min drive',
    description:
      'A sprawling family water and amusement park located right along Athirappilly Road with thrilling water rides, wave pool, and rain dance.',
    image: '/assets/images/dream_world.webp',
    travelTip: 'Ideal morning activity before checking into Crown Tourist Home for a relaxing evening.',
    highlight: 'Right up the road from the hotel',
  },
  {
    id: 'silver-storm',
    name: 'Silver Storm Water Theme Park & Snow Storm',
    category: 'themepark',
    distance: '7 km',
    travelTime: '10 min drive',
    description:
      'Another top amusement hub featuring high-thrill roller rides, water slides, and the sub-zero indoor Snow Storm experience.',
    image: '/assets/images/silver_storm.webp',
    travelTip: 'Great choice for kids and groups looking for full-day amusement park fun.',
    highlight: 'Water rides and sub-zero snow dome',
  },
  {
    id: 'vazhachal-charpa',
    name: 'Charpa & Vazhachal Waterfalls',
    category: 'waterfall',
    distance: '21 km',
    travelTime: '32 min drive',
    description:
      'Further up into the pristine Sholayar forest corridor past Athirappilly, offering gushing roadside falls at Charpa and the rapid cascade of Vazhachal.',
    image: '/assets/images/vazhachal_falls.webp',
    travelTip: 'Requires Athirappilly check-post forest entry pass (valid for both Athirappilly and Vazhachal).',
    highlight: 'Deep rainforest & natural rapids',
  },
];

export const DINING_HIGHLIGHTS: DiningSpot[] = [
  {
    name: 'Vasuvettante Kada',
    distance: '2.8 km (approx. 5-6 min drive / quick auto ride)',
    type: 'Legendary Rustic Kerala Meals & Non-Veg Landmark',
    specialty: 'Authentic Banana Leaf Noon Meals, Signature Beef Fry, Prawns & Fresh River Fish',
    timing: '11:30 AM – 5:00 PM (Daily, or until sold out)',
    bestTimeToVisit: '11:30 AM – 1:00 PM (Arrive early to avoid heavy lunch crowds and guarantee signature specials)',
    rating: '4.5 ★',
    reviewCount: '6,616+ Google Reviews',
    description:
      'With an outstanding 4.5 rating from over 6,616 Google reviews, Vasuvettante Kada is a celebrated gastronomic icon on the Chalakudy - Athirappilly road. Highly sought-after by travelers and locals alike for serving piping hot Kerala noon meals on fresh banana leaves alongside tender spicy beef fry, rich prawns paal curry, crispy fish fry, and country duck roast at very budget-friendly rates.',
    recommendedDishes: [
      'Nadan Beef Fry (Must-order signature slow-roasted with coconut)',
      'Chemmeen Paal Curry (Creamy coconut-milk prawns delicacy)',
      'Crispy Fresh River Fish Fry & Fish Pollichathu',
      'Chemmeen Roast / Prawns Masala Fry',
      'Angamaly Mango Pulissery (Mambazha Pulissery) over Matta Rice',
      'Nadan Duck Curry & Country Chicken Varutharachathu',
    ],
    dishGroups: [
      {
        category: 'Signature Beef & Meat Highlights',
        items: [
          'Nadan Beef Fry: Tender chunks slow-roasted with coconut chips, curry leaves, and freshly ground pepper & garam masala.',
          'Nadan Duck Roast / Curry: Robust, deeply flavorful village-style duck gravy that pairs perfectly with hot rice.',
          'Country Chicken (Nadan Kozhi): Prepared in roasted coconut gravy (varutharacha curry).',
          'Traditional Pork Roast / Fry: Spiced in authentic central Kerala rustic fashion.',
        ],
      },
      {
        category: 'Prawns (Chemmeen) Delicacies',
        items: [
          'Chemmeen Paal Curry: Plump prawns gently stewed in a rich, velvety coconut milk curry—one of the highest rated items in customer reviews.',
          'Chemmeen Fry / Roast: Pan-roasted with spicy masala and crushed shallots.',
          'Unakka Chemmeen Chammanthi: Toasted dry prawn chutney served as an accompaniment with the meal.',
        ],
      },
      {
        category: 'Fresh River & Sea Fish Specials',
        items: [
          'Fish Fry (Karimeen / Neymeen / Ayala / Avoli): Marinated in crushed chili, turmeric, and lime, fried crispy to order.',
          'Fish Pollichathu: Fish coated in aromatic shallot-tomato masala wrapped and pan-grilled in banana leaves.',
          'Meen Mulakittathu: Fiery, tangy red fish curry simmered in traditional earthen clay pots (meen chatti).',
          'Meen Mutta (Seasonal): Rare and delicious spiced fish roe fry when available.',
        ],
      },
      {
        category: 'The Authentic Banana Leaf Noon Oonu',
        items: [
          'Steaming hot Kerala red matta rice served fresh on green banana leaves.',
          'Angamaly Mango Pulissery (sweet and tangy ripe mango curd curry).',
          'Traditional Moru curry, hot sambar, rasam, avial, cabbage thoran, puli inji (ginger-tamarind pickle), and crispy pappadam.',
        ],
      },
    ],
    isWalkable: false,
    image: '/assets/images/vasuettan_meals.webp',
    mapsUrl: 'https://maps.app.goo.gl/ZjusQeurZryUaqcS9',
  },
  {
    name: 'Local Tea Stalls & Bakery',
    distance: '100m - 200m (1-2 min walk)',
    type: 'Morning Breakfast, Fresh Bakery Snacks & Hot Tea',
    specialty: 'Hot Meter Chaya, Fresh Bakery Snacks, Puffs, Pazhampori, Appam & Porotta',
    description:
      'Authentic Kerala roadside tea stalls and bakeries located just a minute or two on foot from Crown Tourist Home. Enjoy freshly baked puffs, biscuits, bread, piping hot frothy milk tea (meter chaya), golden banana fritters (pazhampori), and quick breakfast items.',
    recommendedDishes: [
      'Kerala Strong Chaya (Frothy Milk Tea)',
      'Fresh Bakery Puffs, Biscuits & Snacks',
      'Crispy Hot Pazhampori (Banana Fritters)',
      'Flaky Kerala Porotta with Chicken / Beef / Egg Roast',
      'Appam with Vegetable Stew or Egg Curry',
    ],
    isWalkable: true,
  },
  {
    name: 'Family Highway Multi-Cuisine Restaurants',
    distance: '500m - 1.5 km',
    type: 'Family Dining & Dinner',
    specialty: 'Biryani, Chinese, South Indian & North Indian Curries',
    timing: '11:00 AM – 10:30 PM',
    description:
      'Multiple well-reviewed family restaurants along the Athirappilly highway offering comfortable indoor seating, AC dining, tandoor items, Thalassery biryani, fried rice, and fresh juices for evening dinners.',
    recommendedDishes: [
      'Kerala Thalassery Dum Biryani',
      'Tandoori Chicken & Butter Naan',
      'Fresh Lime Soda & Seasonal Fruit Shakes',
    ],
    isWalkable: false,
  },
];

export const HOUSE_POLICIES = [
  {
    title: 'Clean Rooms, Clean Bed Sheets & Towels Guarantee',
    description:
      'We keep things honest and tidy. Clean bed sheets, towels, and pillow covers are provided for every single guest before check-in. Rooms and attached washrooms are swept and sanitized before every arrival.',
  },
  {
    title: 'Free Wi-Fi & Room Amenities',
    description:
      'Free Wi-Fi is available across Crown Tourist Home. AC rooms include a wall-mounted TV (Non-AC rooms do not have a TV). Extra floor mattress is available for ₹200.',
  },
  {
    title: 'Bed & Attached Washroom Only (No In-House Kitchen)',
    description:
      'We operate transparently as a tourist home focusing on clean, budget-friendly sleeping accommodation with private attached bathrooms. We do not operate an in-house restaurant, but famous local eateries (including Vasuvettante Kada and bakeries) are just steps away.',
  },
  {
    title: 'Flexible Check-in & Check-out',
    description:
      'Standard check-in is 12:00 PM and check-out is 12:00 PM. However, we are flexible! If you are arriving early in the morning by train/bus or want an evening departure, simply inform the manager in advance.',
  },
  {
    title: '24/7 CCTV & Friendly On-Site Manager',
    description:
      'Our friendly manager stays on the property to guide you with local routes, bus timings, and sightseeing tips. The premises and parking areas are monitored by 24-hour CCTV for your peace of mind.',
  },
  {
    title: 'Simple Direct Payments (Google Pay / Cash)',
    description:
      'Pay conveniently on arrival via Google Pay (GPay / UPI) or direct cash. No hidden booking service fees or foreign platform markups.',
  },
];

export const FAQS = [
  {
    q: 'How do I book a room at Crown Tourist Home?',
    a: 'We do not use complicated online OTA booking engines. Simply click "Book via WhatsApp" (+91 81296 46522) or give reception a direct phone call (+91 62827 08488). You can confirm your dates, room choice, and get immediate confirmation with no booking commissions.',
  },
  {
    q: 'Is there Wi-Fi available at Crown Tourist Home?',
    a: 'Yes, free Wi-Fi is provided throughout Crown Tourist Home for all staying guests.',
  },
  {
    q: 'What bed options are available for Standard Non-AC rooms?',
    a: 'Standard Non-AC rooms offer flexible bed choices: 1 Single Bed, 2 Single Beds (twin beds), or 1 Double Bed at ₹900 – ₹1,000 per night. Prices depend on single vs double occupancy.',
  },
  {
    q: 'Do rooms have TVs?',
    a: 'Air-conditioned rooms (Deluxe AC Room and Spacious Triple Room) feature a wall-mounted TV with cable channels. Non-AC rooms do not have a TV.',
  },
  {
    q: 'Can I get an extra mattress?',
    a: 'Yes! An extra floor mattress is available upon request for just ₹200.',
  },
  {
    q: 'Are the rooms and bathrooms clean?',
    a: 'Yes! We guarantee clean rooms, clean bed sheets and towels for every guest, and clean attached private washrooms with 24/7 water supply.',
  },
  {
    q: 'What is the check-in and check-out time?',
    a: 'Standard check-in time is 12:00 PM and check-out time is 12:00 PM. However, we offer flexibility! If you arrive earlier from an overnight train or need extended check-out, simply inform the manager in advance and we will accommodate based on room availability.',
  },
  {
    q: 'Is food available inside the hotel?',
    a: 'We do not run an in-house kitchen or room service. Instead, we are located right near authentic local eateries, including local tea stalls & bakeries (1-2 min walk) and the famous Vasuvettante Kada (legendary Kerala banana leaf meals & seafood/beef fry, 5 min drive).',
  },
  {
    q: 'Is there parking for cars and bikes?',
    a: 'Yes, there is dedicated open parking space directly in front of the tourist home, monitored 24/7 by CCTV security cameras.',
  },
  {
    q: 'How far is Crown Tourist Home from Athirappilly Waterfalls & CSR Check Dam?',
    a: 'CSR Check Dam (Kombanpara) is just 1.2 km away (3-minute drive or scenic 15-minute walk). Athirappilly Waterfalls is 17 km away (approx. 20-25 minutes scenic drive through forest roads). The Chalakudy River flows right beside the hotel.',
  },
  {
    q: 'How far is Crown Tourist Home from Chalakudy Railway Station and Cochin Airport?',
    a: 'Chalakudy Railway Station (CKI) is just 8 km away (approx. 12-15 minutes drive / quick auto ride). Cochin International Airport (COK) is 28 km away (approx. 35-40 minutes drive via NH 544). Frequent buses and taxis connect directly to Pariyaram.',
  },
  {
    q: 'What payment modes are accepted?',
    a: 'We accept Google Pay (GPay / UPI) and Cash upon arrival.',
  },
];

export const CSR_CHECK_DAM_INFO = {
  heading: 'CSR Check Dam (Kombanpara Thadayana)',
  body: 'Located in Pariyaram along the river corridor, the CSR Check Dam (also known locally as Kombanpara Check Dam / Charakkudy Check Dam) is a favorite neighborhood scenic spot. The river flows gracefully over the low concrete weir, creating gentle water cascades and tranquil views framed by lush tropical greenery.',
  mapsUrl: 'https://maps.app.goo.gl/Fsn2SShR5fRS5y9f8',
  guidance: 'Visitors should enjoy the waters responsibly, especially during monsoon surges when river currents can be swift. Always heed local warnings.',
  highlights: [
    {
      title: 'Soothing Evening Atmosphere',
      desc: 'Rated 4.5 ★ by over 408 Google visitors as a beautiful place to spend relaxing evenings with family and friends.',
    },
    {
      title: 'Gentle River Water Cascades',
      desc: 'Watch the Chalakudy River flow gracefully across the low weir with fresh breezes and scenic riverside trees.',
    },
    {
      title: 'Close Proximity to Hotel',
      desc: 'Just ~1.2 km from Crown Tourist Home (approx. 3-minute drive or peaceful 15-minute walk).',
    },
    {
      title: 'Open 24 Hours',
      desc: 'Accessible around the clock for early morning serenity or relaxing golden-hour sunsets.',
    },
  ],
};

export const NEARBY_FOOD_INFO = {
  title: 'We Don’t Cook Inside. You Feast Authentically Outside.',
  body: 'Crown Tourist Home provides clean, comfortable sleeping accommodation with attached washrooms. Instead of inflated hotel kitchen charges, guests enjoy effortless access to Kerala’s most celebrated rustic eateries, bakeries, and tea stalls right along the road.',
  vasuettansRestaurant: {
    name: 'Vasuvettante Kada',
    tagline: 'Legendary Banana Leaf Meals & Signature Non-Veg Delicacies',
    rating: '4.5 ★',
    reviewCount: '6,616+ Google Reviews',
    mapsUrl: 'https://maps.app.goo.gl/ZjusQeurZryUaqcS9',
    description:
      'With an outstanding 4.5 rating from over 6,616 Google reviews, Vasuvettante Kada is a celebrated gastronomic icon on the Chalakudy - Athirappilly road. Highly sought-after by travelers and locals alike for serving piping hot Kerala noon meals on fresh banana leaves alongside tender spicy beef fry, rich prawns paal curry, crispy fish fry, and country duck roast at very budget-friendly rates.',
    image: '/assets/images/vasuettan_meals.webp',
    specialties: [
      'Nadan Beef Fry slow-roasted with coconut chips',
      'Chemmeen Paal Curry (prawns in coconut milk)',
      'Crispy Fresh River Fish Fry & Pollichathu',
      'Banana Leaf Meals (Oonu) with Mango Pulissery',
    ],
  },
  categories: [
    {
      title: 'Local Bakeries',
      desc: 'Freshly baked veg/egg/chicken puffs, biscuits, cutlets, cakes, and bread available within a 1-2 minute walk from the rooms.',
    },
    {
      title: 'Roadside Tea Stalls',
      desc: 'Piping hot frothy meter chaya (strong tea), hot banana fritters (pazhampori), appam, and flaky Kerala porotta just steps away.',
    },
    {
      title: 'Family Multi-Cuisine',
      desc: 'Well-reviewed family restaurants within 500m to 1.5 km offering AC dining, Thalassery biryani, tandoori, and Chinese dishes.',
    },
    {
      title: 'Highway Refreshments',
      desc: 'Fresh tender coconut stalls, lime soda, and fruit juice centers dotted all along the Athirappilly tourist route.',
    },
  ],
};
