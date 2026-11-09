/**
 * Digital Marketing Course Data
 * Source of Truth: /public/assets/Infodesk_Computer_Education.pdf (Page 4)
 * Course: "Digital Marketing", 6 Months & Job Training, 10 Modules
 */

export const DIGITAL_MARKETING_MODULES = [
  {
    number: 1,
    name: 'Module 1 - SEO (Search Engine Optimization)',
    shortTitle: 'SEO',
    fullName: 'Search Engine Optimization',
    description: 'Master organic search architecture, technical optimization, and Google search algorithms.',
    moduleIndex: 0,
    topics: [
      'General SEO',
      'SEO tools',
      'Local SEO',
      'Concepts of search engines',
      'Keyword research',
      'Technical SEO',
      'Google Search Console',
      'On-page SEO',
      'Link building',
      'Schema markup',
      'Algorithms',
      'Keyword finalization',
      'Analytics',
    ],
  },
  {
    number: 2,
    name: 'Module 2 - SMM (Social Media Marketing)',
    shortTitle: 'SMM',
    fullName: 'Social Media Marketing',
    description: 'Build organic presence, high-converting lead generation pages, and funnel-based distribution.',
    moduleIndex: 1,
    topics: [
      'Fundamentals of social media',
      'Building a lead generation page',
      'Building your brand presence with SMM',
      'Building a funnel-based strategy',
      'Push marketing',
    ],
  },
  {
    number: 3,
    name: 'Module 3 - SEM (Search Engine Marketing)',
    shortTitle: 'SEM',
    fullName: 'Search Engine Marketing',
    description: 'Reach customers through paid search.',
    moduleIndex: 2,
    topics: [], // SEM topics duplicated from SEO in printed brochure; zero invented topics per specification
  },
  {
    number: 4,
    name: 'Module 4 - Google Ads',
    shortTitle: 'Google Ads',
    fullName: 'Google Ads & Paid Search',
    description: 'Configure conversion tracking, advanced audience targeting, and high-ROI campaigns.',
    moduleIndex: 3,
    topics: [
      'Fundamentals and right conversion setup in all scenarios',
      'Advanced keywords and audience targeting',
      'Optimization techniques',
      'Creating ads that convert',
      'Client closing',
    ],
  },
  {
    number: 5,
    name: 'Module 5 - WordPress',
    shortTitle: 'WordPress',
    fullName: 'WordPress Management',
    description: 'Deploy, configure, and manage high-performance blogs, pages, and marketing funnels.',
    moduleIndex: 4,
    topics: [
      'Add, edit and delete categories',
      'Publish posts',
      'Media library and adding media',
      'Edit media',
      'Add and publish pages',
      'Edit pages',
      'Add tags',
      'View plugins',
      'Theme management and customization',
      'Widget management',
    ],
  },
  {
    number: 6,
    name: 'Module 6 - Blogging',
    shortTitle: 'Blogging',
    fullName: 'Blogging & Organic Traffic',
    description: 'Establish domain authority and drive qualified inbound traffic with editorial frameworks.',
    moduleIndex: 5,
    topics: [
      'Driving website traffic',
      'Improving SEO',
      'Building brand authority',
      'Engaging the audience',
      'Supporting lead generation',
      'Enhancing social media content',
    ],
  },
  {
    number: 7,
    name: 'Module 7 - Content Marketing',
    shortTitle: 'Content Marketing',
    fullName: 'Content Strategy & Retention',
    description: 'Develop strategic assets that build credibility, generate leads, and retain customers.',
    moduleIndex: 6,
    topics: [
      'Improved brand awareness',
      'Increased engagement',
      'Enhanced trust and credibility',
      'Lead generation',
      'Customer retention',
      'Strategic approach',
    ],
  },
  {
    number: 8,
    name: 'Module 8 - App Marketing',
    shortTitle: 'App Marketing',
    fullName: 'Mobile & App Store Marketing',
    description: 'Drive app installs and lifecycle engagement through App Store Optimization and user retention.',
    moduleIndex: 7,
    topics: [
      'App promotion and engagement',
      'User-centric approach',
      'App store optimization (ASO)',
      'In-app marketing',
      'Social media marketing',
      'Focus on the mobile user',
      'Data-driven approach',
    ],
  },
  {
    number: 9,
    name: 'Module 9 - ORM (Online Reputation Management)',
    shortTitle: 'ORM',
    fullName: 'Online Reputation Management',
    description: 'Monitor brand sentiment, command digital narratives, and manage public reviews proactively.',
    moduleIndex: 8,
    topics: [
      'Monitoring',
      'Positive online presence',
      'Control over narrative',
      'Responding to reviews',
      'Managing social media comments',
    ],
  },
  {
    number: 10,
    name: 'Module 10 - Marketing',
    shortTitle: 'Marketing',
    fullName: 'Multi-Channel Marketing & Freelancing',
    description: 'Master omnichannel execution across WhatsApp, email, video, e-commerce, and client acquisition.',
    moduleIndex: 9,
    topics: [
      'WhatsApp marketing',
      'Video marketing',
      'Email marketing',
      'Affiliate marketing',
      'E-commerce marketing',
      'Google My Business',
      'Conversion rate optimisation (CRO)',
      'Display advertising',
      'Freelancing techniques',
      'Media planning and buying',
    ],
  },
];

