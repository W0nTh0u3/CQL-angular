export interface Service {
  readonly number: string;
  readonly title: string;
  readonly introduction: string;
  readonly offerings: readonly string[];
  readonly notes?: readonly {
    readonly heading: string;
    readonly description: string;
  }[];
}

export interface Person {
  readonly name: string;
  readonly role?: string;
  readonly focus: string;
  readonly experience: readonly string[];
  readonly qualifications: string;
}

export const services: readonly Service[] = [
  {
    number: '01',
    title: 'Process Management',
    introduction:
      'We study how work moves through your organization, applying practical tools and industry knowledge to identify cost opportunities without compromising quality. Recommendations can include organization design, policies, procedures, and the IT interface required for implementation.',
    offerings: [
      'Diagnostic / Operations Review',
      'Process Improvement and Reengineering',
      'Productivity Improvement',
      'Materials / Inventory Management',
      'Distribution / Logistics Management',
      'Performance Measurements',
      'Records Management',
      'Good Manufacturing Practice (GMP)',
      'Hazard Analysis Critical Control Point (HACCP)',
      'ISO 22000',
    ],
  },
  {
    number: '02',
    title: 'Quality Management',
    introduction:
      'Quality management is now a global language for demonstrating a commitment to quality. ISO 9000 guidelines can strengthen work processes, staff capability, and attention to customer requirements while reducing non-value-adding activities.',
    offerings: [
      'Total Quality Management (TQM)',
      'ISO 9001 / QSS Services / TS16949',
      'Statistical Quality Control',
      '5S',
    ],
  },
  {
    number: '03',
    title: 'Cost Management',
    introduction:
      'We examine business processes, revenue drivers, and cost drivers to identify opportunities for more cost-efficient and cost-effective operations. We also support manpower planning through job analysis and time study.',
    offerings: ['Cost Management', 'Manpower Planning'],
  },
  {
    number: '04',
    title: 'Environmental, Health, and Safety Management',
    introduction:
      'Environmental, health, and safety management is an important concern for every organization. We help implement systems that protect the environment and support a healthy, safe workplace—integrated into everyday operations with informed management and people.',
    offerings: ['ISO 14000 Services', 'OHSAS 18000 Services'],
  },
  {
    number: '05',
    title: 'Human Resources Management',
    introduction:
      'People carry out the critical processes behind products, services, and customer relationships. We help design fair organization and compensation structures, including support for social-accountability requirements.',
    offerings: [
      'Organizational Development',
      'Job Analysis and Evaluation',
      'Compensation Review',
      'SA 8000 Services',
    ],
  },
  {
    number: '06',
    title: 'IT Development and Support',
    introduction:
      'Relevant business and customer information depends on reliable IT. We clarify information requirements, propose systems that make essential information accessible, and guide implementation through to system mastery.',
    offerings: [
      'Functional Information System Development',
      'Information Systems Planning',
      'Web Design and Development',
      'Networking Services',
      'ISO 27000 Services',
    ],
  },
  {
    number: '07',
    title: 'Other Services',
    introduction:
      'Focused advisory and capability-building support for pivotal business decisions.',
    offerings: [],
    notes: [
      {
        heading: 'Strategic Management',
        description:
          'We help clarify your organization’s direction, objectives, and strategy toward its business goals.',
      },
      {
        heading: 'Feasibility Study / Market Study',
        description:
          'We assist with research and analysis of a venture’s viability, opportunities, challenges, and growth potential.',
      },
      {
        heading: 'Customized In-House Trainings',
        description:
          'We provide training designed around your people’s skills-development needs.',
      },
    ],
  },
];

export const people: readonly Person[] = [
  {
    name: 'Dexter T. Chua',
    role: 'Managing Partner',
    focus: 'Process, Quality, and Cost Management',
    experience: [
      'Specializes in ISO 9000 Quality Management Systems, integrating total quality management, process and productivity improvement, logistics, organizational development, and IT support.',
      'Has provided management consultancy across industrial and consumer products, semiconductor, financial institutions, healthcare, professional services, transportation, freight forwarding, aircraft ground handling, retail, marketing, education, garments, telecommunications, construction materials, hotel, petrochemical, and ship survey and repair.',
      'Previously a management consultant at a Big 4 firm and among the pioneers who established its ISO 9000 consulting methodology.',
    ],
    qualifications:
      'Bachelor of Science in Industrial Engineering; Master in Business Administration (MBA) units, De La Salle University, Philippines.',
  },
  {
    name: 'Johanna L. Lim',
    focus: 'Process, Quality, and Cost Management',
    experience: [
      'Has supported ISO 9000 engagements in manufacturing and service organizations, including workshops, diagnostic reviews, quality-system documentation, and internal quality-audit assistance.',
      'Her operations and information-requirements work spans organization structure, sales and marketing, supply chain, shop-floor operations, human resources, and accounting.',
      'Consultancy experience includes industrial and consumer products, retail and wholesale distribution, insurance, credit, healthcare, freight forwarding, transportation, telecommunications, education, garments, pharmaceuticals, and ship survey and repair.',
    ],
    qualifications:
      'Qualified provisional ISO 9000 Assessor and Environmental Management System Assessor. Master of Science in Quality, Safety, and Environment, Otto-von-Guericke-University, Germany; MBA and BS Industrial Engineering, De La Salle University, Philippines. Previously a Big 4 management consultant and Senior Enterprise Engineer at an IT consulting firm.',
  },
  {
    name: 'Loremie A. Garrucha',
    focus: 'Process and Quality Management',
    experience: [
      'Supports ISO 9000 workshops, diagnostic reviews and quality health checks, quality-systems documentation, and internal quality-audit assistance.',
      'Has also worked on operations reviews and information-requirements analysis across organization structure, sales and marketing, supply chain, shop-floor operations, human resources, and accounting.',
      'Experience includes industrial and consumer products, business process outsourcing, retail and wholesale distribution, insurance, healthcare, logistics, education, construction, and ship survey and repair.',
    ],
    qualifications:
      'Qualified provisional ISO 9000 Assessor. BS Business Administration, major in Marketing, University of the Philippines – Iloilo City. Prior manufacturing-sector consultancy experience includes assistance toward PS Mark and ISO 9000 certifications.',
  },
];

export const industries = [
  'Aircraft Ground Handling',
  'Business Process Outsourcing',
  'Construction',
  'Educational Institutions',
  'Financial Institutions',
  'Freight Forwarding / Logistics Services',
  'Healthcare / Medical Clinics',
  'Hotel, Restaurant, and Catering Business',
  'Industrial, Electronics, Semiconductor, and Consumer Products',
  'Manning and Professional Services',
  'Marketing and Promotional Services',
  'Publishing',
  'Retail and Distribution',
  'Ship Survey and Repairs',
  'Theater Operation',
  'Tollway Management',
  'Transportation',
] as const;

export const contact = {
  address: [
    'CQL Business Systems Consulting',
    'Block 14 Lot 9 Ipil Ipil Street',
    'Phase IV Multinational Village',
    'Parañaque City, Philippines',
  ],
  phone: '+63 2 8264137',
  phoneHref: 'tel:+6328264137',
  fax: '+63 2 5421588',
  email: 'info@cql.com.ph',
} as const;
