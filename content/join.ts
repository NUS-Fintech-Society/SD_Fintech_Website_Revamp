import type { DepartmentSlug } from '@/content/departments';

export type Step = {
  label: string;
  /** `+08:00`. The latest step that has started is the current one. */
  start: string;
  end?: string;
  detail: string;
  /** Carries the Apply pill while it's the current step and applications are open. */
  apply?: boolean;
};

export type Intake = {
  ay: string;
  opens: string;
  closes: string;
  applyUrl: string;
  nextIntakeLabel: string;
  steps: Step[];
};

export type Role = {
  slug: string;
  title: string;
  department: DepartmentSlug;
  /** One sentence: the role row and the meta description. */
  line: string;
  do: string[];
  lookFor: string[];
  training?: string;
  subteams?: { name: string; line: string }[];
};

export type Faq = { q: string; a: string };

// The AY2026/27 intake: leads from 24 Jun 2026, members from 8 Aug 2026, reviewed on a rolling basis.
// shortcut: the close, interview and offer dates are placeholders (none were announced) and don't show while
// the intake is closed; replace them, the form link and the next-intake label with the next intake's real ones.
export const intake: Intake = {
  ay: 'AY2026/27',
  opens: '2026-06-24T00:00:00+08:00',
  closes: '2026-08-31T23:59:00+08:00',
  applyUrl: '',
  nextIntakeLabel: 'June 2027',
  steps: [
    { label: 'Lead applications open', start: '2026-06-24T00:00:00+08:00', detail: 'For lead roles, reviewed as they come in.', apply: true },
    { label: 'Member applications open', start: '2026-08-08T00:00:00+08:00', detail: 'For member roles, reviewed as they come in.', apply: true },
    { label: 'Interview', start: '2026-09-01T00:00:00+08:00', end: '2026-09-07T23:59:00+08:00', detail: "If you're shortlisted, your department's director will contact you to arrange a time." },
    { label: 'Offer', start: '2026-09-14T00:00:00+08:00', detail: 'Successful applicants get an offer, with the next steps for joining.' },
  ],
};

// An intake that hasn't closed needs its form link, or the Apply pills would lead nowhere.
if (!intake.applyUrl && Date.parse(intake.closes) > Date.now()) throw new Error('content/join.ts: intake.applyUrl is missing');

/** What to expect: [term, value]. */
export const expectations: [string, string][] = [
  ['When', 'Applications take place every year from June to August'],
  ['How we review', 'On a rolling basis, with interviews for shortlisted candidates'],
  ['Who can apply', 'All NUS students, from any faculty or year'],
];

