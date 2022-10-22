export interface FeaturedProjects {
  img: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
}

interface PartnersImage {
  alt: string;
  src: string;
  url: string;
}

interface Department {
  coverImage: {
    src: string;
    alt: string;
  };
  name: string;
  path: string;
  wingType: WingType,
  cardDescription: string;
  popupDescription: string;
  rolesOffered: string[];
  learnMoreLink: string;
  roleInfoLink: string;
  applyNowLink: string;
  faq: {
    question: string;
    answer: string;
  }[];
}

export interface HomeData {
  partnersImages: PartnersImage[];
  departments: Department[];
  featuredProjects: FeaturedProjects[];
}
