/**
 * Digital Marketing Course Data
 * Source of Truth: /public/assets/Infodesk_Computer_Education.pdf (Page 4)
 * Course: "Digital Marketing", 6 Months & Job Training, 10 Modules
 */

export const DIGITAL_MARKETING_MODULES = [
  {
    number: 1,
    name: 'SEO (search engine optimization)',
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
    name: 'SMM (social media marketing)',
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
    name: 'SEM (search engine marketing)',
    description: 'Reach customers through paid search.',
    moduleIndex: 2,
    topics: [], // SEM topics duplicated from SEO in printed brochure; zero invented topics per specification
  },
  {
    number: 4,
    name: 'Google Ads',
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
    name: 'WordPress',
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
    name: 'Blogging',
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
    name: 'Content marketing',
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
    name: 'App marketing',
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
    name: 'ORM (online reputation management)',
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
    name: 'Marketing',
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

// 15 Channel loop names for CurvedLoop (in sentence case)
export const MARKETING_CHANNELS = [
  'SEO',
  'Social media marketing',
  'Google Ads',
  'WordPress',
  'Content marketing',
  'Blogging',
  'App marketing',
  'Online reputation management',
  'Email nurture',
  'WhatsApp campaigns',
  'Lead generation',
  'Keyword research',
  'Funnel strategy',
  'Local SEO',
  'Client closing',
];

// Compact Customer Journey stages mapping to syllabus modules
export const CUSTOMER_JOURNEY_STAGES = [
  {
    id: 'awareness',
    label: 'Awareness',
    sentence: 'Get found by people who are searching and browsing.',
    chips: [
      { topic: 'SEO', moduleIndex: 0 },
      { topic: 'Blogging', moduleIndex: 5 },
      { topic: 'Content marketing', moduleIndex: 6 },
      { topic: 'Display advertising', moduleIndex: 9 },
      { topic: 'Media planning and buying', moduleIndex: 9 },
    ],
  },
  {
    id: 'engagement',
    label: 'Engagement',
    sentence: 'Build brand presence and engage prospects across social and app channels.',
    chips: [
      { topic: 'Social media marketing', moduleIndex: 1 },
      { topic: 'Video marketing', moduleIndex: 9 },
      { topic: 'App marketing', moduleIndex: 7 },
      { topic: 'Managing social media comments', moduleIndex: 8 },
    ],
  },
  {
    id: 'conversion',
    label: 'Conversion',
    sentence: 'Turn qualified interest into inquiries, leads and sales.',
    chips: [
      { topic: 'Google Ads', moduleIndex: 3 },
      { topic: 'Conversion rate optimisation (CRO)', moduleIndex: 9 },
      { topic: 'E-commerce marketing', moduleIndex: 9 },
      { topic: 'Affiliate marketing', moduleIndex: 9 },
      { topic: 'Building a lead generation page', moduleIndex: 1 },
    ],
  },
  {
    id: 'loyalty',
    label: 'Loyalty',
    sentence: 'Retain customers, handle reviews, and maintain direct client communication.',
    chips: [
      { topic: 'Email marketing', moduleIndex: 9 },
      { topic: 'WhatsApp marketing', moduleIndex: 9 },
      { topic: 'Responding to reviews', moduleIndex: 8 },
      { topic: 'Customer retention', moduleIndex: 6 },
    ],
  },
];
