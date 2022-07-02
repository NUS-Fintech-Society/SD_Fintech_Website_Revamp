interface Department {
  coverImage: {
    src: string;
    alt: string;
  };
  name: string;
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

export default interface RecruitmentData {
  departments: Department[];
}