/** From the society's recruitment posts. In the site-wide department order, leads first. */
export const roles: Role[] = [
  {
    slug: 'blockchain-developer-analyst',
    title: 'Blockchain Developer/Analyst',
    department: 'blockchain',
    line: 'Build blockchain apps for hackathons, publish research, or do both.',
    do: [
      'Developer track: Build innovative blockchain applications and participate in global hackathons.',
      'Analyst track: Publish in-depth research articles featured across NUS social media channels.',
      'You can choose one track or do both.',
      'Attend weekly sessions to discuss emerging blockchain technologies and market strategies.',
      'Assist with community events, including giveaway booths and speaker talks.',
    ],
    lookFor: [
      'Active participant in the Web3 ecosystem or deeply committed to learning about this fast-paced industry.',
      'Enthusiastic about receiving sponsorship to compete in international blockchain hackathons.',
      'Available to attend weekly blockchain meetups and other hosted events.',
    ],
  },
  {
    slug: 'ml-tech-lead',
    title: 'ML Tech Lead',
    department: 'machine-learning',
    line: 'Lead an ML project team from idea to execution.',
    do: [
      'Lead an ML project team and drive the project from ideation to execution.',
      'Define project direction, goals, and milestones while guiding team members towards meaningful outcomes.',
      'Work closely with ML Directors to ensure project progress and sustainability.',
      'Recruit and mentor ML Analysts within your project team.',
      'Projects run for a semester or a full year, and Tech Leads recruit their own ML Analysts.',
    ],
    lookFor: [
      'Strong ownership, leadership, and the ability to motivate a team.',
      'Clear vision and the ability to define meaningful project goals.',
      'Passionate about building projects with long-term impact, beyond just prototypes or demos.',
      'Prior project experience or a strong interest in leading an ML project.',
      'Ideally has an idea or direction they would like to explore.',
    ],
  },
  {
    slug: 'ml-training-head',
    title: 'ML Training Head',
    department: 'machine-learning',
    line: 'Design and run the weekly ML workshops (Semester 1 only).',
    do: [
      'Design and deliver weekly workshops covering fundamental ML concepts and practical skills.',
      'Develop learning materials and guide trainees throughout the training programme.',
      'Work with ML Directors to design the curriculum and improve the learning experience.',
    ],
    lookFor: [
      'Has strong foundations in machine learning and hands-on ML experience.',
      'Has good communication and presentation skills.',
      'Enjoys teaching, mentoring, and helping others grow.',
    ],
  },
  {
    slug: 'ml-analyst',
    title: 'ML Analyst',
    department: 'machine-learning',
    line: "Research and build models in a Tech Lead's project team.",
    do: [
      'Collaborate with Tech Leads and team members to execute ML projects.',
      'Conduct research, implement models, and contribute to project development.',
      'Take ownership of assigned tasks and actively contribute to project progress.',
    ],
    lookFor: [
      'Proactive, responsible, and willing to take initiative.',
      'Passionate about applying ML to solve meaningful problems.',
      'Can work collaboratively and consistently contribute to team goals.',
    ],
  },
  {
    slug: 'ml-trainee',
    title: 'ML Trainee',
    department: 'machine-learning',
    line: 'Learn ML foundations in weekly workshops, then apply them in projects.',
    do: [
      'Participate in weekly ML workshops and training sessions.',
      'Build foundational ML knowledge through practical exercises.',
      'Apply learned concepts through projects and collaborative learning.',
    ],
    lookFor: [
      'Has strong curiosity and enthusiasm for machine learning.',
      'Willing to consistently learn and improve.',
      'Committed to actively participating in training and project activities.',
    ],
  },
  {
    slug: 'quant-lead',
    title: 'Quant Lead',
    department: 'quant',
    line: 'Lead a team of quant researchers and developers through the full model lifecycle.',
    do: [
      'Provide strategic direction to a team of quantitative researchers and developers, while supporting their growth and execution.',
      'Manage the full model development lifecycle, from research and experimentation to implementation and deployment for trading, pricing, or forecasting applications.',
      'Analyse financial markets, instruments, and trading approaches to uncover insights and support data-driven strategy development.',
    ],
    lookFor: [
      'Skilled in Python or C++; exposure to MetaTrader 5 or machine learning libraries would be advantageous.',
      'Solid grasp of quantitative finance concepts, modelling techniques, and strategy development.',
      'Strong analytical thinking, clear communication, and the ability to manage projects and team priorities effectively.',
    ],
  },
  {
    slug: 'quant-researcher',
    title: 'Quant Researcher',
    department: 'quant',
    line: 'Develop statistical and ML models for trading, pricing and forecasting.',
    do: [
      'Develop statistical and machine learning models for trading, pricing, and financial forecasting.',
      'Collaborate with quantitative researchers and developers to build and improve data-driven solutions.',
      'Analyse model performance and identify alpha opportunities to enhance trading strategies.',
      'Research financial markets and quantitative methods to drive innovation.',
    ],
    lookFor: [
      'Deep understanding of quantitative modelling, strategies and methods, and financial instruments.',
      'Basic programming skills.',
      'Strong analytical, problem-solving, communication, and teamwork skills.',
    ],
  },
  {
    slug: 'quant-developer',
    title: 'Quant Developer',
    department: 'quant',
    line: 'Design, build and backtest quantitative trading algorithms.',
    do: [
      'Design, develop, and backtest quantitative algorithms using statistical and machine learning models for trading, pricing, and financial forecasting.',
      'Leverage programming libraries and quantitative frameworks to optimise model accuracy, strategy performance, and execution efficiency.',
      'Collaborate closely with quantitative researchers and developers to refine research ideas and deploy them into production-ready solutions.',
    ],
    lookFor: [
      'Proficiency in Python or C++; experience with MetaTrader 5, algorithmic trading tools, or machine learning frameworks is an advantage.',
      'Good understanding of quantitative modelling techniques, trading strategies, and financial markets.',
      'Strong analytical, problem-solving, communication, and teamwork skills.',
    ],
  },
  {
    slug: 'publicity-lead',
    title: 'Publicity Lead',
    department: 'external-relations',
    line: "Lead the society's publicity across digital and on-campus channels.",
    do: [
      "Plan and roll out publicity efforts across digital platforms and on-campus channels to strengthen NUS Fintech Society's presence.",
      "Produce engaging graphics, captions, and content that capture the society's brand, voice, and values.",
      'Collaborate with different departments to promote events and initiatives while ensuring a consistent and polished public image.',
    ],
    lookFor: [
      'Familiarity with design tools (e.g. Canva, Procreate, Adobe Illustrator, or Photoshop).',
      'Strong sense of visual design, branding, and written communication.',
      'Creative, responsible, and attentive to detail.',
      'Prior experience in publicity, content creation, branding, or campaign planning would be a plus.',
    ],
  },
  {
    slug: 'business-development-lead',
    title: 'Business Development Lead',
    department: 'external-relations',
    line: 'Find partnerships, sponsorships and funding for the society.',
    do: [
      'Identify, build, and nurture meaningful partnerships with external organisations and stakeholders.',
      'Work with internal teams to understand sponsorship and collaboration needs, and develop suitable proposals for potential partners.',
      'Explore new opportunities for collaborations, sponsorships, and funding to support events, projects, and long-term growth.',
    ],
    lookFor: [
      'Strong communication, interpersonal, and relationship-building skills.',
      'Interest in business development, partnerships, strategy, or stakeholder management.',
      'Independent, proactive, and confident in taking ownership of external-facing work.',
      'Prior experience in sponsorships, fundraising, corporate communications, or partnership work would be a plus.',
    ],
  },
  {
    slug: 'publicity-executive',
    title: 'Publicity Executive',
    department: 'external-relations',
    line: 'Plan campaigns and produce graphics and content for the society.',
    do: [
      "Plan and execute publicity campaigns across digital and physical channels to raise the society's visibility.",
      "Produce engaging graphics and content that align with the society's brand identity and core values.",
      'Work with other departments to promote initiatives, ensure consistent branding, and expand digital reach.',
    ],
    lookFor: [
      'Proficiency in design tools (e.g., Canva, Procreate, Adobe Illustrator, or Photoshop).',
      'Strong visual and written communication skills.',
      'Familiarity with social media platforms and current digital trends.',
      'Creative, self-motivated, and detail-oriented mindset.',
      'Prior experience in branding, content creation, or campaign planning is advantageous.',
    ],
  },
  {
    slug: 'business-development-executive',
    title: 'Business Development Executive',
    department: 'external-relations',
    line: 'Look after partnerships and pitch sponsorships to new partners.',
    do: [
      'Cultivate and sustain existing partnerships with external stakeholders to advance society initiatives.',
      'Collaborate with internal teams to identify sponsorship needs, pitch tailored opportunities, and ensure partner value is delivered.',
      'Discover new collaboration channels and bolster fundraising efforts to support events, projects, and sustainable growth for the society.',
    ],
    lookFor: [
      'Strong communication and interpersonal skills.',
      'Confidence in conducting outreach and establishing strategic partnerships.',
      'Genuine interest in business strategy and stakeholder engagement.',
      'Prior experience in sponsorship, fundraising, or corporate communications is a bonus.',
      'Ability to work autonomously and demonstrate initiative in external-facing engagements.',
    ],
  },
  {
    slug: 'internal-director',
    title: 'Internal Director',
    department: 'internal-affairs',
    line: 'Oversee the Internal Affairs leads and executives and keep operations running smoothly.',
    do: [
      'Oversee Internal Affairs leads and executives.',
      'Coordinate across multiple stakeholders.',
      'Manage programme timelines, logistics, and planning processes.',
      'Create and run exciting projects and collaborations with external parties in the space of fintech.',
      'Ensure smooth internal operations and clear communication across departments.',
    ],
    lookFor: [
      'Prior leadership or project management experience preferred.',
      'Reliable, diligent, and organised.',
      'Proactive in solving problems and following up on tasks.',
      'Strong communication and stakeholder management skills.',
      'Able to manage timelines and coordinate multiple moving parts.',
    ],
  },
  {
    slug: 'finance-lead',
    title: 'Finance Lead',
    department: 'internal-affairs',
    line: "Manage the society's budget and track spending across events.",
    do: [
      "Manage the organisation's budget through documentation for events and operations.",
      'Track expenses and ensure efficient allocation of resources.',
      'Ensure financial transparency and accountability across all events.',
      'Provide on-the-ground support during events, assisting with tasks as needed.',
    ],
    lookFor: [
      'High level of integrity and responsibility.',
      'Strong attention to detail and comfort working with numbers.',
      'Organised and able to meet deadlines (e.g. reimbursement processing, report submission).',
      'Some experience or interest in Excel/Google Sheets and basic accounting/bookkeeping.',
    ],
  },
  {
    slug: 'logistics-lead',
    title: 'Logistics Lead',
    department: 'internal-affairs',
    line: 'Plan the logistics for every event, from venue booking to on-site support.',
    do: [
      'Ensure smooth planning and execution of events (e.g. venue booking, equipment management, on-the-ground coordination).',
      'Liaise with school facilities/booking systems and external vendors.',
      'Prepare logistics checklists for each event and assist in planning for all workshops.',
      'Support event operations on-site, helping out across various tasks as needed.',
    ],
    lookFor: [
      'Strong organisational and multitasking skills.',
      'Able to proactively problem-solve under time pressure.',
      'Good communication and coordination skills.',
      'Some experience or interest in logistics and event planning.',
    ],
  },
  {
    slug: 'project-management-executive',
    title: 'Project Management Executive',
    department: 'internal-affairs',
    line: 'Plan and run flagship events, including the NUS Fintech Summit.',
    do: [
      'Plan and execute flagship events for NUS Fintech Society, including the annual NUS Fintech Summit.',
      'Collaborate with internal committees, sponsors, and external partners to deliver engaging and high-impact initiatives.',
      'Organise seminars, workshops, networking sessions, and other activities to promote fintech awareness within the NUS community.',
      'Gain hands-on experience in event planning, cross-functional collaboration, and stakeholder management.',
    ],
    lookFor: [
      'Prior experience in project management and event planning is preferred.',
      'Strong organisational and time management skills.',
      'Excellent communication and interpersonal skills for working with diverse stakeholders.',
      'Proactive and with the ability to solve problems and perform well under pressure.',
    ],
  },
];

