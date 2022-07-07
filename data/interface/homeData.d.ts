export interface HomeData {
  partnersImages: PartnersImage[];
  departments: Department[];
}

interface PartnersImage {
  alt: string;
  src: string;
}

interface Department {
  coverImage: {
    src: string;
    alt: string;
  };
  name: string;
  path: string;
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
