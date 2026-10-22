export interface Project {
  id: string;
  title: string;
  titleAr?: string;
  subtitle: string;
  subtitleAr?: string;
  description: string;
  descriptionAr?: string;
  fullDescription: string;
  fullDescriptionAr?: string;
  role: string;
  roleAr?: string;
  year: string;
  deliverables: string[];
  deliverablesAr?: string[];
  metrics?: string;
  metricsAr?: string;
  badge?: string;
  badgeAr?: string;
  themeColor: string;
  type: 'effy' | 'trade' | 'kmc' | 'lumina' | 'corekraft' | 'signmate';
}

export const PORTFOLIO_DATA = {
  name: 'Rafeeq KMC',
  nameAr: 'رفيق كي إم سي',
  title: 'Creative Director & Brand Designer',
  titleAr: 'مدير إبداعي ومصمم علامات تجارية',
  company: 'Kite Media Concept (KMC)',
  companyAr: 'كايت ميديا كونسبت (KMC)',
  email: 'kitemediaconcept@gmail.com',
  handle: '@rafeeqkmc',
  location: 'Global / Dubai & India',
  locationAr: 'دبي والهند / عالمياً',
  ui: {
    EN: {
      info: 'Info',
      work: 'Work',
      contact: 'Contact',
      sendInquiry: 'Send inquiry →',
      startConversation: 'Start a Conversation',
      directEmail: 'Direct Email',
      copy: 'Copy',
      copied: 'Copied',
      yourName: 'Your Name',
      namePlaceholder: 'Jane Doe',
      emailAddress: 'Email Address *',
      emailPlaceholder: 'jane@company.com',
      projectDetails: 'Project Details *',
      messagePlaceholder: 'Tell us about your brand goals, scope, and timeline...',
      sendMessage: 'Send Message to Rafeeq',
      messageReceived: 'Message Received',
      thankYou: 'Thank you! Rafeeq KMC and the Kite Media Concept team will respond within 24 hours.',
      caseStudy: 'Case Study',
      overviewAndImpact: 'Overview & Impact',
      scopeAndDeliverables: 'Scope & Deliverables',
      keyMetric: 'Key Metric',
      nextProject: 'Next Project',
      inquireWork: 'Inquire About Similar Work',
      photoFilterColor: 'COLOR',
      photoFilterBW: 'B&W',
      clockTitle: 'Current Local Time',
      companyTag: 'KITE MEDIA CONCEPT',
      close: 'Close',
    },
    AR: {
      info: 'عني',
      work: 'الأعمال',
      contact: 'تواصل',
      sendInquiry: 'أرسل استفساراً ←',
      startConversation: 'ابدأ محادثة عمل',
      directEmail: 'البريد الإلكتروني المباشر',
      copy: 'نسخ',
      copied: 'تم النسخ',
      yourName: 'الاسم الكريم',
      namePlaceholder: 'أحمد محمد',
      emailAddress: 'البريد الإلكتروني *',
      emailPlaceholder: 'name@company.com',
      projectDetails: 'تفاصيل المشروع *',
      messagePlaceholder: 'أخبرنا عن أهداف هويتك التجارية، النطاق الزمني والميزانية...',
      sendMessage: 'إرسال الرسالة إلى رفيق',
      messageReceived: 'تم استلام رسالتك بنجاح',
      thankYou: 'شكراً لك! سيتواصل معك رفيق وفريق كايت ميديا كونسبت خلال 24 ساعة.',
      caseStudy: 'دراسة حالة',
      overviewAndImpact: 'نظرة عامة والأثر الإبداعي',
      scopeAndDeliverables: 'نطاق العمل والمخرجات',
      keyMetric: 'المؤشر الإستراتيجي',
      nextProject: 'المشروع التالي',
      inquireWork: 'طلب استشارة لمشروع مماثل',
      photoFilterColor: 'ألوان',
      photoFilterBW: 'أبيض وأسود',
      clockTitle: 'التوقيت المحلي الحالي',
      companyTag: 'كايت ميديا كونسبت',
      close: 'إغلاق',
    },
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
    AR: {
      label: 'AR',
      name: 'العربية',
      summary:
        'مدير إبداعي واستراتيجي إعلامي ومصمم علامات تجارية في كايت ميديا كونسبت (KMC)، أصنع هويات استراتيجية وتجارب رقمية ملهمة للشركات عبر مختلف القطاعات. على مدار أكثر من 10 سنوات، ساعدت العلامات التجارية في تطوير هوياتها البصرية واكتشاف جوهرها الأصيل والتوسع بتميز إبداعي.',
      extended:
        'متخصص في هندسة الهويات التجارية، والأنظمة البصرية التعبيرية، والتوجيه الإبداعي الرقمي بالتعاون مع رواد الأعمال والمؤسسات الرائدة عالمياً.',
    },
  },
  brands: [
    {
      id: 'kite',
      name: 'Kite Media Concept',
      nameAr: 'كايت ميديا كونسبت',
      image: '/assets/aistudio/kitemedialogoo_c93bfb06.png',
      fallbackImage: '/public/assets/aistudio/kitemedialogoo_c93bfb06.png',
      role: 'Creative Direction & Omnichannel Media',
      roleAr: 'الإخراج الإبداعي والإنتاج الإعلامي الشامل',
      category: 'Agency & Media',
    },
    {
      id: 'corekraft',
      name: 'Corekraft',
      nameAr: 'كور كرافت',
      image: '/assets/aistudio/logo_ee6cb459.png',
      fallbackImage: '/public/assets/aistudio/logo_ee6cb459.png',
      role: 'Brand Identity & Digital Architecture',
      roleAr: 'الهوية البصرية والبنية الرقمية',
      category: 'Enterprise Tech',
    },
    {
      id: 'signmate',
      name: 'Sign Mate',
      nameAr: 'ساين ميت',
      image: '/assets/aistudio/322-removebg-preview_4c180e48.png',
      fallbackImage: '/public/assets/aistudio/322-removebg-preview_4c180e48.png',
      role: 'Environmental Branding & Signage Systems',
      roleAr: 'الهوية المكانية وأنظمة اللافتات المعمارية',
      category: 'Fabrication & Identity',
    },
  ],
  projects: [
    {
      id: 'kmc-studio',
      title: 'Kite Media Concept',
      titleAr: 'كايت ميديا كونسبت',
      subtitle: 'Creative Production & Brand Studio',
      subtitleAr: 'استوديو الإنتاج والهوية الإبداعية',
      description:
        'The signature design lab and production agency of KMC, orchestrating creative media campaigns and brand transformations for forward-thinking organizations.',
      descriptionAr:
        'استوديو التصميم والإنتاج الإبداعي الرائد في KMC، يقود الحملات الإعلامية المبتكرة والتحولات البصرية الشاملة للمؤسسات والشركات الطموحة.',
      fullDescription:
        'Kite Media Concept (KMC) combines strategic communications with cutting-edge visual design, video production, and high-impact digital experiences that captivate modern audiences.',
      fullDescriptionAr:
        'تجمع كايت ميديا كونسبت (KMC) بين التخطيط الإعلامي الاستراتيجي وأحدث تقنيات التصميم المرئي والإنتاج الفني لصناعة تجارب رقمية تأسر الجمهور الحديث وتحقق انتشاراً واسعاً.',
      role: 'Founder & Principal Creative Director',
      roleAr: 'المؤسس والمدير الإبداعي التنفيذي',
      year: '2023 - Present',
      deliverables: [
        'Studio Identity & Monogram',
        'Omnichannel Brand Strategy',
        'Motion & Editorial Systems',
        'Creative Advisory Framework',
      ],
      deliverablesAr: [
        'شعار وهوية الاستوديو المتكاملة',
        'استراتيجية العلامة متعددة المنصات',
        'أنظمة التحريك والتصميم التحريري',
        'إطار الاستشارات الإبداعية',
      ],
      metrics: '120+ International Clients Served',
      metricsAr: 'أكثر من 120 عميلاً دولياً تم خدمتهم',
      badge: 'Flagship Agency',
      badgeAr: 'الوكالة الرئيسية',
      themeColor: '#059669',
      type: 'kmc',
    },
    {
      id: 'corekraft',
      title: 'Corekraft',
      titleAr: 'كور كرافت',
      subtitle: 'Digital Engineering & Industrial Architecture',
      subtitleAr: 'الهندسة الرقمية والبنية الصناعية',
      description:
        'Corekraft develops high-performance enterprise platforms and operational frameworks for modern industrial teams and developers.',
      descriptionAr:
        'تطوير منصات برمجية وهندسة رقمية متقدمة للمؤسسات والفرق الصناعية مع هوية بصرية متميزة تعكس الدقة والابتكار.',
      fullDescription:
        'Designed a bold, geometric visual identity for Corekraft featuring a custom modern wordmark with radiant pink and coral accent flags, modular UI guidelines, and digital brand collateral.',
      fullDescriptionAr:
        'صممنا هوية بصرية هندسية جريئة لشركة كور كرافت تتضمن شعاراً كتابياً حديثاً مع لمسات لونية مرجانية ووردية مميزة، مع دلائل تصميم واجهات وتطبيقات رقمية متكاملة.',
      role: 'Brand Identity & Visual System',
      roleAr: 'تصميم الهوية والنظام البصري الرقمي',
      year: '2025',
      deliverables: [
        'Wordmark & Monogram Design',
        'Corporate Identity System',
        'Interactive Style Guidelines',
        'Product Design Tokens',
      ],
      deliverablesAr: [
        'تصميم الشعار اللفظي والرمز البصري',
        'نظام الهوية المؤسسية الكامل',
        'دلائل الأسلوب التفاعلية',
        'رموز تصميم واجهات المنتجات',
      ],
      metrics: 'Comprehensive Design System Built',
      metricsAr: 'بناء نظام تصميم متكامل للشركات',
      badge: 'Client Highlight',
      badgeAr: 'مشروع مميز',
      themeColor: '#f43f5e',
      type: 'corekraft',
    },
    {
      id: 'signmate',
      title: 'Sign Mate',
      titleAr: 'ساين ميت',
      subtitle: 'Architectural Signage & Environmental Systems',
      subtitleAr: 'اللافتات المعمارية والأنظمة المكانية',
      description:
        'Sign Mate designs and fabricates large-scale signage, architectural brand wayfinding, and spatial identity systems for global spaces.',
      descriptionAr:
        'تصميم وتصنيع اللوحات الإرشادية والهويات المكانية وأنظمة التوجيه المعمارية الكبرى للمنشآت والمشاريع الدولية.',
      fullDescription:
        'Crafted an energetic, structural brand identity featuring distinctive stacked sans-serif typography accented with vibrant emerald markers, comprehensive wayfinding guidelines, and industrial packaging.',
      fullDescriptionAr:
        'ابتكار هوية بصرية هيكلية مميزة تجمع بين الطباعة الحديثة المكدسة مع تفاصيل زمردية نابضة بالحياة، وإرشادات توجيه معمارية لمشاريع ومصانع عالمية.',
      role: 'Creative Direction & Spatial Branding',
      roleAr: 'الإخراج الإبداعي والهوية المكانية',
      year: '2024',
      deliverables: [
        'Brand Identity & Logo Suite',
        'Architectural Signage Standards',
        'Environmental Wayfinding Kit',
        'Fleet & Workwear Collateral',
      ],
      deliverablesAr: [
        'مجموعة الشعارات والهوية البصرية',
        'معايير اللوحات واللافتات المعمارية',
        'أدلة التوجيه المكاني البيئي',
        'تصاميم أسطول النقل وملابس العمل',
      ],
      metrics: 'Over 200+ Commercial Installations',
      metricsAr: 'أكثر من 200 تثبيت تجاري ومعماري',
      badge: 'Spatial Identity',
      badgeAr: 'هوية معمارية',
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
