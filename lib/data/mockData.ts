// Mock data structure - in production this would come from Cloudflare R2 JSON files

export interface Service {
  id: string;
  title: string;
  category: 'vedic-astrology' | 'western-astrology' | 'healing';
  slug: string;
  description: string;
  image: string;
  benefits: string[];
  process: string[];
  duration: string;
  price: string;
  featured: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishedAt: string;
  tags: string[];
  readTime: string;
  featured: boolean;
}

export interface Mantra {
  id: string;
  planet: string;
  sanskrit: string;
  translation: string;
  audioUrl: string;
  icon: string;
  benefits: string[];
  chantingRules: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  image?: string;
}

// Mock Services Data
export const servicesData: Service[] = [
  {
    id: '1',
    title: 'Parashari Jyotish',
    category: 'vedic-astrology',
    slug: 'parashari-jyotish',
    description: 'Traditional Vedic astrology using Parashari principles for comprehensive life guidance',
    image: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg',
    benefits: [
      'Deep understanding of life purpose',
      'Career and business guidance', 
      'Relationship compatibility analysis',
      'Health and wellness insights',
      'Spiritual growth direction'
    ],
    process: [
      'Birth chart calculation and analysis',
      'Planetary periods (Dasha) examination',
      'Yogas and combinations study',
      'Remedies and recommendations',
      'Follow-up consultation included'
    ],
    duration: '90 minutes',
    price: '₹2,100',
    featured: true
  },
  {
    id: '2', 
    title: 'KP Astrology',
    category: 'vedic-astrology',
    slug: 'kp-astrology',
    description: 'Precise predictions using Krishnamurti Paddhati system for accurate timing of events',
    image: 'https://images.pexels.com/photos/8386654/pexels-photo-8386654.jpeg',
    benefits: [
      'Precise event timing',
      'Yes/No answers to specific questions',
      'Career change timing',
      'Marriage and relationship timing',
      'Business venture success probability'
    ],
    process: [
      'Sub-lord analysis',
      'Ruling planets calculation',
      'Significators identification', 
      'Stellar astrology application',
      'Detailed predictions with timing'
    ],
    duration: '75 minutes',
    price: '₹1,800',
    featured: true
  },
  {
    id: '3',
    title: 'Crystal Healing',
    category: 'healing',
    slug: 'crystal-healing',
    description: 'Harness the power of crystals to balance energy, promote healing, and enhance well-being',
    image: 'https://images.pexels.com/photos/6191374/pexels-photo-6191374.jpeg',
    benefits: [
      'Energy cleansing and balancing',
      'Emotional healing and stability',
      'Physical wellness enhancement',
      'Chakra alignment and activation',
      'Protection from negative energies'
    ],
    process: [
      'Energy assessment and consultation',
      'Crystal selection based on needs',
      'Guided healing session',
      'Crystal programming and activation',
      'Home care instructions'
    ],
    duration: '60 minutes',
    price: '₹1,500',
    featured: true
  },
  {
    id: '4',
    title: 'Tarot Reading',
    category: 'western-astrology', 
    slug: 'tarot-reading',
    description: 'Gain insights into your past, present, and future through the ancient art of tarot',
    image: 'https://images.pexels.com/photos/7927410/pexels-photo-7927410.jpeg',
    benefits: [
      'Clarity on current situations',
      'Future possibilities and outcomes',
      'Decision-making guidance',
      'Personal growth insights',
      'Relationship dynamics understanding'
    ],
    process: [
      'Question formulation and focus',
      'Card spread selection',
      'Intuitive card interpretation',
      'Message synthesis and guidance',
      'Action steps and recommendations'
    ],
    duration: '45 minutes',
    price: '₹1,200',
    featured: false
  },
  {
    id: '5',
    title: 'Pranic Healing',
    category: 'healing',
    slug: 'pranic-healing',
    description: 'Ancient energy healing technique to cleanse and energize the aura and chakras',
    image: 'https://images.pexels.com/photos/7322096/pexels-photo-7322096.jpeg',
    benefits: [
      'Rapid healing acceleration',
      'Stress and anxiety relief',
      'Improved mental clarity',
      'Enhanced immune system',
      'Better sleep quality'
    ],
    process: [
      'Initial assessment and scanning',
      'Energy cleansing and removal',
      'Chakra balancing and energizing',
      'Protective shielding application',
      'Self-healing instruction'
    ],
    duration: '50 minutes',
    price: '₹1,300',
    featured: false
  },
  {
    id: '6',
    title: 'Astro Vastu',
    category: 'vedic-astrology',
    slug: 'astro-vastu',
    description: 'Harmonize your living space using astrological principles and Vastu Shastra',
    image: 'https://images.pexels.com/photos/6266293/pexels-photo-6266293.jpeg',
    benefits: [
      'Enhanced prosperity and abundance',
      'Improved health and vitality',
      'Better relationships and harmony',
      'Career growth acceleration',
      'Spiritual energy enhancement'
    ],
    process: [
      'Birth chart and space analysis',
      'Vastu dosha identification',
      'Astrological remedies integration',
      'Space optimization recommendations',
      'Implementation guidance'
    ],
    duration: '120 minutes',
    price: '₹2,500',
    featured: false
  }
];

