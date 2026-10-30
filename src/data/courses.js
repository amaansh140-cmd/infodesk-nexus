// Official course dataset extracted from Infodesk Computer Education brochure
// Typo corrections applied, duplicates removed, formatted in sentence case.

export const courseCategories = [
  'All',
  'Data and AI',
  'Digital marketing',
  'Web and software',
  'Design and video',
  'Office and accounts',
  'Cyber security',
];

export const courses = [
  // ─── 1. DATA AND AI ───
  {
    slug: 'data-science',
    title: 'Data Science',
    category: 'Data and AI',
    duration: '12 months',
    level: 'Career program',
    summary: 'Master Python, machine learning, generative AI, Alteryx, Power BI, and enterprise data governance.',
    tools: ['Python', 'Power BI', 'SQL Server'],
    modules: [
      {
        name: 'Python',
        topics: [
          'Introduction to Python',
          'Python data types',
          'Variables and operators',
          'Control structures (if-else, loops)',
          'Functions and modules',
          'Exception handling',
          'File handling',
          'List comprehensions',
          'Lambda functions',
          'Decorators',
        ],
      },
      {
        name: 'NumPy',
        topics: [
          'Introduction to NumPy',
          'Arrays and matrices',
          'Array indexing and slicing',
          'Array manipulation',
          'Array broadcasting',
          'Mathematical operations on arrays',
          'Statistical functions',
          'Linear algebra operations',
          'Random number generation',
          'Sorting and searching arrays',
        ],
      },
      {
        name: 'Pandas',
        topics: [
          'Integration with Pandas',
          'Series and dataframes',
          'Dataframe operations',
          'Indexing and selecting data',
          'Handling missing data',
          'Data cleaning and preparation',
          'Merging and joining dataframes',
          'Grouping and aggregation',
          'Pivot tables',
          'Time series analysis',
        ],
      },
      {
        name: 'Seaborn & Matplotlib',
        topics: [
          'Introduction to Seaborn & Matplotlib',
          'Basic and customized plotting',
          'Categorical and distribution plots',
          'Matrix plots and regression plots',
          'Multi-plot grids and subplots',
          'Working with figures, axes, and legends',
          'Plot aesthetics and export options',
        ],
      },
      {
        name: 'Scikit-Learn',
        topics: [
          'Introduction to Scikit-Learn',
          'Data preprocessing and feature engineering',
          'Supervised and unsupervised learning',
          'Model evaluation and selection metrics',
          'Cross-validation techniques',
          'Dimensionality reduction',
          'Hyperparameter tuning and ensemble methods',
        ],
      },
      {
        name: 'Generative AI',
        topics: [
          'Introduction to generative AI',
          'Basic concepts and industrial applications',
          'Generative adversarial networks (GANs)',
          'Variational autoencoders (VAEs)',
          'Recurrent neural networks (RNNs) for generation',
          'Text generation and prompt engineering',
          'Image and style transfer models',
          'Audio and multimedia synthesis',
        ],
      },
      {
        name: 'Streamlit',
        topics: [
          'Introduction to Streamlit framework',
          'Environment setup and app structure',
          'Creating interactive user widgets',
          'Integrating Pandas, Plotly, and Seaborn',
          'Building real-time AI dashboards',
          'File uploads, downloads, and cloud deployment',
        ],
      },
      {
        name: 'Alteryx',
        topics: [
          'The Alteryx analytics platform',
          'Designer licensing and workspace navigation',
          'Data acquisition, inspection, and cleansing',
          'Preparing, transforming, and outputting data',
          'Workflow annotation and null handling',
          'Multi-row and multi-field formulas',
        ],
      },
      {
        name: 'Power BI',
        topics: [
          'Introduction to Power BI desktop',
          'Connecting to diverse enterprise data sources',
          'Power Query data transformation',
          'Data modeling and relationship management',
          'DAX (Data Analysis Expressions) measures',
          'Interactive dashboards, reports, and service publishing',
        ],
      },
      {
        name: 'SQL Server',
        topics: [
          'Introduction to SQL Server installation and tools',
          'DDL, DML, and DQL command mastery',
          'Database design and normalization rules',
          'Indexing, joins, and performance optimization',
          'Stored procedures, triggers, and transactions',
        ],
      },
      {
        name: 'Advanced Excel',
        topics: [
          'Advanced formulas and conditional formatting',
          'Pivot tables, pivot charts, and slicers',
          'Interactive dashboard design',
          'What-if analysis and Solver toolpak',
          'Power Query and Power Pivot models',
        ],
      },
      {
        name: 'Data Governance Track (Informatica)',
        topics: [
          'Informatica administrator platform architecture',
          'User security, LDAP integration, and provisioning',
          'Data classification concepts and CLAIRE engine',
          'Column and table level classification rules',
          'Data integration, ETL pipelines, and lineage',
          'Business glossary setup and enterprise data policies',
        ],
      },
    ],
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics',
    category: 'Data and AI',
    duration: '6 months',
    level: 'Diploma',
    summary: 'Analyze business data using Excel, SQL, Python, Pandas, Power BI, Tableau, and Alteryx.',
    tools: ['Excel', 'SQL', 'Tableau'],
    modules: [
      {
        name: 'Excel',
        topics: [
          'Introduction to Excel and data import',
          'Data formatting, validation, and formulas',
          'Lookup and reference functions (VLOOKUP, XLOOKUP)',
          'Pivot tables, charts, and summary reports',
          'What-if analysis and introductory macros',
        ],
      },
      {
        name: 'SQL',
        topics: [
          'Relational database fundamentals',
          'Data definition (DDL) and manipulation (DML)',
          'Aggregate, date, and string functions',
          'Inner, outer, and self joins',
          'Sub-queries, views, and index optimization',
        ],
      },
      {
        name: 'Python for Analytics',
        topics: [
          'Python syntax, variables, and control flow',
          'Lists, tuples, dictionaries, and sets',
          'User-defined functions and list comprehensions',
          'NumPy arrays, slicing, and mathematical operations',
        ],
      },
      {
        name: 'Pandas',
        topics: [
          'Pandas series and dataframes',
          'Reading from CSV, Excel, and SQL files',
          'Handling duplicates and missing value imputation',
          'Grouping, aggregation, and cross-tabulations',
          'Visualizing insights with Matplotlib',
        ],
      },
      {
        name: 'Power BI',
        topics: [
          'Business intelligence workflow overview',
          'Power BI desktop interface and connectivity',
          'Data shaping with Power Query editor',
          'Data modeling and relationship directions',
          'Building custom report visuals and dashboards',
          'Publishing to Power BI service and sharing',
        ],
      },
      {
        name: 'Tableau',
        topics: [
          'Data visualization principles and domain use cases',
          'Tableau interface, layout, and architecture',
          'Dimensions, measures, and calculated fields',
          'Custom filters, parameters, and interactive dashboards',
          'Publishing and sharing Tableau workbooks',
        ],
      },
      {
        name: 'Alteryx',
        topics: [
          'Alteryx Designer environment and tools',
          'Data input, cleansing, and type assignment',
          'Multi-field formulas and demographic blends',
          'Find and replace, filter conditions, and control parameters',
        ],
      },
    ],
  },
  {
    slug: 'advance-excel',
    title: 'Advance Excel',
    category: 'Data and AI',
    duration: '2 months',
    level: 'Short course',
    summary: 'Master complex formulas, nested functions, pivot reporting, dynamic dashboards, and macros.',
    tools: ['Excel', 'VBA Macros', 'Power Query'],
    modules: [
      {
        name: 'Core & Formulas',
        topics: [
          'Spreadsheet architecture and data management',
          'Math, statistics, and text formula mastery',
          'Nested logical functions (IF, AND, OR, NOT)',
          'Lookup functions (LOOKUP, VLOOKUP, HLOOKUP, XLOOKUP)',
          'Formula auditing and error handling',
        ],
      },
      {
        name: 'Data Analysis & Functions',
        topics: [
          'Subtotals, automated filters, and sheet referencing',
          'COUNTIF, SUMIF, AVERAGEIF series',
          'Database functions (DMAX, DCOUNTA, DAVERAGE, DMIN)',
          'What-if analysis, Goal Seek, and data validation rules',
        ],
      },
      {
        name: 'Pivot Tables & Dynamic Reporting',
        topics: [
          'Creating and configuring multi-source pivot tables',
          'Adding slicers, timelines, and calculated fields',
          'Pivot charts, sparklines, and visual summaries',
          'Grouping, sorting, and top-tier rankings',
        ],
      },
      {
        name: 'Macros & Automation',
        topics: [
          'Recording, editing, and running automated macros',
          'Introduction to VBA programming syntax',
          'Assigning macros to buttons and worksheet events',
          'Protecting worksheets and distributing models',
        ],
      },
    ],
  },

  // ─── 2. DIGITAL MARKETING ───
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    category: 'Digital marketing',
    duration: '6 months plus job training',
    level: 'Diploma',
    summary: 'Comprehensive 10-module program covering SEO, social media, paid ads, content strategy, and client closing.',
    tools: ['Google Ads', 'WordPress', 'Google Analytics'],
    modules: [
      {
        name: 'Module 1 - SEO (Search Engine Optimization)',
        topics: [
          'General SEO fundamentals and local search setup',
          'Search engine mechanics and keyword research',
          'Technical SEO, sitemaps, and Google Search Console',
          'On-page optimization, link building, and schema markup',
          'Search algorithms, keyword ranking, and Google Analytics',
        ],
      },
      {
        name: 'Module 2 - SMM (Social Media Marketing)',
        topics: [
          'Fundamentals of modern social platforms',
          'Designing high-converting lead generation pages',
          'Building organic brand authority and community presence',
          'Funnel-based social strategies and push marketing',
        ],
      },
      {
        name: 'Module 3 - SEM (Search Engine Marketing)',
        topics: [
          'Search engine marketing architecture',
          'Commercial intent keyword research and match types',
          'Landing page optimization and quality score metrics',
          'Conversion tracking and campaign analytics',
        ],
      },
      {
        name: 'Module 4 - Google Ads',
        topics: [
          'Campaign structures across Search, Display, and Video',
          'Advanced keyword targeting and negative lists',
          'Ad copywriting, extensions, and bidding strategies',
          'Conversion tracking in varied business models',
          'Client pitch and closing mastery',
        ],
      },
      {
        name: 'Module 5 - WordPress Management',
        topics: [
          'Categories, posts, and media library organisation',
          'Page creation and visual layout customization',
          'Plugin evaluation, installation, and configuration',
          'Theme selection, widgets, and website security basics',
        ],
      },
      {
        name: 'Module 6 - Blogging & Content Marketing',
        topics: [
          'Driving sustainable organic search traffic',
          'Content frameworks that establish domain authority',
          'Audience engagement and editorial calendar planning',
          'Lead generation through gated assets and articles',
        ],
      },
      {
        name: 'Module 7 - App Marketing & ASO',
        topics: [
          'App promotion and engagement campaigns',
          'App Store Optimization (ASO) strategies',
          'In-app marketing funnels and retention models',
          'Mobile user behavioral analytics',
        ],
      },
      {
        name: 'Module 8 - ORM (Online Reputation Management)',
        topics: [
          'Continuous brand sentiment monitoring',
          'Building positive review footprints on major portals',
          'Managing customer reviews and crisis response plans',
        ],
      },
      {
        name: 'Module 9 - Multi-Channel Marketing',
        topics: [
          'WhatsApp marketing campaigns and API bots',
          'Email marketing workflows and list segmentation',
          'Affiliate and e-commerce marketing systems',
          'Google My Business local presence and conversion optimization',
          'Media planning, budgeting, and freelance client acquisition',
        ],
      },
    ],
  },
  {
    slug: 'addm',
    title: 'ADDM (Advance Diploma in Digital Marketing)',
    category: 'Digital marketing',
    duration: '12 months',
    level: 'Advance diploma',
    summary: 'Full digital marketing curriculum combined with creative graphic design tools and cutting-edge AI suites.',
    tools: ['Google Ads', 'Photoshop', 'Generative AI'],
    modules: [
      {
        name: 'Digital Marketing Mastery',
        topics: [
          'Complete SEO, SEM, SMM, and Google Ads training',
          'WordPress site building and content distribution',
          'Conversion rate optimization (CRO) and media buying',
          'Multi-channel outreach: email, WhatsApp, and affiliate',
        ],
      },
      {
        name: 'Graphic Design Suite',
        topics: [
          'Corel Draw: logo, flyer, brochure, and vector layout',
          'Adobe Illustrator: pen tool, gradients, typography, and infographics',
          'Adobe Photoshop: image retouching, digital manipulation, and social creatives',
          'Adobe InDesign: multi-page publications and magazine layouts',
          'Canva Pro: rapid template production and social branding',
        ],
      },
      {
        name: 'AI Marketing Suite',
        topics: [
          'ChatGPT and Gemini for content strategy and copywriting',
          'Perplexity, Small SEO Tools, and Duplichecker for audit research',
          'QuillBot for content editing and tone refinement',
          'HubSpot AI blog tools and SocialPilot scheduling',
          'Google Trends and Moz Local market analysis',
        ],
      },
    ],
  },

  // ─── 3. WEB AND SOFTWARE ───
  {
    slug: 'fswd',
    title: 'FSWD (Full Stack Web Development)',
    category: 'Web and software',
    duration: '6 months',
    level: 'Diploma',
    summary: 'End-to-end full stack development using modern HTML5, CSS3, JavaScript, jQuery, PHP, SQL, and WordPress.',
    tools: ['JavaScript', 'PHP', 'SQL Server'],
    modules: [
      {
        name: 'HTML5 & CSS3',
        topics: [
          'Semantic markup, structural elements, and forms',
          'Responsive design, Flexbox, and CSS Grid systems',
          'Box model, transitions, transforms, and keyframe animations',
          'Cross-browser compatibility and responsive viewport setup',
        ],
      },
      {
        name: 'JavaScript & jQuery',
        topics: [
          'Client-side programming syntax, variables, and data structures',
          'DOM traversal, manipulation, and event handling',
          'Functions, closures, arrays, and object-oriented concepts',
          'Form validation, error handling, and asynchronous requests',
          'jQuery library methods, effects, and dynamic UI widgets',
        ],
      },
      {
        name: 'PHP Backend',
        topics: [
          'Server-side architecture and Apache configuration',
          'Syntax, control statements, arrays, and string handling',
          'Object-oriented PHP (classes, inheritance, polymorphism)',
          'Session management, cookies, and secure input handling',
          'RESTful endpoints and database integration',
        ],
      },
      {
        name: 'SQL Database Management',
        topics: [
          'Relational database design and normalisation',
          'Writing complex queries, joins, and aggregates',
          'Transaction integrity, stored procedures, and views',
          'Securing user authentication and database models',
        ],
      },
      {
        name: 'WordPress CMS Development',
        topics: [
          'Custom theme setup and template hierarchy',
          'Plugin architecture, configuration, and shortcodes',
          'Managing custom post types, users, and media assets',
          'Deploying secure production websites',
        ],
      },
    ],
  },
  {
    slug: 'android-development',
    title: 'Android Development',
    category: 'Web and software',
    duration: '4 months',
    level: 'Short course',
    summary: 'Build native Android apps with Java, C/C++ fundamentals, components, telephony, and sensors.',
    tools: ['Android Studio', 'Java', 'XML'],
    modules: [
      {
        name: 'Programming Foundations',
        topics: [
          'Introduction to C and C++ programming fundamentals',
          'Object-oriented programming (OOP) principles and classes',
          'Core Java syntax, packages, and exception handling',
        ],
      },
      {
        name: 'Android Core Architecture',
        topics: [
          'Introduction to Android architecture and SDK',
          'Android packages, components, and Activity lifecycles',
          'User interface layouts, views, and event listeners',
          'Notifications, alarms, and background service code',
        ],
      },
      {
        name: 'Hardware & Native Integration',
        topics: [
          'Multimedia integration: audio, video, and camera',
          'Telephony services and contact management APIs',
          'Bluetooth connectivity and sensor manager integration',
          'Building native libraries with the JNI (Java Native Interface)',
          'Android web development and web views',
        ],
      },
    ],
  },
  {
    slug: 'adse',
    title: 'ADSE (Advance Diploma in Software Engineering)',
    category: 'Web and software',
    duration: '18 months',
    level: 'Advance diploma',
    summary: 'Comprehensive 5-semester software engineering program spanning web programming, C/C++, C#, Java, PHP, Python, and R.',
    tools: ['Java', 'C#', 'Python', 'R'],
    semesters: [
      {
        number: 1,
        title: 'Web Programming',
        modules: [
          {
            name: 'HTML5, CSS3, JavaScript, jQuery & XML',
            topics: [
              'Semantic HTML5 structure and CSS3 properties',
              'JavaScript syntax, functions, objects, and event handling',
              'jQuery library, DOM selection, and animations',
              'XML markup fundamentals and data exchange formats',
            ],
          },
        ],
      },
      {
        number: 2,
        title: 'Core Programming',
        modules: [
          {
            name: 'C, C++, C# & Systems Analysis',
            topics: [
              'C language: data types, control flow, functions, and arrays',
              'C++: OOP paradigms, inheritance, and stream manipulation',
              'C#: .NET Framework, classes, exceptions, and generic methods',
              'Systems Analysis & Design: algorithms, asymptotic notation, and graph concepts',
            ],
          },
        ],
      },
      {
        number: 3,
        title: 'Java Specialist',
        modules: [
          {
            name: 'SQL Server, Core Java & Advance Java',
            topics: [
              'SQL Server query design and database integrity',
              'Core Java: OOP, packages, modifiers, casting, and Eclipse setup',
              'Advance Java: runtime polymorphism, API platforms, and file systems',
            ],
          },
        ],
      },
      {
        number: 4,
        title: 'Development',
        modules: [
          {
            name: 'PHP & MySQL',
            topics: [
              'Server-side PHP scripting and Apache setup',
              'OOP architecture, constructors, and reflection APIs',
              'MySQL relational schema design and complex queries',
              'End-to-end full stack application development',
            ],
          },
        ],
      },
      {
        number: 5,
        title: 'Statistical Programming',
        modules: [
          {
            name: 'Python & R Language',
            topics: [
              'Python programming, collections, and NumPy mathematical arrays',
              'R language syntax, vectors, arrays, and data frames',
              'Statistical operations, functions, and numerical analysis',
            ],
          },
        ],
      },
    ],
  },

  // ─── 4. DESIGN AND VIDEO ───
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    category: 'Design and video',
    duration: '4 months',
    level: 'Short course',
    summary: 'Professional design for branding, print, and social media using Corel Draw, Illustrator, Photoshop, InDesign, and Canva.',
    tools: ['Photoshop', 'Illustrator', 'Corel Draw'],
    modules: [
      {
        name: 'Corel Draw & Vector Art',
        topics: [
          'Interface navigation, shapes, and bezier drawing',
          'Logo design, visiting cards, invitation cards, and stationery',
          'Brochures, flyers, pamphlets, and large-format hoardings',
          'Newspaper layout design and color separation',
        ],
      },
      {
        name: 'Adobe Photoshop',
        topics: [
          'Workspace navigation, layers, masks, and blending modes',
          'Photo retouching, restoration, and digital art composition',
          'Scanning, resolution optimization, and vector-bitmap workflows',
          'Creating GIF ads and timeline animations',
        ],
      },
      {
        name: 'Adobe Illustrator & InDesign',
        topics: [
          'Pen tool precision, appearance panels, and gradients',
          'Typography styling, vector infographics, and icon systems',
          'InDesign placeholder frames, text formatting, and book design',
          'Pre-press verification and high-resolution export',
        ],
      },
      {
        name: 'Canva Pro for Designers',
        topics: [
          'Quick template branding and social content creation',
          'Magic Studio tools and vector illustrations',
          'Exporting for web, print, and video channels',
        ],
      },
    ],
  },
  {
    slug: 'web-design',
    title: 'Web Design',
    category: 'Design and video',
    duration: '5 months',
    level: 'Short course',
    summary: 'Design responsive and interactive user interfaces using HTML5, CSS3, JavaScript, Figma, Bootstrap, and Adobe Animate.',
    tools: ['Figma', 'HTML5/CSS3', 'Bootstrap'],
    modules: [
      {
        name: 'HTML5 & CSS3 Design',
        topics: [
          'Semantic webpage design, table layouts, and custom form styling',
          'CSS3 backgrounds, drop shadows, gradients, and Flexbox',
          '2D transforms, border effects, and CSS keyframe animations',
        ],
      },
      {
        name: 'JavaScript & Interactive UI',
        topics: [
          'Data types, conditionals, loops, and custom functions',
          'DOM event triggers, navigation drawers, and tab systems',
        ],
      },
      {
        name: 'Figma & UI/UX Principles',
        topics: [
          'Design hierarchy, wireframing, and component libraries',
          'Auto-layout, responsive constraints, and interactive prototypes',
          'Developer handoff assets and design tokens',
        ],
      },
      {
        name: 'Bootstrap Framework',
        topics: [
          '12-column grid system, breakpoints, and container layouts',
          'Navbar, modal, card, dropdown, and alert components',
        ],
      },
      {
        name: 'Adobe Animate',
        topics: [
          'Motion paths, easing, and classic shape tweening',
          'Frame-by-frame character animation and web banner exports',
        ],
      },
    ],
  },
  {
    slug: 'video-editing-vfx',
    title: 'Video Editing and VFX',
    category: 'Design and video',
    duration: '6 months',
    level: 'Diploma',
    summary: 'Professional video production, motion graphics, chroma keying, and visual effects using Premiere Pro and After Effects.',
    tools: ['Premiere Pro', 'After Effects', 'Photoshop'],
    modules: [
      {
        name: 'Adobe Premiere Pro',
        topics: [
          'Workspace configuration, sequence settings, and ingestion',
          'Timeline editing tools: razor, ripple, rolling, and slide',
          'Audio mixing, voiceover cleaning, and sound syncing',
          'Masking, color grading (Lumetri Color), and time remapping',
          'Chroma keying green and blue screens',
          'Export presets for broadcast, web, and social formats',
        ],
      },
      {
        name: 'Adobe After Effects',
        topics: [
          'Compositions, layers, and 3D space orientation',
          'Keyframe animation, graph editor, and motion paths',
          'Kinetic typography, movie titling, and lower-thirds',
          'Chroma key extraction, rotoscoping, and track mattes',
          'Camera tracking, particle effects, and light-heat simulation',
          'Rendering workflows and Adobe Media Encoder queue',
        ],
      },
      {
        name: 'Design Asset Preparation',
        topics: [
          'Photoshop digital matte creation and asset slicing',
          'Illustrator vector logo preparation for 2D animation',
        ],
      },
    ],
  },
  {
    slug: 'adgwa',
    title: 'ADGWA (Advance Diploma in Graphic, Web and Animation)',
    category: 'Design and video',
    duration: '18 months',
    level: 'Advance diploma',
    summary: 'Complete creative career diploma covering office automation, graphic design, web design, 2D animation, and VFX video editing.',
    tools: ['Photoshop', 'Premiere Pro', 'After Effects', 'Figma'],
    semesters: [
      {
        number: 1,
        title: 'Digital Office Automation',
        modules: [
          {
            name: 'MS Office, Windows & Internet',
            topics: [
              'Operating system fundamentals and hardware-software interaction',
              'MS Word, Excel, and PowerPoint presentation skills',
              'Internet protocols, email etiquette, and multimedia projects',
            ],
          },
        ],
      },
      {
        number: 2,
        title: 'Graphic Designing',
        modules: [
          {
            name: 'Photoshop, Corel Draw, Illustrator & InDesign',
            topics: [
              'Branding identity: logos, stationery, and brochures',
              'Packaging design and advertising graphics',
              'Social media campaign post creation',
            ],
          },
        ],
      },
      {
        number: 3,
        title: 'Web Designing',
        modules: [
          {
            name: 'HTML5, CSS3, JavaScript, Figma & Bootstrap',
            topics: [
              'Responsive web interfaces with Flexbox and Grid',
              'Interactive prototyping in Figma and component styling',
              'Domain registration, web hosting, and launch practices',
            ],
          },
        ],
      },
      {
        number: 4,
        title: 'Motion Graphics & 2D Animation',
        modules: [
          {
            name: 'Adobe After Effects',
            topics: [
              'Logo animation, kinetic type, and 2D cartoon characters',
              'Camera tracking, environmental lighting, and mask effects',
              'Looping backgrounds and seamless transitions',
            ],
          },
        ],
      },
      {
        number: 5,
        title: 'Video Editing & VFX',
        modules: [
          {
            name: 'Adobe Premiere Pro',
            topics: [
              'Commercial TV ads (15 to 60 sec) production',
              'Chroma key green screen footage editing',
              'Audio mixing, speed ramps, and multi-format delivery',
            ],
          },
        ],
      },
    ],
  },

  // ─── 5. OFFICE AND ACCOUNTS ───
  {
    slug: 'digital-office-automation',
    title: 'Digital Office Automation',
    category: 'Office and accounts',
    duration: '2 months',
    level: 'Short course',
    summary: 'Practical office computing skills: Word, Excel, PowerPoint, generative AI with ChatGPT, Internet, and Google products.',
    tools: ['MS Word', 'MS Excel', 'ChatGPT'],
    modules: [
      {
        name: 'MS Word & PowerPoint',
        topics: [
          'Document creation, layout styling, and table formatting',
          'Templates, headers, footers, and reference management',
          'Slide presentation design, themes, transitions, and charts',
        ],
      },
      {
        name: 'MS Excel',
        topics: [
          'Worksheet navigation, basic formulas, and cell formatting',
          'Data entry, sorting, filtering, and standard calculations',
          'Creating charts and summary tables for office reporting',
        ],
      },
      {
        name: 'Generative AI & ChatGPT',
        topics: [
          'Introduction to generative AI and language models',
          'Prompt engineering for emails, reports, and data analysis',
          'Hands-on workplace productivity workflows',
        ],
      },
      {
        name: 'Internet & Google Workspace',
        topics: [
          'Email architecture, etiquette, and attachment management',
          'Google Docs, Sheets, Slides, Forms, and Drive cloud storage',
          'Google Calendar, Chrome, and web utility navigation',
        ],
      },
    ],
  },
  {
    slug: 'tally-prime-gst',
    title: 'Tally Prime with GST',
    category: 'Office and accounts',
    duration: '3 months',
    level: 'Short course',
    summary: 'Complete business accounting in Tally Prime: company info, vouchers, inventory, GST compliance, TDS/TCS, and payroll.',
    tools: ['Tally Prime', 'GST Portal', 'MS Excel'],
    modules: [
      {
        name: 'Company Info & Core Accounting',
        topics: [
          'Company creation, alteration, and Tally Vault security',
          'Chart of accounts: groups, ledgers, and voucher classes',
          'Accounting vouchers: payment, receipt, contra, and journal',
          'Trial balance, profit & loss, and balance sheet reports',
        ],
      },
      {
        name: 'Advanced Accounting & Inventory',
        topics: [
          'Cost categories, cost centres, budgets, and credit limits',
          'Multi-currency management and bank reconciliation',
          'Stock groups, units of measure, godowns, and batch tracking',
          'Bill of materials (BOM) and manufacturing journals',
        ],
      },
      {
        name: 'Taxation & GST Compliance',
        topics: [
          'GST framework, tax slabs, and party GSTIN updates',
          'Setting up CGST, SGST, IGST ledgers and tax invoices',
          'Input tax credit (ITC) and reverse charge mechanism',
          'GSTR-1, GSTR-3B return summaries and export preparation',
          'TDS (Tax Deducted at Source) and TCS provisions',
        ],
      },
      {
        name: 'Data Management & Administration',
        topics: [
          'Data backup, restore, and company splitting',
          'Exporting reports to Excel/PDF and ODBC connectivity',
          'Tally audit features and security controls',
        ],
      },
    ],
  },
  {
    slug: 'dca',
    title: 'DCA (Diploma in Computer Application)',
    category: 'Office and accounts',
    duration: '12 months',
    level: 'Diploma',
    summary: 'Practical foundation program covering office automation, Tally Prime accounting, graphic design, and web designing.',
    tools: ['MS Office', 'Tally Prime', 'Photoshop', 'HTML/CSS'],
    semesters: [
      {
        number: 1,
        title: 'Office Automation & Tally Prime',
        modules: [
          {
            name: 'MS Office & Excel',
            topics: [
              'Computer fundamentals, Windows, and Word documentation',
              'Excel formulas, functions, sorting, and reporting',
              'PowerPoint presentations, custom designs, and themes',
            ],
          },
          {
            name: 'Tally Prime Operating & Advanced',
            topics: [
              'Accounting principles, golden rules, and chart of accounts',
              'Voucher entry, inventory management, and stock valuation',
              'GST model, invoices, challans, TDS, and bank reconciliation',
            ],
          },
        ],
      },
      {
        number: 2,
        title: 'Graphic & Web Designing',
        modules: [
          {
            name: 'Graphic Designing',
            topics: [
              'Corel Draw: vector drawing, logos, flyers, and pamphlets',
              'Adobe Photoshop: photo retouching, layers, and digital art',
              'Adobe Illustrator & InDesign: infographics, icons, and page layout',
            ],
          },
          {
            name: 'Web Designing',
            topics: [
              'HTML5 tags, tables, forms, and audio-video integration',
              'CSS styling, borders, animations, and typography',
              'JavaScript syntax, variables, arrays, and event functions',
              'Bootstrap responsive grid, cards, and modal components',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'adat',
    title: 'ADAT (Advance Diploma in Accounting and Taxation)',
    category: 'Office and accounts',
    duration: '12 months',
    level: 'Advance diploma',
    summary: 'Comprehensive 5-semester curriculum covering digital office automation, Advance Excel, Tally Prime, GST taxation, and Power BI.',
    tools: ['Tally Prime', 'Advance Excel', 'Power BI'],
    semesters: [
      {
        number: 1,
        title: 'Digital Office Automation',
        modules: [
          {
            name: 'Computing Foundations',
            topics: [
              'Operating computer and Windows environments',
              'Hardware, software, and e-commerce basics',
              'MS Word, Excel, PowerPoint, and Internet projects',
            ],
          },
        ],
      },
      {
        number: 2,
        title: 'Advance Excel',
        modules: [
          {
            name: 'Analytics in Excel',
            topics: [
              'Lookup tables (VLOOKUP, HLOOKUP, XLOOKUP)',
              'Pivot tables, dynamic slicers, and advanced filtering',
              'Macros recording and spreadsheet protection',
            ],
          },
        ],
      },
      {
        number: 3,
        title: 'Basic Accounting Using Tally',
        modules: [
          {
            name: 'Core Accounting Ledgers',
            topics: [
              'Accounting concepts and golden rules',
              'Tally fundamentals, accounting masters, and vouchers',
              'Budgets, controls, and financial reporting',
            ],
          },
        ],
      },
      {
        number: 4,
        title: 'Advance Accounting Using Tally (GST)',
        modules: [
          {
            name: 'Statutory Compliance & GST',
            topics: [
              'Goods & Services Tax (GST) invoicing and rates',
              'TDS and TCS statutory deductions',
              'Bank reconciliation, cash flow, and fund flow statements',
            ],
          },
        ],
      },
      {
        number: 5,
        title: 'Analyzing with Power BI',
        modules: [
          {
            name: 'Business Intelligence for Finance',
            topics: [
              'Data cleaning and transformation in Power Query',
              'DAX financial measures and forecasting models',
              'Interactive executive dashboards and reporting',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'ftp',
    title: 'FTP (Future Tech Program)',
    category: 'Office and accounts',
    duration: '2.5 years',
    level: 'Career program',
    summary: 'The ultimate IT career program: 6 programming languages, full stack web, digital marketing, graphic design, accounts, and optional VFX.',
    tools: ['Python', 'Java', 'Full Stack', 'Power BI'],
    modules: [
      {
        name: 'Programming Languages',
        topics: [
          'C Language fundamentals and memory management',
          'C++ object-oriented architecture',
          'C# and .NET Framework',
          'Java core and advanced platform design',
          'VB.NET enterprise systems',
          'Python scripting and data structures',
        ],
      },
      {
        name: 'Web Development & CMS',
        topics: [
          'HTML5, CSS3, JavaScript, and jQuery',
          'PHP server-side programming and MySQL databases',
          'WordPress theme customization and live capstone projects',
        ],
      },
      {
        name: 'Digital Marketing Suite',
        topics: [
          'Social media marketing, lead generation funnels, and video marketing',
          'Google Analytics, Google My Business, and affiliate channels',
        ],
      },
      {
        name: 'Graphic & Web Designing',
        topics: [
          'Corel Draw, Photoshop, Illustrator, and InDesign',
          'Responsive web layouts, typography, and interactive portfolio',
        ],
      },
      {
        name: 'Office Automation & Accounting',
        topics: [
          'Digital office automation: Word, Excel, PowerPoint',
          'Advance Excel formulas, lookups, and pivot dashboards',
          'Tally Prime with GST, payroll, and bank reconciliation',
        ],
      },
      {
        name: 'Optional Track: VFX & Video Editing',
        topics: [
          'Film editing in Adobe Premiere Pro and color grading',
          'Adobe After Effects motion graphics, chroma keying, and matchmoving',
          'Sound Forge audio engineering and 2D animations',
        ],
      },
    ],
  },

  // ─── 6. CYBER SECURITY ───
  {
    slug: 'ethical-hacking',
    title: 'Ethical Hacking',
    category: 'Cyber security',
    duration: '6 months',
    level: 'Diploma',
    summary: 'Authorized, lab-based defensive cybersecurity training teaching system vulnerabilities, penetration testing, and protection mechanisms.',
    tools: ['Wireshark', 'Kali Linux', 'Burp Suite'],
    modules: [
      {
        name: 'Ethical Hacking & Networking Fundamentals',
        topics: [
          'Introduction to ethical hacking concepts and defense methodologies',
          'Hacker classifications and legal compliance boundaries',
          'Networking basics: IPv4 and IPv6 subnetting and protocols',
          'IP classes, port numbers, and TCP/IP handshake mechanisms',
        ],
      },
      {
        name: 'Reconnaissance & Vulnerability Assessment',
        topics: [
          'Footprinting methodologies and active defense countermeasures',
          'Network scanning tools and vulnerability discovery',
          'Advanced search query reconnaissance and security filters',
        ],
      },
      {
        name: 'System Security & Cryptography',
        topics: [
          'System security auditing methodologies',
          'Password hashing, brute force defense, and authentication security',
          'File permission management and hidden payload detection',
          'Email verification protocols and anti-spoofing controls',
        ],
      },
      {
        name: 'Web Application & Network Defenses',
        topics: [
          'SQL injection vulnerability detection and parameterized mitigations',
          'Cross-site scripting (XSS) analysis and input sanitization',
          'Denial of service (DoS/DDoS) attack patterns and traffic mitigation',
          'Social engineering awareness, phishing simulations, and identity protection',
          'Defensive VPN configurations and secure browser hardening',
        ],
      },
    ],
  },
];