export const getRole = (slug: string) => roles.find((r) => r.slug === slug);

/** One FAQ for the whole intake. */
export const joinFaq: Faq[] = [
  'How much time does it take?',
  'When and where do we meet?',
  'What is the interview like?',
  'How many people do you take in?',
  'Do I need experience?',
  'Can I join more than one department?',
  'Do you support students starting a fintech company?',
  'How is this different from other tech clubs at NUS?',
].map((q) => ({ q, a: '[Answer TBC with the directors.]' }));

const operationsFaq: Faq[] = [
  {
    q: 'Can I learn from the technology departments too?',
    a: "Yes. You can attend our workshops and talks, and sit in on some of the technology departments' training sessions.",
  },
];

/** Department-specific questions, shown on that department's role pages. */
export const departmentFaq: Partial<Record<DepartmentSlug, Faq[]>> = {
  blockchain: [
    {
      q: "I'm interested in cryptocurrencies, less in how blockchain works. Is this the right place for me?",
      a: "Yes. Cryptocurrencies are the biggest use of blockchain, so they're covered, but they aren't the department's main focus. Our research has looked at exchange reports, for example. You'll also meet other members who share the interest.",
    },
  ],
  'machine-learning': [{ q: 'Do I need to have taken CS2040 or CS1010S?', a: "No, it isn't a requirement." }],
  'external-relations': operationsFaq,
  'internal-affairs': operationsFaq,
};