// Mock Blog Data
export const blogData: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Your Birth Chart: A Beginner\'s Guide to Vedic Astrology',
    slug: 'understanding-birth-chart-vedic-astrology',
    excerpt: 'Discover how to read and interpret your Vedic birth chart to unlock insights about your personality, life path, and spiritual journey.',
    content: `# Understanding Your Birth Chart: A Beginner's Guide to Vedic Astrology

Your birth chart, also known as a natal chart or horoscope, is a cosmic snapshot of the exact moment you were born. In Vedic astrology, this celestial map reveals profound insights about your personality, life purpose, and spiritual journey.

## What is a Birth Chart?

A birth chart is calculated based on three essential pieces of information:
- Your date of birth
- Your exact time of birth
- Your place of birth

This information allows astrologers to determine the exact positions of the planets, sun, and moon at the moment of your birth.

## The 12 Houses

Your birth chart is divided into 12 houses, each representing different areas of life:

1. **First House (Lagna)**: Self, personality, appearance
2. **Second House**: Wealth, family, speech
3. **Third House**: Communication, siblings, courage
4. **Fourth House**: Home, mother, comfort
5. **Fifth House**: Children, creativity, education
6. **Sixth House**: Health, enemies, service
7. **Seventh House**: Marriage, partnerships
8. **Eighth House**: Transformation, longevity
9. **Ninth House**: Spirituality, higher learning
10. **Tenth House**: Career, reputation
11. **Eleventh House**: Gains, friendships
12. **Twelfth House**: Liberation, foreign lands

## The Nine Planets

Vedic astrology considers nine celestial bodies:
- **Sun (Surya)**: Soul, ego, vitality
- **Moon (Chandra)**: Mind, emotions, intuition
- **Mars (Mangal)**: Energy, courage, action
- **Mercury (Budha)**: Intelligence, communication
- **Jupiter (Guru)**: Wisdom, spirituality, expansion
- **Venus (Shukra)**: Love, beauty, luxury
- **Saturn (Shani)**: Discipline, karma, challenges
- **Rahu**: Obsession, materialism, innovation
- **Ketu**: Spirituality, detachment, past life

## Reading Your Chart

When interpreting your birth chart, consider:

### Ascendant (Lagna)
Your ascendant sign represents your outer personality and how others perceive you. It's determined by the constellation rising on the eastern horizon at your birth time.

### Moon Sign
Your moon sign reveals your emotional nature and subconscious patterns. In Vedic astrology, the moon sign is often considered more important than the sun sign.

### Planetary Periods (Dasha)
The dasha system shows which planetary influences are most active during specific periods of your life. Understanding your current dasha can provide insights into present circumstances and future trends.

## Getting Started

To begin understanding your birth chart:

1. Calculate your accurate birth chart using reliable software or consult a qualified astrologer
2. Identify your ascendant and moon sign
3. Note the positions of planets in different houses
4. Learn about your current planetary period
5. Study the aspects and conjunctions between planets

Remember, astrology is a vast and complex subject that requires years of study to master. While this guide provides a foundation, consulting with an experienced Vedic astrologer can provide deeper, personalized insights into your unique cosmic blueprint.

## Conclusion

Your birth chart is a powerful tool for self-understanding and spiritual growth. By learning to interpret its symbols and patterns, you can gain valuable insights into your life's purpose, challenges, and opportunities for growth.

Take your time exploring your chart, and remember that astrology is meant to guide and empower, not limit or define you. Use these insights as a compass for your spiritual journey and personal development.`,
    image: 'https://images.pexels.com/photos/8386654/pexels-photo-8386654.jpeg',
    author: 'Saurabh Jain',
    publishedAt: '2024-01-15',
    tags: ['Vedic Astrology', 'Birth Chart', 'Beginner Guide', 'Self Discovery'],
    readTime: '8 min read',
    featured: true
  },
  {
    id: '2', 
    title: 'The Power of Mantras: How Sacred Sounds Transform Your Life',
    slug: 'power-of-mantras-sacred-sounds',
    excerpt: 'Explore the ancient science of mantras and discover how these sacred vibrations can bring healing, prosperity, and spiritual awakening.',
    content: `# The Power of Mantras: How Sacred Sounds Transform Your Life

Mantras are sacred sounds, words, or phrases that have been used for thousands of years in spiritual practices. These powerful vibrations can transform your consciousness, heal your body, and align you with cosmic energies.

## Understanding Mantras

The word "mantra" comes from Sanskrit, where "man" means mind and "tra" means tool or instrument. Literally, a mantra is a tool for the mind—a technique to focus, purify, and elevate consciousness.

## Types of Mantras

### Planetary Mantras
Each planet in Vedic astrology has specific mantras that can help balance planetary influences:
- **Sun Mantra**: "Om Hraam Hreem Hraum Sah Suryaya Namah"
- **Moon Mantra**: "Om Shram Shreem Shraum Sah Chandraya Namah"
- **Mars Mantra**: "Om Kram Kreem Kraum Sah Bhaumaya Namah"

### Beej Mantras
These are seed mantras that contain concentrated spiritual energy:
- **Om**: The universal sound
- **Hreem**: For heart chakra and divine feminine
- **Shreem**: For abundance and Lakshmi energy

### Maha Mantras
Great mantras for spiritual transformation:
- **Gayatri Mantra**: For wisdom and enlightenment
- **Mahamrityunjaya Mantra**: For healing and protection

## How Mantras Work

Mantras work on multiple levels:

1. **Sound Vibration**: The physical vibrations created by chanting affect your nervous system
2. **Focus**: Repetition trains the mind to concentrate
3. **Sacred Geometry**: Sanskrit syllables create specific energy patterns
4. **Intention**: Your devotional attitude amplifies the mantra's power

## Benefits of Mantra Practice

Regular mantra practice can bring:
- Reduced stress and anxiety
- Improved concentration and mental clarity
- Enhanced spiritual awareness
- Physical healing and vitality
- Emotional balance and peace
- Connection with divine energies

## How to Practice

### Basic Guidelines
1. Choose a quiet, clean space
2. Sit comfortably with spine erect
3. Use a mala (prayer beads) for counting
4. Chant with proper pronunciation
5. Maintain regular practice time

### Best Times for Practice
- **Brahma Muhurta**: 4:00-6:00 AM (most powerful)
- **Sunrise**: As the sun rises
- **Sunset**: During twilight
- **Before sleep**: For peaceful rest

## Choosing Your Mantra

Select mantras based on:
- Your astrological chart and planetary positions
- Current life challenges or goals
- Personal resonance and attraction
- Guidance from a qualified teacher

Remember, consistency is more important than duration. Even 10 minutes of daily practice can bring profound changes over time.

## Conclusion

Mantras are powerful tools for transformation that have been tested by thousands of years of spiritual practice. By incorporating these sacred sounds into your daily routine, you can experience greater peace, clarity, and spiritual connection.

Begin with simple mantras like "Om" and gradually expand your practice as you feel drawn to specific planetary or deity mantras. Trust the process and allow these ancient vibrations to work their magic in your life.`,
    image: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg',
    author: 'Saurabh Jain',
    publishedAt: '2024-01-10',
    tags: ['Mantras', 'Spiritual Practice', 'Meditation', 'Sacred Sounds'],
    readTime: '6 min read',
    featured: true
  },
  {
    id: '3',
    title: 'Crystal Healing: Understanding the Energy of Gemstones',
    slug: 'crystal-healing-energy-gemstones',
    excerpt: 'Learn how crystals and gemstones can balance your energy centers, promote healing, and enhance your spiritual practice.',
    content: `# Crystal Healing: Understanding the Energy of Gemstones

Crystals have been used for healing and spiritual purposes for thousands of years across cultures worldwide. These beautiful formations from the earth carry unique vibrational frequencies that can help balance our energy systems and promote overall well-being.

## How Crystal Healing Works

Crystal healing is based on the principle that everything in the universe vibrates at specific frequencies. When our energy becomes unbalanced due to stress, illness, or emotional trauma, crystals can help restore harmony by:

- Absorbing negative energy
- Amplifying positive intentions
- Balancing chakras and energy centers
- Promoting natural healing processes

## Popular Healing Crystals

### Clear Quartz
- **Properties**: Master healer, amplifies energy
- **Uses**: Meditation, clarity, spiritual growth
- **Chakra**: All chakras

### Amethyst  
- **Properties**: Calming, spiritual protection
- **Uses**: Stress relief, intuition, addiction recovery
- **Chakra**: Third eye and crown

### Rose Quartz
- **Properties**: Unconditional love, emotional healing
- **Uses**: Relationships, self-love, heart healing
- **Chakra**: Heart chakra

### Black Tourmaline
- **Properties**: Protection, grounding
- **Uses**: EMF protection, anxiety relief
- **Chakra**: Root chakra

### Citrine
- **Properties**: Abundance, joy, creativity
- **Uses**: Manifestation, confidence, depression
- **Chakra**: Solar plexus

## Choosing Your Crystals

When selecting crystals:
1. Trust your intuition - you'll be drawn to what you need
2. Consider your specific goals or challenges
3. Research the properties of different stones
4. Feel the crystal's energy in your hands
5. Start with one or two stones rather than many

## Cleansing and Charging

Crystals absorb energy and need regular cleansing:

### Cleansing Methods
- **Moonlight**: Leave under full moon overnight
- **Sunlight**: 2-4 hours (be careful with colored stones)
- **Salt water**: Rinse briefly (not for soft stones)
- **Sage smoke**: Pass through cleansing smoke
- **Sound**: Use singing bowls or bells

### Charging Crystals
- Set clear intentions while holding the crystal
- Visualize white light filling the stone
- Place on a crystal cluster or selenite
- Use sacred geometry patterns

## Working with Crystals

### Meditation
- Hold crystals during meditation
- Place them on corresponding chakras
- Create crystal grids around your meditation space

### Daily Carry
- Keep small stones in your pocket or purse
- Wear crystal jewelry
- Place crystals in your living or work space

### Healing Sessions
- Place crystals on the body during relaxation
- Create layouts based on chakra system
- Use crystal wands for energy direction

## Creating Crystal Grids

Crystal grids amplify healing intentions:
1. Set a clear intention
2. Choose a sacred geometry pattern
3. Place a master stone in the center
4. Arrange supporting stones around it
5. Activate with a crystal wand

## Safety and Considerations

- Some crystals are toxic if ingested
- Certain stones fade in sunlight
- Not all crystals are water-safe
- Always research before use
- Crystals complement but don't replace medical treatment

## Conclusion

Crystal healing is a gentle, natural way to support your physical, emotional, and spiritual well-being. While the effects may be subtle at first, many people find that regular work with crystals brings greater balance, clarity, and peace to their lives.

Start slowly, trust your intuition, and allow these earth treasures to support your healing journey. Remember that your intention and openness are the most important factors in crystal healing success.`,
    image: 'https://images.pexels.com/photos/6191374/pexels-photo-6191374.jpeg',
    author: 'Saurabh Jain',
    publishedAt: '2024-01-05',
    tags: ['Crystal Healing', 'Energy Healing', 'Gemstones', 'Chakras'],
    readTime: '7 min read',
    featured: false
  }
];

