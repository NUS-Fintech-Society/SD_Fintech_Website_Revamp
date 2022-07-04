export interface HomeData {
  partnersImages: PartnersImage[];
  journey: JourneyYear[];
  departments: Department[];
}

interface JourneyYear {
  image: {
    src: string;
    alt: string;
  };
  academicYear: string;
  description: string;
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