// Verified total topic count strictly summing brochure topics (SEM = 0): exactly 67
export const TOTAL_DIGITAL_MARKETING_TOPICS = DIGITAL_MARKETING_MODULES.reduce(
  (acc, m) => acc + (m.topics ? m.topics.length : 0),
  0
);

// 15 Channel loop names for CurvedLoop
export const MARKETING_CHANNELS = [
  'SEO',
  'Social media',
  'Google Ads',
  'WordPress',
  'Blogging',
  'Content marketing',
  'App marketing',
  'Online reputation',
  'WhatsApp',
  'Email',
  'Video',
  'Affiliate',
  'E-commerce',
  'Google My Business',
  'Display ads',
];

// Customer Journey stages mapping to syllabus modules
export const CUSTOMER_JOURNEY_STAGES = [
  {
    id: 'awareness',
    label: 'Awareness',
    headline: 'Capture audience attention at the top of the funnel',
    summary: 'Attract high-intent searchers and build broad awareness across search engines, blogs, and display networks.',
    cards: [
      { topic: 'SEO', moduleIndex: 0, moduleName: 'Module 1 - SEO' },
      { topic: 'Blogging', moduleIndex: 5, moduleName: 'Module 6 - Blogging' },
      { topic: 'Content marketing', moduleIndex: 6, moduleName: 'Module 7 - Content Marketing' },
      { topic: 'Display advertising', moduleIndex: 9, moduleName: 'Module 10 - Marketing' },
      { topic: 'Media planning and buying', moduleIndex: 9, moduleName: 'Module 10 - Marketing' },
    ],
  },
  {
    id: 'engagement',
    label: 'Engagement',
    headline: 'Nurture interest through compelling media and community',
    summary: 'Engage prospects with interactive social content, rich video storytelling, and mobile app touchpoints.',
    cards: [
      { topic: 'Social media marketing', moduleIndex: 1, moduleName: 'Module 2 - SMM' },
      { topic: 'Video marketing', moduleIndex: 9, moduleName: 'Module 10 - Marketing' },
      { topic: 'App marketing', moduleIndex: 7, moduleName: 'Module 8 - App Marketing' },
      { topic: 'Managing social media comments', moduleIndex: 8, moduleName: 'Module 9 - ORM' },
    ],
  },
  {
    id: 'conversion',
    label: 'Conversion',
    headline: 'Turn qualified traffic into paying customers and revenue',
    summary: 'Drive high-conversion performance campaigns with targeted paid search, optimized landing pages, and CRO.',
    cards: [
      { topic: 'Google Ads', moduleIndex: 3, moduleName: 'Module 4 - Google Ads' },
      { topic: 'Conversion rate optimisation (CRO)', moduleIndex: 9, moduleName: 'Module 10 - Marketing' },
      { topic: 'E-commerce marketing', moduleIndex: 9, moduleName: 'Module 10 - Marketing' },
      { topic: 'Affiliate marketing', moduleIndex: 9, moduleName: 'Module 10 - Marketing' },
      { topic: 'Building a lead generation page', moduleIndex: 1, moduleName: 'Module 2 - SMM' },
    ],
  },
  {
    id: 'loyalty',
    label: 'Loyalty',
    headline: 'Retain happy customers and build brand advocacy',
    summary: 'Keep clients engaged and drive repeat business with direct messaging, active review management, and retention.',
    cards: [
      { topic: 'Email marketing', moduleIndex: 9, moduleName: 'Module 10 - Marketing' },
      { topic: 'WhatsApp marketing', moduleIndex: 9, moduleName: 'Module 10 - Marketing' },
      { topic: 'Responding to reviews', moduleIndex: 8, moduleName: 'Module 9 - ORM' },
      { topic: 'Customer retention', moduleIndex: 6, moduleName: 'Module 7 - Content Marketing' },
    ],
  },
];