// Mock Mantra Data
export const mantraData: Mantra[] = [
  {
    id: '1',
    planet: 'Sun',
    sanskrit: 'ॐ ह्रां ह्रीं ह्रौं स: सूर्याय नम:',
    translation: 'Om Hraam Hreem Hraum Sah Suryaya Namah',
    audioUrl: '/audio/sun-mantra.mp3',
    icon: '☉',
    benefits: [
      'Enhances leadership qualities',
      'Boosts confidence and vitality',
      'Improves health and immunity',
      'Brings success in career',
      'Develops inner strength'
    ],
    chantingRules: [
      'Chant 108 times daily',
      'Best time: Sunrise (5:30-7:30 AM)',
      'Face east while chanting',
      'Use ruby gemstone for enhancement',
      'Offer water to Sun while chanting'
    ]
  },
  {
    id: '2',
    planet: 'Moon',
    sanskrit: 'ॐ श्रां श्रीं श्रौं स: चन्द्राय नम:',
    translation: 'Om Shram Shreem Shraum Sah Chandraya Namah',
    audioUrl: '/audio/moon-mantra.mp3',
    icon: '☽',
    benefits: [
      'Calms the mind and emotions',
      'Enhances intuition and creativity',
      'Improves relationships',
      'Brings mental peace',
      'Helps with sleep disorders'
    ],
    chantingRules: [
      'Chant 108 times daily',
      'Best time: Evening or night',
      'Face north while chanting',
      'Use pearl or moonstone',
      'Chant during Monday or full moon'
    ]
  },
  {
    id: '3',
    planet: 'Mars',
    sanskrit: 'ॐ क्रां क्रीं क्रौं स: भौमाय नम:',
    translation: 'Om Kram Kreem Kraum Sah Bhaumaya Namah',
    audioUrl: '/audio/mars-mantra.mp3',
    icon: '♂',
    benefits: [
      'Increases courage and determination',
      'Enhances physical strength',
      'Overcomes obstacles',
      'Improves focus and discipline',
      'Helps in property matters'
    ],
    chantingRules: [
      'Chant 108 times daily',
      'Best time: Tuesday morning',
      'Face south while chanting',
      'Use red coral gemstone',
      'Offer red flowers to Mars'
    ]
  },
  {
    id: '4',
    planet: 'Mercury',
    sanskrit: 'ॐ ब्रां ब्रीं ब्रौं स: बुधाय नम:',
    translation: 'Om Bram Breem Braum Sah Budhaya Namah',
    audioUrl: '/audio/mercury-mantra.mp3',
    icon: '☿',
    benefits: [
      'Enhances communication skills',
      'Improves memory and learning',
      'Brings success in business',
      'Develops analytical thinking',
      'Helps in education and writing'
    ],
    chantingRules: [
      'Chant 108 times daily',
      'Best time: Wednesday morning',
      'Face north while chanting',
      'Use emerald gemstone',
      'Offer green items to Mercury'
    ]
  },
  {
    id: '5',
    planet: 'Jupiter',
    sanskrit: 'ॐ ग्रां ग्रीं ग्रौं स: गुरवे नम:',
    translation: 'Om Gram Greem Graum Sah Gurave Namah',
    audioUrl: '/audio/jupiter-mantra.mp3',
    icon: '♃',
    benefits: [
      'Increases wisdom and knowledge',
      'Brings spiritual growth',
      'Enhances teaching abilities',
      'Improves financial status',
      'Blesses with good fortune'
    ],
    chantingRules: [
      'Chant 108 times daily',
      'Best time: Thursday morning',
      'Face northeast while chanting',
      'Use yellow sapphire gemstone',
      'Offer yellow flowers to Jupiter'
    ]
  },
  {
    id: '6',
    planet: 'Venus',
    sanskrit: 'ॐ द्रां द्रीं द्रौं स: शुक्राय नम:',
    translation: 'Om Dram Dreem Draum Sah Shukraya Namah',
    audioUrl: '/audio/venus-mantra.mp3',
    icon: '♀',
    benefits: [
      'Enhances love and relationships',
      'Brings beauty and charm',
      'Improves artistic abilities',
      'Increases luxury and comfort',
      'Helps in marriage matters'
    ],
    chantingRules: [
      'Chant 108 times daily',
      'Best time: Friday morning',
      'Face southeast while chanting',
      'Use diamond or white sapphire',
      'Offer white flowers to Venus'
    ]
  },
  {
    id: '7',
    planet: 'Saturn',
    sanskrit: 'ॐ प्रां प्रीं प्रौं स: शनैश्चराय नम:',
    translation: 'Om Pram Preem Praum Sah Shanaischaraya Namah',
    audioUrl: '/audio/saturn-mantra.mp3',
    icon: '♄',
    benefits: [
      'Reduces hardships and obstacles',
      'Brings discipline and focus',
      'Improves patience and endurance',
      'Helps overcome karma',
      'Provides stability and structure'
    ],
    chantingRules: [
      'Chant 108 times daily',
      'Best time: Saturday evening',
      'Face west while chanting',
      'Use blue sapphire or amethyst',
      'Offer sesame oil to Saturn'
    ]
  },
  {
    id: '8',
    planet: 'Rahu',
    sanskrit: 'ॐ भ्रां भ्रीं भ्रौं स: राहवे नम:',
    translation: 'Om Bhram Bhreem Bhraum Sah Rahave Namah',
    audioUrl: '/audio/rahu-mantra.mp3',
    icon: '☊',
    benefits: [
      'Reduces negative influences of Rahu',
      'Helps overcome addiction',
      'Brings material success',
      'Enhances psychic abilities',
      'Provides protection from enemies'
    ],
    chantingRules: [
      'Chant 108 times daily',
      'Best time: Rahu kaal period',
      'Face southwest while chanting',
      'Use hessonite garnet',
      'Offer mustard oil and black items'
    ]
  },
  {
    id: '9',
    planet: 'Ketu',
    sanskrit: 'ॐ स्रां स्रीं स्रौं स: केतवे नम:',
    translation: 'Om Sram Sreem Sraum Sah Ketave Namah',
    audioUrl: '/audio/ketu-mantra.mp3',
    icon: '☋',
    benefits: [
      'Enhances spiritual growth',
      'Brings detachment and moksha',
      'Reduces karmic debts',
      'Improves meditation abilities',
      'Provides psychic protection'
    ],
    chantingRules: [
      'Chant 108 times daily',
      'Best time: Ketu kaal period',
      'Face northwest while chanting',
      'Use cat\'s eye gemstone',
      'Offer incense and spiritual items'
    ]
  }
];

