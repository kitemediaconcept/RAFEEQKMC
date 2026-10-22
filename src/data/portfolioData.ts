export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  role: string;
  year: string;
  deliverables: string[];
  metrics?: string;
  badge?: string;
  themeColor: string;
  type: 'effy' | 'trade' | 'kmc' | 'lumina' | 'corekraft' | 'signmate';
}

export const PORTFOLIO_DATA = {
  name: 'Rafeeq KMC',
  title: 'Creative Director & Brand Designer',
  company: 'Kite Media Concept (KMC)',
  email: 'kitemediaconcept@gmail.com',
  handle: '@rafeeqkmc',
  location: 'Global / Dubai & India',
  stats: {
    experience: '10+ Years',
    brandsTransformed: '120+',
    awards: '14 Recognitions',
  },
  bios: {
    EN: {
      label: 'EN',
      name: 'English',
      summary:
        'A visionary Creative Director, Media Strategist & Brand Designer at Kite Media Concept (KMC), crafting strategic brands for clients across industries. Over the past 10 years I have helped brands big and small develop their visual identities and discover their brand character.',
      extended:
        'Specializing in brand architecture, expressive visual systems, and digital-first creative direction. Collaborating with founders, enterprises, and cultural leaders to build memorable identities that scale globally.',
    },
    CY: {
      label: 'CY',
      name: 'Cymraeg',
      summary:
        'Cyfarwyddwr creadigol a dylunydd brand yn Kite Media Concept (KMC), yn creu brandiau strategol ar gyfer cleientiaid ar draws diwydiannau. Dros y 10 mlynedd diwethaf rwyf wedi helpu brandiau mawr a bach i ddatblygu eu hunaniaeth weledol a darganfod cymeriad eu brand.',
      extended:
        'Yn arbenigo mewn pensaernïaeth brand, systemau gweledol mynegiannol, a chyfeiriad creadigol digidol ar gyfer brandiau rhyngwladol.',
    },
  },
  brands: [
    {
      id: 'kite',
      name: 'Kite Media Concept',
      image: '/assets/aistudio/kitemedialogoo_c93bfb06.png',
      fallbackImage: '/public/assets/aistudio/kitemedialogoo_c93bfb06.png',
      role: 'Creative Direction & Omnichannel Media',
      category: 'Agency & Media',
    },
    {
      id: 'corekraft',
      name: 'Corekraft',
      image: '/assets/aistudio/logo_ee6cb459.png',
      fallbackImage: '/public/assets/aistudio/logo_ee6cb459.png',
      role: 'Brand Identity & Digital Architecture',
      category: 'Enterprise Tech',
    },
    {
      id: 'signmate',
      name: 'Sign Mate',
      image: '/assets/aistudio/322-removebg-preview_4c180e48.png',
      fallbackImage: '/public/assets/aistudio/322-removebg-preview_4c180e48.png',
      role: 'Environmental Branding & Signage Systems',
      category: 'Fabrication & Identity',
    },
  ],
  projects: [
    {
      id: 'kmc-studio',
      title: 'Kite Media Concept',
      subtitle: 'Creative Production & Brand Studio',
      description:
        'The signature design lab and production agency of KMC, orchestrating creative media campaigns and brand transformations for forward-thinking organizations.',
      fullDescription:
        'Kite Media Concept (KMC) combines strategic communications with cutting-edge visual design, video production, and high-impact digital experiences that captivate modern audiences.',
      role: 'Founder & Principal Creative Director',
      year: '2023 - Present',
      deliverables: [
        'Studio Identity & Monogram',
        'Omnichannel Brand Strategy',
        'Motion & Editorial Systems',
        'Creative Advisory Framework',
      ],
      metrics: '120+ International Clients Served',
      badge: 'Flagship Agency',
      themeColor: '#059669',
      type: 'kmc',
    },
    {
      id: 'corekraft',
      title: 'Corekraft',
      subtitle: 'Digital Engineering & Industrial Architecture',
      description:
        'Corekraft develops high-performance enterprise platforms and operational frameworks for modern industrial teams and developers.',
      fullDescription:
        'Designed a bold, geometric visual identity for Corekraft featuring a custom modern wordmark with radiant pink and coral accent flags, modular UI guidelines, and digital brand collateral.',
      role: 'Brand Identity & Visual System',
      year: '2025',
      deliverables: [
        'Wordmark & Monogram Design',
        'Corporate Identity System',
        'Interactive Style Guidelines',
        'Product Design Tokens',
      ],
      metrics: 'Comprehensive Design System Built',
      badge: 'Client Highlight',
      themeColor: '#f43f5e',
      type: 'corekraft',
    },
    {
      id: 'signmate',
      title: 'Sign Mate',
      subtitle: 'Architectural Signage & Environmental Systems',
      description:
        'Sign Mate designs and fabricates large-scale signage, architectural brand wayfinding, and spatial identity systems for global spaces.',
      fullDescription:
        'Crafted an energetic, structural brand identity featuring distinctive stacked sans-serif typography accented with vibrant emerald markers, comprehensive wayfinding guidelines, and industrial packaging.',
      role: 'Creative Direction & Spatial Branding',
      year: '2024',
      deliverables: [
        'Brand Identity & Logo Suite',
        'Architectural Signage Standards',
        'Environmental Wayfinding Kit',
        'Fleet & Workwear Collateral',
      ],
      metrics: 'Over 200+ Commercial Installations',
      badge: 'Spatial Identity',
      themeColor: '#10b981',
      type: 'signmate',
    },
  ] as Project[],
  socials: [
    { label: 'Email', value: 'kitemediaconcept@gmail.com', href: 'mailto:kitemediaconcept@gmail.com' },
    { label: 'Instagram', value: '@rafeeqkmc', href: 'https://instagram.com/rafeeqkmc' },
    { label: 'LinkedIn', value: 'Rafeeq KMC', href: 'https://linkedin.com' },
    { label: 'WhatsApp', value: '+91 (Direct)', href: 'https://wa.me/' },
  ],
};
