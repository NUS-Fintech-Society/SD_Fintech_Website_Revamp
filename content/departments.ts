import type { Photo } from '@/content/events';
// One photo per department in public/images/departments/<slug>.jpg, reused on the index and the department page.
import blockchainPhoto from '@/public/images/departments/blockchain.jpg';
import externalRelationsPhoto from '@/public/images/departments/external-relations.jpg';
import internalAffairsPhoto from '@/public/images/departments/internal-affairs.jpg';
import machineLearningPhoto from '@/public/images/departments/machine-learning.jpg';
import quantPhoto from '@/public/images/departments/quant.jpg';

export type DepartmentSlug = 'blockchain' | 'machine-learning' | 'quant' | 'external-relations' | 'internal-affairs';

export type Department = {
  slug: DepartmentSlug;
  name: string;
  wing: 'Technical' | 'Operations';
  /** One sentence: the index tile, the page lead and the meta description. */
  lead: string;
  about: string[];
  photo: Photo;
};

export type Project = {
  title: string;
  department: DepartmentSlug;
  /** Academic year, e.g. "2025/26". Current vs Past is computed from it. */
  ay: string;
  summary: string;
  /** Partner name, shown as text. */
  partner?: string;
  link?: { label: string; url: string };
};

/** In the site-wide department order. */
export const departments: Department[] = [
  {
    slug: 'blockchain',
    name: 'Blockchain',
    wing: 'Technical',
    lead: 'Hands-on blockchain work: research, industry projects and hackathons.',
    about: [
      'The Blockchain department explores how blockchain and decentralised technologies can be applied to real-world problems.',
      'Members gain hands-on experience through research, industry projects and hackathons, working on areas such as smart contracts, digital assets and decentralised applications.',
      'The department ultimately aims to build a strong community of blockchain enthusiasts within NUS.',
    ],
    photo: { src: blockchainPhoto, alt: 'Illustration of linked blocks of data' },
  },
  {
    slug: 'machine-learning',
    name: 'Machine Learning',
    wing: 'Technical',
    lead: 'Hands-on AI projects for finance, from credit risk to investment research.',
    about: [
      'The Machine Learning department explores how AI and data-driven methods can be used to address real-world financial and technology problems.',
      'Through hands-on projects, members develop practical experience in areas such as machine learning, NLP, model evaluation, decision systems and simulation, with applications spanning treasury, credit risk, investment research and digital markets.',
    ],
    photo: { src: machineLearningPhoto, alt: 'Illustration of a head made of circuits beside data charts' },
  },
  {
    slug: 'quant',
    name: 'Quant',
    wing: 'Technical',
    lead: 'Quantitative methods for finance, through research and team projects.',
    about: [
      'The Quant department brings together students interested in using mathematics, statistics, programming and financial knowledge to solve problems in finance.',
      'Members explore quantitative analysis and develop practical solutions through research and collaborative projects, building both their technical capabilities and understanding of how quantitative methods are used within the financial industry.',
    ],
    photo: { src: quantPhoto, alt: 'Members and guests at a WorldQuant BRAIN session, posing for a group photo' },
  },
  {
    slug: 'external-relations',
    name: 'External Relations',
    wing: 'Operations',
    lead: 'Partnerships and publicity that connect us with the fintech industry.',
    about: [
      'The External Relations department connects NUS Fintech Society with the wider NUS community and fintech industry.',
      "Through business development and publicity, members engage external stakeholders, develop industry partnerships and strengthen the society's presence and outreach.",
      'The department also supports initiatives and collaborations that expose students to the broader fintech ecosystem.',
    ],
    photo: { src: externalRelationsPhoto, alt: 'Two people in suits shaking hands over a desk' },
  },
  {
    slug: 'internal-affairs',
    name: 'Internal Affairs',
    wing: 'Operations',
    lead: 'The people, programmes and operations behind the society.',
    about: [
      'The Internal Affairs department focuses on the people and operations behind NUS Fintech Society.',
      "Through areas such as project management, talent management, finance and community development, the department supports the society's activities while creating programmes and opportunities for members to connect, develop their skills and deepen their interest in fintech.",
    ],
    photo: { src: internalAffairsPhoto, alt: 'Hands sketching business charts beside a laptop' },
  },
];

// From AY2026/27 onwards; earlier projects aren't listed.
export const projects: Project[] = [];

export const getDepartment = (slug: string) => departments.find((d) => d.slug === slug);