// Mock Testimonials Data
export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    text: 'Saurabh\'s Vedic astrology reading was incredibly accurate and insightful. His guidance about my career transition proved to be exactly right, and I\'m now in my dream job. The consultation was detailed and he provided practical remedies that really worked.',
    service: 'Parashari Jyotish'
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    location: 'Delhi, NCR',
    rating: 5,
    text: 'The crystal healing session was transformative. I went in feeling stressed and anxious, but left feeling completely relaxed and centered. The crystals recommended for daily use have continued to help me maintain balance in my hectic work life.',
    service: 'Crystal Healing'
  },
  {
    id: '3',
    name: 'Anita Mehta',
    location: 'Pune, Maharashtra',
    rating: 5,
    text: 'KP Astrology consultation with Saurabh helped me understand the exact timing for my business launch. His predictions about market conditions were spot-on, and my business is thriving exactly as he forecasted. Highly recommended!',
    service: 'KP Astrology'
  },
  {
    id: '4',
    name: 'Vikram Singh',
    location: 'Jaipur, Rajasthan',
    rating: 5,
    text: 'The Pranic Healing session helped me recover faster from a chronic health issue that doctors couldn\'t fully resolve. Saurabh\'s gentle approach and powerful healing energy made a real difference in my recovery process.',
    service: 'Pranic Healing'
  },
  {
    id: '5',
    name: 'Meera Gupta',
    location: 'Bangalore, Karnataka',
    rating: 5,
    text: 'Tarot reading session provided amazing clarity about my relationship concerns. The insights were profound and helped me make better decisions. Saurabh\'s intuitive abilities are remarkable and his guidance is always compassionate.',
    service: 'Tarot Reading'
  },
  {
    id: '6',
    name: 'Amit Patel',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    text: 'Astro Vastu consultation transformed our home energy completely. After implementing Saurabh\'s recommendations, our family harmony improved and business started flourishing. The changes were gradual but very noticeable.',
    service: 'Astro Vastu'
  }
];

// Helper functions
export const getServicesByCategory = (category: string) => {
  return servicesData.filter(service => service.category === category);
};

export const getFeaturedServices = () => {
  return servicesData.filter(service => service.featured);
};

export const getFeaturedBlogs = () => {
  return blogData.filter(blog => blog.featured);
};

export const getServiceBySlug = (slug: string) => {
  return servicesData.find(service => service.slug === slug);
};

export const getBlogBySlug = (slug: string) => {
  return blogData.find(blog => blog.slug === slug);
};

// Category mappings
export const serviceCategories = {
  'vedic-astrology': {
    title: 'Vedic Astrology',
    description: 'Ancient Indian astrology system based on Vedic scriptures',
    services: ['Parashari Jyotish', 'KP Astrology', 'Astro Vastu']
  },
  'western-astrology': {
    title: 'Western Astrology', 
    description: 'Modern astrology including tarot and symbolic analysis',
    services: ['Tarot Reading', 'Symbols Analysis', 'Past Life Karma']
  },
  'healing': {
    title: 'Healing Services',
    description: 'Energy healing modalities for physical and emotional wellness',
    services: ['Pranic Healing', 'Crystal Healing', 'Theta Healing']
  }
};