// Channels You Will Master (GlassIcons)
export const CHANNELS_MASTERED = [
  {
    id: 'search',
    label: 'Search (SEO)',
    moduleIndex: 0,
    moduleName: 'Module 1 - SEO',
    iconType: 'search',
    color: '#2448c9', // Royal blue
  },
  {
    id: 'social',
    label: 'Social (SMM)',
    moduleIndex: 1,
    moduleName: 'Module 2 - SMM',
    iconType: 'share',
    color: '#4a6df0', // Bright blue
  },
  {
    id: 'ads',
    label: 'Ads (Google Ads)',
    moduleIndex: 3,
    moduleName: 'Module 4 - Google Ads',
    iconType: 'megaphone',
    color: '#13266f', // Deep blue
  },
  {
    id: 'content',
    label: 'Content (Blogging)',
    moduleIndex: 5,
    moduleName: 'Module 6 - Blogging',
    iconType: 'document',
    color: '#2448c9', // Royal blue
  },
  {
    id: 'messaging',
    label: 'WhatsApp and email',
    moduleIndex: 9,
    moduleName: 'Module 10 - Marketing',
    iconType: 'mail',
    color: '#4a6df0', // Bright blue
  },
  {
    id: 'reputation',
    label: 'Reputation (ORM)',
    moduleIndex: 8,
    moduleName: 'Module 9 - ORM',
    iconType: 'shield',
    color: '#0b1a52', // Darker blue
  },
];

// Practical Skills You Will Practise (AnimatedList)
export const PRACTICAL_SKILLS = [
  {
    id: 'skill-1',
    title: 'Build a lead generation page',
    moduleTag: 'Module 2',
    moduleIndex: 1,
  },
  {
    id: 'skill-2',
    title: 'Build a funnel-based strategy',
    moduleTag: 'Module 2',
    moduleIndex: 1,
  },
  {
    id: 'skill-3',
    title: 'Create ads that convert',
    moduleTag: 'Module 4',
    moduleIndex: 3,
  },
  {
    id: 'skill-4',
    title: 'Set up conversions correctly',
    moduleTag: 'Module 4',
    moduleIndex: 3,
  },
  {
    id: 'skill-5',
    title: 'Publish posts and pages in WordPress',
    moduleTag: 'Module 5',
    moduleIndex: 4,
  },
  {
    id: 'skill-6',
    title: 'Drive traffic with blogging',
    moduleTag: 'Module 6',
    moduleIndex: 5,
  },
  {
    id: 'skill-7',
    title: 'Run WhatsApp and email campaigns',
    moduleTag: 'Module 10',
    moduleIndex: 9,
  },
  {
    id: 'skill-8',
    title: 'Respond to reviews and manage comments',
    moduleTag: 'Module 9',
    moduleIndex: 8,
  },
];
